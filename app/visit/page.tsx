import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { SITE } from "@/data/site";
import styles from "./page.module.css";

/* ============================================================
   /visit

   A utility page: address, hours, phone, directions, social.

   The wayfinding photograph is the plaza exterior, which genuinely
   helps people spot the building from Tesson Ferry Rd. Note the
   signage in that frame still reads CD Warehouse — it is the same
   plaza and the same unit, and it is the clearest exterior in the
   archive.

   Directions are a STATIC LINK, not an embedded map: an iframe
   would pull third-party scripts and cookies onto an otherwise
   static page for no measurable gain.

   NO PARKING CLAIMS. The source site makes none and none have
   been verified.
   ============================================================ */

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Visit Media Cavern at 11828 Tesson Ferry Rd, St. Louis, MO 63128. Hours, directions and phone for South County's record, movie and audio video shop.",
  openGraph: {
    title: "Visit · Media Cavern",
    description: "Hours, directions and phone for Media Cavern at 11828 Tesson Ferry Rd, St. Louis.",
    images: ["/images/plaza-strip-mall-exterior-night.jpg"],
  },
};

export default function VisitPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Visit</p>
          <h1 className={styles.headline}>
            More than a store.
            <span className={styles.headlineAccent}>It&rsquo;s a destination.</span>
          </h1>
        </div>
      </header>

      <div className={styles.grid}>
        <Reveal className={styles.figureWrap}>
          <figure className={styles.figure}>
            <div className={styles.frame}>
              <Image
                src="/images/plaza-strip-mall-exterior-night.jpg"
                alt="The strip mall on Tesson Ferry Rd at night, storefront signage lit along the row."
                width={1100}
                height={619}
                loading="lazy"
                sizes="(max-width: 60rem) 100vw, 55vw"
                className={styles.image}
              />
            </div>
            <figcaption className={styles.caption}>
              The plaza at night — look for this row from Tesson Ferry Rd.
            </figcaption>
          </figure>
        </Reveal>

        <div className={styles.details}>
          <Reveal className={styles.block}>
            <h2 className={styles.blockTitle}>Address</h2>
            <address className={styles.address}>
              {SITE.address.street}
              <br />
              {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
            </address>
            <a
              className={styles.ctaPrimary}
              href={SITE.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
              <span aria-hidden="true">&rarr;</span>
            </a>
          </Reveal>

          <Reveal delay={60} className={styles.block}>
            <h2 className={styles.blockTitle}>Hours</h2>
            <ul className={styles.hours} role="list">
              {SITE.hours.map((row) => (
                <li key={row.label} className={styles.hoursRow}>
                  <span className={styles.hoursLabel}>{row.label}</span>
                  <span className={styles.hoursValue}>{row.value}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className={styles.block}>
            <h2 className={styles.blockTitle}>Call</h2>
            <a className={styles.phone} href={SITE.phone.href}>
              {SITE.phone.display}
            </a>
          </Reveal>

          <Reveal delay={180} className={styles.block}>
            <h2 className={styles.blockTitle}>Follow</h2>
            <ul className={styles.social} role="list">
              <li>
                <a
                  className={styles.socialLink}
                  href={SITE.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className={styles.icon} size={20} />
                  {SITE.social.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  className={styles.socialLink}
                  href={SITE.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className={styles.icon} size={20} />
                  {SITE.social.facebook.label}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={240} className={styles.block}>
            <h2 className={styles.blockTitle}>Get in touch</h2>
            <ul className={styles.emails} role="list">
              <li>
                <a className={styles.link} href={`mailto:${SITE.email.bookings}`}>
                  Bookings &mdash; {SITE.email.bookings}
                </a>
              </li>
              <li>
                <a className={styles.link} href={`mailto:${SITE.email.sell}`}>
                  Sell to Us &mdash; {SITE.email.sell}
                </a>
              </li>
              <li>
                <a className={styles.link} href={`mailto:${SITE.email.contact}`}>
                  Contact &mdash; {SITE.email.contact}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
