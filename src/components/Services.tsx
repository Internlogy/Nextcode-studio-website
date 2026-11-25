import { FOCUS, SERVICES } from "../data";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="py-[88px]">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Software services</span>
          <h2 className="h2">Need a product built? Our studio ships it.</h2>
          <p className="lead">
            Alongside training, Nextcode Studio is a working software team. Interns learn on the same pipeline we use
            for clients.
          </p>
          <ul className="mt-6 grid gap-3.5">
            {SERVICES.map((s) => (
              <li key={s} className="flex items-start gap-3 font-medium">
                <span className="mt-px grid h-6 w-6 flex-none place-items-center rounded-full bg-brand-tint text-[13px] font-extrabold text-brand">
                  ✓
                </span>
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a href="#apply" className="btn btn-p">
              Talk to our team
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1c3a] to-[#1d3d86] p-8 text-white">
            <div className="absolute -right-14 -top-14 h-[220px] w-[220px] rounded-full bg-[#7aa9ff]/25" />
            <h3 className="relative text-[22px] font-bold">What we focus on</h3>
            {FOCUS.map((f) => (
              <div key={f.label} className="relative mt-5">
                <div className="mb-1.5 flex justify-between text-sm font-semibold">
                  <span>{f.label}</span>
                  <span>{f.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#7aa9ff] to-white" style={{ width: `${f.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
