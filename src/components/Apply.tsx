import { useState, type FormEvent } from "react";
import { FORM_TRACKS, SITE } from "../data";

const field =
  "w-full rounded-[10px] border-[1.5px] border-line bg-white px-3.5 py-3 text-[15px] text-ink outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/20";

export default function Apply() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: send `data` to your backend, email service or CRM.
    console.log("Application:", data);
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="apply" className="py-[88px]">
      <div className="wrap">
        <div className="grid items-center gap-12 rounded-[28px] bg-gradient-to-br from-brand-dark via-brand to-[#6aa2ff] p-6 text-white sm:p-9 lg:grid-cols-2 lg:p-14">
          <div>
            <h2 className="h2">Ready to build your future with Nextcode?</h2>
            <p className="mt-3.5 text-[17px] opacity-90">
              Tell us a little about yourself. We’ll get back to you with next steps within two working days. You can
              also write to us at <b>{SITE.email}</b>.
            </p>
          </div>

          <form onSubmit={onSubmit} className="grid gap-3.5 rounded-[20px] bg-white p-6 text-ink">
            <label className="grid gap-1.5 text-[13px] font-bold">
              Full name
              <input className={field} required name="name" placeholder="Your name" />
            </label>
            <label className="grid gap-1.5 text-[13px] font-bold">
              Email
              <input className={field} required type="email" name="email" placeholder="you@example.com" />
            </label>
            <label className="grid gap-1.5 text-[13px] font-bold">
              I’m interested in
              <select className={field} name="track">
                {FORM_TRACKS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-1.5 text-[13px] font-bold">
              Message
              <textarea className={field} name="msg" rows={3} placeholder="Anything we should know?" />
            </label>
            <button className="btn btn-p" type="submit">
              Submit application
            </button>
            {sent && (
              <p role="status" className="rounded-[10px] bg-[#e9f9ee] px-3.5 py-3 text-sm font-semibold text-[#188a3e]">
                Thanks! Your details were captured on this page. Connect the form to your email or CRM to receive them.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
