import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
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
