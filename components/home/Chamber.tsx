import Reveal from "../Reveal";
import { CHAMBER } from "@/data/home-copy";
import { SITE } from "@/data/site";
import styles from "./Chamber.module.css";

/* ============================================================
   SECTION 10 — SOUTH COUNTY CHAMBER

   The organisation is the "South County Chamber". Not "of
   Commerce". Not "St. Louis County". SITE.chamber holds the exact
   string so it cannot drift.

   The logo slot below is empty by design: their mark has not been
   supplied. Do not scrape it, recreate it, or approximate it.
   ============================================================ */

export default function Chamber() {
  return (
    <section className={styles.section} aria-labelledby="chamber">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Reveal as="h2">
            <span id="chamber" className={styles.headline}>
              {CHAMBER.headline}
            </span>
          </Reveal>

          <Reveal as="p" delay={60} className={styles.body}>
            {CHAMBER.body}
          </Reveal>
        </div>

        <Reveal delay={120} className={styles.markWrap}>
          {/* ==========================================================
              CHAMBER LOGO SLOT — empty until the South County Chamber
              supplies their artwork.

              Replace the <span className={styles.markLabel}> below
              with their mark and nothing else:

                <Image
                  src="/brand/south-county-chamber.svg"
                  alt="South County Chamber"
                  width={220}
                  height={100}
                />

              Keep the wrapping element: it holds the reserved space
              and the alignment. Do NOT scrape their logo from the web
              or recreate it by hand.
              ========================================================== */}
          <span className={styles.markLabel}>
            {SITE.chamber}
            <span className={styles.markNote}>Member</span>
          </span>
        </Reveal>
      </div>
    </section>
  );
}
