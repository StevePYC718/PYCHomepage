"use client";

import { useState } from "react";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Particles } from "@/components/Particles";

const SPRINT1_COURSE_URL = "https://pioneeryourcreative.thinkific.com/courses/sprint1" as const;

type Lesson = {
  title: string;
  description: string;
};

type FutureSprintCard = {
  badge: string;
  title: string;
  meta: string;
  listHeading: string;
  listItems: string[];
  promise: string;
  outcome: string;
  reality?: string;
  note?: string;
  toolsHeading?: string;
  tools?: string[];
};

type Comparison = {
  title: string;
  subtitle: string;
};

type Step = {
  title: string;
  points: string[];
  badge?: string;
};

type PricingOption = {
  badge: string;
  title: string;
  price: string;
  priceNote: string;
  included: string[];
  ctaLabel: string;
  href: string;
  highlight?: boolean;
  saveLabel?: string;
};

type Benefit = {
  number: string;
  title: string;
  lines: string[];
  emphasis?: string;
};

type StartOption = {
  title: string;
  description: string;
  detail: string;
  ctaLabel: string;
  href: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const sprintOne = {
  badge: "AVAILABLE NOW",
  title: "Sprint 1: Break Free From Blocks",
  meta: "Days 1-10 | Foundation",
  reality:
    "You know what you need to do. Start the business. Send the pitch. Share the work. But somehow, you keep not doing it. Not because you don&apos;t care—because fear shows up disguised as &apos;I&apos;m not ready yet.&apos;",
  lessonsHeading: "What You&apos;ll Learn:",
  lessons: [
    {
      title: "**Lesson 1: Fear** - Break the Inaction Cycle",
      description:
        "Understand what fear actually is (neurological, not personal failing) and learn the 3-minute protocol that breaks the freeze response in real time.",
    },
    {
      title: "**Lesson 2: Resistance** - Recognize Your Patterns",
      description:
        "Identify your specific avoidance behaviors (research loops, perfectionism, timing optimization) so you stop falling for your own excuses.",
    },
    {
      title: "**Lesson 3: Identity** - Permission to Evolve",
      description:
        "Update the outdated rules you&apos;re following (from old economy, old career, old version of you) and test new behaviors without pressure of permanent change.",
    },
  ] as Lesson[],
  promise: "Transform blocks into fuel for forward motion.",
  outcome: "Replace paralysis with daily action; shift fear into courage; release old identities holding you back.",
  toolsHeading: "Tools You Get:",
  tools: ["Fear Interrupt Protocol", "Resistance Pattern Map", "Identity Experiment Framework"],
  price: "$97",
  priceNote: "regularly $297 after beta",
  ctaLabel: "Start Sprint 1 — $97",
  ctaHref: SPRINT1_COURSE_URL,
};

const phaseOneFutureSprints: FutureSprintCard[] = [
  {
    badge: "RELEASING JANUARY 2026",
    title: "Sprint 2: Ignite Vision & Purpose",
    meta: "Days 11-20 | Direction",
    reality:
      "Moving without direction burns energy. You need a compelling vision anchored in purpose—not just goals, but a future so vivid it pulls you forward even when you&apos;re tired.",
    listHeading: "Planned Lessons:",
    listItems: ["See Your Future - Build a 3-Year Vision", "Find Your Why - Anchor in Purpose", "Fuel with Desire - Harness Motivation"],
    promise: "Build a compelling vision anchored in purpose.",
    outcome: "Vivid 3-year vision; daily actions aligned with deeper meaning; stronger desire fueling motivation.",
    note: "Final lesson structure will be refined based on Sprint 1 pioneer feedback.",
  },
  {
    badge: "RELEASING FEBRUARY 2026",
    title: "Sprint 3: Master Your Mindset",
    meta: "Days 21-30 | Mental Control",
    reality:
      "Your default mindset determines everything. Fixed mindset sees obstacles as proof you can&apos;t. Growth mindset sees them as data for improvement. State control determines whether you access your best thinking or your worst reactions.",
    listHeading: "Planned Lessons:",
    listItems: ["Adopt Growth Mindset - Shift Your Beliefs", "Control Your State - Master Your Emotions", "Step into Future Self - Embody Who You&apos;re Becoming"],
    promise: "Develop the mindset and state control of resilient creators.",
    outcome: "Shift from fixed → growth mindset; practical state-switch tools; daily embodiment of future self.",
  },
];

const phaseTwoFutureSprints: FutureSprintCard[] = [
  {
    badge: "RELEASING MARCH 2026",
    title: "Sprint 4: Clear Mental Clutter",
    meta: "Days 31-40 | Focus",
    reality:
      "Your attention is shredded by other people&apos;s agendas. Meetings, Slack, social media, notifications. Your brain never gets a clear runway to build anything meaningful.",
    listHeading: "Planned Lessons:",
    listItems: ["Audit Your Attention - Spot Your Traps", "Design Your Focus Windows", "Protect Them Daily"],
    promise: "Reclaim your attention and build deep-work capacity.",
    outcome: "Cut context switching; protect execution time; focus like a pro in 90 minutes or less.",
  },
  {
    badge: "RELEASING APRIL 2026",
    title: "Sprint 5: Fuel Body & Mind",
    meta: "Days 41-50 | Energy",
    reality:
      "You&apos;re exhausted. Stress hormones are running the show. Your body doesn&apos;t know if it&apos;s safe. You can&apos;t create at your best when you&apos;re running on fumes.",
    listHeading: "Planned Lessons:",
    listItems: ["Reset Your Nervous System", "Design Your Energy Protocol", "Build Rest Without Guilt"],
    promise: "Restore energy so execution becomes sustainable.",
    outcome: "Energy baseline returns; nervous system calms; body supports your ambition.",
  },
  {
    badge: "RELEASING MAY 2026",
    title: "Sprint 6: Build Resilience & Strength",
    meta: "Days 51-60 | Stamina",
    reality:
      "Momentum dies because life happens. Kids get sick. Launch gets messy. Motivation dips. Resilience is how you keep going—and how you keep coming back when you fall off.",
    listHeading: "Planned Lessons:",
    listItems: ["Design Your Resilience Toolkit", "Install Bounce-Back Rituals", "Strengthen Creative Confidence"],
    promise: "Make consistency effortless and self-trust unshakable.",
    outcome: "Bounce back faster; stay on track despite setbacks; move from fragile to anti-fragile.",
  },
];

const phaseThreeFutureSprints: FutureSprintCard[] = [
  {
    badge: "RELEASING JUNE 2026",
    title: "Sprint 7: Think Like an Alchemist",
    meta: "Days 61-70 | Creative Leverage",
    reality:
      "You have ideas. Too many. But they never gel into something you can ship. Your brain needs structure to turn sparks into systems—ideas that compound, assets that build equity.",
    listHeading: "Planned Lessons:",
    listItems: ["Surface The Signal - Choose Breakthrough Ideas", "Engineer Your Edge - Build Differentiation", "Prototype Fast - Ship & Learn"],
    promise: "Think like a creative strategist who can build anything.",
    outcome: "Clear creative angle; personal point of view; ideas mapped to execution.",
  },
  {
    badge: "RELEASING JULY 2026",
    title: "Sprint 8: Master Your Creative Toolkit",
    meta: "Days 71-80 | Production Flow",
    reality:
      "Even when you know what to build, the tools slow you down. You&apos;re half-confident with video, avoid landing pages, open five AI apps and never finish.",
    listHeading: "Planned Lessons:",
    listItems: ["Build Your Tool Stack - AI + No-Code + Systems", "Understand Flow States - Operate in Peak Creativity", "Ship Fast - Templates that Shorten Production"],
    promise: "Turn ideas into assets fast and consistently.",
    outcome: "Tool mastery; repeatable creative system; frictionless publish pipeline.",
  },
  {
    badge: "RELEASING AUGUST 2026",
    title: "Sprint 9: Create, Ship & Scale",
    meta: "Days 81-90 | Launch Momentum",
    reality:
      "Finishing is the hardest part. Launching is even harder. If you&apos;ve ever ghosted your own project at 90%, you know the feeling. You need an environment that makes shipping inevitable.",
    listHeading: "Planned Lessons:",
    listItems: ["Final 10% Protocol - Finish Strong", "Launch With Confidence - Scripts, Emails, Offers", "Scale Strategically - Momentum Plan"],
    promise: "Turn creative energy into a launch you can feel.",
    outcome: "Launch complete; post-launch plan; expansion roadmap.",
  },
];

const comparisons: Comparison[] = [
  {
    title: "Traditional Online Course",
    subtitle: "Self-paced videos with optional community.",
  },
  {
    title: "Performance Coaching",
    subtitle: "$500-$2000/mo+, personalized but not scalable.",
  },
  {
    title: "Pioneer Your Creative",
    subtitle: "90-day execution journey blending AI, human support, and neuroscience-backed systems.",
  },
];

const journeySteps: Step[] = [
  {
    badge: "START HERE",
    title: "Phase 1: Unlock Creative Energy (Sprints 1-3)",
    points: [
      "Break fear, resistance, and outdated identity rules.",
      "Choose your escape path (pivot, business, or project).",
      "Ship your first proof within 10 days.",
    ],
  },
  {
    title: "Phase 2: Strengthen Creative Energy (Sprints 4-6)",
    points: [
      "Reclaim focus by reducing distractions and fragmenting habits.",
      "Restore energy through nervous system regulation and sustainable routines.",
      "Build resilience so execution survives real life.",
    ],
  },
  {
    title: "Phase 3: Activate Creative Energy (Sprints 7-9)",
    points: [
      "Generate transformative ideas and choose what to ship.",
      "Master tools, production flow, and AI co-creation.",
      "Launch confidently with a 3-week momentum plan.",
    ],
  },
];

const benefits: Benefit[] = [
  {
    number: "01",
    title: "You stop disappearing on yourself.",
    lines: [
      "Daily accountability makes follow-through your default.",
      "Proof replaces doubt. You know you can execute.",
      "Momentum compounds because you build it every day.",
    ],
  },
  {
    number: "02",
    title: "You build energy instead of burning it.",
    lines: [
      "Focus returns. Distractions lose their grip.",
      "You install resilience rituals that catch you before burnout hits.",
      "Your nervous system moves from fight/flight to power and presence.",
    ],
  },
  {
    number: "03",
    title: "You ship the thing that changes your life.",
    lines: [
      "Business? You ship the first offer or pilot.",
      "Career pivot? You launch the work that gets you hired.",
      "Creative project? You publish it, promote it, and build what’s next.",
    ],
    emphasis: "Because now, execution is who you are—not what you’re trying to remember.",
  },
];

const pricingOptions: PricingOption[] = [
  {
    badge: "START HERE",
    title: "Sprint 1 Only",
    price: "$97",
    priceNote: "regularly $297 after beta",
    included: [
      "✓ All 3 lessons + execution tools",
      "✓ 10 days of AI Co-Pilot accountability",
      "✓ Private community access",
      "✓ Lifetime access to Sprint 1 content",
      "✓ Input on Sprint 2 development",
    ],
    ctaLabel: "Start Sprint 1 — $97",
    href: SPRINT1_COURSE_URL,
  },
  {
    badge: "BEST VALUE - SAVE $1,976",
    title: "Full 90-Day Journey (Pre-Order)",
    price: "$697",
    priceNote: "regularly $2,673 when complete",
    included: [
      "✓ All 9 sprints (releasing consecutively)",
      "✓ Get Sprint 1 immediately",
      "✓ Shape future content with your feedback",
      "✓ Personalized AI Co-Pilot (90 days)",
      "✓ All execution tools (yours forever)",
      "✓ Pioneer community access",
      "✓ Lifetime access + all future updates",
    ],
    ctaLabel: "Pre-Order Full Journey — $697",
    href: "/journey",
    highlight: true,
    saveLabel: "Save $1,976 during beta",
  },
];

const startOptions: StartOption[] = [
  {
    title: "Start with Sprint 1",
    description: "10 days. Interrupt fear and resistance. Ship your first proof.",
    detail: "Perfect if you need to see real momentum before committing to the full 90-day journey.",
    ctaLabel: "Start Sprint 1 — $97",
    href: SPRINT1_COURSE_URL,
  },
  {
    title: "Pre-Order The Full Journey",
    description: "Get Sprint 1 now. Access each new sprint as it releases.",
    detail: "Best value for creators who know they need the full system to pivot careers or build a business.",
    ctaLabel: "Pre-Order Journey — $697",
    href: "/journey",
  },
];

const comparisonsData = [
  {
    heading: "Traditional Online Course",
    description: [
      "60-90% of students never finish.",
      "You’re on your own. No adaptation. No accountability.",
      "You get information. No execution support.",
    ],
  },
  {
    heading: "Performance Coaching",
    description: [
      "$500-$2,000/month+ for 1:1 sessions.",
      "High-touch, but inconsistent between coaches.",
      "No structured curriculum • No compounding assets.",
    ],
  },
  {
    heading: "Pioneer Your Creative",
    description: [
      "90-day journey with daily accountability.",
      "AI Co-Pilot + human support + proven framework.",
      "Systematic progress toward a launch-ready result.",
    ],
  },
];

const forYouList = [
  "You’re stuck between moving forward and staying “safe.”",
  "You’re exhausted trying to do it all alone.",
  "You want a system that strengthens your energy, not drains it.",
  "You’re ready to ship proof you can see, share, and build on.",
];

const notForYouList = [
  "You want passive learning without action.",
  "You refuse to be coached or supported.",
  "You want “overnight success” and shortcuts.",
  "You’re satisfied staying where you are.",
];

const faqItems: FaqItem[] = [
  {
    question: "What is the 90-day journey exactly?",
    answer:
      "It’s a structured, three-phase execution system. You start with Sprint 1 (available now) to break fear and resistance. Each month, a new sprint releases, guiding you through focus, energy, resilience, and finally launching the work that changes your life.",
  },
  {
    question: "Do I get access to everything right away?",
    answer:
      "Sprint 1 is available immediately. Future sprints release monthly so you can build momentum without overwhelm. Pre-ordering locks in beta pricing and ensures you receive each sprint the moment it’s released.",
  },
  {
    question: "What if I have a full-time job?",
    answer:
      "That’s who this is designed for. Each day requires 15-30 minutes of focused execution. The system protects your energy and keeps you moving, even alongside a demanding career.",
  },
  {
    question: "Can I go at my own pace?",
    answer:
      "You can pause and resume, but the system is engineered for continuous momentum. The daily accountability and weekly check-ins keep you from falling off track.",
  },
  {
    question: "What kind of support do I get?",
    answer:
      "Daily AI Co-Pilot touchpoints, weekly summaries, optional community, and human support when you get stuck. You’re not left guessing what to do next.",
  },
  {
    question: "What if I’m not sure which path (pivot, business, project) to choose?",
    answer:
      "Sprint 1 guides you through choosing the best path for you. By Day 10, you’ll have a clear decision and first proof in motion.",
  },
  {
    question: "Is there a guarantee?",
    answer:
      "Yes. If you complete Sprint 1, submit the work, and don’t feel momentum, email support@pioneeryourcreative.com within 30 days for a full refund.",
  },
];

const futureSprints = [...phaseOneFutureSprints, ...phaseTwoFutureSprints, ...phaseThreeFutureSprints];

export default function JourneyPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="bg-black text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-l from-red-500/30 via-red-700/15 to-transparent" aria-hidden="true" />
            <div className="absolute right-0 top-0 h-[900px] w-[900px] bg-gradient-radial from-[#F87171]/40 via-[#F87171]/20 to-transparent" aria-hidden="true" />
            <div className="absolute right-12 top-1/3 h-[700px] w-[700px] bg-gradient-radial from-red-500/35 via-red-600/15 to-transparent blur-2xl" aria-hidden="true" />
            <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] bg-gradient-radial from-[#F87171]/30 via-transparent to-transparent blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black to-transparent" aria-hidden="true" />
          </div>
          <Particles />
          <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#9AE6B4]">Your Journey</p>
            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">The 90-Day Creative Reboot</h1>
            <p className="mt-6 text-xl text-secondary">Break blocks. Restore focus. Ship work that opens the next chapter of your life.</p>
            <p className="mt-6 text-lg text-secondary">This is for employed creatives, founders, and multi-hyphenates stuck between obligation and the work that makes them free.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={SPRINT1_COURSE_URL}
                className="inline-flex items-center justify-center rounded-full bg-[#9AE6B4] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90"
              >
                Start Sprint 1 — $97
              </Link>
              <Link
                href="#future-sprints"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                See The Full Journey
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-black via-[#111B24] to-[#101523] py-24">
          <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full bg-[#9AE6B4]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#9AE6B4]">
                  Sprint 1
                </span>
                <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-[#9AE6B4]/40 bg-[#9AE6B4]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#9AE6B4]">
                      {sprintOne.badge}
                    </span>
                    <span className="text-xs uppercase tracking-[0.32em] text-white/60">{sprintOne.meta}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">{sprintOne.title}</h2>
                  <p className="text-base text-secondary">{sprintOne.reality}</p>
                  <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-white/70">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9AE6B4]">{sprintOne.lessonsHeading}</h3>
                    <ul className="space-y-3">
                      {sprintOne.lessons.map((lesson) => (
                        <li key={lesson.title}>
                          <p className="text-sm text-white/90" dangerouslySetInnerHTML={{ __html: lesson.title }} />
                          <p className="text-sm text-white/70">{lesson.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-base font-semibold text-white">{sprintOne.promise}</p>
                  <p className="text-sm text-white/70">{sprintOne.outcome}</p>
                  <div className="rounded-2xl border border-[#9AE6B4]/30 bg-[#9AE6B4]/10 p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9AE6B4]">{sprintOne.toolsHeading}</h3>
                    <p className="mt-3 text-base font-semibold text-[#9AE6B4]">Tools You Get: {sprintOne.tools.join(" • ")}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
                    <p className="text-3xl font-bold text-white">{sprintOne.price}</p>
                    <p className="text-sm text-white/70">{sprintOne.priceNote}</p>
                    <Link
                      href={sprintOne.ctaHref}
                      className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#9AE6B4] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90"
                    >
                      {sprintOne.ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                  <h3 className="text-xl font-semibold text-white">Why Sprint 1 Comes First</h3>
                  <div className="mt-4 space-y-3 text-sm text-white/70">
                    <p>You can&apos;t build vision on burnout. You can&apos;t enter flow while frozen by fear. You can&apos;t ship while distracted and depleted.</p>
                    <p>
                      Sprint 1 rebuilds your execution operating system. It gives you the proof that you can move, the confidence to keep going, and the clarity to trust yourself again.
                    </p>
                    <p>Everything that follows—focus, resilience, shipping—depends on it.</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                  <h3 className="text-xl font-semibold text-white">You&apos;ll Ship A Real Result In 10 Days</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    <li>• Career pivot? You&apos;ll send the message, post the work, or ship the portfolio update you&apos;ve avoided for months.</li>
                    <li>• Business? You&apos;ll launch the landing page, start the pilot, or sell the offer that felt “not ready.”</li>
                    <li>• Creative project? You&apos;ll publish one piece publicly and build your momentum plan for the next 3 weeks.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="future-sprints" className="bg-gradient-to-b from-[#101523] via-[#0A1014] to-[#040608] py-24">
          <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9AE6B4]">Upcoming Sprints</p>
              <h2 className="text-4xl font-bold sm:text-5xl">The Journey Unfolds. You&apos;re Part Of The Build.</h2>
              <p className="text-lg text-secondary">
                Sprint 1 pioneers shape what releases next. Every sprint is built on real student data: what blocks you, what moves you, what helps you ship. Here&apos;s what&apos;s planned, and what you&apos;ll help refine.
              </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-3">
              {futureSprints.map((sprint) => (
                <div key={sprint.title} className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-[#9AE6B4]/40 bg-[#9AE6B4]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#9AE6B4]">
                      {sprint.badge}
                    </span>
                    <span className="text-xs uppercase tracking-[0.32em] text-white/60">{sprint.meta}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{sprint.title}</h3>
                  {sprint.reality ? <p className="mt-3 text-sm text-white/70">{sprint.reality}</p> : null}
                  <div className="mt-4 space-y-2 rounded-2xl border border-white/10 bg-black/40 p-5">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9AE6B4]">{sprint.listHeading}</h4>
                    <ul className="space-y-2 text-sm text-white/70">
                      {sprint.listItems.map((item) => (
                        <li key={item}>→ {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-white/70">
                    <p>
                      <strong>Promise:</strong> {sprint.promise}
                    </p>
                    <p>
                      <strong>Outcome:</strong> {sprint.outcome}
                    </p>
                    {sprint.note ? <p className="text-xs text-white/50">{sprint.note}</p> : null}
                  </div>
                  {sprint.toolsHeading && sprint.tools ? (
                    <div className="mt-4 rounded-2xl border border-[#9AE6B4]/20 bg-[#9AE6B4]/10 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9AE6B4]">{sprint.toolsHeading}</h4>
                      <p className="mt-2 text-sm text-white/80">{sprint.tools.join(" • ")}</p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#040608] via-[#0A1014] to-[#101523] py-24">
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold sm:text-5xl">Why This Works When Everything Else Hasn&apos;t</h2>
                <p className="text-lg text-secondary">
                  Most programs are missing the system. They give you content and hope you&apos;ll execute. Pioneer Your Creative gives you the environment that makes execution inevitable.
                </p>
                <div className="grid gap-6 sm:grid-cols-3">
                  {comparisons.map((comparison) => (
                    <div key={comparison.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(15,20,30,0.35)]">
                      <h3 className="text-lg font-semibold text-white">{comparison.title}</h3>
                      <p className="mt-3 text-sm text-white/70">{comparison.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                  <h3 className="text-xl font-semibold text-white">What Makes Pioneer Different</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    <li>• Daily accountability through AI + human support.</li>
                    <li>• 90-day roadmap broken into 3 focused phases.</li>
                    <li>• Systems designed for creative professionals with jobs, families, and real life.</li>
                    <li>• Proof-based progress. You ship every sprint.</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                  <h3 className="text-xl font-semibold text-white">Who This Journey Serves</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    <li>• Mid-career creatives pivoting out of roles AI will automate.</li>
                    <li>• Designers, strategists, writers, marketers building businesses on the side.</li>
                    <li>• Multi-hyphenates who want to ship work that matches their ambition.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#101523] via-[#0A1014] to-[#040608] py-24">
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              {journeySteps.map((step) => (
                <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                  {step.badge ? (
                    <span className="inline-flex items-center rounded-full border border-[#9AE6B4]/40 bg-[#9AE6B4]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#9AE6B4]">
                      {step.badge}
                    </span>
                  ) : null}
                  <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    {step.points.map((point) => (
                      <li key={point}>→ {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#040608] via-[#0A1014] to-[#101523] py-24">
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold sm:text-5xl">What Changes When You Say Yes</h2>
              <p className="text-lg text-secondary">You don&apos;t need more ideas. You need the system and stamina to act on them.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.number} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                  <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#9AE6B4]">{benefit.number}</span>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{benefit.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    {benefit.lines.map((line) => (
                      <li key={line}>→ {line}</li>
                    ))}
                  </ul>
                  {benefit.emphasis ? <p className="mt-4 text-sm font-semibold text-[#9AE6B4]">{benefit.emphasis}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#101523] via-[#0A1014] to-[#040608] py-24">
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold sm:text-5xl">How You&apos;ll Experience The Journey</h2>
                <p className="text-lg text-secondary">
                  Daily accountability, weekly momentum, lifetime skills. Each sprint builds on the last. You&apos;re not left wondering what to do—you&apos;re guided every step.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {comparisonsData.map((block) => (
                    <div key={block.heading} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(15,20,30,0.35)]">
                      <h3 className="text-lg font-semibold text-white">{block.heading}</h3>
                      <ul className="mt-3 space-y-2 text-sm text-white/70">
                        {block.description.map((item) => (
                          <li key={item}>→ {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                <h3 className="text-xl font-semibold text-white">What Support Looks Like</h3>
                <ul className="space-y-3 text-sm text-white/70">
                  <li>• AI Co-Pilot keeps you on track every day.</li>
                  <li>• Weekly human check-ins when you go quiet.</li>
                  <li>• Private community for momentum sharing and feedback.</li>
                  <li>• Live office hours as each new sprint releases.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#040608] via-[#0A1014] to-[#101523] py-24">
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold sm:text-5xl">Choose How You Want To Start</h2>
              <p className="text-lg text-secondary">No pressure to go all-in immediately. But once you feel Sprint 1, you&apos;ll know.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {pricingOptions.map((option) => (
                <div
                  key={option.title}
                  className={`flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(10,15,25,0.35)] transition-transform hover:-translate-y-1 ${
                    option.highlight ? "ring-2 ring-[#9AE6B4]/80" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-[#9AE6B4]/40 bg-[#9AE6B4]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#9AE6B4]">
                      {option.badge}
                    </span>
                    {option.saveLabel ? <span className="text-xs uppercase tracking-[0.32em] text-white/60">{option.saveLabel}</span> : null}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{option.title}</h3>
                  <p className="text-3xl font-bold text-white">{option.price}</p>
                  <p className="text-sm text-white/70">{option.priceNote}</p>
                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    {option.included.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href={option.href}
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-base font-semibold uppercase tracking-wide transition ${
                      option.highlight
                        ? "bg-[#9AE6B4] text-black shadow-lg shadow-black/30 hover:opacity-90"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    {option.ctaLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#101523] via-[#0A1014] to-[#040608] py-24">
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold sm:text-5xl">Still Not Sure? Here&apos;s How To Decide</h2>
              <p className="text-lg text-secondary">Does any of this sound like you right now?</p>
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                <p className="text-base text-white/80">
                  You keep researching because action feels dangerous. You&apos;re drained because everything that made you great in a job is failing you in entrepreneurship. You&apos;re pulled between being pragmatic and wanting to build something that makes you feel alive.
                </p>
                <p className="text-base text-white/80">This journey removes the cost of staying stuck. You get structure, accountability, and compounding proof that you&apos;re becoming who you already are.</p>
              </div>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                <p className="text-base text-white/80">
                  If you&apos;re waiting to &quot;feel ready,&quot; that moment never arrives. Readiness is a result of action, not a prerequisite. Sprint 1 gives you the first action. The journey gives you all 90 days.
                </p>
                <p className="text-base text-white/80">You become the person who ships. That’s the real transformation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#040608] via-[#0A1014] to-[#101523] py-24">
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold sm:text-5xl">How To Start Today</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {startOptions.map((option) => (
                <div key={option.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_50px_rgba(15,20,30,0.35)] lg:p-8">
                  <h3 className="text-2xl font-bold text-white">{option.title}</h3>
                  <p className="mt-4 text-base text-secondary">{option.description}</p>
                  <p className="mt-3 text-sm text-muted">{option.detail}</p>
                  <Link
                    href={option.href}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
                  >
                    {option.ctaLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-black via-[#111B24] to-[#101523] py-24">
          <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold sm:text-5xl">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item) => {
                const isOpen = openFaq === item.question;
                return (
                  <div key={item.question} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(10,15,25,0.35)]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : item.question)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg font-semibold text-white">{item.question}</span>
                      <span className={`text-3xl text-[#9AE6B4] transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                        +
                      </span>
                    </button>
                    {isOpen ? <div className="border-t border-white/10 px-6 py-6 text-base text-white/70">{item.answer}</div> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#110C13] via-[#1A1220] to-black py-24">
          <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/15 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                <h3 className="text-2xl font-bold text-white">This Is For You If:</h3>
                <ul className="mt-4 space-y-3 text-base text-secondary">
                  {forYouList.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#9AE6B4]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                <h3 className="text-2xl font-bold text-white">This Is NOT For You If:</h3>
                <ul className="mt-4 space-y-3 text-base text-secondary">
                  {notForYouList.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-red-400">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#9AE6B4]/20 via-[#68D391]/10 to-transparent py-24">
          <div className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-white/10 bg-black/40 p-10 text-center shadow-[0_0_80px_rgba(154,230,180,0.18)]">
            <h2 className="text-4xl font-bold sm:text-5xl">Sprint 1 is ready. Your blocks are costing you daily.</h2>
            <p className="text-xl text-secondary">
              Another day of "I&apos;ll start when I&apos;m ready" compounds the cost of staying stuck.
              <br />
              Join the pioneers. Break free from blocks. Shape what comes next.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href={SPRINT1_COURSE_URL}
                className="inline-flex items-center justify-center rounded-full bg-[#9AE6B4] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90"
              >
                Start Sprint 1 — $97
              </Link>
              <Link
                href="/journey"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                Pre-Order Full Journey — $697
              </Link>
            </div>
            <p className="text-sm text-muted">Questions? Email support@pioneeryourcreative.com</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
