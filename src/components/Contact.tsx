import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

export default function Contact() {
  return (
    <section id="contact" className="dot-grid relative overflow-hidden border-t py-24 md:py-32">
      <div className="slice absolute right-0 top-12 h-12 w-[38%] bg-primary [--slice-cut:8%] md:h-16" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <Eyebrow>Build with us</Eyebrow>
          <h2 className="display mt-8 max-w-4xl text-[clamp(2rem,5vw,4rem)]">Let's build what's next.</h2>
          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-muted-foreground">
            If you're ready to put AI to work in your business, we're one message away.
          </p>

          <div className="mt-12 flex max-w-2xl flex-col gap-4">
            <Button asChild size="lg" className="h-16 text-base font-semibold md:text-lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp {PHONE_DISPLAY}
              </a>
            </Button>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <a href={PHONE_TEL} className="text-muted-foreground transition-colors hover:text-foreground">
                Or call {PHONE_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary transition-colors hover:text-foreground"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
