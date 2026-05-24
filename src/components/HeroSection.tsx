"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const VIDEO_DESKTOP =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260524_152700_cdbbb61c-ac84-4ce2-acf5-185385dc1ed0.mp4";
const VIDEO_MOBILE =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260524_151817_beeadbea-1731-44bd-912e-3c5a45f14104.mp4";

const PRODUCT_CHIPS = [
  { label: "C2TE Fix",           color: "#e85d04" },
  { label: "C2TE S1 Flex",       color: "#1565c0" },
  { label: "C2TE S2 Super Flex", color: "#2e7d32" },
  { label: "C2TE S2 Fiber",      color: "#7b1fa2" },
] as const;

const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
] as const;

/** Helper: pass an animation-delay via the --delay CSS variable. */
const delay = (s: number) =>
  ({ "--delay": `${s}s` } as React.CSSProperties);

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setPlayFailed] = useState(false);

  // Attempt autoplay; fall back gracefully if blocked
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const p = v.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => setPlayFailed(true));
    }
  }, [isMobile]);

  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] min-h-[560px] overflow-hidden bg-brand-black"
    >
      {/* ── VIDEO BACKGROUND ── */}
      <video
        ref={videoRef}
        key={isMobile ? "m" : "d"}
        className="absolute inset-0 w-full h-full object-cover"
        src={isMobile ? VIDEO_MOBILE : VIDEO_DESKTOP}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // @ts-expect-error: fetchPriority is a valid hint in modern browsers
        fetchpriority="high"
        crossOrigin="anonymous"
        disablePictureInPicture
        disableRemotePlayback
      />

      {/* ── LETTERBOX BARS ── */}
      <div
        className="letterbox-bar absolute top-0 left-0 right-0 z-[2] bg-brand-black"
        data-mobile={isMobile ? "true" : "false"}
      />
      <div
        className="letterbox-bar letterbox-bar--bottom absolute bottom-0 left-0 right-0 z-[2] bg-brand-black"
        data-mobile={isMobile ? "true" : "false"}
      />

      {/* ── VIGNETTE OVERLAY ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 45%, rgba(7,7,10,0.78) 100%),
            linear-gradient(to top,    rgba(7,7,10,0.96) 0%, rgba(7,7,10,0.40) 28%, transparent 55%),
            linear-gradient(to bottom, rgba(7,7,10,0.72) 0%, transparent 22%)
          `,
        }}
      />

      {/* ── FILM GRAIN ── */}
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0 z-[4] opacity-[0.04]"
      />

      {/* ── NAV ── */}
      <nav
        aria-label="Primary"
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 md:px-12 md:py-7"
      >
        <a href="#hero" className="flex flex-col gap-[2px] no-underline">
          <span className="font-[var(--font-barlow-condensed)] text-[clamp(12px,1.3vw,15px)] font-bold uppercase tracking-[0.22em] opacity-90">
            Enjazat Albaina
          </span>
          <span className="text-[clamp(10px,1vw,12px)] font-light tracking-[0.1em] opacity-40">
            إنجازات البيئة
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 lg:gap-12 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-[var(--font-barlow-condensed)] text-[clamp(10px,1vw,12px)] uppercase tracking-[0.24em] opacity-45 hover:opacity-100 transition-opacity duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="font-[var(--font-barlow-condensed)] text-[clamp(10px,1vw,12px)] uppercase tracking-[0.24em] opacity-90 hover:opacity-100 border border-brand-white/25 hover:border-brand-white/45 hover:bg-brand-white/10 px-[18px] py-2 transition-all duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* ── HERO CONTENT ── */}
      <div className="absolute z-10 bottom-[clamp(52px,9vh,110px)] left-[clamp(24px,5vw,80px)] right-[clamp(24px,5vw,80px)]">
        {/* Eyebrow */}
        <div
          className="fade-up flex items-center gap-[14px] mb-[clamp(12px,1.8vh,22px)]"
          style={delay(0.2)}
        >
          <span className="block w-9 h-px bg-brand-white opacity-30" />
          <span className="font-[var(--font-barlow-condensed)] text-[clamp(9px,0.85vw,11px)] uppercase tracking-[0.42em] opacity-50">
            C2TE Tile Adhesive System
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-[var(--font-barlow-condensed)] font-black uppercase leading-[0.86] tracking-[-0.015em] text-[clamp(72px,14vw,190px)]">
          <span className="block overflow-hidden">
            <span className="line-up block" style={delay(0.42)}>Ultra</span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="line-up block font-light italic text-brand-white text-[0.42em] tracking-[0.12em] mt-[0.08em]"
              style={delay(0.56)}
            >
              Nothing Moves.
            </span>
          </span>
        </h1>

        {/* Sub copy */}
        <div className="fade-up mt-[clamp(16px,2.5vh,28px)] max-w-[480px]" style={delay(0.78)}>
          <p className="font-[var(--font-barlow)] font-light text-[clamp(12px,1.1vw,14px)] tracking-[0.06em] leading-[1.7] opacity-55">
            Advanced polymer-modified tile adhesives engineered for total bond strength — from standard ceramic to large-format stone.
          </p>
        </div>

        {/* Chips */}
        <div
          className="fade-up flex flex-wrap gap-[clamp(6px,0.8vw,10px)] mt-[clamp(20px,3vh,34px)]"
          style={delay(0.96)}
        >
          {PRODUCT_CHIPS.map((c) => (
            <a
              key={c.label}
              href="#products"
              className="relative font-[var(--font-barlow-condensed)] text-[clamp(9px,0.8vw,11px)] font-semibold uppercase tracking-[0.24em] py-[5px] pl-[13px] pr-[13px] border border-brand-white/15 text-brand-white/55 hover:text-brand-white hover:border-brand-white/40 transition-all duration-300"
              style={{ boxShadow: `inset 3px 0 0 0 ${c.color}` }}
            >
              {c.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="fade-up flex flex-wrap items-center gap-[clamp(18px,2.5vw,32px)] mt-[clamp(24px,3.5vh,40px)]"
          style={delay(1.14)}
        >
          <a
            href="#products"
            className="font-[var(--font-barlow-condensed)] text-[clamp(10px,1vw,12px)] font-bold uppercase tracking-[0.28em] text-brand-black bg-brand-white hover:bg-transparent hover:text-brand-white hover:outline hover:outline-1 hover:outline-brand-white/60 px-[clamp(22px,2.5vw,36px)] py-[clamp(12px,1.6vh,16px)] no-underline transition-all duration-300"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="group font-[var(--font-barlow-condensed)] text-[clamp(10px,1vw,12px)] uppercase tracking-[0.28em] text-brand-white/45 hover:text-brand-white flex items-center gap-[10px] no-underline transition-colors duration-300"
          >
            <span className="relative block h-px w-[22px] group-hover:w-[34px] transition-all duration-300 bg-current">
              <span className="absolute right-0 -top-[3px] border-y-[4px] border-l-[4px] border-y-transparent border-l-current" />
            </span>
            View Catalogue
          </a>
        </div>
      </div>

      {/* ── SHOT COUNTER (desktop only) ── */}
      <div
        className="fade-up hidden md:flex absolute right-[clamp(24px,4vw,64px)] bottom-[clamp(52px,9vh,110px)] z-10 flex-col items-center gap-3"
        style={delay(1.4)}
      >
        <span
          className="font-[var(--font-barlow-condensed)] text-[10px] tracking-[0.2em] opacity-45"
          style={{ writingMode: "vertical-rl" }}
        >
          ULTRA · 01
        </span>
        <div className="relative w-px h-14 bg-brand-white/15 overflow-hidden">
          <div className="shot-fill absolute top-0 left-0 w-full bg-brand-white" />
        </div>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[1.5px] bg-brand-white/10">
        <div className="progress-fill h-full bg-brand-white/60" />
      </div>

      {/* ── SCROLL CUE ── */}
      <div
        className="fade-up hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-[clamp(14px,2.5vh,24px)] z-20 flex-col items-center gap-1.5"
        style={delay(1.8)}
      >
        <span className="font-[var(--font-barlow-condensed)] text-[8px] uppercase tracking-[0.38em]">
          Scroll
        </span>
        <span className="scroll-bounce block w-1 h-1 rounded-full bg-brand-white" />
      </div>
    </section>
  );
}
