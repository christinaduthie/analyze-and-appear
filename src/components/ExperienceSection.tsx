const experiences = [
  {
    role: "Senior Data Scientist",
    company: "TechCorp Inc.",
    period: "2022 – Present",
    description: "Leading a team of 4 data scientists building ML models for customer analytics. Reduced churn by 22% through predictive modeling and automated intervention systems.",
  },
  {
    role: "Data Scientist",
    company: "DataFlow Solutions",
    period: "2020 – 2022",
    description: "Designed and deployed NLP pipelines processing 50K+ documents daily. Built real-time dashboards for executive decision-making using Python and cloud services.",
  },
  {
    role: "Junior Data Scientist",
    company: "Analytics Lab",
    period: "2018 – 2020",
    description: "Conducted statistical analysis and A/B testing for marketing campaigns. Developed forecasting models that improved inventory planning accuracy by 30%.",
  },
  {
    role: "Data Analyst Intern",
    company: "StartUp Hub",
    period: "2017 – 2018",
    description: "Created automated reporting dashboards and performed exploratory data analysis. Collaborated with product teams to define KPIs and tracking frameworks.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-sm tracking-widest uppercase mb-3 font-body">Experience</p>
        <h2 className="section-heading">Professional Timeline</h2>
        <p className="section-subtitle">
          A track record of delivering impactful data solutions across industries.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-2 z-10" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                    <span className="text-primary text-xs font-body font-medium tracking-wide uppercase">
                      {exp.period}
                    </span>
                    <h3 className="font-display text-xl mt-1">{exp.role}</h3>
                    <p className="text-primary/70 text-sm font-body font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
