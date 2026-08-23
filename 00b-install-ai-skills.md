# 00b — Install These Skills First

Same three you used last time, plus two more genuinely worth adding for
*this* project specifically — a vendor-provided React best-practices skill
(since this is a real production site, not a portfolio piece) and a
component library built exactly for the "animations, moving components"
brief. Install all of these **before Phase 1** — for this project in
particular, the first three actually decide the visual design (see
`02-design-direction-brief.md`), so they need to be in place before any
design work starts, not layered on after.

## What each one does here

| Skill/library | What it does | Why it's in this project specifically |
|---|---|---|
| **[emilkowal.ski/skill](https://emilkowal.ski/skill)** | Animation-engineering judgment: curves, durations, what deserves motion, what doesn't. | A resort booking site lives or dies on feeling trustworthy *and* alive — this keeps the motion from tipping into either stiff-corporate or gimmicky-flashy. |
| **[Impeccable](https://impeccable.style)** | Anti-slop detector + design commands (`/impeccable polish`, `/impeccable audit`, etc.), reads a `PRODUCT.md`/`DESIGN.md` pair and designs *from* your brief instead of its own defaults. | This is the tool actually inferring your visual direction this round — see the workflow in file 02. |
| **[Taste Skill](https://tasteskill.dev)** | Anti-slop frontend framework; v2's brief-inference step reads industry/audience/mood before generating. Also has flavor sub-skills (`soft-skill`, `minimalist-skill`, `brutalist-skill`) it can draw on as direction options. | Real estate/resort sites are one of the most template-flooded categories on the web — this is specifically built to avoid the generic "AI beige hospitality site" look. |
| **[Vercel React Best Practices](https://skills.sh)** (`vercel-labs/agent-skills`) | Official, vendor-maintained Next.js/React conventions — component structure, data fetching, performance patterns. | This is a real production site that needs to stay maintainable after you hand it off, not a one-off build. Vendor-provided skills are also just more trustworthy than the median community skill — worth knowing skills.sh's own reviewers flag that a lot of trending community skills are low quality; stick to known-good sources like this one. |
| **[React Bits](https://reactbits.dev)** | 160+ open-source animated React components — text effects, backgrounds, carousels, hover cards, marquees, comparison sliders — delivered as source you own (via the shadcn registry protocol), not a black-box package. | This is where most of the "moving components" in file 04 should actually come from, rather than hand-building animation primitives from scratch. |

## Install commands

```bash
# 1. Emil Kowalski's animation/design-engineering skill
npx skills add emilkowalski/skill

# 2. Impeccable — auto-detects your harness (Gemini CLI, etc.)
npx impeccable install

# 3. Taste Skill v2 — main anti-slop frontend skill
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"

# 3b. Taste Skill's output-skill — stops the agent from shipping half-finished sections
npx skills add https://github.com/Leonxlnx/taste-skill --skill "output-skill"

# 4. Vercel's official React/Next.js best-practices skill
npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices
```

Then, inside your agent chat (not the terminal):
```
/impeccable init
```

**React Bits isn't installed as a skill** — it's a component source you pull
from per-component, same pattern as shadcn/ui:
```bash
# Example — pull one component (language/style variants: JS-CSS, JS-TW, TS-CSS, TS-TW)
npx shadcn@latest add https://reactbits.dev/r/SplitText-TS-TW
```
Specific components to pull are called out in `04-component-library.md`
rather than installed in bulk here — grab them as each phase needs them so
the project doesn't accumulate components you never actually use. If your
agent supports MCP servers, there's also a community ReactBits MCP server
that lets Gemini browse/search the full catalog live instead of guessing
component names — worth connecting if available, optional if not.

## How the design-decision workflow actually uses these

This is the part that's different from a normal spec — walk through
`02-design-direction-brief.md` for the full workflow, but in short: Taste
Skill's brief-inference reads the brief and proposes a direction, Impeccable
turns that into a portable `DESIGN.md`, and you get 2–3 real options to
choose between before Phase 2 builds anything on top of it. Don't skip
straight to building — the whole point of installing these for this project
was to get real design judgment into that first decision, not just faster
code after it's made.

## Checkpoints during the build

| After... | Run |
|---|---|
| Brief is written (file 02 done) | Taste Skill's brief-inference + `/impeccable init` — produces the direction options |
| Direction picked, Phase 1 scaffolded | `/impeccable audit` once real code exists |
| Phase 2 (structure + content) | `/impeccable audit` again — catch generic-template tells before animation goes on top |
| Phase 3 (signature components) | Emil's `find-animation-opportunities` — sanity-check file 05's motion map against what's actually built |
| Phase 4 (motion) | Emil's `animate` while building, `review-animations` after |
| Throughout | Taste Skill's `output-skill` stays active the whole build |
| Final polish | `/impeccable polish` → `/impeccable audit` → Emil's `improve-animations` |

## Caveat

Same as last time — these are independent community/vendor tools, not
Anthropic products. Skim what gets installed before a big run, and trust
each tool's own docs over this file if something's changed since I wrote it
(this ecosystem moves fast).
