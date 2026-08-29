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

   The artwork carries a real alpha channel: it was supplied as RGB
   with a baked-in black background, and that black was converted to
   transparency (see .crawl/alpha.js). It therefore composites
   correctly on the scrolled header, which is 88% black over blurred
   content, with no blend-mode workaround.
   ============================================================ */

const LOGO = {
  src: "/brand/media-cavern-wordmark.png",
  width: 1774,
  height: 887,
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
