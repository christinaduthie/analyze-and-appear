import { Mail, Linkedin, Github, FileText } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:alex@example.com" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: FileText, label: "Resume", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary font-normal text-lg block mb-2">// contact</span>
          Let's Connect
        </h2>
        <p className="text-secondary-foreground font-body max-w-lg mx-auto mb-12">
          Open to collaborations, research opportunities, and interesting data challenges.
        </p>

        <div className="flex justify-center gap-6">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:glow transition-all">
                <item.icon size={20} />
              </div>
              <span className="text-xs font-display">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
