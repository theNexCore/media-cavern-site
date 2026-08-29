# Media Cavern — Website Rebuild

Project context for Claude Code sessions. Read this before doing anything.

## What this project is

A ground-up rebuild of the Media Cavern website in **Next.js + TypeScript + App Router**.

Media Cavern is a physical media store in St. Louis, MO — music, movies, audio/video
gear, collectibles, oddities, clothing, and a working in-store stage. It grew out of a
CD Warehouse franchise at the same address. Owner: **Cameron Novack**.

The site it replaces is a Weebly site at `https://site-a25ec3376396.mypreview.site/`.
That site is a **source of assets and facts only** — not a design reference, and not a
structure to copy. Its media library was used as an ad-hoc file host, so most of what
lives there is not site content.

## Current state

**The site is built: homepage sections 1-13, the footer, and all four
inner pages (/the-cavern, /the-story, /the-stage, /visit), plus SEO
metadata and LocalBusiness JSON-LD.**

The long-form narrative for /the-story was supplied on 2026-08-29 and is
live in `/data/story.ts`. Two link slots remain null by design — the
audition link and the SoCo Spotlight episode — and each renders its
button only when a real URL is set. Never a dead button.

| Path | What it is |
|---|---|
| `/source-harvest/` | Raw archive, 116 images, original Weebly filenames. **Append-only — never delete from it.** |
| `/data/media-manifest.json` | One entry per image: proposed name, bucket, description, orientation, quality, duplicate links, suggested use. |
| `/app/tokens.css` | **The design token layer.** Locked brand color, type scale, spacing, motion, focus, z-index. |
| `/app/globals.css` | Reset, element defaults, scroll-reveal rules, and the three `.image-edge-a/-b/-c` clip-path masks. Imports tokens. |
| `/app/layout.tsx` | Root layout; binds the three `next/font` faces to CSS variables. |
| `/components/Header.tsx` | Desktop header. Transparent → near-black on scroll, green active indicator. |
| `/components/MobileNav.tsx` | Full-screen overlay nav. Focus trap, Escape, scroll lock. |
| `/components/Logo.tsx` | The wordmark. One swap point for the SVG; used by header, footer and hero. |
| `/components/nav-links.ts` | Single source of truth for nav routes. Header and MobileNav both read it. |
| `/components/Reveal.tsx` | Restrained scroll reveal. Reveals once, then disconnects. Degrades to visible without JS. |
| `/components/home/Hero.tsx` | Section 1. Near-full viewport, no photography, logo mount point. |
| `/components/home/MoreThanAStore.tsx` | Section 2. Copy plus two bucket-A frames. |
| `/components/home/ExploreTheCavern.tsx` | Section 3. Seven categories as an asymmetric editorial grid; tiles link to `/the-cavern?filter=…`. |
| `/components/home/PhotoExperience.tsx` | Section 4. Editorial gallery, 8 strong frames, 3 with edge masks. |
| `/components/home/AudioVideo.tsx` | Section 5. Copy-led split, 2 frames. Phone CTA, no catalogue. |
| `/components/home/LiveAtTheCavern.tsx` | Section 6. Lead crowd frame + 2 supports under a static spotlight. |
| `/data/gallery.ts` | Section 4 frames: captions and which edge mask each carries. |
| `/data/categories.ts` | The seven categories: labels, blurbs, image assignments. **Edit copy here, not in layout.** |
| `/public/images/` | Bucket-A files copied out of the archive under their manifest `proposedName`. |
| `/components/home/ThePiano.tsx` … `VisitCta.tsx` | Sections 7-13: piano, story teaser, SoCo Spotlight, chamber, shipping, social, visit. |
| `/components/Footer.tsx` | Visit / Hours / Connect columns, credentials, NexCore flag. |
| `/components/SocialIcons.tsx` | Instagram + Facebook official glyphs, drawn in `currentColor`. |
| `/components/StructuredData.tsx` | LocalBusiness JSON-LD. Verified facts only. |
| `/components/cavern/CavernGallery.tsx` | Server-rendered filter bar + grid for /the-cavern. |
| `/data/site.ts` | **Single source of truth** for address, phone, hours, emails, socials + `FEATURES.poweredByNexCore`. |
| `/data/home-copy.ts` | Copy for homepage sections 7-13. |
| `/data/story.ts` | /the-story beats. **The narrative gap lives here.** |
| `/data/cavern-gallery.ts` | 65 site-eligible frames with category assignments. Generated from the manifest. |
| `/app/*/page.tsx` | The four inner pages, all built. |
| `/.crawl/` | Working files from the crawl. Scratch, not a deliverable. |

Stack is Next 16 / React 19 / TypeScript, App Router, CSS Modules.
`npm run dev` · `npm run build` · `npm run typecheck`.

### Routes

`/the-story` is canonical; `/story` 301s to it via `next.config.ts` so
either link works. The nav label is THE STORY.

`/the-cavern` is dynamic (`ƒ`) because it reads `?filter=`. Filtering is
server-side via real links, so every filtered view is indexable,
shareable, and works without JavaScript.

### QA baseline (verified, not asserted)

Playwright is a devDependency, added only to run the viewport check.
`node .crawl/scroll.js` against a running server re-runs it. Remove the
dependency if you don't want it.

## BRAND COLOR IS LOCKED

The six hex values in `/app/tokens.css` were **sampled directly from the approved
Media Cavern wordmark**. Do not substitute, adjust, or "modernize" them. Do not add
hues. The only colors on this site outside that file are the ones inside photography.

- Background is pure `#000000`, **not** near-black. The glow needs it.
- `--mc-green` `#3ACF01` is the workhorse: links, borders, icons, active states.
- `--mc-green-bright` `#E7FD08` is acidic yellow-green. **Highlights and hover only,
  never large areas.**
- `--mc-green-deep` `#064D01` fails contrast on black. **Borders and gradient stops
  only — NEVER text.**
- **No silver, gray, chrome, or metallic anywhere.** Surface tokens are pure black at
  opacity precisely so nothing drifts toward slate or charcoal.

Typography, via `next/font`: **Grenze Gotisch** (large display headlines only, used
sparingly) · **Barlow Condensed** (uppercase labels, buttons, nav, metadata) ·
**Inter** (body copy).

## Verified store facts

Confirmed accurate — use these, don't re-derive them.

- **Address:** 11828 Tesson Ferry Rd, St. Louis, MO 63128
- **Phone:** (314) 270-3252
- **Hours:** Mon–Thu 11–8 · Fri 11–9 · Sat 11–8 · Sun 12–5
- **Credentials:** Veteran Owned · South County Chamber Member
- **Instagram:** instagram.com/mediacavernstlouis
- **Facebook:** facebook.com/p/Media-Cavern-61572507115983/

### Email addresses

Decoded from the old site's Cloudflare `/cdn-cgi/l/email-protection#` obfuscation.
On the Weebly site, Bookings / Sell to Us / Contact were **mailto links, not pages**.

- `bookings@themediacavern.com`
- `sell@themediacavern.com`
- `contact@themediacavern.com`

## Navigation

```
THE CAVERN  /  THE STORY  /  THE STAGE  /  VISIT
```

**No "Home" link.** The logo is the home link.

THE STORY has no counterpart on the old site — it is new, and the CD Warehouse origin
material plus the SoCo Spotlight interview frames are its raw material.

## The seven categories

Replacing the old site's eight tiles:

```
MUSIC · MOVIES · AUDIO VIDEO EQUIPMENT · COLLECTIBLES · ODDITIES · CLOTHING · LIVE EVENTS
```

- **AUDIO VIDEO EQUIPMENT** — renamed from "Audio Equipment". Use the full name
  **everywhere**: tiles, homepage section, Cavern page filters, alt text, metadata.
  Covers turntables, receivers, speakers, components, CRTs, players and screens.
- **CLOTHING** splits out from the old "Clothing & Vinyl" tile.
- **Retro Games is dropped.** It is not a category. Retro game photography stays in
  bucket A and is gallery-eligible, but must never be presented as a category.

On the old site all eight tiles linked to `/visit` and none had real pages.

### Where the tiles go

Each of the seven tiles links to The Cavern with a filter param:

```
/the-cavern?filter=music
/the-cavern?filter=movies
/the-cavern?filter=audio-video-equipment
/the-cavern?filter=collectibles
/the-cavern?filter=oddities
/the-cavern?filter=clothing
/the-cavern?filter=live-events
```

The param value is the category `id` in `/data/categories.ts`. Hrefs are wired; the
Cavern page itself is a later session.

## THE FILTERS FILTER PHOTOGRAPHY, NOT INVENTORY

**This site is never a catalogue.** Media Cavern does not track stock online and has
no plans to. The Cavern page shows **what the store looks like** by category — it is a
photographic view of the shop, not a product listing.

**Never display, anywhere on this site:**

- prices
- stock counts or quantities
- availability or "in stock" indicators
- item-level listings

Copy must not imply a browsable catalogue either. When someone wants to know whether
a specific thing is there, the answer is to call the store or come in — that is why
the AUDIO VIDEO EQUIPMENT section's call to action is a phone link.

Related: do not claim repair services, and do not name specific brands or models the
store cannot guarantee it has.

## THE LOGO RULE (ABSOLUTE)

**No logo artwork from the source site will be used anywhere, ever.** Not the old one,
not the 2026 one. This is not a preference and is not negotiable.

All of it is quarantined in bucket C: `old-media-cavern-logo.jpg`,
`mediacavern-logo-2026.png`, the small header rendering, a social repost of the old
wordmark, six "NOW OPEN" promo banners, and four AI-generated comps. The banners and
comps are built around the wordmark, so they are quarantined too.

**The approved wordmark landed 2026-08-29** as an interim PNG
(`/public/brand/media-cavern-wordmark.png`, 1774x887, 2:1). It renders in the
header, footer and hero through one component, `components/Logo.tsx`. The
layered SVG with the winged record is still in progress; when it arrives it
swaps at the `LOGO` constant in that file and nothing else changes.

The artwork is RGB with no alpha, so `Logo.module.css` applies
`mix-blend-mode: screen` to drop the baked-in black. That is what keeps it from
sitting in a black rectangle on the scrolled header. Remove it only when
transparent artwork or the SVG replaces the PNG.

The rules that still bind:
- **Do not** trace, recreate, or approximate the logo.
- **Do not** render the wordmark as HTML text.
- **Do not** substitute an AI-generated or "temporary" mark.

Two files match logo keywords but are correctly **not** quarantined: a Styx tour banner
visible in a store photo, and the Echoes of a Ghost band logo (third-party band artwork,
bucket B). Neither is Media Cavern branding.

## Image buckets

Every image in `/data/media-manifest.json` carries a bucket.

- **A — Store photography (71).** Real photos of the store, stock, stage, piano, people,
  exterior. Site-eligible.
- **B — Staging / reference (30).** Screenshots, AI-generated images, Grok captures,
  promo graphics, third-party memes, personal photos. These were parked on the Weebly
  site because it was being used as a file host. **Never use these as site content.**
- **C — Obsolete branding (15).** All Media Cavern logo artwork. Quarantined, full stop.

Duplicates and near-duplicates are **flagged via `duplicateOf`, never deleted** — 23
relationships recorded. Quality is rated `strong` / `usable` / `weak`; five bucket-A
frames are `weak` (out of focus or back-of-house) and should not ship.

### Approvals already granted

- **Customer faces** — recorded permission exists for every image showing customers.
  No further consent check needed for images already in the manifest.
- **`cd-display-staircase.jpg`** and its crop — confirmed to be the Media Cavern
  building. Location question resolved.
- ~~`cameron-novack-with-hand-painted-sign.jpg`~~ — **RETRACTED 2026-08-29.** This
  was recorded as confirmed to be Cameron Novack. **It is not him.** The file is now
  `hand-painted-media-cavern-sign.jpg`, the subject is **unidentified**, and it is
  marked HOLD in the manifest: not published anywhere, and not to be published until
  the person is identified and consent is confirmed. It stays in `/source-harvest/`.
  (The painted canvas itself is hand-made store artwork, not the logo, and is not
  subject to the logo rule.)
- **`vhs-blake-edwards-ten.jpg`** — the cover art is a swimsuit, not nudity. Cleared.

### Category overlap to respect

`crt-tvs-stacked-band-playing.jpg` and `crt-tvs-mic-closeup-drums.jpg` are assigned to
**AUDIO VIDEO EQUIPMENT** but also read as **LIVE EVENTS**. Pick one context per image
— **do not reuse either in both.**

## The SoCo Spotlight interview

Seven frames shot **2026-08-15**, in `/source-harvest/20260815-15*.jpg` and `-16*.jpg`,
named `cameron-novack-interview-*.jpg`. Each carries an `attribution` object in the
manifest.

- **Production:** SoCo Spotlight
- **Interviewer:** Reagan Dortch
- **Subject:** Cameron Novack and the store

**Reagan Dortch is not the subject and is not pictured.** Credit the production;
feature Cameron and the store. `cameron-novack-interview-wide.jpg` has the most crop
latitude.

## CD Warehouse origin material

The store's predecessor. Four exterior images, all bucket A:

- `cd-warehouse-storefront-night.jpg` — high-res full facade at night. **Use this one.**
- `cd-warehouse-storefront-window-neon.jpg`, `cd-warehouse-sign-illuminated.jpg`
- `plaza-strip-mall-exterior-night.jpg` — wide plaza, useful for VISIT wayfinding
- `cd-warehouse-storefront-small.jpg` is the same subject at 331×152 — **weak, superseded.**
  The old site used this thumbnail on `/the-cavern.html`; don't repeat that.

## Known issues in the source site (already diagnosed — don't re-investigate)

- Bookings / Sell to Us / Contact are Cloudflare-obfuscated mailto links, not pages.
  Decoded above.
- A dead `about:blank` link sits on the homepage where a map embed should be.
- All eight category tiles link to `/visit`; none have real pages.
- `/scratch-page.html` is an orphan route — listed in `sitemap.xml`, linked from
  nothing, holding 20 images that all appear elsewhere. Weebly staging residue.
- Only 21 images sit in real `<img>` tags. The other 95 are dumped into a single Weebly
  gallery block on the homepage — the file-host behaviour that produced bucket B.

## Leads not yet harvested

`social-grid-screenshot-10.png` and `-18.png` (bucket B) are Facebook contact-sheet
screenshots showing originals that are **not** on the Weebly host:

- Event posters naming Cameron Novack (Singer Songwriter Night), a book-signing notice,
  and photos of the piano being moved in — material for THE STORY.
- A set of magenta-lit live-event frames — material for THE STAGE.

Pull these from Facebook directly if higher-quality live/event imagery is needed.

## Working agreements

- Scope is what was asked. Audit sessions audit; build sessions build. Don't drift.
- The manifest is the source of truth for image decisions. Update it when decisions
  change; don't keep parallel notes.
- `/source-harvest/` is a raw archive. Add to it, never prune it.
- Flag duplicates rather than deleting them.

## Identifying people in photographs

One misidentification has already shipped and had to be retracted (see the
retracted approval above). The rule now:

**Do not attach a person's name to a photograph unless it is independently
confirmed.** Not from a filename, not from a caption on the old site, not from
"it's probably the owner." A wrong name on a real person's face is worse than
no name, and it propagates into alt text, file names, commit history and a
public repo before anyone notices.

**Cameron Novack is confirmed in these frames only:**

- `cameron-novack-interview-*.jpg` — the 2026-08-15 SoCo Spotlight session,
  seated against the VHS/DVD wall, shaved head, clip-on lav mic, dark
  sleeveless tee. Seven frames.
- `cameron-novack-singing-stage.jpg` — performing on the in-store stage.

Any other person in the archive is unidentified unless stated here.
