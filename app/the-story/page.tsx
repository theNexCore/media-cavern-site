import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { HERO, CHAPTERS, SPOTLIGHT, CLOSING } from "@/data/story";
import styles from "./page.module.css";

/* ============================================================
   /the-story — CAMERON NOVACK

   THE OWNER'S NAME IS CAMERON NOVACK. N-O-V-A-C-K.

   Structured as numbered chapters with hard breaks between them,
   because the material outgrew a single scroll. Chapters alternate
   sides and vary their internal shape so the page never settles
   into repeating cards.

   All copy — and every transcript citation — lives in
   /data/story.ts. Source is the recorded interview at
   /source-docs/cameron-novack-interview-transcript.md.

   Two absences are deliberate:
   1. NO LOGO ARTWORK. The closing uses a green light wash, not a
      mark. The logo rule outranks the brief's suggestion of a
      faint wordmark in the background.
   2. NO DEAD BUTTONS. auditionUrl and episodeUrl are both null.
      Each button renders only when a real URL exists.
   ============================================================ */

export const metadata: Metadata = {
  title: {
    absolute: "The Story Behind Media Cavern | Cameron Novack | St. Louis",
  },
  description:
    "Meet Cameron Novack, the musician, collector and founder behind Media Cavern in South County St. Louis. Discover the story from CD Warehouse and The Voice to the creation of Media Cavern.",
  openGraph: {
    type: "article",
    title: "The Story Behind Media Cavern | Cameron Novack",
    description:
      "The musician and collector behind Media Cavern — from CD Warehouse and an audition for The Voice to a record store with a stage and a grand piano.",
    images: ["/images/cameron-novack-interview-gesturing.jpg"],
  },
};

export default function TheStoryPage() {
  return (
    <article className={styles.page}>
      {/* ================= HERO ================= */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{HERO.eyebrow}</p>
            <h1 className={styles.heroName}>{HERO.name}</h1>
            <p className={styles.heroSupport}>
              {HERO.support.map((line) => (
                <span key={line} className={styles.heroSupportLine}>
                  {line}
                </span>
              ))}
            </p>
            <div className={styles.heroIntro}>
              {HERO.intro.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <a className={styles.scrollCue} href="#chapter-who">
              <span>{HERO.scrollCue}</span>
              <span className={styles.scrollArrow} aria-hidden="true">
                &darr;
              </span>
            </a>
          </div>

          {/* ==========================================================
              HERO PORTRAIT — swap point. A verified frame of Cameron
              Novack from the filmed interview. Drop a purpose-shot
              portrait in /public/images, add it to the manifest, and
              change src + alt. The wrapper owns the crop.
              ========================================================== */}
          <div className={styles.heroFigure}>
            <Image
              src="/images/cameron-novack-interview-gesturing.jpg"
              alt="Cameron Novack mid-conversation inside Media Cavern, the store's wall of VHS and DVD shelving filling the frame behind him."
              width={1100}
              height={619}
              priority
              sizes="(max-width: 60rem) 100vw, 52vw"
              className={styles.image}
            />
          </div>
        </div>
      </header>

      {/* ================= CHAPTERS ================= */}
      <div className={styles.chapters}>
        {CHAPTERS.map((chapter, index) => (
          <section
            key={chapter.id}
            id={`chapter-${chapter.id}`}
            className={styles.chapter}
            data-flip={index % 2 === 1 || undefined}
            data-noimage={!chapter.image || undefined}
            aria-labelledby={`${chapter.id}-heading`}
          >
            <div className={styles.chapterHead}>
              <span className={styles.number} aria-hidden="true">
                {chapter.number}
              </span>
              <span className={styles.rule} aria-hidden="true" />
              <p className={styles.kicker}>{chapter.kicker}</p>
            </div>

            <div className={styles.chapterBody}>
              <div className={styles.copyCol}>
                <Reveal as="h2">
                  <span
                    id={`${chapter.id}-heading`}
                    className={styles.chapterHeading}
                  >
                    {chapter.heading}
                  </span>
                </Reveal>

                <Reveal delay={80} className={styles.prose}>
                  {chapter.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </Reveal>

                {chapter.quote ? (
                  <Reveal delay={140}>
                    <blockquote className={styles.quote}>
                      <p className={styles.quoteText}>{chapter.quote.text}</p>
                      {chapter.quote.cite ? (
                        <cite className={styles.quoteCite}>
                          {chapter.quote.cite}
                        </cite>
                      ) : null}
                    </blockquote>
                  </Reveal>
                ) : null}
              </div>

              {chapter.image ? (
                <Reveal delay={60} className={styles.figureCol}>
                  <figure className={styles.figure}>
                    <div
                      className={[
                        styles.frame,
                        chapter.image.edge ? `image-edge-${chapter.image.edge}` : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <Image
                        src={chapter.image.src}
                        alt={chapter.image.alt}
                        width={chapter.image.width}
                        height={chapter.image.height}
                        loading="lazy"
                        sizes="(max-width: 60rem) 100vw, 42vw"
                        className={styles.image}
                      />
                    </div>
                    {chapter.image.caption ? (
                      <figcaption className={styles.caption}>
                        {chapter.image.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                </Reveal>
              ) : null}
            </div>
          </section>
        ))}
      </div>

      {/* ================= SOCO SPOTLIGHT ================= */}
      <section className={styles.spotlight} aria-labelledby="spotlight-h">
        <div className={styles.spotlightInner}>
          <Reveal className={styles.figureCol}>
            <figure className={styles.figure}>
              <div className={styles.frame}>
                <Image
                  src={SPOTLIGHT.image.src}
                  alt={SPOTLIGHT.image.alt}
                  width={SPOTLIGHT.image.width}
                  height={SPOTLIGHT.image.height}
                  loading="lazy"
                  sizes="(max-width: 60rem) 100vw, 50vw"
                  className={styles.image}
                />
              </div>
              <figcaption className={styles.caption}>
                {SPOTLIGHT.credit}
              </figcaption>
            </figure>
          </Reveal>

          <div className={styles.copyCol}>
            <p className={styles.kicker}>{SPOTLIGHT.eyebrow}</p>
            <Reveal as="h2" delay={60}>
              <span id="spotlight-h" className={styles.chapterHeading}>
                {SPOTLIGHT.headline}
              </span>
            </Reveal>
            <Reveal delay={120} className={styles.prose}>
              {SPOTLIGHT.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
            {/* Renders only once the episode actually exists. */}
            {SPOTLIGHT.episodeUrl ? (
              <Reveal delay={180}>
                <a
                  className={styles.ctaSecondary}
                  href={SPOTLIGHT.episodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SPOTLIGHT.episodeLabel}
                </a>
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>

      {/* ================= CLOSE ================= */}
      <section className={styles.closing} aria-labelledby="closing-h">
        <div className={styles.closingGlow} aria-hidden="true" />
        <div className={styles.closingInner}>
          <Reveal as="p" className={styles.kicker}>
            {CLOSING.kicker}
          </Reveal>

          {/* The interview's final exchange, verbatim [84:46]. */}
          <Reveal delay={60} className={styles.exchange}>
            <p className={styles.question}>{CLOSING.question}</p>
            <p className={styles.answer}>{CLOSING.answer}</p>
          </Reveal>

          <Reveal delay={120} className={styles.prose}>
            {CLOSING.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal as="h2" delay={180}>
            <span id="closing-h" className={styles.closingStatement}>
              {CLOSING.statement}
            </span>
          </Reveal>

          <Reveal as="p" delay={220} className={styles.signoff}>
            {CLOSING.signoff}
          </Reveal>

          <Reveal delay={260} className={styles.tagline}>
            {CLOSING.tagline.map((line, i) => (
              <span key={line} data-line={i}>
                {line}
              </span>
            ))}
          </Reveal>

          <Reveal delay={320} className={styles.closingActions}>
            {CLOSING.ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={cta.primary ? styles.ctaPrimary : styles.ctaSecondary}
              >
                {cta.label}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </article>
  );
}
