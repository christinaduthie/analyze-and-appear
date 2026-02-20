import { useEffect, useMemo, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const stableSectionIds = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);
  const [activeSection, setActiveSection] = useState<string>(stableSectionIds[0] ?? "");

  useEffect(() => {
    if (stableSectionIds.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + offset;
      let currentSection = stableSectionIds[0] ?? "";

      for (const id of stableSectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }

      setActiveSection((previous) => (previous === currentSection ? previous : currentSection));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [offset, stableSectionIds]);

  return activeSection;
}
