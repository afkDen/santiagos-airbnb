/**
 * Santiagos Resort Nightly Pricing Logic
 * As specified in SITE_ASSETS_AND_DESIGN_SYSTEM.md §4 and 06-booking-inquiry-flow.md
 * 
 * Note on business logic quirk:
 * - isWeekend checks the checkInDate day of the week (0 = Sun, 5 = Fri, 6 = Sat).
 * - Multi-night stays price off the check-in day's base rate.
 */
export function calculateRate(checkInDate: Date, checkOutDate: Date, guestCount: number): number {
  const nights = Math.max(1, Math.round((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)))
  const dayOfWeek = checkInDate.getDay() // 0 = Sun, 5 = Fri, 6 = Sat
  const isWeekend = (dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6)

  let baseNightly = 0
  if (guestCount > 30) {
    baseNightly = isWeekend ? 55000 : 45000
  } else if (guestCount > 20) {
    baseNightly = isWeekend ? 45000 : 35000
  } else {
    baseNightly = isWeekend ? 35000 : 25000
  }

  return baseNightly * nights
}

export const MANDATORY_PRICE_DISCLAIMER =
  '* Prices are subject to change without prior notice. Base rates apply to direct bookings. Rates not applicable on public holidays. Pricing may vary between Airbnb and direct bookings.'
