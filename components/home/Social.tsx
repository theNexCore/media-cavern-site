import Reveal from "../Reveal";
import { SOCIAL_ICONS } from "../SocialIcons";
import { SOCIAL } from "@/data/home-copy";
import { SITE } from "@/data/site";
import styles from "./Social.module.css";

/* ============================================================
   SECTION 12 — SOCIAL

   Icons are the official shapes, rendered in --mc-green via
   currentColor. Hover lifts to --mc-green-bright with a subtle
   glow and a small scale. No gray, no Facebook blue, no
   Instagram gradient.

   Outbound links carry target="_blank" and
   rel="noopener noreferrer".
   ============================================================ */

export default function Social() {
  return (
    <section className={styles.section} aria-labelledby="social">
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal as="p" className={styles.eyebrow}>
            {SOCIAL.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={60}>
            <span id="social" className={styles.headline}>
              {SOCIAL.headline}
            </span>
          </Reveal>
        </div>

        <Reveal delay={120} className={styles.links}>
          {SITE.social.map((s) => {
            const Icon = SOCIAL_ICONS[s.id];
            return (
              <a
                key={s.id}
                className={styles.link}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={styles.icon} size={28} />
                <span className={styles.linkText}>
                  <span className={styles.linkLabel}>{s.label}</span>
                  <span className={styles.linkHandle}>{s.handle}</span>
                </span>
              </a>
            );
          })}

          <a className={styles.link} href={SITE.phone.href}>
            <span className={styles.icon} aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                focusable="false"
              >
                <path d="M6.2 3h3.1l1.6 4-2 1.2a12.3 12.3 0 0 0 5.4 5.4l1.2-2 4 1.6v3.1a2 2 0 0 1-2.2 2A17.8 17.8 0 0 1 4.2 5.2 2 2 0 0 1 6.2 3Z" />
              </svg>
            </span>
            <span className={styles.linkText}>
              <span className={styles.linkLabel}>Call</span>
              <span className={styles.linkHandle}>{SITE.phone.display}</span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
