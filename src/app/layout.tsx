import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const arabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enjazat Albaina — ULTRA · Nothing Moves",
  description:
    "Advanced C2TE polymer-modified tile adhesives engineered for total bond strength — from standard ceramic to large-format stone.",
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  width: "device-width",
  initialScale: 1,
};

// Hero videos — preload the right one per breakpoint so playback starts
// the moment the user hits the page, before React has even mounted.
const VIDEO_CDN = "https://d8j0ntlcm91z4.cloudfront.net";
const VIDEO_DESKTOP =
  `${VIDEO_CDN}/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260524_152700_cdbbb61c-ac84-4ce2-acf5-185385dc1ed0.mp4`;
const VIDEO_MOBILE =
  `${VIDEO_CDN}/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260524_151817_beeadbea-1731-44bd-912e-3c5a45f14104.mp4`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${arabic.variable}`}
    >
      <body className="bg-brand-black text-brand-white antialiased">
        {/* React 19 hoists these into <head> automatically (deduped). */}
        {/* Warm the TCP/TLS connection to CloudFront */}
        <link rel="preconnect" href={VIDEO_CDN} crossOrigin="anonymous" />
        <link rel="dns-prefetch" href={VIDEO_CDN} />

        {/* Preload the aspect-matching hero video before JS evaluates */}
        <link
          rel="preload"
          as="video"
          type="video/mp4"
          href={VIDEO_DESKTOP}
          media="(min-width: 769px)"
          crossOrigin="anonymous"
          // @ts-expect-error: fetchPriority is a valid attribute in modern browsers
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="video"
          type="video/mp4"
          href={VIDEO_MOBILE}
          media="(max-width: 768px)"
          crossOrigin="anonymous"
          // @ts-expect-error: fetchPriority is a valid attribute in modern browsers
          fetchpriority="high"
        />

        {children}
      </body>
    </html>
  );
}
