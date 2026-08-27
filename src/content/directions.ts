export interface DirectionStep {
  step: number
  instruction: string
  detail: string
  landmark?: string
}

export const DRIVING_STEPS: DirectionStep[] = [
  {
    step: 1,
    instruction: 'Start at Twin Lakes Tagaytay',
    detail: 'Twin Lakes Tagaytay serves as your primary landmark. The resort is approximately 15 minutes away from this point.',
    landmark: 'Twin Lakes Tagaytay',
  },
  {
    step: 2,
    instruction: 'Head West on Tagaytay-Nasugbu Highway',
    detail: 'Proceed along the Tagaytay-Nasugbu / Tagaytay-Laurel Highway heading towards Amuyong-Kaytitinga Road.',
  },
  {
    step: 3,
    instruction: 'Turn Right onto Amuyong-Kaytitinga Road',
    detail: 'Look for the junction into Amuyong-Kaytitinga Road and make a smooth right turn.',
    landmark: 'Amuyong Junction',
  },
  {
    step: 4,
    instruction: 'Turn Left onto Kaytitinga-Magallanes Road',
    detail: 'Follow the road until the intersection with Kaytitinga-Magallanes Road, then turn left.',
  },
  {
    step: 5,
    instruction: 'Turn Right at 7-Eleven Kaytitinga',
    detail: 'You will pass the Alfamart milestone on Kaytitinga-Magallanes Rd. Turn right immediately at the 7-Eleven convenience store.',
    landmark: '7-Eleven & Alfamart Kaytitinga',
  },
  {
    step: 6,
    instruction: 'Turn Right at the Cell Repair Shop',
    detail: 'Turn right into the small access street beside the Cell Repair Shop leading directly toward the resort gate.',
    landmark: 'Cell Repair Shop',
  },
  {
    step: 7,
    instruction: 'Arrive at Santiagos Private Resort Gate',
    detail: 'You have arrived! Look for the private gated container resort compound in Kaytitinga II, Alfonso, Cavite 4123.',
    landmark: 'Santiagos Resort Gate',
  },
]

export const TRANSIT_INFO = {
  title: 'Public Commute Route from Metro Manila',
  steps: [
    'Board a Tagaytay/Nasugbu-bound bus from PITX or Buendia Terminal in Metro Manila (approx. 1.5-2 hours).',
    'Request the bus conductor to drop you off at Twin Lakes Tagaytay or the Amuyong junction.',
    'Hire a local tricycle at the junction and instruct the driver to take you directly to "Santiagos Resort, Kaytitinga II, Alfonso".',
  ],
}
