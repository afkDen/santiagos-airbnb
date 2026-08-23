# START HERE — Santiagos Resort Site Rebuild

This is a build spec for rebuilding **santiagosresort.com** — a real, live,
operating group-resort booking site in Alfonso, Tagaytay, Cavite. That's a
meaningful difference from a portfolio/thesis project: real money, real
guests, and real search ranking are riding on this, so a few things here are
more careful than they'd otherwise be (image hosting, SEO redirects,
booking-flow accuracy).

## This doc set works differently from a typical design spec

You asked for the design to come from the skills rather than from a design
system I hand you — so unlike a typical spec, **file `02` does not define a
palette, typeface, or layout.** It defines the brief and guardrails; the
installed skills (file `00b`) actually infer and propose the visual
direction, and you/your sister pick between real options before anything
gets built out. Everything else (components, animation, booking flow, SEO)
is spec'd concretely, same as before.

## The files, in build order

| # | File | What it's for |
|---|---|---|
| 00b | `00b-install-ai-skills.md` | Install these first — the skills that will actually make the design decisions this time, plus a couple more worth adding for this project |
| 01 | `01-project-brief.md` | What the business is, who it's for, goals of the rebuild, sitemap |
| 02 | `02-design-direction-brief.md` | Brand facts + constraints for the skills to design *from* — deliberately not a fixed system |
| 03 | `03-sitemap-content.md` | Page-by-page structure, pointing to the real data in your asset doc rather than duplicating it |
| 04 | `04-component-library.md` | Every component, sourced mostly from React Bits + shadcn/ui |
| 05 | `05-animation-motion-spec.md` | Where motion belongs — specifics left to Emil's skill |
| 06 | `06-booking-inquiry-flow.md` | The real conversion flow: WhatsApp/FB/call/Airbnb, the real rate logic, no payment backend |
| 07 | `07-tech-stack-setup.md` | Install commands, folder structure |
| 08 | `08-backend-forms-cms.md` | The minimal backend, plus an important note on the image hosting |
| 09 | `09-deployment-seo-checklist.md` | Deploy + local-SEO checklist — this matters a lot more here than on a portfolio site |
| 10 | `10-master-gemini-prompt.md` | The prompt to paste into Gemini |

## Your existing asset doc is the canonical data source

Put `SITE_ASSETS_AND_DESIGN_SYSTEM.md` (the one you uploaded) in the project
folder alongside these files, and reference it by that exact name in your
prompts. It already has the full pricing logic, FAQ copy, house rules,
driving directions, guest reviews, the complete Muscache image registry, and
every hardcoded URL (Airbnb, WhatsApp, Maps, Waze, socials) — my files below
point to it rather than re-typing all of that, so it stays the single
source of truth. Its own "Section 12–14" color/type/UI tokens are the
**old** design system — file `02` treats those as reference input for the
design-inference step, not as instructions to keep.

## How to actually run this

1. Run the installs in `00b-install-ai-skills.md` first.
2. Attach files `01`–`09` plus your `SITE_ASSETS_AND_DESIGN_SYSTEM.md` as project context.
3. Paste `10-master-gemini-prompt.md` as your first message.
4. **Phase 1 will produce 2–3 real design directions, not a finished site** — review those and pick one (or ask for a blend) before Gemini builds anything further. This is the step that replaces "I hand you a design system."
5. Work phase by phase after that, same approach as any vibecoded build — look at each phase before moving to the next.

## Before you start, a few things worth deciding

- [x] **Is this replacing the live site, or a separate preview first?** Decided: preview first, main domain later. Build and validate at a preview URL (Vercel preview deploy, or a subdomain); don't point `santiagosresort.com`'s DNS at it until it's approved.
- [x] **Photo rights/hosting**: Decided: stay on Airbnb's Muscache CDN through the build/preview phase, then migrate afterward. **Worth a second look before locking in the destination** — the updated `08-backend-forms-cms.md` flags a specific reliability concern with Google Drive as a public image host and suggests a comparably-easy alternative if that's still an open call.
- [ ] **Anything changed since the asset doc was extracted?** Pricing, phone numbers, amenities, or policies may have moved on since this MD was pulled from the old code — worth a quick sanity check against the live site/owner before launch.
- [ ] **Old URLs to preserve**: the current site has `contact.html`, `gallery.html`, `amenities.html`, `packages.html` — if the new sitemap changes these paths, set up redirects (file 09) so any existing Google ranking or shared links don't break.
