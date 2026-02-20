import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

const Reveal = ({ children, className, delayMs = 0 }: RevealProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15, rootMargin: "0px 0px -80px 0px" });

  return (
    <div
      ref={ref}
      className={cn("reveal", isInView && "revealed", className)}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
