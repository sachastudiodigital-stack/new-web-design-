import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import logo from "@/assets/logo-light.png";

const chapters = [
  {
    label: "Where we started",
    title: "A studio for local businesses.",
    body: "We began helping small businesses with marketing, ads and websites: getting them seen, trusted and chosen.",
  },
  {
    label: "What changed",
    title: "Our clients needed more than attention.",
    body: "They needed systems. More and more of our work became AI agents, WhatsApp CRMs, automations and custom software.",
  },
  {
    label: "Where we're headed",
    title: "AI-powered systems for every growing business.",
    body: "Our work evolved. Our identity had to follow. Sacha is now Sacha Tech.",
  },
];

const logoNotes = [
  { title: "Wide, geometric letters", body: "Precision and stability. Built, not decorated.", blue: false },
  { title: "The TECH line", body: "Engineering sits at the core of everything we do.", blue: false },
  { title: "The blue slice", body: "The spark of AI that connects it all.", blue: true },
];

export default function About() {
  return (
    <section id="about" className="dot-grid border-t py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="display mt-8 max-w-4xl text-[clamp(1.75rem,4.2vw,3.25rem)]">
            Sacha is now Sacha Tech.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {chapters.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <li className="border-t pt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">{c.label}</p>
                <h3 className="mt-4 text-xl font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 font-light leading-relaxed text-muted-foreground">{c.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-20">
          <div className="grid items-center gap-10 rounded-md border bg-secondary/60 p-8 md:grid-cols-2 md:p-12">
            <img src={logo} alt="Sacha Tech logo" className="mx-auto w-full max-w-sm" />
            <ul className="space-y-6">
              {logoNotes.map((n) => (
                <li key={n.title} className="flex gap-4">
                  <span
                    className={`slice mt-2 h-2.5 w-6 shrink-0 [--slice-cut:30%] ${n.blue ? "bg-primary" : "bg-border"}`}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-semibold">{n.title}</h3>
                    <p className="mt-1 font-light text-muted-foreground">{n.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
