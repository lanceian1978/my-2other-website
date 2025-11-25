import type { Metadata } from "next";
import { projectsData, featureBadges } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio · Lance Ian T. Leanillo",
  description: "A curated selection of Lance Ian T. Leanillo’s projects across education, robotics, and community tech.",
};

  export default function PortfolioPage() {
    return (
      <div className="min-h-screen bg-slate-50 pt-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 sm:px-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Portfolio</p>
          <h1 className="text-4xl font-semibold text-slate-900">Selected Projects & Experience</h1>
          <p className="text-base text-slate-600">
            Projects showcasing hands-on learning, UI/UX design, and practical development.
          </p>
        </header>
  
        <section className="grid gap-6 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-gradient-to-br from-white via-white to-slate-100/70 p-6 shadow-lg shadow-slate-200/60"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Case Study</p>
                <span className="text-xs font-semibold text-emerald-500">{project.concept}</span>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">{project.title}</h2>
              <p className="text-sm text-slate-600">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-600">
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-blue-600"
              >
                View build notes
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </section>
  
        <section className="rounded-3xl border border-white/15 bg-white/90 p-6 shadow-2xl shadow-indigo-200/40 backdrop-blur">
          <h2 className="text-2xl font-semibold text-slate-900">Experience features</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {featureBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-200/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"
              >
                {badge}
              </span>
            ))}
          </div>
        </section>
        </div>
      </div>
    );
  }