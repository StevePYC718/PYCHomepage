"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";

// ============= PARTICLES COMPONENT =============
function Particles() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    const createParticle = () => {
      const particle = document.createElement("span");
      const size = 2 + Math.random() * 3;
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(154, 230, 180, 0.8);
        box-shadow: 0 0 8px rgba(154, 230, 180, 0.5);
        left: ${Math.random() * 100}%;
        top: 0;
        animation: float ${8 + Math.random() * 4}s linear;
      `;
      container.appendChild(particle);
      window.setTimeout(() => {
        particle.remove();
      }, 12000);
    };

    const intervalId = window.setInterval(createParticle, 800);
    for (let index = 0; index < 15; index += 1) {
      createParticle();
    }

    return () => {
      window.clearInterval(intervalId);
      container.innerHTML = "";
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden" />
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          10% {
            transform: translateY(10vh) scale(1);
            opacity: 0.8;
          }
          90% {
            transform: translateY(90vh) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

// ============= HEADER COMPONENT =============
function Header() {
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
            <li>
              <Link
                href="/sprint-1"
                className="group relative inline-flex items-center py-2 text-[18px] font-medium text-white/90 transition-colors hover:text-white"
              >
                Your Journey
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-200 group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                className="group relative inline-flex items-center py-2 text-[18px] font-medium text-white/90 transition-colors hover:text-white"
              >
                Why It Works
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-200 group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="group relative inline-flex items-center py-2 text-[18px] font-medium text-white/90 transition-colors hover:text-white"
              >
                About
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-200 group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:justify-self-end">
          <Link
            href="/assessment"
            className="hidden items-center justify-center rounded-full bg-[#9AE6B4] px-8 py-3 text-[14px] font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90 lg:inline-flex"
          >
            TAKE ASSESSMENT
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white ring-1 ring-white/15 transition-colors hover:bg-white/5 lg:hidden"
            aria-label="Toggle navigation"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div className="absolute inset-x-0 top-full border-t border-white/10 bg-black/95 backdrop-blur-sm lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/sprint-1"
              className="block py-3 text-base font-medium text-white/90 transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              Your Journey
            </Link>
            <Link
              href="/how-it-works"
              className="block py-3 text-base font-medium text-white/90 transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              Why It Works
            </Link>
            <Link
              href="/about"
              className="block py-3 text-base font-medium text-white/90 transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              About
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

// ============= DATA CONFIGURATION =============
const CONTENT = {
  hero: {
    subtitle: "Sprint 1 • 10 Days",
    title: ["Break Free", "From Blocks"],
    tagline: "Stop researching. Stop waiting. Start shipping.",
    description:
      "The first sprint in your 90-day journey. Interrupt fear, resistance, and outdated rules to build execution momentum that compounds.",
    cta: "Enroll in Sprint 1 — $97",
    badge: "Beta pricing • Money-back guarantee • Lifetime access",
  },
  patterns: [
    {
      icon: "🔍",
      title: '“I should research this more”',
      subtitle: "Fear of starting imperfectly",
      body: "Reasonable research becomes a hiding place that protects you from shipping before you're ready.",
    },
    {
      icon: "🗂️",
      title: '“Let me organize first”',
      subtitle: "Resistance masking as productivity",
      body: "You tidy, reorganize, and prepare so you can avoid the discomfort of doing the work that matters.",
    },
    {
      icon: "📏",
      title: "“That's not how professionals do it”",
      subtitle: "Following outdated rules",
      body: "Rules from a previous role or era keep you obedient instead of experimenting with what's needed now.",
    },
  ],
  lessons: [
    {
      title: "Lesson 1: Fear — Break the Inaction Cycle",
      description:
        "Understand fear as a neurological signal, not a personal failing, and learn the 3-minute protocol that unsticks you in real time.",
      tool: "Fear Interrupt Protocol",
      summary: "Deploy it whenever you freeze so you can move within seconds, not days.",
    },
    {
      title: "Lesson 2: Resistance — Recognize Your Patterns",
      description:
        "Spot avoidance loops—research binges, perfectionism, and timing optimization—so you stop falling for your own excuses.",
      tool: "Resistance Pattern Map",
      summary: "Document the exact moves you make to avoid executing and replace them with counter-behaviors.",
    },
    {
      title: "Lesson 3: Identity — Permission to Evolve",
      description: "Update the rules you're following from old economies, old careers, and old identities.",
      tool: "Identity Experiment Framework",
      summary: "Prototype new ways of working in low-pressure reps that prove you can evolve.",
    },
  ],
  deliverables: [
    { icon: "🎬", title: "3 Core Lessons", body: "Cinematic teaching + practical walkthroughs (10-15 minutes each)." },
    { icon: "🤖", title: "AI Co-Pilot", body: "Tracks patterns, recommends next steps, checks in daily." },
    { icon: "🛠️", title: "Execution Tools", body: "Fear Protocol, Resistance Map, Identity Experiments—yours forever." },
    { icon: "🌐", title: "Community Access", body: "Private community for accountability and fast feedback." },
    { icon: "📆", title: "Daily System", body: "Morning goal-setting and evening reflection via AI + email." },
    { icon: "♾️", title: "Lifetime Access", body: "All materials and tools remain in your vault for future sprints." },
  ],
  faq: [
    {
      q: "Why will this be different from other programs?",
      a: "Sprint 1 isn't passive consumption. Your AI Co-Pilot checks in daily, the community sees your progress, and every lesson ends with action. It's harder to disappear than to execute.",
    },
    {
      q: "What if I don't have time?",
      a: "You commit to 15–30 minutes per day. If 15 minutes feels impossible, it's a priority issue we'll solve together.",
    },
    {
      q: "How does this connect to the 90-day journey?",
      a: "Sprint 1 is the foundation. You can't build vision (Sprint 2) while paralyzed by fear. Each sprint unlocks the next level of creative capacity.",
    },
    {
      q: "What support is available?",
      a: "AI Co-Pilot daily, community support 24/7, and human support at support@pioneeryourcreative.com whenever needed.",
    },
  ],
};

// ============= REUSABLE COMPONENTS =============
type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, children, className = "" }: SectionProps) => (
  <section id={id} className={`relative py-20 ${className}`}>
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

type CardProps = {
  icon?: string;
  title: string;
  subtitle?: string;
  body: string;
};

const Card = ({ icon, title, subtitle, body }: CardProps) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30 transition-all hover:-translate-y-1 hover:bg-white/10">
    {icon ? <div className="mb-3 text-2xl">{icon}</div> : null}
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    {subtitle ? <p className="mt-1 text-sm font-medium text-[#9AE6B4]">{subtitle}</p> : null}
    <p className="mt-3 text-sm text-white/70">{body}</p>
  </div>
);

type AccordionItem = {
  title?: string;
  description?: string;
  tool?: string;
  summary?: string;
  q?: string;
  a?: string;
};

type AccordionProps = {
  items: AccordionItem[];
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
  itemKey?: "title" | "q";
};

const Accordion = ({ items, openItem, setOpenItem, itemKey = "title" }: AccordionProps) => (
  <div className="space-y-4">
    {items.map((item) => {
      const key = item[itemKey];
      if (!key) {
        return null;
      }
      const isOpen = openItem === key;
      return (
        <div key={key} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <button
            type="button"
            onClick={() => setOpenItem(isOpen ? null : key)}
            className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-white/10"
            aria-expanded={isOpen}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">{item.title ?? item.q}</h3>
              {item.description ? <p className="mt-2 text-sm text-white/60">{item.description}</p> : null}
            </div>
            <span
              className={`text-2xl text-[#9AE6B4] transition-transform ${isOpen ? "rotate-45" : ""}`}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          {isOpen ? (
            <div className="border-t border-white/10 px-6 pb-6 pt-4 text-sm text-white/70">
              {item.tool ? (
                <div className="rounded-xl border border-[#9AE6B4]/30 bg-[#9AE6B4]/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#9AE6B4]">Tool</p>
                  <p className="mt-2 text-base font-semibold text-white">{item.tool}</p>
                  <p className="mt-2 text-white/70">{item.summary}</p>
                </div>
              ) : (
                <p>{item.a}</p>
              )}
            </div>
          ) : null}
        </div>
      );
    })}
  </div>
);

// ============= MAIN COMPONENT =============
export default function Sprint1Page() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [openLesson, setOpenLesson] = useState<string | null>(CONTENT.lessons[0]?.title ?? null);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const handleSmoothNav = useCallback((event: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }
        const pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setStickyVisible(pastHero);
      },
      { threshold: 0.2 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main className="bg-black text-white">
        <section ref={heroRef} id="hero" className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" aria-hidden="true" />
            <div
              className="absolute inset-0 bg-gradient-to-l from-red-500/30 via-red-700/15 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute right-0 top-0 h-[900px] w-[900px] bg-gradient-radial from-[#F87171]/40 via-[#F87171]/20 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute right-10 top-1/3 h-[700px] w-[700px] bg-gradient-radial from-red-500/35 via-red-600/15 to-transparent blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] bg-gradient-radial from-[#F87171]/30 via-transparent to-transparent blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black to-transparent"
              aria-hidden="true"
            />
          </div>
          <Particles />

          <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24">
            <div className="max-w-3xl">
              <p className="mb-6 text-sm font-medium uppercase tracking-wider text-[#9AE6B4]">
                {CONTENT.hero.subtitle}
              </p>
              <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block text-white">{CONTENT.hero.title[0]}</span>
                <span className="block text-[#68D391]">{CONTENT.hero.title[1]}</span>
              </h1>
              <p className="mb-4 text-xl font-medium text-[#68D391]">{CONTENT.hero.tagline}</p>
              <p className="mb-10 text-lg text-white/80">{CONTENT.hero.description}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#pricing"
                  onClick={(event) => handleSmoothNav(event, "#pricing")}
                  className="inline-flex items-center justify-center rounded-full bg-[#9AE6B4] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90"
                >
                  {CONTENT.hero.cta}
                </Link>
                <Link
                  href="/journey"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  See The Full 90-Day Journey
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/60">{CONTENT.hero.badge}</p>
            </div>
          </div>
        </section>

        {stickyVisible ? (
          <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
              <Link href="/" className="text-lg font-semibold text-white">
                Pioneer Your Creative
              </Link>
              <Link
                href="#pricing"
                onClick={(event) => handleSmoothNav(event, "#pricing")}
                className="rounded-full bg-[#9AE6B4] px-6 py-2 text-sm font-semibold uppercase tracking-wide text-black transition-opacity hover:opacity-90"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        ) : null}

        <Section id="problem" className="bg-gradient-to-b from-black via-[#0C1013] to-[#0A1014]">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#F87171]">The Problem</p>
                <h2 className="text-4xl font-bold sm:text-5xl">You Know What You Need to Do</h2>
                <div className="space-y-4 text-lg text-white/80">
                  <p>Start the business. Send the pitch. Share the work. Make the pivot.</p>
                  <p>But somehow, you keep not doing it.</p>
                <p>Because every time you{"'"}re about to start, a voice shows up:</p>
                <p className="italic text-white/50">Not ready yet. Need more research. Should wait for better timing.</p>
                  <p className="pt-2 text-2xl font-semibold text-[#F87171]">The cost of staying stuck is compounding daily.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#F87171]/30 bg-[#F87171]/5 p-6 text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#F87171]">Meanwhile:</p>
              <ul className="space-y-2 text-white/70">
                <li>• Your industry is automating the safe work</li>
                <li>• People with less experience are shipping and building portfolios</li>
                <li>• Your creative ideas sit in notebooks instead of generating income</li>
                <li>• The gap between who you are and who you need to become keeps widening</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="patterns" className="bg-gradient-to-b from-[#0A1014] via-[#111B24] to-[#101523]">
          <div className="mx-auto max-w-5xl space-y-10 text-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#9AE6B4]">Why This Happens</p>
              <h2 className="text-4xl font-bold sm:text-5xl">You don{"'"}t have a motivation problem.</h2>
              <p className="text-lg text-white/80">
                You have a pattern recognition problem. These patterns sound reasonable—until you name them.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {CONTENT.patterns.map((pattern) => (
                <div key={pattern.title} className="flex">
                  <Card {...pattern} />
                </div>
              ))}
            </div>
            <p className="mt-4 text-lg text-white/80">
              These patterns are invisible until you learn to see them. Once you see them, you can interrupt them. Once you interrupt them, you can move.
            </p>
          </div>
        </Section>

        <Section id="lessons" className="bg-gradient-to-b from-[#101523] via-[#110C13] to-[#1A1220]">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="max-w-3xl text-center lg:text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#9AE6B4]">What Sprint 1 Does</p>
              <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Recognize. Interrupt. Move.</h2>
              <p className="text-lg text-white/70">Three lessons. Three tools. Ten days to break the pattern.</p>
            </div>
            <div className="max-w-4xl lg:max-w-none">
              <Accordion items={CONTENT.lessons} openItem={openLesson} setOpenItem={setOpenLesson} />
            </div>
          </div>
        </Section>

        <Section id="deliverables" className="bg-gradient-to-b from-[#1A1220] via-[#0C1013] to-black">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="max-w-3xl text-center lg:text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#9AE6B4]">What You Get</p>
              <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Everything to break the pattern.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CONTENT.deliverables.map((item) => (
                <Card key={item.title} {...item} />
              ))}
            </div>
            <div className="mt-6 space-y-4 rounded-3xl border-l-4 border-[#9AE6B4] bg-[#9AE6B4]/10 p-6 text-left shadow-[0_0_40px_rgba(154,230,180,0.18)]">
              <h3 className="text-xl font-semibold text-white">How The 3 Systems Make This Work</h3>
              <p className="text-base text-white/80">
                Sprint 1 isn{"'"}t just content—it{"'"}s powered by three interlocking systems that make execution inevitable:
              </p>
              <ul className="space-y-2 text-base text-white/80">
                <li>
                  <strong>The Accountability Engine:</strong> Daily AI check-ins that won{"'"}t let you disappear
                </li>
                <li>
                  <strong>The One Goal System:</strong> One clear action per day (no overwhelm)
                </li>
                <li>
                  <strong>The Adaptive Learning Path:</strong> Personalized to YOUR patterns and personality
                </li>
              </ul>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-base font-semibold text-[#9AE6B4] transition-opacity hover:opacity-90"
              >
                Learn How The 3 Systems Work →
              </Link>
            </div>
          </div>
        </Section>

        <Section id="journey-context" className="bg-gradient-to-b from-[#101523] via-[#0A1014] to-[#110C13]">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="space-y-4 text-center lg:max-w-3xl lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#9AE6B4]">Part of the 90-Day Journey</p>
              <h2 className="text-4xl font-bold sm:text-5xl">Sprint 1 Is The Foundation</h2>
              <p className="text-xl text-white/80">You can{"'"}t build vision while paralyzed by fear. Everything starts here.</p>
              <p className="text-lg text-white/80">
                Sprint 1 is the first of 9 sprints in the 90-Day Creative Transmutation Framework. Each sprint builds on the foundation you create here.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-[#9AE6B4]/30 bg-[#9AE6B4]/10 p-6 text-left shadow-[0_0_40px_rgba(154,230,180,0.2)]">
                <span className="inline-flex items-center rounded-full bg-[#9AE6B4] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
                  You Are Here
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">Phase 1: Unlock</h3>
                <p className="mt-2 text-sm text-white/80">Break free from fear, resistance, and outdated rules.</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li className="flex items-center justify-between gap-2">
                    <span>→ Sprint 1: Break Free</span>
                    <span className="text-[#9AE6B4]">✓</span>
                  </li>
                  <li>→ Sprint 2: Ignite Vision</li>
                  <li>→ Sprint 3: Master Mindset</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
                <h3 className="text-xl font-semibold text-white">Phase 2: Strengthen</h3>
                <p className="mt-2 text-sm text-white/80">Build focus, energy, and resilience systems.</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>→ Sprint 4-6</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
                <h3 className="text-xl font-semibold text-white">Phase 3: Activate</h3>
                <p className="mt-2 text-sm text-white/80">Master flow, ship projects, scale output.</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>→ Sprint 7-9</li>
                </ul>
              </div>
            </div>
            <div>
              <Link
                href="/journey"
                className="inline-flex items-center gap-2 text-base font-semibold text-[#9AE6B4] transition-opacity hover:opacity-90"
              >
                See The Complete 90-Day Journey →
              </Link>
            </div>
          </div>
        </Section>

        <Section id="pricing" className="bg-gradient-to-b from-[#101523] via-[#0A1014] to-[#110C13]">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 text-center lg:flex-row lg:items-start lg:gap-16 lg:text-left">
            <div className="lg:max-w-xs">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#9AE6B4]">Beta Pricing</p>
            </div>
            <div className="w-full lg:flex-1">
              <div className="flex flex-col items-center gap-8 lg:items-start">
                <div className="w-full rounded-3xl border-2 border-[#9AE6B4]/30 bg-white/5 p-10 text-center shadow-xl shadow-black/50 lg:text-left">
                  <div className="mb-2 text-6xl font-bold text-white">$97</div>
                  <p className="mb-8 text-sm text-white/50 lg:text-left">Regular price $297 after beta</p>
                  <Link
                    href="/checkout/sprint-1"
                    className="inline-flex items-center justify-center rounded-full bg-[#9AE6B4] px-10 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90 lg:justify-start"
                  >
                    Start Sprint 1 — $97
                  </Link>
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-white/60">OR</p>
                <div className="w-full rounded-3xl border-2 border-[#9AE6B4]/30 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-10 text-center shadow-xl shadow-black/40 lg:text-left">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide text-[#9AE6B4]">
                    <span className="rounded-full border border-[#9AE6B4]/40 bg-[#9AE6B4]/15 px-4 py-1">BEST VALUE - SAVE $1,976</span>
                  </div>
                  <h3 className="mt-6 text-3xl font-bold text-white">Pre-Order Full 90-Day Journey</h3>
                  <div className="mt-4 text-6xl font-bold text-white">$697</div>
                  <p className="mt-2 text-sm text-white/60">regularly $2,673 when complete</p>
                  <p className="mt-6 text-base text-white/80">
                    Get Sprint 1 immediately + Sprints 2-9 as they release. Lock in beta pricing forever.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-white/80">
                    <li>✓ All 9 sprints (releasing consecutively)</li>
                    <li>✓ Shape future content with your feedback</li>
                    <li>✓ Pioneer community access</li>
                    <li>✓ Lifetime access to everything</li>
                  </ul>
                  <Link
                    href="/journey"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#9AE6B4] px-10 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90 lg:justify-start"
                  >
                    Pre-Order Full Journey — $697
                  </Link>
                </div>
                <div className="w-full rounded-xl bg-black/50 p-6 text-left">
                  <h3 className="mb-2 text-base font-semibold text-[#9AE6B4]">Money-Back Guarantee</h3>
                  <p className="text-sm text-white/60">
                    Complete all 3 lessons and use the tools for 7 days. If you don{"'"}t see measurable progress, we{"'"}ll refund you in full.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="faq" className="bg-gradient-to-b from-[#110C13] to-black">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="max-w-3xl text-center lg:text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#9AE6B4]">FAQ</p>
              <h2 className="text-4xl font-bold sm:text-5xl">Common Questions</h2>
            </div>
            <div className="max-w-4xl lg:max-w-none">
              <Accordion items={CONTENT.faq} openItem={openFAQ} setOpenItem={setOpenFAQ} itemKey="q" />
            </div>
          </div>
        </Section>

        <Section id="final" className="bg-gradient-to-b from-[#110C13] to-black">
          <div className="mx-auto max-w-4xl text-center lg:text-left">
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">This will be hard. But worth it.</h2>
            <p className="mb-10 text-xl text-white/80">
              In 10 days, you{"'"}ll have momentum. In 90 days, a complete creative system.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-stretch lg:justify-start">
              <Link
                href="#pricing"
                onClick={(event) => handleSmoothNav(event, "#pricing")}
                className="inline-flex items-center justify-center rounded-full bg-[#9AE6B4] px-10 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90"
              >
                Start Sprint 1 Now — $97
              </Link>
              <Link
                href="/journey"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-10 py-4 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                Pre-Order Full Journey — $697
              </Link>
            </div>
            <p className="mt-10 text-2xl font-bold text-[#9AE6B4]">Stay Human. Stay Creative.</p>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <p className="text-center text-sm text-white/60">© 2025 Pioneer Your Creative. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
