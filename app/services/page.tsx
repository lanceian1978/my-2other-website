import type { Metadata } from "next";
import { servicesData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services · Lance Ian T. Leanillo",
  description: "Explore the service offerings of Lance Ian T. Leanillo, from full-stack engineering to rapid prototyping.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 sm:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Services</p>
        <h1 className="text-4xl font-semibold text-slate-900">From ideas to working projects.</h1>
        <p className="text-base text-slate-600">
          I collaborate with classmates, student orgs, and mentors to turn concepts into functional applications, explore automation,
          and document every learning.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        {servicesData.map((service) => (
          <div
            key={service.title}
            className="rounded-3xl border border-white/20 bg-white/95 p-6 shadow-xl shadow-slate-200/60"
          >
            <div className="flex h-full flex-col gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Service</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">{service.title}</h2>
              </div>
              <p className="text-sm text-slate-600">{service.description}</p>
              <ul className="mt-auto space-y-2 text-sm text-slate-600">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}


