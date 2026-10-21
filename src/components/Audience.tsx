import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const businesses = ["The clinic", "The retailer", "The restaurant", "The tradie"];

const promises = [
  "The same people behind every project",
  "The same hands-on, founder-led attention",
  "The same focus on small and growing businesses",
  "The same honest, accessible pricing",
];

export default function Audience() {
  return (
    <section id="who-we-serve" className="border-t py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow>Who we serve</Eyebrow>
          <h2 className="display mt-8 text-[clamp(1.75rem,3.6vw,2.75rem)]">Not just big companies.</h2>
          <ul className="mt-10 grid grid-cols-2 gap-3">
            {businesses.map((b) => (
              <li key={b} className="rounded-md border px-5 py-4 text-sm font-medium md:text-base">
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-l-2 border-primary pl-5 text-lg font-light leading-relaxed text-foreground/90">
            Every business that wants to grow, from Warangal to Geelong.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>What stays the same</Eyebrow>
          <h2 className="display mt-8 text-[clamp(1.75rem,3.6vw,2.75rem)]">New name. Same promise.</h2>
          <ul className="mt-10 space-y-3">
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-4 rounded-md border bg-secondary/60 px-5 py-4">
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-primary" fill="none" aria-hidden>
                  <path d="M4 12.5l5 5L20 6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm md:text-base">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
