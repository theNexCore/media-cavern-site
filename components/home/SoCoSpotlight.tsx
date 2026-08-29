import Image from "next/image";
import Reveal from "../Reveal";
import { SPOTLIGHT } from "@/data/home-copy";
import styles from "./SoCoSpotlight.module.css";

/* ============================================================
   SECTION 9 — SOCO SPOTLIGHT

   Cameron Novack and the store are the subject. Reagan Dortch is
   the interviewer and is credited as such — she is never named in
   a headline and is not pictured.

   NO EPISODE URL EXISTS YET. The slot below is intentionally
   empty. Do not invent a link, do not embed placeholder video,
   do not point it at a search result.
   ============================================================ */

export default function SoCoSpotlight() {
  return (
    <section className={styles.section} aria-labelledby="soco-spotlight">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Reveal as="p" className={styles.eyebrow}>
            {SPOTLIGHT.eyebrow}
          </Reveal>

          <Reveal as="h2" delay={60}>
            <span id="soco-spotlight" className={styles.headline}>
              {SPOTLIGHT.headline}
            </span>
          </Reveal>

          <Reveal as="p" delay={120} className={styles.body}>
            {SPOTLIGHT.body}
          </Reveal>

          <Reveal as="p" delay={180} className={styles.credit}>
            {SPOTLIGHT.credit}
          </Reveal>

          {/* ==========================================================
              EPISODE SLOT — intentionally empty.

              When SoCo Spotlight publishes the episode, drop ONE of
              the following in here and nothing else:

                a) Video embed
                   <div className={styles.embed}>
                     <iframe
                       src="<episode embed url>"
                       title="Cameron Novack on SoCo Spotlight"
                       allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                       allowFullScreen
                     />
                   </div>

                b) Article link
                   <a
                     className={styles.cta}
                     href="<episode url>"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     Watch the interview
                   </a>

              Until then this section stands on the photograph and the
              copy. Do NOT fabricate a URL to fill the gap.
              ========================================================== */}
        </div>

        <Reveal delay={90} className={styles.figure}>
          <Image
            src="/images/cameron-novack-interview-wide.jpg"
            alt="Cameron Novack seated in front of the store's DVD wall during a filmed interview, a clip-on mic at his collar."
            width={1100}
            height={619}
            loading="lazy"
            sizes="(max-width: 60rem) 100vw, 52vw"
            className={styles.image}
          />
        </Reveal>
      </div>
    </section>
  );
}
