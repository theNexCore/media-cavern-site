/* ============================================================
   SITE CONSTANTS — single source of truth

   Every fact here is verified in CLAUDE.md. Do not add a fact to
   this file that is not confirmed: no founding date, no price
   range, no ratings, no parking claims, no repair services.
   ============================================================ */

export const SITE = {
  name: "Media Cavern",
  tagline: "More than a store. It's a destination.",

  address: {
    street: "11828 Tesson Ferry Rd",
    city: "St. Louis",
    region: "MO",
    postalCode: "63128",
    country: "US",
    /** Single-line form for display. */
    full: "11828 Tesson Ferry Rd, St. Louis, MO 63128",
  },

  phone: {
    display: "(314) 270-3252",
    href: "tel:+13142703252",
    e164: "+13142703252",
  },

  /** Verified opening hours. `days` uses schema.org day codes. */
  hours: [
    { label: "Mon – Thu", value: "11 – 8", days: ["Mo", "Tu", "We", "Th"], opens: "11:00", closes: "20:00" },
    { label: "Friday", value: "11 – 9", days: ["Fr"], opens: "11:00", closes: "21:00" },
    { label: "Saturday", value: "11 – 8", days: ["Sa"], opens: "11:00", closes: "20:00" },
    { label: "Sunday", value: "12 – 5", days: ["Su"], opens: "12:00", closes: "17:00" },
  ],

  directionsUrl:
    "https://maps.google.com/?q=11828+Tesson+Ferry+Rd,+St.+Louis,+MO+63128",

  social: {
    instagram: {
      label: "Instagram",
      handle: "@mediacavernstlouis",
      url: "https://www.instagram.com/mediacavernstlouis/",
    },
    facebook: {
      label: "Facebook",
      handle: "Media Cavern",
      url: "https://www.facebook.com/p/Media-Cavern-61572507115983/",
    },
  },

  email: {
    bookings: "bookings@themediacavern.com",
    sell: "sell@themediacavern.com",
    contact: "contact@themediacavern.com",
  },

  credentials: ["Veteran Owned", "South County Chamber Member"],

  /** Exact name. Not "of Commerce". Not "St. Louis County". */
  chamber: "South County Chamber",

  copyrightYear: 2026,
} as const;

/* ============================================================
   FEATURE FLAGS
   ============================================================ */

export const FEATURES = {
  /**
   * Renders "Site powered by NexCore" in the footer.
   * Flip this single boolean to true to enable it. Nothing else
   * needs to change.
   */
  poweredByNexCore: false,
} as const;
