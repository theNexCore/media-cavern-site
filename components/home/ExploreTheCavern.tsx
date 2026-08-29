import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import { CATEGORIES } from "@/data/categories";
import styles from "./ExploreTheCavern.module.css";

/* ============================================================
   SECTION 3 — EXPLORE THE CAVERN

   Seven categories as an editorial photo grid, not seven identical
   cards. Each cell gets its own column span and aspect ratio, keyed
   off the category id in ExploreTheCavern.module.css. Copy and image
   assignments live in /data/categories.ts.

   Each tile links to The Cavern with a filter param from the data
   file. Those filters filter PHOTOGRAPHY, not inventory — no prices,
   stock counts, availability or item-level listings, here or there.
   ============================================================ */

export default function ExploreTheCavern() {
  return (
    <section className={styles.section} aria-labelledby="explore-the-cavern">
      <div className={styles.inner}>
        <header className={styles.head}>
          <Reveal as="h2" delay={60}>
            <span id="explore-the-cavern" className={styles.headline}>
              Explore the Cavern.
            </span>
          </Reveal>
        </header>

        <ul className={styles.grid} role="list">
          {CATEGORIES.map((category, index) => (
            <li
              key={category.id}
              className={styles.cell}
              data-cat={category.id}
            >
              {/* Stagger is capped so later cells never feel laggy. */}
              <Reveal delay={Math.min(index, 3) * 70} className={styles.card}>
                <Link href={category.href} className={styles.article}>
                  <div className={styles.frame}>
                    <Image
                      src={category.image.src}
                      alt={category.image.alt}
                      width={category.image.width}
                      height={category.image.height}
                      sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 40vw"
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.text}>
                    <h3 className={styles.label}>{category.label}</h3>
                    <p className={styles.blurb}>{category.blurb}</p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
