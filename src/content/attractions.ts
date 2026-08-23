export interface Attraction {
  name: string
  travelTime: string
  highlights: string
  tags: string[]
  fallbackImage: string
}

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    name: 'Taal Volcano & Lake',
    travelTime: '~30 min away',
    highlights:
      'Famous geological wonder — a volcano inside a lake inside an island. Scenic crater lookouts, boat excursions, and highland viewing decks.',
    tags: ['Nature', 'Scenic View', 'Day Trip', 'Photography'],
    fallbackImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/170522125324-tagaytay-dangerous-volcano-philippines.jpg?q=w_4281,h_2987,x_0,y_0,c_fill',
  },
  {
    name: 'Tagaytay City Ridge',
    travelTime: '~15–20 min away',
    highlights:
      'Cool 18–24°C ridge with cliff-side restaurants, panoramic Taal views, traditional hot bulalo restaurants, and fresh strawberry taho.',
    tags: ['Dining', 'Scenic View', 'Shopping', 'Cool Climate'],
    fallbackImage:
      'https://mediaim.expedia.com/localexpert/305846/6a7e03ed-7eac-400f-9bae-f1b77363501f.jpg',
  },
  {
    name: 'Sky Ranch Tagaytay',
    travelTime: '~20 min away',
    highlights:
      'Family amusement park featuring the giant Sky Eye Ferris Wheel offering 360° views above the Taal Ridge and amusement rides for all ages.',
    tags: ['Family', 'Amusement Park', 'Views', 'All Ages'],
    fallbackImage:
      'https://carrongroup.com/carronrides/wp-content/uploads/2018/01/skyranch-tagaytay-1.jpg',
  },
  {
    name: 'Alfonso Town Proper',
    travelTime: '~5 min away',
    highlights:
      'Known as the "Coffee Capital of Cavite" — local coffee roasteries, Alfonso public market for fresh barbecue meats, farm-to-table cafes, and local bakeries.',
    tags: ['Coffee', 'Local Food', 'Farm Visits', 'Chill Vibes'],
    fallbackImage:
      'https://pix8.agoda.net/hotelImages/50039617/0/0667a31dbe90f64c1c7b38b747df70c1.jpg?ce=0&s=600',
  },
]

export const MANILA_DISTANCES = [
  { origin: 'Alabang / Filinvest (SLEX)', distance: '~55 km', time: '~60–75 mins' },
  { origin: 'NAIA / Pasay (CAVITEX)', distance: '~68 km', time: '~75–90 mins' },
  { origin: 'BGC / Makati (SLEX/CALAX)', distance: '~72 km', time: '~80–95 mins' },
  { origin: 'Quezon City / North (Skyway)', distance: '~85 km', time: '~100–120 mins' },
]

export const LOCAL_TRAVEL_TIPS = [
  {
    title: 'Stocking Up on Groceries',
    detail:
      'Fresh produce, barbecue meats, and charcoal are available at Alfonso Public Market (5 min away). Large supermarkets (Robinsons Tagaytay, WalterMart) are 15–20 min away.',
  },
  {
    title: 'Cool Highland Evenings',
    detail:
      'Because Alfonso sits at ~600m elevation, nights can drop to 18°C. Guests are advised to bring a light jacket or sweater for outdoor bonfire sessions.',
  },
]
