import Link from "next/link";
import Logo from "../Logo";
import styles from "./Hero.module.css";

/* ============================================================
   HERO — near-full viewport, pure black, no photography.

   The approved wordmark now renders here via <Logo />. The layered
   SVG with the rotating record is still in progress; when it lands
   it swaps inside components/Logo.tsx and this file is untouched.
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
            LOGO MOUNT POINT

            Renders the approved wordmark. When the layered SVG with
            the rotating record is ready, it swaps inside
            components/Logo.tsx - nothing here changes.

            Do NOT build a rotation animation here in the meantime.
            ========================================================== */}
        <div className={styles.markWrap}>
          <Logo width="100%" priority />
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
