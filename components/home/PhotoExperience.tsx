import Image from "next/image";
import Reveal from "../Reveal";
import { GALLERY } from "@/data/gallery";
import styles from "./PhotoExperience.module.css";

/* ============================================================
   SECTION 4 — THE CAVERN PHOTO EXPERIENCE

   An editorial gallery, not a uniform grid: every frame gets its own
   column span and aspect ratio, set by index in the stylesheet.

   Three of the eight carry an irregular edge mask from globals.css
   (.image-edge-a / -b / -c). The other five stay clean — the mix is
   what makes the treatment read as deliberate.

   Performance: this section sits well below the fold, so nothing is
   preloaded and nothing is marked priority. next/image lazy-loads by
   default; loading="lazy" is stated explicitly so it survives any
   future refactor.
   ============================================================ */

export default function PhotoExperience() {
  return (
    <section className={styles.section} aria-labelledby="photo-experience">
      <div className={styles.inner}>
        <header className={styles.head}>
          <Reveal as="h2">
            <span id="photo-experience" className={styles.headline}>
              You really have to see it.
            </span>
          </Reveal>
          <Reveal as="p" delay={60} className={styles.support}>
            Photos don&rsquo;t do it justice. But they&rsquo;re a start.
          </Reveal>
        </header>

        <ul className={styles.grid} role="list">
          {GALLERY.map((item, index) => (
            <li key={item.src} className={styles.cell} data-index={index}>
              <Reveal delay={Math.min(index % 3, 2) * 70}>
                <figure className={styles.figure}>
                  <div
                    className={[
                      styles.frame,
                      item.edge ? `image-edge-${item.edge}` : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 42vw"
                      className={styles.image}
                    />
                  </div>
                  <figcaption className={styles.caption}>
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
