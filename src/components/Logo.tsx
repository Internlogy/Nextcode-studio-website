import { SITE } from "../data";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
      <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-gradient-to-br from-brand to-[#7aa9ff] font-mono text-sm font-bold text-white">
        &lt;/&gt;
      </span>
      {SITE.name}
    </a>
  );
}
