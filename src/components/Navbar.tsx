"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type NavbarProps = {
  onCtaClick?: (ctaId: string) => void;
};

const NAV_LINKS = [
  { id: "crisis", label: "Why It Works" },
  { id: "systems", label: "The Framework" },
  { id: "creatives", label: "About" },
];

const SPRINT1_COURSE_URL = "https://pioneeryourcreative.thinkific.com/courses/sprint1" as const;

export default function Navbar({ onCtaClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowBackground(currentY > 100);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastY;
          if (delta > 6 && currentY > 200) {
            setHideOnScroll(true);
          } else if (delta < -6) {
            setHideOnScroll(false);
          }
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sectionIds = ["hero", ...NAV_LINKS.map((item) => item.id), "join", "start"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (!id) {
              return;
            }

            if (id === "hero") {
              setActiveSection(null);
            } else {
              setActiveSection(id);
            }
          }
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navClasses = useMemo(() => {
    const base =
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out";
    const background = showBackground
      ? "bg-black/80 backdrop-blur-md shadow-lg opacity-100"
      : "opacity-0 pointer-events-none";
    const translate = showBackground && hideOnScroll && !mobileOpen ? "-translate-y-full" : "translate-y-0";
    return `${base} ${background} ${translate}`;
  }, [showBackground, hideOnScroll, mobileOpen]);

  const linkClasses = (id: string) =>
    [
      "relative inline-flex items-center py-2 text-[15px] font-medium transition-colors",
      activeSection === id ? "text-white" : "text-white/70 hover:text-white",
    ].join(" ");

  const handleCta = (cta: string) => {
    onCtaClick?.(cta);
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href") || "";
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (
      "scrollBehavior" in document.documentElement.style &&
      !prefersReduced
    ) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      const rect = (target as HTMLElement).getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY,
        behavior: prefersReduced ? "auto" : "smooth",
      });
    }

    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <nav role="navigation" aria-label="Primary navigation" className={navClasses}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          data-scroll-link
          onClick={handleLinkClick}
          className="text-[17px] font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/50"
        >
          Pioneer Your Creative
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              data-scroll-link
              onClick={handleLinkClick}
              className={`${linkClasses(item.id)} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/50 rounded`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-white transition-all duration-200 ${
                  activeSection === item.id ? "w-full" : "w-0"
                }`}
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#join"
            data-scroll-link
            data-cta="leadmagnet"
            onClick={(e) => {
              handleLinkClick(e);
              handleCta("leadmagnet");
            }}
            className="inline-flex items-center justify-center rounded-lg border border-[#5BE597] px-5 py-2 text-sm font-semibold text-[#5BE597] transition hover:bg-[#5BE597]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5BE597]/60"
          >
            Free Guide
          </Link>
          <Link
            href={SPRINT1_COURSE_URL}
            data-cta="sprint1"
            onClick={() => handleCta("sprint1")}
            className="inline-flex items-center justify-center rounded-lg bg-[#5BE597] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#57FFB7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#57FFB7]/60"
          >
            Start Sprint 1 — $97
          </Link>
        </div>
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-nav-menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white ring-1 ring-white/20 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5BE597]/60 md:hidden"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {mobileOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
      {mobileOpen ? (
        <div
          id="primary-nav-menu"
          className="border-t border-white/10 bg-black/90 px-4 pb-6 pt-4 shadow-lg backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col items-start gap-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                data-scroll-link
                onClick={(e) => {
                  handleLinkClick(e);
                }}
                className={`text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5BE597]/60 ${
                  activeSection === item.id ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#join"
              data-scroll-link
              data-cta="leadmagnet"
              onClick={(e) => {
                handleLinkClick(e);
                handleCta("leadmagnet");
              }}
              className="inline-flex w-full items-center justify-center rounded-lg border border-[#5BE597] px-5 py-2 text-sm font-semibold text-[#5BE597] transition hover:bg-[#5BE597]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5BE597]/60"
            >
              Free Guide
            </Link>
            <Link
              href={SPRINT1_COURSE_URL}
              data-cta="sprint1"
              onClick={() => handleCta("sprint1")}
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#5BE597] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#57FFB7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#57FFB7]/60"
            >
              Start Sprint 1 — $97
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
