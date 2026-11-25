import { SITE } from "../data";
import Logo from "./Logo";

const COLS = [
  { title: "Programs", links: ["Development", "Design", "Data & AI", "Marketing"].map((l) => ({ l, h: "#programs" })) },
  {
    title: "Company",
    links: [
      { l: "How it works", h: "#how" },
      { l: "Services", h: "#services" },
      { l: "Projects", h: "#projects" },
      { l: "FAQ", h: "#faq" },
    ],
  },
  { title: "Contact", links: [{ l: SITE.email, h: `mailto:${SITE.email}` }, { l: "Apply online", h: "#apply" }] },
];

export default function Footer() {
  return (
    <footer className="bg-ink pb-7 pt-14 text-sm text-[#9aa6bd]">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-3.5">
              <Logo light />
            </div>
            <p>Training, internships and software development. Learn by building real things.</p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="mb-3.5 text-sm font-bold text-white">{c.title}</h4>
              {c.links.map((k) => (
                <a key={k.l} href={k.h} className="mb-2 block hover:text-white">
                  {k.l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-9 flex flex-wrap justify-between gap-2.5 border-t border-[#1c2740] pt-5">
          <span>© {new Date().getFullYear()} Nextcode Studio. All rights reserved.</span>
          <span>Built with care.</span>
        </div>
      </div>
    </footer>
  );
}
