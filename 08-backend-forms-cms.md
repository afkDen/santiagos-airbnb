# 08 — Backend, Forms & Image Hosting

## What this site needs: still minimal, but slightly more than the thesis project

No payment processing, no booking database, no user accounts — see file 06
for why. What it does need: a contact-form route, and (this is the one
genuinely important addition for this project) **a plan to stop depending
on Airbnb's image CDN.**

## Contact form → email + WhatsApp handoff

```ts
// src/app/api/contact/route.ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().optional(),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  guestCount: z.number().int().positive().max(40).optional(),
  occasion: z.string().max(50).optional(),
  message: z.string().min(1).max(2000),
  honeypot: z.string().max(0),
})

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid submission' }, { status: 400 })
  if (parsed.data.honeypot) return NextResponse.json({ ok: true })

  await resend.emails.send({
    from: 'inquiries@santiagosresort.com', // needs domain verification in Resend
    to: process.env.CONTACT_EMAIL_TO!,
    replyTo: parsed.data.email,
    subject: `Inquiry: ${parsed.data.name} — ${parsed.data.checkIn ?? 'dates TBD'}`,
    text: JSON.stringify(parsed.data, null, 2),
  })

  return NextResponse.json({ ok: true })
}
```

Pair this with the WhatsApp deep-link handoff from file 06 — the form
should offer both ("Send via WhatsApp" as the primary button, "Or email us"
as a fallback for people who'd rather not leave the site).

## Content management

Same recommendation as any project this size: start with the typed
`/content/*.ts` files from file 07, editable directly and redeployed via
git push. Only worth upgrading to a real CMS (Sanity free tier is the usual
choice) if the resort owner specifically wants to update pricing/photos
themselves without going through a developer — a reasonable ask for an
actual operating business, more so than for a portfolio piece, so don't
rule it out if asked, just don't build it preemptively.

## Image hosting — the actual staged plan for this project

**Phase 0–6 (preview build, before the real domain): stay on Airbnb's
Muscache CDN**, exactly as planned. No changes needed to any image
component in file 04 — the URLs and width params (`im_w=1920` etc.) already
work and are fully documented in the asset doc. Don't spend effort on
migration until the design/build itself is validated on the preview URL.

**Before the real domain goes live: worth reconsidering Google Drive
specifically as the destination**, for a few concrete reasons —

1. **Not built to be hotlinked at production traffic.** Drive's
   `drive.google.com/thumbnail?id=...` and `uc?export=view&id=...` endpoints
   are meant for occasional personal sharing, not serving a public website's
   full gallery. Under real load — a Facebook post doing well, a busy
   booking weekend, several people opening `/gallery` at once — these
   endpoints are known to throttle or serve a "too many requests" page
   instead of the image. The asset doc's existing Drive-linked landmark
   photos work fine today because they're a handful of low-traffic assets;
   scaling that pattern to the full ~90-image gallery is a different order
   of load.
2. **No real responsive pipeline.** Drive's `sz=w800`-style param gives one
   fixed width, not the multi-size, multi-format (AVIF/WebP) responsive
   output `next/image` generates automatically for local files or a proper
   CDN — this works directly against the Core Web Vitals targets in file 09.
3. **Fragile, unowned links.** A file ID can break from a re-upload, a
   permissions change, or Google altering the endpoint format (it's
   happened before) — and nobody would get advance warning.
4. **Friction with `next/image`.** External domains need explicit
   allow-listing in `next.config.js`'s `images.remotePatterns`, and Drive's
   endpoints aren't a recognized `next/image` loader — you'd be serving
   essentially unoptimized files through an unpredictable endpoint, which
   defeats most of the point of using `next/image` at all.

Since the migration effort is happening either way, I'd point it at a
better destination rather than skip the concern:

| Option | Effort vs. Drive | Trade-off |
|---|---|---|
| **Self-host in `/public/images`** *(recommended)* | About the same — download the ~90 images once, drop in a folder, commit | Lives in the git repo (fine at this size); plugs directly into `next/image` optimization with zero extra config |
| **Cloudinary / ImageKit** (generous free tiers) | Same "upload, get a URL" simplicity as Drive | Not in the repo, has an actual `next/image` loader integration, built to be hotlinked at scale |
| **Google Drive** | Lowest new-tool friction if a non-technical person manages the photos | Real throttling/reliability risk once the site has real traffic; fine as a private backup/share folder, not as the live site's image source |

If the reason for Drive is that someone non-technical needs to manage
photos going forward, Cloudinary's dashboard is genuinely about as easy to
use for that as a Drive folder, without the hotlinking downsides — worth
weighing against self-hosting for that reason specifically. Otherwise,
self-hosting is the least total effort since it's a one-time task either
way and needs no ongoing third-party dependency at all.

## Analytics

**Vercel Analytics** (`npm i @vercel/analytics`) is enough for this site —
no need for a heavier analytics stack. Worth specifically tracking
WhatsApp/call/Airbnb link clicks as events (not just pageviews), since
those clicks *are* the conversion this whole site exists to produce — a
simple `onClick` handler firing a custom event on each contact-channel link
is worth the extra few lines.
