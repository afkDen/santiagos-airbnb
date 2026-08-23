# 05 — Animation & Motion

Different approach from a typical spec here too: this lists *where* motion
belongs (an opportunity map) rather than prescribing exact curves and
durations for each one — that's deliberately left to Emil's `animate` and
`animation-vocabulary` skills (file 00b), run against the real design
direction once it's picked. The boilerplate setup below (smooth scroll,
reduced motion) isn't a taste decision, so it's specified concretely.

## Global setup (not up for debate)

```ts
// lib/smooth-scroll.tsx
'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    return () => lenis.destroy()
  }, [])
  return <>{children}</>
}
```

`prefers-reduced-motion` gates every scroll-pin/parallax/autoplay effect
listed below — check once, branch the logic (skip the effect entirely, not
just set duration to 0):
```ts
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

## The opportunity map

Run Emil's `find-animation-opportunities` skill against the built pages
once Phase 2 is done to validate/extend this list against what's actually
on the page — treat this as a starting point, not the final word.

| Where | What kind of motion fits | Notes |
|---|---|---|
| Hero | Entrance sequence on load; optional scroll-parallax on the background media | Should feel like the property "arriving," not a generic fade — let Emil's skill pick the actual treatment once the direction is picked |
| Stat counters | Count-up on scroll-into-view | Already scoped in file 04 (`StatCounter`) |
| Amenity marquee | Continuous scroll, pause on hover/focus | React Bits component should handle this natively — verify it does before adding custom logic |
| Rate estimator | Price digits transition on every input change; disclaimer text stays static (don't animate legally-relevant text) | This is the one place motion should communicate *information changing*, not just decorate — keep it snappy, not showy |
| Gallery grid | Stagger fade/scale on scroll-into-view; lightbox open/close transition; swipe/slide between images | |
| Testimonials carousel | Autoplay with pause-on-interaction; slide transition | Only 3 items — don't over-animate a small set |
| Directions stepper | Sequential reveal tied to scroll position (steps are literally sequential, so this is one case where scroll-scrub genuinely earns its place) | |
| Nearby attraction cards | Hover lift/reveal | |
| FAQ accordion | Expand/collapse | Standard, shadcn handles this — no custom animation needed |
| Sticky contact bar | The WhatsApp button's attention-pulse; bar enters after initial scroll rather than being visible instantly (avoid immediately shouting "contact us" before the visitor has seen anything) | This one carries real conversion weight — worth Emil's skill giving it real attention, not a default |
| Page-level nav | Standard route transition | Keep simple — this is a multi-page content site, not an app; elaborate page transitions would slow down a visitor trying to compare pages quickly |

## Restraint principle (carries over from any project)

A resort site's whole job is to convince someone fast. Motion that slows
down getting to the amenities, the price, or the contact button is actively
working against the site's purpose — when in doubt, cut the animation
rather than add one. This is worth stating explicitly to whichever skill
ends up making the final calls, since "more motion" is not automatically
"more appealing" for a conversion-focused business site the way it might be
for a portfolio piece.

## Performance

Photo-heavy site (file 09 has full targets) — animate `transform`/`opacity`
only, lazy-load below-the-fold gallery images and any WebGL hero background,
and test the hero + gallery specifically on a throttled mobile connection
since that's the realistic traffic profile here (see file 01).
