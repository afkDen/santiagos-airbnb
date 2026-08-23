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
    | 'Lounge'
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
  { key: 'ext1', category: 'Exterior', uuid: 'aedee59c-00c6-48fc-8edc-e684ae38a6d3', label: 'Resort Exterior — Industrial Chic Container Design', url: getLocalImageUrl('ext1') },
  { key: 'ext2', category: 'Exterior', uuid: '6043831d-e9d1-4e7d-a501-1876e1e88edf', label: 'Resort Architecture & Container Lines', url: getLocalImageUrl('ext2') },
  { key: 'ext3', category: 'Exterior', uuid: 'ffd5ba89-7c68-48ed-bca7-529add0f6b8e', label: 'Resort Architecture & Container Deck', url: getLocalImageUrl('ext3') },
  { key: 'ext4', category: 'Exterior', uuid: '7904e985-91d2-47e1-8d6d-f3ee94cd4baf', label: 'Resort Architecture Overview', url: getLocalImageUrl('ext4') },
  { key: 'ext9', category: 'Exterior', uuid: '72b11e48-9433-4fdb-b3da-5fff4c67f5f5', label: 'Walkway & Landscape Trees', url: getLocalImageUrl('ext9') },
  { key: 'ext10', category: 'Exterior', uuid: '98b5142f-e72f-4cdf-8d7a-c91d1a0e356d', label: 'Evening Facade & Lights', url: getLocalImageUrl('ext10') },
  
  { key: 'pool1', category: 'Pool', uuid: '51364ca8-54b3-4f0b-9840-3f92171707eb', label: 'Private Swimming Pool Main View', url: getLocalImageUrl('pool1') },
  { key: 'pool2', category: 'Pool', uuid: 'e9fae679-5f90-4c28-9675-71c03be31de0', label: 'Pool Area & Sun Loungers', url: getLocalImageUrl('pool2') },
  { key: 'pool3', category: 'Pool', uuid: '3af6b26c-4a6b-427f-a28a-c767df166b86', label: 'Pool Deck & Mountain Breeze', url: getLocalImageUrl('pool3') },
  { key: 'pool4', category: 'Pool', uuid: '0017c9e7-9077-4899-86df-49f2dfecd075', label: 'Pool Water Feature & Waterfall', url: getLocalImageUrl('pool4') },
  { key: 'pool6', category: 'Pool', uuid: 'b800534f-c860-4d16-a179-fb2c4a90a4b8', label: 'Pool Evening Lighting & Night Swimming', url: getLocalImageUrl('pool6') },
  
  { key: 'kara1', category: 'Videoke', uuid: '0602e46f-d78c-4a27-87fb-4a7247813d55', label: 'Air-Conditioned Videoke Room with Music Poster Wall', url: getLocalImageUrl('kara1') },
  { key: 'kara2', category: 'Videoke', uuid: '066847df-060c-4ae6-ba4c-fbe732b4c9a5', label: 'Videoke Lounge Seating Setup', url: getLocalImageUrl('kara2') },
  { key: 'kara3', category: 'Videoke', uuid: 'cfbd6cbd-76b3-42d1-bb7b-6ba352d41450', label: 'Poster Wall & Sectional Sofa', url: getLocalImageUrl('kara3') },
  
  { key: 'bill1', category: 'Billiards', uuid: '0ce25d04-888c-42a6-ad43-4433d8d60294', label: 'Billiards Room with Exposed Brick Walls', url: getLocalImageUrl('bill1') },
  { key: 'bill2', category: 'Billiards', uuid: 'd689919f-f256-4d90-9753-af61e7965c31', label: 'Kangaroo Pool Table Setup', url: getLocalImageUrl('bill2') },
  
  { key: 'arc1', category: 'Arcade', uuid: '0b3fcbdd-4ad1-459b-8dd3-786a774c8521', label: 'Retro Multi-Game Arcade Cabinets', url: getLocalImageUrl('arc1') },
  { key: 'arc2', category: 'Arcade', uuid: '8d5c0226-0717-4fe1-9a76-88c002944ec1', label: 'Arcade Machine Controls Close-up', url: getLocalImageUrl('arc2') },
  { key: 'arc3', category: 'Arcade', uuid: 'c7618b1a-3fd3-4220-91e9-fdd87d3f4b14', label: 'Retro Arcade Unit in Action', url: getLocalImageUrl('arc3') },
  
  { key: 'din1', category: 'Dining', uuid: '7ab52115-9626-4fee-94c1-31776317887f', label: 'Long Glass Dining Table with Rattan Chairs', url: getLocalImageUrl('din1') },
  { key: 'din2', category: 'Dining', uuid: '97ca24a6-4a16-4fdf-8e34-18f5f6d50574', label: 'Dining Area Atmosphere & Lighting', url: getLocalImageUrl('din2') },
  { key: 'din3', category: 'Dining', uuid: '422ade24-d533-4620-94ef-2f2311c99066', label: 'Dining Area — Santiago\'s Signature Gold Illuminated Wall', url: getLocalImageUrl('din3') },
  
  { key: 'kit1', category: 'Kitchen', uuid: '07c88337-25d4-4164-977b-ade6a77d9f7f', label: 'Fully-Equipped Kitchen Cooktop & Countertops', url: getLocalImageUrl('kit1') },
  { key: 'kit2', category: 'Kitchen', uuid: '7a14c4ef-4630-4707-b982-b92a72a4cbc3', label: 'Heavy Duty Gas Cooktop', url: getLocalImageUrl('kit2') },
  { key: 'kit3', category: 'Kitchen', uuid: '34cbfa30-4591-469a-8bb0-e9e1ea6e3d38', label: 'Kitchen Storage & Refrigerator', url: getLocalImageUrl('kit3') },
  { key: 'kit4', category: 'Kitchen', uuid: '679d0422-ca4d-483a-9930-9b9171905841', label: 'Full Kitchen Overview for Group Cooking', url: getLocalImageUrl('kit4') },
  
  { key: 'lou1', category: 'Lounge', uuid: '34ce9446-3458-48de-8f19-4f6dee8d8ae1', label: 'Comfortable Lounge Seating', url: getLocalImageUrl('lou1') },
  { key: 'lou2', category: 'Lounge', uuid: '27041d27-0bfc-4148-9167-4f0e51843487', label: 'Chill Spot with Soft Lighting', url: getLocalImageUrl('lou2') },
  { key: 'lou3', category: 'Lounge', uuid: '53089b73-cb81-40b3-b94e-011048c96502', label: 'Indoor Group Hangout Space', url: getLocalImageUrl('lou3') },
  { key: 'lou4', category: 'Lounge', uuid: 'cd39776f-1169-40fd-9f97-acc3c480ec90', label: 'Lounge Zone', url: getLocalImageUrl('lou4') },
  { key: 'liv1', category: 'Living', uuid: '5f3c7ae0-83d1-4d7e-80ee-8882caeafb41', label: 'Living Room Space with High Ceilings', url: getLocalImageUrl('liv1') },
  
  { key: 'bed1', category: 'Bedroom', uuid: '1dfafeed-b7d8-4ee2-9685-f4b21ee2ac0c', label: 'VIP Room 1 — Private Master Suite with Ensuite Bath', url: getLocalImageUrl('bed1') },
  { key: 'bed2', category: 'Bedroom', uuid: '1eea7c15-e6bc-480f-9049-7a7ca831306a', label: 'Bunk Bed Pod Quarter', url: getLocalImageUrl('bed2') },
  { key: 'bed3', category: 'Bedroom', uuid: '7fdad08c-cd56-4bd8-9913-df31206d2a71', label: 'Bunk Bed Quarter 3', url: getLocalImageUrl('bed3') },
  { key: 'bed4', category: 'Bedroom', uuid: '231f8e62-c8af-4ab9-ab7b-749426418278', label: 'Bunk Bed Quarter 4', url: getLocalImageUrl('bed4') },
  { key: 'bed5', category: 'Bedroom', uuid: '412ac041-c128-4dcb-be95-9613525155ac', label: 'Bunk Bed Quarter 5', url: getLocalImageUrl('bed5') },
  { key: 'bed6', category: 'Bedroom', uuid: 'a7a5da0a-0cca-4155-a690-85d8a35d5073', label: 'Bunk Bed Quarter 6', url: getLocalImageUrl('bed6') },
  { key: 'bed7', category: 'Bedroom', uuid: 'a416db78-e791-485f-99cd-681dfc37c943', label: 'VIP Room 2 — Second Master Bedroom', url: getLocalImageUrl('bed7') },
  { key: 'bed8', category: 'Bedroom', uuid: 'c7314967-2138-4874-bf9c-036713e1e84f', label: 'Bunk Bed Pod Setup', url: getLocalImageUrl('bed8') },
  
  { key: 'bat1', category: 'Bathroom', uuid: '6a64f515-0249-440e-937b-73fe1cc63898', label: 'Modern Bathroom 1 with Rain Showerhead', url: getLocalImageUrl('bat1') },
  { key: 'bat2', category: 'Bathroom', uuid: '7bd29da9-1398-456e-81ab-7f3f06a8b10f', label: 'Bathroom 2 with Clean Tiles & Vanity', url: getLocalImageUrl('bat2') },
  { key: 'bat3', category: 'Bathroom', uuid: '73e7dd06-2f9b-479e-8925-0a24bf769a9c', label: 'Bathroom 3 with Hot Water System', url: getLocalImageUrl('bat3') },
  { key: 'bat4', category: 'Bathroom', uuid: '380a4b0e-bc04-4540-8ab5-3446055037b4', label: 'Bathroom 4', url: getLocalImageUrl('bat4') },
  { key: 'bat5', category: 'Bathroom', uuid: '01672d22-f62b-4081-9372-e090179020ca', label: 'Bathroom 5', url: getLocalImageUrl('bat5') },
  { key: 'bat6', category: 'Bathroom', uuid: '5444278e-4394-474a-aa9f-e233672be193', label: 'Bathroom 6', url: getLocalImageUrl('bat6') },
  { key: 'bat7', category: 'Bathroom', uuid: 'edf6c0b7-2c0d-416a-895b-ae85e5455368', label: 'Outdoor Garden-Access Bathroom', url: getLocalImageUrl('bat7') },
  
  { key: 'gym1', category: 'Gym', uuid: '7b8c51d9-24b2-4846-b173-6d2459c53981', label: 'Gym Equipment & Free Weights Area', url: getLocalImageUrl('gym1') },
  { key: 'gym2', category: 'Gym', uuid: '23fa05de-4f88-4694-9357-74ae76635ab2', label: 'Gym Workout Zone', url: getLocalImageUrl('gym2') },
  { key: 'gym3', category: 'Gym', uuid: 'd6337543-a580-4b38-aa27-35657a04ec03', label: 'Fitness Bench & Dumbbells', url: getLocalImageUrl('gym3') },
  
  { key: 'fir1', category: 'Bonfire', uuid: '15fd6a0c-36f4-4c79-a187-279fc9e1d45c', label: 'Sunken Outdoor Bonfire Pit Circle', url: getLocalImageUrl('fir1') },
  
  { key: 'bbl1', category: 'Basketball', uuid: '7932f6a1-879d-4276-ab69-433d47ad8ca0', label: 'Basketball Half-Court with Regulation Hoop', url: getLocalImageUrl('bbl1') },
  { key: 'bbl2', category: 'Basketball', uuid: 'ff9e2cfe-96b7-4992-8cd8-81499c84335f', label: 'Basketball Half-Court Action Angle', url: getLocalImageUrl('bbl2') },
  
  { key: 'out1', category: 'Outdoor', uuid: '58004ff1-df45-4949-ad63-6316ab7abe96', label: 'Al Fresco Outdoor Veranda Dining', url: getLocalImageUrl('out1') },
  { key: 'out2', category: 'Outdoor', uuid: '77973507-5528-471c-b8ac-e6d0c1968e2b', label: 'Garden Patio & Lounge Chairs', url: getLocalImageUrl('out2') },
  { key: 'out6', category: 'Outdoor', uuid: 'e7b07cde-5fc2-4104-bc75-d55b0feeefbd', label: 'Industrial Container Architecture Details', url: getLocalImageUrl('out6') },
  { key: 'out7', category: 'Outdoor', uuid: 'ee1d6f90-bc3c-486b-a8ad-cbdfa2484e5a', label: 'Chill Deck under Highland Sky', url: getLocalImageUrl('out7') },
  
  { key: 'gal_out1', category: 'Outdoor', uuid: '269a1081-43b6-4179-b104-e446e4878e29', label: 'Covered Al Fresco Outdoor Dining', url: getLocalImageUrl('gal_out1') },
  { key: 'gal_int1', category: 'Bedroom', uuid: 'c5099b93-dc0b-4082-ab4e-66d7c6229024', label: '2nd Floor — Highland View Windows', url: getLocalImageUrl('gal_int1') },
  { key: 'gal_ext1', category: 'Exterior', uuid: 'f1e5dfce-68ba-4a14-8b10-92c43d231940', label: 'Aerial View — Resort from Above', url: getLocalImageUrl('gal_ext1') },
]

export const HERO_FALLBACK_IMAGES = {
  eveningPool: getLocalImageUrl('pool6'),
  exteriorHero: getLocalImageUrl('ext1'),
  signWall: getLocalImageUrl('din3'),
  videoke: getLocalImageUrl('kara1'),
  billiards: getLocalImageUrl('bill2'),
}
