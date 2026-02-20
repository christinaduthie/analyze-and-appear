import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Sentiment Analysis Engine",
    description: "Real-time NLP pipeline processing 10K+ tweets/min for brand monitoring. Built with transformers and deployed on AWS Lambda.",
    tags: ["NLP", "Python", "AWS", "Transformers"],
  },
  {
    title: "Predictive Maintenance Model",
    description: "Time-series forecasting model reducing equipment downtime by 35%. Integrated with IoT sensor data streams.",
    tags: ["Time Series", "XGBoost", "IoT", "Docker"],
  },
  {
    title: "Image Classification API",
    description: "Production-grade computer vision API achieving 97.2% accuracy on medical imaging data with custom CNN architecture.",
    tags: ["Computer Vision", "PyTorch", "FastAPI", "GCP"],
  },
  {
    title: "Customer Churn Dashboard",
    description: "Interactive analytics dashboard with ML-powered churn predictions. Reduced churn by 22% through targeted interventions.",
    tags: ["Tableau", "Scikit-learn", "SQL", "Analytics"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary font-normal text-lg block mb-2">// projects</span>
          Featured Work
        </h2>
        <p className="text-secondary-foreground font-body max-w-2xl mb-16">
          Selected projects showcasing end-to-end data science solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 text-muted-foreground">
                  <Github size={16} className="hover:text-primary cursor-pointer transition-colors" />
                  <ExternalLink size={16} className="hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm font-body mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-display px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
