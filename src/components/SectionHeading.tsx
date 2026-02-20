interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ id, eyebrow, title, description }: SectionHeadingProps) => {
  return (
    <header className="mb-10">
      <p className="section-kicker">{eyebrow}</p>
      <h2 id={id} className="section-heading">
        {title}
      </h2>
      {description ? <p className="section-subtitle">{description}</p> : null}
    </header>
  );
};

export default SectionHeading;
