import { format } from 'date-fns'

export function buildWhatsAppLink({
  checkIn,
  checkOut,
  guestCount,
  occasion,
}: {
  checkIn?: Date
  checkOut?: Date
  guestCount?: number
  occasion?: string
}) {
  const base = 'https://wa.me/639228305320'
  let text = "Hi! I'm interested in booking Santiagos Resort Tagaytay."
  
  if (checkIn && checkOut) {
    text += ` We're looking at ${format(checkIn, 'MMM d')}–${format(checkOut, 'MMM d, yyyy')}`
  }
  if (guestCount) {
    text += ` for around ${guestCount} guests.`
  }
  if (occasion) {
    text += ` We are celebrating a ${occasion}.`
  }
  
  return `${base}?text=${encodeURIComponent(text)}`
}
