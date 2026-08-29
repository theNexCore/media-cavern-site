import Image from "next/image";
import Reveal from "../Reveal";
import styles from "./AudioVideo.module.css";

/* ============================================================
   SECTION 5 — AUDIO VIDEO EQUIPMENT

   Two frames, deliberately. The category has four usable images and
   two of them carry the OVERLAP flag with LIVE EVENTS; the stereo
   console is already spent on the section 3 tile. Rather than pad,
   this is built as a copy-led split: one wide establishing frame and
   one vertical CRT detail, in a layout that reads complete at two.

   crt-tvs-stacked-band-playing.jpg is committed to AUDIO VIDEO
   EQUIPMENT here, so it must never appear in section 6. Section 6
   uses the stage crowd and stage-corner frames instead, so the
   overlap rule holds by construction.

   Copy constraints: no repair services claimed, no brands or models
   named, no implication of a browsable catalogue. The call to action
   is a phone link precisely because stock is not listed online.
   ============================================================ */

export default function AudioVideo() {
  return (
    <section className={styles.section} aria-labelledby="audio-video">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Reveal as="p" className={styles.eyebrow}>
            Audio Video Equipment at Media Cavern
          </Reveal>

          <Reveal as="h2" delay={60}>
            <span id="audio-video" className={styles.headline}>
              Built to be heard.
            </span>
          </Reveal>

          <Reveal delay={120} className={styles.body}>
            <p>
              Media Cavern isn&rsquo;t only about what you watch and listen to.
              It&rsquo;s about what you watch and listen <em>on</em>.
            </p>
            <p>
              Turntables, receivers, speakers, components, CRTs and players
              &mdash; gear with another life left in it.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <a className={styles.cta} href="tel:+13142703252">
              Ask what&rsquo;s in stock
            </a>
          </Reveal>
        </div>

        <div className={styles.media}>
          <Reveal className={styles.figureWide}>
            <Image
              src="/images/wall-of-entertainment-vinyl-crt.jpg"
              alt="A slatwall of vinyl LPs beside stacked CRT televisions, one of them playing a film."
              width={1100}
              height={619}
              loading="lazy"
              sizes="(max-width: 60rem) 100vw, 44vw"
              className={styles.image}
            />
          </Reveal>

          <Reveal delay={100} className={styles.figureTall}>
            <Image
              src="/images/crt-tvs-stacked-band-playing.jpg"
              alt="Two CRT televisions stacked on the shop floor, the upper one showing a band playing."
              width={512}
              height={640}
              loading="lazy"
              sizes="(max-width: 60rem) 45vw, 20vw"
              className={styles.image}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
