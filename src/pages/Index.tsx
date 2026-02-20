import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import BackToTopButton from "@/components/BackToTopButton";
import { portfolioData } from "@/data/portfolioData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="page-enter">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <GallerySection />
        <ContactSection />
      </main>

      <footer className="border-t border-border py-8 text-center text-xs font-body text-muted-foreground">
        © 2026 {portfolioData.person.name}. All rights reserved.
      </footer>

      <BackToTopButton />
    </div>
  );
};

export default Index;
