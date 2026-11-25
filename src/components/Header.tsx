import { useState } from "react";
import { NAV_LINKS } from "../data";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="wrap">
        <nav className="flex h-[68px] items-center justify-between">
          <Logo />

          <div
            className={`${
              open ? "flex" : "hidden"
            } absolute left-0 right-0 top-[68px] flex-col gap-4 border-b border-line bg-white px-6 py-5 text-[15px] font-semibold text-ink-muted md:static md:flex md:flex-row md:gap-7 md:border-0 md:bg-transparent md:p-0`}
          >
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-brand">
                {l.label}
              </a>
            ))}
          </div>

          <a href="#apply" className="btn btn-p hidden md:inline-flex">
            Apply now
          </a>
          <button
            className="text-2xl md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>
      </div>
    </header>
  );
}
