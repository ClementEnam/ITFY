"use client";

import Link from "next/link";
import { useEffect, useId, useState, type ReactNode } from "react";
import { CONTACT } from "../footer/footerContent";
import { AGES, COUNTRIES, EQUIPMENT_TYPES, HEARD_FROM, READINESS, SECTORS, WINDOWS } from "./offer";

const STORAGE_KEY = "itfy-offer-equipment";
const STEPS = ["About your organisation", "About the equipment", "Logistics and consent"];

const field =
  "w-full rounded-2xl bg-paper px-5 py-3.5 text-[0.9375rem] text-ink ring-1 ring-line transition-shadow placeholder:text-ink/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ink aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-kente-red";

// Fields required on each step
const REQUIRED: string[][] = [
  ["org", "country", "city", "name", "role", "email"],
  ["quantity", "age", "released", "bios"],
  ["address", "window", "consent"],
];

export default function OfferForm() {
  const uid = useId();
  const [step, setStep] = useState(0);
  const [v, setV] = useState<Record<string, string>>({});
  const [types, setTypes] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loaded, setLoaded] = useState(false); // don't save until saved answers have been restored

  // restore saved answers (wrapped: storage can be unavailable)
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved) {
        setV(saved.v ?? {});
        setTypes(saved.types ?? []);
        setStep(saved.step ?? 0);
      }
    } catch {}
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ v, types, step }));
    } catch {}
  }, [v, types, step, loaded]);

  const set = (k: string) => (e: { target: { value: string } }) => {
    setV((o) => ({ ...o, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: "" }));
  };

  function validate(s: number) {
    const e: Record<string, string> = {};
    REQUIRED[s].forEach((k) => {
      if (k === "consent" ? v[k] !== "yes" : !v[k]?.trim()) e[k] = "This is required.";
    });
    if (s === 0 && v.email && !/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter an email address like name@company.com.";
    if (s === 1 && types.length === 0) e.types = "Choose at least one type of equipment.";
    if (s === 1 && v.quantity && !(Number(v.quantity) > 0)) e.quantity = "Enter a number above zero.";
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) document.getElementById(`${uid}-${first}`)?.focus();
    return !first;
  }

  function next() {
    if (!validate(step)) return;
    setStep((s) => s + 1);
    document.getElementById(`${uid}-top`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submit() {
    if (!validate(2)) return;
    const lines: (string | false | undefined)[] = [
      "ORGANISATION",
      `${v.org}${v.sector ? ` (${v.sector})` : ""}, ${v.city}, ${v.country}`,
      `Contact: ${v.name}, ${v.role}`,
      `Email: ${v.email}${v.phone ? ` | Phone: ${v.phone}` : ""}`,
      !!v.heard && `Heard about us: ${v.heard}`,
      "",
      "EQUIPMENT",
      `Types: ${types.join(", ")}`,
      `Approximate quantity: ${v.quantity}`,
      `Typical age: ${v.age}`,
      !!v.models && `Models: ${v.models}`,
      `Released from device management: ${v.released}`,
      `BIOS/EFI passwords cleared: ${v.bios}`,
      "",
      "LOGISTICS",
      `Collection address: ${v.address}`,
      `Preferred timing: ${v.window}`,
      !!v.notes && `Notes: ${v.notes}`,
      "",
      "I agree to be contacted about this offer and to the Laptop Bank data handling statement.",
      "(If you have an asset list, please attach it to this email.)",
    ];
    const body = lines.filter((l): l is string => typeof l === "string").join("\n");
    const subject = `Equipment offer: ${v.org} (${v.quantity} items)`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  function reset() {
    setV({});
    setTypes([]);
    setStep(0);
    setSent(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }

  // plain functions (not components) so inputs keep focus while typing
  const err = (k: string) =>
    errors[k] ? (
      <p id={`${uid}-${k}-err`} className="mt-2 text-sm font-medium text-kente-red">
        {errors[k]}
      </p>
    ) : null;

  const fieldWrap = (k: string, label: string, required: boolean, children: ReactNode) => (
    <div>
      <label htmlFor={`${uid}-${k}`} className="mb-2 block text-sm font-semibold text-ink">
        {label} {required ? <span className="text-kente-red" aria-hidden="true">*</span> : <span className="font-normal text-ink/50">(optional)</span>}
      </label>
      {children}
      {err(k)}
    </div>
  );

  const input = (k: string, type = "text", auto?: string) => (
    <input
      id={`${uid}-${k}`}
      type={type}
      autoComplete={auto}
      value={v[k] ?? ""}
      onChange={set(k)}
      aria-invalid={!!errors[k]}
      aria-describedby={errors[k] ? `${uid}-${k}-err` : undefined}
      className={field}
    />
  );

  const select = (k: string, options: string[]) => (
    <div className="relative">
      <select
        id={`${uid}-${k}`}
        value={v[k] ?? ""}
        onChange={set(k)}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `${uid}-${k}-err` : undefined}
        className={`${field} appearance-none pr-11`}
      >
        <option value="">Please choose</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50">
        <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z" />
      </svg>
    </div>
  );

  if (sent) {
    return (
      <div role="status" className="rounded-[2rem] bg-white p-8 ring-1 ring-line sm:p-10">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-kente-green text-white">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7">
            <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
          </svg>
        </span>
        <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.03em] text-ink">Your offer is ready to send</h2>
        <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink/70">
          Your email app should have opened with every answer filled in. Attach your asset list if you have one, then press send.
        </p>
        <p className="mt-4 text-[0.9375rem] text-ink/70">
          Nothing opened? Email{" "}
          <a href={`mailto:${CONTACT.email}`} className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
            {CONTACT.email}
          </a>{" "}
          directly.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={() => setSent(false)} className="rounded-full bg-ink px-6 py-3 text-[0.9375rem] font-semibold text-white hover:bg-ink-soft">
            Back to my answers
          </button>
          <button type="button" onClick={reset} className="rounded-full bg-white px-6 py-3 text-[0.9375rem] font-semibold text-ink ring-1 ring-line hover:ring-ink">
            Start a new offer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id={`${uid}-top`} className="scroll-mt-44 rounded-[2rem] bg-white p-6 ring-1 ring-line sm:p-10">
      {/* progress */}
      <p className="text-sm font-bold text-ink/60" aria-live="polite">
        Step {step + 1} of {STEPS.length}
      </p>
      <ol className="mt-3 grid grid-cols-3 gap-2">
        {STEPS.map((s, i) => (
          <li key={s}>
            <span className={`block h-1.5 rounded-full transition-colors duration-500 ${i <= step ? "bg-gold" : "bg-line"}`} />
            <span className={`mt-2 hidden text-xs sm:block ${i === step ? "font-bold text-ink" : "text-ink/50"}`}>{s}</span>
          </li>
        ))}
      </ol>

      <h2 key={step} className="mt-8 animate-hero-rise text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] text-ink motion-reduce:animate-none">
        {STEPS[step]}
      </h2>
      <p className="mt-2 text-sm text-ink/55">
        Fields marked <span className="text-kente-red">*</span> are required.
      </p>

      <div key={`s${step}`} className="mt-8 animate-hero-rise motion-reduce:animate-none">
        {step === 0 && (
          <div className="grid gap-5 sm:grid-cols-2">
            {fieldWrap("org", "Organisation name", true, input("org", "text", "organization"))}
            {fieldWrap("sector", "Sector", false, select("sector", SECTORS))}
            {fieldWrap("country", "Country", true, select("country", COUNTRIES))}
            {fieldWrap("city", "City", true, input("city", "text", "address-level2"))}
            {fieldWrap("name", "Your name", true, input("name", "text", "name"))}
            {fieldWrap("role", "Your role", true, input("role", "text", "organization-title"))}
            {fieldWrap("email", "Work email", true, input("email", "email", "email"))}
            {fieldWrap("phone", "Phone", false, input("phone", "tel", "tel"))}
            <div className="sm:col-span-2">
              {fieldWrap("heard", "How did you hear about us", false, select("heard", HEARD_FROM))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-6">
            <fieldset id={`${uid}-types`} tabIndex={-1} className="outline-none">
              <legend className="mb-3 text-sm font-semibold text-ink">
                What are you offering? <span className="text-kente-red" aria-hidden="true">*</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {EQUIPMENT_TYPES.map((t) => {
                  const on = types.includes(t);
                  return (
                    <label
                      key={t}
                      className={`cursor-pointer rounded-full px-4 py-2.5 text-sm font-semibold ring-1 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold ${
                        on ? "bg-ink text-white ring-ink" : "bg-paper text-ink/75 ring-line hover:ring-ink/40"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={on}
                        onChange={() => {
                          setTypes((ts) => (on ? ts.filter((x) => x !== t) : [...ts, t]));
                          setErrors((er) => ({ ...er, types: "" }));
                        }}
                      />
                      {t}
                    </label>
                  );
                })}
              </div>
              {err("types")}
            </fieldset>
            <div className="grid gap-5 sm:grid-cols-2">
              {fieldWrap("quantity", "Approximate number of items", true, input("quantity", "number"))}
              {fieldWrap("age", "Typical age", true, select("age", AGES))}
              <div className="sm:col-span-2">
                {fieldWrap("models", "Models, if you know them", false, (
<textarea
                    id={`${uid}-models`}
                    rows={3}
                    value={v.models ?? ""}
                    onChange={set("models")}
                    placeholder="e.g. 40 × Dell Latitude 5490, 12 × HP EliteBook 840 G5"
                    className={`${field} resize-y`}
                  />
))}
              </div>
              {fieldWrap("released", "Released from device management?", true, select("released", READINESS))}
              {fieldWrap("bios", "BIOS or EFI passwords cleared?", true, select("bios", READINESS))}
            </div>
            <p className="rounded-2xl bg-gold/15 p-5 text-[0.9375rem] leading-relaxed text-ink/80">
              Not sure? That's fine. These are the two most common reasons a donation can't go ahead, so we'll check them with your IT team.{" "}
              <Link href="/laptop-bank/what-we-accept" className="font-semibold underline decoration-gold decoration-2 underline-offset-4">
                See our minimums
              </Link>
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              {fieldWrap("address", "Collection address", true, (
<textarea id={`${uid}-address`} rows={3} value={v.address ?? ""} onChange={set("address")} aria-invalid={!!errors.address} className={`${field} resize-y`} />
))}
            </div>
            {fieldWrap("window", "When could equipment be collected?", true, select("window", WINDOWS))}
            <div className="sm:col-span-2">
              {fieldWrap("notes", "Anything else we should know", false, (
<textarea id={`${uid}-notes`} rows={3} value={v.notes ?? ""} onChange={set("notes")} className={`${field} resize-y`} />
))}
            </div>
            <div className="sm:col-span-2">
              <label className="flex cursor-pointer gap-4 rounded-2xl bg-paper p-5 ring-1 ring-line has-[:checked]:ring-2 has-[:checked]:ring-ink">
                <input
                  id={`${uid}-consent`}
                  type="checkbox"
                  checked={v.consent === "yes"}
                  onChange={(e) => {
                    setV((o) => ({ ...o, consent: e.target.checked ? "yes" : "" }));
                    setErrors((er) => ({ ...er, consent: "" }));
                  }}
                  aria-invalid={!!errors.consent}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-ink)]"
                />
                <span className="text-[0.9375rem] leading-relaxed text-ink/80">
                  I agree to IT For Youth Ghana contacting me about this offer, and to my details being handled as described in the{" "}
                  <Link href="/laptop-bank/data-security" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
                    Laptop Bank data handling statement
                  </Link>
                  . <span className="text-kente-red" aria-hidden="true">*</span>
                </span>
              </label>
              {err("consent")}
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 flex flex-col-reverse gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {step > 0 && (
            <button type="button" onClick={() => setStep((s) => s - 1)} className="rounded-full px-5 py-3 text-[0.9375rem] font-semibold text-ink ring-1 ring-line hover:ring-ink">
              Back
            </button>
          )}
          <p className="text-sm text-ink/55">Your answers are saved on this device as you go.</p>
        </div>
        <button
          type="button"
          onClick={step < 2 ? next : submit}
          className="rounded-full bg-gold px-8 py-4 text-[0.9375rem] font-bold text-ink transition-colors hover:bg-gold-soft"
        >
          {step < 2 ? "Continue" : "Send offer"}
        </button>
      </div>
    </div>
  );
}
