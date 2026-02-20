import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Sentiment Analysis Engine",
    description: "Real-time NLP pipeline processing 10K+ tweets/min for brand monitoring. Built with transformer models and deployed on AWS Lambda for scalable inference.",
    tags: ["NLP", "Python", "AWS", "Transformers"],
  },
  {
    title: "Predictive Maintenance Model",
    description: "Time-series forecasting model reducing equipment downtime by 35%. Integrated with IoT sensor data streams for real-time anomaly detection.",
    tags: ["Time Series", "XGBoost", "IoT", "Docker"],
  },
  {
    title: "Medical Image Classification API",
    description: "Production-grade computer vision API achieving 97.2% accuracy on medical imaging data with a custom CNN architecture and explainability layer.",
    tags: ["Computer Vision", "PyTorch", "FastAPI", "GCP"],
  },
  {
    title: "Customer Churn Dashboard",
    description: "Interactive analytics dashboard with ML-powered churn predictions. Enabled targeted interventions that reduced churn by 22%.",
    tags: ["Tableau", "Scikit-learn", "SQL", "Analytics"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-sm tracking-widest uppercase mb-3 font-body">Projects</p>
        <h2 className="section-heading">Featured Work</h2>
        <p className="section-subtitle">
          Selected projects showcasing end-to-end data science solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-xl group-hover:text-primary transition-colors">
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
                    className="text-xs font-body px-3 py-1 rounded-full bg-primary/10 text-primary"
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
