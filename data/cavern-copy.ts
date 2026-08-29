/* ============================================================
   /the-cavern — SECTION COPY

   The page is about DISCOVERY AND MEMORY, not inventory. Media
   Cavern is not only about owning physical media, it is about
   remembering: what's playing when you walk in, genres you hadn't
   considered, things you'd forgotten existed. You come in for one
   thing and leave talking about another.

   NEVER A CATALOGUE. No prices, no stock counts, no availability,
   no item listings — including in the buying section below.

   Transcript support, where it exists, is noted per section.
   Everything else is client-supplied era and store context, not a
   claim about any person.
   ============================================================ */

export type CavernSection = {
  id: string;
  label: string;
  heading: string;
  body: readonly string[];
  /** Rendered as a short list under the copy. Not a product list. */
  list?: readonly string[];
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
    objectPosition?: string;
  };
};

export const CAVERN_INTRO = {
  headline: "Welcome to the Cavern.",
  body: [
    "The inventory changes, the walls change, the weird stuff disappears, then something else walks through the door.",
  ],
  kicker: "Come dig.",
} as const;

export const CAVERN_SECTIONS: readonly CavernSection[] = [
  {
    id: "music",
    label: "Music",
    heading: "You came in for one record. You're leaving with three you'd forgotten.",
    body: [
      "Half of what happens here is exposure. Something is playing in the room and you stop, because you have not heard it in twenty years, or you have never heard it at all.",
      "The shop has always carried what other stores don't — weird hip-hop, punk and metal that never made the wall anywhere else. That is the part Cameron came here for in the first place, years before he was behind the counter.",
      "Ask what's on. Ask what's good. You will get an actual answer, and it will not be the record that came out on Friday.",
    ],
    image: {
      src: "/images/metal-section-hand-painted-sign.jpg",
      width: 1100,
      height: 619,
      alt: "A hand-painted METAL sign above cassette bins, with vinyl crates and a red guitar below.",
    },
  },
  {
    id: "movies",
    label: "Movies",
    heading: "Renting a movie used to be an event.",
    body: [
      "The drive-in. Blockbuster night — the whole family in the car once a week, popcorn going on the stove or in the microwave before you left. One tape. One film. That was the evening.",
      "And sometimes you walked in and every copy of the thing you wanted was already gone. You did not stream it instead. You picked something else, or you waited a week, and the waiting was part of it.",
      "Cameron pushed movies here harder than the store ever had, because the people who worked here before him were music people more than film people. The wall reflects that.",
    ],
    image: {
      src: "/images/movie-wall-dvd-shelving.jpg",
      width: 800,
      height: 800,
      alt: "A floor-to-ceiling wall of DVD and VHS shelving packed with titles.",
    },
  },
  {
    id: "audio-video-equipment",
    label: "Audio Video Equipment",
    heading: "The gear was for making things, not only playing them.",
    body: [
      "High fidelity meant something. It sounded better, and you sat down and listened properly instead of having it on behind something else. The console was furniture. An album side was the unit of time, not a track.",
      "But the part people forget is that the equipment was creative. It was not a delivery system, it was an instrument.",
    ],
    list: [
      "Tape to tape. Play on one deck, record on the other. The mixtape you made at home, in real time, with your finger on the button.",
      "Reel to reel, for anyone who wanted to take it further than that.",
      "The 100- and 200-disc changer. Programming a run — disc one track five, into disc six track nine, into disc seventy-four track one.",
    ],
    image: {
      src: "/images/av-equipment-component-stack.jpg",
      width: 1351,
      height: 2400,
      alt: "A PS-120 amplifier above a stacked component system with tuner, equaliser and twin cassette deck.",
    },
  },
  {
    id: "collectibles",
    label: "Collectibles",
    heading: "The thing around the thing.",
    body: [
      "The poster from the show you actually went to. The stub you kept. Comics, tour programs, flags on the wall of a room you no longer live in.",
      "Songbooks and printed lyrics belong here too. Before you could look the words up in four seconds, you learned them off the sleeve, and you learned them wrong for years until somebody corrected you.",
      "Video games sit in this section as well — a format, same as any other, not a novelty.",
    ],
    image: {
      src: "/images/collectibles-superman-199-comic.jpg",
      width: 2400,
      height: 1351,
      alt: "A bagged copy of Superman No. 199 standing in a comics bin.",
    },
  },
  {
    id: "oddities",
    label: "Oddities",
    heading: "Things that make you stop walking.",
    body: [
      "Grandfather clocks. Vintage typewriters. An old neon sign. Picnic baskets. Lawn ornaments. A tarantula. A hermit crab.",
      "Some of it is not for sale. It just lives here.",
    ],
    image: {
      src: "/images/tarantula-terrarium-oddity.jpg",
      width: 1100,
      height: 619,
      alt: "A tarantula in a glass terrarium with mushroom decor, sitting out on the shop floor.",
    },
  },
  {
    id: "clothing",
    label: "Clothing",
    heading: "A rack you dig through, not a merch table.",
    body: [
      "Band shirts you have to go through hanger by hanger, because the good one is never at the front.",
      "Ties, hats, leather, wallets, chains, gloves. Holiday sweaters, in the way that holiday sweaters are either a joke or entirely sincere and it is never clear which.",
    ],
    image: {
      src: "/images/clothing-goonies-tee.jpg",
      width: 2400,
      height: 1351,
      alt: "A maroon Goonies 'Never Say Die' tee on a hanger in front of the vinyl and CD wall.",
    },
  },
  {
    id: "live-events",
    label: "Live Events",
    heading: "There is a stage in the middle of it.",
    body: [
      "Bands play here. Karaoke happens here. Record releases and meet-ups happen here. Sometimes a trip to the Cavern turns into a show.",
    ],
    image: {
      src: "/images/stage-live-crowd-magenta.jpg",
      width: 1100,
      height: 733,
      alt: "A packed in-store crowd watching a band perform under magenta stage light.",
    },
  },
];

/* ---------- They buy ----------
   HARD CONSTRAINT: state that they buy and how to reach them.
   No prices, no rates, no "top dollar", nothing implying a
   valuation or an offer. */

export const CAVERN_BUYING = {
  label: "They buy",
  heading: "It goes both ways.",
  body: [
    "Media Cavern buys as well as sells — CDs, DVDs, collectibles and oddities.",
    "If you have something you are thinking about parting with, get in touch and ask. That is the whole process.",
  ],
  cta: { label: "Email sell@themediacavern.com", href: "mailto:sell@themediacavern.com" },
} as const;

export const CAVERN_CLOSING = {
  headline: "You never know what you're going to find at Media Cavern.",
  kicker: "Check back often.",
} as const;

export const CAVERN_GALLERY_INTRO = {
  label: "The room itself",
  heading: "Have a look around.",
  body: "Photographs of the store, filtered by what you want to see. This is what the place looks like — it is not a list of what is in stock.",
} as const;
