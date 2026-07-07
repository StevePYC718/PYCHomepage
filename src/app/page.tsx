import './landing.css'
import { BeatDivider } from './components/BeatDivider'
import { MockupFrame } from './components/MockupFrame'

const CHECKLIST = [
  'Your creative engine back online — running your day instead of haunting it.',
  'A direction you can say in one sentence and act on daily.',
  'Nine tools, built from your own words, that you keep for life.',
  'A stack of real receipts — a role, a new income stream, a defensible position.',
  'A human edge you can name and lead with — in a pitch, an interview, a launch.',
  'The shift under it all: you became someone who finishes.',
]

export default function Home() {
  return (
    <>
      {/* ——— NAV ——— */}
      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="Pioneer Your Creative">
            <svg className="mark" width="22" height="22" viewBox="0 0 32 32" fill="none" stroke="var(--ember)" strokeWidth="1.5">
              <circle cx="16" cy="16" r="14" />
              <path d="M16 4 L20 16 L16 28 L12 16 Z" fill="var(--ember)" stroke="none" />
              <circle cx="16" cy="16" r="2" fill="var(--bg)" stroke="none" />
            </svg>
            <span className="brand-word">Pioneer Your Creative</span>
            <span className="tag">Founding Beta</span>
          </a>
          <a className="btn btn-ghost btn-sm" href="#pricing">Join the Beta <span className="arrow">→</span></a>
        </div>
      </nav>

      {/* ——— HERO ——— */}
      <header className="hero section" id="top" data-screen-label="Hero">
        <div className="container hero-inner">
          <div className="eyebrow reveal"><span className="dot" /><span>Pioneer Your Creative · Founding Beta</span></div>
          <h1 className="reveal">Pioneer a path AI <em>can’t</em> replace.</h1>
          <p className="hero-lede serif reveal">A desktop web platform <span className="lede-soft">(mobile app later)</span> — a guided 90-day program with daily lessons, immersive audio, an AI co-pilot that knows you, and printable tools you keep.</p>
          <div className="hero-actions reveal">
            <a className="btn btn-primary" href="#pricing">Claim a Founding Spot <span className="arrow">→</span></a>
            <a className="btn btn-ghost" href="#how">See How It Works</a>
          </div>
          <p className="beta-line reveal"><span className="bdot" /><span>Founding beta — 15 spots. Pick one path: Pivot, Build, or Evolve.</span></p>
        </div>
      </header>

      {/* ——— PROMISE STRIP · the dual outcome, up front ——— */}
      <section className="promise-band" data-screen-label="Promise Strip">
        <div className="container">
          <div className="promise-strip reveal">
            <span className="ps-eyebrow">What You Leave With</span>
            <div className="ps-grid">
              <div className="ps-side ps-inside">
                <span className="ps-label">Inside you</span>
                <span className="ps-line serif">A shift you feel.</span>
              </div>
              <div className="ps-side ps-world">
                <span className="ps-label">In the world</span>
                <span className="ps-line serif">Proof you can show.</span>
                <span className="ps-receipt">3 messages sent · 1 call booked · real receipts, every ten days.</span>
              </div>
            </div>
            <p className="ps-caption">Self-help gives you the feeling. Productivity apps give you the output. Here, every sprint gives you both.</p>
          </div>
        </div>
      </section>

      {/* ——— WHY NOW (problem + turn) ——— */}
      <section className="section section--elev" data-screen-label="Why Now">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Why Now</div>
            <h2 className="title">You already know the problem. Here’s the part almost nobody sees.</h2>
          </div>
          <div className="why-now reveal">
            <div className="why-col">
              <span className="why-label">The problem you know</span>
              <p className="why-lead">That path exists. You just can’t reach it yet — and you can’t quite see what’s blocking you.</p>
              <p className="why-body">AI is doing creative work now, and your craft is worth less by the month. But the real wound is underneath: the part of you that felt like a creative is the part that feels worth less now. So you freeze — and you consume. Another course, tool, coach, framework. It feels like motion. It’s avoidance. The pile is the problem.</p>
            </div>
            <div className="why-col">
              <span className="why-label">What almost nobody sees</span>
              <p className="why-lead">The threat and the opportunity are the <em>same fact</em>.</p>
              <p className="why-body">Strip the art off it and creativity is one thing: connecting ideas, and the taste to know which one’s worth anything. When AI makes generating free, taste and voice become the premium — the faculty you buried is the exact thing that now wins. The catch: your engine is switched off. Numb, distracted, frozen.</p>
            </div>
          </div>
          <div className="why-band reveal">PYC switches it back on — then builds it into a path AI <em>can’t</em> replace.</div>
        </div>
      </section>

      {/* ——— THREE PATHS · TWO OUTCOMES ——— */}
      <section className="section" id="paths" data-screen-label="Three Paths">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">A Shift You Feel · Proof You Can Show</div>
            <h2 className="title">A shift you feel. Proof you can show. Every ten days.</h2>
            <p className="intro">Same shape on every path: the shift you feel, then the receipt it produces. Here’s what the first sprint looks like — one example per path.</p>
          </div>
          <div className="paths reveal">
            <article className="path-card">
              <div className="path-head">
                <span className="path-name">Pivot</span>
                <span className="path-move">copywriter → content strategist</span>
              </div>
              <div className="path-feel">
                <span className="pf-label">A shift you feel</span>
                <p>You send the move that scares you, instead of researching around it.</p>
              </div>
              <div className="path-show">
                <span className="pf-label pf-label--ember">What Sprint 1 produces</span>
                <ul className="receipt-list">
                  <li>8 companies mapped</li>
                  <li>3 messages sent</li>
                  <li>1 call booked</li>
                </ul>
              </div>
            </article>
            <article className="path-card">
              <div className="path-head">
                <span className="path-name">Build</span>
                <span className="path-move">designer → productized offer</span>
              </div>
              <div className="path-feel">
                <span className="pf-label">A shift you feel</span>
                <p>You put a price on the work and say it in public.</p>
              </div>
              <div className="path-show">
                <span className="pf-label pf-label--ember">What Sprint 1 produces</span>
                <ul className="receipt-list">
                  <li>Offer priced</li>
                  <li>Positioning posted in public</li>
                  <li>1 paid pilot offered</li>
                </ul>
              </div>
            </article>
            <article className="path-card">
              <div className="path-head">
                <span className="path-name">Evolve</span>
                <span className="path-move">creative director → leads the AI practice</span>
              </div>
              <div className="path-feel">
                <span className="pf-label">A shift you feel</span>
                <p>You stop waiting to be picked. You move first.</p>
              </div>
              <div className="path-show">
                <span className="pf-label pf-label--ember">What Sprint 1 produces</span>
                <ul className="receipt-list">
                  <li>Initiative memo drafted</li>
                  <li>1 ally aligned</li>
                  <li>The meeting secured</li>
                </ul>
              </div>
            </article>
          </div>
          <div className="paths-foot reveal">
            <p>That’s sprint one. Nine sprints stack into a role, an income stream, or a stronger seat — with the receipts to prove it.</p>
            <a className="btn btn-ghost" href="#how">See How a Sprint Works <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* ——— HOW IT WORKS ——— */}
      <section className="section" id="how" data-screen-label="How It Works">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">How It Works</div>
            <h2 className="title">Not more to consume. A system that <em>moves</em> you.</h2>
            <p className="intro">Three things do the work: goal-setting that hands you today’s move, a 90-day path that clears your blockers in order, and an AI co-pilot that actually knows you. Everything else exists to support them.</p>
          </div>

          <BeatDivider label="What Does the Work" />
          <div className="vprops reveal">
            {/* Value prop 01 — generative goal-setting */}
            <article className="vprop">
              <div className="vprop-inner">
                <div className="vprop-id">
                  <span className="vprop-idx">01</span>
                  <span className="vprop-kicker">Generative Goal-Setting</span>
                  <h3 className="vprop-title">A dream big enough to matter. A step small enough to take.</h3>
                  <div className="vprop-shot"><MockupFrame crumbs="Aim · North Star" caption="Desktop app — North Star + daily card" dimension="1440 × 900" /></div>
                </div>
                <div className="vprop-blocks">
                  <div className="vprop-block"><span className="lbl">The block</span><p>Your goals come out too big and you freeze — or too vague and you spin. Paralysis at the top, busywork at the bottom.</p></div>
                  <div className="vprop-block"><span className="lbl">What it does</span><p>Set one North Star. The system cascades it down to the single move in front of you today — never the whole mountain, never aimless busywork.</p></div>
                  <div className="vprop-block"><span className="lbl">The generative part</span><p>Every night your Co-Pilot generates three candidate moves — built from your North Star, your path, and what you did yesterday. You pick one, edit, commit. Tomorrow morning has zero decisions left in it.</p></div>
                  <div className="vprop-block is-get"><span className="lbl">You get</span><p>One real action taken every day, compounding — without willpower or the perfect mood.</p></div>
                </div>
              </div>
            </article>

            {/* Value prop 02 — the 3-phase journey */}
            <article className="vprop">
              <div className="vprop-inner">
                <div className="vprop-id">
                  <span className="vprop-idx">02</span>
                  <span className="vprop-kicker">The 90-Day Journey</span>
                  <h3 className="vprop-title">Clears your blockers in the exact order they stop you.</h3>
                  <div className="vprop-shot"><MockupFrame crumbs="Journey · Sprint Map" caption="Desktop app — the 90-day sprint map" dimension="1440 × 900" /></div>
                </div>
                <div className="vprop-blocks">
                  <div className="vprop-block"><span className="lbl">The block</span><p>You don’t need more to consume. You need to move — and to clear what’s actually stopping you, in the right order.</p></div>
                  <div className="vprop-block">
                    <span className="lbl">One sequenced path · 9 sprints · 27 lessons</span>
                    <div className="vprop-phases">
                      <div className="vp-phase"><span className="vp-phase-k">01</span><div><p className="vp-phase-h">Unlock <span className="d">Days 1–30</span></p><p className="vp-phase-t">Break the freeze. Fear, resistance, identity → your first real move.</p></div></div>
                      <div className="vp-phase"><span className="vp-phase-k">02</span><div><p className="vp-phase-h">Strengthen <span className="d">Days 31–60</span></p><p className="vp-phase-t">Protect your focus, learn how you work, recover fast.</p></div></div>
                      <div className="vp-phase"><span className="vp-phase-k">03</span><div><p className="vp-phase-h">Activate <span className="d">Days 61–90</span></p><p className="vp-phase-t">Turn creativity into your edge. Solve problems, ship proof.</p></div></div>
                    </div>
                  </div>
                  <div className="vprop-block is-get"><span className="lbl">You get</span><p>Your blockers cleared in the order they stop you — and a concrete win banked at every stage, not just at the end.</p></div>
                </div>
              </div>
            </article>

            {/* Value prop 03 — AI co-pilot */}
            <article className="vprop">
              <div className="vprop-inner">
                <div className="vprop-id">
                  <span className="vprop-idx">03</span>
                  <span className="vprop-kicker">Your AI Co-Pilot</span>
                  <h3 className="vprop-title">A collaborator who’s been in the room the whole time.</h3>
                  <div className="vprop-shot"><MockupFrame crumbs="Run the Day · Co-Pilot" caption="Desktop app — the AI Co-Pilot" dimension="1440 × 900" /></div>
                </div>
                <div className="vprop-blocks">
                  <div className="vprop-block"><span className="lbl">The block</span><p>Generic AI gives generic answers because it doesn’t know you. You’re left translating a stranger’s advice into your actual life.</p></div>
                  <div className="vprop-block"><span className="lbl">What it does</span><p>Wired into everything PYC knows about you — your North Star, your blocks, your reflections, where you stand today. Bounce ideas off it, shrink a move that feels too big, pressure-test a goal. Answers grounded in your situation, not the internet’s average.</p></div>
                  <div className="vprop-block is-get"><span className="lbl">You get</span><p>Day one it’s already good. By day 90 it reads like a coach who’s known you for months. The longer you stay, the sharper it gets.</p></div>
                </div>
              </div>
            </article>
          </div>

          <BeatDivider label="What Else Is Inside" />
          <div className="cards cards-4 reveal">
            <div className="card"><h3>Immersive Audio</h3><p className="muted">Cinematic audio shifts your state first — then a few honest questions while you’re still open. Feeling changes behavior; information doesn’t.</p></div>
            <div className="card"><h3>The Daily Flow</h3><p className="muted">Warm up, one move, reflect, set tomorrow. Run the card — you don’t have to feel like it.</p></div>
            <div className="card"><h3>Printable Tools</h3><p className="muted">Nine tools, one per sprint, built from your own words. Yours to keep for life.</p></div>
            <div className="card"><h3>Three Pioneer Paths</h3><p className="muted">Pivot, Build, or Evolve. You pick one; it shapes every move downstream.</p></div>
          </div>

          <div className="not-strip reveal">
            <div className="not-klist">Not a course · Not a habit tracker · Not another app to consume</div>
            <p className="not-line">It’s the one thing that isn’t another thing to consume — reconnect first, then move.</p>
          </div>

          <div className="hiw-close reveal">
            <h3 className="hiw-payoff">By Day 90, you don’t just feel different. You have <em>proof</em>.</h3>
            <div className="checklist">
              {CHECKLIST.map((item) => (
                <div className="check-item" key={item}>
                  <span className="check-mark">✓</span>
                  <span className="check-txt">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— PRICING ——— */}
      <section className="section section--elev" id="pricing" data-screen-label="Pricing">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Founding Pricing</div>
            <h2 className="title">Founding pricing. Before it’s <em>gone</em>.</h2>
            <p className="intro">Creative Archaeology is free — see who you are before you invest. When you’re ready to execute, PYC opens to its first 15 founding members at a price locked for life.</p>
          </div>
          <div className="tiers reveal">
            <div className="tier">
              <span className="tier-name">Free — Forever</span>
              <div className="tier-price"><span className="amt">$0</span></div>
              <div className="tier-lock">No card required</div>
              <ul className="tier-list">
                <li>Creative Archaeology onboarding</li>
                <li>Your creative profile &amp; identity map</li>
                <li>Path selection (Pivot / Build / Evolve)</li>
                <li>North Star goal setting</li>
              </ul>
              {/* TODO(pricing-url): replace with the free-signup URL */}
              <a className="btn btn-ghost" href="#TODO_FREE_SIGNUP_URL">Start Free</a>
            </div>
            <div className="tier tier--feature">
              <span className="tier-badge">Founding Cohort</span>
              <span className="tier-name">Founding Access</span>
              <div className="tier-price"><span className="amt">$149</span><span className="strike">$497</span></div>
              <div className="tier-lock">Price locked for life</div>
              <ul className="tier-list">
                <li className="head">Everything in Free, plus:</li>
                <li>The AI Co-Pilot</li>
                <li>9 sprints + 9 tools</li>
                <li>Immersive audio</li>
                <li>Evidence Wall</li>
                <li>SOS button</li>
                <li>Path coaching</li>
                <li>All future updates</li>
              </ul>
              <a className="btn btn-primary" href="https://buy.stripe.com/6oU28r8jWaISfAMfFgdIA01" target="_blank" rel="noopener noreferrer">Claim Founding Access <span className="arrow">→</span></a>
            </div>
            <div className="tier">
              <span className="tier-name">Founding Access + Coaching</span>
              <div className="tier-price"><span className="amt">$500</span></div>
              <div className="tier-lock">Founder-led · limited seats</div>
              <ul className="tier-list">
                <li className="head">Everything in Founding Access, plus:</li>
                <li>Live group coaching with the founder</li>
                <li>Direct accountability</li>
                <li>A founding community</li>
                <li>First input on the roadmap</li>
              </ul>
              <a className="btn btn-ghost" href="https://buy.stripe.com/14AdR957K04e4W83WydIA00" target="_blank" rel="noopener noreferrer">Claim Access + Coaching</a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className="section" data-screen-label="FAQ">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Before You Decide</div>
            <h2 className="title">Before you <em>decide</em>.</h2>
          </div>
          <div className="faq-grid reveal">
            <div className="faq-item">
              <div className="faq-q">I don’t have time for another program.</div>
              <div className="faq-a">Most days are one card — one move, already decided. Built for a demanding job and a full life, not free afternoons.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">How is this different from the courses I’ve bought?</div>
              <div className="faq-a">Courses give you information. You don’t have a knowledge problem — you have a frozen-engine problem. PYC reconnects you first, then runs your execution and produces proof.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">What if I fall behind?</div>
              <div className="faq-a">You can’t. It’s completion-paced, not a countdown. You move to the next sprint when you’ve done the work.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Is this a wellness thing?</div>
              <div className="faq-a">No. The reconnection is real, but it’s a performance mechanism — it switches your creative engine back on so you can build something undeniable.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— FOUNDER + RECEIPTS ——— */}
      <section className="section section--elev" data-screen-label="Founder">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Why This Exists</div>
            <h2 className="title">Built by someone who <em>lived it</em>.</h2>
          </div>
          <p className="founder-body reveal">I spent years building a creative identity, then watched the work I’d staked it on get done in seconds. Every “solution” I bought made the paralysis worse. PYC is the system I needed and couldn’t find — reconnection first, then the moves that produce proof. It had to work for me before it could work for you.</p>
          <blockquote className="pull founder-receipts reveal">
            <span className="pq">The first founding members are being onboarded now. Their receipts land here.</span>
          </blockquote>
        </div>
      </section>

      {/* ——— FINAL CTA ——— */}
      <section className="section final" data-screen-label="Final CTA">
        <div className="container final-inner">
          <h2 className="reveal">You can keep consuming. Or you can <em>pioneer</em>.</h2>
          <p className="final-body reveal">The way forward isn’t to bury the creative self and survive — it’s to reconnect with it. The one capability AI amplifies instead of replacing.</p>
          <div className="final-meta reveal">15 founding spots · Price locked for life</div>
          <a className="btn btn-primary reveal" href="#pricing">Claim Your Founding Spot <span className="arrow">→</span></a>
          <div className="final-close reveal">
            <div className="stay">Stay human. Stay creative.</div>
            <div className="pioneer serif">Pioneer a path AI can’t replace.</div>
          </div>
        </div>
      </section>

      {/* ——— FOOTER ——— */}
      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#top" aria-label="Pioneer Your Creative">
            <svg className="mark" width="18" height="18" viewBox="0 0 32 32" fill="none" stroke="var(--ember)" strokeWidth="1.5">
              <circle cx="16" cy="16" r="14" />
              <path d="M16 4 L20 16 L16 28 L12 16 Z" fill="var(--ember)" stroke="none" />
              <circle cx="16" cy="16" r="2" fill="var(--bg)" stroke="none" />
            </svg>
            <span className="footer-brand">Pioneer Your Creative</span>
          </a>
          <div className="footer-meta">
            <a href="#pricing">Join the beta</a>
            <span>© PYC</span>
          </div>
        </div>
      </footer>
    </>
  )
}
