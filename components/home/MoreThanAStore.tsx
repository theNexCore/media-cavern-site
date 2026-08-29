import Image from "next/image";
import Reveal from "../Reveal";
import styles from "./MoreThanAStore.module.css";

/* ============================================================
   SECTION 2 — MORE THAN A STORE

   Editorial pairing: copy against two bucket-A photographs.
   Both filenames come from /data/media-manifest.json and are
   copied into /public/images under their `proposedName`.

   Deliberately NOT the old site's "Eight aisles" line — there are
   seven categories now.

   Mobile reorders rather than collapsing: the wide interior shot
   leads, then the copy, then the tall frame. See the media query.
   ============================================================ */

export default function MoreThanAStore() {
  return (
    <section className={styles.section} aria-labelledby="more-than-a-store">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Reveal as="p" className={styles.eyebrow}>
            What&rsquo;s Inside
          </Reveal>

          <Reveal as="h2" delay={60}>
            <span id="more-than-a-store" className={styles.headline}>
              More than a store.
            </span>
          </Reveal>

          <Reveal delay={120} className={styles.body}>
            <p>
              Media Cavern is the kind of place you come into looking for one
              thing and lose an hour discovering everything else.
            </p>
            <p>
              Records. Movies. Audio and video gear. Collectibles. Oddities.
              Clothing. A stage. A grand piano. And whatever showed up this
              week.
            </p>
            <p className={styles.kicker}>Come dig.</p>
          </Reveal>
        </div>

        <div className={styles.media}>
          <Reveal className={styles.figureWide}>
            <Image
              src="/images/store-interior-customers-wide.jpg"
              alt="The shop floor mid-afternoon, customers browsing bins beneath a hand-lettered Media Cavern chalk sign."
              width={1067}
              height={800}
              sizes="(max-width: 60rem) 100vw, 46vw"
              className={styles.image}
            />
          </Reveal>

          <Reveal delay={100} className={styles.figureTall}>
            <Image
              src="/images/store-interior-wide-portrait.jpg"
              alt="A tall view taking in the CD bins, a vintage typewriter, the grand piano and the slatwall in one frame."
              width={619}
              height={1100}
              sizes="(max-width: 60rem) 60vw, 22vw"
              className={styles.image}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
