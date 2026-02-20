import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    portfolioData.gallery.items.forEach((item) => categorySet.add(item.category));
    return ["All", ...Array.from(categorySet)];
  }, []);

  const filteredItems = useMemo(
    () =>
      portfolioData.gallery.items.filter((item) => {
        return activeCategory === "All" || item.category === activeCategory;
      }),
    [activeCategory],
  );

  const selectedIndex = useMemo(
    () => filteredItems.findIndex((item) => item.id === selectedItemId),
    [filteredItems, selectedItemId],
  );

  const selectedItem = selectedIndex >= 0 ? filteredItems[selectedIndex] : null;

  const goToNext = useCallback(() => {
    if (!filteredItems.length || selectedIndex < 0) {
      return;
    }

    const nextIndex = (selectedIndex + 1) % filteredItems.length;
    setSelectedItemId(filteredItems[nextIndex]?.id ?? null);
  }, [filteredItems, selectedIndex]);

  const goToPrevious = useCallback(() => {
    if (!filteredItems.length || selectedIndex < 0) {
      return;
    }

    const previousIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItemId(filteredItems[previousIndex]?.id ?? null);
  }, [filteredItems, selectedIndex]);

  useEffect(() => {
    if (selectedItemId && !filteredItems.some((item) => item.id === selectedItemId)) {
      setSelectedItemId(null);
    }
  }, [filteredItems, selectedItemId]);

  useEffect(() => {
    if (!selectedItem) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goToNext();
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goToNext, goToPrevious, selectedItem]);

  return (
    <section id="gallery" className="section-shell" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="gallery-heading"
          eyebrow="Gallery"
          title="Gallery"
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                activeCategory === category
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-border bg-background text-muted-foreground hover:text-foreground",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <p className="surface-card p-5 text-sm text-muted-foreground">No gallery items in this category yet.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <Reveal key={item.id} delayMs={index * 45}>
                <button
                  type="button"
                  onClick={() => setSelectedItemId(item.id)}
                  className="group surface-card block overflow-hidden p-0 text-left"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-background/85 px-2 py-1 text-xs font-medium text-foreground backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.caption}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}

        <Dialog open={selectedItem !== null} onOpenChange={(open) => !open && setSelectedItemId(null)}>
          <DialogContent className="max-w-4xl overflow-hidden p-0">
            {selectedItem ? (
              <>
                <div className="relative bg-muted">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.alt}
                    className="max-h-[70vh] w-full object-contain"
                    loading="eager"
                    decoding="sync"
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    onClick={goToPrevious}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    onClick={goToNext}
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </Button>
                </div>

                <DialogHeader className="p-6 pt-4 text-left">
                  <DialogTitle className="font-display text-xl">{selectedItem.category}</DialogTitle>
                  <DialogDescription>{selectedItem.caption}</DialogDescription>
                </DialogHeader>
              </>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
