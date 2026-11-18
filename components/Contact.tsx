"use client";

import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { useI18n } from "@/components/LanguageProvider";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const LIMITS = { name: 100, email: 254, message: 5000 };
const COOLDOWN_MS = 30_000;

/** Single line, no control characters: the name ends up in the email subject */
const clean = (value: string, max: number) =>
  value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim().slice(0, max);

const inputClass =
  "focus-ring w-full rounded-md border border-line bg-card px-3.5 py-2.5 text-sm text-ink placeholder:text-silver/50 transition-colors duration-200 focus:border-accent";

export function Contact() {
  const { identity, socials, contact } = portfolio;
  const { t } = useI18n();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [statusText, setStatusText] = useState("");
  const [botcheck, setBotcheck] = useState(false);
  const [lastSent, setLastSent] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Hidden field only bots fill in: pretend it worked and send nothing
    if (botcheck) {
      setStatusText(t("Your message has been sent successfully!"));
      setStatus("success");
      return;
    }

    if (Date.now() - lastSent < COOLDOWN_MS) {
      setStatusText(t("Please wait a moment before sending another message."));
      setStatus("error");
      return;
    }

    const safeName = clean(name, LIMITS.name);
    const safeEmail = clean(email, LIMITS.email);
    const safeMessage = message.trim().slice(0, LIMITS.message);
    if (!safeName || !safeEmail || !safeMessage) {
      setStatusText(t("Please fill in all fields."));
      setStatus("error");
      return;
    }

    setStatus("submitting");

    if (!contact.formAccessKey || contact.formAccessKey.startsWith("YOUR_")) {
      setStatusText(t("Contact form is not configured yet."));
      setStatus("error");
      return;
    }

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: contact.formAccessKey,
          subject: `Portfolio message from ${safeName}`,
          from_name: safeName,
          email: safeEmail,
          message: safeMessage,
          botcheck: false,
        }),
      });
      const result = (await response.json()) as { success: boolean };

      if (result.success) {
        setName("");
        setEmail("");
        setMessage("");
        setLastSent(Date.now());
        setStatusText(t("Your message has been sent successfully!"));
        setStatus("success");
      } else {
        setStatusText(t("Something went wrong. Please try again later."));
        setStatus("error");
      }
    } catch {
      setStatusText(t("Something went wrong. Please try again later."));
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-anchor border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow={t("contact")}
            title={t("Let's build something together.")}
            subtitle={t(
              "Have a project in mind, or want to talk about RAG, multi-agent systems, or backend architecture? Reach out."
            )}
          />

          <form onSubmit={handleSubmit} className="mt-10 w-full space-y-4 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-mono text-xs text-silver"
                >
                  {t("Your name")}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  maxLength={LIMITS.name}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={t("Your name")}
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-mono text-xs text-silver"
                >
                  {t("Your email")}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  maxLength={LIMITS.email}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t("Your email")}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block font-mono text-xs text-silver"
              >
                {t("Your message")}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                maxLength={LIMITS.message}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={t("Your message")}
                className={`${inputClass} resize-none`}
              />
            </div>

            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              checked={botcheck}
              onChange={(event) => setBotcheck(event.target.checked)}
              className="hidden"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-card transition-colors duration-200 hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  {t("Sending...")}
                </>
              ) : (
                <>
                  <Send size={15} />
                  {t("Send Message")}
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-status">
                <CheckCircle2 size={15} />
                {statusText}
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-danger">
                <AlertCircle size={15} />
                {statusText}
              </p>
            )}
          </form>

          <a
            href={`mailto:${identity.email}`}
            className="focus-ring mt-8 inline-flex items-center gap-1.5 font-mono text-xs text-silver transition-colors duration-200 hover:text-ink"
          >
            {identity.email}
            <ArrowUpRight size={12} />
          </a>

          <div className="mt-4 flex items-center gap-2">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-silver transition-colors duration-200 hover:border-accent hover:text-ink"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-silver transition-colors duration-200 hover:border-accent hover:text-ink"
            >
              <LinkedinIcon size={14} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}