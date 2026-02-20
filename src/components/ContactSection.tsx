import { FormEvent, useMemo, useState } from "react";
import { Github, GraduationCap, Linkedin, Mail, Trophy } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

type SubmissionMode = "mailto" | "backend";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

const getSocialIcon = (label: string) => {
  const normalized = label.toLowerCase();

  if (normalized.includes("linkedin")) {
    return Linkedin;
  }

  if (normalized.includes("github")) {
    return Github;
  }

  if (normalized.includes("kaggle")) {
    return Trophy;
  }

  if (normalized.includes("scholar")) {
    return GraduationCap;
  }

  return Mail;
};

const validateForm = (values: ContactFormState) => {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  const emailValue = values.email.trim();
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

  if (!emailValue) {
    errors.email = "Please enter your email address.";
  } else if (!isEmailValid) {
    errors.email = "Please use a valid email format.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please add at least 20 characters so I have enough context.";
  }

  return errors;
};

const ContactSection = () => {
  const [mode, setMode] = useState<SubmissionMode>("mailto");
  const [formValues, setFormValues] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [feedback, setFeedback] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const backendConfigured = Boolean(portfolioData.contact.form.backendEndpoint.trim());

  const modeDescription = useMemo(() => {
    if (mode === "mailto") {
      return "Submit opens your default email client with a prefilled message.";
    }

    if (backendConfigured) {
      return "Submit sends this form to your configured backend endpoint.";
    }

    return "No backend endpoint set yet. Add one in src/data/portfolioData.ts to enable this mode.";
  }, [backendConfigured, mode]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setFeedback("Please resolve the highlighted fields.");
      return;
    }

    setIsSubmitting(true);
    setFeedback("");

    try {
      if (mode === "mailto") {
        const subject = encodeURIComponent(`Portfolio inquiry from ${formValues.name.trim()}`);
        const body = encodeURIComponent(
          `Name: ${formValues.name.trim()}\nEmail: ${formValues.email.trim()}\n\n${formValues.message.trim()}`,
        );
        const recipient = portfolioData.contact.form.mailtoRecipient;

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        setFeedback("Your email client was opened with a drafted message.");
        setFormValues(initialFormState);
        setErrors({});
        return;
      }

      const endpoint = portfolioData.contact.form.backendEndpoint;

      if (!endpoint.trim()) {
        setFeedback("Backend mode is not configured yet. Add backendEndpoint in the data file first.");
        return;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Backend submission failed");
      }

      setFeedback("Message sent successfully.");
      setFormValues(initialFormState);
      setErrors({});
    } catch {
      setFeedback("Could not send right now. Please try again or use mailto mode.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell bg-muted/40" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let's work together"
        />

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">{portfolioData.contact.prompt}</p>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <form onSubmit={handleSubmit} className="surface-card p-6" noValidate>
              <fieldset className="mb-6">
                <legend className="mb-2 text-sm font-medium text-foreground">Submission mode</legend>
                <div className="inline-flex rounded-lg border border-border bg-background p-1" role="radiogroup">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={mode === "mailto"}
                    onClick={() => setMode("mailto")}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm transition-colors",
                      mode === "mailto" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    Mailto Fallback
                  </button>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={mode === "backend"}
                    onClick={() => setMode("backend")}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm transition-colors",
                      mode === "backend" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    Backend API
                  </button>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{modeDescription}</p>
              </fieldset>

              <div className="grid gap-5">
                <div>
                  <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    value={formValues.name}
                    onChange={(event) => setFormValues((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={cn(errors.name && "border-destructive")}
                  />
                  {errors.name ? (
                    <p id="contact-name-error" className="mt-1 text-xs text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formValues.email}
                    onChange={(event) => setFormValues((current) => ({ ...current, email: event.target.value }))}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={cn(errors.email && "border-destructive")}
                  />
                  {errors.email ? (
                    <p id="contact-email-error" className="mt-1 text-xs text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    value={formValues.message}
                    onChange={(event) => setFormValues((current) => ({ ...current, message: event.target.value }))}
                    placeholder="Share your project, role, or collaboration idea"
                    className={cn("min-h-32", errors.message && "border-destructive")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                  />
                  {errors.message ? (
                    <p id="contact-message-error" className="mt-1 text-xs text-destructive">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-xs text-muted-foreground">or email directly at {portfolioData.person.email}</p>
                </div>

                <p aria-live="polite" className="text-sm text-muted-foreground">
                  {feedback}
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delayMs={70}>
            <aside className="space-y-4">
              <div className="surface-card p-5">
                <h3 className="mb-3 text-lg font-semibold text-foreground">Socials</h3>
                <ul className="space-y-2">
                  {portfolioData.contact.socialLinks.map((link) => {
                    const Icon = getSocialIcon(link.label);

                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Icon size={16} className="text-primary" />
                          <span>{link.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="surface-card p-5">
                <h3 className="mb-3 text-lg font-semibold text-foreground">Backend integration</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {portfolioData.contact.backendInstructions.map((instruction) => (
                    <li key={instruction} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
