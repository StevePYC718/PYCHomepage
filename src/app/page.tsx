import { Fragment, type ReactNode } from 'react'
import './landing.css'
import { FeatureRow } from './components/FeatureRow'
import { BeatDivider } from './components/BeatDivider'
import { SprintList, type Sprint } from './components/SprintList'
import { ArcPhase } from './components/ArcPhase'

type Feature = {
  beat?: string
  title: string
  subtitle: string
  body: ReactNode
  free?: boolean
  crumbs: string
  caption: string
  dimension: string
}

const FEATURES: Feature[] = [
  {
    beat: 'Arrive',
    title: 'Creative Archaeology',
    subtitle: 'Switch the engine back on.',
    free: true,
    crumbs: '01 Arrive · Onboarding',
    caption: 'Desktop app screenshot — 01 ARRIVE onboarding',
    dimension: '1440 × 900',
    body: 'A short guided set of questions digs up the creative self you buried — what you loved, what you walked away from, what actually stops you — and reflects it back as insight you can finally see. Every other tool opens with what AI can do; PYC opens with what only you can. Nothing else runs until this does.',
  },
  {
    beat: 'Aim',
    title: 'Your North Star',
    subtitle: 'A dream big enough to matter. A step small enough to take.',
    free: true,
    crumbs: 'Aim · North Star',
    caption: 'Desktop app screenshot — North Star + path select',
    dimension: '1440 × 900',
    body: 'Turns your 12-month dream into a clear destination, then cascades it to the single next move — never the whole mountain, never busywork. PYC holds the big picture for you, so you stop re-planning your life every morning.',
  },
  {
    beat: 'Run the Day',
    title: 'The Daily Flow',
    subtitle: 'You don’t have to feel like it. You just run the card.',
    crumbs: 'Run the Day · Today’s Card',
    caption: 'Desktop app screenshot — the daily card, one move',
    dimension: '1440 × 900',
    body: 'Warm up with 20 minutes of no-stakes creative play — run the one move already on your card — reflect — lock tomorrow’s card tonight. It removes the two things that kill execution for a busy creative mind: the cold start and the morning decision. You don’t have to feel ready — you run the card.',
  },
  {
    title: 'Immersive Audio & Reflection',
    subtitle: 'Change how you feel first. Then everything moves.',
    crumbs: 'Run the Day · Audio + Reflection',
    caption: 'Desktop app screenshot — immersive audio + reflection',
    dimension: '1440 × 900',
    body: (
      <>Short cinematic audio built to shift how you <em>feel</em> before you act — not lecture you — with reflection right after, while you’re still open. Information never changed behavior; feeling does. It’s the unlock-then-reflect sequence engineered on purpose, so the shift is real instead of a motivational high that deflates by noon.</>
    ),
  },
  {
    title: 'Your AI Co-Pilot',
    subtitle: 'A collaborator who’s been in the room the whole time.',
    crumbs: 'Run the Day · Co-Pilot',
    caption: 'Desktop app screenshot — AI Co-Pilot chat',
    dimension: '1440 × 900',
    body: 'Wired into everything PYC knows about you — your North Star, your blocks, your reflections, where you stand right now — so its guidance is calibrated to your actual life, not a stranger’s hot take. Day one it’s already good; by day 90 it reads like a coach who’s known you for months. Any competitor copying the surface starts from zero — your Co-Pilot compounds.',
  },
  {
    beat: 'Compound',
    title: 'Your Pioneer Path',
    subtitle: 'Real-world results — and a you who can sustain them.',
    crumbs: 'Compound · Pioneer Path',
    caption: 'Desktop app screenshot — sprint tracker + dual outcome',
    dimension: '1440 × 900',
    body: (
      <>Pick one of three tracks — Pivot, Build, or Evolve — and run it across 10-day sprints. Each sprint installs a permanent internal shift <em>and</em> produces measurable external proof. Transformation and receipts, every ten days — the dual outcome that separates this from self-help.</>
    ),
  },
  {
    title: 'Your Printable Tools',
    subtitle: 'Proof you can hold in your hands.',
    crumbs: 'Compound · Printable Tools',
    caption: 'Desktop app screenshot — printable tool / workbook',
    dimension: '1440 × 900',
    body: 'Every sprint turns your own words and wins into a personalized, printable tool you keep for life. Proof you hold in your hands, off the screen where the real work happens — a growing workbook of who you’re becoming.',
  },
]

const PHASE1_SPRINTS: Sprint[] = [
  { title: 'Sprint 1 · Break Free From Blocks', move: 'Break through fear.', tool: 'Fear Interrupt', receipt: 'the first exposing move, sent.' },
  { title: 'Sprint 2 · Design Your Future', move: 'Find your direction.', tool: 'Vision Installation', receipt: 'a direction you can say in one sentence.' },
  { title: 'Sprint 3 · Think Like Your Future Self', move: 'Act before you’re ready.', tool: 'Action Threshold', receipt: 'you move at 80%.' },
]

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
          <div className="hero-mid reveal">
            <p className="hero-sub serif">The creative edge AI threatens most is the one thing that wins in an AI economy — if you can get back to it.</p>
            <div className="hero-mid-left">
              <p className="hero-body">A guided 90-day system — a daily app and an AI coach that knows you — that turns the creative edge AI can’t replace into a new role, your new income stream, or a stronger position where you are. Reconnection first, then real moves.</p>
              <p className="beta-line"><span className="bdot" /><span>Founding beta — 15 spots, for the people who’ll shape it with us.</span></p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#pricing">Claim a Founding Spot <span className="arrow">→</span></a>
                <a className="btn btn-ghost" href="#how">See How It Works</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ——— THREAT ——— */}
      <section className="section" data-screen-label="Threat">
        <div className="container">
          <div className="sec-head reveal">
            <h2 className="title">It’s not coming. It’s <em>here</em>. And it funnels inward.</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="threat-col">
              <span className="threat-label">The World</span>
              <h3 className="threat-h">AI is doing the work now.</h3>
              <p className="threat-body">It writes the copy, makes the image, cuts the audio, drafts the design — faster and cheaper. Work that took you years to master gets done passably in seconds.</p>
            </div>
            <div className="threat-col">
              <span className="threat-label">Your Work</span>
              <h3 className="threat-h">It lands on your life.</h3>
              <p className="threat-body">The skills you spent a career sharpening are worth less by the month, inside a world built to fragment you and keep you scrolling. The focus you’d need is gone before you reach the work that matters.</p>
            </div>
            <div className="threat-col">
              <span className="threat-label">You</span>
              <h3 className="threat-h">And then it gets personal.</h3>
              <p className="threat-body">The real wound isn’t economic: the part of you that felt like a creative is the part that’s worth less now. You know you need to move, but you’re frozen — and you can’t even see what’s freezing you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— CONSUMPTION TRAP ——— */}
      <section className="section section--elev" data-screen-label="Consumption Trap">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">The Consumption Trap</div>
            <h2 className="title">You’re not passive. You’re too capable to sit still — so you <em>consume</em>.</h2>
            <p className="intro">A course. A tool. A coach. Another framework. It feels like forward motion and quiets the anxiety — without the exposure of the real move. Each one solves a piece. None gets you to act.</p>
          </div>
          <div className="cards cards-4 reveal">
            <div className="card">
              <h3>Meditation apps</h3>
              <p className="lead">Calm you down but don’t move you forward.</p>
              <p className="muted">You feel better for ten minutes, then open your laptop to the same blank page.</p>
            </div>
            <div className="card">
              <h3>Productivity apps</h3>
              <p className="lead">Track tasks but ignore the fear blocking you from starting.</p>
              <p className="muted">You don’t need a better to-do list.</p>
            </div>
            <div className="card">
              <h3>Traditional coaching</h3>
              <p className="lead">Clarity once a week, gone between sessions.</p>
              <p className="muted">The breakthroughs happen at 11pm, alone.</p>
            </div>
            <div className="card">
              <h3>AI chatbots</h3>
              <p className="lead">Generic advice, because they don’t know you.</p>
              <p className="muted">You get the same answer as everyone else.</p>
            </div>
          </div>
          <p className="trap-punch reveal">Every competitor isn’t an alternative to PYC — it’s part of the disease. <em>PYC is the one thing that isn’t more to consume.</em> It reconnects you first, then moves you.</p>
        </div>
      </section>

      {/* ——— REFRAME (hinge) ——— */}
      <section className="section" data-screen-label="Reframe">
        <div className="container reframe">
          <div className="eyebrow reveal" style={{ justifyContent: 'center' }}><span>The Reframe</span></div>
          <h2 className="pull reveal">
            <span className="pq">The threat and the opportunity are the <em>same fact</em>.</span>
            <span className="pq">The thing under threat is the thing that saves you.</span>
          </h2>
        </div>
      </section>

      {/* ——— HOW IT WORKS (merged) ——— */}
      <section className="section" id="how" data-screen-label="How It Works">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">How It Works</div>
            <h2 className="title">Your creative engine is switched off. PYC switches it <em>back on</em>.</h2>
            <p className="intro">This isn’t a feature list — it’s the actual day, in order. Each part hands off to the next, and every ten days the loop produces two things at once: a shift inside you, and a receipt you can show. The features aren’t bolted on — they <strong>are</strong> the mechanism.</p>
          </div>

          <div className="feature-tour reveal">
            {FEATURES.map((f, i) => (
              <Fragment key={f.title}>
                {f.beat && <BeatDivider label={f.beat} />}
                <FeatureRow
                  title={f.title}
                  subtitle={f.subtitle}
                  body={f.body}
                  tag={f.free ? 'Free' : undefined}
                  side={i % 2 === 0 ? 'left' : 'right'}
                  mockup={{ crumbs: f.crumbs, caption: f.caption, dimension: f.dimension }}
                />
              </Fragment>
            ))}
          </div>

          <BeatDivider label="The Arc" />
          <div className="arc reveal">
            <div className="arc-head">
              <h3 className="arc-title">The 90-Day Journey</h3>
              <p className="arc-sub">Nine sprints. Nine tools for life. A win at every stage.</p>
              <p className="arc-intro">The sprints stack into a journey that clears your blockers in the order they get in your way.</p>
            </div>

            {/* Phase 1 — expanded inline (static, always open) */}
            <div className="arc-phase is-open">
              <div className="arc-phase-head arc-phase-head--static">
                <span className="phase-idx" aria-hidden="true">01</span>
                <span className="arc-phase-meta">
                  <span className="arc-phase-title">
                    <span className="phase-name">Unlock</span>
                    <span className="phase-days">Days 1–30</span>
                  </span>
                  <span className="arc-phase-theme">what’s inside you: fear, imposter syndrome, disconnect</span>
                </span>
                <span className="arc-affordance" aria-hidden="true">Sprints 1–3</span>
              </div>
              <div className="arc-phase-body">
                <p className="arc-detail">Real action in the first ten days.</p>
                <SprintList sprints={PHASE1_SPRINTS} />
              </div>
            </div>

            {/* Phases 2 & 3 — collapsed, expand-on-tap */}
            <ArcPhase
              index="02"
              name="Strengthen"
              days="Days 31–60"
              theme="the world around you: distraction, burnout, overload"
              affordance="Sprints 4–6"
              detail="Systems the modern world can’t strip: protect focus, learn how you work, recover without spiraling."
            />
            <ArcPhase
              index="03"
              name="Activate"
              days="Days 61–90"
              theme="the threat facing everyone: AI eating credentials"
              affordance="Sprints 7–9"
              detail="Turn your human edge into a defensible advantage: solve harder problems, name your edge, become a finisher."
            />
          </div>

          {/* Payoff close */}
          <div className="hiw-close reveal">
            <p className="hiw-thesis">Every step produces transformation and proof at the same time. <span className="cont">That’s what separates PYC from self-help — all feeling, no evidence — and from productivity apps — all output, no you.</span></p>
            <h3 className="hiw-payoff">By the end, you don’t just feel different. You have <em>proof</em>.</h3>
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
