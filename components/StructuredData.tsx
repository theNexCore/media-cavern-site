import { SITE } from "@/data/site";

/* ============================================================
   LocalBusiness JSON-LD

   VERIFIED FACTS ONLY. Deliberately absent, because none of it is
   confirmed and fabricating it in structured data would be both
   dishonest and a search-policy violation:

     - aggregateRating / reviewCount
     - priceRange
     - foundingDate
     - geo coordinates
     - amenity or parking claims

   If any of those are ever confirmed, add them here — not in a
   component, and never as a guess.
   ============================================================ */

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: SITE.name,
    description:
      "Media Cavern in South County St. Louis — music, movies, audio video equipment, collectibles, oddities, clothing and live events.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    telephone: SITE.phone.e164,
    url: "https://www.themediacavern.com/",
    hasMap: SITE.directionsUrl,
    openingHoursSpecification: SITE.hours.map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.days,
      opens: row.opens,
      closes: row.closes,
    })),
    sameAs: SITE.social.map((s) => s.url),
  };

  return (
    <script
      type="application/ld+json"
      // Serialised from a typed literal above — no user input reaches this.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
