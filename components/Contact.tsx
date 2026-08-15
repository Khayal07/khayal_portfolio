"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  const { identity } = portfolio;
  const email = identity.email;

  const [name, setName] = useState("");
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\nReply to: ${sender}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClasses =
    "w-full rounded-xl border border-base-border bg-base-surface px-4 py-3 text-sm text-white placeholder:text-muted outline-none transition-all duration-300 focus:border-accent-violet/60 focus:shadow-glow-sm";

  return (
    <section id="contact" className="section-anchor py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="contact"
          title="Let&apos;s Work Together"
          subtitle="Have a project in mind or want to chat about AI systems, RAG pipelines, or backend architecture? Reach out."
        />

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <a
            href={`mailto:${email}`}
            className="glass group flex flex-col items-start justify-between gap-6 rounded-2xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/50 hover:shadow-glow"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-base-border bg-base-elevated">
              <Mail size={20} className="text-accent-cyan" />
            </div>
            <div>
              <p className="text-sm font-medium text-white group-hover:text-accent-violet">
                {email}
              </p>
              <p className="mt-1 text-xs text-muted">
                Prefer email? Write to me directly — no forms required.
              </p>
            </div>
          </a>

          <form
            onSubmit={handleSubmit}
            className="glass flex flex-col gap-4 rounded-2xl p-6 shadow-card"
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={inputClasses}
              />
              <input
                type="email"
                required
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                placeholder="Your email"
                className={inputClasses}
              />
            </div>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project…"
              className={`${inputClasses} resize-none`}
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-cyan px-6 py-3 text-sm font-medium text-white shadow-glow-sm transition-all duration-300 hover:shadow-glow hover:brightness-110"
            >
              <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              {sent ? "Opening your email client…" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}