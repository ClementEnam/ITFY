// Scrolling band of key numbers. Pure CSS — pauses on hover,
// stands still for people who turn off motion.

const ITEMS = [
  { value: "3,000+", label: "young people trained" },
  { value: "8,500+", label: "students reached through schools and communities" },
  { value: "40%", label: "female participation" },
  { value: "85%", label: "move into work, learning or enterprise within six months" },
  { value: "Cohort 8", label: "applications are open" },
];

// separator squares cycle through the kente colours
const SQUARES = ["bg-gold", "bg-kente-green", "bg-kente-red"];

function TickerList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {ITEMS.map((item, i) => (
        <li key={item.value} className="flex items-center">
          <span className="whitespace-nowrap px-8 text-base text-white/70">
            <strong className="mr-2 font-bold text-white">{item.value}</strong>
            {item.label}
          </span>
          <span aria-hidden="true" className={`h-2 w-2 rounded-[2px] ${SQUARES[i % SQUARES.length]}`} />
        </li>
      ))}
    </ul>
  );
}

export default function StatsTicker() {
  return (
    <section aria-label="ITFY in numbers" className="bg-ink py-5">
      <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <TickerList />
          <TickerList hidden />
        </div>
      </div>
    </section>
  );
}
