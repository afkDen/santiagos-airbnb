export interface PricingTier {
  headcount: string
  weekdayRate: number
  weekendRate: number
  notes: string
}

export const PRICING_TIERS: PricingTier[] = [
  {
    headcount: '1–20 Guests',
    weekdayRate: 25000,
    weekendRate: 35000,
    notes: 'Standard Base Rate (Entire Private Compound & All Amenities)',
  },
  {
    headcount: '21–30 Guests',
    weekdayRate: 35000,
    weekendRate: 45000,
    notes: 'Scaled Group Rate (+₱1,000/head over 20)',
  },
  {
    headcount: '31–40 Guests',
    weekdayRate: 45000,
    weekendRate: 55000,
    notes: 'Maximum Property Capacity Limit',
  },
]

export const PRICING_RULES = {
  childPolicy: 'Kids 3 years old and below: Maximum of 3 kids FREE (not counted in head fee)',
  extraHeadFee: '₱1,000 / head / night for headcount over 20 guests (up to 40 max)',
  checkInDays: {
    weekdays: 'Monday – Thursday (Non-Holidays)',
    weekends: 'Friday – Sunday & Holiday Eves',
  },
  inclusions: [
    'Exclusive private use of the entire gated resort compound (zero outside guests)',
    'Full access to private swimming pool',
    'Air-conditioned videoke lounge with commercial sound system',
    'Full-sized Kangaroo billiards pool table',
    'Retro multi-game arcade machines',
    'Enclosed basketball half-court',
    'Sunken outdoor circular bonfire pit area',
    'Fully equipped kitchen with heavy-duty cooktop & cookware (No corkage fees)',
    'Long glass dining table with illuminated gold signature wall',
    '8 full bathrooms with hot/cold showers (Zero queues)',
    'High-speed Wi-Fi & Smart TV streaming',
    'Free secure on-premises parking for 3+ vehicles',
  ],
}
