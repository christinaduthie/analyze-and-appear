import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-display text-primary text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          &gt; Hello, World
        </p>
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          Alex <span className="text-gradient">Chen</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary-foreground font-body font-light max-w-2xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Data Scientist & Machine Learning Engineer
        </p>
        <p className="text-muted-foreground font-body max-w-xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
          Turning raw data into actionable insights. Specializing in NLP, computer vision, and predictive analytics.
        </p>
        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground font-display text-sm rounded-md glow hover:glow-strong transition-shadow">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-border text-foreground font-display text-sm rounded-md hover:border-primary/50 transition-colors">
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
