/* ============================================================
   HOMEPAGE COPY — sections 7-13

   Kept out of the components so wording can be revised without
   touching layout.

   The owner's name is CAMERON NOVACK. N-O-V-A-C-K.
   ============================================================ */

export const PIANO = {
  eyebrow: "Sit down and play",
  headline: "The piano",
  body: [
    "A mahogany grand piano, lid up, in the middle of Media Cavern.",
    "It wasn't a retail strategy. It's there because this place was built by someone who loves the sound of things.",
  ],
  kicker: "Ask first. Then play.",
} as const;

export const STORY_TEASER = {
  eyebrow: "The story behind the Cavern",
  headline: ["He didn't build a store.", "He built the place he wanted to exist."],
  /* Grounded only in facts verified in CLAUDE.md: the CD Warehouse
     predecessor at the same address, and what is visibly in the room.
     No biographical claims — the full narrative belongs on /the-story
     and must come from Cameron, not from inference. */
  body: [
    "There was a CD Warehouse at this address before there was a Media Cavern.",
    "What took its place isn't a bigger version of a record store. It's a room with a stage in it, a grand piano in the middle of the floor, and shelves that look different every time you come back.",
    "The long version is worth reading.",
  ],
  cta: { label: "Read Cameron's story", href: "/the-story" },
} as const;

export const SPOTLIGHT = {
  eyebrow: "From the community",
  headline: "The story behind Media Cavern",
  body: "Cameron sat down with SoCo Spotlight to talk about the road from CD Warehouse to Media Cavern, his life in music, and why he built a place unlike anything else in South County.",
  /** Credit line. Reagan Dortch is the interviewer, never the subject. */
  credit: "Interviewed by Reagan Dortch for SoCo Spotlight.",
} as const;

export const CHAMBER = {
  headline: "Proudly South County.",
  body: "Media Cavern is a proud member of the South County Chamber and part of a community committed to supporting the people and businesses that make South County worth showing up for.",
} as const;

export const SHIPPING = {
  eyebrow: "Can't make it into the Cavern?",
  headline: "We ship.",
  body: [
    "Found something you want but can't make it into the store?",
    "Call or message the store. Shipping is available throughout the lower 48.",
  ],
  /** What ships. Not a catalogue — no prices, stock or availability. */
  items: [
    "Vinyl",
    "CDs",
    "DVD",
    "Blu-ray",
    "VHS",
    "Collectibles",
    "Posters and art",
    "Audio video gear",
    "Special requests",
    "Gift orders",
  ],
} as const;

export const SOCIAL = {
  eyebrow: "Follow along",
  headline: "Keep up with the Cavern",
} as const;

export const VISIT_CTA = {
  headline: ["More than a store.", "It's a destination."],
} as const;
