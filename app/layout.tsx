import type { Metadata, Viewport } from "next";
import { Grenze_Gotisch, Barlow_Condensed, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

/* Three faces, three jobs:
   - Grenze Gotisch  large display headlines only, used sparingly
   - Barlow Condensed uppercase labels, buttons, nav, metadata
   - Inter            body copy
   Each is bound to a CSS variable consumed in tokens.css. */

const grenzeGotisch = Grenze_Gotisch({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-grenze-gotisch",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.themediacavern.com"),
  title: {
    default:
      "Media Cavern | Music, Movies, Audio Video Equipment & More | St. Louis",
    template: "%s · Media Cavern",
  },
  description:
    "Media Cavern in South County St. Louis is more than a store. Explore music, movies, audio video equipment, collectibles, oddities, clothing and live events at 11828 Tesson Ferry Rd.",
  openGraph: {
    type: "website",
    siteName: "Media Cavern",
    title:
      "Media Cavern | Music, Movies, Audio Video Equipment & More | St. Louis",
    description:
      "More than a store. Music, movies, audio video equipment, collectibles, oddities, clothing and live events at 11828 Tesson Ferry Rd, St. Louis.",
    locale: "en_US",
    /* Bucket-A photograph, NOT a logo — no approved wordmark exists. */
    images: [
      {
        url: "/images/store-interior-customers-wide.jpg",
        width: 1067,
        height: 800,
        alt: "The shop floor at Media Cavern, customers browsing bins beneath a hand-lettered chalk sign.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Media Cavern | Music, Movies, Audio Video Equipment & More | St. Louis",
    description:
      "More than a store. Music, movies, audio video equipment, collectibles, oddities, clothing and live events in South County St. Louis.",
    images: ["/images/store-interior-customers-wide.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${grenzeGotisch.variable} ${barlowCondensed.variable} ${inter.variable}`}
    >
      <head>
        {/* Without JS the IntersectionObserver in Reveal never runs, so
            force every revealed block visible. Content must never be
            trapped behind an effect. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StructuredData />
      </body>
    </html>
  );
}
