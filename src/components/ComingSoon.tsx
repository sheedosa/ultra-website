import type { CSSProperties } from "react";

// Real business contact details (Enjazat Albaina, Benghazi).
const EMAIL = "info@enjazatalbaina.ly";
const PHONE_DISPLAY = "0920096661";
const PHONE_TEL = "+218920096661"; // Libya country code, leading 0 dropped
const ADDRESS = "Alfuwayhat, Benghazi, Libya";

// Staggered entrance delay via the --delay CSS var consumed by .fade-up / .line-up
// (both defined in globals.css and disabled under prefers-reduced-motion).
const delay = (s: number) => ({ "--delay": `${s}s` } as CSSProperties);

/**
 * Temporary "coming soon" landing shown at the site root while the full ULTRA
 * site (still at /preview) is finished. Greige (#AFABAB) with charcoal ink,
 * reusing the brand's condensed display type.
 */
export default function ComingSoon() {
  return (
    <main className="relative flex min-h-[100svh] flex-col overflow-hidden bg-brand-greige text-brand-black px-6 py-8 md:px-12 md:py-10">
      {/* ── TOP: wordmark + status ── */}
      <header className="flex items-start justify-between gap-4">
        <div className="fade-up flex flex-col gap-[2px]" style={delay(0.1)}>
          <span className="font-display font-bold uppercase tracking-[0.22em] text-[clamp(0.8rem,1.4vw,1rem)]">
            Enjazat Albaina
          </span>
          <span
            dir="rtl"
            lang="ar"
            className="font-arabic text-[clamp(0.75rem,1.1vw,0.9rem)] text-brand-black/75"
          >
            إنجازات البيئة
          </span>
        </div>

        <span
          className="fade-up shrink-0 self-start border border-brand-black/35 px-3 py-2 font-display uppercase tracking-[0.32em] text-[clamp(0.6rem,0.9vw,0.72rem)]"
          style={delay(0.2)}
        >
          Launching Soon
        </span>
      </header>

      {/* ── CENTER: statement ── */}
      <div className="flex flex-1 flex-col justify-center py-14">
        <div className="fade-up mb-5 flex items-center gap-3" style={delay(0.35)}>
          <span aria-hidden className="block h-px w-9 bg-brand-black/45" />
          <span className="font-display uppercase tracking-[0.4em] text-[clamp(0.6rem,0.9vw,0.72rem)] text-brand-black/85">
            C2TE Tile Adhesive System
          </span>
        </div>

        <h1
          aria-label="Ultra — Nothing Moves."
          className="font-display font-black uppercase leading-[0.86] tracking-[-0.015em] text-[clamp(4rem,15vw,13rem)]"
        >
          <span className="block overflow-hidden">
            <span className="line-up block" style={delay(0.45)}>
              Ultra
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="line-up mt-[0.1em] block text-[0.4em] font-light italic tracking-[0.1em]"
              style={delay(0.6)}
            >
              Nothing Moves.
            </span>
          </span>
        </h1>

        <p
          className="fade-up mt-7 max-w-[34rem] font-body text-[clamp(0.9rem,1.15vw,1.05rem)] leading-[1.6] tracking-[0.01em] text-brand-black/85"
          style={delay(0.78)}
        >
          Advanced C2TE polymer-modified tile adhesive systems — engineered for
          total bond strength. Our new website is launching soon.
        </p>
      </div>

      {/* ── BOTTOM: contact ── */}
      <footer
        className="fade-up border-t border-brand-black/20 pt-6"
        style={delay(0.95)}
      >
        <div className="flex flex-col gap-x-12 gap-y-4 sm:flex-row sm:flex-wrap sm:items-start">
          <ContactItem label="Email" href={`mailto:${EMAIL}`} value={EMAIL} />
          <ContactItem label="Phone" href={`tel:${PHONE_TEL}`} value={PHONE_DISPLAY} />
          <div className="flex flex-col gap-1">
            <span className="font-display uppercase tracking-[0.28em] text-[0.625rem] text-brand-black/60">
              Address
            </span>
            <span className="font-body text-[clamp(0.85rem,1vw,0.95rem)] text-brand-black">
              {ADDRESS}
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ContactItem({
  label,
  href,
  value,
}: {
  label: string;
  href: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-[24px] flex-col gap-1 no-underline"
    >
      <span className="font-display uppercase tracking-[0.28em] text-[0.625rem] text-brand-black/60">
        {label}
      </span>
      <span className="font-body text-[clamp(0.85rem,1vw,0.95rem)] text-brand-black underline decoration-brand-black/25 decoration-1 underline-offset-4 transition-colors group-hover:decoration-brand-black">
        {value}
      </span>
    </a>
  );
}
