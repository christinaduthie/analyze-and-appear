import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Search } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

type ProjectSort = "featured" | "recent";

const sortProjects = (projects: ProjectItem[], sort: ProjectSort) => {
  return [...projects].sort((a, b) => {
    if (sort === "featured") {
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }
      return b.year - a.year;
    }

    return b.year - a.year;
  });
};

const ProjectsSection = () => {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [sort, setSort] = useState<ProjectSort>("featured");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();

    portfolioData.projects.items.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });

    return ["All", ...Array.from(tags)];
  }, []);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return sortProjects(
      portfolioData.projects.items.filter((project) => {
        const matchesTag = activeTag === "All" || project.tags.includes(activeTag);

        if (!matchesTag) {
          return false;
        }

        if (!normalizedQuery) {
          return true;
        }

        return (
          project.title.toLowerCase().includes(normalizedQuery) ||
          project.oneLiner.toLowerCase().includes(normalizedQuery) ||
          project.description.toLowerCase().includes(normalizedQuery) ||
          project.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)) ||
          project.techStack.some((tech) => tech.toLowerCase().includes(normalizedQuery))
        );
      }),
      sort,
    );
  }, [activeTag, query, sort]);

  return (
    <section id="projects" className="section-shell bg-muted/40" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="Technical Projects"
        />

        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <label htmlFor="project-search" className="mb-2 block text-sm font-medium text-foreground">
              Search projects
            </label>
            <div className="relative max-w-xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                id="project-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, tech, or tag"
                className="pl-9"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="inline-flex rounded-lg border border-border bg-background p-1" role="tablist" aria-label="Sort projects">
            <button
              type="button"
              role="tab"
              aria-selected={sort === "featured"}
              onClick={() => setSort("featured")}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                sort === "featured" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              Featured
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={sort === "recent"}
              onClick={() => setSort("recent")}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                sort === "recent" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              Recent
            </button>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={cn(
                "chip rounded-full border px-3 py-1 text-sm transition-colors",
                activeTag === tag
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-border bg-background text-muted-foreground hover:text-foreground",
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="surface-card p-5 text-sm text-muted-foreground">No projects match the active filters.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id} delayMs={index * 50}>
                <article className="surface-card flex h-full flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <h3 className="text-xl font-display text-foreground">{project.title}</h3>
                        {project.featured ? (
                          <Badge variant="secondary" className="chip bg-primary/10 text-primary">
                            Featured
                          </Badge>
                        ) : null}
                      </div>
                      <p className="text-sm text-muted-foreground">{project.oneLiner}</p>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{project.period}</span>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={`${project.id}-${tag}`} variant="secondary" className="chip">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    <Button size="sm" onClick={() => setSelectedProject(project)}>
                      View Details
                    </Button>
                    {project.links.github ? (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github size={14} /> GitHub
                        </a>
                      </Button>
                    ) : null}
                    {project.links.demo ? (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      </Button>
                    ) : null}
                    {project.links.caseStudy ? (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.links.caseStudy} target="_blank" rel="noopener noreferrer">
                          <ArrowUpRight size={14} /> Case Study
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
            {selectedProject ? (
              <>
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription>
                    {selectedProject.oneLiner} · {selectedProject.period}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 text-sm text-muted-foreground">
                  <section>
                    <h4 className="mb-2 font-semibold text-foreground">Problem</h4>
                    <p>{selectedProject.details.problem}</p>
                  </section>

                  <section>
                    <h4 className="mb-2 font-semibold text-foreground">Approach</h4>
                    <ul className="space-y-2">
                      {selectedProject.details.approach.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="mb-2 font-semibold text-foreground">Results</h4>
                    <ul className="space-y-2">
                      {selectedProject.details.results.map((result) => (
                        <li key={result} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="mb-2 font-semibold text-foreground">Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <Badge key={`detail-${tech}`} variant="secondary" className="chip">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </section>
                </div>
              </>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
