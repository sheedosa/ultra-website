import type { Metadata, Viewport } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Enjazat Albaina — Launching Soon",
  description:
    "Enjazat Albaina · ULTRA — advanced C2TE polymer-modified tile adhesive systems. Our new website is launching soon.",
};

export const viewport: Viewport = {
  themeColor: "#afabab",
  width: "device-width",
  initialScale: 1,
};

export default function Home() {
  return <ComingSoon />;
}
