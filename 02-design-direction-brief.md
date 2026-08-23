# 02 — Design Direction Brief

Unlike the usual approach, **this file does not specify a palette,
typeface, or layout system.** You asked for the installed skills (file 00b)
to actually make those calls rather than me prescribing them. What follows
is the input those skills need to do that well, plus the workflow for
turning their inference into something you and your sister actually pick
between — not just accept.

## Brand facts to design *from*

- **Industry/category**: whole-property group resort rental — closer to
  "vacation rental for 40 people" than "boutique hotel." Booking decisions
  are made by groups, often collaboratively (someone shares the link in a
  group chat), not solo.
- **Physical identity**: the property is literally built from **shipping
  containers** — "industrial chic container resort" is not marketing
  language, it's the actual architecture. Exposed brick, industrial
  lighting, and a genuinely photographed **illuminated gold "Santiago's"
  script sign** on the dining wall (per the asset doc, the most photographed
  spot on the property) are real, physical, recurring details — not brand
  decoration invented for the website.
- **Climate/setting**: Alfonso sits at ~600m elevation in the Tagaytay
  highlands — cool 18–24°C year-round, a genuine draw for Manila-based
  guests escaping heat. This is a real functional selling point, not just
  atmosphere.
- **Energy**: this is a *play hard* property — pool, videoke, billiards,
  arcade, basketball, bonfire, 40 guests. The mood is closer to "the best
  weekend of your barkada's year" than "quiet luxury retreat." Whatever
  direction the skills propose should hold that energy, not sand it down
  into generic hospitality calm.

## What existed before (reference input, not a mandate)

The old site's tokens (`SITE_ASSETS_AND_DESIGN_SYSTEM.md` §12–14) — a warm
cream/terracotta/gold palette, Playfair Display + Cormorant Garamond +
Great Vibes + Outfit type system, soft radii and shadows — are **context
for the design-inference step, not instructions to preserve.** Feed them in
explicitly so the skills know what currently exists and can make a real
judgment call about what to keep, evolve, or fully replace:

- The **gold accent has real-world grounding** (the actual illuminated sign)
  that a generic AI palette wouldn't know about — worth the skills
  considering even if everything else changes.
- The **cream/terracotta warmth** reads as "cozy craft resort" — reasonable
  for this property, but also increasingly common in the group-rental
  category generally (i.e. exactly the kind of territory Impeccable/Taste
  Skill's slop-detection exists to push back on if it's become *too*
  common). Let the tools make that call rather than assuming the old
  palette is automatically right just because it's familiar.
- The **cursive script logo font** (Great Vibes) is doing brand-identity
  work, not just decoration — flag that distinction to the skills
  explicitly, since a slop-detector's instinct might otherwise be to flag
  any script font as a cliché without knowing this one is load-bearing for
  brand recognition.

## Hard functional constraints (non-negotiable regardless of direction)

Whatever visual direction gets picked, it must satisfy these — they're not
aesthetic preferences, they're how this business actually gets bookings:

- **Mobile-first, genuinely** — a large share of real traffic arrives from
  a Facebook/Instagram link tap, on a phone, often already deep in a group
  chat conversation about the trip. The mobile experience is not a
  secondary breakpoint here.
- **Photography-forward, and must harmonize with real photos** — this site
  runs on real estate photography, not illustration or 3D renders. A
  palette/type system that looks great in isolation but fights the actual
  photos (wrong warmth, wrong contrast, competing with photo color) is a
  real failure mode for this category specifically — call this out to the
  skills explicitly.
- **One obvious path to contact, visible at every scroll depth** — sticky
  WhatsApp/call access, not just a contact page buried in nav.
- **Trustworthy at a glance** — real reviews, real numbers (40 guests, 8
  bathrooms), accurate pricing logic all need to be legible fast; this
  is a bigger, more considered purchase than most landing pages sell.
- **Fast despite being photo-heavy** — see file 09's performance targets.

## The actual workflow (do this, don't skip to building)

1. Feed this file + `01-project-brief.md` + `SITE_ASSETS_AND_DESIGN_SYSTEM.md`
   §12–14 to Taste Skill's brief-inference step (v2 §0 — industry, audience,
   mood, motion depth, layout family).
2. Have it propose **2–3 genuinely different directions**, not variations on
   one idea — e.g., one that evolves the existing warm-industrial palette,
   one that leans harder into the cool-highland/escape angle, one that
   leans into the high-energy "barkada weekend" angle. Taste Skill's
   `soft-skill` and other flavor sub-skills are useful inputs here if a
   direction wants a specific texture, but the agent should feel free to
   propose something that isn't any single pre-built flavor.
3. For each direction, generate a real `DESIGN.md` (Impeccable, Google
   Stitch format) and a small preview — a hero section or two is enough,
   doesn't need to be the whole site.
4. **Show all of them to us before building further.** This is the
   decision point that replaces a prescribed design system — treat it as a
   real choice, not a formality.
5. Once picked, that `DESIGN.md` becomes the system of record for every
   phase after — Impeccable inherits it, doesn't re-invent it each phase.

## Guardrail while designing

Run the picked direction through Impeccable's slop detector before it's
treated as final, specifically checking this category's common tells:
generic "tropical resort" stock-photo gradients, overused palm-leaf/wave
iconography, templated pricing-card layouts lifted from SaaS sites (this is
a vacation rental, not a subscription product), and hero sections that
could belong to literally any resort rather than this one.
