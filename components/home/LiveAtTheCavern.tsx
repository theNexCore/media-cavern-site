import Image from "next/image";
import Reveal from "../Reveal";
import styles from "./LiveAtTheCavern.module.css";

/* ============================================================
   SECTION 6 — LIVE AT THE CAVERN

   Leads with stage-live-crowd-magenta.jpg, the strongest live frame
   in the archive, supported by the stage-corner frame and a shot of
   someone actually playing.

   OVERLAP RULE: neither CRT frame appears here. Both are committed
   to AUDIO VIDEO EQUIPMENT in section 5, so no frame is reused
   across the two contexts.

   The spotlight is a static radial wash behind the lead frame plus a
   soft edge-light on its border — no animation, nothing that pulses.
   ============================================================ */

export default function LiveAtTheCavern() {
  return (
    <section className={styles.section} aria-labelledby="live-at-the-cavern">
      {/* Decorative stage wash. Static, non-interactive. */}
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <Reveal as="p" className={styles.eyebrow}>
            Live at the Cavern
          </Reveal>

          <Reveal as="h2" delay={60}>
            <span id="live-at-the-cavern" className={styles.headline}>
              There&rsquo;s a stage in the store.
            </span>
          </Reveal>

          <Reveal delay={120} className={styles.body}>
            <p>
              Bands play here. Karaoke happens here. Record releases happen
              here. Meet-ups happen here.
            </p>
            <p>
              And sometimes a trip to the record store turns into a show.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <a
              className={styles.cta}
              href="mailto:bookings@themediacavern.com"
            >
              Book the stage
            </a>
          </Reveal>
        </div>

        <div className={styles.media}>
          <Reveal className={styles.figureLead}>
            <Image
              src="/images/stage-live-crowd-magenta.jpg"
              alt="A packed in-store crowd watching a band perform under magenta stage light."
              width={1100}
              height={733}
              loading="lazy"
              sizes="(max-width: 60rem) 100vw, 58vw"
              className={styles.image}
            />
          </Reveal>

          <Reveal delay={90} className={styles.figureCorner}>
            <Image
              src="/images/stage-corner-wide.jpg"
              alt="The stage corner between shows: drum kit, PA stacks and mixer against the black wall."
              width={1100}
              height={619}
              loading="lazy"
              sizes="(max-width: 60rem) 55vw, 30vw"
              className={styles.image}
            />
          </Reveal>

          <Reveal delay={160} className={styles.figurePlayer}>
            <Image
              src="/images/cameron-novack-singing-stage.jpg"
              alt="Cameron Novack singing into a mic on the in-store stage under teal and magenta light, a drummer behind him."
              width={480}
              height={800}
              loading="lazy"
              sizes="(max-width: 60rem) 40vw, 22vw"
              className={styles.image}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
