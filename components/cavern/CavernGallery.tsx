import Image from "next/image";
import Link from "next/link";
import { CAVERN_IMAGES } from "@/data/cavern-gallery";
import { FILTERS, type CategoryId } from "@/data/categories";
import styles from "./CavernGallery.module.css";

/* ============================================================
   THE CAVERN — FILTERABLE GALLERY

   A server component. The filters are real links to ?filter=…,
   which means:
     - the filtered grid is server-rendered and indexable
     - every view is shareable and linkable
     - back/forward works
     - it functions with JavaScript disabled
     - keyboard support is native to anchors

   An earlier client-side version using useSearchParams rendered
   nothing on the server; links are both simpler and stronger here.

   THESE FILTERS FILTER PHOTOGRAPHY, NOT INVENTORY. No prices, no
   stock counts, no availability, no item-level listings. Ever.
   ============================================================ */

type FilterId = CategoryId | "all";

const VALID = new Set<string>(FILTERS.map((f) => f.id));

/** Falls back to "all" for a missing, unknown or repeated param. */
export function resolveFilter(raw: string | string[] | undefined): FilterId {
  const value = Array.isArray(raw) ? raw[0] : raw;
  return value && VALID.has(value) ? (value as FilterId) : "all";
}

export default function CavernGallery({ active }: { active: FilterId }) {
  const visible =
    active === "all"
      ? CAVERN_IMAGES
      : CAVERN_IMAGES.filter((img) => img.category === active);

  return (
    <>
      <nav className={styles.filterBar} aria-label="Filter photographs by category">
        <ul className={styles.filterList} role="list">
          {FILTERS.map((filter) => {
            const isActive = filter.id === active;
            return (
              <li key={filter.id}>
                <Link
                  href={
                    filter.id === "all"
                      ? "/the-cavern"
                      : `/the-cavern?filter=${filter.id}`
                  }
                  className={styles.filter}
                  data-active={isActive || undefined}
                  aria-current={isActive ? "true" : undefined}
                  scroll={false}
                >
                  {filter.label}
                  <span className={styles.filterRule} aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <p className={styles.count}>
        {visible.length} {visible.length === 1 ? "photograph" : "photographs"}
      </p>

      <ul className={styles.grid} role="list">
        {visible.map((img) => (
          <li
            key={img.src}
            className={styles.cell}
            data-orientation={img.orientation}
          >
            <div className={styles.frame}>
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 32vw"
                className={styles.image}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
