import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import { STORY_TEASER } from "@/data/home-copy";
import styles from "./StoryTeaser.module.css";

/* ============================================================
   SECTION 8 — CAMERON / STORY TEASER

   A teaser only. The full narrative lives on /the-story.

   The owner's name is CAMERON NOVACK. N-O-V-A-C-K.

   Copy is in /data/home-copy.ts and is deliberately grounded in
   verified facts only — the CD Warehouse predecessor at this
   address and what is visibly in the room. No biography here.
   ============================================================ */

export default function StoryTeaser() {
  return (
    <section className={styles.section} aria-labelledby="story-teaser">
      <div className={styles.inner}>
        <Reveal className={styles.figure}>
          <Image
            src="/images/cameron-novack-with-hand-painted-sign.jpg"
            alt="Cameron Novack standing behind a large hand-painted Media Cavern canvas sign inside the store."
            width={1100}
            height={619}
            loading="lazy"
            sizes="(max-width: 60rem) 100vw, 48vw"
            className={styles.image}
          />
        </Reveal>

        <div className={styles.copy}>
          <Reveal as="p" className={styles.eyebrow}>
            {STORY_TEASER.eyebrow}
          </Reveal>

          <Reveal as="h2" delay={60}>
            <span id="story-teaser" className={styles.headline}>
              {STORY_TEASER.headline.map((line) => (
                <span key={line} className={styles.headlineLine}>
                  {line}
                </span>
              ))}
            </span>
          </Reveal>

          <Reveal delay={120} className={styles.body}>
            {STORY_TEASER.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Reveal>

          <Reveal delay={180}>
            <Link href={STORY_TEASER.cta.href} className={styles.cta}>
              {STORY_TEASER.cta.label}
              <span className={styles.arrow} aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
