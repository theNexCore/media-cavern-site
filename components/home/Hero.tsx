import Link from "next/link";
import LogoPlaceholder from "../LogoPlaceholder";
import styles from "./Hero.module.css";

/* ============================================================
   HERO — near-full viewport, pure black, no photography.

   THE LOGO RULE APPLIES HERE EXACTLY AS IT DOES IN THE HEADER.
   The approved layered SVG with the rotating record is NOT ready.
   This section therefore does NOT:
     - build or fake the record rotation
     - trace, recreate or approximate the wordmark
     - substitute any other artwork

   It renders LogoPlaceholder at hero scale inside a single marked
   mount point. See the block below.
   ============================================================ */

const SECONDARY = [
  "MUSIC",
  "MOVIES",
  "AUDIO VIDEO",
  "COLLECTIBLES",
  "ODDITIES",
  "LIVE EVENTS",
] as const;

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-support">
      {/* Faint green atmospheric glow. Decorative, non-interactive. */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.eyebrow}>South County • St. Louis</p>

        {/* ==========================================================
            ANIMATED LOGO MOUNT POINT

            When the approved layered SVG lands, replace the single
            <LogoPlaceholder /> below with the animated component:

              <MediaCavernMark
                className={styles.mark}
                priority
              />

            Keep the wrapping <div className={styles.markWrap}>: it
            owns the hero-scale width, the centering, and the space
            reserved for the lockup. Nothing else in this file needs
            to change.

            Do NOT add a rotation animation here in the meantime.
            ========================================================== */}
        <div className={styles.markWrap}>
          <LogoPlaceholder width="100%" />
        </div>
        {/* ================ END MOUNT POINT ========================= */}

        <h1 id="hero-support" className={styles.support}>
          The Ultimate Entertainment Experience
        </h1>

        <ul className={styles.secondary} role="list">
          {SECONDARY.map((item) => (
            <li key={item} className={styles.secondaryItem}>
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href="/the-cavern" className={styles.ctaPrimary}>
            Enter the Cavern
          </Link>
          <Link href="/visit" className={styles.ctaSecondary}>
            Visit Media Cavern
          </Link>
        </div>
      </div>

      {/* Subtle scroll cue. Decorative — the section below is
          reachable by scrolling, tab order and the skip link. */}
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
