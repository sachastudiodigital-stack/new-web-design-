import logo from "@/assets/logo-light.png";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <img src={logo} alt="Sacha Tech" className="h-7 w-auto self-start" />
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <a href={PHONE_TEL} className="hover:text-foreground">
            {PHONE_DISPLAY}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            {INSTAGRAM_HANDLE}
          </a>
          <span>© {new Date().getFullYear()} Sacha Tech</span>
        </div>
      </div>
    </footer>
  );
}
