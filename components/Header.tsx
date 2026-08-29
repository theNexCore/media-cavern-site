"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoPlaceholder from "./LogoPlaceholder";
import MobileNav from "./MobileNav";
import { NAV_LINKS, isActiveRoute } from "./nav-links";
import styles from "./Header.module.css";

/* ============================================================
   HEADER

   - Transparent over the hero, near-black once scrolled
   - Green active-state indicator on the current route
   - Logo returns home; there is no "Home" nav link
   - Keyboard accessible with visible green focus states
   - Motion respects prefers-reduced-motion (via tokens + a
     media query in Header.module.css)
   ============================================================ */

/* Past this many pixels the bar takes on its solid treatment.
   Small enough that a single wheel notch commits the change. */
const SCROLL_THRESHOLD = 24;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // rAF-throttled so the scroll handler never runs more than
    // once per frame.
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
        frame = 0;
      });
    };

    // Sync immediately: a restored scroll position or a deep link
    // must not paint a transparent bar over content.
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close the overlay on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={styles.header}
        data-scrolled={scrolled || undefined}
        data-menu-open={menuOpen || undefined}
      >
        <div className={styles.inner}>
          <Link
            href="/"
            className={styles.logoLink}
            aria-label="Media Cavern — home"
            aria-current={isHome ? "page" : undefined}
          >
            <LogoPlaceholder />
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.navList} role="list">
              {NAV_LINKS.map((link) => {
                const active = isActiveRoute(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={styles.navLink}
                      data-active={active || undefined}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className={styles.navLabel}>{link.label}</span>
                      {/* Green active indicator. Decorative — state is
                          already conveyed by aria-current. */}
                      <span className={styles.indicator} aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className={styles.menuBars} aria-hidden="true">
              <span />
              <span />
            </span>
            <span className={styles.menuButtonLabel}>Menu</span>
          </button>
        </div>
      </header>

      <MobileNav
        id="mobile-nav"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
