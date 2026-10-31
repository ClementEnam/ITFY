import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/contact/ContactForm";
import { CONTACT, SOCIALS } from "../components/footer/footerContent";
import SocialIcon from "../components/footer/SocialIcon";
import { Arrow, container, SectionLabel } from "../components/home/ui";
import Reveal from "../components/who-we-are/Reveal";

export const metadata: Metadata = {
  title: "Contact us | IT For Youth Ghana",
  description: "Get in touch with IT For Youth Ghana about training, partnerships, volunteering, laptop donations or anything else.",
};

const telHref = `tel:${CONTACT.phone.replace(/\s/g, "")}`;

// Direct ways to reach the team, shown beside the form
const CHANNELS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: "M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11zm2.1-.4L12 11.3l6.9-5.2a.5.5 0 0 0-.4-.1h-13a.5.5 0 0 0-.4.1zM19 8.3l-6.4 4.8a1 1 0 0 1-1.2 0L5 8.3v9.2c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V8.3z",
  },
  {
    label: "Phone",
    value: CONTACT.phone,
    href: telHref,
    icon: "M6.6 3.2a1.6 1.6 0 0 1 2 .7l1.5 2.8c.3.6.2 1.4-.3 1.9l-1.2 1.1a10.5 10.5 0 0 0 5.6 5.6l1.1-1.2c.5-.5 1.3-.6 1.9-.3l2.8 1.5c.7.4 1 1.3.7 2l-.8 1.9a2.5 2.5 0 0 1-2.9 1.5A16.5 16.5 0 0 1 3.4 7.4 2.5 2.5 0 0 1 4.9 4.5l1.7-1.3z",
  },
  {
    label: "Location",
    value: CONTACT.location,
    href: undefined,
    icon: "M12 2.5a7.5 7.5 0 0 1 7.5 7.5c0 5.3-6.4 11-6.7 11.3a1.2 1.2 0 0 1-1.6 0C10.9 21 4.5 15.3 4.5 10A7.5 7.5 0 0 1 12 2.5zm0 4.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  },
];

// Pages that answer the most common questions without waiting for a reply
const SHORTCUTS = [
  { title: "Apply for training", text: "Browse courses and cohort dates.", href: "/apply" },
  { title: "Join our team", text: "Open roles and volunteering.", href: "/who-we-are/careers" },
  { title: "Donate equipment", text: "Give a laptop a second life.", href: "/laptop-bank/donate" },
  { title: "Partner with us", text: "Ways organisations can get involved.", href: "/partner-with-us" },
];

export default function ContactPage() {
  return (
    <>
      {/* ---------- Navy hero ---------- */}
      <section className="bg-ink text-white">
        <div className={`${container} pb-36 pt-8 sm:pb-40`}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">Contact</li>
            </ol>
          </nav>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="animate-hero-rise motion-reduce:animate-none">
                <SectionLabel light>Contact us</SectionLabel>
              </div>
              <h1 className="mt-5 animate-hero-rise text-[clamp(3rem,7vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.05em] motion-reduce:animate-none">
                Talk to the team.
              </h1>
            </div>
            <p className="max-w-[40ch] animate-hero-rise text-lg leading-relaxed text-white/75 [animation-delay:150ms] motion-reduce:animate-none">
              Whether you want to learn, partner, volunteer or donate, tell us what you need and we'll point you to the right
              person.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Channels + form, overlapping the hero ---------- */}
      <section className="pb-20 sm:pb-24">
        <div className={`${container} -mt-24 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10`}>
          {/* form first on phones: it's what most visitors came for */}
          <div className="order-2 min-w-0 lg:order-1">
            <ul className="space-y-3">
              {CHANNELS.map((c, i) => {
                const inner = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold text-ink">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d={c.icon} />
                      </svg>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-ink/55">{c.label}</span>
                      <span className="block text-lg font-bold text-ink [overflow-wrap:anywhere]">{c.value}</span>
                    </span>
                    {c.href && <Arrow className="h-5 w-5 shrink-0 text-ink/40" />}
                  </>
                );
                const card =
                  "flex items-center gap-4 rounded-[1.5rem] bg-white p-4 pr-6 shadow-[0_24px_48px_-28px_rgba(16,32,74,0.5)] ring-1 ring-line";
                return (
                  <li key={c.label} className="animate-hero-rise motion-reduce:animate-none" style={{ animationDelay: `${250 + i * 90}ms` }}>
                    {c.href ? (
                      <a href={c.href} className={`group ${card} transition-transform duration-300 hover:-translate-y-0.5`}>
                        {inner}
                      </a>
                    ) : (
                      <div className={card}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <p className="text-sm font-semibold text-ink/60">Follow our work</p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="ITFY on social media">
                {SOCIALS.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`IT For Youth Ghana on ${s.name}`}
                      className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink ring-1 ring-line transition-colors hover:bg-gold hover:ring-gold"
                    >
                      <SocialIcon name={s.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 min-w-0 animate-hero-rise rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)] [animation-delay:200ms] motion-reduce:animate-none lg:order-2">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ---------- Shortcuts ---------- */}
      <section className="pb-20 sm:pb-24">
        <div className={container}>
          <Reveal>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-[-0.03em] text-ink">Looking for something specific?</h2>
            <p className="mt-3 max-w-[52ch] text-lg text-ink/70">These pages answer the most common questions right away.</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SHORTCUTS.map((s, i) => (
              <li key={s.href}>
                <Reveal delay={i * 90} className="h-full">
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col rounded-[1.5rem] bg-white p-6 ring-1 ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(16,32,74,0.45)]"
                  >
                    <span className="text-lg font-bold text-ink">{s.title}</span>
                    <span className="mt-1 flex-1 text-[0.9375rem] text-ink/60">{s.text}</span>
                    <span className="mt-5 grid h-10 w-10 place-items-center rounded-full bg-paper text-ink transition-colors group-hover:bg-gold">
                      <Arrow />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
