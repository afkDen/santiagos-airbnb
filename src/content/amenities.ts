export interface Amenity {
  name: string
  category:
    | 'Water & Relaxation'
    | 'Entertainment'
    | 'Sports & Fitness'
    | 'Outdoor Gathering'
    | 'Dining & Cooking'
    | 'Accommodations'
    | 'Connectivity & Utilities'
  iconName: string
  description: string
  featured?: boolean
  imageKey?: string
  specs?: string[]
}

export const AMENITIES_CATALOG: Amenity[] = [
  // 1. Water & Relaxation
  {
    name: 'Private Swimming Pool',
    category: 'Water & Relaxation',
    iconName: 'Waves',
    description:
      'Pristine private pool with stone cascading waterfall, underwater evening illumination, and zero stranger access.',
    featured: true,
    imageKey: 'pool1',
    specs: ['Depth: 4ft to 5.5ft gradual', 'Underwater evening LED lighting', 'Cascading rock waterfall feature', 'Poolside sun loungers & umbrellas'],
  },
  {
    name: 'Cascading Stone Waterfall',
    category: 'Water & Relaxation',
    iconName: 'Waves',
    description:
      'Continuous running water wall feature creating natural acoustic privacy and a refreshing atmosphere.',
    imageKey: 'pool4',
    specs: ['Natural stone wall finish', 'Continuous aerating water circulation'],
  },
  {
    name: 'Outdoor Poolside Shower & Garden Bath',
    category: 'Water & Relaxation',
    iconName: 'Waves',
    description:
      'Direct outdoor garden shower and full bathroom so swimmers can rinse off before entering living quarters.',
    imageKey: 'bat7',
    specs: ['Direct pool deck access', 'Full toilet and shower facilities'],
  },

  // 2. Entertainment
  {
    name: 'Acoustic Videoke Lounge',
    category: 'Entertainment',
    iconName: 'Mic',
    description:
      'Air-conditioned entertainment lounge with classic music poster gallery, high-power sound system, and zero curfew.',
    featured: true,
    imageKey: 'kara1',
    specs: ['Digital songbook with latest OPM & international hits', '2 wireless microphones', 'Large LED screen', 'Comfortable L-shaped sectional couch'],
  },
  {
    name: 'Full-Size Kangaroo Billiards Table',
    category: 'Entertainment',
    iconName: 'CircleDot',
    description:
      'Authentic Kangaroo pool table situated against rustic exposed brick with professional cue sticks and racks.',
    featured: true,
    imageKey: 'bill2',
    specs: ['Full regulation ball set', '4 cue sticks + bridge cue', 'Chalk and triangle included', 'Pendant overhead table illumination'],
  },
  {
    name: 'Retro Multi-Game Arcade Cabinets',
    category: 'Entertainment',
    iconName: 'Gamepad2',
    description:
      'Custom standalone arcade cabinets loaded with classic 90s fighting and cooperative tournament games.',
    featured: true,
    imageKey: 'arc1',
    specs: ['1000+ retro arcade classics', '2-player dual joystick controls', 'Free play enabled — zero tokens required'],
  },
  {
    name: 'Smart TVs with Streaming Apps',
    category: 'Entertainment',
    iconName: 'Tv',
    description:
      'Flat-screen smart televisions with YouTube, Netflix, and screen mirroring capability for group movie nights.',
    imageKey: 'lou1',
    specs: ['High-speed Wi-Fi connected', 'HDMI ports for laptops / Nintendo Switch'],
  },

  // 3. Sports & Fitness
  {
    name: 'Regulation Basketball Half-Court',
    category: 'Sports & Fitness',
    iconName: 'Dribbble',
    description:
      'Heavy-duty basketball half-court with regulation rim and night floodlights for evening pickup games.',
    featured: true,
    imageKey: 'bbl1',
    specs: ['Regulation height steel rim', 'Outdoor night court floodlights', 'Official size 7 basketballs provided'],
  },
  {
    name: 'Fitness & Workout Bench Area',
    category: 'Sports & Fitness',
    iconName: 'Dumbbell',
    description:
      'Dedicated fitness corner equipped with multi-position adjustable weight benches and dumbbell sets.',
    imageKey: 'gym1',
    specs: ['Adjustable workout bench', 'Free weights & dumbbells', 'Rubberized gym flooring'],
  },

  // 4. Outdoor Gathering
  {
    name: 'Sunken Circular Bonfire Pit',
    category: 'Outdoor Gathering',
    iconName: 'Flame',
    description:
      'Sunken stone fire pit surrounded by bench seating for campfire chats, marshmallow roasting, and acoustic jamming.',
    featured: true,
    imageKey: 'fir1',
    specs: ['Sunken circular stone perimeter', 'Built-in bench seating', 'Firewood starter bundle available', 'Open highland sky stargazing'],
  },
  {
    name: 'Covered Al Fresco 2nd-Floor View Verandas',
    category: 'Outdoor Gathering',
    iconName: 'Trees',
    description:
      'Spacious upper and lower container decks with outdoor seating to enjoy the breezy Alfonso highland climate.',
    imageKey: 'gal_out1',
    specs: ['Covered all-weather roof canopy', 'Rattan patio tables and chairs', 'Panoramic property garden view'],
  },
  {
    name: 'Secure Gated Parking for 3+ Large Vans',
    category: 'Outdoor Gathering',
    iconName: 'Car',
    description:
      'Private gated driveway inside the compound perimeter capable of securely parking multiple family vans and SUVs.',
    imageKey: 'ext1',
    specs: ['Perimeter fenced & gated', 'Fits 3-4 full size passenger vans / SUVs', 'Direct easy street access in Alfonso'],
  },

  // 5. Dining & Cooking
  {
    name: '10-Seater Banquet Dining Table',
    category: 'Dining & Cooking',
    iconName: 'ChefHat',
    description:
      'Large solid glass-top dining table with rattan armchairs for memorable family feasts and celebratory dinners.',
    featured: true,
    imageKey: 'din1',
    specs: ['10 comfortable dining armchairs', 'Centerpiece serving setup', 'Adjacent to indoor prep kitchen'],
  },
  {
    name: 'Fully Equipped Commercial Chef’s Kitchen',
    category: 'Dining & Cooking',
    iconName: 'ChefHat',
    description:
      'Complete cooking station with heavy-duty gas cooktops, high-volume refrigerator, cookware, and prep counters.',
    featured: true,
    imageKey: 'kit4',
    specs: ['Heavy-duty 2-burner gas stove (gas included)', 'Large 2-door refrigerator & freezer', 'Microwave oven & electric rice cooker', 'Frying pans, pots, ladles & prep knives'],
  },
  {
    name: 'Outdoor Charcoal BBQ Grill Station',
    category: 'Dining & Cooking',
    iconName: 'Flame',
    description:
      'Heavy-duty outdoor stainless steel charcoal grill for cooking inihaw na baboy, chicken barbecue, and fresh seafood.',
    imageKey: 'out1',
    specs: ['Stainless steel heavy-duty grates', 'Separate charcoal preparation zone', 'Outdoor smoke-free ventilation'],
  },
  {
    name: 'Zero Corkage on Food & Drinks',
    category: 'Dining & Cooking',
    iconName: 'ShieldCheck',
    description:
      'Bring all your favorite food, alcoholic beverages, catering platters, and celebration cakes with zero fees.',
    imageKey: 'din3',
    specs: ['₱0 Corkage on all food and snacks', '₱0 Corkage on beers, wines & spirits', '₱0 Corkage on outside catering & lechon'],
  },

  // 6. Accommodations & Rest
  {
    name: '4 Air-Conditioned Bedroom Zones',
    category: 'Accommodations',
    iconName: 'Bed',
    description:
      '2 VIP Master Suites with private ensuite bathrooms, plus 9 double-deck bunks and driver quarters for 40 guests.',
    imageKey: 'bed7',
    specs: ['20 comfortable beds with spring mattresses', 'Individual air-conditioning split units', 'Fresh linens and pillows provided'],
  },
  {
    name: '8 Full Bathrooms (Zero-Queue Guarantee)',
    category: 'Accommodations',
    iconName: 'Droplets',
    description:
      'Distributed modern bathrooms with rainfall showers so 40 guests get ready smoothly with no morning lines.',
    imageKey: 'bat1',
    specs: ['Rainfall shower fixtures', 'Hot water systems installed', 'Strategically distributed across both floors'],
  },

  // 7. Connectivity & Utilities
  {
    name: 'High-Speed Fiber Wi-Fi',
    category: 'Connectivity & Utilities',
    iconName: 'Wifi',
    description:
      'Reliable whole-compound wireless internet coverage for remote work, streaming music, and social media posting.',
    imageKey: 'lou3',
    specs: ['Whole-estate coverage', 'Fast upload/download speeds for group use'],
  },
  {
    name: 'Mineral Water Dispenser (Hot & Cold)',
    category: 'Connectivity & Utilities',
    iconName: 'Droplets',
    description:
      'Complimentary hot and cold water dispenser with initial 5-gallon purified mineral water container provided.',
    imageKey: 'kit1',
    specs: ['Instant hot water for coffee & tea', 'Chilled drinking water', 'Complimentary initial 5-gal container'],
  },
]
