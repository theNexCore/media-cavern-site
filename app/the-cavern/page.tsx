import type { Metadata } from "next";
import CavernGallery, { resolveFilter } from "@/components/cavern/CavernGallery";
import styles from "./page.module.css";

/* ============================================================
   /the-cavern

   A photographic view of the store, filterable by category. The
   filter comes from ?filter= and is resolved on the server, so
   the grid is rendered and indexable before any JS runs.

   The filters filter PHOTOGRAPHY, not inventory — no prices, no
   stock counts, no availability, no item listings, ever.
   ============================================================ */

export const metadata: Metadata = {
  title: "The Cavern",
  description:
    "A look inside Media Cavern in South County St. Louis — music, movies, audio video equipment, collectibles, oddities, clothing and the stage.",
  openGraph: {
    title: "The Cavern · Media Cavern",
    description: "A look inside Media Cavern - music, movies, audio video equipment, collectibles, oddities, clothing and the stage.",
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
          <h1 className={styles.headline}>Welcome to the Cavern.</h1>
          <div className={styles.support}>
            <p>
              The inventory changes. The walls change. The weird stuff
              disappears. Then something else walks through the door.
            </p>
            <p className={styles.kicker}>Come dig.</p>
          </div>
        </div>
      </header>

      <div className={styles.body}>
        <CavernGallery active={active} />
      </div>
    </div>
  );
}
