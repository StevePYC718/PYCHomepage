import React from "react";

export default function RealCrisisCalm() {
  return (
    <section
      id="real-crisis"
      aria-labelledby="rc-title"
      className="w-full bg-black text-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Eyebrow */}
        <p className="mb-3 text-xs tracking-[0.2em] text-[var(--coral)] uppercase">The Real Crisis</p>

        {/* Headline + subhead */}
        <h2 id="rc-title" className="text-3xl font-bold leading-tight md:text-5xl">
          <span className="block">AI Is Reshaping Your Industry</span>
          <span className="block">Faster Than You Can Recover</span>
        </h2>
        {/* Divider */}
        <div className="mt-8 w-24 border-t border-[var(--green-primary)]" />

        {/* 3 stacked messages (no cards) */}
        <div className="mt-8 space-y-4 max-w-3xl">
          <p className="text-[17px] md:text-[18px] leading-relaxed opacity-90">
            You&apos;re burned out. Your best ideas sit unfinished. And now the window to build something AI can&apos;t replace is closing.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-8 w-24 border-t border-white/10" />

        {/* Dual lists */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10 max-w-5xl items-stretch">
          <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 grid grid-rows-[auto,1fr]">
            <p className="mb-4 text-base font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
              WHAT IT FEELS LIKE
            </p>
            <ul className="space-y-5 list-disc list-outside pl-5">
              <li className="text-[16px] md:text-[17px] leading-[1.55] text-white/90">
                You wake up tired, running someone else&apos;s race.
              </li>
              <li className="text-[16px] md:text-[17px] leading-[1.55] text-white/90">
                You call it &quot;research,&quot; but it&apos;s avoidance.
              </li>
              <li className="text-[16px] md:text-[17px] leading-[1.55] text-white/90">
                Ideas pile up. Nothing ships.
              </li>
            </ul>
          </div>
          <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 grid grid-rows-[auto,1fr]">
            <p className="mb-4 text-base font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
              WHAT’S REALLY GOING ON
            </p>
            <ul className="space-y-5 list-disc list-outside pl-5">
              <li className="text-[16px] md:text-[17px] leading-[1.55] text-white/90">
                You were built for output, not originality.
              </li>
              <li className="text-[16px] md:text-[17px] leading-[1.55] text-white/90">
                You don&apos;t need more info—you need a system that forces action.
              </li>
              <li className="text-[16px] md:text-[17px] leading-[1.55] text-white/90">
                AI is reshaping your industry faster than you can recover.
              </li>
            </ul>
          </div>
        </div>

        {/* Green value bar (calm emphasis) */}
        <div className="mt-12 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-5 md:p-6">
          <p className="text-emerald-200 text-sm font-semibold uppercase tracking-[0.18em] mb-3">
            The White Space
          </p>
          <p className="text-emerald-50 text-[16px] leading-relaxed">
            We rebuild your creative operating system—energy, focus, execution—so you can ship work that matters before it&apos;s too late.<br />
            <span className="inline-block mt-3 font-semibold">Build a life AI can&apos;t replace.</span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-left">
          <a
            href="#framework"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--green-primary)] transition hover:text-[var(--green-primary)]/80"
          >
            See how the system fixes this →
          </a>
        </div>
      </div>
    </section>
  );
}
