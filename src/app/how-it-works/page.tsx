"use client";

import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Particles } from "@/components/Particles";

const SPRINT1_COURSE_URL = "https://pioneeryourcreative.thinkific.com/courses/sprint1" as const;

type AccountabilityBlock = {
  title: string;
  lines: string[];
};

type PersonalityProfile = {
  name: string;
  description: string;
  language: string;
};

type Platform = {
  title: string;
  description: string;
};

type Stat = {
  value: string;
  description: string;
};

const accountabilityBlocks: AccountabilityBlock[] = [
  {
    title: "DAILY TOUCHPOINTS",
    lines: [
      "Your AI Co-Pilot checks in twice daily:",
      "**Morning:** “What’s your one goal today?” (15-30 min action)",
      "**Evening:** “Did you complete it? Yes/No/Partial”",
      "**What It Tracks:** Completion rate • Energy levels (1-10 scale) • Day-of-week patterns • Creative output over time",
    ],
  },
  {
    title: "WEEKLY CHECK-INS",
    lines: [
      "**Day 3 Email:** “How’s it going? Reply if stuck” (personal human response)",
      "**Day 7 AI Summary:** “Here’s what I’m seeing in your patterns...”",
      "**Day 7 WOBO Reflection:** Weekly PDF upload for deeper synthesis",
    ],
  },
  {
    title: "RECOVERY PROTOCOL",
    lines: [
      "**Missed 2 Days:** Automated email “You’ve gone quiet. What’s blocking you?”",
      "**3+ Incomplete Days:** AI makes goals smaller, not harder (adapts to YOUR capacity)",
      "**Community Integration:** Optional peer accountability threads",
    ],
  },
];

const personalityProfiles: PersonalityProfile[] = [
  {
    name: "VISIONARY",
    description: "Big-picture reminders, exploration permission.",
    language: "“What if...” • “Imagine...” • “Your vision is...”",
  },
  {
    name: "EXECUTOR",
    description: "Clear next steps, efficiency optimization.",
    language: "“Here’s the plan...” • “Next action...” • “You’re on track...”",
  },
  {
    name: "CONNECTOR",
    description: "Community validation, relational framing.",
    language: "“Share this with...” • “Others are experiencing...”",
  },
  {
    name: "OPTIMIZER",
    description: "Systems, frameworks, measurable progress.",
    language: "“Here’s the system...” • “Track this metric...”",
  },
];

const platforms: Platform[] = [
  { title: "THINKIFIC", description: "Content delivery (lessons, videos, tools)." },
  { title: "AI CO-PILOT", description: "Daily accountability & personalization." },
  { title: "NOTION DASHBOARD", description: "Progress tracking & resource hub." },
  { title: "EMAIL", description: "Support & recovery safety net." },
];

const stats: Stat[] = [
  { value: "10 days", description: "To build proof you can execute despite blocks." },
  { value: "90 days", description: "To transform creative patterns that compound." },
  { value: "200+", description: "Curated resources personalized to YOU." },
];

function renderMarkdown(lines: string[]) {
  return lines.map((line, index) => {
    const segments = line.split("**");
    return (
      <p key={index} className="text-sm text-white/70">
        {segments.map((segment, idx) => (idx % 2 === 1 ? <strong key={idx}>{segment}</strong> : segment))}
      </p>
    );
  });
}

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white">
        <section className="relative min-h-[80vh] overflow-hidden">
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
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#9AE6B4]">The Differentiator</p>
            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">The 3 Systems That Make This Work</h1>
            <p className="mt-6 text-xl text-secondary">Why Pioneer Your Creative works when traditional courses fail.</p>
            <p className="mt-6 text-lg text-secondary">
              Most online courses give you great content and hope you&apos;ll use it. We built three interlocking systems that make execution inevitable—not aspirational.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#0A1014] via-[#111B24] to-[#101523] py-24">
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center rounded-full bg-[#9AE6B4]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#9AE6B4]">
              System 1
            </span>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold sm:text-5xl">The Accountability Engine</h2>
              <p className="text-2xl font-semibold text-[#9AE6B4]">You can&apos;t disappear. We won&apos;t let you.</p>
            </div>
            <div className="space-y-6 text-lg text-secondary">
              <h3 className="text-2xl font-bold text-white">The Problem With Traditional Courses</h3>
              <p>You watch the videos. You download the PDFs. You tell yourself “I&apos;ll do this tomorrow.” Tomorrow becomes next week. Next week becomes never.</p>
              <p>
                90% of online courses are never completed—not because they&apos;re bad, but because they rely on willpower. Willpower is a finite resource. When life hits, it runs out. Execution stops.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                <h3 className="text-xl font-bold text-white">How The Accountability Engine Works</h3>
                <div className="space-y-6">
                  {accountabilityBlocks.map((block) => (
                    <div key={block.title} className="rounded-2xl border border-white/10 bg-black/50 p-6 shadow-lg shadow-black/30">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9AE6B4]">{block.title}</h4>
                      <div className="mt-4 space-y-2">{renderMarkdown(block.lines)}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(15,20,30,0.35)]">
                <h3 className="text-xl font-bold text-white">The AI Co-Pilot Profiles</h3>
                <p className="text-sm text-white/70">
                  The AI Co-Pilot analyzes your responses and shifts tone based on your creative personality. Some days you need heat. Some days you need gentleness.
                </p>
                <div className="space-y-4">
                  {personalityProfiles.map((profile) => (
                    <div key={profile.name} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9AE6B4]">{profile.name}</h4>
                      <p className="mt-2 text-sm text-white/70">{profile.description}</p>
                      <p className="mt-1 text-xs text-white/60">{profile.language}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#101523] via-[#0A1014] to-[#040608] py-24">
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center rounded-full bg-[#9AE6B4]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#9AE6B4]">
              System 2
            </span>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold sm:text-5xl">The Focus Framework</h2>
              <p className="text-2xl font-semibold text-[#9AE6B4]">One goal per day. No decision fatigue.</p>
            </div>
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6 text-lg text-secondary">
                <h3 className="text-2xl font-bold text-white">Why This Matters</h3>
                <p>Most people fail because the plan is too complicated. The Focus Framework gives you one meaningful action per day that builds momentum.</p>
                <p>Each sprint has a “north star goal”—and every day you take one action toward it. That&apos;s how you build proof, trust yourself, and compound outcomes.</p>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(15,20,30,0.35)]">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9AE6B4]">Inside The Focus Framework</h4>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    <li>→ Daily AI prompt calibrates your goal.</li>
                    <li>→ Goal must be completable in 15-30 minutes.</li>
                    <li>→ Evening check-in verifies completion and captures data.</li>
                    <li>→ Weekly summary highlights progress and surfaces patterns.</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(15,20,30,0.35)]">
                  <h3 className="text-xl font-bold text-white">What Students Experience</h3>
                  <div className="space-y-4 text-sm text-white/70">
                    <p>• Before: 60-tab days, switching between ideas, zero output.</p>
                    <p>• After: One daily action, completed by 10 AM, logged with proof.</p>
                    <p>• Result: Compounded execution + proof you can always return to when fear spikes.</p>
                  </div>
                </div>
                <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(15,20,30,0.35)]">
                  <h3 className="text-xl font-bold text-white">The Sprint Structure</h3>
                  <ul className="space-y-4 text-sm text-white/70">
                    <li>
                      <strong>10 Days Per Sprint:</strong> Each day builds on the last.
                    </li>
                    <li>
                      <strong>Daily Lesson (5-10 min):</strong> Unlocks context and builds the habit.
                    </li>
                    <li>
                      <strong>Daily Action (15-30 min):</strong> Executes the concept immediately.
                    </li>
                    <li>
                      <strong>Weekly Debrief:</strong> Locks in the learning and prepares the next sprint.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#040608] via-[#0A1014] to-[#101523] py-24">
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center rounded-full bg-[#9AE6B4]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#9AE6B4]">
              System 3
            </span>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold sm:text-5xl">The Personalization Loop</h2>
              <p className="text-2xl font-semibold text-[#9AE6B4]">The system evolves as you execute.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-6 text-lg text-secondary">
                <h3 className="text-2xl font-bold text-white">What Makes This Different</h3>
                <p>Most programs give you a one-size-fits-all roadmap. The Personalization Loop adapts the roadmap to you—as you build momentum.</p>
                <p>The more you show up, the smarter the system gets. We analyze your responses, energy levels, and completion rates to recommend what you need next.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {platforms.map((platform) => (
                    <div key={platform.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30">
                      <h3 className="text-lg font-semibold text-[#9AE6B4]">{platform.title}</h3>
                      <p className="mt-3 text-sm text-white/70">{platform.description}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-6 text-white">
                  <h3 className="text-2xl font-bold">Daily Student Experience</h3>
                  <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-[#9AE6B4]">Morning</h4>
                      <ul className="mt-3 space-y-2 text-sm text-white/70">
                        <li>→ Check Thinkific for today&apos;s lesson (if applicable).</li>
                        <li>→ AI Co-Pilot: “Set your one goal”.</li>
                        <li>→ Work on goal (15-30 min).</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-[#9AE6B4]">Evening</h4>
                      <ul className="mt-3 space-y-2 text-sm text-white/70">
                        <li>→ AI Co-Pilot: “Report completion”.</li>
                        <li>→ AI tracks pattern, adjusts tomorrow&apos;s goal.</li>
                        <li>→ Thinkific: Upload WOBO reflection (weekly).</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-[#9AE6B4]">Weekly</h4>
                      <ul className="mt-3 space-y-2 text-sm text-white/70">
                        <li>→ AI generates progress summary.</li>
                        <li>→ Recommends resources from library based on patterns.</li>
                        <li>→ Email check-in from support team.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-secondary shadow-lg shadow-black/30">
                    <p>This creates a seamless loop: Learn → Execute → Track → Adapt → Learn better.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-lg text-secondary">
                <h3 className="text-2xl font-bold text-white">What The Data Does</h3>
                <p>The system isn&apos;t tracking you to judge you—it&apos;s tracking to support you.</p>
                <div className="space-y-4 text-sm text-white/70">
                  <p>• Completion streaks inform when to nudge or cheer.</p>
                  <p>• Energy logs highlight when to adjust goals.</p>
                  <p>• Pattern recognition surfaces your high-leverage actions.</p>
                </div>
                <p>When you get stuck, it&apos;s not “try harder.” It&apos;s “Here&apos;s what to do next.”</p>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(15,20,30,0.35)]">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9AE6B4]">What Students Say</h4>
                  <div className="mt-4 space-y-4 text-sm text-white/70">
                    <p>“For the first time, I feel like someone is actually watching my execution—not just whether I finished the videos.”</p>
                    <p>“The AI doesn&apos;t let me hide. But it also doesn&apos;t shame me. It gets me moving again.”</p>
                    <p>“I stopped waiting to feel ready. Now I just do today&apos;s thing. It&apos;s wild how fast it compounds.”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-black via-[#0C1013] to-[#0A1014] py-24">
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold sm:text-5xl">The Result: Behavioral Change That Compounds</h2>
            </div>
            <div className="space-y-4 text-lg text-secondary">
              <p>Most courses give you information and hope you&apos;ll use it.</p>
              <p>
                Pioneer Your Creative gives you daily accountability that won&apos;t let you disappear, one clear goal that prevents overwhelm, and personalized recommendations based on YOUR patterns.
              </p>
              <p>The result isn&apos;t just knowledge. It&apos;s behavioral change backed by evidence.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.value} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-black/30">
                  <p className="text-4xl font-bold text-[#9AE6B4]">{stat.value}</p>
                  <p className="mt-3 text-sm text-white/70">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#9AE6B4]/20 via-[#68D391]/10 to-transparent py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#9AE6B4]/30 bg-black/60 p-10 text-center shadow-xl shadow-black/50 backdrop-blur">
            <h2 className="text-4xl font-bold sm:text-5xl">Ready To Experience The Difference?</h2>
            <p className="mt-6 text-xl text-secondary">
              The 3 Systems are built into every sprint. You don&apos;t opt in—they&apos;re how the journey works. Start with Sprint 1 and see how accountability, clarity, and personalization change everything.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={SPRINT1_COURSE_URL}
                className="inline-flex items-center justify-center rounded-full bg-[#9AE6B4] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90"
              >
                Start Sprint 1 — $97
              </Link>
              <Link
                href="/journey"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                See Full 90-Day Journey →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
