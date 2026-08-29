import Image from "next/image";
import Reveal from "../Reveal";
import { PIANO } from "@/data/home-copy";
import styles from "./ThePiano.module.css";

/* ============================================================
   SECTION 7 — THE PIANO

   The quietest section on the page. One large image, a narrow
   centred column of type, and more air around it than anywhere
   else. No grid, no supporting frames, nothing competing.
   ============================================================ */

export default function ThePiano() {
  return (
    <section className={styles.section} aria-labelledby="the-piano">
      <div className={styles.inner}>
        <Reveal className={styles.figure}>
          <Image
            src="/images/piano-mahogany-grand.jpg"
            alt="A mahogany grand piano with its lid open and a mic stand beside it, DVD shelving all around."
            width={1100}
            height={733}
            loading="lazy"
            sizes="(max-width: 64rem) 100vw, 68rem"
            className={styles.image}
          />
        </Reveal>

        <div className={styles.copy}>
          <Reveal as="p" className={styles.eyebrow}>
            {PIANO.eyebrow}
          </Reveal>

          <Reveal as="h2" delay={60}>
            <span id="the-piano" className={styles.headline}>
              {PIANO.headline}
            </span>
          </Reveal>

          <Reveal delay={120} className={styles.body}>
            {PIANO.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Reveal>

          <Reveal as="p" delay={180} className={styles.kicker}>
            {PIANO.kicker}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
