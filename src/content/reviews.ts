export interface Testimonial {
  name: string
  origin: string
  rating: number
  event: string
  quote: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mark A.',
    origin: 'Manila',
    rating: 5,
    event: 'Group Getaway (28 Guests)',
    quote:
      'Santiago Resort exceeded our expectations! We were a group of 28, and there was plenty of space for everyone. The billiards, pool, and videoke kept us entertained all night. 10/10!',
  },
  {
    name: 'Kyla C.',
    origin: 'Cavite',
    rating: 5,
    event: '25th Birthday Celebration',
    quote:
      'Had my 25th birthday here and it was magical! The dining area with the gold signature sign is the perfect backdrop. Beautiful container resort, very photogenic, and extremely clean.',
  },
  {
    name: 'Dave L.',
    origin: 'Quezon City',
    rating: 5,
    event: 'Corporate Team Outing',
    quote:
      'Booked it for our corporate team outing. The basketball court was a huge hit, and the bonfire at night was a great place to chat and relax. Excellent hosts and very easy direct booking.',
  },
]
