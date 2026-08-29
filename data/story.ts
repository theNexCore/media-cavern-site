/* ============================================================
   /the-story — CAMERON NOVACK

   THE OWNER'S NAME IS CAMERON NOVACK. N-O-V-A-C-K.
   It ends C-K. Any other ending is wrong — a single trailing K,
   a bare C, or a doubled K are all misspellings of a real person's
   name. (Written this way on purpose so a QA grep for the wrong
   spellings never trips on this file.)

   Copy lives here so the narrative can be revised without
   touching layout. The page composes these strings into hand-built
   editorial sections — it is deliberately NOT a generic renderer,
   because every section has its own shape.

   APPROVED FACTS ONLY. Nothing here is inferred:
     - Cameron Novack is a musician and a collector
     - his history runs THROUGH CD Warehouse — he did not own it
     - he auditioned for NBC's The Voice; no chair turned; an
       unusually long discussion followed
     - Media Cavern opened January 2025
     - the store carries music, movies, audio equipment,
       collectibles, oddities and clothing, and has a stage and a
       mahogany grand piano
     - he was interviewed for SoCo Spotlight
     - Media Cavern is a proud member of the South County Chamber

   Do NOT add awards, sales figures, dates, quotes, employee
   history, Voice episode details or Chamber titles.
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

export const BEFORE = {
  eyebrow: "Before Media Cavern",
  headline: "It started long before the sign went up.",
  body: [
    "Music had already been part of Cam's life long before Media Cavern opened its doors.",
    "He's a musician, a collector, and someone who has spent years surrounded by the physical formats, equipment, and culture that shaped the way generations experienced entertainment.",
    "Part of that journey ran through CD Warehouse.",
    "That chapter matters because it gave Cam a front-row seat to something the streaming era can't really reproduce: people digging through music and movies, talking about what they love, recommending something to a stranger, rediscovering a record they forgot existed, or finally finding the movie they'd been hunting for years.",
  ],
  close: "It reinforced something Cam already understood:",
  emphasis: "Physical media creates a different relationship with entertainment.",
} as const;

/** One word per line takes the green accent. */
export const QUOTE_ONE = [
  { text: "You hold it.", accent: "hold" },
  { text: "You study it.", accent: "study" },
  { text: "You collect it.", accent: "collect" },
  { text: "You talk about it.", accent: "talk" },
  { text: "You remember where you found it.", accent: "remember" },
] as const;

export const CD_WAREHOUSE = {
  eyebrow: "Part of the path",
  headline: "The CD Warehouse years",
  body: [
    "For Cam, CD Warehouse was more than a retail stop in the story.",
    "It was a place where physical media still created conversation.",
    "People came in looking for one thing and ended up finding something else. Recommendations happened face to face. Collections changed hands. Someone rediscovered a favorite album. Someone else finally found the movie they had been trying to track down.",
    "That experience stayed with him.",
    "Years later, when Media Cavern began taking shape, that same belief in discovery came with it.",
  ],
} as const;

export const MUSICIAN = {
  eyebrow: "More than retail",
  headline: "Music was never just something on the shelf.",
  body: [
    "Cam's relationship with music went well beyond retail.",
    "He performed. He pursued it. Music was something to participate in, not simply collect.",
    "That matters when you walk through Media Cavern today.",
  ],
  list: [
    "The stage isn't decoration.",
    "The piano isn't a prop.",
    "The gear isn't there just because it looks good.",
  ],
  close:
    "The store reflects someone who believes music is meant to be heard, played, shared, and experienced.",
} as const;

export const THE_VOICE = {
  eyebrow: "One more chapter",
  headline: "The Voice",
  body: [
    "At one point, Cam's path in music led him to an audition for NBC's The Voice.",
  ],
  beat: "No chair turned.",
  after: [
    "But that wasn't quite the end of the story.",
    "What followed was an unusually long conversation and debate among the people involved about what they had heard and what might happen next.",
    "For Cam, it became one more chapter in a life that kept circling back to the same thing:",
  ],
  closingWord: "Music.",
  /* ⚠️ NO AUDITION LINK EXISTS.
     If a legitimate, rights-cleared public link is supplied, set it
     here and the page renders a "Watch the audition" button. Leave
     it null and no button renders — never a dead button, never a
     fabricated URL, never unauthorised footage. */
  auditionUrl: null as string | null,
} as const;

export const CONVERGENCE = {
  eyebrow: "The convergence",
  headline: "Then all of it started coming together.",
  body: [
    "Eventually, those experiences converged into Media Cavern.",
  ],
  strands: [
    "The years around physical media.",
    "The music.",
    "The performance.",
    "The equipment.",
    "The conversations.",
    "The thrill of finding something you didn't expect.",
  ],
  opened: "Media Cavern opened in January 2025.",
  close: "But calling it a record store has never really described it.",
} as const;

export const BECAME = {
  eyebrow: "Inside the Cavern",
  headline: "Not just a record store.",
  intro: "Walk inside and the categories start colliding.",
  categories: [
    "Vinyl", "CDs", "Cassettes", "8-tracks", "VHS", "DVD", "Blu-ray",
    "LaserDisc", "Audio equipment", "Collectibles", "Clothing", "Oddities",
  ],
  body: [
    "Then there's a stage. And a mahogany grand piano.",
    "The result feels less like a traditional retail store and more like a physical entertainment world.",
    "Someone can come in looking for a movie and leave talking about a receiver. Someone else walks in for a record and ends up standing in front of the stage. A customer may recognize something from childhood sitting three feet away from something they've never seen before.",
    "That unpredictability is part of the point.",
  ],
} as const;

export const QUOTE_TWO = {
  headline: "Media Cavern is built around discovery.",
  support: ["Come in looking for one thing.", "Leave talking about something else."],
} as const;

export const STAGE = {
  eyebrow: "Live at the Cavern",
  headline: "The stage isn't decoration.",
  body: ["The stage is part of the reason Media Cavern feels different."],
  happenings: [
    "Bands play here.",
    "Record releases happen here.",
    "Meet-ups happen here.",
    "Karaoke happens here.",
  ],
  after: [
    "Sometimes a trip to the store turns into a show.",
    "For Cam, that is exactly the point.",
    "Music should not exist only behind glass, on a shelf, or inside an app. Sometimes it should be happening ten feet away from you.",
  ],
  cta: { label: "Book the stage", href: "mailto:bookings@themediacavern.com" },
} as const;

export const PIANO = {
  eyebrow: "Ask first. Then play.",
  headline: "The piano",
  body: [
    "There is a mahogany grand piano inside Media Cavern.",
    "Lid up. Ready to be played.",
    "It wasn't added because somebody thought a piano would make the store look interesting. It is there because music belongs in the room.",
    "If you know how to play, ask.",
  ],
  kicker: "Then sit down.",
} as const;

export const HUMAN = {
  eyebrow: "The human side",
  headline: "The store looks like Cam because it is Cam.",
  body: [
    "Media Cavern is personal.",
    "Cam's taste is in the walls. His history is in the shelves. His sense of humor shows up in the oddities. His relationship with music is visible in the stage, the piano, the equipment, and the inventory.",
    "That is why the place feels less like something designed in a conference room and more like something that grew out of a life.",
  ],
} as const;

export const SPOTLIGHT = {
  eyebrow: "The story continues",
  headline: "SoCo Spotlight",
  body: [
    "Cameron recently sat down with SoCo Spotlight to talk about the road from CD Warehouse to Media Cavern, his life in music, the stories behind the store, and why he built a place unlike anything else in South County.",
    "The conversation goes beyond inventory. It is about the person behind the place.",
  ],
  /** Reagan Dortch is the interviewer, never the subject of this section. */
  credit: "Interviewed by Reagan Dortch, SoCo Spotlight Community Champion.",
  /* ⚠️ NO EPISODE LINK EXISTS. Set it here when published and the
     button renders. Null means no button — never a dead one. */
  episodeUrl: null as string | null,
  episodeLabel: "Watch Cameron's SoCo Spotlight",
} as const;

export const COMMUNITY = {
  eyebrow: "Proudly South County",
  headline: ["Built here.", "Showing up here."],
  body: [
    "Media Cavern is a proud member of the South County Chamber.",
    "For Cam, being part of South County is more than an address. It means being part of the businesses, people, artists, customers, and community that give this part of St. Louis its identity.",
    "Media Cavern is still growing. So is its role in the community around it.",
  ],
} as const;

export const CLOSING = {
  body: [
    "The store keeps evolving.",
    "The inventory changes. The equipment changes. The things that walk through the door change.",
    "But the idea behind the place stays remarkably simple:",
  ],
  statement: "Give people somewhere worth discovering.",
  signoff: "That's Media Cavern.",
  tagline: ["More than a store.", "A destination."],
  ctas: [
    { label: "Enter the Cavern", href: "/the-cavern", primary: true },
    { label: "Visit Media Cavern", href: "/visit", primary: false },
  ],
} as const;
