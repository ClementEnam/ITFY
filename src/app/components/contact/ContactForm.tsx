"use client";

import Link from "next/link";
import { useEffect, useId, useState, type FormEvent } from "react";
import { CONTACT } from "../footer/footerContent";
import { TOPICS } from "./topics";

type Errors = Partial<Record<"topic" | "name" | "email" | "message", string>>;

const field =
  "w-full rounded-2xl bg-paper px-5 py-3.5 text-[0.9375rem] text-ink ring-1 ring-line transition-shadow placeholder:text-ink/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ink aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-kente-red";

// Contact form with a topic picker. There's no email backend yet, so sending
// opens the visitor's email app with everything filled in, addressed to ITFY.
export default function ContactForm() {
  const uid = useId();
  const [topic, setTopic] = useState("");
  const [values, setValues] = useState({ name: "", email: "", phone: "", organisation: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  // Pre-select a topic from links like /contact?topic=volunteering
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("topic");
    if (fromUrl && TOPICS.some((t) => t.id === fromUrl)) setTopic(fromUrl);
  }, []);

  const current = TOPICS.find((t) => t.id === topic);
  const set = (key: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key as keyof Errors]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  function validate(): Errors {
    const e: Errors = {};
    if (!topic) e.topic = "Choose what your message is about.";
    if (!values.name.trim()) e.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = "Enter an email address like name@example.com.";
    if (values.message.trim().length < 10) e.message = "Add a little more detail so we can help.";
    return e;
  }

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById(`${uid}-${Object.keys(e)[0]}`)?.focus();
      return;
    }
    const subject = `${current?.label ?? "Enquiry"}: ${values.name}`;
    const body = [
      values.message.trim(),
      "",
      "—",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone && `Phone: ${values.phone}`,
      values.organisation && `Organisation: ${values.organisation}`,
      `Topic: ${current?.label}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (sent) {
    return (
      <div className="animate-hero-rise rounded-[2rem] bg-white p-8 ring-1 ring-line sm:p-10 motion-reduce:animate-none" role="status">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-kente-green text-white">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7">
            <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
          </svg>
        </span>
        <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.03em] text-ink">Your message is ready to send</h2>
        <p className="mt-3 max-w-[48ch] text-[0.9375rem] leading-relaxed text-ink/70">
          Your email app should have opened with the message filled in. Press send there to reach us.
        </p>
        <p className="mt-6 text-[0.9375rem] text-ink/70">
          Nothing opened? Email us directly at{" "}
          <a href={`mailto:${CONTACT.email}`} className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
            {CONTACT.email}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="rounded-full bg-ink px-6 py-3 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            {copied ? "Email address copied" : "Copy email address"}
          </button>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="rounded-full bg-white px-6 py-3 text-[0.9375rem] font-semibold text-ink ring-1 ring-line transition-colors hover:ring-ink"
          >
            Edit message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[2rem] bg-white p-6 ring-1 ring-line sm:p-10">
      {/* ---------- 1. Topic ---------- */}
      <fieldset>
        <legend className="text-lg font-bold text-ink">What's this about?</legend>
        <div className="mt-4 flex flex-wrap gap-2" role="radiogroup" aria-describedby={errors.topic ? `${uid}-topic-err` : undefined}>
          {TOPICS.map((t, i) => {
            const on = t.id === topic;
            return (
              <label
                key={t.id}
                className={`cursor-pointer rounded-full px-4 py-2.5 text-sm font-semibold ring-1 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold ${
                  on ? "bg-ink text-white ring-ink" : "bg-paper text-ink/75 ring-line hover:text-ink hover:ring-ink/40"
                }`}
              >
                <input
                  id={i === 0 ? `${uid}-topic` : undefined}
                  type="radio"
                  name="topic"
                  value={t.id}
                  checked={on}
                  onChange={() => {
                    setTopic(t.id);
                    setErrors((er) => ({ ...er, topic: undefined }));
                  }}
                  className="sr-only"
                />
                {t.label}
              </label>
            );
          })}
        </div>
        {errors.topic && (
          <p id={`${uid}-topic-err`} className="mt-3 text-sm font-medium text-kente-red">
            {errors.topic}
          </p>
        )}

        {/* hint + shortcut for the chosen topic */}
        {current && (
          <div key={current.id} className="mt-5 animate-hero-rise rounded-2xl bg-gold/15 p-5 motion-reduce:animate-none" aria-live="polite">
            <p className="text-[0.9375rem] leading-relaxed text-ink/80">{current.hint}</p>
            {current.shortcut &&
              (current.shortcut.external ? (
                <a
                  href={current.shortcut.href}
                  className="mt-3 inline-block text-[0.9375rem] font-semibold text-ink underline decoration-gold decoration-[3px] underline-offset-[6px] hover:decoration-ink"
                >
                  {current.shortcut.label}
                </a>
              ) : (
                <Link
                  href={current.shortcut.href}
                  className="mt-3 inline-block text-[0.9375rem] font-semibold text-ink underline decoration-gold decoration-[3px] underline-offset-[6px] hover:decoration-ink"
                >
                  {current.shortcut.label}
                </Link>
              ))}
          </div>
        )}
      </fieldset>

      {/* ---------- 2. Details ---------- */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {(
          [
            ["name", "Your name", "text", "name", true],
            ["email", "Email address", "email", "email", true],
            ["phone", "Phone number", "tel", "tel", false],
            ["organisation", "Organisation", "text", "organization", false],
          ] as const
        ).map(([key, label, type, auto, required]) => (
          <div key={key}>
            <label htmlFor={`${uid}-${key}`} className="mb-2 block text-sm font-semibold text-ink">
              {label} {!required && <span className="font-normal text-ink/50">(optional)</span>}
            </label>
            <input
              id={`${uid}-${key}`}
              type={type}
              autoComplete={auto}
              value={values[key]}
              onChange={set(key)}
              aria-invalid={!!errors[key as keyof Errors]}
              aria-describedby={errors[key as keyof Errors] ? `${uid}-${key}-err` : undefined}
              className={field}
            />
            {errors[key as keyof Errors] && (
              <p id={`${uid}-${key}-err`} className="mt-2 text-sm font-medium text-kente-red">
                {errors[key as keyof Errors]}
              </p>
            )}
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-message`} className="mb-2 block text-sm font-semibold text-ink">
            Your message
          </label>
          <textarea
            id={`${uid}-message`}
            rows={6}
            value={values.message}
            onChange={set("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? `${uid}-message-err` : undefined}
            placeholder="Tell us a little about what you need"
            className={`${field} resize-y`}
          />
          {errors.message && (
            <p id={`${uid}-message-err`} className="mt-2 text-sm font-medium text-kente-red">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[40ch] text-sm leading-relaxed text-ink/55">
          Sending opens your email app with this message ready to go to {CONTACT.email}.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-[0.9375rem] font-bold text-ink transition-colors hover:bg-gold-soft"
        >
          Send message
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
            <path d="M7.3 15.7a1 1 0 0 1 0-1.4l4.3-4.3-4.3-4.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
}
