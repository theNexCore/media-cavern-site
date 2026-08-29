import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  HERO, BEFORE, QUOTE_ONE, CD_WAREHOUSE, MUSICIAN, THE_VOICE, CONVERGENCE,
  BECAME, QUOTE_TWO, STAGE, PIANO, HUMAN, SPOTLIGHT, COMMUNITY, CLOSING,
} from "@/data/story";
import styles from "./page.module.css";

/* ============================================================
   /the-story — CAMERON NOVACK

   THE OWNER'S NAME IS CAMERON NOVACK. N-O-V-A-C-K.

   Every section is hand-composed rather than machine-generated
   from a list, because the brief calls for an editorial page and
   a generic renderer produces exactly the repeating cards it
   asks us to avoid. Copy lives in /data/story.ts.

   Two things are deliberately absent:

   1. NO LOGO ARTWORK. The brief floated "a subtle winged Media
      Cavern mark at very low opacity" in the closing section. The
      logo rule in CLAUDE.md is absolute and outranks it: no mark
      exists in approved form, and tracing or approximating one is
      forbidden. The closing uses a green light wash instead.

   2. NO DEAD BUTTONS. The Voice audition link and the SoCo
      Spotlight episode link are both null in the data file. Each
      button renders only when a real URL is supplied.
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
            <a className={styles.scrollCue} href="#before">
              <span>{HERO.scrollCue}</span>
              <span className={styles.scrollArrow} aria-hidden="true">
                &darr;
              </span>
            </a>
          </div>

          {/* ==========================================================
              HERO PORTRAIT — swap point.

              This is a frame from the filmed interview: verified as
              Cameron Novack, shelves behind him, strong sense of place.
              It is a stand-in for a purpose-shot environmental portrait.

              To replace: drop the new file in /public/images, add it to
              /data/media-manifest.json, and change the src + alt below.
              Keep the wrapper — it owns the 4:3 crop and the sizing.
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

      {/* ================= 1 — BEFORE MEDIA CAVERN ================= */}
      <section id="before" className={styles.section} aria-labelledby="before-h">
        <div className={styles.splitWide}>
          <div className={styles.copyCol}>
            <Reveal as="p" className={styles.eyebrow}>{BEFORE.eyebrow}</Reveal>
            <Reveal as="h2" delay={60}>
              <span id="before-h" className={styles.h2}>{BEFORE.headline}</span>
            </Reveal>
            <Reveal delay={120} className={styles.prose}>
              {BEFORE.body.map((p) => <p key={p}>{p}</p>)}
              <p className={styles.lead}>{BEFORE.close}</p>
            </Reveal>
            <Reveal delay={160} className={styles.statementRule}>
              <p className={styles.statement}>{BEFORE.emphasis}</p>
            </Reveal>
          </div>

          <Reveal delay={90} className={styles.figureTall}>
            <figure className={styles.figure}>
              <div className={`${styles.frame} image-edge-a`}>
                <Image
                  src="/images/cd-warehouse-sign-illuminated.jpg"
                  alt="The illuminated CD Warehouse storefront sign at night."
                  width={1100}
                  height={619}
                  loading="lazy"
                  sizes="(max-width: 60rem) 100vw, 40vw"
                  className={styles.image}
                />
              </div>
              <figcaption className={styles.caption}>
                The CD Warehouse sign on Tesson Ferry Rd.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ================= PULL QUOTE 1 ================= */}
      <section className={styles.quote} aria-label="On physical media">
        <div className={styles.quoteInner}>
          {QUOTE_ONE.map((line, i) => {
            const [before, after] = line.text.split(line.accent);
            return (
              <Reveal
                as="p"
                key={line.text}
                delay={i * 70}
                className={styles.quoteLine}
              >
                {before}
                <span className={styles.quoteAccent}>{line.accent}</span>
                {after}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ================= 2 — CD WAREHOUSE ================= */}
      <section className={styles.section} aria-labelledby="cdw-h">
        <div className={styles.splitFlip}>
          <Reveal className={styles.figureWide}>
            <figure className={styles.figure}>
              <div className={styles.frame}>
                <Image
                  src="/images/cd-warehouse-storefront-night.jpg"
                  alt="The CD Warehouse storefront lit at night, full facade with illuminated sign and window displays."
                  width={1067}
                  height={800}
                  loading="lazy"
                  sizes="(max-width: 60rem) 100vw, 50vw"
                  className={styles.image}
                />
              </div>
              <figcaption className={styles.caption}>
                Part of the path, not the destination.
              </figcaption>
            </figure>
          </Reveal>

          <div className={styles.copyCol}>
            <Reveal as="p" className={styles.eyebrow}>{CD_WAREHOUSE.eyebrow}</Reveal>
            <Reveal as="h2" delay={60}>
              <span id="cdw-h" className={styles.h2}>{CD_WAREHOUSE.headline}</span>
            </Reveal>
            <Reveal delay={120} className={styles.prose}>
              {CD_WAREHOUSE.body.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= 3 — MUSICIAN ================= */}
      <section className={styles.section} aria-labelledby="musician-h">
        <div className={styles.splitWide}>
          <div className={styles.copyCol}>
            <Reveal as="p" className={styles.eyebrow}>{MUSICIAN.eyebrow}</Reveal>
            <Reveal as="h2" delay={60}>
              <span id="musician-h" className={styles.h2}>{MUSICIAN.headline}</span>
            </Reveal>
            <Reveal delay={120} className={styles.prose}>
              {MUSICIAN.body.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
            <Reveal delay={160}>
              <ul className={styles.negations} role="list">
                {MUSICIAN.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="p" delay={200} className={styles.lead}>
              {MUSICIAN.close}
            </Reveal>
          </div>

          <Reveal delay={90} className={styles.figurePortrait}>
            <figure className={styles.figure}>
              <div className={`${styles.frame} image-edge-c`}>
                <Image
                  src="/images/cameron-novack-singing-stage.jpg"
                  alt="Cameron Novack singing into a microphone on the in-store stage under teal and magenta light, a drummer behind him."
                  width={480}
                  height={800}
                  loading="lazy"
                  sizes="(max-width: 60rem) 80vw, 34vw"
                  className={styles.image}
                />
              </div>
              <figcaption className={styles.caption}>
                Performing on the stage inside his own store.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ================= 4 — THE VOICE ================= */}
      <section className={styles.voice} aria-labelledby="voice-h">
        <div className={styles.voiceGlow} aria-hidden="true" />
        <div className={styles.voiceInner}>
          <Reveal as="p" className={styles.eyebrow}>{THE_VOICE.eyebrow}</Reveal>
          <Reveal as="h2" delay={60}>
            <span id="voice-h" className={styles.voiceHeadline}>
              {THE_VOICE.headline}
            </span>
          </Reveal>
          <Reveal delay={120} className={styles.prose}>
            {THE_VOICE.body.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Reveal as="p" delay={180} className={styles.voiceBeat}>
            {THE_VOICE.beat}
          </Reveal>
          <Reveal delay={240} className={styles.prose}>
            {THE_VOICE.after.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Reveal as="p" delay={300} className={styles.voiceWord}>
            {THE_VOICE.closingWord}
          </Reveal>

          {/* Renders only when a real, rights-cleared link exists.
              Null today, so nothing is shown — never a dead button. */}
          {THE_VOICE.auditionUrl ? (
            <Reveal delay={340}>
              <a
                className={styles.ctaSecondary}
                href={THE_VOICE.auditionUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch the audition
              </a>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* ================= 5 — THE CONVERGENCE ================= */}
      <section className={styles.section} aria-labelledby="converge-h">
        <div className={styles.centerCol}>
          <Reveal as="p" className={styles.eyebrow}>{CONVERGENCE.eyebrow}</Reveal>
          <Reveal as="h2" delay={60}>
            <span id="converge-h" className={styles.h2Big}>{CONVERGENCE.headline}</span>
          </Reveal>
          <Reveal delay={120} className={styles.prose}>
            {CONVERGENCE.body.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Reveal delay={160}>
            <ul className={styles.strands} role="list">
              {CONVERGENCE.strands.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal as="p" delay={220} className={styles.opened}>
            {CONVERGENCE.opened}
          </Reveal>
          <Reveal as="p" delay={260} className={styles.lead}>
            {CONVERGENCE.close}
          </Reveal>
        </div>
      </section>

      <Reveal className={styles.fullBleed}>
        <Image
          src="/images/store-interior-customers-wide.jpg"
          alt="The Media Cavern shop floor mid-afternoon, customers browsing bins beneath a hand-lettered chalk sign."
          width={1067}
          height={800}
          loading="lazy"
          sizes="100vw"
          className={styles.fullBleedImage}
        />
      </Reveal>

      {/* ================= 6 — WHAT IT BECAME ================= */}
      <section className={styles.section} aria-labelledby="became-h">
        <div className={styles.becameHead}>
          <Reveal as="p" className={styles.eyebrow}>{BECAME.eyebrow}</Reveal>
          <Reveal as="h2" delay={60}>
            <span id="became-h" className={styles.h2Big}>{BECAME.headline}</span>
          </Reveal>
          <Reveal as="p" delay={120} className={styles.lead}>
            {BECAME.intro}
          </Reveal>
        </div>

        <Reveal delay={80}>
          <ul className={styles.categories} role="list">
            {BECAME.categories.map((c) => (
              <li key={c} className={styles.category}>{c}</li>
            ))}
          </ul>
        </Reveal>

        <div className={styles.collage}>
          <Reveal className={styles.collageA}>
            <div className={styles.frame}>
              <Image
                src="/images/wall-of-entertainment-vinyl-crt.jpg"
                alt="A slatwall of vinyl LPs beside stacked CRT televisions, one playing a film."
                width={1100} height={619} loading="lazy"
                sizes="(max-width: 48rem) 100vw, 44vw" className={styles.image}
              />
            </div>
          </Reveal>
          <Reveal delay={70} className={styles.collageB}>
            <div className={`${styles.frame} image-edge-b`}>
              <Image
                src="/images/movie-wall-dvd-shelving.jpg"
                alt="A floor-to-ceiling wall of DVD and VHS shelving packed with titles."
                width={800} height={800} loading="lazy"
                sizes="(max-width: 48rem) 50vw, 26vw" className={styles.image}
              />
            </div>
          </Reveal>
          <Reveal delay={140} className={styles.collageC}>
            <div className={styles.frame}>
              <Image
                src="/images/clothing-rack-band-tees-vinyl.jpg"
                alt="A rack of vintage band tees and denim beside vinyl crates and stereo components."
                width={800} height={800} loading="lazy"
                sizes="(max-width: 48rem) 50vw, 26vw" className={styles.image}
              />
            </div>
          </Reveal>
          <Reveal delay={210} className={styles.collageD}>
            <div className={styles.frame}>
              <Image
                src="/images/oddities-shelf-vhs-8ball-tee.jpg"
                alt="A shelf of oddities: VHS tapes, a Magic 8-Ball, a band tee and a poster."
                width={800} height={800} loading="lazy"
                sizes="(max-width: 48rem) 50vw, 24vw" className={styles.image}
              />
            </div>
          </Reveal>
        </div>

        <div className={styles.centerCol}>
          <Reveal delay={60} className={styles.prose}>
            {BECAME.body.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        </div>
      </section>

      {/* ================= PULL QUOTE 2 ================= */}
      <section className={styles.quoteBig} aria-label="Built around discovery">
        <div className={styles.quoteBigInner}>
          <Reveal as="h2" className={styles.quoteBigHeadline}>
            {QUOTE_TWO.headline}
          </Reveal>
          <Reveal delay={90} className={styles.quoteBigSupport}>
            {QUOTE_TWO.support.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ================= 7 — THE STAGE ================= */}
      <section className={styles.section} aria-labelledby="stage-h">
        <div className={styles.splitFlip}>
          <Reveal className={styles.figureWide}>
            <div className={styles.frameLit}>
              <Image
                src="/images/stage-live-crowd-magenta.jpg"
                alt="A packed in-store crowd watching a band perform under magenta stage light."
                width={1100} height={733} loading="lazy"
                sizes="(max-width: 60rem) 100vw, 52vw" className={styles.image}
              />
            </div>
          </Reveal>

          <div className={styles.copyCol}>
            <Reveal as="p" className={styles.eyebrow}>{STAGE.eyebrow}</Reveal>
            <Reveal as="h2" delay={60}>
              <span id="stage-h" className={styles.h2}>{STAGE.headline}</span>
            </Reveal>
            <Reveal delay={120} className={styles.prose}>
              {STAGE.body.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
            <Reveal delay={160}>
              <ul className={styles.happenings} role="list">
                {STAGE.happenings.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200} className={styles.prose}>
              {STAGE.after.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
            <Reveal delay={240}>
              <a className={styles.ctaSecondary} href={STAGE.cta.href}>
                {STAGE.cta.label}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= 8 — THE PIANO ================= */}
      <section className={styles.piano} aria-labelledby="piano-h">
        <div className={styles.pianoInner}>
          <Reveal className={styles.pianoFigure}>
            <div className={styles.frame}>
              <Image
                src="/images/piano-mahogany-grand.jpg"
                alt="A mahogany grand piano with its lid open and a mic stand beside it, DVD shelving all around."
                width={1100} height={733} loading="lazy"
                sizes="(max-width: 64rem) 100vw, 68rem" className={styles.image}
              />
            </div>
          </Reveal>
          <div className={styles.pianoCopy}>
            <Reveal as="p" className={styles.eyebrow}>{PIANO.eyebrow}</Reveal>
            <Reveal as="h2" delay={60}>
              <span id="piano-h" className={styles.h2Big}>{PIANO.headline}</span>
            </Reveal>
            <Reveal delay={120} className={styles.prose}>
              {PIANO.body.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
            <Reveal as="p" delay={180} className={styles.kicker}>
              {PIANO.kicker}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= 9 — THE HUMAN SIDE ================= */}
      <section className={styles.section} aria-labelledby="human-h">
        <div className={styles.splitWide}>
          <div className={styles.copyCol}>
            <Reveal as="p" className={styles.eyebrow}>{HUMAN.eyebrow}</Reveal>
            <Reveal as="h2" delay={60}>
              <span id="human-h" className={styles.h2}>{HUMAN.headline}</span>
            </Reveal>
            <Reveal delay={120} className={styles.prose}>
              {HUMAN.body.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
          </div>
          <Reveal delay={90} className={styles.figureTall}>
            <figure className={styles.figure}>
              <div className={`${styles.frame} image-edge-b`}>
                <Image
                  src="/images/punk-chalk-mural-wall.jpg"
                  alt="A green chalk PUNK mural with a spiky-haired cartoon character on the black wall above a skate deck."
                  width={1100} height={734} loading="lazy"
                  sizes="(max-width: 60rem) 100vw, 40vw" className={styles.image}
                />
              </div>
              <figcaption className={styles.caption}>
                His sense of humor shows up on the walls.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ================= 10 — SOCO SPOTLIGHT ================= */}
      <section className={styles.section} aria-labelledby="spotlight-h">
        <div className={styles.splitFlip}>
          <Reveal className={styles.figureWide}>
            <figure className={styles.figure}>
              <div className={styles.frame}>
                <Image
                  src="/images/cameron-novack-interview-wide.jpg"
                  alt="Cameron Novack seated in front of the store's DVD wall during a filmed interview, a clip-on mic at his collar."
                  width={1100} height={619} loading="lazy"
                  sizes="(max-width: 60rem) 100vw, 52vw" className={styles.image}
                />
              </div>
              <figcaption className={styles.caption}>{SPOTLIGHT.credit}</figcaption>
            </figure>
          </Reveal>

          <div className={styles.copyCol}>
            <Reveal as="p" className={styles.eyebrow}>{SPOTLIGHT.eyebrow}</Reveal>
            <Reveal as="h2" delay={60}>
              <span id="spotlight-h" className={styles.h2}>{SPOTLIGHT.headline}</span>
            </Reveal>
            <Reveal delay={120} className={styles.prose}>
              {SPOTLIGHT.body.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
            {/* Renders only when the episode is actually published. */}
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

      {/* ================= 11 — COMMUNITY ================= */}
      <section className={styles.community} aria-labelledby="community-h">
        <div className={styles.communityInner}>
          <div className={styles.copyCol}>
            <Reveal as="p" className={styles.eyebrow}>{COMMUNITY.eyebrow}</Reveal>
            <Reveal as="h2" delay={60}>
              <span id="community-h" className={styles.h2}>
                {COMMUNITY.headline.map((line, i) => (
                  <span key={line} className={styles.h2Line} data-line={i}>
                    {line}
                  </span>
                ))}
              </span>
            </Reveal>
            <Reveal delay={120} className={styles.prose}>
              {COMMUNITY.body.map((p) => <p key={p}>{p}</p>)}
            </Reveal>

            {/* CHAMBER LOGO SLOT — empty until the South County Chamber
                supplies artwork. Replace the label with their mark:
                  <Image src="/brand/south-county-chamber.svg" … />
                Do NOT scrape or recreate it. */}
            <Reveal delay={180} className={styles.chamberSlot}>
              <span className={styles.chamberLabel}>
                South County Chamber
                <span className={styles.chamberNote}>Member</span>
              </span>
            </Reveal>
          </div>

          <Reveal delay={90} className={styles.figureWide}>
            <figure className={styles.figure}>
              <div className={`${styles.frame} image-edge-a`}>
                <Image
                  src="/images/plaza-strip-mall-exterior-night.jpg"
                  alt="The strip mall on Tesson Ferry Rd at night, storefront signage lit along the row."
                  width={1100} height={619} loading="lazy"
                  sizes="(max-width: 60rem) 100vw, 46vw" className={styles.image}
                />
              </div>
              <figcaption className={styles.caption}>
                South County, after dark.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ================= 12 — CLOSING ================= */}
      <section className={styles.closing} aria-labelledby="closing-h">
        {/* Green light wash. Deliberately NOT a logo mark — see the
            note at the top of this file. */}
        <div className={styles.closingGlow} aria-hidden="true" />
        <div className={styles.closingInner}>
          <Reveal className={styles.prose}>
            {CLOSING.body.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Reveal as="h2" delay={80}>
            <span id="closing-h" className={styles.closingStatement}>
              {CLOSING.statement}
            </span>
          </Reveal>
          <Reveal as="p" delay={140} className={styles.signoff}>
            {CLOSING.signoff}
          </Reveal>
          <Reveal delay={180} className={styles.tagline}>
            {CLOSING.tagline.map((line, i) => (
              <span key={line} data-line={i}>{line}</span>
            ))}
          </Reveal>
          <Reveal delay={240} className={styles.closingActions}>
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
