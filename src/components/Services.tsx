import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const systems = [
  {
    title: "AI agents",
    body: "Assistants that answer customers, qualify leads and book appointments, day and night, in your tone of voice.",
  },
  {
    title: "WhatsApp CRMs",
    body: "Every enquiry, follow-up and customer in one place, on the app your customers already use.",
  },
  {
    title: "Automations",
    body: "The repetitive work between your tools, done for you: reminders, invoices, reports and hand-offs.",
  },
  {
    title: "Custom software",
    body: "When off-the-shelf doesn't fit, we build the dashboard, portal or internal tool your business actually needs.",
  },
];

const foundations = [
  { title: "Marketing & ads", body: "Campaigns that get you seen by the right people." },
  { title: "Websites", body: "Fast, clear sites that get you trusted and chosen." },
];

export default function Services() {
  return (
    <section id="services" className="border-t py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <Eyebrow>What we build</Eyebrow>
          <h2 className="display mt-8 max-w-4xl text-[clamp(1.75rem,4.2vw,3.25rem)]">
            Systems, not just attention.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-md border bg-border sm:grid-cols-2">
          {systems.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="h-full">
              <article className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-secondary md:p-10">
                <span className="font-display text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-6 flex items-center gap-3 text-xl font-semibold md:text-2xl">
                  {s.title}
                  <span
                    className="slice h-2.5 w-6 bg-primary opacity-0 transition-opacity group-hover:opacity-100 [--slice-cut:30%]"
                    aria-hidden
                  />
                </h3>
                <p className="mt-4 max-w-md font-light leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">And where we started</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {foundations.map((f) => (
              <div key={f.title} className="rounded-md border bg-secondary/50 px-6 py-5">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm font-light text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
