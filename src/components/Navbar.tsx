import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/contact";
import logo from "@/assets/logo-light.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Who we serve", href: "#who-we-serve" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "border-b bg-background/85 backdrop-blur-md" : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" aria-label="Sacha Tech home" onClick={() => setOpen(false)}>
          <img src={logo} alt="Sacha Tech" className="h-8 w-auto md:h-9" />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button asChild variant="navCta" size="lg" className="hidden px-6 text-xs uppercase tracking-[0.2em] md:inline-flex">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </a>
        </Button>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("h-px w-6 bg-foreground transition-transform", open && "translate-y-[3.5px] rotate-45")} />
          <span className={cn("h-px w-6 bg-foreground transition-transform", open && "-translate-y-[3.5px] -rotate-45")} />
        </button>
      </nav>

      {open && (
        <div className="border-t px-6 pb-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b py-4 text-sm uppercase tracking-[0.25em] text-muted-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="lg" className="mt-6 w-full font-semibold">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
