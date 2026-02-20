import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

import { navSections, portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = useMemo(() => navSections.map((item) => item.id), []);
  const activeSection = useScrollSpy(sectionIds, 140);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6" aria-label="Primary navigation">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-lg text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Go to top"
        >
          {portfolioData.person.name}
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          {navSections.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleSectionClick(item.id)}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-body transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  activeSection === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="rounded-md p-2 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-border/80 bg-background/95 px-6 pb-4 pt-3 md:hidden">
          <ul className="grid gap-1">
            {navSections.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleSectionClick(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={cn(
                    "w-full rounded-lg px-3 py-2 text-left text-sm font-body transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
