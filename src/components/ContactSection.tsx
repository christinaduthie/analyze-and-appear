import { Mail, Linkedin, Github, FileText } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:samuel@example.com" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: FileText, label: "Resume", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-primary text-sm tracking-widest uppercase mb-3 font-body">Contact</p>
        <h2 className="section-heading">Let's Work Together</h2>
        <p className="text-muted-foreground font-body max-w-lg mx-auto mb-12 leading-relaxed">
          Open to collaborations, research opportunities, and interesting data challenges.
          Feel free to reach out.
        </p>

        <div className="flex justify-center gap-8">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl border border-border bg-card flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-md transition-all">
                <item.icon size={22} />
              </div>
              <span className="text-xs font-body font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
