# 09 — Deployment & SEO Checklist

For a real local business, SEO isn't a nice-to-have polish step — it's a
meaningful fraction of how future guests will actually find this site.
Treat this checklist with the same weight as the visual rebuild itself.

## Deploy

1. Push to a GitHub repo, import into Vercel (auto-detects Next.js).
2. Add env vars from file 08.
3. **Deploy to a preview URL first** (Vercel gives you one automatically) — don't point the live `santiagosresort.com` domain at the rebuild until it's approved. Cut the domain over only when ready.
4. **Set up 301 redirects** from the old URL structure to the new one if paths changed: `contact.html → /contact`, `gallery.html → /gallery`, `amenities.html → /amenities`, `packages.html → /rates` or `/occasions` (whichever the new content maps to). This preserves any existing Google ranking and any links already shared in Facebook posts, Instagram bios, or Airbnb's own listing description — losing this silently would be a real, avoidable cost of the rebuild.

## Structured data (schema.org) — do this, it's high-value for a resort

Add JSON-LD to the site root (or per-page where relevant) describing the
property as a `LodgingBusiness`:
```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Santiagos Resort",
  "image": "https://santiagosresort.com/images/ext1.jpg",
  "telephone": "+639178005320",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kaytitinga II",
    "addressLocality": "Alfonso",
    "addressRegion": "Cavite",
    "postalCode": "4123",
    "addressCountry": "PH"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 14.1093627, "longitude": 120.8199956 },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Private Swimming Pool" },
    { "@type": "LocationFeatureSpecification", "name": "Videoke Lounge" }
  ]
}
```
Populate `amenityFeature` from the full §3 list, pull the address/geo
directly from §15's Google Maps pin URL (already has the exact
coordinates). This is what lets Google show rich results (amenities,
rating) directly in search rather than a bare blue link.

## On-page SEO

- Page titles/descriptions targeting real local search intent per page —
  e.g. `/occasions` targeting "team building resort Tagaytay," "birthday
  resort Alfonso Cavite," not just generic "Santiagos Resort" on every page.
- `alt` text on every image pulled from §17's existing Label/Description
  column (already written, don't replace with generic text).
- Open Graph image + description for link previews when the site gets
  shared in a Facebook group chat or Messenger — this happens a lot for
  group-trip planning, worth getting the preview card right.
- `sitemap.xml` and `robots.txt` via `app/sitemap.ts` / `app/robots.ts`.

## Performance targets (this site is photo-heavy — take this seriously)

- Lighthouse: 90+ Performance, 100 Accessibility, 100 Best Practices on `/` and `/gallery` specifically (the two heaviest pages).
- Hero image/video gets `priority`/preload treatment; everything below the fold lazy-loads.
- Test on throttled mobile (Chrome DevTools "Fast 3G") — this matches the realistic traffic profile from file 01 (phone, tapped in from a social link) far better than testing on a fast desktop connection.
- Once images are self-hosted (file 08), confirm `next/image` is actually serving AVIF/WebP at correct responsive sizes, not just wrapping the same full-resolution file.

## Accessibility & responsive (same floor as any build)

- Full keyboard pass, visible focus states, color contrast checked against whatever `DESIGN.md` produces (not assumed from the old tokens).
- Test at 360px through 1440px+ — mobile is the priority breakpoint here, but desktop still matters for the "someone shares it in a group chat and a friend opens it on their laptop at work" case.

## Off-site (outside code scope, but worth flagging to whoever owns this)

- **Google Business Profile**: make sure it's claimed and its details (address, phone, photos, hours) match the new site exactly — inconsistency between GBP and the website actively hurts local ranking.
- Consistent NAP (Name, Address, Phone) across the website, Facebook, Instagram, and Airbnb listing — search engines cross-check this.

## Content correctness pass before launch

- [ ] Every price, phone number, and address on the new site matches `SITE_ASSETS_AND_DESIGN_SYSTEM.md` exactly (or matches an updated version if the freshness check from file 00 turned anything up)
- [ ] The rate estimator's output matches file 06's logic exactly — test a few known cases by hand (e.g. 25 guests, weekend check-in, 2 nights) before trusting it live
- [ ] Every external link (Airbnb, WhatsApp, Maps, Waze, socials) actually opens and goes to the right place
- [ ] Redirects from the old URL structure are live and tested
