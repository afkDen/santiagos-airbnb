# Santiagos Rebuild — Session Handoff

Last updated: August 29, 2026 (Asia/Manila)

## Resume here

This is a Next.js 15 landing site for Santiagos Private Resort in Alfonso, Cavite. The current direction is a warm industrial/editorial resort design with restrained, purposeful motion. Preserve the existing visual identity and avoid generic landing-page patterns, excessive cards, decorative pills, gradients, or copy that sounds AI-generated.

The user expects relevant project skills to be used on every design or implementation task. Be efficient and use more than only `impeccable` when the work calls for it. The most useful local skills have been:

- `design-taste-frontend` for visual direction and anti-slop decisions.
- `animate`, `review-animations`, and `apple-design` for motion craft.
- `systematic-debugging` for reproducing UI problems before changing code.
- `karpathy-guidelines` for narrow, reversible implementation changes.
- `vercel-react-best-practices` for React/Next.js performance.
- `playwright-cli` or the in-app browser for responsive visual QA.
- `verification-before-completion` before reporting success.

## Non-negotiable constraints

- Do **not** alter the weekday/weekend pricing or date-selection logic. The user has explicitly confirmed that it is accurate and makes sense.
- Preserve the Santiago’s script wordmark in the navigation. It is part of the intended character of the site.
- Use the property gallery as the source of truth for room/location claims. Do not invent amenities or positions.
- Preserve unrelated working-tree changes and review the latest commit before starting new work.
- Continue to verify desktop and mobile layouts after visual changes.

## Git and local state

- Primary branch: `main`.
- The broad responsive-design release described here was prepared on top of `05dbaa0`.
- Use `git log -5 --oneline --decorate` and `git status --short` for the current release state rather than relying on a copied commit hash in this document.
- Do not reset, checkout, or overwrite unrelated working-tree changes.

## Current running environment

- Development server is running at `http://localhost:3001/`.
- Compound explorer anchor: `http://localhost:3001/#compound-explorer`.
- Port `3000` was occupied by another process when the latest server started, so Next.js selected `3001`.
- The in-app browser was last opened directly on the compound explorer.
- If the server is no longer running, use `npm run dev` and follow the port printed by Next.js.
- Stop the dev server before `npm run build`; running both against `.next` previously caused stale/generated cache problems.

## Completed work in the current working tree

### 1. Hero transition and layout

`src/components/hero.tsx` was rebuilt as a full-bleed image-led hero inside a rounded editorial frame.

- Hero views remain mounted in an image stack.
- A newly requested image becomes active only after its `onLoad` fires.
- This removes the blurry/poor transition the user reported when switching between Pool Deck, Dining Hall, and the other views.
- The selector uses a restrained shared indicator transition; image changes do not use blur.
- The first hero load has a one-time `clip-path`/scale reveal from `globals.css`.
- Reduced-motion users receive a static reveal.
- Proof points remain static and readable.

### 2. Property story

`src/components/property-story.tsx` now follows the same preloaded image-stack approach as the hero, avoiding image flashes during chapter changes. The chapter controls use an editorial numbered list rather than large generic cards.

### 3. Local typography

`src/app/layout.tsx` now uses `next/font/local` with bundled variable fonts rather than relying on Google Fonts at runtime:

- Great Vibes — Santiago’s wordmark
- Playfair Display — editorial headings
- Plus Jakarta Sans — body/interface copy
- Outfit — labels and display details

This fixed the regression where the Santiago’s navigation wordmark and other intended typefaces disappeared. Keep these local font files unless replacing them deliberately with an equivalent bundled solution.

### 4. Site-wide section density

The shared `.section-space` token is now:

```text
py-10 sm:py-14 lg:py-16
```

All subpages now use shared `page-shell`/`page-shell-narrow` spacing (`py-10`, `sm:py-12`, `lg:py-14`) with a consistent 48–64px section gap. `PageIntro` is a compact editorial grid on desktop, placing the title and supporting copy side by side instead of stacking a tall centered introduction. Touch targets and readable line spacing were not compressed.

### 5. 2.5D compound explorer

`src/components/compound-explorer.tsx` is a new interactive section placed after `PropertyStory` on the landing page.

Features:

- One approved elevated night aerial (`ext3`) as the permanent compound view; the day/night switch was intentionally removed.
- Ten clickable destinations and 28 property photos.
- Mouse-only, spring-smoothed 2.5D tilt with reduced-motion support.
- Fullscreen photo lightbox for each location.
- Keyboard-operable tab navigation.
- Compact horizontal area dock on small screens instead of a tall stacked grid.
- A desktop information overlay with `pointer-events: none`; only the photo thumbnails receive pointer events, so lower map markers remain clickable.
- An anchor at `#compound-explorer`.

### 6. Lightbox robustness

`src/components/fullscreen-lightbox.tsx` now keeps close/next/previous callbacks in refs so the keyboard listener is stable. It also handles safe-area padding and overscroll more carefully on mobile.

### 7. Site-wide interaction and motion polish

- The sticky navigation now includes a transform-only scroll progress line.
- The mobile navigation drawer is mounted outside the blurred header so it fills the viewport correctly; it traps focus, closes with Escape, and returns focus to the menu button.
- Gallery, amenities, and room selectors are proper ARIA tablists with Left/Right/Home/End keyboard navigation and associated tab panels.
- Selector indicators use a quick, critically damped spring with no decorative bounce.
- Image zoom is centralized in `.media-image`, limited to fine pointers, and paired with focus-visible behavior.
- The long amenities catalog no longer staggers every card into view; only the category change receives a short, spatial transition.
- Long-form pages use tighter shared spacing, and several generic headings/labels on Amenities, Gallery, Rooms, and Location were rewritten in clearer, more specific language.
- The Santiago’s Great Vibes wordmark and all local font assignments remain intact.
- Weekday/weekend pricing and date logic were not changed; only the visual spring used by the rate controls was adjusted.

## Compound layout source of truth

The user supplied and confirmed the following spatial facts. Preserve them unless stronger property evidence is provided:

- Upper floor, left to right: other bedrooms, gym rooms, bunk room.
- Ground floor: billiards/arcade at the left poolside end.
- The indoor acacia dining room is **left of the central staircase**.
- The karaoke lounge is **right of the staircase, behind the sliding door**.
- Covered outdoor dining and the group-kitchen/grill wing extend from the far-right side.
- Pool is central; basketball court is at the left; bonfire yard is between the pool and right dining wing.

Gallery evidence already reviewed:

- `ext10.jpg`: primary daytime aerial.
- `ext3.jpg`: nighttime aerial.
- `din1.jpg`, `din2.jpg`: acacia live-edge indoor dining table.
- `liv4.jpg`: central staircase and adjacent glazed rooms.
- `kara1.jpg`–`kara4.jpg`: enclosed air-conditioned karaoke lounge.
- `bill1.jpg`, `bill2.jpg`, `arc1.jpg`, `arc3.jpg`, `arc4.jpg`: billiards/arcade area.
- `din4.jpg`, `out1.jpg`, `out8.jpg`: outdoor dining and covered grill area.

Current marker centers are percentages of the night aerial. `Compact x/y` is used below the desktop breakpoint to reduce collisions:

| Destination | Desktop x/y | Compact x/y |
|---|---:|---:|
| VIP rooms and hall | 38 / 20.3 | 35.3 / 18.7 |
| Private gym | 44.6 / 22.2 | 43.4 / 20.5 |
| Bunk room | 56.8 / 24.2 | 58.4 / 22.3 |
| Billiards and arcade | 43.6 / 34.9 | 42.2 / 32.2 |
| Acacia dining room | 55.9 / 31.9 | 57.3 / 29.4 |
| Karaoke lounge | 61.9 / 33.2 | 64.7 / 30.6 |
| Outdoor dining | 73.6 / 46.5 | 79.1 / 43 |
| Private pool | 42.9 / 57.7 | 41.2 / 53.3 |
| Basketball court | 18.2 / 71.4 | 10.9 / 65.9 |
| Bonfire yard | 61.9 / 60.6 | 64.6 / 55.9 |

The explorer intentionally separates billiards/arcade, acacia dining, karaoke, and outdoor dining. Do not collapse these back into vague “games and videoke” or “dining and kitchen” markers.

The acacia-dining and karaoke markers refer to rooms on either side of the **interior** central staircase. Their location hints explicitly say “Inside · left of stairs” and “Inside · right of stairs” to avoid ambiguity with the exterior poolside steps.

The upper floor uses separate markers for the VIP rooms/hall, gym, and bunk room. Earlier secondary labels and vertical callout stems were removed because they were visually misaligned and unnecessary.

### 8. Responsive home-gallery preview

`src/components/home-gallery-preview.tsx` now uses a mobile-specific composition rather than shrinking the desktop mosaic unchanged:

- Featured pool and arcade photos span both phone columns with compact 2:1 crops.
- Supporting photos use balanced square crops on phones.
- The 12-column editorial mosaic begins at a content-driven 600px breakpoint.
- The “View all photos” link has a 44px touch target.
- Fullscreen affordances remain visible on touch-sized layouts instead of depending on hover.

## Verification already completed

After the latest implementation:

- `npx tsc --noEmit` passed.
- `npm run build` passed.
- Next.js generated all 14 routes successfully.
- `git diff --check` passed; only normal LF-to-CRLF warnings were emitted.
- Landing page, Gallery, Rooms, and Amenities returned HTTP 200 from the restarted development server.
- Visual QA passed at 1280 × 800 for Home, Gallery, Amenities, Rooms, and the compound explorer.
- Responsive QA passed at 390 × 844 for Gallery, Rooms, and the mobile navigation drawer.
- Gallery, amenity, and room tab keyboard behavior passed browser checks.
- Mobile drawer focus containment, Escape dismissal, and trigger-focus return passed browser checks.
- A clean browser session reported no runtime errors. The only console notice was Motion acknowledging that the test device has reduced motion enabled.
- The Santiago’s script font was browser-verified as the active computed font.
- The weekday/weekend pricing and date logic were not changed.
- The local development preview is running at `http://localhost:3001/`.

Recommended verification commands after further work:

```powershell
npx tsc --noEmit
npm run build
git diff --check
git status --short
```

For visual changes, also check the landing page in the in-app browser at desktop and a true 390px-class mobile viewport if available.

## Pending work and sensible next actions

There is no known blocking bug in the current implementation. After the responsive-design release is on `main`, continue with small evidence-backed iterations and re-run the responsive browser matrix after layout changes.

Do not treat general desires for more design polish as permission to rewrite working logic. Continue with audit-first, evidence-backed, narrow iterations.
