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

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary font-normal text-lg block mb-2">// skills</span>
          Tech Stack
        </h2>
        <p className="text-secondary-foreground font-body max-w-2xl mb-16">
          Tools and technologies I work with daily to solve complex data problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-display text-sm">{skill.name}</span>
                <span className="text-muted-foreground text-sm font-display">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
