import { useState } from "react";
import { CATEGORIES, PROGRAMS, type Category } from "../data";
import Reveal from "./Reveal";

export default function Programs() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const shown = filter === "all" ? PROGRAMS : PROGRAMS.filter((p) => p.category === filter);

  return (
    <section id="programs" className="py-[88px]">
      <div className="wrap text-center">
        <span className="eyebrow">Programs</span>
        <h2 className="h2">Pick a track. Ship real work.</h2>
        <p className="lead mx-auto">Every program pairs mentor-led training with a project you can show employers.</p>

        <div className="mb-8 mt-8 flex flex-wrap justify-center gap-2" role="tablist">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={filter === c.id}
              onClick={() => setFilter(c.id)}
              className={`rounded-full border-[1.5px] px-[18px] py-[9px] text-sm font-semibold transition ${
                filter === c.id
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-white text-ink-muted hover:border-brand hover:text-brand"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.title} delay={i * 40}>
              <article className="card h-full">
                <span className={`grid h-[34px] w-[34px] place-items-center rounded-[10px] text-base ${p.tint}`}>{p.icon}</span>
                <h3 className="mb-2 mt-4 text-xl font-bold">{p.title}</h3>
                <p className="text-[15px] text-ink-muted">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="tag">{p.duration}</span>
                  <span className="tag bg-[#e9f9ee] text-[#188a3e]">Remote</span>
                </div>
                <a href="#apply" className="mt-[18px] inline-block text-sm font-bold text-brand">
                  Apply →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
