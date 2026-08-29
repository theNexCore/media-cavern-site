import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";
import styles from "./page.module.css";

/* ============================================================
   /the-stage

   Four event types only — bands, karaoke, record releases and
   meet-ups. These are what the source site confirms. Do NOT add
   open mics, trivia, DJ nights or anything else without a source.

   No event calendar. No dates. Nothing dynamic. Booking is an
   email, exactly as it is on the homepage.

   The piano lives here too: it belongs with the music room.
   ============================================================ */

export const metadata: Metadata = {
  title: "The Stage",
  description:
    "There's a stage in the store. Bands, karaoke, record releases and meet-ups at Media Cavern in South County St. Louis.",
  openGraph: {
    title: "The Stage · Media Cavern",
    description: "Bands, karaoke, record releases and meet-ups at Media Cavern in South County St. Louis.",
    images: ["/images/stage-live-crowd-magenta.jpg"],
  },
};

const HAPPENINGS = [
  { title: "Bands", body: "Live sets in the middle of the shop floor." },
  { title: "Karaoke", body: "The mic goes to whoever wants it." },
  { title: "Record releases", body: "New records, played loud, on the day." },
  { title: "Meet-ups", body: "People who care about the same things, in one room." },
] as const;

export default function TheStagePage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Live at the Cavern</p>
          <h1 className={styles.headline}>There&rsquo;s a stage in the store.</h1>
          <p className={styles.support}>
            And sometimes a trip to the record store turns into a show.
          </p>
        </div>
      </header>

      <section className={styles.leadFigureWrap} aria-label="The stage during a show">
        <Reveal className={styles.leadFigure}>
          <Image
            src="/images/stage-live-crowd-magenta.jpg"
            alt="A packed in-store crowd watching a band perform under magenta stage light."
            width={1100}
            height={733}
            loading="lazy"
            sizes="100vw"
            className={styles.image}
          />
        </Reveal>
      </section>

      <section className={styles.happenings} aria-labelledby="happenings">
        <Reveal as="h2">
          <span id="happenings" className={styles.sectionHeading}>
            What happens here.
          </span>
        </Reveal>
        <ul className={styles.list} role="list">
          {HAPPENINGS.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={Math.min(i, 3) * 60} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.split} aria-labelledby="the-room">
        <Reveal className={styles.splitFigure}>
          <Image
            src="/images/stage-corner-wide.jpg"
            alt="The stage corner between shows: drum kit, PA stacks and mixer against the black wall."
            width={1100}
            height={619}
            loading="lazy"
            sizes="(max-width: 60rem) 100vw, 50vw"
            className={styles.image}
          />
        </Reveal>
        <div className={styles.splitCopy}>
          <Reveal as="h2" delay={60}>
            <span id="the-room" className={styles.sectionHeading}>
              The room is the venue.
            </span>
          </Reveal>
          <Reveal as="p" delay={120} className={styles.body}>
            The stage sits along one wall of the shop, between the shelves and
            the counter. There is no separate room and no separate door — the
            store simply becomes the venue for the night.
          </Reveal>
        </div>
      </section>

      <section className={styles.split} data-flip aria-labelledby="the-piano">
        <Reveal className={styles.splitFigure}>
          <Image
            src="/images/piano-mahogany-grand.jpg"
            alt="A mahogany grand piano with its lid open and a mic stand beside it, DVD shelving all around."
            width={1100}
            height={733}
            loading="lazy"
            sizes="(max-width: 60rem) 100vw, 50vw"
            className={styles.image}
          />
        </Reveal>
        <div className={styles.splitCopy}>
          <Reveal as="h2" delay={60}>
            <span id="the-piano" className={styles.sectionHeading}>
              And a grand piano.
            </span>
          </Reveal>
          <Reveal as="p" delay={120} className={styles.body}>
            A mahogany grand sits out on the floor with the lid up. It belongs
            to the music room as much as the stage does.
          </Reveal>
          <Reveal as="p" delay={160} className={styles.kicker}>
            Ask first. Then play.
          </Reveal>
        </div>
      </section>

      <section className={styles.book} aria-labelledby="book">
        <Reveal as="h2">
          <span id="book" className={styles.bookHeading}>
            Want the room?
          </span>
        </Reveal>
        <Reveal as="p" delay={60} className={styles.bookBody}>
          Send a note and tell us what you have in mind.
        </Reveal>
        <Reveal delay={120}>
          <a className={styles.cta} href={`mailto:${SITE.email.bookings}`}>
            Book the stage
          </a>
        </Reveal>
      </section>
    </div>
  );
}
