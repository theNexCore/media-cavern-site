/* ============================================================
   SOCIAL ICONS

   Official icon shapes, rendered in currentColor so the brand
   palette drives them: --mc-green at rest, --mc-green-bright on
   hover. Never Facebook blue, never the Instagram gradient,
   never gray.

   Decorative by default — the surrounding link carries the
   accessible name.
   ============================================================ */

type IconProps = {
  className?: string;
  size?: number;
};

export function InstagramIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function YouTubeIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M23.5 6.9a3 3 0 0 0-2.12-2.13C19.5 4.25 12 4.25 12 4.25s-7.5 0-9.38.52A3 3 0 0 0 .5 6.9 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.1 3 3 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 0 0 2.12-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.1ZM9.6 15.6V8.4l6.24 3.6-6.24 3.6Z" />
    </svg>
  );
}

export function NextdoorIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Nextdoor's mark is a house. Drawn as an outline so it reads
          at the same weight as the Instagram glyph beside it. */}
      <path d="M3 10.2 12 3.2l9 7v10.6H3V10.2Z" />
      <path d="M9.4 20.8v-6.1a2.6 2.6 0 0 1 5.2 0v6.1" />
    </svg>
  );
}

/* ---------- Lookup ----------
   Keyed by the `id` in SITE.social so every consumer can map over
   that one list instead of hardcoding a component per platform. */

export const SOCIAL_ICONS: Record<
  string,
  (props: IconProps) => React.JSX.Element
> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YouTubeIcon,
  nextdoor: NextdoorIcon,
};
