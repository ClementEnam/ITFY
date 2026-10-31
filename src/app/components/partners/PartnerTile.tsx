import Image from "next/image";
import type { Partner } from "./content";

// One partner: logo (or name as text when there's no logo yet), optional note and website link.
export default function PartnerTile({ partner }: { partner: Partner }) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] bg-white p-6 ring-1 ring-line sm:p-7">
      <div className="relative grid h-24 place-items-center rounded-2xl bg-paper px-6">
        {partner.logo ? (
          <Image src={partner.logo} alt={partner.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-contain p-5" />
        ) : (
          <span className="text-center text-lg font-extrabold leading-tight tracking-[-0.02em] text-ink/80">{partner.name}</span>
        )}
      </div>
      {partner.logo && <h3 className="mt-5 text-lg font-bold tracking-[-0.01em] text-ink">{partner.name}</h3>}
      {partner.role && <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink/65">{partner.role}</p>}
      {partner.url && (
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 self-start text-[0.9375rem] font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 hover:decoration-ink"
        >
          Visit {partner.name}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </article>
  );
}
