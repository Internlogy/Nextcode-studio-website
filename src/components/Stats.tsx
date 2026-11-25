import { useEffect, useRef, useState } from "react";
import { STATS } from "../data";

function useCountUp(target: number, run: boolean, ms = 1200) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf = 0;
    let t0: number | null = null;
    const step = (t: number) => {
      if (t0 === null) t0 = t;
      const p = Math.min((t - t0) / ms, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, ms]);

  return n;
}

function Stat({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) {
  const n = useCountUp(value, run);
  return (
    <div className="bg-white p-6 text-center">
      <b className="block text-[34px] font-extrabold tracking-tight text-brand">
        {n}
        {suffix}
      </b>
      <span className="text-sm font-medium text-ink-muted">{label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section>
      <div className="wrap">
        <div
          ref={ref}
          className="-translate-y-7 overflow-hidden rounded-2xl border border-line bg-line shadow-[0_20px_40px_-24px_rgba(11,18,32,.25)]"
        >
          <div className="grid grid-cols-2 gap-px md:grid-cols-4">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} run={run} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
