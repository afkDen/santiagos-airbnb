import { nextFriday, addDays, format, isFriday, isSaturday, isSunday } from 'date-fns'

/**
 * Computes upcoming weekend check-in (Friday) and check-out (Sunday) dates.
 * If today is already Friday, Saturday, or Sunday, defaults to the current weekend.
 */
export function getUpcomingWeekendDefaults() {
  const today = new Date()
  let checkIn: Date

  if (isFriday(today)) {
    checkIn = today
  } else if (isSaturday(today)) {
    checkIn = addDays(today, -1)
  } else if (isSunday(today)) {
    checkIn = addDays(today, -2)
  } else {
    checkIn = nextFriday(today)
  }

  const checkOut = addDays(checkIn, 2)

  return {
    checkInString: format(checkIn, 'yyyy-MM-dd'),
    checkOutString: format(checkOut, 'yyyy-MM-dd'),
    checkInDate: checkIn,
    checkOutDate: checkOut,
  }
}
