"use client";

import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Particles } from "@/components/Particles";

const SPRINT1_COURSE_URL = "https://pioneeryourcreative.thinkific.com/courses/sprint1" as const;

type HeroContent = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  paragraphs: string[];
  ctaLabel: string;
  ctaId: string;
};

type Outcome = {
  title: string;
  description: string;
};

type PhaseContent = {
  label: string;
  subtitle: string;
  description: string;
  sprints: string[];
  outcome: string;
};

type CloserContent = {
  text: string;
  ctaLabel: string;
  secondaryText: string;
  ctaId: string;
};

export type PathLandingTemplateProps = {
  hero: HeroContent;
  outcomes: Outcome[];
  phases: PhaseContent[];
  closer: CloserContent;
  phasesSubheadline?: string;
};

function CheckIcon() {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[var(--green-primary)] shadow-inner shadow-black/40">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function PathLandingTemplate({ hero, outcomes, phases, closer, phasesSubheadline }: PathLandingTemplateProps) {
  return (
    <>
      <Header />
      <main className="bg-black text-white">
        <section className="relative min-h-[80vh] overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-l from-red-500/30 via-red-700/15 to-transparent" aria-hidden="true" />
            <div className="absolute right-0 top-0 h-[900px] w-[900px] bg-gradient-radial from-[#F87171]/40 via-[#F87171]/20 to-transparent" aria-hidden="true" />
            <div className="absolute right-12 top-1/3 h-[700px] w-[700px] bg-gradient-radial from-red-500/35 via-red-600/15 to-transparent blur-2xl" aria-hidden="true" />
            <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] bg-gradient-radial from-[#F87171]/30 via-transparent to-transparent blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black to-transparent" aria-hidden="true" />
          </div>
          <Particles />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            {hero.eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--green-primary)]">{hero.eyebrow}</p>
            ) : null}
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">{hero.headline}</h1>
            <p className="mt-4 text-xl text-white/80 md:text-2xl">{hero.subheadline}</p>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/80">
              {hero.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href={SPRINT1_COURSE_URL}
                data-cta={hero.ctaId}
                className="inline-flex items-center justify-center rounded-full bg-[var(--green-primary)] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60"
              >
                {hero.ctaLabel}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#050607] via-[#0B1014] to-[#050607] py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--brand-accent)]">Where You'll Be By Day 90</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Where You'll Be By Day 90</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {outcomes.map((outcome) => (
                <article key={outcome.title} className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.45)]">
                  <CheckIcon />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{outcome.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-white/75">{outcome.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#040608] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--green-primary)]">The 90-Day Framework</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">The 90-Day Framework</h2>
            <p className="mt-3 text-base text-white/80 md:text-lg">{phasesSubheadline ?? "Three phases designed specifically for this path—so you can build momentum without burning out."}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {phases.map((phase) => (
                <article
                  key={phase.label}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-[#0E1A1C] via-[#070C0E] to-[#030405] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--green-primary)]">{phase.label}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{phase.subtitle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{phase.description}</p>
                  <div className="mt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">Sprints inside</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/85">
                      {phase.sprints.map((sprint) => (
                        <li key={sprint}>{sprint}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto border-t border-white/10 pt-5">
                    <p className="text-sm leading-relaxed text-white/85">
                      <span className="font-semibold text-[var(--green-primary)]">Outcome:</span> {phase.outcome}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-[#050709] py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-2xl font-bold text-white md:text-3xl">{closer.text}</p>
            <Link
              href={SPRINT1_COURSE_URL}
              data-cta={closer.ctaId}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--green-primary)] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60"
            >
              {closer.ctaLabel}
            </Link>
            <p className="mt-3 text-sm text-white/60">{closer.secondaryText}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
