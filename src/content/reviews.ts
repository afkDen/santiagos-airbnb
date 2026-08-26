export interface Testimonial {
  id: string
  name: string
  platform: 'Airbnb' | 'Google'
  platformUrl: string
  rating: number
  date: string
  tenure?: string
  headline: string
  quote: string
  highlight: string
  verifiedStay: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-airbnb-1',
    name: 'Ma Rona',
    platform: 'Airbnb',
    platformUrl: 'https://www.airbnb.com/rooms/1643466979772957530',
    rating: 5,
    date: '3 weeks ago',
    tenure: '1 year on Airbnb',
    headline: 'Clean, comfortable, and exactly as described — the bonfire & marshmallows were a highlight!',
    quote:
      'Our group had a wonderful stay! The place was clean, comfortable, and exactly as described. We really enjoyed all the amenities—they were well-maintained and made our stay even more relaxing.\n\nA special thanks to our host Ms. Dianne, who was incredibly responsive and accommodating throughout our stay. We also appreciated the thoughtful welcome snacks, which made us feel right at home.\n\nOne of the highlights was the bonfire experience. The marshmallows provided were delicious and everyone in our group loved them! Overall, we had a fantastic time and would definitely recommend this place to anyone looking for a relaxing getaway. We would happily stay here again!',
    highlight: 'Bonfire S’mores & Host Ms. Dianne',
    verifiedStay: true,
  },
  {
    id: 'review-google-1',
    name: 'Robin Marcelo',
    platform: 'Google',
    platformUrl: 'https://www.google.com/maps/contrib/102571268417706022703?hl=en-US',
    rating: 5,
    date: '2 months ago',
    tenure: 'Google Local Guide',
    headline: 'A very solid place for large groups — free s’mores, water & ice dispenser, really worth the drive!',
    quote:
      'This is a very solid place for large groups! There’s plenty to do and the staff are very accommodating. They gave us free smores and chips!\n\nThe place is also equipped with plates and cups. They have a water and ice dispenser.\n\nReally worth the drive.',
    highlight: 'Large Groups & Free S’mores',
    verifiedStay: true,
  },
  {
    id: 'review-google-2',
    name: '1OF1 MNL',
    platform: 'Google',
    platformUrl: 'https://www.google.com/maps/contrib/112175994195946311046?hl=en-US',
    rating: 5,
    date: '4 months ago',
    tenure: 'Google Verified Review',
    headline: 'Best accommodation in Tagaytay! Highly recommended.',
    quote:
      'Best accommodation in Tagaytay! Highly recommended. Thank you Santiagos Resort Tagaytay.',
    highlight: 'Top Tagaytay Staycation',
    verifiedStay: true,
  },
  {
    id: 'review-airbnb-2',
    name: 'Ellen',
    platform: 'Airbnb',
    platformUrl: 'https://www.airbnb.com/rooms/1643466979772957530',
    rating: 5,
    date: 'May 2026',
    tenure: '10 years on Airbnb',
    headline: 'Amazing place — thank you so much Dianne for hosting us!',
    quote: 'Thank you so much, Dianne, for hosting us! Amazing place!',
    highlight: '10-Year Airbnb Superguest',
    verifiedStay: true,
  },
]
