const skills = [
  { name: "Python", level: 95 },
  { name: "TensorFlow / PyTorch", level: 88 },
  { name: "SQL & Databases", level: 90 },
  { name: "Data Visualization", level: 85 },
  { name: "NLP", level: 82 },
  { name: "Cloud (AWS/GCP)", level: 78 },
  { name: "MLOps", level: 75 },
  { name: "Statistical Analysis", level: 92 },
];

const tools = ["Pandas", "NumPy", "Scikit-learn", "Spark", "Airflow", "Docker", "Git", "Tableau", "Power BI", "Jupyter", "FastAPI", "Linux"];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-sm tracking-widest uppercase mb-3 font-body">Skills</p>
        <h2 className="section-heading">Technical Expertise</h2>
        <p className="section-subtitle">
          Tools and technologies I use daily to solve complex data challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 mb-16">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-body text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-muted-foreground text-sm font-body">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-display text-xl mb-6">Tools & Frameworks</h3>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-sm font-body px-4 py-2 rounded-lg bg-muted text-secondary-foreground border border-border"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
