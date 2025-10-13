"use client";

import CTAButton from "@/components/cta/CTAButton";
import { useEffect, useRef, useState } from "react";

const CTA_LABEL = "Enroll in Sprint 1 — $97";
const CTA_URL = "https://www.pencilyourcareer.com/checkout/sprint-1";

const featureHighlights = [
  "Weekly live workshops with veteran product leaders",
  "Personalized career roadmap and accountability check-ins",
  "Hands-on portfolio challenge with critique from hiring managers",
  "Private community of peers to keep you motivated",
];

const curriculum = [
  {
    title: "Week 1 — Positioning",
    copy:
      "Clarify the story that makes your experience irresistible to hiring managers. You will craft your north-star positioning statement and get direct feedback in the first workshop.",
  },
  {
    title: "Week 2 — Portfolio Sprint",
    copy:
      "Ship a refreshed portfolio or case study sprint using our guided templates. You will submit your work for live critique and iterate with 1:1 mentor support.",
  },
  {
    title: "Week 3 — Interview Lab",
    copy:
      "Practice the exact prompts that appear in modern product design interviews and role-play high-signal conversations with coaches who have sat on the other side of the table.",
  },
  {
    title: "Week 4 — Offer Systems",
    copy:
      "Install a repeatable system for outreach, follow up, and negotiation so you can keep momentum beyond the sprint and convert interviews into offers.",
  },
];

export default function Sprint1Page() {
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const exitIntentCapturedRef = useRef(false);

  useEffect(() => {
    const handleExitIntent = (event: MouseEvent) => {
      if (event.clientY <= 0 && !exitIntentCapturedRef.current) {
        exitIntentCapturedRef.current = true;
        setIsExitModalOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleExitIntent);
    return () => {
      document.removeEventListener("mouseleave", handleExitIntent);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <div className="pointer-events-auto border-b border-white/10 bg-slate-950/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
            <div className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-200">
              Pencil Sprint 1
            </div>
            <CTAButton
              href={CTA_URL}
              label={CTA_LABEL}
              size="sm"
              className="hidden sm:inline-flex"
            />
          </div>
          <div className="mx-auto w-full max-w-6xl px-6 pb-4 sm:hidden">
            <CTAButton href={CTA_URL} label={CTA_LABEL} size="sm" className="w-full" />
          </div>
        </div>
      </div>

      <main className="relative isolate flex flex-col pb-32 pt-28">
        <div className="mx-auto grid w-full max-w-6xl gap-16 px-6">
          <section className="text-center">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-200">
                Four-week product career accelerator
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Stand out, interview confidently, and land offers faster.
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Sprint 1 is a focused, high-touch program built for product designers and strategists
                who are ready to transform their search into a repeatable system. Join a curated cohort,
                get coached by leaders, and ship work that moves you forward every single week.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <CTAButton
                  href={CTA_URL}
                  label={CTA_LABEL}
                  size="lg"
                  className="w-full sm:w-auto"
                />
                <button
                  type="button"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                  onClick={() => setIsExitModalOpen(true)}
                >
                  Preview the curriculum
                </button>
              </div>
            </div>
          </section>

          <section className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/40 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.45)]">
              <h2 className="text-2xl font-semibold text-white">Inside Sprint 1</h2>
              <ul className="space-y-4 text-left text-base text-slate-300">
                {featureHighlights.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-rose-500/80 text-xs font-semibold">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.5)]">
              <div>
                <h3 className="text-xl font-semibold text-white">Secure your seat</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Cohort kicks off April 8. Enrollment is capped to keep coaching personal. Save your spot and
                  get immediate access to the preparation library today.
                </p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 px-6 py-5 text-center">
                  <div className="text-4xl font-bold text-white">$97</div>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-rose-200">One-time payment</p>
                </div>
              </div>
              <CTAButton
                href={CTA_URL}
                label={CTA_LABEL}
                size="lg"
                className="mt-8 w-full justify-center"
              />
              <p className="mt-4 text-xs text-slate-400">
                Backed by our 30-day momentum guarantee — if you show the work and do not feel progress, we refund you.
              </p>
            </aside>
          </section>

          <section className="space-y-8 rounded-3xl border border-white/10 bg-slate-900/40 p-8 shadow-[0_24px_50px_rgba(15,23,42,0.45)]">
            <h2 className="text-2xl font-semibold text-white">What the four weeks look like</h2>
            <div className="space-y-6">
              {curriculum.map((week) => (
                <div key={week.title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
                  <h3 className="text-lg font-semibold text-white">{week.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{week.copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-rose-500/20 via-fuchsia-500/20 to-indigo-500/20 p-[1px]">
            <div className="rounded-[calc(24px-1px)] bg-slate-950 px-8 py-16 text-center shadow-[0_30px_65px_rgba(15,23,42,0.55)]">
              <h2 className="text-3xl font-semibold text-white">
                The next cohort is almost full.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
                Enroll today and spend the next four weeks building assets, confidence, and momentum alongside a
                community that matches your ambition.
              </p>
              <CTAButton
                href={CTA_URL}
                label={CTA_LABEL}
                size="lg"
                className="mx-auto mt-8 w-full justify-center sm:w-auto"
              />
            </div>
          </section>
        </div>
      </main>

      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 px-4">
        <div className="pointer-events-auto mx-auto flex max-w-4xl flex-col gap-3 rounded-full border border-white/10 bg-slate-900/90 px-6 py-4 shadow-[0_25px_50px_rgba(15,23,42,0.6)] sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm font-medium text-slate-200">
            Only a few seats left for this cohort. Lock yours in before enrollment closes.
          </div>
          <CTAButton
            href={CTA_URL}
            label={CTA_LABEL}
            size="sm"
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      {isExitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 text-center shadow-[0_35px_70px_rgba(15,23,42,0.6)]">
            <h3 className="text-2xl font-semibold text-white">Wait — don&apos;t leave empty handed</h3>
            <p className="mt-3 text-sm text-slate-300">
              Grab your seat now to access the Sprint 1 prep library and bonus interview systems before the cohort kicks off.
            </p>
            <CTAButton
              href={CTA_URL}
              label={CTA_LABEL}
              size="lg"
              className="mt-6 w-full justify-center"
              onClick={() => setIsExitModalOpen(false)}
            />
            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center text-sm font-medium text-slate-400 transition hover:text-white"
              onClick={() => setIsExitModalOpen(false)}
            >
              I&apos;ll think about it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
