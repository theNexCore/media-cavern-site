"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import { NAV_LINKS, isActiveRoute } from "./nav-links";
import { SITE } from "@/data/site";
import styles from "./Header.module.css";

/* ============================================================
   HEADER

   Structure:
     row 1  socials top right, wordmark centred beneath them
     row 2  sticky nav bar — routes, phone, directions

   The nav row is what sticks. The logo row scrolls away, so the
   bar that stays is compact and the mark is not repeated at every
   scroll position.

   The logo here remains the PLACEHOLDER component under the
   standing logo rule. The winged-record mark used on /the-story is
   a single scoped exception and is deliberately NOT used here.

   - Green active-state indicator on the current route
   - Logo returns home; there is no "Home" nav link
   - Keyboard accessible with visible green focus states
   - Motion respects prefers-reduced-motion
   ============================================================ */

const SCROLL_THRESHOLD = 24;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      {/* Row 1 and row 2 are SIBLINGS on purpose. Nesting the nav
          inside a short <header> made that header the sticky
          containing block, so the bar unstuck after ~200px. As a
          page-level sibling its containing block is the body and it
          sticks for the whole document. */}
      <header className={styles.brandRow} data-menu-open={menuOpen || undefined}>
          <div className={styles.brandInner}>
            <ul className={styles.socials} role="list">
              <li>
                <a
                  className={styles.socialLink}
                  href={SITE.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.social.instagram.label} — opens in a new tab`}
                >
                  <InstagramIcon size={20} />
                </a>
              </li>
              <li>
                <a
                  className={styles.socialLink}
                  href={SITE.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.social.facebook.label} — opens in a new tab`}
                >
                  <FacebookIcon size={20} />
                </a>
              </li>
            </ul>

            <Link
              href="/"
              className={styles.logoLink}
              aria-label="Media Cavern — home"
              aria-current={isHome ? "page" : undefined}
            >
              <Logo priority />
            </Link>
          </div>
      </header>

      {/* ---------- Row 2: sticky nav ---------- */}
      <div
        className={styles.navRow}
        data-scrolled={scrolled || undefined}
        data-menu-open={menuOpen || undefined}
      >
          <div className={styles.navInner}>
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
                        <span className={styles.indicator} aria-hidden="true" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className={styles.contact}>
              <a className={styles.phone} href={SITE.phone.href}>
                {SITE.phone.display}
              </a>
              <a
                className={styles.directions}
                href={SITE.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
            </div>

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
      </div>

      <MobileNav
        id="mobile-nav"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
