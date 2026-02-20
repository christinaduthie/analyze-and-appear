import { Brain, Database, BarChart3, Code2 } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Machine Learning", desc: "Deep learning, NLP, computer vision" },
  { icon: Database, label: "Data Engineering", desc: "ETL pipelines, cloud infrastructure" },
  { icon: BarChart3, label: "Analytics", desc: "Statistical modeling, A/B testing" },
  { icon: Code2, label: "Development", desc: "Python, R, SQL, TensorFlow" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary font-normal text-lg block mb-2">// about</span>
          Who I Am
        </h2>
        <p className="text-secondary-foreground font-body max-w-2xl mb-16 leading-relaxed">
          With 5+ years of experience in data science, I build end-to-end ML solutions that drive business impact.
          From exploratory analysis to production deployment, I bridge the gap between data and decisions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors group"
            >
              <item.icon className="text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(174_72%_50%_/_0.5)] transition-all" size={28} />
              <h3 className="font-display text-sm font-semibold mb-1">{item.label}</h3>
              <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
