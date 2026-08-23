# 06 — Booking & Inquiry Flow

This is the most business-critical file in the set — get this right and the
redesign directly helps the resort make money; get it wrong (broken
WhatsApp links, wrong pricing math) and it actively costs them bookings.

## The model: inquiry-based, not real-time booking

There is **no payment processor and no live availability calendar** in the
source data — don't add one unless explicitly asked. The resort takes
bookings by direct message/call, confirms availability manually, and
(presumably) arranges deposit/payment off-platform. The website's job stops
at "get a qualified, informed lead into a conversation" — building a real
booking-and-payment engine would be scope creep on what this business
actually needs.

## Primary conversion path: WhatsApp

`SITE_ASSETS_AND_DESIGN_SYSTEM.md` §15 gives the base pattern:
```
https://wa.me/639228305320?text=Hi!+Im+interested+in+booking+Santiagos+Resort+Tagaytay.
```

**Upgrade this for the rebuild**: generate the message dynamically from
whatever the visitor already told the site (via the `RateEstimator` or the
contact form), so they land in WhatsApp with real context pre-filled
instead of a generic greeting:

```ts
function buildWhatsAppLink({
  checkIn,
  checkOut,
  guestCount,
}: {
  checkIn?: Date
  checkOut?: Date
  guestCount?: number
}) {
  const base = 'https://wa.me/639228305320'
  let text = "Hi! I'm interested in booking Santiagos Resort Tagaytay."
  if (checkIn && checkOut) {
    text += ` We're looking at ${format(checkIn, 'MMM d')}–${format(checkOut, 'MMM d, yyyy')}`
  }
  if (guestCount) {
    text += ` for around ${guestCount} guests.`
  }
  return `${base}?text=${encodeURIComponent(text)}`
}
```

This is the link the `RateEstimator`'s "Inquire about these dates" button
and the `StickyContactBar`'s WhatsApp icon should both use — pull whatever
state the visitor has already entered into the message rather than sending
them in cold.

## Secondary channels (all from §15, keep exactly as documented)

- **Second WhatsApp/phone number**: `0917 800 5320` — some visitors will prefer this carrier; show both, don't drop one in the redesign.
- **Facebook**: `https://www.facebook.com/people/Santiagos-Private-Resort/61576644491245/` — Messenger is a real, commonly-preferred channel in the Philippines; keep it visible, not buried.
- **Instagram**: `https://www.instagram.com/santiagos.to`
- **Direct call**: both numbers as `tel:` links (`tel:+639178005320`, `tel:+639228305320`) — critical for mobile visitors who'd rather just call.
- **Airbnb**: `https://www.airbnb.com/rooms/1643466979772957530` — keep as an explicit secondary path, but the §4 disclaimer ("pricing may vary between Airbnb and direct bookings") needs to appear anywhere this link is offered alongside a direct-booking price, so visitors aren't confused by a mismatch.

## The rate estimator's actual logic

Implement `calculateRate()` exactly as specified in §4 — don't approximate
or simplify it, the tiering logic is real business logic, not a rough
estimate:

```ts
function calculateRate(checkInDate: Date, checkOutDate: Date, guestCount: number): number {
  const nights = Math.round((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
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
```

Notes for implementing this in `RateEstimator`:
- This is a **weekday-of-check-in-only** rule (per the source logic) — a
  multi-night stay spanning both weekday and weekend nights still prices
  off the check-in day's rate. That's a real quirk of the business logic,
  not a bug to "fix" in the rebuild — if it's actually wrong, that's a
  question for the resort owner, not something to silently change.
- Guest count > 20 triggers the scaled tier automatically in this function
  — the separate "+₱1,000/head over 20" line in §4's table is a *different*,
  simpler mental model the resort uses in conversation/marketing copy. Use
  the tiered `calculateRate()` function for the actual estimator output
  (it's the more precise, code-derived logic), but don't be surprised if a
  quick manual gut-check against the simpler "+₱1,000/head" framing looks
  slightly different — flag this discrepancy to whoever owns the business
  logic rather than picking one silently.
- **Always render the exact disclaimer text from §4** directly next to the
  calculated number: *"Prices are subject to change without prior notice.
  Base rates apply to direct bookings. Rates not applicable on public
  holidays. Pricing may vary between Airbnb and direct bookings."* This is
  the one place on the site where getting the wording slightly wrong has
  real consequences for the business.
- Children ≤3 y/o (max 3 free) aren't part of the `guestCount` math — make
  sure the estimator's guest-count input either excludes them by
  instruction ("guests 4+ or adults") or has a separate small-child field
  that doesn't feed into the pricing tier.

## Contact/inquiry form

For visitors who'd rather fill a form than open WhatsApp cold: name, email
(optional), preferred dates, guest count, occasion type (tie into the
`/occasions` framing from file 03), message. On submit:
1. Primary: build and open the WhatsApp deep link above with the form's
   data folded into the message (this is likely the higher-converting path
   for this business, given the channels they already lean on).
2. Secondary: also send a copy via the email route in file 08, so the
   resort has a record even if the visitor doesn't complete the WhatsApp
   handoff.

## What NOT to build

- No payment collection, no deposit handling, no calendar/availability
  system — none of this exists in the source data, and adding it is a real
  scope/liability increase (handling money, guaranteeing availability) that
  needs an explicit, separate conversation with the resort owner, not
  something to default into during a visual rebuild.
- No user accounts/login — there's no reason a visitor needs one for an
  inquiry-based flow like this.
