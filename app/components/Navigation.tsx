"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = {
  path: string;
  label: string;
};

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll on page load if hash exists
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, [pathname]);

  return (
    <header className="sticky top-4 z-20 rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-4 text-slate-100 shadow-[0_25px_100px_rgba(3,7,18,0.65)] backdrop-blur-xl sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="transition hover:opacity-80">
          <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Lance Ian T. Leanillo</p>
          <p className="text-base font-semibold text-white">Software Development Student · CPU</p>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 text-sm font-medium text-slate-200 sm:flex sm:gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white sm:px-4 ${
                pathname === link.path ? "bg-white/10 text-white" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-full p-2 text-slate-200 transition hover:bg-white/10 sm:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-white ${
                pathname === link.path ? "bg-white/10 text-white" : "text-slate-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

