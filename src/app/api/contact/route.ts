import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

// In-memory sliding rate limiter per IP (max 5 requests per 60 seconds)
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || record.expiresAt < now) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + 60_000 })
    return false
  }

  if (record.count >= 5) {
    return true
  }

  record.count += 1
  return false
}

// Clean up stale rate limit entries periodically
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.expiresAt < now) {
        rateLimitMap.delete(key)
      }
    }
  }, 120_000)
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const ContactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name cannot exceed 100 characters'),
  email: z.string().trim().email('Invalid email address').max(100).optional().or(z.literal('')),
  checkIn: z.string().max(20).optional().or(z.literal('')),
  checkOut: z.string().max(20).optional().or(z.literal('')),
  guests: z.union([z.number(), z.string()]).transform((v) => {
    const n = Number(v)
    return isNaN(n) || n < 1 ? 20 : Math.min(n, 40)
  }),
  occasion: z.string().max(100).default('General Vacation'),
  message: z.string().max(1000, 'Message cannot exceed 1000 characters').optional().or(z.literal('')),
})

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown-ip'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please wait a moment before trying again.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    const parsed = ContactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { name, email, checkIn, checkOut, guests, occasion, message } = parsed.data

    // If Resend is configured, send sanitized email notification
    if (resend) {
      try {
        const safeName = escapeHtml(name)
        const safeEmail = email ? escapeHtml(email) : 'Not provided'
        const safeCheckIn = checkIn ? escapeHtml(checkIn) : 'Not specified'
        const safeCheckOut = checkOut ? escapeHtml(checkOut) : 'Not specified'
        const safeOccasion = escapeHtml(occasion)
        const safeMessage = message ? escapeHtml(message) : 'None'

        await resend.emails.send({
          from: 'Santiagos Inquiries <inquiries@santiagosresort.com>',
          to: ['santiagosresort@gmail.com'],
          subject: `New Direct Inquiry: ${safeName} (${guests} Guests • ${safeOccasion})`,
          html: `
            <h2>New Direct Booking Inquiry</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Check-in:</strong> ${safeCheckIn}</p>
            <p><strong>Check-out:</strong> ${safeCheckOut}</p>
            <p><strong>Guests:</strong> ${guests}</p>
            <p><strong>Occasion:</strong> ${safeOccasion}</p>
            <p><strong>Message:</strong> ${safeMessage}</p>
          `,
        })
      } catch (emailError) {
        console.error('Failed to send Resend email:', emailError)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully. Direct WhatsApp channel active.',
      data: { name: escapeHtml(name), guests, occasion: escapeHtml(occasion) },
    })
  } catch (err: any) {
    console.error('Error processing inquiry:', err)
    return NextResponse.json(
      { success: false, error: 'Internal server error processing inquiry' },
      { status: 500 }
    )
  }
}
