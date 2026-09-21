export interface GalleryImage {
  key: string
  category:
    | 'Exterior'
    | 'Pool'
    | 'Videoke'
    | 'Billiards'
    | 'Arcade'
    | 'Dining'
    | 'Kitchen'
    | 'Living'
    | 'Bedroom'
    | 'Bathroom'
    | 'Gym'
    | 'Bonfire'
    | 'Basketball'
    | 'Outdoor'
  uuid: string
  label: string
  url: string
}

export const MUSCACHE_BASE =
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original'

/**
 * Returns self-hosted local image path (/images/gallery/{key}.jpg)
 * Falls back to CDN url if needed.
 */
export function getLocalImageUrl(key: string, uuid?: string): string {
  return `/images/gallery/${key}.jpg`
}

export function getMuscacheUrl(uuid: string, width = 1920): string {
  return `${MUSCACHE_BASE}/${uuid}.jpeg?im_w=1920`
}

export const GALLERY_REGISTRY: GalleryImage[] = [
  // 1. Exterior & Architecture
  { key: 'ext1', category: 'Exterior', uuid: 'aedee59c-00c6-48fc-8edc-e684ae38a6d3', label: 'Two-Storey Industrial Container Villa Night Facade', url: getLocalImageUrl('ext1') },
  { key: 'ext2', category: 'Exterior', uuid: '6043831d-e9d1-4e7d-a501-1876e1e88edf', label: 'Illuminated Villa Facade with Ambient Garden Lighting', url: getLocalImageUrl('ext2') },
  { key: 'ext3', category: 'Exterior', uuid: 'ffd5ba89-7c68-48ed-bca7-529add0f6b8e', label: 'Night Aerial Drone Overview of Entire Estate Compound', url: getLocalImageUrl('ext3') },
  { key: 'ext4', category: 'Exterior', uuid: '7904e985-91d2-47e1-8d6d-f3ee94cd4baf', label: 'Poolside Villa Exterior with Illuminated Under-Step Lighting', url: getLocalImageUrl('ext4') },
  { key: 'ext9', category: 'Exterior', uuid: '72b11e48-9433-4fdb-b3da-5fff4c67f5f5', label: 'Evening Poolside Gathering with Blue LED Ambient Lighting', url: getLocalImageUrl('ext9') },
  { key: 'ext10', category: 'Exterior', uuid: '98b5142f-e72f-4cdf-8d7a-c91d1a0e356d', label: 'Daytime Aerial Drone View of Villa, Pool & Basketball Court', url: getLocalImageUrl('ext10') },
  { key: 'ext13', category: 'Exterior', uuid: '606086fb-f6a7-4ffa-8f80-3c11c817d4a7', label: 'Daytime Architectural Front View of Container Villa & Grounds', url: getLocalImageUrl('ext13') },
  { key: 'ext14', category: 'Exterior', uuid: '02540714-812e-4982-9f31-acee9e34ec71', label: 'Estate Vicinity & Satellite Location Map in Kaytitinga II', url: getLocalImageUrl('ext14') },
  { key: 'ext15', category: 'Exterior', uuid: '6f5e4893-6e33-45e4-b423-fa95657e6ccc', label: 'Perimeter Swimming Pool Garden Border with Tropical Palms', url: getLocalImageUrl('ext15') },
  { key: 'gal_ext1', category: 'Exterior', uuid: 'f1e5dfce-68ba-4a14-8b10-92c43d231940', label: 'Night Drone Aerial Panorama of Compound & Illuminated Pool', url: getLocalImageUrl('gal_ext1') },

  // 2. Private Swimming Pool
  { key: 'pool1', category: 'Pool', uuid: '51364ca8-54b3-4f0b-9840-3f92171707eb', label: 'Daytime Swimming Pool Deck & Ergonomic Sun Loungers', url: getLocalImageUrl('pool1') },
  { key: 'pool2', category: 'Pool', uuid: 'e9fae679-5f90-4c28-9675-71c03be31de0', label: 'Bonfire Pit & Heated Pool with Cyan Water Feature at Night', url: getLocalImageUrl('pool2') },
  { key: 'pool3', category: 'Pool', uuid: '3af6b26c-4a6b-427f-a28a-c767df166b86', label: 'Night Bonfire Lounge & Heated Pool with Outdoor Seating', url: getLocalImageUrl('pool3') },
  { key: 'pool4', category: 'Pool', uuid: '0017c9e7-9077-4899-86df-49f2dfecd075', label: 'Starry Night Poolside with Turquoise Water & Villa Steps', url: getLocalImageUrl('pool4') },
  { key: 'pool6', category: 'Pool', uuid: 'b800534f-c860-4d16-a179-fb2c4a90a4b8', label: 'Evening Pool Gathering with Green LED Ambient Lighting', url: getLocalImageUrl('pool6') },
  { key: 'pool7', category: 'Pool', uuid: '10bdd539-5da8-4314-912c-439cfa688f22', label: 'Night Pool Deck with Bamboo Garden Border & Step Lights', url: getLocalImageUrl('pool7') },

  // 3. Videoke & KTV Lounge
  { key: 'kara1', category: 'Videoke', uuid: '0602e46f-d78c-4a27-87fb-4a7247813d55', label: 'Acoustic Videoke & KTV Lounge with Smart TV & Wireless Mics', url: getLocalImageUrl('kara1') },
  { key: 'kara2', category: 'Videoke', uuid: '066847df-060c-4ae6-ba4c-fbe732b4c9a5', label: 'Videoke Lounge Wrap-Around Sectional Seating & Acoustic Drapes', url: getLocalImageUrl('kara2') },
  { key: 'kara3', category: 'Videoke', uuid: 'cfbd6cbd-76b3-42d1-bb7b-6ba352d41450', label: 'Professional Wireless Microphones & KTV Setup', url: getLocalImageUrl('kara3') },
  { key: 'kara4', category: 'Videoke', uuid: 'b676b1d1-08d0-4e3a-a90a-7f1e1b19df75', label: 'Acoustic Videoke Room with 4K Display, Soundbar & Party Speaker', url: getLocalImageUrl('kara4') },

  // 4. Kangaroo Billiards
  { key: 'bill1', category: 'Billiards', uuid: '0ce25d04-888c-42a6-ad43-4433d8d60294', label: 'Tournament Blue Felt Billiard Table & Game Room TV', url: getLocalImageUrl('bill1') },
  { key: 'bill2', category: 'Billiards', uuid: 'd689919f-f256-4d90-9753-af61e7965c31', label: 'Game Room with Kangaroo Billiards & Retro Arcade Cabinets', url: getLocalImageUrl('bill2') },

  // 5. Retro Arcade
  { key: 'arc1', category: 'Arcade', uuid: '0b3fcbdd-4ad1-459b-8dd3-786a774c8521', label: 'Game Room with Billiard Table & Dual Retro Arcade Cabinets', url: getLocalImageUrl('arc1') },
  { key: 'arc3', category: 'Arcade', uuid: 'c7618b1a-3fd3-4220-91e9-fdd87d3f4b14', label: 'Retro Arcade Machines & Billiard Corner', url: getLocalImageUrl('arc3') },
  { key: 'arc4', category: 'Arcade', uuid: '4390364c-4351-4132-9ce7-2bf05973c47b', label: 'Game Lounge Wide Angle with Slatted Ceiling & Glass Wall', url: getLocalImageUrl('arc4') },

  // 6. Banquet Dining
  { key: 'din1', category: 'Dining', uuid: '7ab52115-9626-4fee-94c1-31776317887f', label: 'Acacia Live-Edge Natural Hardwood Slab Dining Table', url: getLocalImageUrl('din1') },
  { key: 'din2', category: 'Dining', uuid: '97ca24a6-4a16-4fdf-8e34-18f5f6d50574', label: 'Air-Conditioned VIP Banquet Room with 12-Seater Live-Edge Table', url: getLocalImageUrl('din2') },
  { key: 'din3', category: 'Dining', uuid: '422ade24-d533-4620-94ef-2f2311c99066', label: 'Indoor Dining & Entertainment Hall with Kitchen Island Bar', url: getLocalImageUrl('din3') },
  { key: 'din4', category: 'Dining', uuid: '35e0e064-7569-460f-93e7-3b198feda5d2', label: 'Covered Al Fresco 12-Seater Glass Dining Patio with Rattan Chairs', url: getLocalImageUrl('din4') },
  { key: 'lou3', category: 'Dining', uuid: '53089b73-cb81-40b3-b94e-011048c96502', label: 'Indoor Dining Area with Round Glass Table & Commercial AC', url: getLocalImageUrl('lou3') },

  // 7. Chef’s Kitchen & Prep Bar
  { key: 'kit1', category: 'Kitchen', uuid: '07c88337-25d4-4164-977b-ade6a77d9f7f', label: 'Indoor Kitchen Granite Counters with Gooseneck Faucets & Coffee Bar', url: getLocalImageUrl('kit1') },
  { key: 'kit2', category: 'Kitchen', uuid: '7a14c4ef-4630-4707-b982-b92a72a4cbc3', label: 'Kitchen Island Bar Counter with 3 White Woven Barstools', url: getLocalImageUrl('kit2') },
  { key: 'kit3', category: 'Kitchen', uuid: '34cbfa30-4591-469a-8bb0-e9e1ea6e3d38', label: 'Solid White Quartz Kitchen Island with Stainless Sink & Prep Station', url: getLocalImageUrl('kit3') },
  { key: 'kit4', category: 'Kitchen', uuid: '679d0422-ca4d-483a-9930-9b9171905841', label: 'Symmetrical Front View of Kitchen Island Breakfast Bar & Pendant Lights', url: getLocalImageUrl('kit4') },
  { key: 'lou2', category: 'Kitchen', uuid: '27041d27-0bfc-4148-9167-4f0e51843487', label: 'Indoor Kitchen Island Breakfast Bar & Hot Water Dispenser Station', url: getLocalImageUrl('lou2') },
  { key: 'lou4', category: 'Kitchen', uuid: 'cd39776f-1169-40fd-9f97-acc3c480ec90', label: 'Prep Kitchen Counter with Subway Tiles & Hallway to Restroom', url: getLocalImageUrl('lou4') },

  // 8. Living Spaces & Architecture
  { key: 'liv1', category: 'Living', uuid: '5f3c7ae0-83d1-4d7e-80ee-8882caeafb41', label: 'Ground Floor Living Hall with Poolside Glass Sliding Doors', url: getLocalImageUrl('liv1') },
  { key: 'liv2', category: 'Living', uuid: 'f22acb11-9b63-46e9-a12e-bc5075fb53c1', label: 'Main Open-Concept Great Room & Steel Staircase', url: getLocalImageUrl('liv2') },
  { key: 'liv3', category: 'Living', uuid: '6a7f48ad-6f43-4a93-b7ed-edfe913bc4ca', label: 'Steel & Hardwood Staircase with 2-Storey Forest View Windows', url: getLocalImageUrl('liv3') },
  { key: 'liv4', category: 'Living', uuid: '23917df0-e296-4188-a79f-c688a679c56e', label: 'Ground Floor Atrium Lounge with Gold Santiago Crest & Floating Stairs', url: getLocalImageUrl('liv4') },
  { key: 'gal_int1', category: 'Living', uuid: 'c5099b93-dc0b-4082-ab4e-66d7c6229024', label: '2nd Floor Stair Landing Atrium with Tree Foliage Picture Windows', url: getLocalImageUrl('gal_int1') },

  // 9. Bedrooms & Sleeping Zones
  { key: 'bed1', category: 'Bedroom', uuid: '1dfafeed-b7d8-4ee2-9685-f4b21ee2ac0c', label: 'Group Bunk Bed Central Hallway with Multi-Deck Pods', url: getLocalImageUrl('bed1') },
  { key: 'bed2', category: 'Bedroom', uuid: '1eea7c15-e6bc-480f-9049-7a7ca831306a', label: 'Bunk Bedroom Ante-Room with Fluted Slats & Glass Sliding Door to Gym', url: getLocalImageUrl('bed2') },
  { key: 'bed3', category: 'Bedroom', uuid: '7fdad08c-cd56-4bd8-9913-df31206d2a71', label: 'VIP 1 Bedroom with Double Bed, Fluted Headboard & Draped Windows', url: getLocalImageUrl('bed3') },
  { key: 'bed4', category: 'Bedroom', uuid: '231f8e62-c8af-4ab9-ab7b-749426418278', label: 'VIP 1 Wall-Mounted Smart TV on Fluted Wood Accent Wall', url: getLocalImageUrl('bed4') },
  { key: 'bed5', category: 'Bedroom', uuid: '412ac041-c128-4dcb-be95-9613525155ac', label: 'Lower Bunk Bed Pods with Crisp White Linens & Slatted Headboards', url: getLocalImageUrl('bed5') },
  { key: 'bed6', category: 'Bedroom', uuid: 'a7a5da0a-0cca-4155-a690-85d8a35d5073', label: 'Bunk Room 2 Doorway Flanked by 4 Built-In Double-Deck Bunk Pods', url: getLocalImageUrl('bed6') },
  { key: 'bed7', category: 'Bedroom', uuid: 'a416db78-e791-485f-99cd-681dfc37c943', label: 'VIP 2 Double Bed Perspective with Sunlit Window & Lounge Chair', url: getLocalImageUrl('bed7') },
  { key: 'bed8', category: 'Bedroom', uuid: 'c7314967-2138-4874-bf9c-036713e1e84f', label: 'VIP 2 Bedside Nightstand & Fluted Headboard Close-Up', url: getLocalImageUrl('bed8') },
  { key: 'bed9', category: 'Bedroom', uuid: 'ac7d1d93-69dd-4f83-9f5e-199ae922012f', label: 'Spacious Group Bunk Room with Multiple Double-Deck Pods', url: getLocalImageUrl('bed9') },
  { key: 'lou1', category: 'Bedroom', uuid: '34ce9446-3458-48de-8f19-4f6dee8d8ae1', label: 'VIP Bedroom Smart TV on Fluted Wall with Bed Duvet View', url: getLocalImageUrl('lou1') },

  // 10. Modern Bathrooms
  { key: 'bat1', category: 'Bathroom', uuid: '6a64f515-0249-440e-937b-73fe1cc63898', label: 'Matte Black Rainfall Shower Head, Wand & Digital Water Heater on Marble Tile', url: getLocalImageUrl('bat1') },
  { key: 'bat2', category: 'Bathroom', uuid: '7bd29da9-1398-456e-81ab-7f3f06a8b10f', label: 'Modern Private Vanity Sink with Matte Black Faucet & LED Backlit Mirror', url: getLocalImageUrl('bat2') },
  { key: 'bat3', category: 'Bathroom', uuid: '73e7dd06-2f9b-479e-8925-0a24bf769a9c', label: 'Full Private Bathroom Layout with Vanity, Bidet Toilet & Shower Stall', url: getLocalImageUrl('bat3') },
  { key: 'bat7', category: 'Bathroom', uuid: 'edf6c0b7-2c0d-416a-895b-ae85e5455368', label: 'Guest Restroom & Shower Corridor with Dedicated Stalls & Signage', url: getLocalImageUrl('bat7') },
  { key: 'bat8', category: 'Bathroom', uuid: '81d13019-e81c-4497-950d-32dd698989e4', label: 'Modern Private Bathroom with LED Mirror & Glass Shower Cubicle', url: getLocalImageUrl('bat8') },

  // 11. Indoor Fitness Gym
  { key: 'gym1', category: 'Gym', uuid: '7b8c51d9-24b2-4846-b173-6d2459c53981', label: 'Indoor Fitness Gym with Turf Flooring, Dip Station & Mirror Wall', url: getLocalImageUrl('gym1') },
  { key: 'gym2', category: 'Gym', uuid: '23fa05de-4f88-4694-9357-74ae76635ab2', label: 'Glass-Enclosed Gym Access from Private Lounge', url: getLocalImageUrl('gym2') },
  { key: 'gym3', category: 'Gym', uuid: 'd6337543-a580-4b38-aa27-35657a04ec03', label: 'Full Fitness Facility with Multi-Station, Elliptical & Free Weights', url: getLocalImageUrl('gym3') },
  { key: 'gym4', category: 'Gym', uuid: 'b991d9df-e76a-4f8f-b354-75f178ecb611', label: 'Hex Dumbbells Rack & OneTwoFit Power Tower Station', url: getLocalImageUrl('gym4') },
  { key: 'gym5', category: 'Gym', uuid: '1a44844f-9898-4cda-a89e-ed50b2efc598', label: 'Private Lounge View into Glass-Enclosed Turf Gym', url: getLocalImageUrl('gym5') },

  // 12. Sunken Bonfire Pit
  { key: 'fir1', category: 'Bonfire', uuid: '15fd6a0c-36f4-4c79-a187-279fc9e1d45c', label: 'Outdoor Bonfire Pit with Burning Logs & Tree Stump Stools', url: getLocalImageUrl('fir1') },

  // 13. Basketball Court
  { key: 'bbl1', category: 'Basketball', uuid: '7932f6a1-879d-4276-ab69-433d47ad8ca0', label: 'Private Half-Court Basketball Court with Regulation Glass Backboard', url: getLocalImageUrl('bbl1') },
  { key: 'bbl2', category: 'Basketball', uuid: 'ff9e2cfe-96b7-4992-8cd8-81499c84335f', label: 'Outdoor Basketball Half-Court with Fenced Perimeter & Mountain Backdrop', url: getLocalImageUrl('bbl2') },

  // 14. Outdoor Grounds & Al Fresco Patio
  { key: 'out1', category: 'Outdoor', uuid: '58004ff1-df45-4949-ad63-6316ab7abe96', label: 'Covered Al Fresco Dining Patio with 12-Seater Glass Table & Bar Counter', url: getLocalImageUrl('out1') },
  { key: 'out2', category: 'Outdoor', uuid: '77973507-5528-471c-b8ac-e6d0c1968e2b', label: 'Night Al Fresco Dining, Bonfire Pit & BBQ Grill Station', url: getLocalImageUrl('out2') },
  { key: 'out6', category: 'Outdoor', uuid: 'e7b07cde-5fc2-4104-bc75-d55b0feeefbd', label: 'Poolside Sun Loungers, Rattan Daybed & Private Gated Parking', url: getLocalImageUrl('out6') },
  { key: 'out7', category: 'Outdoor', uuid: 'ee1d6f90-bc3c-486b-a8ad-cbdfa2484e5a', label: 'Night Bonfire Pit with Blue LED Illuminated Swimming Pool', url: getLocalImageUrl('out7') },
  { key: 'out8', category: 'Outdoor', uuid: 'eb96db32-3229-4f56-af97-485cb23acdf8', label: 'Covered Outdoor Brick Grilling Station & Firewood Hearth', url: getLocalImageUrl('out8') },
  { key: 'gal_out1', category: 'Outdoor', uuid: '269a1081-43b6-4179-b104-e446e4878e29', label: 'Stone Prep Counter & Al Fresco Outdoor BBQ Grill Station', url: getLocalImageUrl('gal_out1') },
]

export const HERO_FALLBACK_IMAGES = {
  eveningPool: getLocalImageUrl('pool6'),
  exteriorHero: getLocalImageUrl('ext1'),
  signWall: getLocalImageUrl('din3'),
  videoke: getLocalImageUrl('kara1'),
  billiards: getLocalImageUrl('bill2'),
}
