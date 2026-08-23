# 03 — Sitemap & Content Mapping

Every section below names which part of `SITE_ASSETS_AND_DESIGN_SYSTEM.md`
it pulls from. Pull real copy/data from there — don't invent numbers,
prices, or amenity descriptions; they already exist and are accurate as of
when that doc was extracted (flagged for a freshness check in file 00).

---

## `/` — Home

| Section | Source | Notes |
|---|---|---|
| Hero | §1 (name, tagline, address, capacity) | Primary CTA → inquiry flow (file 06); secondary CTA → `/gallery`. Whatever hero treatment the picked design direction uses, it needs a real photo or video, not a placeholder — pull from §17's `ext*` keys or §16's resort video tour embed. |
| Stats strip | §1 | 40 max guests, 2 VIP rooms, 9 double-deck beds, 8 bathrooms — animated count-up, this already exists on the current site and is worth keeping as a *pattern* even as the visual direction changes |
| Property overview | §1, §2 | The "industrial chic container" story — 2–3 short paragraphs, not a wall of text |
| Amenity highlights | §3 (pick 4–6 standouts: pool, videoke, billiards, dining/sign wall) | Links to `/amenities` for the full 22+ list |
| Photo preview grid | §17 | 6–8 image keys spanning exterior/pool/videoke/dining; links to `/gallery` |
| Why-Santiagos reasons | Derived from §3 + §8 (climate) + §2 (scale) | The current site's "All-in-One / Cool Climate / Unique Design / Built for Big Groups / Perfect for Any Event / Smart Group Value" framing is solid — keep the substance, let the picked design direction handle the visual treatment |
| Testimonials | §11 | All 3 real reviews — carousel or grid, see file 04 |
| Rate teaser | §4 | Starting price + "see full rates" link to `/rates` — don't put the full calculator on the home page, it's a distraction from the primary CTA here |
| Final CTA | §15 (contact channels) | See file 06 |

## `/amenities`

Full §3 catalog (22+ items), organized by the categories already in the
table (Entertainment, Water/Relaxation, Sports & Fitness, Outdoor Gathering,
Dining & Cooking, Connectivity & Utilities, Convenience). Use §18's Lucide
icon mapping per amenity. This is a good page for the marquee/ticker
component (file 04) at the top, then a full categorized grid below.

## `/gallery`

Full §17 registry — every `ext*`, `pool*`, `kara*`, `bill*`, `arc*`, `din*`,
`kit*`, `lou*`, `liv*`, `bed*`, `bat*`, `gym*`, `fir*`, `bbl*`, `out*` key,
plus §17's "Extra Muscache Assets" gallery-exclusive set. Filterable by
category (tag each image by its key prefix). Lightbox on click, see file
04.

## `/rooms`

§2's detailed room/bedding breakdown — VIP Room 1, VIP Room 2, Bunk Bed
Quarters (9 double-decks), Driver's Room, plus the 8-bathroom breakdown and
"zero-queue guarantee" framing. Pair each room type with its real photos
from §17's `bed*`/`bat*` keys.

## `/rates`

- Full §4 pricing tiers table
- The interactive rate estimator built from §4's `calculateRate()` logic — see file 06, this is the centerpiece of the page
- The mandatory price disclaimer from §4, rendered near *any* price shown on the page, not just once at the bottom
- Link into the inquiry flow with the estimator's selected dates/guest count carried over (file 06)

## `/occasions`

Built from §10's four occasion types (Birthday Parties, Barkada Trips,
Family Reunions, Corporate Outings & Team Building) — each gets its own
card/section with the specific amenities and framing already written there.
This page barely exists on the current site's structure but the content for
it is already fully written in §10 — genuinely worth promoting to a real
page since it lets the site speak to four different search intents
("resort for corporate team building Tagaytay," "resort for 25th birthday
Cavite," etc.) which helps both conversion and SEO (file 09).

## `/location`

- §7's full step-by-step driving directions from Twin Lakes Tagaytay, plus the public transit route — great fit for the directions-stepper component (file 04)
- §16's directions poster image + Google Drive navigation video embed
- §15's Google Maps iframe embed + Waze link
- §8's nearby attractions (Taal Volcano, Tagaytay Ridge, Sky Ranch, Alfonso town) with their images and tags
- §8's practical travel tips (grocery stocking, cool evenings/bring a jacket)

## `/faq`

Full §6 FAQ set (Q1–Q8) as an accordion — see file 04. This content is
already well-written; don't paraphrase it into something worse, just give
it a good interactive shell.

## `/contact`

- §15's every contact channel: WhatsApp deep link, phone (both numbers, tel: links), Facebook, Instagram
- Inquiry form (file 06)
- §5's house rules and safety/policy info, so a serious inquirer has the full picture before messaging
- §9's pre-arrival packing checklist — nice trust-building/helpful addition, shows the resort thinks about the guest experience beyond just booking

## Footer (every page)

Address, both phone numbers, social links, Airbnb listing link, the price
disclaimer, and a link to `/faq`. Keep this dense but not cluttered — it's
doing real navigational and trust work on a site this content-rich.
