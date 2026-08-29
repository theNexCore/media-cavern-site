import Reveal from "../Reveal";
import { VISIT_CTA } from "@/data/home-copy";
import { SITE } from "@/data/site";
import styles from "./VisitCta.module.css";

/* ============================================================
   SECTION 13 — VISIT

   The page's closing block. Deliberately typographic: six image
   sections precede it, and the last thing a visitor needs is an
   address, a phone number and hours they can read at a glance.

   Address, phone and hours all come from SITE so they can never
   drift from the footer or the Visit page.
   ============================================================ */

export default function VisitCta() {
  return (
    <section className={styles.section} aria-labelledby="visit-cta">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <Reveal as="h2">
          <span id="visit-cta" className={styles.headline}>
            {VISIT_CTA.headline.map((line, i) => (
              <span key={line} className={styles.headlineLine} data-line={i}>
                {line}
              </span>
            ))}
          </span>
        </Reveal>

        <Reveal delay={80} className={styles.details}>
          <a className={styles.address} href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer">
            {SITE.address.full}
          </a>

          <a className={styles.phone} href={SITE.phone.href}>
            {SITE.phone.display}
          </a>

          <ul className={styles.hours} role="list">
            {SITE.hours.map((row) => (
              <li key={row.label} className={styles.hoursRow}>
                <span className={styles.hoursLabel}>{row.label}</span>
                <span className={styles.hoursValue}>{row.value}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140} className={styles.actions}>
          <a
            className={styles.ctaPrimary}
            href={SITE.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions
            <span className={styles.arrow} aria-hidden="true">
              &rarr;
            </span>
          </a>
          <a className={styles.ctaSecondary} href={SITE.phone.href}>
            Call the store
          </a>
        </Reveal>
      </div>
    </section>
  );
}
