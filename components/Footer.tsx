import LogoPlaceholder from "./LogoPlaceholder";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import { SITE, FEATURES } from "@/data/site";
import styles from "./Footer.module.css";

/* ============================================================
   FOOTER

   Three columns: Visit / Hours / Connect.

   The logo is a PLACEHOLDER, same absolute rule as the header and
   hero. The wordmark is never rendered as HTML text.

   "Site powered by NexCore" is behind FEATURES.poweredByNexCore in
   /data/site.ts and is OFF by default. Flip that one boolean to
   turn it on — nothing else needs to change.
   ============================================================ */

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          {/* Same swap point discipline as everywhere else. */}
          <LogoPlaceholder />
          <p className={styles.tagline}>{SITE.tagline}</p>
          <ul className={styles.credentials} role="list">
            {SITE.credentials.map((item) => (
              <li key={item} className={styles.credential}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.columns}>
          <section className={styles.column} aria-labelledby="footer-visit">
            <h2 id="footer-visit" className={styles.columnTitle}>
              Visit
            </h2>
            <address className={styles.address}>
              <a
                className={styles.link}
                href={SITE.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.region}{" "}
                {SITE.address.postalCode}
              </a>
              <a className={styles.link} href={SITE.phone.href}>
                {SITE.phone.display}
              </a>
            </address>
            <a
              className={styles.inlineCta}
              href={SITE.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
              <span aria-hidden="true">&rarr;</span>
            </a>
          </section>

          <section className={styles.column} aria-labelledby="footer-hours">
            <h2 id="footer-hours" className={styles.columnTitle}>
              Hours
            </h2>
            <ul className={styles.hours} role="list">
              {SITE.hours.map((row) => (
                <li key={row.label} className={styles.hoursRow}>
                  <span className={styles.hoursLabel}>{row.label}</span>
                  <span className={styles.hoursValue}>{row.value}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.column} aria-labelledby="footer-connect">
            <h2 id="footer-connect" className={styles.columnTitle}>
              Connect
            </h2>
            <ul className={styles.connect} role="list">
              <li>
                <a
                  className={styles.social}
                  href={SITE.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className={styles.icon} size={18} />
                  {SITE.social.instagram.label}
                </a>
              </li>
              <li>
                <a
                  className={styles.social}
                  href={SITE.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className={styles.icon} size={18} />
                  {SITE.social.facebook.label}
                </a>
              </li>
              <li>
                <a className={styles.link} href={`mailto:${SITE.email.bookings}`}>
                  Bookings
                </a>
              </li>
              <li>
                <a className={styles.link} href={`mailto:${SITE.email.sell}`}>
                  Sell to Us
                </a>
              </li>
              <li>
                <a className={styles.link} href={`mailto:${SITE.email.contact}`}>
                  Contact
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className={styles.bar}>
        <p className={styles.copyright}>
          &copy; {SITE.copyrightYear} {SITE.name}
        </p>
        {FEATURES.poweredByNexCore ? (
          <p className={styles.powered}>Site powered by NexCore</p>
        ) : null}
      </div>
    </footer>
  );
}
