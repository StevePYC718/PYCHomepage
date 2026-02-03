import './landing.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pioneer Your Creative — Pivot, Build, or Evolve Your Creative Career',
  description: 'You didn\'t lose your creativity. You buried it. The system for creative professionals ready to pivot their career, build their business, or evolve their role.',
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
                <span className="teal">You buried it.</span>
              </h1>
              <p className="hero-subtitle">
                Now <span className="red">pivot</span> with it. <span className="copper">Build</span> with it. <span className="teal">Evolve</span> with it.<br />
                The system for creative professionals who are done waiting.
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

      {/* Value Prop Section */}
      <section className="value-prop-section">
        <div className="container">
          <div className="paths-headline">
            <div className="section-label">Your Direction</div>
            <h2>Pioneer Your Path</h2>
          </div>
          <div className="paths-main-grid">
            <div className="path-outcome-card pivot">
              <div className="path-outcome-name">PIVOT</div>
              <div className="path-outcome-desc">Change careers entirely</div>
            </div>
            <div className="path-outcome-card build">
              <div className="path-outcome-name">BUILD</div>
              <div className="path-outcome-desc">Start your own business</div>
            </div>
            <div className="path-outcome-card evolve">
              <div className="path-outcome-name">EVOLVE</div>
              <div className="path-outcome-desc">Transform your current role</div>
            </div>
          </div>
          <div className="differentiators-row">
            <div className="diff-item">
              <span className="diff-not">Not a course</span>
              An execution system with daily sprints and real accountability
            </div>
            <div className="diff-item">
              <span className="diff-not">Not meditation</span>
              Immersive audio that drives action, not just calm
            </div>
            <div className="diff-item">
              <span className="diff-not">Not journaling</span>
              Track real metrics: applications, revenue, projects shipped
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
              <p>Skills that took years to develop are being commoditized in months. The &ldquo;safe&rdquo; paths are becoming unsafe.</p>
            </div>

            <div className="threat-card external">
              <div className="threat-label">🔥 External Pressure</div>
              <div className="threat-title">Modern life is engineered against you</div>
              <p>Distraction by design — and creative brains are MORE susceptible. Your nervous system is constantly triggered. You can&apos;t think your way out.</p>
            </div>

            <div className="threat-card internal">
              <div className="threat-label">🧠 Internal Blockers</div>
              <div className="threat-title">The result: a crisis of action</div>
              <p>Fear disguised as &ldquo;being practical.&rdquo; Imposter syndrome. Disconnection from who you used to be.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Paradox Section */}
      <section className="paradox-section">
        <div className="container">
          <div className="paradox-box">
            <p className="paradox-statement">
              Creatives are <span className="red">most threatened</span> by these forces.<br />
              And <span className="copper">most equipped</span> to thrive.
            </p>
            <p className="paradox-sub">
              <strong>Creative Energy</strong> — divergent thinking, emotional intelligence, connecting unrelated ideas —
              these are the skills AI can&apos;t replace. Your unfair advantage. Buried under fear and burnout. <strong>Until now.</strong>
            </p>
          </div>
          <a href="#pricing" className="btn-primary">Unlock Your Creative Energy →</a>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section" id="how-it-works">
        <div className="container">
          <div className="section-label">The 90-Day Execution System</div>
          <h2 className="section-title">Three phases. Nine sprints. Real results.</h2>
          <p className="section-subtitle">
            PYC isn&apos;t content to consume — it&apos;s a sprint-based execution system.
            Each 10-day sprint builds specific skills, with tools you actually use
            and metrics you actually track. Skip a phase, the foundation crumbles.
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
              <div className="phase-desc">Build self-knowledge. Protect your focus from digital poison, understand your energy rhythms, develop emotional resilience for the hard moments ahead.</div>
              <div className="phase-sprints">Sprints 4-6</div>
            </div>
            <div className="phase-card">
              <div className="phase-number">Phase 3 — Days 61-90</div>
              <div className="phase-name">ACTIVATE</div>
              <div className="phase-desc">Deploy your edge. Sharpen creative problem-solving, build your human advantage over AI, and finish what you start. Ship the work that matters.</div>
              <div className="phase-sprints">Sprints 7-9</div>
            </div>
          </div>

          {/* App Walkthrough */}
          <div className="app-walkthrough">
            <h3>Here&apos;s how it works in the app</h3>
            <p>Every day, you&apos;ll have a clear path forward. Lessons, tools, and reflection — designed for busy professionals.</p>

            <div className="screens-showcase">
              <div className="screen-item">
                <div className="phone-frame">
                  <div className="phone-screen" style={{justifyContent: 'center', textAlign: 'center'}}>
                    <div style={{padding: '0 8px'}}>
                      <p style={{fontSize: '0.75rem', color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.5}}>Before we talk about where you&apos;re going, let&apos;s remember where you came from.</p>
                      <p style={{fontSize: '0.6rem', color: 'var(--text-tertiary)', marginBottom: '24px'}}>This will take about 5 minutes.<br />There are no wrong answers.</p>
                      <div className="screen-btn">Begin</div>
                    </div>
                  </div>
                </div>
                <div className="screen-label"><strong>1.</strong> Creative Archaeology</div>
              </div>

              <div className="screen-item">
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
                      <p style={{fontSize: '0.55rem', color: 'var(--text-secondary)'}}>8 min • Video + Reflection</p>
                    </div>
                    <div className="screen-btn">Start Lesson →</div>
                  </div>
                </div>
                <div className="screen-label"><strong>2.</strong> Daily Home</div>
              </div>

              <div className="screen-item">
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
                <div className="screen-label"><strong>3.</strong> Track Wins</div>
              </div>

              <div className="screen-item">
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
                <div className="screen-label"><strong>4.</strong> AI Co-Pilot</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="container">
          <div className="section-label">Feel Different, Not Just Think Different</div>
          <h2 className="section-title">Built for creative brains.</h2>
          <p className="section-subtitle">
            An immersive system designed for how creatives actually learn and change.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎧</div>
              <h4>Immersive Audio</h4>
              <p>Cinematic narratives that change your state — like a song that transports you. Story → Learning → Insight → Reflection. Your creative DNA shifts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🪞</div>
              <h4>Creative Archaeology</h4>
              <p>Remember who you were before work took over. No other program does this. <em>The Artist&apos;s Way</em> meets <em>The Art of Impossible</em>.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h4>AI Co-Pilot</h4>
              <p>A guide that remembers your fears, wins, and patterns. Knows your story. Calls you out when you&apos;re hiding.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚨</div>
              <h4>SOS Button</h4>
              <p>Overwhelmed? One tap. 90 seconds. Nervous system reset. Back to work.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h4>Evidence System</h4>
              <p>Track real metrics: applications sent, revenue earned, projects shipped. Proof this is working.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h4>Morning Spark</h4>
              <p>2 minutes to reconnect with creativity for fun. Daily prompts tied to your craft. The joy returns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Paths Section */}
      <section className="paths-section">
        <div className="container">
          <div className="section-label">Pioneer Your Path</div>
          <h2 className="section-title">Three paths. Real-world outcomes.</h2>
          <p className="section-subtitle">
            This isn&apos;t journaling and hoping for the best. You pick a direction,
            track a concrete metric, and execute for 90 days. Your creative energy needs a target.
          </p>

          <div className="paths-grid">
            <div className="path-card pivot">
              <div className="path-name">PIVOT</div>
              <div className="path-for">Your current path is fundamentally misaligned with who you&apos;ve become.</div>
              <div className="path-action"><strong>Outcome:</strong> New career launched — applications sent, interviews completed, offers received.</div>
            </div>
            <div className="path-card build">
              <div className="path-name">BUILD</div>
              <div className="path-for">You have something inside that needs to exist in the world.</div>
              <div className="path-action"><strong>Outcome:</strong> Business or project shipped — revenue generated, customers acquired, work launched.</div>
            </div>
            <div className="path-card evolve">
              <div className="path-name">EVOLVE</div>
              <div className="path-for">The foundation is right but the execution is stale.</div>
              <div className="path-action"><strong>Outcome:</strong> Role transformed — promotion earned, projects led, recognition gained.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-label">Investment</div>
          <h2 className="section-title">One price. Full transformation.</h2>
          <p className="section-subtitle" style={{marginLeft: 'auto', marginRight: 'auto'}}>
            No tiers. No upsells. No subscription traps.
            One payment for the complete 90-day system.
          </p>

          <div className="pricing-card">
            <div className="pricing-label">Full Access</div>
            <div className="pricing-amount">$497</div>
            <div className="pricing-term">One-time payment • Lifetime access</div>

            <ul className="pricing-features">
              <li>9 transformation sprints (90 days of content)</li>
              <li>AI Co-Pilot with memory</li>
              <li>Creative Archaeology onboarding</li>
              <li>All tools: SOS Button, Commitment Lock, Evidence System</li>
              <li>Path-specific guidance (Pivot, Build, or Evolve)</li>
              <li>Morning Spark daily prompts</li>
              <li>Future updates included</li>
            </ul>

            <a href="#" className="btn-primary" style={{width: '100%', textAlign: 'center'}}>Start Free — Upgrade Anytime</a>

            <p className="pricing-guarantee">30-day money-back guarantee. No questions asked.</p>
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
                Three things: (1) Creative Archaeology creates an emotional foundation no one else offers.
                (2) The AI Co-Pilot remembers your journey and provides personalized guidance.
                (3) Path-specific content means you&apos;re not getting generic advice — you&apos;re getting what YOU need.
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
          <h2 className="section-title" style={{maxWidth: '700px', margin: '0 auto 24px'}}>
            You buried it under years of &ldquo;being practical.&rdquo;<br />
            <span className="copper">It&apos;s still there.</span>
          </h2>
          <a href="#" className="btn-primary">Start Free →</a>
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
