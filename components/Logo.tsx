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

   The artwork ships with an opaque black background (RGB, no
   alpha), so `mix-blend-mode: screen` in the stylesheet drops the
   black and keeps the green. That matters on the scrolled header,
   where the bar is 88% black over blurred content — without it the
   logo would sit in a visible black rectangle. If a transparent
   PNG or the SVG replaces this, the blend mode is harmless but can
   be removed.
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
        sizes="(max-width: 48rem) 60vw, 34rem"
        className={styles.image}
      />
    </span>
  );
}
