import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SOCIAL_ICONS } from "@/components/SocialIcons";
import { SITE } from "@/data/site";
import styles from "./page.module.css";

/* ============================================================
   /visit

   A utility page: address, hours, phone, directions, social.

   NO EXTERIOR PHOTOGRAPH right now, deliberately. The plaza shot
   that was here framed the neighbouring business more than Media
   Cavern and has been quarantined. The daytime storefront is not a
   drop-in replacement: it still carries CD Warehouse signage, and
   whether that sign is on the building today is unconfirmed. An
   honest gap beats sending people to look for the wrong sign.

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
    /* Not an exterior: the plaza shot was quarantined and the daytime
       storefront is on hold pending the CD Warehouse sign question. */
    images: ["/images/store-interior-customers-wide.jpg"],
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
              {SITE.social.map((s) => {
                const Icon = SOCIAL_ICONS[s.id];
                return (
                  <li key={s.id}>
                    <a
                      className={styles.socialLink}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className={styles.icon} size={20} />
                      {s.handle}
                    </a>
                  </li>
                );
              })}
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
