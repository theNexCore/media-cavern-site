/* ============================================================
   SECTION 4 — THE CAVERN PHOTO EXPERIENCE

   Every frame here is bucket A, quality "strong", and shares no
   duplicate family with anything used in sections 2, 3, 5 or 6.
   Filenames are manifest `proposedName` values copied into
   /public/images. Do not invent one — add it to the manifest first.

   Captions are lifted from each entry's manifest `contents` and
   lightly tightened. They describe only what is visibly in frame:
   no invented facts, no prices, no stock claims.

   `edge` applies one of the global clip-path masks from globals.css
   (.image-edge-a / -b / -c). Only three of the eight carry one —
   the mix is the point.
   ============================================================ */

export type GalleryEdge = "a" | "b" | "c";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  /** Irregular edge mask. Omit for a clean frame. */
  edge?: GalleryEdge;
};

export const GALLERY: readonly GalleryImage[] = [
  {
    src: "/images/piano-mahogany-grand.jpg",
    width: 1100,
    height: 733,
    alt: "A mahogany baby grand piano with its lid open and a mic stand beside it, DVD shelving all around.",
    caption: "The grand piano, lid up, mic stand waiting.",
  },
  {
    src: "/images/store-aisle-grandfather-clock.jpg",
    width: 619,
    height: 1100,
    alt: "An aisle looking toward the front window past a grandfather clock, stereo components and a box of 8-tracks.",
    caption: "An aisle toward the front window, past the grandfather clock.",
  },
  {
    src: "/images/vhs-wall-shelving.jpg",
    width: 1100,
    height: 619,
    alt: "A wall of VHS tapes on black shelving with collage artwork mounted above.",
    caption: "The VHS wall, collage art mounted above it.",
    edge: "a",
  },
  {
    src: "/images/customer-counter-dvd-wall.jpg",
    width: 800,
    height: 1067,
    alt: "A customer at the counter in front of the full-height DVD wall, with a pool table and typewriter in the foreground.",
    caption: "The counter, the DVD wall, the pool table.",
  },
  {
    src: "/images/metal-section-hand-painted-sign.jpg",
    width: 1100,
    height: 619,
    alt: "A hand-painted METAL sign above cassette bins, with vinyl crates and a red guitar below.",
    caption: "Hand-painted signage over the cassette bins.",
    edge: "b",
  },
  {
    src: "/images/punk-chalk-mural-wall.jpg",
    width: 1100,
    height: 734,
    alt: "A green chalk PUNK mural with a spiky-haired cartoon character on the black wall above a skate deck.",
    caption: "Chalk mural on the black wall.",
  },
  {
    src: "/images/rolling-stones-poster-cassette-corner.jpg",
    width: 800,
    height: 800,
    alt: "A Rolling Stones 1981 tour poster above cassette and 8-track bins, beside a grandfather clock.",
    caption: "A 1981 tour poster over the cassette and 8-track bins.",
    edge: "c",
  },
  {
    src: "/images/new-arrivals-cd-display-case.jpg",
    width: 1067,
    height: 800,
    alt: "A new-arrivals display on the glass counter with sealed LPs and CDs standing on stands.",
    caption: "New arrivals, out on the glass counter.",
  },
] as const;
