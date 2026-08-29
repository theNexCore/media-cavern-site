import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CavernGallery, { resolveFilter } from "@/components/cavern/CavernGallery";
import {
  CAVERN_INTRO, CAVERN_SECTIONS, CAVERN_BUYING, CAVERN_CLOSING, CAVERN_GALLERY_INTRO,
} from "@/data/cavern-copy";
import styles from "./page.module.css";

/* ============================================================
   /the-cavern

   The page is about the ROOM, not the owner and not the stock.
   Seven substantive sections — one per category — then the buying
   section, then the gallery as a supporting element at the bottom.

   THE PAGE IS ABOUT DISCOVERY AND MEMORY, NOT INVENTORY. It is
   never a catalogue: no prices, stock counts, availability or
   item-level listings, including in the buying section.

   The gallery keeps its server-side <Link> filtering. Do not
   convert it to a client component and do not reintroduce
   useSearchParams — an earlier client version rendered zero
   images on the server.

   Copy lives in /data/cavern-copy.ts.
   ============================================================ */

export const metadata: Metadata = {
  title: "The Cavern",
  description:
    "Inside Media Cavern in South County St. Louis — music, movies, audio video equipment, collectibles, oddities, clothing and live events. Come dig.",
  openGraph: {
    title: "The Cavern · Media Cavern",
    description:
      "A look inside Media Cavern - music, movies, audio video equipment, collectibles, oddities, clothing and the stage.",
    images: ["/images/wall-of-entertainment-vinyl-crt.jpg"],
  },
};

export default async function TheCavernPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const active = resolveFilter(params.filter);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.headline}>{CAVERN_INTRO.headline}</h1>
          <div className={styles.support}>
            {CAVERN_INTRO.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className={styles.kicker}>{CAVERN_INTRO.kicker}</p>
          </div>
        </div>
      </header>

      <div className={styles.sections}>
        {CAVERN_SECTIONS.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={styles.section}
            data-flip={index % 2 === 1 || undefined}
            aria-labelledby={`${section.id}-heading`}
          >
            <div className={styles.sectionCopy}>
              <Reveal as="p" className={styles.label}>
                {section.label}
              </Reveal>
              <Reveal as="h2" delay={60}>
                <span id={`${section.id}-heading`} className={styles.sectionHeading}>
                  {section.heading}
                </span>
              </Reveal>
              <Reveal delay={120} className={styles.prose}>
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Reveal>
              {section.list ? (
                <Reveal delay={170}>
                  <ul className={styles.marks} role="list">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              ) : null}
            </div>

            <Reveal delay={80} className={styles.sectionFigure}>
              <div className={styles.frame}>
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  width={section.image.width}
                  height={section.image.height}
                  loading="lazy"
                  sizes="(max-width: 60rem) 100vw, 46vw"
                  className={styles.image}
                  style={
                    section.image.objectPosition
                      ? { objectPosition: section.image.objectPosition }
                      : undefined
                  }
                />
              </div>
            </Reveal>
          </section>
        ))}
      </div>

      {/* ---------- They buy ---------- */}
      <section className={styles.buying} aria-labelledby="buying-heading">
        <div className={styles.buyingInner}>
          <Reveal as="p" className={styles.label}>
            {CAVERN_BUYING.label}
          </Reveal>
          <Reveal as="h2" delay={60}>
            <span id="buying-heading" className={styles.buyingHeading}>
              {CAVERN_BUYING.heading}
            </span>
          </Reveal>
          <Reveal delay={120} className={styles.prose}>
            {CAVERN_BUYING.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={180}>
            <a className={styles.cta} href={CAVERN_BUYING.cta.href}>
              {CAVERN_BUYING.cta.label}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section className={styles.closing} aria-labelledby="cavern-closing">
        <div className={styles.closingGlow} aria-hidden="true" />
        <div className={styles.closingInner}>
          <Reveal as="h2">
            <span id="cavern-closing" className={styles.closingHeadline}>
              {CAVERN_CLOSING.headline}
            </span>
          </Reveal>
          <Reveal as="p" delay={80} className={styles.closingKicker}>
            {CAVERN_CLOSING.kicker}
          </Reveal>
        </div>
      </section>

      {/* ---------- Gallery: supporting element, controls live with it ---------- */}
      <section className={styles.galleryWrap} aria-labelledby="gallery-heading">
        <div className={styles.galleryInner}>
          <div className={styles.galleryHead}>
            <p className={styles.label}>{CAVERN_GALLERY_INTRO.label}</p>
            <h2 id="gallery-heading" className={styles.galleryHeading}>
              {CAVERN_GALLERY_INTRO.heading}
            </h2>
            <p className={styles.galleryBody}>{CAVERN_GALLERY_INTRO.body}</p>
          </div>
          <CavernGallery active={active} />
        </div>
      </section>
    </div>
  );
}
