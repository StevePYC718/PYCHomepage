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
          <span className="block">You&apos;re Burned Out</span>
          <span className="block">You&apos;re Running Out of Time</span>
        </h2>
        <p className="mt-3 text-[17px] md:text-[18px] leading-relaxed opacity-90 max-w-3xl">
          <span className="font-semibold text-[var(--green-primary)]">You’re drained by the system, and too tired to build your way out.</span>
        </p>

        {/* Divider */}
        <div className="mt-8 w-24 border-t border-[var(--green-primary)]" />

        {/* 3 stacked messages (no cards) */}
        <div className="mt-8 space-y-4 max-w-3xl">
          <div className="space-y-2.5">
            <p className="text-[17px] md:text-[18px] leading-relaxed opacity-90">
              <strong className="text-[var(--coral)]">You’ve been building someone else’s dream</strong>
            </p>
            <p className="text-[17px] md:text-[18px] leading-relaxed opacity-90">
              Your best energy disappears into meetings, metrics, and inboxes that don’t matter
            </p>
          </div>
          <div className="space-y-2.5">
            <p className="text-[17px] md:text-[18px] leading-relaxed opacity-90">
              <strong className="text-[var(--coral)]">Your own ideas are collecting dust</strong>
            </p>
            <p className="text-[17px] md:text-[18px] leading-relaxed opacity-90">
              They live in notes apps and half-finished files while your focus and confidence fade
            </p>
          </div>
          <div className="space-y-2.5">
            <p className="text-[17px] md:text-[18px] leading-relaxed opacity-90">
              <strong className="text-[var(--coral)]">You're trading your future for a paycheck that barely covers the present</strong>
            </p>
            <p className="text-[17px] md:text-[18px] leading-relaxed opacity-90">
              Every month you trade freedom for stability that never feels worth it
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 w-24 border-t border-white/10" />

        {/* Dual lists */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10 max-w-5xl">
          <div className="space-y-3.5">
            <p className="text-base font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
              What it feels like
            </p>
            <ul className="space-y-1.5 list-disc list-outside pl-5">
              <li className="text-[16px] md:text-[17px] leading-relaxed opacity-90">
                You wake up tired, already running someone else’s race.
              </li>
              <li className="text-[16px] md:text-[17px] leading-relaxed opacity-90">
                You scroll and call it “research,” but it is really avoidance.
              </li>
              <li className="text-[16px] md:text-[17px] leading-relaxed opacity-90">
                You have ideas, but nothing to move them forward.
              </li>
            </ul>
          </div>
          <div className="space-y-3.5">
            <p className="text-base font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
              What’s really going on
            </p>
            <ul className="space-y-1.5 list-disc list-outside pl-5">
              <li className="text-[16px] md:text-[17px] leading-relaxed opacity-90">
                You were optimized for output, not originality.
              </li>
              <li className="text-[16px] md:text-[17px] leading-relaxed opacity-90">
                Busy days hide empty output and shrinking courage.
              </li>
              <li className="text-[16px] md:text-[17px] leading-relaxed opacity-90">
                You don’t need motivation. You need a system that forces action.
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
            We rebuild your human OS—creative energy, focus, execution—so you can pivot before it&apos;s too late.<br />
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
