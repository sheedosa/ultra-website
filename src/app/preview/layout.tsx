import type { Metadata } from "next";

// Restore the full-site title for the /preview route (the root layout's default
// is overridden by the coming-soon page).
export const metadata: Metadata = {
  title: "Enjazat Albaina — ULTRA · Nothing Moves",
  description:
    "Advanced C2TE polymer-modified tile adhesives engineered for total bond strength — from standard ceramic to large-format stone.",
};

// Hero videos — preload the right one per breakpoint so playback starts the
// moment the user hits the page. Scoped to /preview so the coming-soon root
// never fetches the CDN video. React 19 hoists these <link>s into <head>.
const VIDEO_CDN = "https://d8j0ntlcm91z4.cloudfront.net";
const VIDEO_DESKTOP =
  `${VIDEO_CDN}/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260524_152700_cdbbb61c-ac84-4ce2-acf5-185385dc1ed0.mp4`;
const VIDEO_MOBILE =
  `${VIDEO_CDN}/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260524_151817_beeadbea-1731-44bd-912e-3c5a45f14104.mp4`;

export default function PreviewLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
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
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="video"
        type="video/mp4"
        href={VIDEO_MOBILE}
        media="(max-width: 768px)"
        crossOrigin="anonymous"
        fetchPriority="high"
      />

      {children}
    </>
  );
}
