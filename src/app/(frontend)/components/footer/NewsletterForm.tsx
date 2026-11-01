"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "done" | "error";

// Posts { email } to /api/subscribe. Create that route (or a Payload
// "subscribers" collection) to actually store sign-ups.
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setMessage("Enter an email address like name@example.com.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setMessage("You're subscribed. Look out for our next update.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("We couldn't subscribe you just now. Please try again in a minute.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-xl">
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:rounded-full sm:bg-white/10 sm:p-1.5 sm:ring-1 sm:ring-white/15 sm:focus-within:ring-gold">
        <input
          id="footer-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          aria-describedby="footer-email-status"
          placeholder="Your email address"
          className="min-w-0 flex-1 rounded-full bg-white/10 px-5 py-3.5 text-[0.9375rem] text-white ring-1 ring-white/15 placeholder:text-white/45 focus:outline-none focus:ring-gold sm:bg-transparent sm:ring-0"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-gold px-7 py-3.5 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-gold-soft disabled:opacity-60"
        >
          {status === "sending" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      <p
        id="footer-email-status"
        role="status"
        className={`mt-3 min-h-6 pl-5 text-sm ${status === "error" ? "text-[#ff8a9a]" : "text-white/70"}`}
      >
        {status === "done" || status === "error" ? message : ""}
      </p>
    </form>
  );
}
