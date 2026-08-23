# 04 — Component Library

Fetch-first philosophy this time: React Bits and shadcn/ui cover most of
what this site needs. Only hand-build the components that are genuinely
specific to this business (the rate estimator, the directions stepper) —
everything else should be pulled and then restyled to whatever `DESIGN.md`
comes out of file 02's workflow, not built from scratch.

## Primitives to fetch

```bash
npx shadcn@latest init
npx shadcn@latest add accordion dialog tabs button separator form input textarea badge
```
shadcn covers: FAQ accordion, gallery lightbox shell (`Dialog`), occasions
page tabs, forms, badges (amenity category tags).

React Bits components — pull each as needed, language/style variant per
whatever the picked `DESIGN.md` specifies (TS-TW is the safe default for
this stack):
```bash
npx shadcn@latest add https://reactbits.dev/r/<ComponentName>-TS-TW
```

## Signature/custom components

### 1. `Hero`
Full-bleed photo or video (§16's resort tour embed, or §17's `ext1`/`ext4`
as a static fallback), primary CTA into the inquiry flow (file 06),
secondary "View Gallery" CTA. Background treatment (gradient, particles,
static photo) comes from the picked design direction — if it calls for
something atmospheric, React Bits has WebGL background components (e.g.
`Aurora`, particle fields) that only need `three`/`@react-three/fiber` as a
dependency, no custom 3D model or asset pipeline required — reasonable
default if the direction wants motion here without literal video.

### 2. `StatCounter`
Carries forward the existing site's count-up pattern (40 guests, 2 VIP
rooms, 9 double-decks, 8 bathrooms) — Framer Motion `useInView` +
`useMotionValue`, count-up on scroll-into-view, respects reduced motion
(jumps to final value instead of animating).

### 3. `AmenityMarquee`
The existing site already has an infinite-scroll amenity ticker
(`marq 32s linear infinite` in the old CSS) — carry the *idea* forward using
a React Bits marquee/ticker component rather than the old hand-rolled CSS
keyframe, so it inherits proper pause-on-hover and reduced-motion handling
for free.

### 4. `RateEstimator`
The centerpiece of `/rates` — **not** from a library, this is the one
component that genuinely needs custom logic. Full spec in
`06-booking-inquiry-flow.md`; summary: date range + guest count inputs,
live-updating price using §4's real `calculateRate()` logic, price digits
animate on change (Framer Motion `AnimatePresence`/number-transition, or a
React Bits number-ticker component if one fits), disclaimer always visible
beside the number, "Inquire about these dates" CTA that carries the
selection into the WhatsApp deep link (file 06).

### 5. `GalleryLightbox`
Grid of §17's image registry, category-filterable (exterior/pool/videoke/
billiards/etc. — tag by key prefix), `shadcn Dialog` for the lightbox shell
with a React Bits carousel/gallery component inside for next/prev + swipe
gestures on mobile. Real `alt` text from each image's "Label/Description"
column in §17 — don't ship these with generic alt text, they're already
written.

### 6. `TestimonialsCarousel`
The 3 real reviews from §11 — a React Bits testimonial/carousel component,
restyled. Only 3 items, so this can be a simple auto-rotating card set
rather than anything elaborate — don't over-build for the content volume
that actually exists (add more slides if the resort supplies more reviews
later; don't pad with generic placeholder reviews now).

### 7. `DirectionsStepper`
§7's step-by-step driving directions (Twin Lakes Tagaytay → resort gate),
built as a numbered vertical stepper, each step revealing on scroll
(sequential, since these are literally sequential turns) — same visual
family as a "how it works" component, restyled. Pair with §16's directions
poster image and Maps/Waze links at the end.

### 8. `NearbyAttractionCards`
§8's four attractions (Taal Volcano, Tagaytay Ridge, Sky Ranch, Alfonso
town) — image + travel time + description + tags, simple card grid, hover
lift/reveal from React Bits' card components.

### 9. `FAQAccordion`
`shadcn Accordion` wrapping §6's full Q1–Q8 set, restyled.

### 10. `OccasionCards`
§10's four occasion types as a tabbed or card-grid layout (`shadcn Tabs` if
tabbed) — each occasion's specific bullet points from §10, its own CTA
framed for that use case ("Planning a birthday?" vs "Booking a team
outing?").

### 11. `StickyContactBar`
The most important conversion component on the site. Persistent
(bottom-fixed on mobile, corner-fixed on desktop) WhatsApp button — the old
CSS's `ring 2.4s ease-out infinite` pulse is a real, intentional attention
cue for a real conversion channel, worth carrying forward as a concept even
if the exact visual changes. Secondary icons for call and Facebook. Uses
§15's exact `wa.me` link pattern — see file 06 for how this integrates with
the rate estimator's selected dates.

### 12. `PackingChecklist`
§9's pre-arrival checklist, rendered as a simple interactive checklist
(client-side only, nothing persisted — this is a helpful reference, not a
saved user account feature) on `/contact` or `/faq`.

### 13. `Footer`
Contact channels, social links, Airbnb link, price disclaimer, nav to key
pages. See content in file 03.

## What NOT to hand-build

Resist building custom versions of: carousels, marquees, hover-card
effects, gradient/particle backgrounds, number tickers, testimonial
sliders — React Bits almost certainly has a version of each already. The
only components in this file that are genuinely bespoke to this business
are `RateEstimator` and `DirectionsStepper`; everything else should be a
fetch-and-restyle.
