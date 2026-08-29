/* ============================================================
   THE SEVEN CATEGORIES

   Copy lives here so it can be edited without touching layout.

   Image assignments come from /data/media-manifest.json — every
   `image.src` below is a bucket-A file copied into /public/images
   under its manifest `proposedName`. Do not invent filenames; if a
   new image is needed, add it to the manifest first.

   OVERLAP RULE (from CLAUDE.md): crt-tvs-stacked-band-playing.jpg
   and crt-tvs-mic-closeup-drums.jpg read as both AUDIO VIDEO
   EQUIPMENT and LIVE EVENTS. Neither is used here — AUDIO VIDEO
   EQUIPMENT takes the stereo console and LIVE EVENTS takes the
   stage crowd — so the same frame can never appear twice.

   Each tile links to The Cavern with a filter param. Those filters
   filter PHOTOGRAPHY, not inventory — the Cavern page shows what the
   store looks like by category. It is never a catalogue: no prices,
   no stock counts, no availability, no item-level listings.
   ============================================================ */

export type CategoryId =
  | "music"
  | "movies"
  | "audio-video-equipment"
  | "collectibles"
  | "oddities"
  | "clothing"
  | "live-events";

/** Filter bar labels. Shorter than the tile labels by design. */
export const FILTERS: readonly { id: CategoryId | "all"; label: string }[] = [
  /* A control, not a category — labelled so it never reads as one. */
  { id: "all", label: "SHOW ALL" },
  { id: "music", label: "MUSIC" },
  { id: "movies", label: "MOVIES" },
  { id: "audio-video-equipment", label: "AUDIO VIDEO" },
  { id: "collectibles", label: "COLLECTIBLES" },
  { id: "oddities", label: "ODDITIES" },
  { id: "clothing", label: "CLOTHING" },
  { id: "live-events", label: "LIVE" },
] as const;

export type CategoryImage = {
  /** File in /public/images, named for its manifest `proposedName`. */
  src: string;
  /** Intrinsic dimensions — set explicitly so there is no CLS. */
  width: number;
  height: number;
  /** Describes the photograph, not the category. */
  alt: string;
};

export type Category = {
  id: CategoryId;
  label: string;
  blurb: string;
  /** Filters PHOTOGRAPHY on The Cavern page — never inventory. */
  href: string;
  image: CategoryImage;
};

export const CATEGORIES: readonly Category[] = [
  {
    id: "music",
    label: "MUSIC",
    blurb:
      "Vinyl, CDs, cassettes, 8-tracks and the formats streaming forgot.",
    href: "/the-cavern?filter=music",
    image: {
      src: "/images/cd-bins-browsing-aisle.jpg",
      width: 800,
      height: 800,
      alt: "Rows of CD browser bins on a wood-topped counter, with CRT televisions and the VHS wall behind them.",
    },
  },
  {
    id: "movies",
    label: "MOVIES",
    blurb: "VHS, DVD, Blu-ray, LaserDisc and shelves worth digging through.",
    href: "/the-cavern?filter=movies",
    image: {
      src: "/images/movie-wall-dvd-shelving.jpg",
      width: 800,
      height: 800,
      alt: "A floor-to-ceiling wall of DVD and VHS shelving packed with titles.",
    },
  },
  {
    id: "audio-video-equipment",
    label: "AUDIO VIDEO EQUIPMENT",
    blurb:
      "Turntables, receivers, speakers, CRTs, players and gear with another life left in it.",
    href: "/the-cavern?filter=audio-video-equipment",
    image: {
      /* The shelves photo now leads section 5 on this same page, so
         the tile takes a different gear frame rather than repeating it. */
      src: "/images/vintage-stereo-console-counter.jpg",
      width: 1100,
      height: 619,
      alt: "A vintage stereo console and turntable in a wooden hutch, components stacked beside it.",
    },
  },
  {
    id: "collectibles",
    label: "COLLECTIBLES",
    blurb:
      "Memorabilia, posters, art and the things you didn't know you were looking for.",
    href: "/the-cavern?filter=collectibles",
    image: {
      src: "/images/wwe-boxsets-dvd-shelf.jpg",
      width: 800,
      height: 800,
      alt: "WWE WrestleMania and SummerSlam complete anthology box sets displayed on a shelf.",
    },
  },
  {
    id: "oddities",
    label: "ODDITIES",
    blurb: "Rare. Strange. Unexpected. Exactly where they belong.",
    href: "/the-cavern?filter=oddities",
    image: {
      src: "/images/tarantula-terrarium-oddity.jpg",
      width: 1100,
      height: 619,
      alt: "A tarantula in a glass terrarium with mushroom decor, sitting out on the shop floor.",
    },
  },
  {
    id: "clothing",
    label: "CLOTHING",
    blurb:
      "Wearable finds pulled from music, entertainment and everything around it.",
    href: "/the-cavern?filter=clothing",
    image: {
      src: "/images/clothing-rack-band-tees-customer.jpg",
      width: 619,
      height: 1100,
      alt: "A customer browsing a rack of vintage band tees and denim vests.",
    },
  },
  {
    id: "live-events",
    label: "LIVE EVENTS",
    blurb:
      "Bands, releases, gatherings and nights when the store becomes the venue.",
    href: "/the-cavern?filter=live-events",
    image: {
      src: "/images/stage-live-crowd-magenta.jpg",
      width: 1100,
      height: 733,
      alt: "A packed in-store crowd watching a band perform under magenta stage light.",
    },
  },
] as const;
