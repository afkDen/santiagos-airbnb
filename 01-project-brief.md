# 01 — Project Brief

## What this is

A full rebuild of **santiagosresort.com** — the marketing and booking-inquiry
site for Santiagos Resort, a 40-guest-capacity, whole-property, industrial-
chic container resort in Kaytitinga II, Alfonso, Cavite (Tagaytay highlands).
Full property details, pricing, amenities, and policies are in
`SITE_ASSETS_AND_DESIGN_SYSTEM.md` §1–11 — don't re-derive any of that here.

## The business model, in plain terms

This is **not** an e-commerce or real-time-booking site. There's no payment
processor and no live availability calendar in the current build. The whole
site exists to do one job: convince a visitor this is the right resort for
their group, then get them to **message the resort directly** (WhatsApp, FB,
call) or, as a secondary path, book through the Airbnb listing. Every
design and content decision should serve that single conversion path — see
file 06 for the exact mechanics.

## Audience

- **Primary**: the person organizing a group trip — planning a barkada
  getaway, milestone birthday, family reunion, or corporate outing for
  15–40 people, usually browsing on a phone via a Facebook/Instagram link
  or a Google search for something like "resort near Tagaytay for groups."
- They are comparing this against a handful of other Tagaytay-area group
  resorts, often in the same browser tab. The site needs to win that
  comparison fast — within the first screen or two.
- This is a **high-consideration, high-ticket-per-booking** decision
  (₱25,000–₱55,000+ per night, split across a group) — the site needs to
  read as legitimate and trustworthy, not just pretty. Real photos, real
  reviews, and clear, accurate pricing logic all matter more here than on a
  typical landing page.

## Goals of the rebuild

1. Look and feel dramatically more current/polished than the existing site, without losing the warmth and legitimacy a booking decision like this needs.
2. Make the property's actual scale and variety (40 guests, 22+ amenities, 8 bathrooms, the pool, the signature gold dining wall) *felt*, not just listed — this is where real animation/motion earns its place, not decoration for its own sake.
3. Get visitors to the WhatsApp/FB/call conversion point faster and with less friction than the current multi-page click path.
4. Rank locally for group-resort searches in the Tagaytay/Alfonso/Cavite area (see file 09 — this matters as much as the visual rebuild).
5. Stay easy for the resort owner to keep accurate after launch (pricing changes, new photos, updated policies) — see file 08.

## Sitemap

The current site is `index.html` + `contact.html` + `gallery.html` +
`amenities.html` + `packages.html`. For the rebuild, consider consolidating
some of this into a stronger single-scroll home experience with dedicated
deep-dive pages for content that benefits from its own URL (SEO + shareable
links):

```
/                 → hero, property overview, amenity highlights, stats,
                     testimonials, primary CTA — the "convince fast" page
/amenities        → full 22+ amenity catalog, organized by category
/gallery           → full photo grid + lightbox, organized by space
/rooms             → bedroom/bathroom breakdown, sleeping configurations
/rates             → pricing tiers, the interactive rate estimator (file 06),
                     the mandatory price disclaimer
/occasions         → birthday / barkada / family reunion / corporate —
                     packages content, each with its own angle and CTA
/location          → driving directions, nearby attractions, map embed
/faq               → the full FAQ set
/contact           → inquiry form + all direct contact channels
```

Keep `/` doing real work on its own (most visitors won't click past it) —
it should include compressed previews of amenities, gallery, rates, and
testimonials with "see full ___" links out to the dedicated pages, not just
a wall of section links.

## Content source

All real content — property specs, pricing tiers and calculation logic,
house rules, FAQs, driving directions, nearby attractions, guest reviews,
the full image registry, and every hardcoded external URL — lives in
`SITE_ASSETS_AND_DESIGN_SYSTEM.md`. File `03` maps that content onto the
sitemap above; it doesn't duplicate it.
