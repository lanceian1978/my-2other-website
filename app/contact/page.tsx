import type { Metadata } from "next";
import { contactLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact · Lance Ian T. Leanillo",
  description: "Reach out to Lance Ian T. Leanillo for collaborations, internships, and software projects.",
};

export default function ContactPage() {
    return (
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:px-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Contact</p>
          <h1 className="text-4xl font-semibold text-slate-900">Let’s build something unforgettable.</h1>
          <p className="text-base text-slate-600">
            I’m currently open for internships, freelance work, and community-led experiments. Fill out the form or reach me
            through any of the channels below and I’ll respond within 24 hours.
          </p>
        </header>