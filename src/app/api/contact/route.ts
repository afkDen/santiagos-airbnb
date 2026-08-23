import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const ContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  checkIn: z.string().optional().or(z.literal('')),
  checkOut: z.string().optional().or(z.literal('')),
  guests: z.union([z.number(), z.string()]).transform((v) => Number(v) || 20),
  occasion: z.string().default('General Vacation'),
  message: z.string().optional().or(z.literal('')),
})

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = ContactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { name, email, checkIn, checkOut, guests, occasion, message } = parsed.data

    // If Resend is configured, send email notification
    if (resend) {
      try {
        await resend.emails.send({
          from: 'Santiagos Inquiries <inquiries@santiagosresort.com>',
          to: ['santiagosresort@gmail.com'],
          subject: `New Direct Inquiry: ${name} (${guests} Guests • ${occasion})`,
          html: `
            <h2>New Direct Booking Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Check-in:</strong> ${checkIn || 'Not specified'}</p>
            <p><strong>Check-out:</strong> ${checkOut || 'Not specified'}</p>
            <p><strong>Guests:</strong> ${guests}</p>
            <p><strong>Occasion:</strong> ${occasion}</p>
            <p><strong>Message:</strong> ${message || 'None'}</p>
          `,
        })
      } catch (emailError) {
        console.error('Failed to send Resend email:', emailError)
        // Non-blocking for client response
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully. Direct WhatsApp channel active.',
      data: { name, guests, occasion },
    })
  } catch (err: any) {
    console.error('Error processing inquiry:', err)
    return NextResponse.json(
      { success: false, error: 'Internal server error processing inquiry' },
      { status: 500 }
    )
  }
}
