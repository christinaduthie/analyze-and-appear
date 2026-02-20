import { useMemo, useState } from "react";
import { BriefcaseBusiness, MapPin } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const { items, initialVisibleCount } = portfolioData.experience;

  const visibleItems = useMemo(
    () => (showAll ? items : items.slice(0, initialVisibleCount)),
    [items, initialVisibleCount, showAll],
  );

  return (
    <section id="experience" className="section-shell bg-muted/40" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Experience"
        />

        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-px bg-border md:left-1/2" aria-hidden />

          <div className="space-y-6">
            {visibleItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <Reveal key={`${item.company}-${item.role}-${item.dates}`} delayMs={index * 60}>
                  <article className="relative grid gap-4 pl-10 md:grid-cols-2 md:pl-0">
                    <span
                      className="absolute left-0 top-6 h-6 w-6 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2"
                      aria-hidden
                    />

                    <div
                      className={cn(
                        "surface-card p-6",
                        isEven ? "md:col-start-1 md:pr-10" : "md:col-start-2 md:pl-10",
                      )}
                    >
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-primary">{item.dates}</p>
                          <h3 className="mt-1 text-xl font-display text-foreground">{item.role}</h3>
                          <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                            <BriefcaseBusiness size={14} className="text-primary" />
                            {item.company}
                          </p>
                          <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin size={14} className="text-primary" />
                            {item.location}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {item.achievements.map((achievement) => (
                          <li key={achievement} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="chip">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {items.length > initialVisibleCount ? (
          <div className="mt-10 flex justify-center">
            <Button variant="outline" onClick={() => setShowAll((current) => !current)}>
              {showAll ? "Show less" : "Show more"}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ExperienceSection;
