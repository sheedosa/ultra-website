export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen border-t border-brand-white/5 bg-[#0c0c10] px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto">
        <p className="font-[var(--font-barlow-condensed)] text-[11px] uppercase tracking-[0.36em] opacity-50">
          03 / 05 — The Standard
        </p>
        <h2 className="mt-4 font-[var(--font-barlow-condensed)] font-black uppercase text-[clamp(56px,9vw,132px)] leading-[0.9] tracking-[-0.015em]">
          Built <em className="not-italic font-light opacity-55">For Conditions.</em>
        </h2>
      </div>
    </section>
  );
}
