# 10 — Master Prompt for Gemini

Paste the block below as your first message, with `SITE_ASSETS_AND_DESIGN_SYSTEM.md`
and files `00b` through `09` attached as reference context. Work phase by
phase, same as any of these builds — don't ask for the whole site at once.

---

## PROMPT BLOCK (copy everything below the line)

---

You are rebuilding **santiagosresort.com** — a real, live, operating
40-guest group resort booking site in Alfonso, Tagaytay, Cavite. This is a
production business site, not a portfolio project — treat pricing logic,
contact info, and image rights accordingly (see files 06 and 08). I've
already installed design/animation skills per `00b-install-ai-skills.md` —
use them throughout, at the checkpoints listed there. Read all of the
attached files before writing any code:

- `SITE_ASSETS_AND_DESIGN_SYSTEM.md` — the canonical source for every real fact, price, image URL, and external link on this site. Never invent data that could come from here instead.
- `00b-install-ai-skills.md` — installed skills and when to invoke each
- `01-project-brief.md` — the business, audience, goals, sitemap
- `02-design-direction-brief.md` — **read this carefully**: I'm not giving you a fixed design system. You need to run the design-inference workflow described in it and produce real options for me to choose between before building further.
- `03-sitemap-content.md` — page-by-page content, mapped to the asset doc's sections
- `04-component-library.md` — components, sourced mostly from React Bits/shadcn
- `05-animation-motion-spec.md` — where motion belongs; specifics come from Emil's skill
- `06-booking-inquiry-flow.md` — the real conversion flow and pricing logic — implement this exactly, don't approximate
- `07-tech-stack-setup.md` — stack and install commands
- `08-backend-forms-cms.md` — the contact route, and the image-hosting migration
- `09-deployment-seo-checklist.md` — SEO/schema requirements — this matters as much as the visual work for a real local business

**Ground rules:**
1. Every real fact — prices, phone numbers, addresses, FAQ answers, image URLs — comes from `SITE_ASSETS_AND_DESIGN_SYSTEM.md`. If something's ambiguous or missing there, ask rather than inventing it; this is a real business's real information.
2. Don't default to a design system on your own — follow file 02's workflow and get my sign-off on a direction before Phase 2 builds real pages on top of it.
3. Componentize per file 04; prefer fetching from React Bits/shadcn over hand-building animation primitives.
4. Implement `calculateRate()` from file 06 exactly as specified, including its quirks — don't "fix" the weekday-of-check-in-only logic without flagging it to me first.
5. Keep Taste Skill's `output-skill` active for the whole build — every phase should finish genuinely complete, not stubbed.
6. Respect `prefers-reduced-motion` everywhere per file 05.
7. Mobile-first, genuinely — this is where most real traffic will land.
8. Don't add payment processing, booking calendars, or user accounts — out of scope per file 06 unless I explicitly ask.
9. After each phase, tell me clearly what's done, what's stubbed, and what you need from me before the next phase can be finished properly.

We build in phases — wait for "go" on each one.

**Phase 0 — Design direction (before any real code):** Follow file 02's
workflow exactly: run the brief-inference step against files 01/02 and
`SITE_ASSETS_AND_DESIGN_SYSTEM.md` §12–14, produce 2–3 genuinely different
direction options (not variations on one idea), generate a `DESIGN.md` for
each via Impeccable, and show me small previews (a hero section is enough
per direction) — not a finished page. I'll pick one, or ask for a blend,
before Phase 1 starts.

**Phase 1 — Scaffold on the chosen direction:** Run file 07's setup with
the picked `DESIGN.md` wired into Tailwind config and fonts. Build the
`Hero`, `StickyContactBar`, and `Footer` first, on the real home page copy
from file 03 — this is the fastest way to confirm the direction holds up
outside the small preview. Run `/impeccable init` properly now that real
code exists.

**Phase 2 — Full site structure & content:** Build every page from file 03
using real content from `SITE_ASSETS_AND_DESIGN_SYSTEM.md`, componentized
per file 04, responsive from the start. Static/structural only — motion
comes in Phase 4. Run `/impeccable audit` when this phase is done.

**Phase 3 — Signature components:** Build `RateEstimator` and
`DirectionsStepper` per files 04/06 — these are the two components with
real custom logic. Pull and restyle every React Bits/shadcn component the
other sections need. Run Emil's `find-animation-opportunities` once wired
up, to validate file 05's motion map against what's actually built.

**Phase 4 — Motion:** Layer in file 05's animation opportunities using
Emil's `animate` skill for the actual curve/duration/vocabulary decisions.
Run `review-animations` once done.

**Phase 5 — Booking/inquiry flow & forms:** Build the WhatsApp deep-link
generation, the contact form + API route, and wire both into
`RateEstimator` and `StickyContactBar` exactly per file 06.

**Phase 6 — SEO, image migration & deploy prep:** Work through file 09 in
full — structured data, meta tags, redirects from the old URL structure,
performance targets — and file 08's image self-hosting migration. Close
with `/impeccable polish`, `/impeccable audit`, and Emil's
`improve-animations`.

Start with Phase 0. Confirm you've read all the attached files first, and
flag anything that seems contradictory or under-specified before starting.

---

## Tips for running this well

- **Actually treat Phase 0's options as a real decision.** The whole point
  of this doc set's different approach was getting real design judgment
  into that choice — don't just accept the first option to move faster.
- **Sanity-check the rate estimator by hand** before trusting it — a wrong
  price on a real booking site is a real problem, not just a bug.
- **Screenshot every phase on mobile width**, not just desktop — that's the
  realistic traffic profile for this specific site.
- Same as always: react to what's actually built before saying "go" on the
  next phase, and give narrow, concrete bug reports if something's wrong.
