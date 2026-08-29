import Image from "next/image";
import Reveal from "../Reveal";
import styles from "./AudioVideo.module.css";

/* ============================================================
   SECTION 5 — AUDIO VIDEO EQUIPMENT

   Two frames, deliberately: a copy-led split with one wide
   establishing shot and one vertical detail, sized to read complete
   at two rather than padded to three.

   Both frames here are unambiguous gear: a shelf of players and
   VCRs, and a component stack. The vinyl slatwall and the CRT
   showing a band were moved out — they read as records and as a
   screen playing something, not as equipment.

   Neither CRT frame is used on this page any more, so the LIVE
   EVENTS overlap no longer applies to this section.

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
              src="/images/av-equipment-shelves-players.jpg"
              alt="Wooden shelving racked with DVD players and VCRs, a Sony Hi-Fi VCR mid-shelf and Pioneer bookshelf speakers on top."
              width={2400}
              height={1351}
              loading="lazy"
              sizes="(max-width: 60rem) 100vw, 44vw"
              className={styles.image}
            />
          </Reveal>

          <Reveal delay={100} className={styles.figureTall}>
            <Image
              src="/images/av-equipment-component-stack.jpg"
              alt="A PS-120 amplifier above a stacked component system with tuner, equaliser and twin cassette deck."
              width={1351}
              height={2400}
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
