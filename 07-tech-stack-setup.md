# 07 — Tech Stack & Setup

## Stack

Same foundation as any of these builds: **Next.js 15 (App Router) +
TypeScript + Tailwind CSS**, deployed to **Vercel**. Fits the sitemap in
file 03 directly via file-based routing, and `next/image` matters a lot
here given how photo-heavy this site is.

## 1. Scaffold

```bash
npx create-next-app@latest santiagos-resort \
  --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd santiagos-resort
```

## 2. Install

```bash
# animation & interaction
npm i framer-motion gsap lenis @gsap/react

# forms & validation
npm i react-hook-form zod @hookform/resolvers date-fns

# email (contact form fallback — see file 08)
npm i resend

# icons — §18 of the asset doc already specifies Lucide as the icon system
npm i lucide-react

# utility
npm i clsx tailwind-merge class-variance-authority
```

**Don't pre-install a carousel/marquee/3D library up front** — pull React
Bits components as file 04 calls for them; each one declares its own
peer-dependency needs (some need nothing extra, some — like WebGL
backgrounds — need `three`/`@react-three/fiber`/`@react-three/drei`). Adding
these speculatively just bloats the bundle for a photo-heavy site that
already needs to load fast (file 09).

## 3. shadcn/ui + React Bits

```bash
npx shadcn@latest init
npx shadcn@latest add accordion dialog tabs button separator form input textarea badge
```
React Bits components install through the same shadcn registry protocol —
see file 00b/04 for the exact pattern per component.

## 4. Fonts — don't hardcode these

Unlike a typical setup file, **don't add font imports here.** Which
typefaces the site uses is exactly the kind of decision file 02 hands to
the design-inference workflow — the old site's Playfair Display/Cormorant
Garamond/Great Vibes/Outfit stack is reference input for that step, not a
default to wire up before the direction is picked. Add the actual
`next/font/google` imports once `DESIGN.md` exists.

## 5. Tailwind config

Same story — theme tokens (colors, radii, shadows) come from the picked
`DESIGN.md`, not a fixed table here. Once it exists, wire it into
`tailwind.config.ts` the same way as any token-driven Tailwind setup:
```ts
// tailwind.config.ts — fill in `extend` from DESIGN.md once it exists
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: { extend: { /* colors, fontFamily, borderRadius, boxShadow from DESIGN.md */ } },
} satisfies import('tailwindcss').Config
```

## 6. Folder structure

```
/src
  /app
    layout.tsx
    page.tsx                 ← /
    /amenities/page.tsx
    /gallery/page.tsx
    /rooms/page.tsx
    /rates/page.tsx
    /occasions/page.tsx
    /location/page.tsx
    /faq/page.tsx
    /contact/page.tsx
    /api/contact/route.ts     ← see file 08
  /components
    hero.tsx
    stat-counter.tsx
    amenity-marquee.tsx
    rate-estimator.tsx
    gallery-lightbox.tsx
    testimonials-carousel.tsx
    directions-stepper.tsx
    nearby-attraction-cards.tsx
    faq-accordion.tsx
    occasion-cards.tsx
    sticky-contact-bar.tsx
    packing-checklist.tsx
    footer.tsx
    /ui                        ← shadcn + React Bits components land here
  /lib
    smooth-scroll.tsx
    calculate-rate.ts           ← the exact §4 logic from file 06
    whatsapp-link.ts             ← the dynamic link builder from file 06
    utils.ts
  /content
    property.ts                 ← §1–2 data, typed
    amenities.ts                ← §3
    pricing.ts                  ← §4 tiers (display data — calculate-rate.ts holds the logic)
    faq.ts                      ← §6
    directions.ts               ← §7
    attractions.ts               ← §8
    occasions.ts                 ← §10
    reviews.ts                    ← §11
    gallery.ts                    ← §17's full image registry
  /public
    /images                      ← self-hosted photos once migrated off Muscache, see file 08
```

## 7. Content-as-data

Same pattern as any of these builds — type the real content from
`SITE_ASSETS_AND_DESIGN_SYSTEM.md` into `/content/*.ts` rather than
hardcoding it in JSX, so the resort owner (or you) can update pricing/copy
later without touching component code.

## 8. Environment variables

```
RESEND_API_KEY=
CONTACT_EMAIL_TO=
NEXT_PUBLIC_SITE_URL=
```

## 9. Run it

```bash
npm run dev
```
