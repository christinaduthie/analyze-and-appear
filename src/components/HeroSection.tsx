import { ArrowDownRight, FileDown, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolioData";

const HeroSection = () => {
  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="about" className="relative overflow-hidden px-6 pb-16 pt-28 sm:pt-32" aria-labelledby="hero-about-heading">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-8 top-32 h-44 w-44 rounded-full bg-primary/10 blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="section-kicker motion-safe:animate-fade-in">{portfolioData.person.role}</p>

          <h1
            id="hero-about-heading"
            className="text-balance text-4xl font-display font-semibold text-foreground motion-safe:animate-fade-in motion-safe:opacity-0 sm:text-5xl"
            style={{ animationDelay: "100ms" }}
          >
            {portfolioData.hero.headline}
          </h1>

          <p
            className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground motion-safe:animate-fade-in motion-safe:opacity-0"
            style={{ animationDelay: "180ms" }}
          >
            {portfolioData.hero.subheadline}
          </p>

          <p
            className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground motion-safe:animate-fade-in motion-safe:opacity-0"
            style={{ animationDelay: "220ms" }}
          >
            {portfolioData.hero.summary}
          </p>

          <div
            className="mt-7 flex flex-wrap gap-3 motion-safe:animate-fade-in motion-safe:opacity-0"
            style={{ animationDelay: "270ms" }}
          >
            <Button size="lg" onClick={handleProjectsClick} className="gap-2 rounded-full px-6">
              View Projects
              <ArrowDownRight size={16} />
            </Button>

            <Button variant="outline" size="lg" asChild className="gap-2 rounded-full px-6">
              <a href={portfolioData.hero.cta.resume} target="_blank" rel="noopener noreferrer">
                Download Resume
                <FileDown size={16} />
              </a>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {portfolioData.about.highlights.map((item) => (
              <span
                key={item.label}
                className="rounded-full border border-border/80 bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground"
              >
                {item.label}: {item.value}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-foreground">About Me</h2>

            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              {portfolioData.about.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {portfolioData.about.focus.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-primary/10 blur-3xl" aria-hidden />

          <figure className="relative flex flex-col items-center">
            <div className="rounded-full border border-primary/20 bg-white p-3 shadow-xl">
              <img
                src={portfolioData.about.photo}
                alt={portfolioData.about.photoAlt}
                className="h-72 w-72 rounded-full object-cover sm:h-80 sm:w-80"
              />
            </div>

            <figcaption className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-4 py-2 text-sm text-muted-foreground shadow-sm">
              <MapPin size={14} className="text-primary" />
              {portfolioData.person.location}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
