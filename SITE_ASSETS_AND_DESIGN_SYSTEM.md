# Santiagos Resort — Complete Asset Registry, Property Information & Design System Guide

This is the master reference document containing all property information, amenities specifications, pricing rules, policies, driving directions, FAQs, asset links, image UUIDs, hardcoded URLs, embed codes, typography, and color tokens needed to port or rebuild the Santiagos Resort website.

---

## 1. Property Overview & Master Metadata

| Attribute | Details |
| :--- | :--- |
| **Official Name** | Santiagos Resort / Santiagos Private Resort |
| **Brand Tagline** | *Unwind & Play @ Santiagos* — Industrial Chic Container Resort |
| **Address** | Kaytitinga II, Alfonso, Cavite 4123, Philippines |
| **Geographic Area** | Alfonso, Tagaytay, Cavite (Highland Region, ~600m elevation) |
| **Climate / Weather** | 18–24°C year-round cool highland breeze |
| **Primary Phone 1** | `0917 800 5320` (`+63 917 800 5320`) |
| **Primary Phone 2** | `0922 830 5320` (`+63 922 830 5320`) |
| **Social Handle** | `@santiagos.to` (Facebook & Instagram) |
| **Base Guest Capacity** | Up to 20 guests |
| **Maximum Guest Capacity** | Up to 40 guests total |
| **Child Policy** | Kids 3 years old and below: Maximum of 3 kids FREE |
| **Bedrooms** | 2 VIP Rooms + 9 Double Deck Beds + 1 Driver's Room (4 Rooms Total, 20 Beds Total) |
| **Bathrooms** | 8 Bathrooms total (including rain showers & outdoor bathroom) |
| **Check-in Time** | After 3:00 PM |
| **Check-out Time** | Before 12:00 PM (Noon) |
| **Pet Policy** | Strict Pet-Free Property |
| **Parking Capacity** | Free on-premises parking for 3+ vehicles |

---

## 2. Detailed Room & Bedding Breakdown

Santiagos Resort is constructed using an industrial chic container design engineered specifically to host large groups comfortably without feeling cramped.

### Sleeping Configurations (Accommodates up to 40 Guests)
1. **VIP Room 1**: Private master bedroom with queen/king setup and ensuite bathroom.
2. **VIP Room 2**: Second private VIP master room.
3. **Bedroom 3 & 4 (Bunk Bed Quarters)**: Features 9 sturdy double deck beds (18+ individual sleeping spots) designed for barkadas, extended families, or team retreats.
4. **Driver’s / Staff Room**: Dedicated quarters for personal drivers, caterers, or support staff.
5. **Air Conditioning**: Individual high-power split and window AC units installed in all bedrooms and the videoke lounge.

### Bathroom Facilities (8 Bathrooms)
- **Zero-Queue Guarantee**: 8 full bathrooms distributed across the property so morning rushes are eliminated for groups of up to 40 people.
- **Features**: Rainfall showerheads, modern vanity mirrors, full tiling, outdoor garden-access bathroom, and hot/cold water supply.

---

## 3. Comprehensive Amenities Catalog (22+ Features)

Every amenity listed below is included in the nightly booking rate with **no hidden charges or usage fees**.

| Category | Amenity Name | Detailed Specifications |
| :--- | :--- | :--- |
| **Entertainment** | **Videoke Lounge** | Air-conditioned dedicated private room with large flat-screen smart TV, full commercial videoke song system, professional Bluetooth speakers, large L-shaped sectional sofa, and a wall-to-wall framed gallery of iconic music posters (Queen, Rolling Stones, Stevie Wonder, Bob Marley, ABBA, etc.). |
| **Entertainment** | **Billiards Room** | Full-sized professional Kangaroo pool table with complete cue sticks, balls, chalk, and triangle. Set against exposed industrial brick walls with warm statement overhead lighting. |
| **Entertainment** | **Arcade Gaming** | Multiple multi-game retro arcade cabinets featuring hundreds of classic arcade games suitable for kids, teens, and nostalgic adults. |
| **Water / Relaxation** | **Private Swimming Pool** | Private outdoor swimming pool — one of the very few private pools in the Alfonso highlands. Ideal for daytime group swims and night swimming under cool mountain air. |
| **Sports & Fitness** | **Basketball Half-Court** | Enclosed half-court basketball setup with regulation hoop and backboard for team shootouts and tournaments. |
| **Sports & Fitness** | **Gym & Fitness Area** | Basic workout room equipped with weight bench, dumbbells, and fitness gear. |
| **Outdoor Gathering** | **Bonfire Pit Area** | Dedicated sunken outdoor circular bonfire zone with surrounding seating for evening campfire stories, roasting s'mores, and acoustic jam sessions. |
| **Outdoor Gathering** | **Outdoor Spaces & Veranda** | Covered al fresco dining veranda, chill deck, landscaped green lawn, and illuminated night walkways. |
| **Dining & Cooking** | **Dining Area & Sign Wall** | Long glass-top dining table with rattan dining chairs seating large groups. Features the iconic illuminated gold **"Santiago's"** signature script wall — the most photographed backdrop in the resort. |
| **Dining & Cooking** | **Full Kitchen** | Fully equipped kitchen for group cooking: heavy-duty cooktop, cookware, prep counters, refrigerator, microwave, and cooking utensils. |
| **Connectivity & Utilities** | **High-Speed Wi-Fi** | Free high-speed wireless internet covering indoor rooms and outdoor lounge zones. |
| **Connectivity & Utilities** | **Smart TV** | Smart TV setup with streaming app support. |
| **Convenience** | **Free Parking** | Secure on-premises gated parking accommodating multiple cars/vans. |

---

## 4. Pricing Structure, Calculations & Policies

### Nightly Base Rates (Covers up to 20 Guests)

| Tier | Days Applicable | Included Guests | Base Rate |
| :--- | :--- | :--- | :--- |
| **Weekday Base Rate** | Monday – Thursday (Non-Holidays) | Up to 20 guests | **₱25,000 / night** |
| **Weekend Base Rate** | Friday – Sunday & Holiday Eves | Up to 20 guests | **₱35,000 / night** |

### Group Rate Tiers (Scaling by Headcount)

| Headcount | Weekday Rate (Mon–Thu) | Weekend Rate (Fri–Sun) | Notes |
| :--- | :--- | :--- | :--- |
| **1–20 Guests** | ₱25,000 / night | ₱35,000 / night | Standard Base Rate |
| **21–30 Guests** | ₱35,000 / night | ₱45,000 / night | Scaled group rate |
| **31–40 Guests** | ₱45,000 / night | ₱55,000 / night | Maximum property limit |
| **Extra Head Fee** | +₱1,000 / head / night | +₱1,000 / head / night | For any headcount over 20 guests (Max 40) |
| **Children (≤ 3 y/o)** | **FREE** | **FREE** | Up to 3 toddlers free; not counted toward head fee |

### Rate Calculation Logic (for Estimator / Booking Engines)
```typescript
function calculateRate(checkInDate: Date, checkOutDate: Date, guestCount: number): number {
  const nights = Math.round((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
  const dayOfWeek = checkInDate.getDay(); // 0 = Sun, 5 = Fri, 6 = Sat
  const isWeekend = (dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6);
  
  let baseNightly = 0;
  if (guestCount > 30) {
    baseNightly = isWeekend ? 55000 : 45000;
  } else if (guestCount > 20) {
    baseNightly = isWeekend ? 45000 : 35000;
  } else {
    baseNightly = isWeekend ? 35000 : 25000;
  }
  
  return baseNightly * nights;
}
```

> **Mandatory Price Disclaimer**:  
> `* Prices are subject to change without prior notice. Base rates apply to direct bookings. Rates not applicable on public holidays. Pricing may vary between Airbnb and direct bookings.`

---

## 5. House Rules, Safety & Policies

### House Rules
- **No Pets**: Santiagos Resort is strictly a pet-free property to maintain pristine cleanliness for all guests.
- **Registered Guests Only**: All resort amenities and sleeping spaces are strictly for declared, registered guests.
- **Cleanliness & Respect**: Keep spaces clean and respectful. Dispose of waste in provided bins.
- **Cooking & Food**: Guests are free to bring their own food, groceries, and birthday cakes. Full kitchen and cooking appliances are provided.

### Safety & Health Information
- **Safety Equipment**: Smoke alarms and carbon monoxide alarms are not installed on property; guests may bring portable battery-operated safety devices if desired.
- **Secure Gated Perimeter**: Private fenced compound ensuring complete privacy and safety.

---

## 6. Frequently Asked Questions (Complete FAQ Master)

#### Q1: How many guests can Santiagos Resort accommodate?
> **Answer**: The resort accommodates up to **40 guests total**. The base rate covers up to 20 guests. For 21–40 guests, an additional **₱1,000 per extra head** applies. Kids 3 years old and below: maximum 3 are FREE. Please declare your full headcount when booking.

#### Q2: What are check-in and check-out times?
> **Answer**: Check-in is after **3:00 PM** and checkout is before **12:00 PM (noon)**. Early check-in or late checkout may be arranged subject to schedule availability — message us in advance to confirm.

#### Q3: Are all amenities included in the rate?
> **Answer**: Yes — pool, videoke, billiards, arcade, gym, basketball court, bonfire area, full kitchen, TV, Wi-Fi, and free parking are all included in your nightly rate. The listing has 22+ amenities — no extra charges to use any of them.

#### Q4: Are pets allowed at the resort?
> **Answer**: No — Santiagos Resort is a **pet-free property** to ensure a comfortable experience for all guests. Thank you for your understanding.

#### Q5: Should I book through Airbnb or directly?
> **Answer**: Book directly by messaging us on Facebook or Instagram **@santiagos.to**, or call **0917 800 5320** / **0922 830 5320**. Direct bookings only — pricing may vary between Airbnb and direct bookings.

#### Q6: Is Santiagos good for corporate team buildings?
> **Answer**: Absolutely! The resort is ideal for **team buildings, company outings, birthday parties, family reunions, and barkada trips**. The variety of amenities — pool, sports, videoke, arcade games — ensures every person in your group stays engaged.

#### Q7: What is the cancellation policy?
> **Answer**: Cancellation terms on Airbnb are managed through the Airbnb platform according to the listing's set cancellation tier. For direct bookings, contact our team directly to discuss booking date adjustments and deposit policies.

#### Q8: How far is Santiagos from Manila?
> **Answer**: Santiagos Resort is located in Alfonso, Cavite — approximately **1.5–2 hours from Metro Manila** via SLEX / CAVITEX and the STAR Tollway, and about **15–20 minutes from Tagaytay City**.

---

## 7. Step-by-Step Driving Directions & Location Milestones

**Landmark Landmark**: Starting from **Twin Lakes Tagaytay** (Approx. 15 minutes to resort):

1. **Step 1**: Start at **Twin Lakes Tagaytay** (main landmark reference).
2. **Step 2**: Head **west** on Tagaytay-Nasugbu / Tagaytay-Laurel Highway toward Amuyong-Kaytitinga Road.
3. **Step 3**: Turn **right** onto **Amuyong-Kaytitinga Road**.
4. **Step 4**: Turn **left** onto **Kaytitinga-Magallanes Road**.
5. **Step 5**: Turn **right** at the **7-Eleven Kaytitinga** (you will also pass the Alfamart milestone on Kaytitinga-Magallanes Rd).
6. **Step 6**: Turn **right** at the **Cell Repair Shop** into the small access street leading directly to the Santiagos Resort gate.
7. **Arrival**: *You've arrived at Santiagos Resort! Kaytitinga II, Alfonso, Cavite 4123.*

### Public Transit Route
- Board a Tagaytay/Nasugbu bound bus from Manila (PITX or Buendia).
- Drop off at **Twin Lakes Tagaytay** or **Amuyong junction**.
- Take a local tricycle directly to **Santiagos Resort, Kaytitinga II, Alfonso**.

---

## 8. Nearby Destinations & Local Attraction Guide

| Attraction | Travel Time | Highlights & Description | Tags | Google Drive Thumbnail | Fallback Image |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Taal Volcano & Lake** | ~30 min away | Famous geological wonder — a volcano inside a lake inside an island. Boat tours across Taal lake and crater lookouts. | `Nature`, `Scenic View`, `Day Trip`, `Photography` | [Drive URL](https://drive.google.com/thumbnail?id=1OGJyrH47pygVITjsf6QV6NGNmOus2F4p&sz=w800) | `https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Taal_Volcano_Island.jpg/1280px-Taal_Volcano_Island.jpg` |
| **Tagaytay City Ridge** | ~15–20 min away | Cool 18–24°C ridge with cliff-side restaurants, panoramic Taal views, bulalo joints, and fresh strawberry taho. | `Dining`, `Scenic View`, `Shopping`, `Cool Climate` | [Drive URL](https://drive.google.com/thumbnail?id=189rkrY-lBENvoB0qA4NhTmuGE8-XUWbZ&sz=w800) | `img('pool2', 800)` |
| **Sky Ranch Tagaytay** | ~20 min away | Family amusement park featuring the giant Sky Eye Ferris Wheel offering 360° views above the Taal Ridge. | `Family`, `Amusement Park`, `Views`, `All Ages` | [Drive URL](https://drive.google.com/thumbnail?id=1Mq2yzNDtGJSP8nN69y6FfiehXslg5c-2&sz=w800) | `img('ext8', 800)` |
| **Alfonso Town Proper** | ~5 min away | "Coffee Capital of Cavite" — local coffee farms, wet markets, farm-to-table cafes, and bakeries. | `Coffee`, `Local Food`, `Farm Visits`, `Chill Vibes` | [Drive URL](https://drive.google.com/thumbnail?id=1o5xjyXtrcUe_h-a-bqw83L5B9V1QbMC2&sz=w800) | `img('ext9', 800)` |

### Practical Travel Tips
- **Stocking Up on Groceries**: Fresh produce, meats, and charcoal are available at Alfonso Public Market (5 min away). Supermarkets (Robinsons Tagaytay, WalterMart) are 15–20 min away.
- **Cool Evenings**: Because Alfonso sits at ~600m elevation, nights can drop to 18°C. Guests are advised to bring a light jacket.

---

## 9. Pre-Arrival Packing Checklist

The resort provides all major facilities. Guests are advised to pack:
- [ ] Food & cooking ingredients / snacks
- [ ] Alcoholic & non-alcoholic drinks / beverages
- [ ] Birthday cake & celebration decor
- [ ] Swimwear, swimming goggles & pool towels
- [ ] Personal toiletries & bath towels
- [ ] Extra clothes & sleepwear
- [ ] Phone chargers & powerbanks
- [ ] Camera, tripod & selfie sticks
- [ ] Cooler & extra ice bags
- [ ] Marshmallows / hotdogs for bonfire
- [ ] Board games / card games
- [ ] Personal maintenance medication
- [ ] Gym clothes / sports shoes (for basketball/gym)

---

## 10. Occasion Packages & Setups

1. **Birthday Parties**:
   - Signature photo wall with gold neon signage.
   - Daytime pool party transitioning to evening videoke.
   - Outdoor dining setup for cake cutting and birthday dinners.
2. **Barkada Trips**:
   - Kangaroo billiards table tournaments.
   - Multi-cabinet retro arcade gaming battles.
   - Half-court basketball shootouts.
   - Nighttime bonfire hangout under the stars.
3. **Family Reunions**:
   - Multi-generational entertainment: Arcades for kids, videoke & pool for adults, veranda relaxation for elders.
   - Full kitchen to cook family heritage recipes.
4. **Corporate Outings & Team Building**:
   - Relay races in the pool and sports tournaments.
   - Team strategy sessions around the bonfire circle.
   - Dedicated private facility with no interference from outside guests.

---

## 11. Verified Guest Reviews & Testimonials

| Reviewer | Origin | Rating | Testimonial Quote |
| :--- | :--- | :--- | :--- |
| **Mark A.** | Manila | ★★★★★ (5.0) | *"Santiago Resort exceeded our expectations! We were a group of 28, and there was plenty of space for everyone. The billiards, pool, and videoke kept us entertained all night. 10/10!"* |
| **Kyla C.** | Cavite | ★★★★★ (5.0) | *"Had my 25th birthday here and it was magical! The dining area with the gold signature sign is the perfect backdrop. Beautiful container resort, very photogenic, and extremely clean."* |
| **Dave L.** | Quezon City | ★★★★★ (5.0) | *"Booked it for our corporate team outing. The basketball court was a huge hit, and the bonfire at night was a great place to chat and relax. Excellent hosts and very easy direct booking."* |

---

## 12. Color Palette & Design Tokens

### Color Values & Semantic Roles

| Token Name | Hex Code | RGB | Intended Role |
| :--- | :--- | :--- | :--- |
| **`cream`** (`bg`) | `#faf5ee` | `250, 245, 238` | Primary page background |
| **`cream-dk`** (`bg-alt`) | `#f2e8d9` | `242, 232, 217` | Alternating section background, card interiors |
| **`terra`** | `#c07a4f` | `192, 122, 79` | Primary terracotta brand color, CTA buttons, active states |
| **`terra-dk`** | `#9a5835` | `154, 88, 53` | Primary button hover background |
| **`terra-lt`** / **`terra-light`** | `#d4956e` | `212, 149, 110` | Accent text on dark backgrounds, subheaders |
| **`gold`** | `#c9a84c` | `201, 168, 76` | Pricing numerals, counter highlights, luxury badges |
| **`gold-lt`** / **`gold-light`** | `#e0c46e` | `224, 196, 110` | Tag badges on dark heroes, star rating vectors |
| **`sand`** | `#e2ceb4` | `226, 206, 180` | Card borders, container outline strokes |
| **`sand-lt`** | `#ede3d4` | `237, 227, 212` | Subtle dividers and table borders |
| **`forest`** | `#3d5229` | `61, 82, 41` | Success checkmarks, confirmed badges, nature tags |
| **`ink`** | `#1a0f07` | `26, 15, 7` | Dark section containers, subpage hero headers |
| **`ink-soft`** | `#3d2410` | `61, 36, 16` | Standard body paragraph typography |
| **`charcoal`** | `#0f0804` | `15, 8, 4` | Deep footer background, stats counters |

### Third-Party Brand Colors
- **WhatsApp**: `#25D366` (Hover: `#20ba56`)
- **Airbnb Brand**: `#FF5A5F`
- **Instagram Gradient**: `linear-gradient(135deg, #833ab4, #fd1d1d 50%, #fcb045)`

### CSS Variables Block
```css
:root {
  --ink:       #1a0f07;
  --ink-s:     #3d2410;
  --terra:     #c07a4f;
  --terra-dk:  #9a5835;
  --terra-lt:  #d4956e;
  --cream:     #faf5ee;
  --cream-dk:  #f2e8d9;
  --sand:      #e2ceb4;
  --sand-lt:   #ede3d4;
  --gold:      #c9a84c;
  --gold-lt:   #e0c46e;
  --forest:    #3d5229;
  --charcoal:  #0f0804;
  --bg:        #faf5ee;
  --bg-alt:    #f2e8d9;
}
```

---

## 13. Typography & Font Specifications

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600;700&family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
```

### Font Families & Roles
1. **Playfair Display**: `'Playfair Display', 'Cormorant Garamond', Georgia, serif`  
   *Usage*: Headings (`h1`, `h2`, `h3`), section display titles.
2. **Cormorant Garamond**: `'Cormorant Garamond', Georgia, serif`  
   *Usage*: Body copy, descriptions, quotes, large numerals, policy text.
3. **Great Vibes**: `'Great Vibes', cursive`  
   *Usage*: Brand cursive logo ("Santiagos Resort").
4. **Outfit**: `'Outfit', system-ui, sans-serif`  
   *Usage*: UI labels, buttons, navigation links, date pickers, price tags, breadcrumbs.

---

## 14. UI Tokens: Radii, Shadows & Transitions

- **Border Radius**: Small `6px` (`var(--r)`), Large Containers `14px` (`var(--r-lg)`), Pills `999px` (`var(--r-pill)`).
- **Box Shadows**:
  - `sh-sm`: `0 2px 10px rgba(26, 15, 7, 0.08)`
  - `sh-md`: `0 6px 28px rgba(26, 15, 7, 0.13)`
  - `sh-lg`: `0 16px 56px rgba(26, 15, 7, 0.18)`
  - `sh-xl`: `0 28px 80px rgba(26, 15, 7, 0.24)`
- **Keyframe Animations**:
  - Marquee: `animation: marq 32s linear infinite`
  - WhatsApp Pulse: `animation: ring 2.4s ease-out infinite`

---

## 15. Hardcoded URLs & External Links

| Resource | Purpose | Target Link |
| :--- | :--- | :--- |
| **Airbnb Listing** | Official Airbnb listing | `https://www.airbnb.com/rooms/1643466979772957530` |
| **Facebook Page** | Official Facebook Page & Messaging | `https://www.facebook.com/people/Santiagos-Private-Resort/61576644491245/` |
| **Instagram Page** | Official Instagram Profile | `https://www.instagram.com/santiagos.to` |
| **WhatsApp Direct Link** | General Inquiry | `https://wa.me/639228305320?text=Hi!+Im+interested+in+booking+Santiagos+Resort+Tagaytay.` |
| **Google Maps Pin** | Direct Google Maps pin | `https://www.google.com/maps/place/Santiagos+Private+Resort/@14.1093627,120.8199956,17z` |
| **Waze Route Link** | Direct Waze routing | `https://ul.waze.com/ul?place=ChIJXRLUWwCdvdMRm0nUqZSQCmw` |
| **Google Maps Iframe Embed** | Iframe embed source | `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.5!2d120.8199956!3d14.1093627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9d005b93125d%3A0x6c0a9094a9d4399b!2sSantiagos+Private+Resort!5e0!3m2!1sen!2sph!4v1712400000000!5m2!1sen!2sph` |
| **Phone 1 (Smart)** | Direct Phone Call | `tel:+639178005320` (`0917 800 5320`) |
| **Phone 2 (Sun/Globe)** | Direct Phone Call | `tel:+639228305320` (`0922 830 5320`) |

---

## 16. Video & Directions Poster Embeds (Google Drive)

| Asset | Media Type | Embed / Thumbnail URL |
| :--- | :--- | :--- |
| **Resort Video Tour** | Google Drive Video Embed | `https://drive.google.com/file/d/1f1u_JuPgRRNEjmTNMZfvg9KpugSRYgEO/preview` |
| **Navigation Drive Video** | Google Drive Video Embed | `https://drive.google.com/file/d/1ZWg_wszkmugcqoqiRSygm-rgKSxudyLm/preview` |
| **Directions Poster (High Res)** | Google Drive Thumbnail (2400px) | `https://drive.google.com/thumbnail?id=1B2SaOx-mvjyO2kjkGr1hmQe4HeiiV-OH&sz=w2400` |
| **Directions Poster (Standard)** | Google Drive Thumbnail (1600px) | `https://drive.google.com/thumbnail?id=1B2SaOx-mvjyO2kjkGr1hmQe4HeiiV-OH&sz=w1600` |
| **Directions Poster Fallback** | Google Drive Preview | `https://drive.google.com/file/d/1B2SaOx-mvjyO2kjkGr1hmQe4HeiiV-OH/preview` |

---

## 17. Airbnb Muscache Image Registry & UUID Mapping

### Base URL Pattern
```
https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/{UUID}.jpeg?im_w={WIDTH}
```
*(Standard CDN Widths: `240`, `480`, `720`, `1200`, `1920`)*

### Image Key Mapping Table

| Key | Category | Muscache UUID | Label / Description | CDN URL (`im_w=1920`) |
| :--- | :--- | :--- | :--- | :--- |
| `ext1` | Exterior | `aedee59c-00c6-48fc-8edc-e684ae38a6d3` | Resort Exterior — Industrial Chic Container Design | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/aedee59c-00c6-48fc-8edc-e684ae38a6d3.jpeg?im_w=1920) |
| `ext2` | Exterior | `6043831d-e9d1-4e7d-a501-1876e1e88edf` | Resort Architecture & Container Lines | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/6043831d-e9d1-4e7d-a501-1876e1e88edf.jpeg?im_w=1920) |
| `ext3` | Exterior | `ffd5ba89-7c68-48ed-bca7-529add0f6b8e` | Resort Architecture & Container Deck | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/ffd5ba89-7c68-48ed-bca7-529add0f6b8e.jpeg?im_w=1920) |
| `ext4` | Exterior | `7904e985-91d2-47e1-8d6d-f3ee94cd4baf` | Resort Architecture Overview | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/7904e985-91d2-47e1-8d6d-f3ee94cd4baf.jpeg?im_w=1920) |
| `ext5` | Exterior | `12ceda05-0b84-4e63-ae50-b7a1ded55a8a` | Resort Landscape Views | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/12ceda05-0b84-4e63-ae50-b7a1ded55a8a.jpeg?im_w=1920) |
| `ext6` | Exterior | `19b6d0b8-7a69-4408-9ee1-1a844516a8a4` | Resort Grounds & Perimeter | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/19b6d0b8-7a69-4408-9ee1-1a844516a8a4.jpeg?im_w=1920) |
| `ext7` | Exterior | `7904e985-91d2-47e1-8d6d-f3ee94cd4baf` | Resort Architecture Angle | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/7904e985-91d2-47e1-8d6d-f3ee94cd4baf.jpeg?im_w=1920) |
| `ext8` | Exterior | `37fb90b8-9556-4c2a-a22f-6c3936a6aebc` | Property Grounds | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/37fb90b8-9556-4c2a-a22f-6c3936a6aebc.jpeg?im_w=1920) |
| `ext9` | Exterior | `72b11e48-9433-4fdb-b3da-5fff4c67f5f5` | Walkway & Landscape Trees | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/72b11e48-9433-4fdb-b3da-5fff4c67f5f5.jpeg?im_w=1920) |
| `ext10` | Exterior | `98b5142f-e72f-4cdf-8d7a-c91d1a0e356d` | Evening Facade & Lights | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/98b5142f-e72f-4cdf-8d7a-c91d1a0e356d.jpeg?im_w=1920) |
| `ext11` | Exterior | `855fa635-4bc7-4efb-9ea7-de367495c537` | Outer Compound Wall | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/855fa635-4bc7-4efb-9ea7-de367495c537.jpeg?im_w=1920) |
| `ext12` | Exterior | `a5949505-2121-482c-8525-c9fad7abb6d6` | High Angle Resort Overview | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/a5949505-2121-482c-8525-c9fad7abb6d6.jpeg?im_w=1920) |
| `pool1` | Pool | `51364ca8-54b3-4f0b-9840-3f92171707eb` | Swimming Pool Main View | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/51364ca8-54b3-4f0b-9840-3f92171707eb.jpeg?im_w=1920) |
| `pool2` | Pool | `e9fae679-5f90-4c28-9675-71c03be31de0` | Pool Area & Loungers | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/e9fae679-5f90-4c28-9675-71c03be31de0.jpeg?im_w=1920) |
| `pool3` | Pool | `3af6b26c-4a6b-427f-a28a-c767df166b86` | Pool Deck & Mountain Breeze | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/3af6b26c-4a6b-427f-a28a-c767df166b86.jpeg?im_w=1920) |
| `pool4` | Pool | `0017c9e7-9077-4899-86df-49f2dfecd075` | Pool Water Feature | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/0017c9e7-9077-4899-86df-49f2dfecd075.jpeg?im_w=1920) |
| `pool5` | Pool | `e9fae679-5f90-4c28-9675-71c03be31de0` | Pool Area | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/e9fae679-5f90-4c28-9675-71c03be31de0.jpeg?im_w=1920) |
| `pool6` | Pool | `b800534f-c860-4d16-a179-fb2c4a90a4b8` | Pool Evening Lighting | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/b800534f-c860-4d16-a179-fb2c4a90a4b8.jpeg?im_w=1920) |
| `kara1` | Videoke | `0602e46f-d78c-4a27-87fb-4a7247813d55` | Videoke Room with Music Poster Gallery | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/0602e46f-d78c-4a27-87fb-4a7247813d55.jpeg?im_w=1920) |
| `kara2` | Videoke | `066847df-060c-4ae6-ba4c-fbe732b4c9a5` | Videoke Seating Setup | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/066847df-060c-4ae6-ba4c-fbe732b4c9a5.jpeg?im_w=1920) |
| `kara3` | Videoke | `cfbd6cbd-76b3-42d1-bb7b-6ba352d41450` | Poster Wall & L-Sofa | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/cfbd6cbd-76b3-42d1-bb7b-6ba352d41450.jpeg?im_w=1920) |
| `bill1` | Billiards | `0ce25d04-888c-42a6-ad43-4433d8d60294` | Billiards Room Overview | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/0ce25d04-888c-42a6-ad43-4433d8d60294.jpeg?im_w=1920) |
| `bill2` | Billiards | `d689919f-f256-4d90-9753-af61e7965c31` | Kangaroo Pool Table | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/d689919f-f256-4d90-9753-af61e7965c31.jpeg?im_w=1920) |
| `bill3` | Billiards | `0ce25d04-888c-42a6-ad43-4433d8d60294` | Billiards Room Detail | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/0ce25d04-888c-42a6-ad43-4433d8d60294.jpeg?im_w=1920) |
| `arc1` | Arcade | `0b3fcbdd-4ad1-459b-8dd3-786a774c8521` | Arcade Cabinet Lineup | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/0b3fcbdd-4ad1-459b-8dd3-786a774c8521.jpeg?im_w=1920) |
| `arc2` | Arcade | `8d5c0226-0717-4fe1-9a76-88c002944ec1` | Arcade Machine Close-up | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/8d5c0226-0717-4fe1-9a76-88c002944ec1.jpeg?im_w=1920) |
| `arc3` | Arcade | `c7618b1a-3fd3-4220-91e9-fdd87d3f4b14` | Retro Arcade Unit | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/c7618b1a-3fd3-4220-91e9-fdd87d3f4b14.jpeg?im_w=1920) |
| `din1` | Dining | `7ab52115-9626-4fee-94c1-31776317887f` | Dining Table Setup | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/7ab52115-9626-4fee-94c1-31776317887f.jpeg?im_w=1920) |
| `din2` | Dining | `97ca24a6-4a16-4fdf-8e34-18f5f6d50574` | Dining Area Atmosphere | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/97ca24a6-4a16-4fdf-8e34-18f5f6d50574.jpeg?im_w=1920) |
| `din3` | Dining | `422ade24-d533-4620-94ef-2f2311c99066` | Dining Area — Santiago's Signature Wall | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/422ade24-d533-4620-94ef-2f2311c99066.jpeg?im_w=1920) |
| `kit1` | Kitchen | `07c88337-25d4-4164-977b-ade6a77d9f7f` | Kitchen Appliances & Counters | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/07c88337-25d4-4164-977b-ade6a77d9f7f.jpeg?im_w=1920) |
| `kit2` | Kitchen | `7a14c4ef-4630-4707-b982-b92a72a4cbc3` | Kitchen Cooktop | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/7a14c4ef-4630-4707-b982-b92a72a4cbc3.jpeg?im_w=1920) |
| `kit3` | Kitchen | `34cbfa30-4591-469a-8bb0-e9e1ea6e3d38` | Kitchen Storage | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/34cbfa30-4591-469a-8bb0-e9e1ea6e3d38.jpeg?im_w=1920) |
| `kit4` | Kitchen | `679d0422-ca4d-483a-9930-9b9171905841` | Kitchen Overview | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/679d0422-ca4d-483a-9930-9b9171905841.jpeg?im_w=1920) |
| `lou1` | Lounge | `34ce9446-3458-48de-8f19-4f6dee8d8ae1` | Lounge Seating | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/34ce9446-3458-48de-8f19-4f6dee8d8ae1.jpeg?im_w=1920) |
| `lou2` | Lounge | `27041d27-0bfc-4148-9167-4f0e51843487` | Chill Spot | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/27041d27-0bfc-4148-9167-4f0e51843487.jpeg?im_w=1920) |
| `lou3` | Lounge | `53089b73-cb81-40b3-b94e-011048c96502` | Indoor Hangout | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/53089b73-cb81-40b3-b94e-011048c96502.jpeg?im_w=1920) |
| `lou4` | Lounge | `cd39776f-1169-40fd-9f97-acc3c480ec90` | Lounge Area | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/cd39776f-1169-40fd-9f97-acc3c480ec90.jpeg?im_w=1920) |
| `liv1` | Living | `5f3c7ae0-83d1-4d7e-80ee-8882caeafb41` | Living Room Space | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/5f3c7ae0-83d1-4d7e-80ee-8882caeafb41.jpeg?im_w=1920) |
| `bed1` | Bedroom | `1dfafeed-b7d8-4ee2-9685-f4b21ee2ac0c` | VIP Room 1 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/1dfafeed-b7d8-4ee2-9685-f4b21ee2ac0c.jpeg?im_w=1920) |
| `bed2` | Bedroom | `1eea7c15-e6bc-480f-9049-7a7ca831306a` | Bedroom 7 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/1eea7c15-e6bc-480f-9049-7a7ca831306a.jpeg?im_w=1920) |
| `bed3` | Bedroom | `7fdad08c-cd56-4bd8-9913-df31206d2a71` | Bedroom 3 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/7fdad08c-cd56-4bd8-9913-df31206d2a71.jpeg?im_w=1920) |
| `bed4` | Bedroom | `231f8e62-c8af-4ab9-ab7b-749426418278` | Bedroom 4 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/231f8e62-c8af-4ab9-ab7b-749426418278.jpeg?im_w=1920) |
| `bed5` | Bedroom | `412ac041-c128-4dcb-be95-9613525155ac` | Bedroom 5 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/412ac041-c128-4dcb-be95-9613525155ac.jpeg?im_w=1920) |
| `bed6` | Bedroom | `a7a5da0a-0cca-4155-a690-85d8a35d5073` | Bedroom 6 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/a7a5da0a-0cca-4155-a690-85d8a35d5073.jpeg?im_w=1920) |
| `bed7` | Bedroom | `a416db78-e791-485f-99cd-681dfc37c943` | VIP Room 2 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/a416db78-e791-485f-99cd-681dfc37c943.jpeg?im_w=1920) |
| `bed8` | Bedroom | `c7314967-2138-4874-bf9c-036713e1e84f` | Bedroom 8 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/c7314967-2138-4874-bf9c-036713e1e84f.jpeg?im_w=1920) |
| `bat1` | Bathroom | `6a64f515-0249-440e-937b-73fe1cc63898` | Bathroom 1 (Rain Shower) | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/6a64f515-0249-440e-937b-73fe1cc63898.jpeg?im_w=1920) |
| `bat2` | Bathroom | `7bd29da9-1398-456e-81ab-7f3f06a8b10f` | Bathroom 2 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/7bd29da9-1398-456e-81ab-7f3f06a8b10f.jpeg?im_w=1920) |
| `bat3` | Bathroom | `73e7dd06-2f9b-479e-8925-0a24bf769a9c` | Bathroom 3 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/73e7dd06-2f9b-479e-8925-0a24bf769a9c.jpeg?im_w=1920) |
| `bat4` | Bathroom | `380a4b0e-bc04-4540-8ab5-3446055037b4` | Bathroom 4 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/380a4b0e-bc04-4540-8ab5-3446055037b4.jpeg?im_w=1920) |
| `bat5` | Bathroom | `01672d22-f62b-4081-9372-e090179020ca` | Bathroom 5 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/01672d22-f62b-4081-9372-e090179020ca.jpeg?im_w=1920) |
| `bat6` | Bathroom | `5444278e-4394-474a-aa9f-e233672be193` | Bathroom 6 | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/5444278e-4394-474a-aa9f-e233672be193.jpeg?im_w=1920) |
| `bat7` | Bathroom | `edf6c0b7-2c0d-416a-895b-ae85e5455368` | Outdoor Bathroom | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/edf6c0b7-2c0d-416a-895b-ae85e5455368.jpeg?im_w=1920) |
| `gym1` | Gym | `7b8c51d9-24b2-4846-b173-6d2459c53981` | Gym Equipment & Weights | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/7b8c51d9-24b2-4846-b173-6d2459c53981.jpeg?im_w=1920) |
| `gym2` | Gym | `23fa05de-4f88-4694-9357-74ae76635ab2` | Gym Room Area | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/23fa05de-4f88-4694-9357-74ae76635ab2.jpeg?im_w=1920) |
| `gym3` | Gym | `d6337543-a580-4b38-aa27-35657a04ec03` | Fitness Bench | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/d6337543-a580-4b38-aa27-35657a04ec03.jpeg?im_w=1920) |
| `fir1` | Bonfire | `15fd6a0c-36f4-4c79-a187-279fc9e1d45c` | Bonfire Area Seating | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/15fd6a0c-36f4-4c79-a187-279fc9e1d45c.jpeg?im_w=1920) |
| `fir2` | Bonfire | `e5bd4dfa-98c5-4931-baf0-cebb6ed2d048` | Cozy Night Fire | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/e5bd4dfa-98c5-4931-baf0-cebb6ed2d048.jpeg?im_w=1920) |
| `bbl1` | Basketball | `7932f6a1-879d-4276-ab69-433d47ad8ca0` | Basketball Half-Court | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/7932f6a1-879d-4276-ab69-433d47ad8ca0.jpeg?im_w=1920) |
| `bbl2` | Basketball | `ff9e2cfe-96b7-4992-8cd8-81499c84335f` | Court Angle View | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/ff9e2cfe-96b7-4992-8cd8-81499c84335f.jpeg?im_w=1920) |
| `out1` | Outdoor | `58004ff1-df45-4949-ad63-6316ab7abe96` | Outdoor Dining Area | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/58004ff1-df45-4949-ad63-6316ab7abe96.jpeg?im_w=1920) |
| `out2` | Outdoor | `77973507-5528-471c-b8ac-e6d0c1968e2b` | Garden Patio | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/77973507-5528-471c-b8ac-e6d0c1968e2b.jpeg?im_w=1920) |
| `out3` | Outdoor | `58004ff1-df45-4949-ad63-6316ab7abe96` | Veranda Seating | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/58004ff1-df45-4949-ad63-6316ab7abe96.jpeg?im_w=1920) |
| `out4` | Outdoor | `c71e1998-1707-4dac-96aa-ecdef112ada0` | Resort Walkway | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/c71e1998-1707-4dac-96aa-ecdef112ada0.jpeg?im_w=1920) |
| `out5` | Outdoor | `e5bd4dfa-98c5-4931-baf0-cebb6ed2d048` | Green Lawn & Courtyard | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/e5bd4dfa-98c5-4931-baf0-cebb6ed2d048.jpeg?im_w=1920) |
| `out6` | Outdoor | `e7b07cde-5fc2-4104-bc75-d55b0feeefbd` | Container Architecture Detail | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/e7b07cde-5fc2-4104-bc75-d55b0feeefbd.jpeg?im_w=1920) |
| `out7` | Outdoor | `ee1d6f90-bc3c-486b-a8ad-cbdfa2484e5a` | Chill Deck | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/ee1d6f90-bc3c-486b-a8ad-cbdfa2484e5a.jpeg?im_w=1920) |
| `out8` | Outdoor | `f267480b-660d-406e-b3ba-da1a4ab75272` | Night Lighting | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/f267480b-660d-406e-b3ba-da1a4ab75272.jpeg?im_w=1920) |

### Extra Muscache Assets (Gallery Exclusive)
| Key / Type | Category | Muscache UUID | Description | CDN URL |
| :--- | :--- | :--- | :--- | :--- |
| `gal_out1` | Outdoor | `269a1081-43b6-4179-b104-e446e4878e29` | Covered Al Fresco Outdoor Dining | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/269a1081-43b6-4179-b104-e446e4878e29.jpeg?im_w=1920) |
| `gal_int1` | Interior | `c5099b93-dc0b-4082-ab4e-66d7c6229024` | 2nd Floor — Highland View Windows | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/c5099b93-dc0b-4082-ab4e-66d7c6229024.jpeg?im_w=1920) |
| `gal_ext1` | Exterior | `f1e5dfce-68ba-4a14-8b10-92c43d231940` | Aerial View — Resort from Above | [Link](https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/f1e5dfce-68ba-4a14-8b10-92c43d231940.jpeg?im_w=1920) |

---

## 18. Lucide React Vector Icons Reference

| Domain | Icon Component | Purpose / Representation |
| :--- | :--- | :--- |
| **Entertainment** | `Waves`, `Mic`, `Music`, `CircleDot`, `Gamepad2`, `Tv` | Swimming Pool, Videoke, Billiards, Arcade, TV |
| **Activities & Fitness** | `Dumbbell`, `Dribbble`, `Flame`, `ChefHat`, `Utensils`, `Wifi`, `ParkingCircle`, `Car`, `Trees`, `Wind` | Gym, Basketball, Bonfire, Kitchen, Dining, Wi-Fi, Parking, Outdoor, AC |
| **Rooms & Policies** | `Bed`, `ShowerHead`, `Clock`, `Users`, `Home`, `ShieldAlert`, `Ban`, `Info` | Bedrooms, Bathrooms, Check-in/out, Headcount, House Rules, Safety, No Pets |
| **Navigation & UI** | `Phone`, `Globe`, `MapPin`, `Mountain`, `ChevronRight`, `Sparkles`, `Star`, `Heart` | Contact Phone, Socials, Maps, Landmarks, Breadcrumbs, Accents, Reviews, Footer |

---

## 19. Static Root Asset Manifest

- `favicon.ico`: Multi-size browser icon (2.68 kB)
- `favicon.png`: 32×32 pixel PNG favicon (6.16 kB)
- `apple-touch-icon.png`: 180×180 Apple touch icon (6.16 kB)
- `icon-192.png`: 192×192 PWA / Mobile Home screen icon (6.60 kB)
- `icons.svg`: Standalone SVG sprite definitions (11.5 kB)
