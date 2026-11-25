import { FAQS } from "../data";

export default function Faq() {
  return (
    <section id="faq" className="bg-brand-soft py-[88px]">
      <div className="wrap text-center">
        <span className="eyebrow">FAQ</span>
        <h2 className="h2">Questions, answered</h2>
        <div className="mx-auto mt-10 max-w-[760px] text-left">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group mb-3 rounded-[14px] border border-line bg-white px-[22px] py-[18px] open:border-[#b9d1ff] open:bg-brand-soft"
            >
              <summary className="flex cursor-pointer list-none justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-[22px] leading-none text-brand group-open:hidden">+</span>
                <span className="hidden text-[22px] leading-none text-brand group-open:inline">–</span>
              </summary>
              <p className="mt-2.5 text-[15px] text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
