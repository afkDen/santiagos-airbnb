export interface Testimonial {
  id: string
  name: string
  origin: string
  rating: number
  event: string
  date: string
  groupSize: string
  headline: string
  quote: string
  highlight: string
  verifiedStay: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Mark A.',
    origin: 'Metro Manila',
    rating: 5,
    event: 'Barkada Reunion & Overnight Stay',
    date: 'Recent Guest',
    groupSize: '28 Guests',
    headline: 'Plenty of space, zero bathroom queues, and endless entertainment',
    quote:
      'Santiagos Resort completely blew our expectations away! We were a group of 28 cousins and friends, and there was more than enough room for everyone to spread out comfortably. The Kangaroo billiards, pool with the waterfall, and the acoustic videoke kept us entertained until the early morning. Having 8 bathrooms meant nobody had to wait in line. 10/10 staycation!',
    highlight: '8 Bathrooms & Videoke Lounge',
    verifiedStay: true,
  },
  {
    id: 'review-2',
    name: 'Kyla C.',
    origin: 'Cavite',
    rating: 5,
    event: 'Milestone 25th Birthday Celebration',
    date: 'Recent Guest',
    groupSize: '32 Guests',
    headline: 'Magical container architecture and the gold signature neon wall',
    quote:
      'Celebrated my 25th birthday here and it was unforgettable. The solid acacia banquet table with the illuminated gold "Santiago\'s" neon sign made the absolute best backdrop for our cake cutting and photos. The zero corkage policy allowed us to bring all our favorite catering and drinks with no extra stress. Beautiful, photogenic, and extremely clean!',
    highlight: 'Acacia Dining & ₱0 Corkage',
    verifiedStay: true,
  },
  {
    id: 'review-3',
    name: 'Dave L.',
    origin: 'Quezon City',
    rating: 5,
    event: 'Corporate Department Team Retreat',
    date: 'Recent Guest',
    groupSize: '35 Team Members',
    headline: 'The ideal private compound for team bonding and highland relaxation',
    quote:
      'Booked the entire resort for our company engineering team outing. The half-court basketball ring was a huge hit for afternoon tournaments, the Wi-Fi was reliable for presentations, and gathering around the stone fire pit in the 18°C evening air was the perfect way to unwind. Exceptional hospitality from the staff and seamless direct communication on WhatsApp.',
    highlight: 'Compound Privacy & Bonfire Pit',
    verifiedStay: true,
  },
  {
    id: 'review-4',
    name: 'Camille R.',
    origin: 'Pasig City',
    rating: 5,
    event: 'Multi-Generational Family Gathering (50th Birthday)',
    date: 'Recent Guest',
    groupSize: '38 Family Members',
    headline: 'Perfect setup for elders and kids under one private roof',
    quote:
      'We hosted our mother\'s 50th milestone with 38 relatives. Our grandparents stayed comfortably in the ground-floor VIP Master Suites with private rainfall showers, while all the kids loved the bunk beds and arcade room. The mountain breeze in Alfonso was refreshing and Twin Lakes is only 15 minutes away.',
    highlight: 'VIP Master Suites & Bunk Pods',
    verifiedStay: true,
  },
]
