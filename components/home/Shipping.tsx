import Reveal from "../Reveal";
import { SHIPPING } from "@/data/home-copy";
import { SITE } from "@/data/site";
import styles from "./Shipping.module.css";

/* ============================================================
   SECTION 11 — SHIPPING

   No ecommerce. No cart. No checkout. No prices, no stock, no
   availability. The list below says WHAT can ship, never what is
   currently here — the way to find that out is the phone number,
   which is why it is the most prominent element in the section.
   ============================================================ */

export default function Shipping() {
  return (
    <section className={styles.section} aria-labelledby="shipping">
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal as="p" className={styles.eyebrow}>
            {SHIPPING.eyebrow}
          </Reveal>

          <Reveal as="h2" delay={60}>
            <span id="shipping" className={styles.headline}>
              {SHIPPING.headline}
            </span>
          </Reveal>

          <Reveal delay={120} className={styles.body}>
            {SHIPPING.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Reveal>

          <Reveal delay={180} className={styles.phoneBlock}>
            <span className={styles.phoneLabel}>Call the store</span>
            <a className={styles.phone} href={SITE.phone.href}>
              {SITE.phone.display}
            </a>
          </Reveal>
        </div>

        <Reveal delay={90} className={styles.listWrap}>
          <h3 className={styles.listTitle}>What ships</h3>
          <ul className={styles.list} role="list">
            {SHIPPING.items.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.note}>
            Shipping is available throughout the lower 48.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
