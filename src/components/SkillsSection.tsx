import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const getLevelLabel = (level: number) => {
  if (level >= 5) return "Expert";
  if (level >= 4) return "Advanced";
  if (level >= 3) return "Strong";
  if (level >= 2) return "Working";
  return "Basic";
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    return ["All", ...portfolioData.skills.categories.map((category) => category.category)];
  }, []);

  const groupedSkills = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return portfolioData.skills.categories
      .filter((category) => activeCategory === "All" || category.category === activeCategory)
      .map((category) => ({
        category: category.category,
        skills: category.skills.filter((skill) => {
          if (!normalizedQuery) {
            return true;
          }

          return (
            skill.name.toLowerCase().includes(normalizedQuery) ||
            category.category.toLowerCase().includes(normalizedQuery)
          );
        }),
      }))
      .filter((category) => category.skills.length > 0);
  }, [activeCategory, query]);

  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="skills-heading" eyebrow="Skills" title="Skills & Tooling" />

        <div className="mb-6 flex flex-wrap items-center gap-2">
          {portfolioData.skills.topSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-semibold text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_320px] lg:items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  activeCategory === category
                    ? "border-primary/30 bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:text-foreground",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a skill"
              className="pl-9"
              aria-label="Search skills"
              autoComplete="off"
            />
          </div>
        </div>

        {groupedSkills.length === 0 ? (
          <p className="rounded-2xl border border-border/80 bg-card p-5 text-sm text-muted-foreground">
            No skills found for this filter.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {groupedSkills.map((group, groupIndex) => (
              <Reveal key={group.category} delayMs={groupIndex * 50}>
                <article className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <header className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{group.category}</h3>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                      {group.skills.length} skills
                    </span>
                  </header>

                  <ul className="space-y-3">
                    {group.skills.map((skill) => (
                      <li key={`${group.category}-${skill.name}`} className="rounded-xl border border-border/70 p-3">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-foreground">{skill.name}</p>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            {getLevelLabel(skill.level)}
                          </p>
                        </div>

                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-primary transition-all duration-500"
                            style={{ width: `${skill.level * 20}%` }}
                            aria-hidden
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
