import { PROJECTS } from "../data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="bg-brand-soft py-[88px]">
      <div className="wrap text-center">
        <span className="eyebrow">Our work</span>
        <h2 className="h2">Built by our team and interns</h2>
        <div className="mt-11 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="card h-full overflow-hidden !p-0">
                <div className={`grid h-[150px] place-items-center bg-gradient-to-br text-[44px] ${p.bg}`}>{p.icon}</div>
                <div className="px-6 pb-6 pt-5">
                  <h3 className="mb-1.5 text-[19px] font-bold">{p.title}</h3>
                  <p className="text-[15px] text-ink-muted">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
