import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/Eyebrow";
import { WHATSAPP_URL } from "@/lib/contact";
import heroVideo from "@/assets/hero-kinetic.mp4";
import heroVideoWebm from "@/assets/hero-kinetic.webm";
import heroPoster from "@/assets/hero-kinetic-poster.jpg";

const fadeUp = (delay: number) => ({
  className: "opacity-0 animate-fade-up",
  style: { animationDelay: `${delay}s` },
});

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Respect reduced motion: show the poster frame instead of autoplaying.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (query.matches) video.pause();
      else void video.play().catch(() => {});
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <section id="top" className="dot-grid relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      {/* The blue slice, sweeping in from the right like the carousel cover */}
      <div
        className="slice animate-slice-in absolute right-0 top-[84px] h-10 w-[45%] bg-primary [--slice-cut:8%] md:top-[14%] md:h-16"
        style={{ animationDelay: "0.1s" }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-16 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div>
          <div {...fadeUp(0.2)}>
            <Eyebrow>A new chapter · Sacha is now Sacha Tech</Eyebrow>
          </div>

          <h1
            className={`display mt-8 text-[clamp(2rem,4.6vw,3.6rem)] ${fadeUp(0.35).className}`}
            style={fadeUp(0.35).style}
          >
            AI-powered systems for every growing business.
          </h1>

          <p
            className={`mt-8 max-w-xl text-[clamp(1rem,1.4vw,1.2rem)] font-light leading-relaxed text-muted-foreground ${fadeUp(0.5).className}`}
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

        <div className={fadeUp(0.5).className} style={fadeUp(0.5).style}>
          <div className="overflow-hidden rounded-md border bg-background shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.35)]">
            <video
              ref={videoRef}
              className="block aspect-video w-full"
              poster={heroPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Sacha Tech: attention isn't enough, you need systems. AI agents, WhatsApp CRMs, automations and custom software, for every growing business."
            >
              <source src={heroVideo} type="video/mp4" />
              <source src={heroVideoWebm} type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
