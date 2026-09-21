export interface OccasionPackage {
  id: string
  title: string
  subtitle: string
  tagline: string
  description: string
  highlights: string[]
  recommendedAmenities: string[]
  imageKey: string
}

export const OCCASIONS_DATA: OccasionPackage[] = [
  {
    id: 'birthday',
    title: 'Birthday Parties & Milestones',
    subtitle: '18th Debuts, 25th Milestones, 30th & 50th Celebrations',
    tagline: 'The Ultimate Photogenic Backdrop for Your Big Day',
    description:
      'Make your birthday celebration unforgettable. From afternoon poolside cocktails to evening dinner under the illuminated gold "Santiago\'s" sign, followed by late-night videoke with zero curfew.',
    highlights: [
      'Signature photo wall with illuminated gold neon signage for memorable portraits',
      'Daytime pool party transitioning into night swimming under cool mountain air',
      'Outdoor and indoor dining setup for cake cutting, buffets, and celebratory toasts',
      'Dedicated air-conditioned videoke lounge with thousands of songs',
    ],
    recommendedAmenities: ['Private Swimming Pool', 'Videoke Lounge', 'Dining & Gold Sign Wall', 'Bonfire Pit Area'],
    imageKey: 'din3',
  },
  {
    id: 'barkada',
    title: 'Barkada Trips & Getaways',
    subtitle: 'College Reunions, Weekend Escapes, Gaming Tournaments',
    tagline: 'Play Hard, Chill Hard, Zero Shared Spaces',
    description:
      'Engineered for groups who want real entertainment. Compete on the Kangaroo billiards table, run classic retro arcade tournaments, shootout on the basketball half-court, and gather around the sunken bonfire pit.',
    highlights: [
      'Kangaroo billiards table tournaments right next to exposed brick walls',
      'Multi-cabinet retro arcade gaming battles with hundreds of classic games',
      'Enclosed half-court basketball shootouts and 3-on-3 games',
      'Nighttime sunken bonfire hangout under the clear Tagaytay night sky',
    ],
    recommendedAmenities: ['Billiards Room', 'Arcade Gaming', 'Basketball Half-Court', 'Bonfire Pit Area'],
    imageKey: 'bill2',
  },
  {
    id: 'family',
    title: 'Family Reunions & Multi-Gen Stays',
    subtitle: 'Clan Gatherings, Anniversaries, Holiday Getaways',
    tagline: 'Something Special for Every Generation',
    description:
      'Host the entire extended family in comfort. Grandparents can relax on the veranda deck, cousins battle in the arcade room, parents sing in the videoke lounge, and everyone enjoys meals prepared in the full kitchen.',
    highlights: [
      'Multi-generational entertainment: Arcades for kids, videoke & pool for adults, veranda for elders',
      'Full kitchen with heavy-duty gas cooktops to prepare heirloom family recipes without corkage',
      '8 full bathrooms eliminating morning queues for families with 20 to 40 members',
      'Private VIP 1 & VIP 2 rooms with double beds for elders or parents + 9 bunk beds for cousins and kids',
    ],
    recommendedAmenities: ['Full Kitchen', 'Outdoor Veranda & Chill Deck', 'Videoke Lounge', 'Private Swimming Pool'],
    imageKey: 'out1',
  },
  {
    id: 'corporate',
    title: 'Corporate Outings & Team Building',
    subtitle: 'Strategic Planning, Department Outings, Company Retreats',
    tagline: '100% Private Compound with Zero Outside Distractions',
    description:
      'Boost team cohesion in an inspiring highland venue. Host workshops, team relay games by the pool, sports shootouts, and strategic evening fireside chats with high-speed Wi-Fi throughout.',
    highlights: [
      'Exclusive compound reservation guaranteeing complete company privacy and confidentiality',
      'Poolside relay races, basketball tournaments, and group games',
      'Evening team alignment and fireside strategy sessions around the sunken bonfire circle',
      'High-speed Wi-Fi and flexible work & lounge zones across indoor and outdoor spaces',
    ],
    recommendedAmenities: ['Basketball Half-Court', 'High-Speed Wi-Fi', 'Bonfire Pit Area', 'Private Swimming Pool'],
    imageKey: 'bbl1',
  },
]
