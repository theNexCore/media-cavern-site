"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/* ============================================================
   REVEAL

   A restrained scroll reveal: short fade with a small upward
   settle. Nothing bounces, nothing scales, nothing slides in from
   the side.

   Safety properties:
   - Content is revealed and the observer disconnected on first
     intersection, so nothing re-animates on scroll-back.
   - If IntersectionObserver is missing, content shows immediately.
   - Under prefers-reduced-motion the CSS drops the transform and
     transition entirely (see globals.css).
   - With JS disabled, the <noscript> rule in app/layout.tsx forces
     everything visible. Content is never trapped behind an effect.
   ============================================================ */

type RevealProps = {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  /** Stagger in ms, applied as a transition-delay. Keep it small. */
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setVisible(true);
          observer.disconnect(); // reveal once, then stop watching
        }
      },
      // Fire a little before the element reaches the viewport edge so
      // the settle finishes as it arrives rather than after.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal=""
      data-visible={visible ? "true" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
