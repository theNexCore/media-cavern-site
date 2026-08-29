/* ============================================================
   /the-story — CAMERON NOVACK

   THE OWNER'S NAME IS CAMERON NOVACK. N-O-V-A-C-K.
   It ends C-K. Any other ending is wrong.

   SOURCE OF TRUTH
   /source-docs/cameron-novack-interview-transcript.md — an
   86-minute recorded interview with Cameron Novack, conducted by
   REAGAN DORTCH for SoCo Spotlight, with Jim present.

   Every factual claim below traces to that transcript (timestamps
   cited inline) or to facts supplied directly by the client. If a
   claim has no citation, it does not belong on this page.

   TRANSCRIPTION CAVEATS — the transcript is automated:
   - It renders the interviewer as "Regan". Her name is REAGAN
     DORTCH. Do not propagate the transcript's spelling.
   - Proper nouns are unreliable. The cave concerts are described
     without naming the bands, because the transcript garbles them.
   - "CEO" in the transcript is CeeLo Green. That exchange is left
     off the page pending confirmation.

   THINGS DELIBERATELY NOT SAID
   - Why CD Warehouse closed. Cameron does not characterise it and
     neither do we. It closed. Full stop. No claims about rent,
     conduct, finances or any dispute.
   - The store piano is NOT his mother's piano. Hers is still at
     his home with the keys removed [09:19–10:29]. Do not merge
     the two.
   ============================================================ */

export const HERO = {
  eyebrow: "The story behind the Cavern",
  name: "Cameron Novack",
  support: ["He didn't build a store.", "He built the place he wanted to exist."],
  intro: [
    "There are stores people walk into because they need something.",
    "Media Cavern was built for people who want to find something.",
    "For Cameron Novack, that distinction matters.",
  ],
  scrollCue: "Scroll to the story",
} as const;

/* ---------- Chapter type ----------
   `body` and `quote` render however many entries you give them, so
   the narrative can grow without any layout work. */

export type Chapter = {
  id: string;
  /** Chapter number, rendered as a marker. */
  number: string;
  /** Transcript timestamps backing this chapter. Not rendered. */
  sources?: string;
  kicker: string;
  heading: string;
  body: readonly string[];
  /** Cameron's own words, set as a pull quote inside the chapter. */
  quote?: { text: string; cite?: string };
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption?: string;
    /** CSS object-position, for frames whose subject is off-centre. */
    objectPosition?: string;
    /** Global clip-path mask from globals.css. */
    edge?: "a" | "b" | "c";
  };
};

export const CHAPTERS: readonly Chapter[] = [
  {
    id: "who",
    number: "01",
    /** Transcript citations. Not rendered — provenance only. */
    sources: "04:51, 01:28, 03:32, 02:55",
    kicker: "Who Cam is",
    heading: "A musician first.",
    body: [
      "Cameron Novack calls his voice his number one instrument, and he has spent a life proving it. He sang with the St. Louis Children's Choir. He sang opera for the Pope at the Vatican. He teaches voice, and has for years.",
      "He put out hip-hop records under the name Novocane.",
      "Ask him what he actually does and the answer goes further than entertainer. He points to a story about David Bowie, whose Buddhist teacher told him that spirituality was moving into physical media and music — and that he was meant to be out in the world putting the message across rather than retreating from it.",
    ],
    quote: {
      text: "Legitimately I would call myself a shaman more than anything else, because when I get on stage I want people to reach that place of transcendence.",
      cite: "Cameron Novack",
    },
    /* No image. The performance portrait that sat here was shot at
       another venue and was quarantined 2026-08-29. Text-only is
       correct — do not pad this with an unrelated frame. */
  },
  {
    id: "before",
    number: "02",
    /** Transcript citations. Not rendered — provenance only. */
    sources: "15:48, 18:07",
    kicker: "Before Media Cavern",
    heading: "He wanted in so badly he'd have taken one day a week.",
    body: [
      "Over ten years ago, Cameron started coming into the CD Warehouse that stood at this address. What pulled him back was what was on the shelves: the store always carried underground music other shops didn't — weird hip-hop, punk and metal.",
      "He wanted to work there. Not full time — one day a week would have done it. He was already working three jobs: fitness instructor, iRock (a rock-and-roll-themed eyeglasses store in the Central West End), and Patricia. He just wanted to be inside a record store all day and see what happened.",
      "He tried Vintage Vinyl. They never called him back.",
      "So he filled out resumes here, and kept showing up, and eventually concluded he was never going to be hired. Then he kept showing up anyway.",
    ],
    image: {
      src: "/images/cd-warehouse-sign-illuminated.jpg",
      width: 1100,
      height: 619,
      alt: "The illuminated CD Warehouse storefront sign at night.",
      caption: "The sign he kept walking under.",
      edge: "a",
      /* The sign sits right of centre in frame; a centred crop cut it.
         Percentage keeps the correction responsive. */
      objectPosition: "62% 50%",
    },
  },
  {
    id: "hire",
    number: "03",
    /** Transcript citations. Not rendered — provenance only. */
    sources: "18:07, 19:48, 20:30",
    kicker: "The hire",
    heading: "A scratched Black Sabbath record.",
    body: [
      "He was standing at the wall holding an original copy of Black Sabbath's Masters of Reality — buying it again because his own copy was scratched and the record was worth owning twice — when the owner asked him if he wanted to work Saturday.",
      "Within a couple of weeks he was the three-day-a-week guy. Within a couple of years he was the only full-timer. Within months he had a key, and he used it to stay late reorganising a store he did not yet own, because he wanted to.",
    ],
    quote: {
      text: "It only took me being here about a week before I was like, this feels like home.",
      cite: "Cameron Novack",
    },
  },
  {
    id: "walt",
    number: "04",
    /** Transcript citations. Not rendered — provenance only. */
    sources: "15:48, 20:30, 29:23",
    kicker: "Walter Ray",
    heading: "Somebody who wasn't threatened by him.",
    body: [
      "Cameron is unambiguous about the man who hired him. Walter Ray never micromanaged him, let him spread his wings, and handed him a key within months.",
      "When Walt saw him doing something well, he told him so, and told him to keep doing it. Cameron describes that as rare in his working life — the first place he had been where somebody wasn't threatened by him on some level.",
    ],
    quote: {
      text: "You literally are telling me I could do everything because you see something beautiful inside of me.",
      cite: "Cameron Novack, on Walter Ray",
    },
  },
  {
    id: "transition",
    number: "05",
    /** Transcript citations. Not rendered — provenance only. */
    sources: "72:49, 31:11",
    kicker: "January 25, 2025",
    heading: "CD Warehouse closed. Media Cavern opened. Same day, same room.",
    body: [
      "On 25 January 2025, one store ended and another began without the room ever going dark.",
      "CD Warehouse closed. The building's owner approached Cameron about starting something new in the space, and he said yes.",
      "He had never seriously considered moving somewhere else. By then the place already felt like home, and he had been running it in every practical sense for years.",
    ],
    image: {
      src: "/images/storefront-11828-daytime.jpg",
      width: 1600,
      height: 1600,
      alt: "The storefront at 11828 in daylight: CD Warehouse signage still on the facade, MEDIA CAVERN lettered in the window glass.",
      caption: "Same door, same address — the sign had not caught up yet.",
    },
  },
  {
    id: "buildout",
    number: "06",
    /** Transcript citations. Not rendered — provenance only. */
    sources: "37:00, 39:00",
    kicker: "The build-out",
    heading: "Made from leftovers, in almost no time.",
    body: [
      "Cameron calls the changeover an absolutely fun challenge. He bought a handful of things. The rest came from what the previous owner was throwing out, and from friends who turned up with saws and offcuts because they wanted to help.",
      "The fixtures were built from makeshift leftover material in almost no time, and he likes that you can tell. It gives the room a particular kind of vibe.",
      "He also pushed movies far harder than the store ever had — the people who worked there before were music people more than film people.",
    ],
    quote: {
      text: "When people see your vision, it's just so comforting. You don't even have to talk as fast.",
      cite: "Cameron Novack",
    },
  },
  {
    id: "name",
    number: "07",
    /** Transcript citations. Not rendered — provenance only. */
    sources: "39:41, 40:36, 41:39",
    kicker: "The name",
    heading: "It was almost Media Cave.",
    body: [
      "He likes the isolation of a cave, and the comfort of music inside one. He has seen three concerts performed in actual caves. The first idea was Media Cave: somebody's home, underground, where you find things you won't find above water.",
      "The domain was contested, so his mind jumped to Cavern — and he liked it better. It's an underused word. Its etymology runs back to cave but tangles with tavern, because t's and c's kept getting confused across Gaelic and Germanic tongues.",
      "He is a poet, and he cares about where words come from.",
    ],
    quote: {
      text: "We've never been a warehouse of CDs.",
      cite: "Cameron Novack",
    },
    /* ⚠️ SCOPED LOGO EXCEPTION — approved for THIS PLACEMENT ONLY.
       The winged record mark appears here and nowhere else on the
       site. It does not unlock logo usage elsewhere: the header,
       footer and hero all keep their placeholders. The artwork has a
       solid black background, so it must never sit on a lighter
       surface. */
    image: {
      src: "/images/media-cavern-winged-record-mark.png",
      width: 1717,
      height: 916,
      alt: "The Media Cavern mark: a black vinyl record labelled Media Cavern, flanked by green neon wings.",
      caption: "Cavern, not cave. Not a warehouse either.",
    },
  },
  {
    id: "voice",
    number: "08",
    /** Transcript citations. Not rendered — provenance only. */
    sources: "54:43, 55:20, 62:51, 56:48, 08:49, 56:26, 57:00, 65:45, 58:55",
    kicker: "The Voice",
    heading: "He made the top sixty, and refused to sell them his mother.",
    body: [
      "He was 27, on holiday in Florida, when his father suggested he drive to Orlando and try out. He went with Gnarls Barkley's \"Crazy\", Radiohead's \"Creep\", and an original of his own.",
      "Five or six callbacks later they flew him to Los Angeles, and he made the top sixty who appeared on television. Of that sixty, he was the only one who came through an open call — every other contestant that season arrived as an industry reference.",
      "Production wanted a sob story. They wanted him grieving on camera for his mother, who died when he was 19. He would not give it to them, because it wasn't true — he had made his peace, and said so.",
      "So they built a different character instead. They cut and pasted his answers until he sounded like a man who talked about himself, labelled him \"jack of all genres\", and he was contractually bound to wear it. Seeing it broadcast was disconcerting.",
      "No chair turned. He was giving the other contestants voice lessons before their performances, and he says plainly that he never understood it.",
      "He has no regrets. He is glad he went through it.",
    ],
    quote: {
      text: "It was so much fun. I have no regrets about it. I'm glad I went through with it.",
      cite: "Cameron Novack",
    },
  },
  {
    id: "store",
    number: "09",
    /** Transcript citations. Not rendered — provenance only. */
    sources: "31:54, 68:26",
    kicker: "The store today",
    heading: "Nothing in here he can't talk to you about.",
    body: [
      "He curates it himself. He goes through the boxes people bring in rather than buying blind, which is why he can hold a conversation about anything on the shelves. He says you can test him on that.",
      "The categories collide on purpose: music, movies, audio video equipment, collectibles, oddities, clothing, and live events. Someone walks in for a movie and leaves talking about a receiver.",
      "And the thing he sells is not really the product.",
    ],
    quote: {
      text: "It's not just a store full of product. It's a store full of things that I'm deeply passionate about.",
      cite: "Cameron Novack",
    },
    image: {
      src: "/images/store-interior-customers-wide.jpg",
      width: 1067,
      height: 800,
      alt: "The Media Cavern shop floor mid-afternoon, customers browsing bins beneath a hand-lettered chalk sign.",
      caption: "An ordinary afternoon on the floor.",
    },
  },
  {
    id: "stage",
    number: "10",
    /** Transcript citations. Not rendered — provenance only. */
    sources: "32:34, 33:21, 34:31, 35:16",
    kicker: "The stage",
    heading: "He had fifteen bands ready before he had the room.",
    body: [
      "Live music in the shop was the thing he pushed for and kept being told no. So while the answer was still no, he went and talked to everyone else in the plaza, and started calling the local bands whose records he'd been selling.",
      "The second he took over, the ball was already rolling — around fifteen bands were ready to play.",
      "He is chasing a specific memory. Twelve or thirteen years old, walking into Street Side Records while a band played, his whole body shaken by bass louder than it had any business being. He wants people to get that every so often.",
      "It isn't only bands. There have been movie nights, and a poetry night for his friend Paul.",
    ],
    image: {
      src: "/images/stage-live-crowd-magenta.jpg",
      width: 1100,
      height: 733,
      alt: "A packed in-store crowd watching a band perform under magenta stage light.",
      caption: "The room, doing the thing he argued for.",
    },
  },
  {
    id: "piano",
    number: "11",
    /** Transcript citations. Not rendered — provenance only. */
    sources: "08:49, 09:19, 66:46",
    kicker: "Ask first. Then play.",
    heading: "The piano.",
    body: [
      "There is a mahogany grand piano on the floor with the lid up.",
      "His mother was a phenomenal piano player. She sang him to sleep, played guitar for him, played piano while he sang. He took up guitar and bass instead, the way you do when a thing is your parent's. She died when he was 19.",
      "The piano in the store is not hers. But it is out on the floor, in tune, and available — and if you know how to play, you're welcome to ask.",
    ],
    quote: {
      text: "If you've got one note on a piano, you've got a single tone. Put two notes together, they create an overtone. That's what we call harmony. That's everything in life.",
      cite: "Cameron Novack",
    },
    image: {
      src: "/images/piano-mahogany-grand.jpg",
      width: 1100,
      height: 733,
      alt: "A mahogany grand piano with its lid open and a mic stand beside it, DVD shelving all around.",
      caption: "Lid up, ready.",
      edge: "b",
    },
  },
  {
    id: "community",
    number: "12",
    /** Transcript citations. Not rendered — provenance only. */
    sources: "20:30, 21:35",
    kicker: "Proudly South County",
    heading: "Word of mouth is still king.",
    body: [
      "Ask him how people find the place and the answer is other people. Every day someone new tells him a friend sent them, and he says it makes him elated that word of mouth still works that way.",
      "Media Cavern is a proud member of the South County Chamber.",
      "For Cameron, being part of South County is more than an address. It means the businesses, the people, the artists and the customers who give this part of St. Louis its identity.",
    ],
    /* No image. The plaza exterior that sat here framed the
       neighbouring business more than Media Cavern, and was
       quarantined 2026-08-29. */
  },
];

/* ---------- SoCo Spotlight ---------- */

export const SPOTLIGHT = {
  eyebrow: "The story continues",
  headline: "SoCo Spotlight",
  body: [
    "This story comes from a long sit-down conversation. Cameron talked with SoCo Spotlight about the road from CD Warehouse to Media Cavern, his life in music, the stories behind the store, and why he built a place unlike anything else in South County.",
    "It runs well past inventory. It is about the person behind the place.",
  ],
  /** Reagan Dortch is the interviewer, never the subject. */
  credit: "Interviewed by Reagan Dortch, SoCo Spotlight Community Champion.",
  /* ⚠️ NO EPISODE LINK EXISTS. Set it when published and the button
     renders. Null means no button — never a dead one. */
  episodeUrl: null as string | null,
  episodeLabel: "Watch Cameron's SoCo Spotlight",
  image: {
    src: "/images/cameron-novack-interview-wide.jpg",
    width: 1100,
    height: 619,
    alt: "Cameron Novack seated in front of the store's DVD wall during a filmed interview, a clip-on mic at his collar.",
  },
} as const;

/* ---------- Close ---------- */

export const CLOSING = {
  kicker: "The last question",
  /** Reagan Dortch's closing question and his answer [84:46]. */
  question: "Was it worth it?",
  answer: "Yes. 100%.",
  body: [
    "The store keeps evolving. The inventory changes, the equipment changes, and the things that walk through the door change.",
    "The idea behind it stays simple.",
  ],
  statement: "Give people somewhere worth discovering.",
  signoff: "That's Media Cavern.",
  tagline: ["More than a store.", "A destination."],
  ctas: [
    { label: "Enter the Cavern", href: "/the-cavern", primary: true },
    { label: "Visit Media Cavern", href: "/visit", primary: false },
  ],
} as const;
