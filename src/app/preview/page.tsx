import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

// The full ULTRA site lives here (unlinked) while the coming-soon page is at the
// root. Composition is unchanged from the original src/app/page.tsx.
export default function Preview() {
  return (
    <main className="bg-brand-black text-brand-white">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
