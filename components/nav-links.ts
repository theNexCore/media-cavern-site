/* Single source of truth for primary navigation.
   Header and MobileNav both read this — they never diverge.

   There is deliberately NO "Home" link: the logo returns home. */

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: readonly NavLink[] = [
  { label: "THE CAVERN", href: "/the-cavern" },
  { label: "THE STORY", href: "/the-story" },
  { label: "THE STAGE", href: "/the-stage" },
  { label: "VISIT", href: "/visit" },
] as const;

/** Active when the route matches exactly or is a descendant of it. */
export function isActiveRoute(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}
