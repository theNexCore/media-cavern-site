import Image from "next/image";
import styles from "./Logo.module.css";

/* ============================================================
   MEDIA CAVERN WORDMARK

   Renders the approved wordmark. Used by the header, the footer
   and the homepage hero, so changing it here changes it
   everywhere.

   CURRENT STATE: interim PNG. The layered SVG (with the winged
   record) is still in progress.

   >>> SWAP POINT — the LOGO constant below is the only thing that
   changes when the SVG lands: point `src` at the .svg and update
   width/height to its viewBox. Nothing else in this file, and no
   consuming component, needs to change. <<<

   Shipped exactly as supplied, with its black canvas intact. The
   wordmark only ever sits on --surface-page, which is pure #000000
   (header brand row, footer, hero), so an opaque black background is
   indistinguishable from a transparent one.

   Do NOT run the background-removal pass on this file. The record
   behind the wordmark has dark groove bands that connect to the
   canvas edge, so an edge flood fill leaks straight into it and
   punches stripes through the vinyl. The small winged mark in the
   sticky nav is the one that genuinely needs alpha, because that bar
   is translucent.
   ============================================================ */

const LOGO = {
  src: "/brand/media-cavern-wordmark.png",
  width: 1983,
  height: 793,
} as const;

type LogoProps = {
  /** Rendered width. Defaults to the --logo-w token. */
  width?: string;
  /** Set on the hero so the wordmark is not lazy-loaded above the fold. */
  priority?: boolean;
  className?: string;
};

export default function Logo({ width, priority = false, className }: LogoProps) {
  return (
    <span
      className={[styles.logo, className].filter(Boolean).join(" ")}
      style={width ? { ["--logo-w-override" as string]: width } : undefined}
    >
      <Image
        src={LOGO.src}
        /* Decorative: the header wraps this in a link labelled
           "Media Cavern — home", and the footer and hero both carry
           the business name in adjacent text. */
        alt=""
        width={LOGO.width}
        height={LOGO.height}
        priority={priority}
        sizes="(max-width: 48rem) 92vw, 58rem"
        className={styles.image}
      />
    </span>
  );
}
