import './landing.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pioneer Your Creative — The 90-Day System for Creative Minds',
  description: 'A 90-day system for creative minds who are done waiting. Set your North Star Goal, move through 9 structured sprints, and make real progress — with AI guidance designed for how your brain actually works.',
}

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="container">
          <a href="#" className="logo">Pioneer <span>Your Creative</span></a>
          <a href="#pricing" className="nav-cta">Start Free →</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                You didn&apos;t lose it.<br />
                <strong className="teal">You <span className="copper">buried</span> it.</strong>
              </h1>
              <p className="hero-subtitle">
                Now — <span className="teal">Pivot</span> with it. <span className="copper">Build</span> with it. <span className="green">Evolve</span> with it.
              </p>
              <p className="hero-sub-tagline">
                A 90-day system for creative minds who are done waiting and ready to move.
              </p>
              <div className="hero-cta-group">
                <a href="#pricing" className="btn-primary">Start Free — No Credit Card</a>
                <a href="#how-it-works" className="btn-secondary">See How It Works</a>
              </div>
            </div>
            <div className="phone-showcase">
              {/* Profile Reveal Screen */}
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="screen-header">Your Creative Profile</div>
                  <div className="screen-card copper-border" style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <p style={{fontSize: '0.8rem', color: 'var(--text-primary)', marginBottom: '10px', fontWeight: 600}}>You&apos;re a dormant musician.</p>
                    <p style={{fontSize: '0.65rem', lineHeight: 1.6, marginBottom: 0}}>
                      You stopped creating 5-10 years ago, when work took over.<br /><br />
                      But creativity didn&apos;t leave you. You still solve problems in unusual ways.<br /><br />
                      When you were making music, <span className="copper">time disappeared</span>.<br /><br />
                      That feeling is still available to you.
                    </p>
                  </div>
                  <div className="screen-btn">This feels right</div>
                </div>
              </div>
              {/* Creative Past Screen */}
              <div className="phone-frame secondary">
                <div className="phone-screen">
                  <div className="progress-dots">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <div className="screen-title">What did you used to create?</div>
                  <div className="screen-subtitle">Before the job, the responsibilities — what did you make?</div>
                  <div className="selection-grid">
                    <div className="selection-item selected">
                      <span className="selection-emoji">🎸</span>
                      Music
                    </div>
                    <div className="selection-item">
                      <span className="selection-emoji">🎨</span>
                      Visual Art
                    </div>
                    <div className="selection-item">
                      <span className="selection-emoji">✍️</span>
                      Writing
                    </div>
                    <div className="selection-item">
                      <span className="selection-emoji">🔧</span>
                      Building
                    </div>
                  </div>
                  <div className="screen-btn" style={{marginTop: 'auto'}}>Continue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callout Strip */}
      <section style={{padding: '0'}}>
        <div className="container">
          <div className="callout-strip-grid">
            <div>
              <p style={{fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '6px'}}>Not a course</p>
              <p style={{fontSize: '0.85rem', color: 'var(--text-tertiary)', lineHeight: 1.5}}>A quarterly system with sprints, metrics, and real accountability</p>
            </div>
            <div>
              <p style={{fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '6px'}}>Not meditation</p>
              <p style={{fontSize: '0.85rem', color: 'var(--text-tertiary)', lineHeight: 1.5}}>Immersive audio designed to change your state — then move you to action</p>
            </div>
            <div>
              <p style={{fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '6px'}}>Not journaling</p>
              <p style={{fontSize: '0.85rem', color: 'var(--text-tertiary)', lineHeight: 1.5}}>Track the metric that matters: revenue, applications, pages written, projects shipped</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <div className="section-label">The Reality</div>
          <h2 className="section-title">Up at 3am questioning everything?</h2>
          <p className="section-subtitle">
            That&apos;s not random anxiety. You&apos;re feeling something real.
          </p>

          <div className="threat-stack">
            <div className="threat-card existential">
              <div className="threat-label">⚠️ Existential Threat</div>
              <div className="threat-title">AI is coming for creative jobs</div>
              <p>Skills that took years to develop are being commoditized in months. The &ldquo;safe&rdquo; creative career paths are becoming unsafe. Half your job functions may already be automated.</p>
            </div>

            <div className="threat-card external">
              <div className="threat-label">🔥 External Pressure</div>
              <div className="threat-title">Modern life is engineered against you</div>
              <p>Distraction by design — and creative brains are MORE susceptible. Your nervous system is constantly triggered. You can&apos;t think your way out of a feeling problem.</p>
            </div>

            <div className="threat-card internal">
              <div className="threat-label">🧠 Internal Blockers</div>
              <div className="threat-title">The result: a crisis of action</div>
              <p>Fear disguised as &ldquo;being practical.&rdquo; Imposter syndrome. Disconnection from who you used to be. You know you need to move — but something keeps you frozen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Paradox Section */}
      <section className="paradox-section">
        <div className="container">
          <div className="paradox-box">
            <div className="paradox-statement">
              Creatives are <span className="red">most threatened</span> by these forces.<br />
              And <span className="teal">most equipped</span> to thrive.
            </div>
            <p className="paradox-sub" style={{marginBottom: 0}}>
              <strong>Creative Energy</strong> — divergent thinking, emotional intelligence, connecting unrelated ideas — these are the skills AI can&apos;t replace.
            </p>
            <p className="paradox-sub" style={{marginTop: '16px'}}>
              Your unfair advantage? <span className="copper"><strong>Buried under fear and burnout.</strong></span>
            </p>
            <p className="paradox-sub" style={{marginTop: '12px', fontSize: '1.25rem'}}>
              <strong className="copper">Until now.</strong>
            </p>
          </div>
          <a href="#pricing" className="btn-primary">Unlock Your Creative Energy →</a>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section" id="how-it-works">
        <div className="container">
          <div className="section-label">The 90-Day System</div>
          <h2 className="section-title">Three phases. Nine sprints. Real results.</h2>
          <p className="section-subtitle">
            PYC isn&apos;t content to consume — it&apos;s a sprint-based system designed for creative brains.
            Each 10-day sprint builds specific skills, with tools you actually use and metrics you actually track.
          </p>

          <div className="phases-grid">
            <div className="phase-card">
              <div className="phase-number">Phase 1 — Days 1-30</div>
              <div className="phase-name">UNLOCK</div>
              <div className="phase-desc">Clear what&apos;s blocking you. Face the fear, break the inaction cycle, build your commitment architecture.</div>
              <div className="phase-sprints">Sprints 1-3</div>
            </div>
            <div className="phase-card">
              <div className="phase-number">Phase 2 — Days 31-60</div>
              <div className="phase-name">STRENGTHEN</div>
              <div className="phase-desc">Build self-knowledge. Protect your focus, understand your energy rhythms, develop emotional resilience for the hard moments ahead.</div>
              <div className="phase-sprints">Sprints 4-6</div>
            </div>
            <div className="phase-card">
              <div className="phase-number">Phase 3 — Days 61-90</div>
              <div className="phase-name">ACTIVATE</div>
              <div className="phase-desc">Deploy your edge. Sharpen creative problem-solving, build your human advantage over AI, and finish what you start. Ship the work that matters.</div>
              <div className="phase-sprints">Sprints 7-9</div>
            </div>
          </div>

          {/* How It Works — 4-Step Flow */}
          <div className="how-it-works-flow">
            <h3>Your quarter. Your goal. A system that gets you there.</h3>
            <p>Most goal tools give you a blank page. PYC gives you a container — structured sprints, AI guidance, and creative fuel designed for how your brain actually works.</p>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">Step 1</div>
                <div className="step-name">Excavate</div>
                <div className="step-desc">Creative Archaeology uncovers who you were before work buried it. Your creative profile becomes the foundation.</div>
                <span className="step-free-tag">Free for everyone</span>
              </div>
              <div className="step-card">
                <div className="step-number">Step 2</div>
                <div className="step-name">Aim</div>
                <div className="step-desc">Choose your path. Set a North Star Goal and the metrics that prove you&apos;re moving.</div>
                <span className="step-free-tag">Free for everyone</span>
              </div>
              <div className="step-card">
                <div className="step-number">Step 3</div>
                <div className="step-name">Execute</div>
                <div className="step-desc">9 sprints over 90 days. Immersive audio, daily tools, and an AI co-pilot that remembers everything.</div>
              </div>
              <div className="step-card">
                <div className="step-number">Step 4</div>
                <div className="step-name">Ship</div>
                <div className="step-desc">The career launched. The book written. The project shipped. Real outcomes, tracked and proven.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section>
        <div className="container">
          <div className="section-label">Feel Different, Not Just Think Different</div>
          <h2 className="section-title">Built for creative brains.</h2>
          <p className="section-subtitle">
            Five things that make PYC different from everything else you&apos;ve tried.
          </p>

          <div className="feature-showcase">

            {/* Feature 1: Creative Archaeology */}
            <div className="feature-row">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-screen" style={{justifyContent: 'center', textAlign: 'center'}}>
                    <div style={{padding: '0 8px'}}>
                      <p style={{fontSize: '0.75rem', color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.5}}>Before we talk about where you&apos;re going, let&apos;s remember where you came from.</p>
                      <p style={{fontSize: '0.6rem', color: 'var(--text-tertiary)', marginBottom: '24px'}}>This will take about 5 minutes.<br />There are no wrong answers.</p>
                      <div className="screen-btn">Begin</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Creative Archaeology</div>
                <h3>Remember who you were before work took over.</h3>
                <p>Before you set a goal, you need to feel — not just intellectually understand — that you ARE creative. Creative Archaeology excavates your buried identity in 5 minutes. No other program does this.</p>
                <p className="feature-detail">The Artist&apos;s Way meets The Art of Impossible. Your creative profile becomes the emotional foundation everything else builds on.</p>
              </div>
            </div>

            {/* Feature 2: AI Co-Pilot */}
            <div className="feature-row reverse">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="screen-header">Co-Pilot</div>
                    <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '8px'}}>
                      <div style={{background: 'var(--bg-secondary)', borderRadius: '12px 12px 12px 4px', padding: '10px', fontSize: '0.6rem', color: 'var(--text-secondary)', alignSelf: 'flex-start', maxWidth: '85%'}}>
                        I noticed you&apos;ve been avoiding the networking outreach from Sprint 2. What&apos;s coming up when you think about it?
                      </div>
                      <div style={{background: 'rgba(91, 138, 138, 0.2)', borderRadius: '12px 12px 4px 12px', padding: '10px', fontSize: '0.6rem', color: 'var(--text-primary)', alignSelf: 'flex-end', maxWidth: '85%'}}>
                        Honestly? I&apos;m scared they&apos;ll think I&apos;m desperate.
                      </div>
                      <div style={{background: 'var(--bg-secondary)', borderRadius: '12px 12px 12px 4px', padding: '10px', fontSize: '0.6rem', color: 'var(--text-secondary)', alignSelf: 'flex-start', maxWidth: '85%'}}>
                        That&apos;s fear talking — the &ldquo;perception&rdquo; disguise from Lesson 2. Remember: people want to help. What&apos;s one person you could reach out to today?
                      </div>
                    </div>
                    <div style={{background: 'var(--bg-tertiary)', borderRadius: '8px', padding: '10px', fontSize: '0.6rem', color: 'var(--text-tertiary)', marginTop: '12px'}}>Type your message...</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">AI Co-Pilot with Memory</div>
                <h3>A guide that actually knows your story.</h3>
                <p>Not a chatbot. The Co-Pilot remembers your fears, your wins, your patterns. It knows what you committed to last week and whether you followed through. It calls you out when you&apos;re hiding.</p>
                <p className="feature-detail">Personalized guidance that &ldquo;gets&rdquo; your specific situation — because it&apos;s been paying attention since day one.</p>
              </div>
            </div>

            {/* Feature 3: Sprint System */}
            <div className="feature-row">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="screen-header">Good morning, Steve</div>
                    <div className="screen-card" style={{marginBottom: '10px'}}>
                      <p style={{fontSize: '0.6rem', color: 'var(--text-tertiary)', marginBottom: '4px'}}>SPRINT 1 • DAY 3</p>
                      <p style={{fontSize: '0.7rem', color: 'var(--text-primary)', marginBottom: '4px', fontWeight: 500}}>Break the Inaction Cycle</p>
                      <div className="progress-dots" style={{margin: '8px 0 0 0'}}>
                        <div className="dot complete"></div>
                        <div className="dot complete"></div>
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                    </div>
                    <div className="screen-card teal-border" style={{flex: 1}}>
                      <p style={{fontSize: '0.6rem', color: 'var(--text-tertiary)', marginBottom: '4px'}}>TODAY&apos;S LESSON</p>
                      <p style={{fontSize: '0.7rem', color: 'var(--text-primary)', marginBottom: '4px', fontWeight: 500}}>The Fear Disguises</p>
                      <p style={{fontSize: '0.55rem', color: 'var(--text-secondary)'}}>8 min • Audio + Reflection</p>
                    </div>
                    <div className="screen-btn">Start Lesson →</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Immersive Sprint System</div>
                <h3>9 structured sprints. Not a blank page.</h3>
                <p>Each 10-day sprint is a themed container — cinematic audio narratives, practical tools, and guided reflection. Designed to change your state first, then move you to action. Like a song that transports you, then hands you a blueprint.</p>
                <p className="feature-detail">10-20 minutes a day. Built for busy professionals, not monks with empty calendars.</p>
              </div>
            </div>

            {/* Feature 4: Evidence System */}
            <div className="feature-row reverse">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="screen-header" style={{color: 'var(--accent-secondary)'}}>🔥 Log a Win</div>
                    <div className="screen-title" style={{marginBottom: '16px'}}>What happened?</div>
                    <div className="screen-card" style={{flex: 1, background: 'var(--bg-tertiary)'}}>
                      <p style={{fontSize: '0.65rem', color: 'var(--text-tertiary)', fontStyle: 'italic'}}>I sent the scary email...</p>
                    </div>
                    <div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
                      <div style={{flex: 1, textAlign: 'center', padding: '10px', background: 'var(--bg-secondary)', borderRadius: '8px', fontSize: '0.6rem'}}>
                        <span style={{fontSize: '1rem'}}>🌱</span><br />
                        <span style={{color: 'var(--text-tertiary)'}}>Small</span>
                      </div>
                      <div style={{flex: 1, textAlign: 'center', padding: '10px', background: 'rgba(91, 138, 138, 0.2)', border: '1px solid var(--accent-primary)', borderRadius: '8px', fontSize: '0.6rem'}}>
                        <span style={{fontSize: '1rem'}}>💪</span><br />
                        <span style={{color: 'var(--accent-primary)'}}>Solid</span>
                      </div>
                      <div style={{flex: 1, textAlign: 'center', padding: '10px', background: 'var(--bg-secondary)', borderRadius: '8px', fontSize: '0.6rem'}}>
                        <span style={{fontSize: '1rem'}}>🔥</span><br />
                        <span style={{color: 'var(--text-tertiary)'}}>Huge</span>
                      </div>
                    </div>
                    <div className="screen-btn">Log Win</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Evidence System</div>
                <h3>Track real metrics. Build undeniable proof.</h3>
                <p>Log wins. Track your North Star metric — applications sent, revenue earned, pages written, projects shipped. When imposter syndrome hits, open your evidence and let the data talk.</p>
                <p className="feature-detail">Commitment Lock keeps you accountable. The Evidence System proves it&apos;s working.</p>
              </div>
            </div>

            {/* Feature 5: Morning Spark + SOS */}
            <div className="feature-row">
              <div className="feature-visual">
                <div style={{maxWidth: '240px', margin: '0 auto'}}>
                  <div style={{background: 'var(--bg-primary)', borderRadius: '24px', padding: '32px 24px', border: '1px solid var(--border-default)', textAlign: 'center'}}>
                    <p style={{fontSize: '0.65rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px'}}>Morning Spark — Day 14</p>
                    <p style={{fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: '24px', fontStyle: 'italic'}}>&ldquo;Write a six-word story about your day so far.&rdquo;</p>
                    <div style={{width: '100%', height: '1px', background: 'var(--border-default)', marginBottom: '24px'}}></div>
                    <p style={{fontSize: '0.65rem', color: 'var(--semantic-error)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>🚨 SOS Button</p>
                    <p style={{fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '16px'}}>Overwhelmed? One tap.</p>
                    <div style={{background: 'rgba(166, 93, 87, 0.15)', border: '1px solid var(--semantic-error)', borderRadius: '10px', padding: '12px', fontSize: '0.8rem', color: 'var(--semantic-error)', fontWeight: 500}}>90-Second Reset</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Morning Spark + SOS Button</div>
                <h3>Creative joy before productivity. Calm when you need it.</h3>
                <p><strong>Morning Spark:</strong> 2 minutes to reconnect with creativity for fun. Daily prompts tied to your craft — remember, notice, play. The joy comes back before the work begins.</p>
                <p><strong>SOS Button:</strong> Overwhelmed? Anxious? One tap for guided breathwork and nervous system reset. 90 seconds to calm. Then back to work.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Paths Section */}
      <section className="paths-section">
        <div className="container">
          <div className="section-label">Pioneer Your Path</div>
          <h2 className="section-title">Pick a direction. Set a goal. Execute for 90 days.</h2>
          <p className="section-subtitle">
            PYC isn&apos;t journaling and hoping. You choose a path, set a North Star Goal with real metrics,
            and your AI co-pilot helps you execute through 9 structured sprints. Your creative energy needs a target — this gives it one.
          </p>

          <div className="paths-grid">
            <div className="path-card pivot">
              <div className="path-name">PIVOT</div>
              <div className="path-for">Your current direction is fundamentally misaligned with who you&apos;ve become.</div>
              <div className="path-examples"><strong>Examples:</strong> Change careers. Break a pattern that&apos;s held you back for years. Make the life transition you keep postponing.</div>
            </div>
            <div className="path-card build">
              <div className="path-name">BUILD</div>
              <div className="path-for">You have something inside that needs to exist in the world.</div>
              <div className="path-examples"><strong>Examples:</strong> Launch a business. Write the book. Ship the project. Start the thing you&apos;ve been &ldquo;planning&rdquo; for two years.</div>
            </div>
            <div className="path-card evolve">
              <div className="path-name">EVOLVE</div>
              <div className="path-for">The foundation is right but you&apos;ve plateaued.</div>
              <div className="path-examples"><strong>Examples:</strong> Deepen your craft. Transform your current role. Level up a skill. Become the person the next chapter requires.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-label">Investment</div>
          <h2 className="section-title">Start free. Go all-in when you&apos;re ready.</h2>
          <p className="section-subtitle" style={{marginLeft: 'auto', marginRight: 'auto'}}>
            Creative Archaeology is free — discover who you are before you invest.
            When you&apos;re ready to execute, one payment unlocks the full system.
          </p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-label">Free — Forever</div>
              <div className="pricing-amount">$0</div>
              <div className="pricing-term">No credit card required</div>
              <ul className="pricing-features">
                <li>Creative Archaeology onboarding</li>
                <li>Your creative profile &amp; identity map</li>
                <li>Path selection (Pivot, Build, Evolve)</li>
                <li>North Star Goal setting</li>
                <li>Daily Morning Spark prompts</li>
              </ul>
              <a href="#" className="pricing-btn-secondary">Start Free →</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-label">Full Access</div>
              <div className="pricing-amount">$497</div>
              <div className="pricing-term">One-time payment · Lifetime access</div>
              <ul className="pricing-features">
                <li className="includes-tag">Everything in Free, plus:</li>
                <li>9 transformation sprints (90 days)</li>
                <li>AI Co-Pilot with memory</li>
                <li>All tools: SOS Button, Commitment Lock, Evidence System</li>
                <li>Path-specific guidance &amp; content</li>
                <li>Metric tracking &amp; progress proof</li>
                <li>Future updates included</li>
              </ul>
              <a href="#" className="pricing-btn-primary">Upgrade to Full Access</a>
              <p className="pricing-guarantee">30-day money-back guarantee. No questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-label">Questions</div>
          <h2 className="section-title">Before you decide.</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">What exactly is the free version?</div>
              <div className="faq-answer">
                Creative Archaeology — a 5-minute deep dive into your creative identity. You&apos;ll get your creative profile,
                choose your path (Pivot, Build, or Evolve), and set your North Star Goal. Plus daily Morning Spark prompts to reconnect
                with creativity. It&apos;s the foundation. When you&apos;re ready to execute with sprints, tools, and AI guidance, you upgrade.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">Is this only for creative careers?</div>
              <div className="faq-answer">
                No. The three paths — Pivot, Build, and Evolve — work for any meaningful goal. Write a book. Break a pattern.
                Launch a side project. Level up a skill. The system is designed for creative minds, but your goal doesn&apos;t have to be a career move.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">How much time does this take each day?</div>
              <div className="faq-answer">
                Most days require 10-20 minutes. Some days less, some days more if you&apos;re doing deeper work.
                This is designed for busy professionals — not another thing to feel guilty about skipping.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">What if I miss days?</div>
              <div className="faq-answer">
                The program is self-paced. Life happens. The Commitment Lock feature helps you stay accountable
                without making you feel like a failure when you need to pause. Progress, not perfection.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">Is this just another meditation/wellness app?</div>
              <div className="faq-answer">
                No. This is a transformation system with tools, frameworks, and accountability architecture.
                There&apos;s mindfulness where it&apos;s useful (like the SOS button), but the focus is action and results — not relaxation.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">What makes this different from other coaching programs?</div>
              <div className="faq-answer">
                PYC isn&apos;t coaching — it&apos;s a structured system. Three things set it apart: (1) Creative Archaeology builds an
                emotional foundation no other tool offers. (2) The AI Co-Pilot remembers your journey and adapts its guidance.
                (3) You&apos;re not consuming content — you&apos;re running 9 structured sprints toward a specific, measurable goal.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">What&apos;s the refund policy?</div>
              <div className="faq-answer">
                30-day money-back guarantee, no questions asked. If you do the work for 30 days and don&apos;t feel
                a shift, email us and we&apos;ll refund you. We&apos;re confident in what we&apos;ve built.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{textAlign: 'center', padding: '100px 0'}}>
        <div className="container">
          <h2 className="section-title" style={{maxWidth: '700px', margin: '0 auto 16px'}}>
            You buried it under years of<br />&ldquo;being practical.&rdquo;
          </h2>
          <p className="section-subtitle" style={{margin: '0 auto 32px', textAlign: 'center'}}>
            <span className="copper">It&apos;s still there.</span>
          </p>
          <a href="#pricing" className="btn-primary">Start Free →</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <a href="#" className="logo">Pioneer <span>Your Creative</span></a>
          <p>© 2026 Pioneer Your Creative. All rights reserved.</p>
          <p style={{marginTop: '8px'}}>
            <a href="#" style={{color: 'var(--text-tertiary)', textDecoration: 'none'}}>Privacy</a> ·{' '}
            <a href="#" style={{color: 'var(--text-tertiary)', textDecoration: 'none'}}>Terms</a> ·{' '}
            <a href="#" style={{color: 'var(--text-tertiary)', textDecoration: 'none'}}>Contact</a>
          </p>
        </div>
      </footer>
    </>
  )
}
