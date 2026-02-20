import { useEffect, useRef, useState } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useInView<T extends HTMLElement = HTMLElement>(options: UseInViewOptions = {}) {
  const { once = true, threshold = 0.2, root = null, rootMargin = "0px" } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          setIsInView(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, root, rootMargin, threshold]);

  return { ref, isInView };
}
