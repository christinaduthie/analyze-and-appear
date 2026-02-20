import { Brain, Database, BarChart3, Code2 } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Machine Learning", desc: "Deep learning, NLP, computer vision, and predictive modeling." },
  { icon: Database, label: "Data Engineering", desc: "ETL pipelines, data warehousing, and cloud infrastructure." },
  { icon: BarChart3, label: "Analytics", desc: "Statistical modeling, A/B testing, and business intelligence." },
  { icon: Code2, label: "Development", desc: "Python, R, SQL, TensorFlow, and production deployment." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-sm tracking-widest uppercase mb-3 font-body">About Me</p>
        <h2 className="section-heading">Driven by Data, Powered by Curiosity</h2>
        <p className="section-subtitle">
          I am a Data Scientist with 5+ years of experience building end-to-end machine learning solutions
          that drive measurable business impact. From exploratory analysis to production deployment,
          I bridge the gap between raw data and strategic decisions. I thrive on solving complex problems
          and communicating insights to both technical and non-technical stakeholders.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-display text-lg mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
