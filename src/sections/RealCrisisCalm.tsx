import React from "react";

export default function RealCrisisCalm() {
  return (
    <section
      id="real-crisis"
      aria-labelledby="rc-title"
      className="w-full bg-black text-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Eyebrow */}
        <p className="mb-3 label" style={{ letterSpacing: '0.2em', color: 'var(--coral)' }}>
          The Real Crisis
        </p>

        {/* Headline + subhead */}
        <h2 id="rc-title" className="section-headline text-white">
          <span className="block">You're Running on Empty</span>
        </h2>
        {/* Dual lists */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10 max-w-5xl items-stretch">
          <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 grid grid-rows-[auto,1fr]">
            <p className="mb-4 text-base font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
              WHAT IT FEELS LIKE
            </p>
            <ul className="space-y-5 list-none">
              <li className="group">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/0 px-5 py-3 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:bg-[var(--green-primary)] group-hover:border-[var(--green-primary)] group-hover:shadow-[0_12px_30px_rgba(99,255,173,0.25)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40 transition-colors duration-200 group-hover:bg-black" aria-hidden="true" />
                  <span className="text-[16px] md:text-[17px] leading-[1.55] text-white/90 transition-colors duration-200 group-hover:text-black">
                    You wake up tired, already behind
                  </span>
                </div>
              </li>
              <li className="group">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/0 px-5 py-3 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:bg-[var(--green-primary)] group-hover:border-[var(--green-primary)] group-hover:shadow-[0_12px_30px_rgba(99,255,173,0.25)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40 transition-colors duration-200 group-hover:bg-black" aria-hidden="true" />
                  <span className="text-[16px] md:text-[17px] leading-[1.55] text-white/90 transition-colors duration-200 group-hover:text-black">
                    Ideas pile up. Nothing ships
                  </span>
                </div>
              </li>
              <li className="group">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/0 px-5 py-3 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:bg-[var(--green-primary)] group-hover:border-[var(--green-primary)] group-hover:shadow-[0_12px_30px_rgba(99,255,173,0.25)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40 transition-colors duration-200 group-hover:bg-black" aria-hidden="true" />
                  <span className="text-[16px] md:text-[17px] leading-[1.55] text-white/90 transition-colors duration-200 group-hover:text-black">
                    Every Sunday night feels like failure
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 grid grid-rows-[auto,1fr]">
            <p className="mb-4 text-base font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
              WHAT’S REALLY GOING ON
            </p>
            <ul className="space-y-5 list-none">
              <li className="group">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/0 px-5 py-3 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:bg-[var(--green-primary)] group-hover:border-[var(--green-primary)] group-hover:shadow-[0_12px_30px_rgba(99,255,173,0.25)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40 transition-colors duration-200 group-hover:bg-black" aria-hidden="true" />
                  <span className="text-[16px] md:text-[17px] leading-[1.55] text-white/90 transition-colors duration-200 group-hover:text-black">
                    Modern society is designed to drain your energy
                  </span>
                </div>
              </li>
              <li className="group">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/0 px-5 py-3 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:bg-[var(--green-primary)] group-hover:border-[var(--green-primary)] group-hover:shadow-[0_12px_30px_rgba(99,255,173,0.25)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40 transition-colors duration-200 group-hover:bg-black" aria-hidden="true" />
                  <span className="text-[16px] md:text-[17px] leading-[1.55] text-white/90 transition-colors duration-200 group-hover:text-black">
                    Exhaustion isn't laziness — it's system failure
                  </span>
                </div>
              </li>
              <li className="group">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/0 px-5 py-3 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:bg-[var(--green-primary)] group-hover:border-[var(--green-primary)] group-hover:shadow-[0_12px_30px_rgba(99,255,173,0.25)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40 transition-colors duration-200 group-hover:bg-black" aria-hidden="true" />
                  <span className="text-[16px] md:text-[17px] leading-[1.55] text-white/90 transition-colors duration-200 group-hover:text-black">
                    AI is moving faster than you can recover
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
