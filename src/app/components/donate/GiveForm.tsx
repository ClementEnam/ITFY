"use client";

import { useId, useState } from "react";
import { AMOUNTS, CURRENCY, FUNDS, PAYMENT_URL } from "./content";

// Choose a fund and an amount, then continue to the payment page.
// Without a payment link yet, it routes to the contact form instead.
export default function GiveForm() {
  const uid = useId();
  const [fund, setFund] = useState(FUNDS[0].id);
  const [amount, setAmount] = useState<number | null>(AMOUNTS[1]);
  const [custom, setCustom] = useState("");
  const [error, setError] = useState("");

  const value = custom ? Number(custom) : amount;
  const fundTitle = FUNDS.find((f) => f.id === fund)?.title ?? "";

  function onContinue() {
    if (!value || value <= 0 || Number.isNaN(value)) {
      setError("Choose an amount or enter your own.");
      return;
    }
    window.location.href = PAYMENT_URL || "/contact?topic=donation";
  }

  return (
    <div className="rounded-[2rem] bg-white p-6 ring-1 ring-line sm:p-9">
      {/* 1. fund */}
      <fieldset>
        <legend className="text-sm font-semibold text-ink/55">Two ways to give</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {FUNDS.map((f) => {
            const on = f.id === fund;
            return (
              <label
                key={f.id}
                className={`cursor-pointer rounded-[1.5rem] p-5 ring-2 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold ${
                  on ? "bg-gold/15 ring-gold" : "bg-paper ring-transparent hover:ring-line"
                }`}
              >
                <input type="radio" name="fund" value={f.id} checked={on} onChange={() => setFund(f.id)} className="sr-only" />
                <span className="flex items-center justify-between gap-3">
                  <span className="text-lg font-bold text-ink">{f.title}</span>
                  <span
                    aria-hidden="true"
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ring-2 ${on ? "bg-ink ring-ink" : "ring-line"}`}
                  >
                    {on && <span className="h-2 w-2 rounded-full bg-gold" />}
                  </span>
                </span>
                <span className="mt-2 block text-[15px] leading-relaxed text-ink/65">{f.text}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* 2. amount */}
      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-ink/55">Amount</legend>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {AMOUNTS.map((a) => {
            const on = !custom && amount === a;
            return (
              <button
                key={a}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setAmount(a);
                  setCustom("");
                  setError("");
                }}
                className={`rounded-full py-3.5 text-lg font-bold transition-colors ${
                  on ? "bg-ink text-white" : "bg-paper text-ink ring-1 ring-line hover:ring-ink"
                }`}
              >
                {CURRENCY}
                {a}
              </button>
            );
          })}
        </div>
        <label htmlFor={`${uid}-custom`} className="mt-4 block text-sm font-semibold text-ink">
          Or enter your own amount
        </label>
        <div className="relative mt-2">
          <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 font-bold text-ink/50">{CURRENCY}</span>
          <input
            id={`${uid}-custom`}
            inputMode="decimal"
            value={custom}
            onChange={(e) => {
              setCustom(e.target.value.replace(/[^\d.]/g, ""));
              setError("");
            }}
            aria-invalid={!!error}
            aria-describedby={error ? `${uid}-err` : undefined}
            className="w-full rounded-full bg-paper py-3.5 pl-10 pr-5 text-[15px] font-semibold text-ink ring-1 ring-line focus:bg-white focus:outline-none focus:ring-2 focus:ring-ink"
          />
        </div>
        {error && (
          <p id={`${uid}-err`} className="mt-2 text-sm font-medium text-kente-red">
            {error}
          </p>
        )}
      </fieldset>

      <button
        type="button"
        onClick={onContinue}
        className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold text-ink transition-colors hover:bg-gold-soft"
      >
        {value && value > 0 ? `Give ${CURRENCY}${value.toLocaleString("en-US")} to ${fundTitle}` : "Continue"}
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
          <path d="M7.3 15.7a1 1 0 0 1 0-1.4l4.3-4.3-4.3-4.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0z" />
        </svg>
      </button>
      <p className="mt-4 text-center text-sm text-ink/55">
        {PAYMENT_URL
          ? "You'll finish on our secure payment page."
          : "Online giving is being set up. Continue and our team will share how to complete your gift."}
      </p>
    </div>
  );
}
