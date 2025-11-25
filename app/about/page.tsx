import type { Metadata } from "next";
import {
  certificatesList,
  experienceTimeline,
  skillsList,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About · Lance Ian T. Leanillo",
  description: "Learn more about Lance Ian T. Leanillo, a CPU BSCS student focused on software development, and community innovation.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:px-8">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">About Me</p>
        <h1 className="text-4xl font-semibold text-slate-900">Transforming ideas into purposeful and engaging products.</h1>
        <p className="text-base text-slate-600">
          Hi, I’m Lance Ian T. Leanillo, a third-year Computer Science student at Central Philippine University specializing in
          Software Development. I’m passionate about building software and digital solutions that make life easier while exploring the
          worlds of robotics and automation.
        </p>
      </header>

      <section className="grid gap-6 rounded-3xl border border-white/15 bg-white/95 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
        <h2 className="text-2xl font-semibold text-slate-900">Experience timeline</h2>
        <div className="space-y-4">
          {experienceTimeline.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100/70 bg-white/80 p-4 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{item.period}</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{item.title}</p>
              <p className="text-sm text-slate-600">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/15 bg-white/95 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
        <h2 className="text-2xl font-semibold text-slate-900">Skills & Stacks</h2>
        <p className="mt-2 text-sm text-slate-600">
          The tools I use most for discovery, prototyping, and building working software.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {skillsList.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/15 bg-white/95 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
        <h2 className="text-2xl font-semibold text-slate-900">Certificates</h2>
        <div className="mt-4 grid gap-3">
          {certificatesList.map((certificate) => (
            <div
              key={certificate}
              className="flex items-center gap-3 rounded-2xl border border-slate-100/70 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              {certificate}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


