import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/Eyebrow";
import { WHATSAPP_URL } from "@/lib/contact";

const fadeUp = (delay: number) => ({
  className: "opacity-0 animate-fade-up",
  style: { animationDelay: `${delay}s` },
});

export default function HeroSection() {
  return (
    <section id="top" className="dot-grid relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      {/* The blue slice, sweeping in from the right like the carousel cover */}
      <div
        className="slice animate-slice-in absolute right-0 top-[84px] h-10 w-[45%] bg-primary [--slice-cut:8%] md:top-[18%] md:h-20"
        style={{ animationDelay: "0.1s" }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
        <div {...fadeUp(0.2)}>
          <Eyebrow>A new chapter · Sacha is now Sacha Tech</Eyebrow>
        </div>

        <h1
          className={`display mt-8 max-w-5xl text-[clamp(2rem,6vw,4.75rem)] ${fadeUp(0.35).className}`}
          style={fadeUp(0.35).style}
        >
          AI-powered systems for every growing business.
        </h1>

        <p
          className={`mt-8 max-w-2xl text-[clamp(1rem,1.6vw,1.25rem)] font-light leading-relaxed text-muted-foreground ${fadeUp(0.5).className}`}
          style={fadeUp(0.5).style}
        >
          AI agents, WhatsApp CRMs, automations and custom software:{" "}
          <span className="text-foreground">the tools that turn attention into revenue.</span>
        </p>

        <div className={`mt-10 flex flex-wrap gap-3 ${fadeUp(0.65).className}`} style={fadeUp(0.65).style}>
          <Button asChild size="lg" className="h-12 px-8 font-semibold">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Start on WhatsApp
            </a>
          </Button>
          <Button asChild variant="heroOutline" size="lg" className="h-12 px-8 font-semibold">
            <a href="#services">See what we build</a>
          </Button>
        </div>

        <p
          className={`mt-10 text-xs uppercase tracking-[0.25em] text-muted-foreground/70 ${fadeUp(0.8).className}`}
          style={fadeUp(0.8).style}
        >
          Founder-led · Honest pricing · From Warangal to Geelong
        </p>
      </div>
    </section>
  );
}
