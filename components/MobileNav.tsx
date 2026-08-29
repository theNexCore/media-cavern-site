"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { NAV_LINKS, isActiveRoute } from "./nav-links";
import styles from "./MobileNav.module.css";

/* ============================================================
   MOBILE NAV

   A full-screen overlay with oversized links and a green accent —
   deliberately not a default hamburger panel.

   Accessibility contract:
   - Rendered as a modal dialog (role="dialog" aria-modal="true")
   - Focus moves to the close button on open, is trapped while open,
     and returns to the trigger on close
   - Escape closes
   - Background scroll is locked while open
   - Entrance stagger is disabled under prefers-reduced-motion
   ============================================================ */

type MobileNavProps = {
  id: string;
  open: boolean;
  onClose: () => void;
  pathname: string;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileNav({
  id,
  open,
  onClose,
  pathname,
}: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Element that had focus before opening, so it can be restored.
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    restoreRef.current = document.activeElement as HTMLElement | null;
    document.body.dataset.scrollLocked = "true";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      // Wrap focus at both ends so Tab can never escape the overlay.
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      delete document.body.dataset.scrollLocked;
      // Only steal focus back if it is still inside the closing panel.
      const active = document.activeElement;
      if (!active || panelRef.current?.contains(active) || active === document.body) {
        restoreRef.current?.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id={id}
      ref={panelRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className={styles.bar}>
        <button
          type="button"
          ref={closeRef}
          className={styles.close}
          onClick={onClose}
        >
          <span className={styles.closeMark} aria-hidden="true" />
          <span className={styles.closeLabel}>Close</span>
        </button>
      </div>

      <nav className={styles.nav} aria-label="Primary">
        <ul className={styles.list} role="list">
          {NAV_LINKS.map((link, index) => {
            const active = isActiveRoute(pathname, link.href);
            return (
              <li
                key={link.href}
                className={styles.item}
                /* Drives the entrance stagger; zeroed out under
                   prefers-reduced-motion in the stylesheet. */
                style={{ ["--i" as string]: index }}
              >
                <Link
                  href={link.href}
                  className={styles.link}
                  data-active={active || undefined}
                  aria-current={active ? "page" : undefined}
                  onClick={onClose}
                >
                  <span className={styles.rule} aria-hidden="true" />
                  <span className={styles.label}>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
