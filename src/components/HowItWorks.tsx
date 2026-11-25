import { STEPS } from "../data";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section id="how" className="bg-brand-soft py-[88px]">
      <div className="wrap text-center">
        <span className="eyebrow">How it works</span>
        <h2 className="h2">From application to certificate in 4 steps</h2>
        <div className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="rounded-lg bg-brand-tint px-[9px] py-1 font-mono text-[13px] font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-1.5 mt-3.5 text-lg font-bold">{s.title}</h3>
                <p className="text-[15px] text-ink-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
