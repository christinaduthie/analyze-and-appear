import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="w-28 h-28 rounded-full bg-primary/10 mx-auto mb-8 flex items-center justify-center">
          <span className="text-primary font-display text-4xl">SR</span>
        </div>
        <p className="font-body text-primary text-sm tracking-widest uppercase mb-4 animate-fade-in">
          Data Scientist
        </p>
        <h1 className="text-5xl md:text-6xl font-display mb-6 text-foreground animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          Samuel Rolands
        </h1>
        <p className="text-lg text-muted-foreground font-body font-light max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Transforming complex data into clear, actionable insights. Specializing in machine learning, statistical modeling, and data-driven strategy.
        </p>
        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground font-body text-sm rounded-lg hover:bg-primary/90 transition-colors">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-border text-foreground font-body text-sm rounded-lg hover:border-primary/50 transition-colors">
            Get in Touch
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
