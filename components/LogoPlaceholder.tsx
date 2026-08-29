import styles from "./LogoPlaceholder.module.css";

/* ============================================================
   LOGO PLACEHOLDER

   THE LOGO RULE IS ABSOLUTE. No logo artwork from the old site is
   used anywhere, ever. Approved SVG artwork is not ready yet.

   This component exists ONLY to hold the correct amount of space so
   layout is final before the artwork lands. It deliberately does NOT:
     - render the wordmark as HTML text
     - trace, recreate, or approximate the logo
     - substitute an AI-generated or "temporary" mark

   It reserves a horizontal ~2.2:1 lockup via --logo-aspect and draws
   a dashed green frame that is obviously not a logo, so nobody can
   mistake a staging build for a finished one.

   >>> SWAP POINT — see the single marked block in the JSX below. <<<
   ============================================================ */

type LogoPlaceholderProps = {
  /** Rendered width. Defaults to the --logo-w token. */
  width?: string;
  /** Marks the placeholder decorative when a parent supplies the label. */
  decorative?: boolean;
  className?: string;
};

export default function LogoPlaceholder({
  width,
  decorative = true,
  className,
}: LogoPlaceholderProps) {
  return (
    <span
      className={[styles.logo, className].filter(Boolean).join(" ")}
      style={width ? { ["--logo-w-override" as string]: width } : undefined}
      aria-hidden={decorative ? "true" : undefined}
      data-placeholder="logo"
    >
      {/* ==========================================================
          SWAP POINT — replace everything between these two comment
          markers with the approved wordmark, and nothing else:

            <Image
              src="/brand/media-cavern-wordmark.svg"
              alt=""
              width={440}
              height={200}
              priority
            />

          Keep the wrapping <span> and its class: it owns the 2.2:1
          aspect ratio, the responsive width, and the header sizing.
          Then delete this component's .frame / .tick styles.
          ========================================================== */}
      <span className={styles.frame}>
        <span className={styles.tick} />
      </span>
      {/* ================= END SWAP POINT ========================= */}
    </span>
  );
}
