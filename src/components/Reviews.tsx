import { REVIEWS } from "../data";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section id="reviews" className="py-[88px]">
      <div className="wrap text-center">
        <span className="eyebrow">Reviews</span>
        <h2 className="h2">What learners say</h2>
        <p className="lead mx-auto">Sample feedback — replace with your own verified testimonials.</p>
        <div className="mt-11 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 60}>
              <figure className="card h-full">
                <div className="mb-2.5 tracking-[2px] text-accent" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote className="text-base">“{r.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className={`grid h-[42px] w-[42px] place-items-center rounded-full font-bold text-white ${r.color}`}>
                    {r.name[0]}
                  </span>
                  <div>
                    <b>{r.name}</b>
                    <small className="block text-[13px] text-ink-muted">{r.role}</small>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
