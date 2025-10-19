"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/journey", label: "Your Journey" },
  { href: "/how-it-works", label: "Why It Works" },
  { href: "/use-cases", label: "Use-Cases" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 overflow-visible bg-black">
      <div className="mx-auto flex h-[88px] max-w-7xl items-center px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link
          href="/"
          className="text-[20px] font-medium tracking-[-0.01em] text-white sm:text-[22px] md:text-[24px] lg:justify-self-start"
        >
          Pioneer Your Creative
        </Link>
        <nav className="hidden items-center justify-center lg:flex lg:justify-self-center">
          <ul className="flex items-center justify-center gap-4 xl:gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative inline-flex items-center py-2 text-[18px] font-medium text-primary transition-colors hover:text-white"
                >
                  {link.label}
                  <span
                    className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-200 group-hover:w-full"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:justify-self-end">
          <Link
            href="/assessment"
            className="hidden items-center justify-center rounded-full bg-[var(--brand-accent)] px-8 py-3 text-[14px] font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90 lg:inline-flex"
          >
            TAKE ASSESSMENT
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white ring-1 ring-white/15 transition-colors hover:bg-white/5 lg:hidden"
            aria-label="Toggle navigation"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div className="absolute inset-x-0 top-full border-t border-white/10 bg-black/95 backdrop-blur-sm lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6 lg:px-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-base font-medium text-primary transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/assessment"
              className="block py-3 text-base font-semibold text-[var(--brand-accent)] transition-colors hover:text-[var(--brand-accent)]/80"
              onClick={() => setOpen(false)}
            >
              Take Assessment
            </Link>
          </div>
        </div>
      ) : null}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-full h-40 -translate-y-[1px] bg-gradient-to-b from-black/80 via-black/40 to-transparent"
      />
    </header>
  );
}
