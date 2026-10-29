import Image from "next/image";
import type { Person } from "./content";

function Avatar({ person, size }: { person: Person; size: "lg" | "sm" }) {
  const box = size === "lg" ? "aspect-[4/5] w-full rounded-[1.75rem]" : "h-20 w-20 rounded-full";
  return (
    <div className={`relative shrink-0 overflow-hidden bg-paper ring-1 ring-line ${box}`}>
      {person.photo ? (
        <Image src={person.photo} alt={person.name} fill sizes={size === "lg" ? "(min-width: 1024px) 30vw, 100vw" : "80px"} className="object-cover" />
      ) : (
        // no photo yet: show the ITFY logo instead
        <span className="grid h-full w-full place-items-center p-[18%]">
          <Image src="/logo/logo.png" alt="" width={90} height={90} className="h-full w-full object-contain" />
        </span>
      )}
    </div>
  );
}

function Contact({ person, dark }: { person: Person; dark?: boolean }) {
  if (!person.email && !person.linkedin) return null;
  const pill = `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
    dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-paper text-ink ring-1 ring-line hover:ring-ink"
  }`;
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {person.email && (
        <a href={`mailto:${person.email}`} className={pill}>
          Email {person.name.split(" ")[0]}
        </a>
      )}
      {person.linkedin && (
        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className={pill}>
          LinkedIn
        </a>
      )}
    </div>
  );
}

// Wide card for featured people (e.g. the Executive Director)
export function FeaturedPerson({ person }: { person: Person }) {
  return (
    <article className="grid gap-8 rounded-[2rem] bg-white p-6 ring-1 ring-line sm:p-8 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] md:gap-12 lg:p-10">
      <div className="mx-auto w-full max-w-xs md:max-w-none">
        <Avatar person={person} size="lg" />
      </div>
      <div className="self-center">
        <h3 className="text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl">{person.name}</h3>
        <p className="mt-2 text-lg font-medium text-kente-green">{person.role}</p>
        <p className="mt-6 max-w-[70ch] text-[15px] leading-[1.8] text-ink/75 sm:text-base">{person.bio}</p>
        <Contact person={person} />
      </div>
    </article>
  );
}

// Standard card for everyone else
export function PersonCard({ person }: { person: Person }) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] bg-white p-6 ring-1 ring-line sm:p-7">
      <div className="flex items-center gap-4">
        <Avatar person={person} size="sm" />
        <div>
          <h3 className="text-xl font-bold tracking-[-0.02em] text-ink">{person.name}</h3>
          <p className="text-[15px] text-ink/60">{person.role}</p>
        </div>
      </div>
      <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/70">{person.bio}</p>
      <Contact person={person} />
    </article>
  );
}
