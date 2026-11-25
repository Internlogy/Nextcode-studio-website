const AVATARS = [
  { l: "A", c: "bg-brand" },
  { l: "R", c: "bg-[#ff7a59]" },
  { l: "S", c: "bg-[#22b573]" },
  { l: "K", c: "bg-[#8b5cf6]" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-[radial-gradient(900px_400px_at_85%_-10%,#dbe8ff_0,transparent_60%),radial-gradient(600px_300px_at_0_30%,#fff4dc_0,transparent_60%)] pb-14 pt-[72px]"
    >
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <span className="eyebrow">🚀 Training · Internships · Software</span>
          <h1 className="text-[clamp(36px,5.6vw,62px)] font-extrabold">
            Learn by building. <span className="text-brand">Launch</span> your tech career.
          </h1>
          <p className="lead text-[19px]">
            Nextcode Studio runs structured training programmes and live-project internships that turn students into
            job-ready developers, designers and marketers — and builds software for businesses along the way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#apply" className="btn btn-p">
              Start your internship →
            </a>
            <a href="#programs" className="btn btn-o">
              Explore programs
            </a>
          </div>
          <div className="mt-7 flex items-center gap-2.5 text-sm font-semibold text-ink-muted">
            <div className="flex">
              {AVATARS.map((a, i) => (
                <span
                  key={a.l}
                  className={`grid h-8 w-8 place-items-center rounded-full border-2 border-white text-xs font-bold text-white ${a.c} ${i ? "-ml-2" : ""}`}
                >
                  {a.l}
                </span>
              ))}
            </div>
            <span>Join learners building real products every month</span>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="rounded-[20px] bg-ink p-5 font-mono text-[13.5px] leading-[1.8] text-[#cfe0ff] shadow-[0_30px_60px_-25px_rgba(11,18,32,.55)]"
          >
            <div className="mb-3.5 flex gap-[7px]">
              <b className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
              <b className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
              <b className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
            </div>
            <div className="text-[#6b7a99]">{"// your journey at Nextcode"}</div>
            <div>
              <span className="text-[#7aa9ff]">const</span> intern = {"{"}
            </div>
            <div className="pl-4">track: <span className="text-[#9be28f]">"Full-Stack Development"</span>,</div>
            <div className="pl-4">mentor: <span className="text-[#9be28f]">"Industry engineer"</span>,</div>
            <div className="pl-4">project: <span className="text-[#9be28f]">"Live client work"</span>,</div>
            <div className="pl-4">outcome: <span className="text-[#9be28f]">"Certificate + portfolio"</span></div>
            <div>{"};"}</div>
            <div>
              <span className="text-[#7aa9ff]">await</span> <span className="text-[#ffd479]">learn</span>(intern);
            </div>
            <div>
              <span className="text-[#7aa9ff]">await</span> <span className="text-[#ffd479]">build</span>(intern);
            </div>
            <div>
              <span className="text-[#7aa9ff]">await</span> <span className="text-[#ffd479]">getHired</span>(intern){" "}
              <span className="text-[#6b7a99]">{"// ✓"}</span>
            </div>
          </div>

          <FloatCard className="-bottom-5 right-2 lg:-right-3.5" icon="🎓" bg="bg-[#e9f9ee]" title="Certificate issued" sub="Verified & shareable" />
          <FloatCard className="left-2 top-16 lg:-left-4" icon="⚡" bg="bg-[#fff4dc]" title="Live projects" sub="Not just tutorials" />
        </div>
      </div>
    </section>
  );
}

function FloatCard(props: { className: string; icon: string; bg: string; title: string; sub: string }) {
  return (
    <div
      className={`absolute flex items-center gap-2.5 rounded-[14px] bg-white px-4 py-3 text-[13px] font-bold shadow-[0_14px_30px_-10px_rgba(11,18,32,.3)] ${props.className}`}
    >
      <span className={`grid h-[34px] w-[34px] place-items-center rounded-[10px] text-base ${props.bg}`}>{props.icon}</span>
      <div>
        {props.title}
        <small className="block text-xs font-medium text-ink-muted">{props.sub}</small>
      </div>
    </div>
  );
}
