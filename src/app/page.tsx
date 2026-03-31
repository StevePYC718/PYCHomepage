import './landing.css'
import FaqItem from './FaqItem'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="container">
          <a href="#" className="logo">
            <svg className="logo-compass" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <polygon points="250,250 234,250 250,72 266,250" fill="#c8956c" opacity="0.95"/>
              <polygon points="250,250 266,250 250,428 234,250" fill="#7a5a40" opacity="0.6"/>
              <polygon points="250,250 250,266 428,250 250,234" fill="#8a6a50" opacity="0.5"/>
              <polygon points="250,250 250,234 72,250 250,266" fill="#8a6a50" opacity="0.5"/>
              <polygon points="250,250 262,138 274,250" fill="#5bbfba" opacity="0.7"/>
              <polygon points="250,250 362,262 250,274" fill="#5bbfba" opacity="0.7"/>
              <polygon points="250,250 238,362 226,250" fill="#5bbfba" opacity="0.7"/>
              <polygon points="250,250 138,238 250,226" fill="#5bbfba" opacity="0.7"/>
              <circle cx="250" cy="250" r="24" fill="#0a0a0a" stroke="#c8956c" strokeWidth="3"/>
              <circle cx="250" cy="250" r="8" fill="#c8956c"/>
            </svg>
            <span className="logo-text">Pioneer <span>Your Creative</span></span>
          </a>
          <a href="#pricing" className="nav-cta">Start Free &rarr;</a>
        </div>
      </nav>

      {/* Hero with Pioneer Landscape */}
      <section className="hero">
        <div className="hero-landscape">
          <svg viewBox="0 0 1400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="grain" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves={4} seed="2" result="noise"/>
                <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
                <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay"/>
              </filter>
              <linearGradient id="emberSeam" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="transparent"/>
                <stop offset="25%" stopColor="#d4561a" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="#e8720a" stopOpacity="0.9"/>
                <stop offset="75%" stopColor="#d4561a" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="transparent"/>
              </linearGradient>
              <radialGradient id="horizonGlow" cx="50%" cy="72%" r="50%">
                <stop offset="0%" stopColor="#c8956c" stopOpacity="0.22"/>
                <stop offset="40%" stopColor="#c8956c" stopOpacity="0.07"/>
                <stop offset="100%" stopColor="#c8956c" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="skyGlow" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#5bbfba" stopOpacity="0.08"/>
                <stop offset="100%" stopColor="#5bbfba" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#050d0d"/>
                <stop offset="45%" stopColor="#0a1515"/>
                <stop offset="75%" stopColor="#0f1a12"/>
                <stop offset="100%" stopColor="#160d08"/>
              </linearGradient>
              <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="transparent"/>
                <stop offset="100%" stopColor="rgba(0,0,0,0.75)"/>
              </radialGradient>
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e8720a" stopOpacity="1"/>
                <stop offset="15%" stopColor="#d4561a" stopOpacity="0.85"/>
                <stop offset="40%" stopColor="#c8956c" stopOpacity="0.3"/>
                <stop offset="70%" stopColor="#c8956c" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#c8956c" stopOpacity="0"/>
              </radialGradient>
              <clipPath id="frame"><rect width="1400" height="500"/></clipPath>
            </defs>
            <g clipPath="url(#frame)">
              <rect width="1400" height="500" fill="url(#skyGrad)"/>
              <rect width="1400" height="500" fill="url(#skyGlow)"/>
              {/* Stars */}
              <g fill="#5bbfba" opacity="0.35">
                <circle cx="120" cy="40" r="0.8"/><circle cx="245" cy="28" r="0.6"/><circle cx="380" cy="55" r="0.9"/>
                <circle cx="510" cy="22" r="0.7"/><circle cx="640" cy="45" r="0.6"/><circle cx="790" cy="18" r="0.8"/>
                <circle cx="920" cy="38" r="0.7"/><circle cx="1050" cy="25" r="0.9"/><circle cx="1180" cy="50" r="0.6"/>
                <circle cx="1320" cy="32" r="0.8"/><circle cx="68" cy="80" r="0.5"/><circle cx="185" cy="95" r="0.6"/>
                <circle cx="330" cy="70" r="0.5"/><circle cx="455" cy="88" r="0.7"/><circle cx="595" cy="65" r="0.5"/>
                <circle cx="730" cy="78" r="0.6"/><circle cx="860" cy="60" r="0.5"/><circle cx="990" cy="85" r="0.7"/>
                <circle cx="1120" cy="72" r="0.5"/><circle cx="1260" cy="88" r="0.6"/>
              </g>
              <g fill="#c8956c" opacity="0.2">
                <circle cx="158" cy="62" r="0.7"/><circle cx="290" cy="42" r="0.5"/><circle cx="420" cy="75" r="0.6"/>
                <circle cx="555" cy="35" r="0.7"/><circle cx="685" cy="58" r="0.5"/><circle cx="815" cy="30" r="0.6"/>
                <circle cx="945" cy="48" r="0.7"/><circle cx="1075" cy="40" r="0.5"/><circle cx="1205" cy="65" r="0.6"/>
              </g>
              {/* Sun */}
              <circle cx="700" cy="302" r="80" fill="url(#sunGlow)"/>
              <circle cx="700" cy="302" r="18" fill="none" stroke="#e8720a" strokeWidth="0.8" opacity="0.7"/>
              <circle cx="700" cy="302" r="5" fill="#e8720a" opacity="0.9"/>
              <rect width="1400" height="500" fill="url(#horizonGlow)"/>
              {/* Terrain */}
              <path d="M0,360 C80,345 160,352 240,338 C320,324 400,330 480,318 C560,306 640,315 720,305 C800,295 880,308 960,298 C1040,288 1120,296 1200,285 C1280,274 1360,282 1400,278 L1400,500 L0,500 Z" fill="none" stroke="#5bbfba" strokeWidth="0.6" opacity="0.18"/>
              <path d="M0,375 C60,358 140,365 220,348 C300,331 380,345 460,332 C540,319 620,328 700,315 C780,302 860,316 940,306 C1020,296 1100,308 1180,298 C1260,288 1340,300 1400,295 L1400,500 L0,500 Z" fill="#080e0a" stroke="#5bbfba" strokeWidth="0.8" opacity="0.4"/>
              <path d="M0,395 C50,375 110,382 180,362 C250,342 330,358 410,345 C470,335 530,342 600,330 C660,320 720,328 790,318 C860,308 940,322 1010,312 C1080,302 1150,315 1220,305 C1290,295 1350,308 1400,302 L1400,500 L0,500 Z" fill="#0d1208" stroke="#c8956c" strokeWidth="1.0" opacity="0.55"/>
              <path d="M0,420 C40,400 95,408 155,385 C215,362 285,378 355,365 C415,354 465,362 525,350 C575,340 625,348 685,338 C745,328 815,342 875,332 C935,322 995,336 1055,325 C1115,314 1175,330 1235,320 C1295,310 1350,322 1400,318 L1400,500 L0,500 Z" fill="#121008" stroke="#c8956c" strokeWidth="1.2" opacity="0.7"/>
              <path d="M0,455 C30,435 70,440 115,420 C160,400 215,415 265,402 C315,389 365,398 415,386 C455,376 495,384 540,373 C580,363 618,370 660,360 C700,350 740,358 780,348 C820,338 865,346 905,336 C945,326 990,335 1035,325 C1080,315 1125,324 1170,315 C1215,306 1260,315 1305,308 C1350,301 1380,310 1400,306 L1400,500 L0,500 Z" fill="#0f0d08" stroke="#c8956c" strokeWidth="1.5" opacity="0.85"/>
              {/* Ember seam */}
              <line x1="0" y1="305" x2="1400" y2="305" stroke="url(#emberSeam)" strokeWidth="0.8" opacity="0.5"/>
              {/* Figure */}
              <g transform="translate(980, 320)" opacity="0.95">
                <rect x="-1" y="-12" width="2" height="10" fill="#e8720a" opacity="0.95"/>
                <circle cx="0" cy="-14" r="2.2" fill="#e8720a" opacity="0.95"/>
                <line x1="0" y1="-8" x2="5" y2="-5" stroke="#e8720a" strokeWidth="1.2" opacity="0.9"/>
                <line x1="0" y1="-8" x2="-3" y2="-4" stroke="#e8720a" strokeWidth="1.2" opacity="0.9"/>
                <line x1="0" y1="-2" x2="-2" y2="4" stroke="#e8720a" strokeWidth="1.2" opacity="0.9"/>
                <line x1="0" y1="-2" x2="2" y2="4" stroke="#e8720a" strokeWidth="1.2" opacity="0.9"/>
                <circle cx="0" cy="-6" r="10" fill="#e8720a" opacity="0.06"/>
              </g>
              <rect width="1400" height="500" fill="url(#vignette)"/>
              <rect width="1400" height="500" fill="transparent" filter="url(#grain)" opacity="0.12"/>
            </g>
          </svg>
        </div>

        <div className="hero-gradient-overlay"></div>

        <div className="container hero-content">
          <div className="hero-split">
            <div className="hero-left">
              <span className="hero-label">For creative professionals</span>
              <h1>Clear the noise.<br/>Do the work that&nbsp;matters.</h1>
            </div>
            <div className="hero-right">
              <p><strong>Built for creative professionals navigating the AI shift.</strong> AI is commoditizing creative execution. The skills that got you hired &mdash; design, copy, production &mdash; are being automated. But the skills that make you irreplaceable &mdash; divergent thinking, emotional intelligence, taste &mdash; are buried under burnout and cognitive overload. PYC clears the path so you can think, act, and build again.</p>
              <div className="hero-cta-group">
                <a href="#pricing" className="btn-primary">Start Free &mdash; No Credit Card</a>
                <a href="#how-it-works" className="btn-secondary">See How It Works</a>
              </div>
              <p className="hero-subhead">Structured like Noom. Immersive like Headspace. Organized like Notion. With an AI coach that actually knows you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern Interrupt */}
      <section className="pattern-interrupt">
        <div className="container">
          <div className="interrupt-grid">
            <div className="interrupt-item">
              <div className="interrupt-label">Not a course.</div>
              <div className="interrupt-desc">A sprint system with real metrics and accountability.</div>
            </div>
            <div className="interrupt-item">
              <div className="interrupt-label">Not meditation.</div>
              <div className="interrupt-desc">Spatial audio that changes your state, then moves you to action.</div>
            </div>
            <div className="interrupt-item">
              <div className="interrupt-label">Not a blank page.</div>
              <div className="interrupt-desc">Your goal, your sprints, your daily priorities &mdash; surfaced automatically.</div>
            </div>
            <div className="interrupt-item">
              <div className="interrupt-label">Not a chatbot.</div>
              <div className="interrupt-desc">An AI coach that knows your fears, your wins, and your commitments.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="ember-divider"></div>

      {/* How It Works */}
      <section id="how-it-works">
        <div className="container">
          <div className="how-it-works-flow">
            <h3>How it works</h3>
            <p>Most tools give you a blank page. PYC gives you a system &mdash; structured sprints, AI guidance, and creative fuel designed for how your brain actually works.</p>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">Step 1</div>
                <div className="step-name">Excavate</div>
                <div className="step-desc">Creative Archaeology uncovers your creative identity in 5 minutes. Your profile becomes the foundation for everything.</div>
                <span className="step-free-tag">Free for everyone</span>
              </div>
              <div className="step-card">
                <div className="step-number">Step 2</div>
                <div className="step-name">Aim</div>
                <div className="step-desc">Choose your path: Pivot, Build, or Evolve. Set a North Star Goal with a metric that proves you&apos;re moving.</div>
                <span className="step-free-tag">Free for everyone</span>
              </div>
              <div className="step-card">
                <div className="step-number">Step 3</div>
                <div className="step-name">Execute</div>
                <div className="step-desc">9 sprints over 90 days. Immersive audio, daily tools, and an AI co-pilot that adapts to your story.</div>
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

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <div className="section-label">The Reality</div>
          <h2 className="section-title">Up at 3am questioning everything?</h2>
          <p className="section-subtitle">That&apos;s not random anxiety. You&apos;re feeling something real.</p>
          <div className="threat-stack">
            <div className="threat-card existential">
              <div className="threat-label">AI Threat</div>
              <div className="threat-title">Creative skills are being commoditized</div>
              <p>Skills that took years to develop are being automated in months. The &ldquo;safe&rdquo; creative career paths are becoming unsafe.</p>
            </div>
            <div className="threat-card external">
              <div className="threat-label">External Pressure</div>
              <div className="threat-title">Modern life is engineered against creative brains</div>
              <p>Distraction by design. Your nervous system is constantly triggered. You can&apos;t think your way out of a feeling problem.</p>
            </div>
            <div className="threat-card internal">
              <div className="threat-label">Internal Blockers</div>
              <div className="threat-title">The result: a crisis of action</div>
              <p>Fear disguised as &ldquo;being practical.&rdquo; Imposter syndrome. Disconnection from who you used to be. You know you need to move &mdash; something keeps you frozen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Paradox */}
      <section className="paradox-section">
        <div className="container">
          <div className="paradox-box">
            <div className="paradox-statement">
              Creatives are <span style={{color: 'var(--red)'}}>most threatened</span> by these forces.<br/>
              And <span style={{color: 'var(--teal)'}}>most equipped</span> to thrive.
            </div>
            <p className="paradox-sub">
              <strong style={{color: 'var(--text)'}}>Creative energy</strong> &mdash; divergent thinking, emotional intelligence, connecting unrelated ideas &mdash; these are the skills AI can&apos;t replace. Your unfair advantage is buried under fear and burnout. <strong style={{color: 'var(--copper)'}}>Until now.</strong>
            </p>
          </div>
          <a href="#pricing" className="btn-primary">Unlock Your Creative Energy &rarr;</a>
        </div>
      </section>

      <div className="ember-divider"></div>

      {/* 90-Day System */}
      <section>
        <div className="container">
          <div className="section-label">The System</div>
          <h2 className="section-title">Three phases. Nine sprints. Real results.</h2>
          <p className="section-subtitle">Each 10-day sprint builds specific skills, with tools you actually use and metrics you actually track.</p>
          <div className="phases-grid">
            <div className="phase-card">
              <div className="phase-number">Phase 1 &mdash; Days 1-30</div>
              <div className="phase-name">UNLOCK</div>
              <div className="phase-desc">Clear what&apos;s blocking you. Break the inaction cycle, build your commitment architecture.</div>
              <div className="phase-sprints">Sprints 1-3</div>
            </div>
            <div className="phase-card">
              <div className="phase-number">Phase 2 &mdash; Days 31-60</div>
              <div className="phase-name">STRENGTHEN</div>
              <div className="phase-desc">Build self-knowledge. Protect your focus, understand your energy, develop emotional resilience.</div>
              <div className="phase-sprints">Sprints 4-6</div>
            </div>
            <div className="phase-card">
              <div className="phase-number">Phase 3 &mdash; Days 61-90</div>
              <div className="phase-name">ACTIVATE</div>
              <div className="phase-desc">Deploy your edge. Sharpen creative problem-solving, build your human advantage, ship the work that matters.</div>
              <div className="phase-sprints">Sprints 7-9</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcases */}
      <section>
        <div className="container">
          <div className="section-label">Built for Creative Brains</div>
          <h2 className="section-title">Five things that make PYC different.</h2>
          <p className="section-subtitle">Not another productivity app. A system built for how creative professionals actually think, feel, and work.</p>

          <div className="feature-showcase">

            {/* Feature 1: Creative Archaeology */}
            <div className="feature-row">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="screen-header">Your Creative Profile</div>
                    <div className="screen-card copper-border" style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <p style={{fontSize: '0.8rem', color: 'var(--text)', marginBottom: '10px', fontWeight: 600}}>You&apos;re a dormant musician.</p>
                      <p style={{fontSize: '0.65rem', lineHeight: 1.7, marginBottom: 0, color: 'var(--warm-muted)'}}>
                        You stopped creating 5-10 years ago, when work took over.<br/><br/>
                        But creativity didn&apos;t leave you. You still solve problems in unusual ways.<br/><br/>
                        When you were making music, <span style={{color: 'var(--copper)'}}>time disappeared</span>.<br/><br/>
                        That feeling is still available to you.
                      </p>
                    </div>
                    <div className="screen-btn">This feels right</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Creative Archaeology</div>
                <h3>Remember who you were before work took over.</h3>
                <p>Before you set a goal, you reconnect with your creative identity. Creative Archaeology builds your personalized profile in 5 minutes &mdash; the emotional foundation that makes everything else personal.</p>
                <p className="feature-detail">Your creative profile powers the AI, the sprints, and the daily experience.</p>
              </div>
            </div>

            {/* Feature 2: Co-Pilot */}
            <div className="feature-row reverse">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="screen-header" style={{color: 'var(--teal)'}}>Co-Pilot</div>
                    <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center'}}>
                      <div style={{background: 'var(--warm-surface)', borderRadius: '4px 12px 12px 12px', padding: '10px', fontSize: '0.6rem', color: 'var(--teal)', alignSelf: 'flex-start', maxWidth: '85%'}}>
                        I noticed you&apos;ve been avoiding the networking outreach from Sprint 2. What&apos;s coming up when you think about it?
                      </div>
                      <div style={{background: 'var(--copper-dim)', border: '1px solid rgba(200,149,108,0.2)', borderRadius: '12px 4px 12px 12px', padding: '10px', fontSize: '0.6rem', color: 'var(--copper)', alignSelf: 'flex-end', maxWidth: '85%'}}>
                        Honestly? I&apos;m scared they&apos;ll think I&apos;m desperate.
                      </div>
                      <div style={{background: 'var(--warm-surface)', borderRadius: '4px 12px 12px 12px', padding: '10px', fontSize: '0.6rem', color: 'var(--warm-muted)', alignSelf: 'flex-start', maxWidth: '85%'}}>
                        That&apos;s fear talking &mdash; the &ldquo;perception&rdquo; disguise from Lesson 2. What&apos;s one person you could reach out to today?
                      </div>
                    </div>
                    <div style={{background: 'var(--surface-3)', borderRadius: '8px', padding: '10px', fontSize: '0.6rem', color: 'var(--text-dim)', marginTop: '12px'}}>Type your message...</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">AI Co-Pilot</div>
                <h3>A coach that actually knows your story.</h3>
                <p>The Co-Pilot knows your creative profile, your goals, your fears, your wins, and your patterns. It remembers what you committed to last week and whether you followed through. It coaches from 8 layers of personal context.</p>
                <p className="feature-detail">Like an executive coach in your pocket who never starts fresh.</p>
              </div>
            </div>

            {/* Feature 3: Sprint System */}
            <div className="feature-row">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="screen-header">Good morning, Steve</div>
                    <div className="screen-card" style={{marginBottom: '10px'}}>
                      <p style={{fontSize: '0.55rem', color: 'var(--text-dim)', marginBottom: '4px', fontFamily: "'Space Mono', monospace", letterSpacing: '1px'}}>SPRINT 1 &bull; DAY 3</p>
                      <p style={{fontSize: '0.7rem', color: 'var(--text)', marginBottom: '4px', fontWeight: 500}}>Break the Inaction Cycle</p>
                      <div className="progress-dots" style={{margin: '8px 0 0 0'}}>
                        <div className="dot complete"></div><div className="dot complete"></div><div className="dot active"></div>
                        <div className="dot"></div><div className="dot"></div><div className="dot"></div>
                        <div className="dot"></div><div className="dot"></div><div className="dot"></div><div className="dot"></div>
                      </div>
                    </div>
                    <div className="screen-card teal-border" style={{flex: 1}}>
                      <p style={{fontSize: '0.55rem', color: 'var(--text-dim)', marginBottom: '4px', fontFamily: "'Space Mono', monospace", letterSpacing: '1px'}}>TODAY&apos;S LESSON</p>
                      <p style={{fontSize: '0.7rem', color: 'var(--text)', marginBottom: '4px', fontWeight: 500}}>The Fear Disguises</p>
                      <p style={{fontSize: '0.55rem', color: 'var(--warm-muted)'}}>8 min &bull; Audio + Reflection</p>
                    </div>
                    <div className="screen-btn">Start Lesson &rarr;</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Immersive Sprint System</div>
                <h3>9 structured sprints. Not a blank page.</h3>
                <p>Each 10-day sprint is a themed container &mdash; cinematic audio coaching, practical tools, and guided reflection. Put on headphones. The audio changes your state. Then the tools move you to action. 10-20 minutes a day.</p>
                <p className="feature-detail">Five different day types so the screen never looks the same twice.</p>
              </div>
            </div>

            {/* Feature 4: Evidence System */}
            <div className="feature-row reverse">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="screen-header" style={{color: 'var(--copper)'}}>Log a Win</div>
                    <div className="screen-title" style={{marginBottom: '16px'}}>What happened?</div>
                    <div className="screen-card" style={{flex: 1, background: 'var(--surface-3)'}}>
                      <p style={{fontSize: '0.65rem', color: 'var(--text-dim)', fontStyle: 'italic'}}>I sent the scary email...</p>
                    </div>
                    <div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
                      <div style={{flex: 1, textAlign: 'center', padding: '10px', background: 'var(--warm-surface)', borderRadius: '8px', fontSize: '0.6rem'}}>
                        <span style={{fontSize: '1rem', display: 'block', marginBottom: '2px'}}>&#x1F331;</span>
                        <span style={{color: 'var(--text-dim)'}}>Small</span>
                      </div>
                      <div style={{flex: 1, textAlign: 'center', padding: '10px', background: 'var(--teal-dim)', border: '1px solid var(--teal)', borderRadius: '8px', fontSize: '0.6rem'}}>
                        <span style={{fontSize: '1rem', display: 'block', marginBottom: '2px'}}>&#x1F4AA;</span>
                        <span style={{color: 'var(--teal)'}}>Solid</span>
                      </div>
                      <div style={{flex: 1, textAlign: 'center', padding: '10px', background: 'var(--warm-surface)', borderRadius: '8px', fontSize: '0.6rem'}}>
                        <span style={{fontSize: '1rem', display: 'block', marginBottom: '2px'}}>&#x1F525;</span>
                        <span style={{color: 'var(--text-dim)'}}>Huge</span>
                      </div>
                    </div>
                    <div className="screen-btn">Log Win</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Evidence System</div>
                <h3>Track real metrics. Build undeniable proof.</h3>
                <p>Log wins. Track your North Star metric &mdash; applications sent, revenue earned, pages written, projects shipped. When imposter syndrome hits, open your Evidence Wall and let the data talk.</p>
                <p className="feature-detail">Real metrics, not vibes.</p>
              </div>
            </div>

            {/* Feature 5: Morning Spark + SOS */}
            <div className="feature-row">
              <div className="feature-visual">
                <div style={{maxWidth: '250px', margin: '0 auto'}}>
                  <div style={{background: 'var(--surface)', borderRadius: '24px', padding: '32px 24px', border: '1px solid var(--warm-border)', textAlign: 'center'}}>
                    <p style={{fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: 'var(--ember)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px'}}>Morning Spark &mdash; Day 14</p>
                    <p style={{fontFamily: "'DM Serif Display', serif", fontSize: '1rem', color: 'var(--text)', lineHeight: 1.5, marginBottom: '24px', fontStyle: 'italic'}}>&ldquo;Write a six-word story about your day so far.&rdquo;</p>
                    <div style={{width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--warm-border), transparent)', marginBottom: '24px'}}></div>
                    <p style={{fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px'}}>SOS Button</p>
                    <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '16px'}}>Overwhelmed? One tap.</p>
                    <div style={{background: 'var(--red-dim)', border: '1px solid rgba(232,93,93,0.3)', borderRadius: '10px', padding: '12px', fontSize: '0.8rem', color: 'var(--red)', fontWeight: 500}}>90-Second Reset</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Morning Spark + SOS Button</div>
                <h3>Creative joy before productivity. Calm when you need it.</h3>
                <p><strong style={{color: 'var(--text)'}}>Morning Spark:</strong> 2 minutes to reconnect with creativity for fun. Daily prompts tied to your craft &mdash; remember, notice, play.</p>
                <p><strong style={{color: 'var(--text)'}}>SOS Button:</strong> Overwhelmed? One tap for a 90-second guided breathwork reset. Then back to work.</p>
                <p className="feature-detail">The daily rhythm that keeps you connected and grounded.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="ember-divider"></div>

      {/* Paths */}
      <section>
        <div className="container">
          <div className="section-label">Your Direction</div>
          <h2 className="section-title">Pick a direction. Set a goal. Execute.</h2>
          <p className="section-subtitle">You choose a path, set a North Star Goal with real metrics, and your AI co-pilot helps you execute through 9 structured sprints.</p>
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

      {/* Pricing */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-label">Investment</div>
          <h2 className="section-title">Start free. Go all-in when you&apos;re ready.</h2>
          <p className="section-subtitle" style={{marginLeft: 'auto', marginRight: 'auto'}}>Creative Archaeology is free &mdash; discover who you are before you invest.</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-label">Free &mdash; Forever</div>
              <div className="pricing-amount">$0</div>
              <div className="pricing-term">No credit card required</div>
              <ul className="pricing-features">
                <li>Creative Archaeology onboarding</li>
                <li>Your creative profile &amp; identity map</li>
                <li>Path selection (Pivot, Build, Evolve)</li>
                <li>North Star Goal setting</li>
                <li>Daily Morning Spark prompts</li>
                <li>SOS Button</li>
              </ul>
              <a href="#" className="pricing-btn-secondary">Start Free &rarr;</a>
            </div>
            <div className="pricing-card">
              <div className="pricing-label">Per Sprint</div>
              <div className="pricing-amount">$29</div>
              <div className="pricing-term">Per 10-day sprint</div>
              <ul className="pricing-features">
                <li className="includes-tag">Everything in Free, plus:</li>
                <li>One 10-day structured sprint</li>
                <li>Immersive spatial audio lessons</li>
                <li>Sprint tools and daily actions</li>
                <li>AI Co-Pilot access</li>
                <li>Evidence Wall and win logging</li>
                <li>Progress tracking</li>
              </ul>
              <a href="#" className="pricing-btn-secondary">Unlock Sprint 1 &rarr;</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-label">Full Access &mdash; All 3 Sprints</div>
              <div className="pricing-amount">$69</div>
              <div className="pricing-term">One-time payment</div>
              <div className="pricing-savings">Save $18 vs. buying individually</div>
              <ul className="pricing-features">
                <li className="includes-tag">Everything in Per Sprint, for all 3 sprints:</li>
                <li>All 3 structured sprints (30 days)</li>
                <li>Immersive spatial audio lessons</li>
                <li>All sprint tools and daily actions</li>
                <li>Full AI Co-Pilot access</li>
                <li>Complete Evidence Wall</li>
                <li>Full progress tracking</li>
              </ul>
              <a href="#" className="pricing-btn-primary">Get Full Access</a>
              <p className="pricing-guarantee">30-day money-back guarantee. No questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <div className="section-label">Questions</div>
          <h2 className="section-title">Before you decide.</h2>
          <div className="faq-grid">
            <FaqItem
              question="What exactly is the free version?"
              answer="Creative Archaeology — a 5-minute deep dive into your creative identity. You'll get your creative profile, choose your path (Pivot, Build, or Evolve), and set your North Star Goal. Plus daily Morning Spark prompts and access to the SOS Button. It's the foundation. When you're ready to execute with sprints, tools, and AI guidance, you upgrade."
            />
            <FaqItem
              question="Is this only for creative careers?"
              answer="No. The three paths — Pivot, Build, and Evolve — work for any meaningful goal. Write a book. Break a pattern. Launch a side project. Level up a skill. The system is designed for creative minds, but your goal doesn't have to be a career move."
            />
            <FaqItem
              question="How much time does this take each day?"
              answer="Most days require 10-20 minutes. Some days less, some days more if you're doing deeper work. This is designed for busy professionals — not another thing to feel guilty about skipping."
            />
            <FaqItem
              question="What if I miss days?"
              answer="The system is self-paced. Life happens. Progress, not perfection."
            />
            <FaqItem
              question="Is this just another meditation/wellness app?"
              answer="No. This is a system with tools, frameworks, and accountability architecture. There's mindfulness where it's useful (like the SOS button), but the focus is action and results — not relaxation."
            />
            <FaqItem
              question="What makes this different from other coaching programs?"
              answer="PYC isn't coaching — it's a system. Three things set it apart: (1) Creative Archaeology builds an emotional foundation no other tool offers. (2) The AI Co-Pilot remembers your journey and adapts its guidance. (3) You're not consuming content — you're running structured sprints toward a specific, measurable goal."
            />
            <FaqItem
              question="What's the refund policy?"
              answer="30-day money-back guarantee, no questions asked. If you do the work for 30 days and don't feel a shift, email us and we'll refund you."
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="final-cta">
        <div className="final-cta-landscape">
          <svg viewBox="0 0 1400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="footerSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="transparent"/>
                <stop offset="100%" stopColor="#160d08"/>
              </linearGradient>
              <radialGradient id="footerGlow" cx="50%" cy="80%" r="60%">
                <stop offset="0%" stopColor="#c8956c" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
            </defs>
            <rect width="1400" height="300" fill="url(#footerSky)"/>
            <rect width="1400" height="300" fill="url(#footerGlow)"/>
            <path d="M0,180 C100,165 200,170 300,155 C400,140 500,150 600,138 C700,126 800,135 900,125 C1000,115 1100,128 1200,118 C1300,108 1380,118 1400,115 L1400,300 L0,300 Z" fill="#0d1208" stroke="#c8956c" strokeWidth="0.8" opacity="0.4"/>
            <path d="M0,220 C80,200 160,208 240,192 C320,176 400,188 480,175 C560,162 640,172 720,160 C800,148 880,160 960,150 C1040,140 1120,152 1200,142 C1280,132 1360,145 1400,140 L1400,300 L0,300 Z" fill="#0f0d08" stroke="#c8956c" strokeWidth="1.2" opacity="0.6"/>
          </svg>
        </div>
        <div className="container">
          <h2 className="section-title" style={{maxWidth: '700px', margin: '0 auto 16px'}}>
            You buried it under years of<br/>&ldquo;being practical.&rdquo;
          </h2>
          <p className="section-subtitle" style={{margin: '0 auto 32px', textAlign: 'center'}}>
            <span style={{color: 'var(--copper)'}}>It&apos;s still there.</span>
          </p>
          <a href="#pricing" className="btn-primary">Start Free &rarr;</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <a href="#" className="logo">
            <svg className="logo-compass" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <polygon points="250,250 234,250 250,72 266,250" fill="#c8956c" opacity="0.9"/>
              <polygon points="250,250 266,250 250,428 234,250" fill="#7a5a40" opacity="0.5"/>
              <polygon points="250,250 262,138 274,250" fill="#5bbfba" opacity="0.6"/>
              <polygon points="250,250 362,262 250,274" fill="#5bbfba" opacity="0.6"/>
              <polygon points="250,250 238,362 226,250" fill="#5bbfba" opacity="0.6"/>
              <polygon points="250,250 138,238 250,226" fill="#5bbfba" opacity="0.6"/>
              <circle cx="250" cy="250" r="20" fill="#0a0a0a" stroke="#c8956c" strokeWidth="3"/>
              <circle cx="250" cy="250" r="7" fill="#c8956c"/>
            </svg>
            <span className="logo-text">Pioneer <span>Your Creative</span></span>
          </a>
          <p>&copy; 2026 Pioneer Your Creative. All rights reserved.</p>
          <p style={{marginTop: '8px'}}>
            <a href="#" style={{color: 'var(--text-dim)', textDecoration: 'none'}}>Privacy</a> &middot;{' '}
            <a href="#" style={{color: 'var(--text-dim)', textDecoration: 'none'}}>Terms</a> &middot;{' '}
            <a href="#" style={{color: 'var(--text-dim)', textDecoration: 'none'}}>Contact</a>
          </p>
        </div>
      </footer>
    </>
  )
}
