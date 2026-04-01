import './landing.css'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="container">
          <a href="#" className="logo">PIONEER <span>YOUR CREATIVE</span></a>
          <a href="#pricing" className="nav-cta">Start Free</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Pioneer a path<br/>
                <span className="hero-accent">AI can&apos;t replace.</span>
              </h1>
            </div>
            <div className="hero-right">
              <p className="hero-descriptor">
                <strong>An app for creative professionals navigating the AI shift</strong> &mdash; whether you&apos;re building a business, pivoting careers, or evolving where you are.
              </p>
              <p className="hero-feature-line">Put on headphones. Go through immersive audio sessions that change your state.</p>
              <p className="hero-feature-line">Meet an AI coach that actually learns about you and tells you what to do next.</p>
              <p className="hero-closer">Nobody else does this.</p>
              <div className="hero-cta-group">
                <a href="#pricing" className="btn-primary">Start Free &mdash; No Credit Card</a>
                <a href="#how-it-works" className="btn-secondary">See How It Works</a>
              </div>
            </div>
            <div className="hero-landscape-section">
              <div className="hero-landscape-wrap">
                <svg viewBox="0 0 1400 500" xmlns="http://www.w3.org/2000/svg" width="100%" style={{display: 'block'}}>
                  <defs>
                    <filter id="grain" x="-20%" y="-20%" width="140%" height="140%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves={4} seed="2" result="noise"/>
                      <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
                      <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blended"/>
                      <feComponentTransfer in="blended"><feFuncA type="linear" slope="1"/></feComponentTransfer>
                    </filter>
                    <filter id="heavyGrain">
                      <feTurbulence type="fractalNoise" baseFrequency="0.88" numOctaves={4} seed="7"/>
                      <feColorMatrix type="saturate" values="0"/>
                      <feBlend in="SourceGraphic" mode="overlay"/>
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
                    <g fill="#5bbfba" opacity="0.35">
                      <circle cx="120" cy="40" r="0.8"/><circle cx="245" cy="28" r="0.6"/><circle cx="380" cy="55" r="0.9"/><circle cx="510" cy="22" r="0.7"/>
                      <circle cx="640" cy="45" r="0.6"/><circle cx="790" cy="18" r="0.8"/><circle cx="920" cy="38" r="0.7"/><circle cx="1050" cy="25" r="0.9"/>
                      <circle cx="1180" cy="50" r="0.6"/><circle cx="1320" cy="32" r="0.8"/><circle cx="68" cy="80" r="0.5"/><circle cx="185" cy="95" r="0.6"/>
                      <circle cx="330" cy="70" r="0.5"/><circle cx="455" cy="88" r="0.7"/><circle cx="595" cy="65" r="0.5"/><circle cx="730" cy="78" r="0.6"/>
                      <circle cx="860" cy="60" r="0.5"/><circle cx="990" cy="85" r="0.7"/><circle cx="1120" cy="72" r="0.5"/><circle cx="1260" cy="88" r="0.6"/>
                    </g>
                    <g fill="#c8956c" opacity="0.2">
                      <circle cx="158" cy="62" r="0.7"/><circle cx="290" cy="42" r="0.5"/><circle cx="420" cy="75" r="0.6"/><circle cx="555" cy="35" r="0.7"/>
                      <circle cx="685" cy="58" r="0.5"/><circle cx="815" cy="30" r="0.6"/><circle cx="945" cy="48" r="0.7"/><circle cx="1075" cy="40" r="0.5"/>
                      <circle cx="1205" cy="65" r="0.6"/><circle cx="1350" cy="44" r="0.7"/>
                    </g>
                    <circle cx="700" cy="302" r="80" fill="url(#sunGlow)"/>
                    <circle cx="700" cy="302" r="18" fill="none" stroke="#e8720a" strokeWidth="0.8" opacity="0.7"/>
                    <circle cx="700" cy="302" r="10" fill="none" stroke="#e8720a" strokeWidth="0.6" opacity="0.9"/>
                    <circle cx="700" cy="302" r="5" fill="#e8720a" opacity="0.9"/>
                    <line x1="700" y1="285" x2="700" y2="275" stroke="#e8720a" strokeWidth="0.6" opacity="0.6"/>
                    <line x1="700" y1="319" x2="700" y2="329" stroke="#e8720a" strokeWidth="0.6" opacity="0.4"/>
                    <line x1="683" y1="302" x2="673" y2="302" stroke="#e8720a" strokeWidth="0.6" opacity="0.4"/>
                    <line x1="717" y1="302" x2="727" y2="302" stroke="#e8720a" strokeWidth="0.6" opacity="0.4"/>
                    <rect width="1400" height="500" fill="url(#horizonGlow)"/>
                    <path d="M0,360 C80,345 160,352 240,338 C320,324 400,330 480,318 C560,306 640,315 720,305 C800,295 880,308 960,298 C1040,288 1120,296 1200,285 C1280,274 1360,282 1400,278 L1400,500 L0,500 Z" fill="none" stroke="#5bbfba" strokeWidth="0.6" opacity="0.18"/>
                    <path d="M0,375 C60,358 140,365 220,348 C300,331 380,345 460,332 C540,319 620,328 700,315 C780,302 860,316 940,306 C1020,296 1100,308 1180,298 C1260,288 1340,300 1400,295 L1400,500 L0,500 Z" fill="#0a1510" stroke="#5bbfba" strokeWidth="0.8" opacity="0.4"/>
                    <path d="M0,375 C60,358 140,365 220,348 C300,331 380,345 460,332 C540,319 620,328 700,315 C780,302 860,316 940,306 C1020,296 1100,308 1180,298 C1260,288 1340,300 1400,295 L1400,500 L0,500 Z" fill="#080e0a" opacity="0.6"/>
                    <path d="M0,395 C50,375 110,382 180,362 C250,342 330,358 410,345 C470,335 530,342 600,330 C660,320 720,328 790,318 C860,308 940,322 1010,312 C1080,302 1150,315 1220,305 C1290,295 1350,308 1400,302 L1400,500 L0,500 Z" fill="#0d1208" stroke="#c8956c" strokeWidth="1.0" opacity="0.55"/>
                    <path d="M460,345 C475,330 495,325 510,335" fill="none" stroke="#c8956c" strokeWidth="0.5" opacity="0.4"/>
                    <path d="M600,330 C618,315 638,312 655,322" fill="none" stroke="#c8956c" strokeWidth="0.5" opacity="0.4"/>
                    <path d="M820,318 C840,305 862,302 880,310" fill="none" stroke="#c8956c" strokeWidth="0.5" opacity="0.35"/>
                    <path d="M0,420 C40,400 95,408 155,385 C215,362 285,378 355,365 C415,354 465,362 525,350 C575,340 625,348 685,338 C745,328 815,342 875,332 C935,322 995,336 1055,325 C1115,314 1175,330 1235,320 C1295,310 1350,322 1400,318 L1400,500 L0,500 Z" fill="#121008" stroke="#c8956c" strokeWidth="1.2" opacity="0.7"/>
                    <path d="M155,385 L170,368 L188,368 L200,385" fill="none" stroke="#c8956c" strokeWidth="0.7" opacity="0.5"/>
                    <path d="M355,365 L372,348 L392,345 L408,365" fill="none" stroke="#c8956c" strokeWidth="0.7" opacity="0.5"/>
                    <path d="M875,332 L892,314 L914,312 L928,332" fill="none" stroke="#c8956c" strokeWidth="0.7" opacity="0.5"/>
                    <path d="M1235,320 L1252,302 L1270,300 L1284,320" fill="none" stroke="#c8956c" strokeWidth="0.7" opacity="0.45"/>
                    <path d="M0,455 C30,435 70,440 115,420 C160,400 215,415 265,402 C315,389 365,398 415,386 C455,376 495,384 540,373 C580,363 618,370 660,360 C700,350 740,358 780,348 C820,338 865,346 905,336 C945,326 990,335 1035,325 C1080,315 1125,324 1170,315 C1215,306 1260,315 1305,308 C1350,301 1380,310 1400,306 L1400,500 L0,500 Z" fill="#0f0d08" stroke="#c8956c" strokeWidth="1.5" opacity="0.85"/>
                    <path d="M265,402 C280,388 298,384 312,392" fill="none" stroke="#c8956c" strokeWidth="0.9" opacity="0.45"/>
                    <path d="M540,373 C556,358 576,354 590,363" fill="none" stroke="#c8956c" strokeWidth="0.9" opacity="0.45"/>
                    <path d="M780,348 C798,333 820,330 835,340" fill="none" stroke="#c8956c" strokeWidth="0.9" opacity="0.45"/>
                    <path d="M1170,315 C1185,300 1205,297 1218,306" fill="none" stroke="#c8956c" strokeWidth="0.9" opacity="0.4"/>
                    <line x1="0" y1="305" x2="1400" y2="305" stroke="url(#emberSeam)" strokeWidth="0.8" opacity="0.5"/>
                    <path d="M0,455 C30,435 70,440 115,420 C160,400 215,415 265,402 C315,389 365,398 415,386 C455,376 495,384 540,373 C580,363 618,370 660,360 C700,350 740,358 780,348 C820,338 865,346 905,336" fill="none" stroke="#5bbfba" strokeWidth="0.5" opacity="0.15"/>
                    <path d="M905,336 C945,326 990,335 1035,325 C1080,315 1125,324 1170,315 C1215,306 1260,315 1305,308 C1350,301 1380,310 1400,306" fill="none" stroke="#5bbfba" strokeWidth="0.5" opacity="0.12"/>
                    <g transform="translate(980, 320)" opacity="0.95">
                      <rect x="-1" y="-12" width="2" height="10" fill="#e8720a" opacity="0.95"/>
                      <circle cx="0" cy="-14" r="2.2" fill="#e8720a" opacity="0.95"/>
                      <line x1="0" y1="-8" x2="5" y2="-5" stroke="#e8720a" strokeWidth="1.2" opacity="0.9"/>
                      <line x1="0" y1="-8" x2="-3" y2="-4" stroke="#e8720a" strokeWidth="1.2" opacity="0.9"/>
                      <line x1="0" y1="-2" x2="-2" y2="4" stroke="#e8720a" strokeWidth="1.2" opacity="0.9"/>
                      <line x1="0" y1="-2" x2="2" y2="4" stroke="#e8720a" strokeWidth="1.2" opacity="0.9"/>
                      <circle cx="0" cy="-6" r="10" fill="#e8720a" opacity="0.06"/>
                    </g>
                    <rect x="0" y="460" width="1400" height="40" fill="#080806" opacity="0.6"/>
                    <rect width="1400" height="500" fill="url(#vignette)"/>
                    <rect width="1400" height="500" fill="transparent" filter="url(#grain)" opacity="0.12"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section style={{padding: '0 0 60px'}}>
        <div className="container">
          <div className="diff-callouts">
            <div className="diff-callout">
              <div className="diff-callout-label"><strong>Not a course</strong></div>
              <div className="diff-callout-desc">A quarterly execution system with sprints, metrics, and real accountability</div>
            </div>
            <div className="diff-callout">
              <div className="diff-callout-label"><strong>Not meditation</strong></div>
              <div className="diff-callout-desc">Immersive audio designed to change your state &mdash; then move you to action</div>
            </div>
            <div className="diff-callout">
              <div className="diff-callout-label"><strong>Not journaling</strong></div>
              <div className="diff-callout-desc">Track the metric that matters: revenue, applications, pages written, projects shipped</div>
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
              <div className="threat-label">Existential Threat</div>
              <div className="threat-title">AI is coming for creative jobs</div>
              <p>Skills that took years to develop are being commoditized in months. The &ldquo;safe&rdquo; creative career paths are becoming unsafe. Half your job functions may already be automated.</p>
            </div>
            <div className="threat-card external">
              <div className="threat-label">External Pressure</div>
              <div className="threat-title">Modern life is engineered against you</div>
              <p>Distraction by design &mdash; and creative brains are more susceptible. Your nervous system is constantly triggered. You can&apos;t think your way out of a feeling problem.</p>
            </div>
            <div className="threat-card internal">
              <div className="threat-label">Internal Blockers</div>
              <div className="threat-title">The result: a crisis of action</div>
              <p>Fear disguised as &ldquo;being practical.&rdquo; Imposter syndrome. Disconnection from who you used to be. You know you need to move &mdash; but something keeps you frozen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compass Divider */}
      <div className="compass-divider">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
          <defs>
            <linearGradient id="northGradMini" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8720a"/>
              <stop offset="70%" stopColor="#c8956c"/>
              <stop offset="100%" stopColor="#a07050"/>
            </linearGradient>
          </defs>
          <circle cx="250" cy="250" r="210" fill="none" stroke="#c8956c" strokeWidth="1.5" opacity="0.2"/>
          <polygon points="250,250 234,250 250,72 266,250" fill="url(#northGradMini)" opacity="0.9"/>
          <polygon points="250,250 266,250 250,428 234,250" fill="#a07050" opacity="0.5"/>
          <polygon points="250,250 250,266 428,250 250,234" fill="#b08060" opacity="0.5"/>
          <polygon points="250,250 250,234 72,250 250,266" fill="#b08060" opacity="0.5"/>
          <polygon points="250,250 262,138 274,250" fill="#5bbfba" opacity="0.5"/>
          <polygon points="250,250 362,262 250,274" fill="#5bbfba" opacity="0.5"/>
          <polygon points="250,250 238,362 226,250" fill="#5bbfba" opacity="0.5"/>
          <polygon points="250,250 138,238 250,226" fill="#5bbfba" opacity="0.5"/>
          <circle cx="250" cy="250" r="14" fill="#151515" stroke="#c8956c" strokeWidth="2" opacity="0.8"/>
          <circle cx="250" cy="250" r="4" fill="#c8956c" opacity="0.9"/>
          <text x="250" y="28" fontFamily="Space Mono, monospace" fontSize="18" fontWeight="700" fill="#e8720a" textAnchor="middle" opacity="0.9">N</text>
        </svg>
      </div>

      {/* Paradox */}
      <section className="paradox-section">
        <div className="container">
          <div className="paradox-box">
            <div className="paradox-statement">
              Creatives are <span className="ember">most threatened</span> by these forces.<br/>
              And <span className="teal">most equipped</span> to thrive.
            </div>
            <p className="paradox-sub">
              <strong>Creative Energy</strong> &mdash; divergent thinking, emotional intelligence, connecting unrelated ideas &mdash; these are the skills AI can&apos;t replace. Your unfair advantage. Buried under fear and burnout. <strong className="copper">Until now.</strong>
            </p>
          </div>
          <a href="#pricing" className="btn-primary">Unlock Your Creative Energy</a>
        </div>
      </section>

      {/* Solution / 90-Day System */}
      <section className="solution-section" id="how-it-works">
        <div className="container">
          <div className="section-label">The 90-Day Execution System</div>
          <h2 className="section-title">Three phases. Nine sprints. Real results.</h2>
          <p className="section-subtitle">
            Not content to consume &mdash; a sprint-based execution system.
            Each 10-day sprint builds specific skills, with tools you actually use and metrics you actually track.
          </p>

          <div className="phases-grid">
            <div className="phase-card">
              <div className="phase-number">Phase 1 &mdash; Days 1-30</div>
              <div className="phase-name">UNLOCK</div>
              <div className="phase-desc">Clear what&apos;s blocking you. Face the fear, break the inaction cycle, build your commitment architecture.</div>
              <div className="phase-sprints">Sprints 1-3</div>
            </div>
            <div className="phase-card">
              <div className="phase-number">Phase 2 &mdash; Days 31-60</div>
              <div className="phase-name">STRENGTHEN</div>
              <div className="phase-desc">Build self-knowledge. Protect your focus, understand your energy rhythms, develop emotional resilience for the hard moments ahead.</div>
              <div className="phase-sprints">Sprints 4-6</div>
            </div>
            <div className="phase-card">
              <div className="phase-number">Phase 3 &mdash; Days 61-90</div>
              <div className="phase-name">ACTIVATE</div>
              <div className="phase-desc">Deploy your edge. Sharpen creative problem-solving, build your human advantage over AI, and finish what you start. Ship the work that matters.</div>
              <div className="phase-sprints">Sprints 7-9</div>
            </div>
          </div>

          <div className="how-it-works-flow">
            <h3>Your quarter. Your goal. A system that gets you there.</h3>
            <p>Most goal tools give you a blank page. PYC gives you a container &mdash; structured sprints, AI guidance, and creative fuel designed for how your brain actually works.</p>
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

      {/* Features */}
      <section>
        <div className="container">
          <div className="section-label">What&apos;s Inside</div>
          <h2 className="section-title">Built for creative brains. Not productivity generics.</h2>
          <p className="section-subtitle">Every feature exists because creative professionals need it &mdash; tested on real people navigating real transitions.</p>

          <div className="feature-showcase">

            {/* Feature 1: Creative Archaeology */}
            <div className="feature-row">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="screen-header">Your Creative Profile</div>
                    <div className="screen-card copper-border" style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <p style={{fontSize: '0.8rem', color: 'var(--text)', marginBottom: '10px', fontWeight: 600}}>You&apos;re a dormant musician.</p>
                      <p style={{fontSize: '0.65rem', lineHeight: 1.6, marginBottom: 0}}>
                        You stopped creating 5-10 years ago, when work took over.<br/><br/>
                        But creativity didn&apos;t leave you. You still solve problems in unusual ways.<br/><br/>
                        When you were making music, <span className="copper">time disappeared</span>.<br/><br/>
                        That feeling is still available to you.
                      </p>
                    </div>
                    <div className="screen-btn">This feels right</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Creative Archaeology</div>
                <h3>Remember who you were before you got &ldquo;practical.&rdquo;</h3>
                <p>A 5-minute deep dive into your creative identity. Not a quiz &mdash; an excavation. The app learns your creative past, your relationship with creativity now, and builds a personalized profile that shapes everything that follows.</p>
                <p className="feature-detail">Free for everyone. Because knowing who you are should never cost anything.</p>
              </div>
            </div>

            {/* Feature 2: AI Co-Pilot */}
            <div className="feature-row reverse">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="screen-header" style={{color: 'var(--teal)'}}>Co-Pilot</div>
                    <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '8px'}}>
                      <div style={{background: 'var(--surface)', borderRadius: '12px 12px 12px 4px', padding: '10px', fontSize: '0.6rem', color: 'var(--text-secondary)', alignSelf: 'flex-start', maxWidth: '85%'}}>
                        I noticed you&apos;ve been avoiding the networking outreach from Sprint 2. What&apos;s coming up when you think about it?
                      </div>
                      <div style={{background: 'rgba(91, 191, 186, 0.15)', borderRadius: '12px 12px 4px 12px', padding: '10px', fontSize: '0.6rem', color: 'var(--text)', alignSelf: 'flex-end', maxWidth: '85%'}}>
                        Honestly? I&apos;m scared they&apos;ll think I&apos;m desperate.
                      </div>
                      <div style={{background: 'var(--surface)', borderRadius: '12px 12px 12px 4px', padding: '10px', fontSize: '0.6rem', color: 'var(--text-secondary)', alignSelf: 'flex-start', maxWidth: '85%'}}>
                        That&apos;s fear talking &mdash; the &ldquo;perception&rdquo; disguise from Lesson 2. Remember: people want to help. What&apos;s one person you could reach out to today?
                      </div>
                    </div>
                    <div style={{background: 'var(--surface-elevated)', borderRadius: '8px', padding: '10px', fontSize: '0.6rem', color: 'var(--text-dim)', marginTop: '12px'}}>Type your message...</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">AI Co-Pilot with Memory</div>
                <h3>A guide that actually knows your story.</h3>
                <p>Not a chatbot. The Co-Pilot remembers your fears, your wins, your patterns. It knows what you committed to last week and whether you followed through. It calls you out when you&apos;re hiding.</p>
                <p className="feature-detail">Personalized guidance that gets your specific situation &mdash; because it&apos;s been paying attention since day one.</p>
              </div>
            </div>

            {/* Feature 3: Sprint System */}
            <div className="feature-row">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="screen-header">Good morning</div>
                    <div className="screen-card" style={{marginBottom: '10px'}}>
                      <p style={{fontSize: '0.6rem', color: 'var(--text-dim)', marginBottom: '4px'}}>SPRINT 1 &bull; DAY 3</p>
                      <p style={{fontSize: '0.7rem', color: 'var(--text)', marginBottom: '4px', fontWeight: 500}}>Break the Inaction Cycle</p>
                      <div className="progress-dots" style={{margin: '8px 0 0 0'}}>
                        <div className="dot complete"></div>
                        <div className="dot complete"></div>
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                    </div>
                    <div className="screen-card teal-border" style={{flex: 1}}>
                      <p style={{fontSize: '0.6rem', color: 'var(--text-dim)', marginBottom: '4px'}}>TODAY&apos;S LESSON</p>
                      <p style={{fontSize: '0.7rem', color: 'var(--text)', marginBottom: '4px', fontWeight: 500}}>The Fear Disguises</p>
                      <p style={{fontSize: '0.55rem', color: 'var(--text-secondary)'}}>8 min &bull; Audio + Reflection</p>
                    </div>
                    <div className="screen-btn">Start Lesson</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Immersive Sprint System</div>
                <h3>9 structured sprints. Not a blank page.</h3>
                <p>Each 10-day sprint is a themed container &mdash; cinematic audio narratives, practical tools, and guided reflection. Designed to change your state first, then move you to action.</p>
                <p className="feature-detail">10-20 minutes a day. Built for busy professionals, not monks with empty calendars.</p>
              </div>
            </div>

            {/* Feature 4: Evidence System */}
            <div className="feature-row reverse">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="screen-header" style={{color: 'var(--copper)'}}>Log a Win</div>
                    <div className="screen-title" style={{marginBottom: '16px'}}>What happened?</div>
                    <div className="screen-card" style={{flex: 1, background: 'var(--surface-elevated)'}}>
                      <p style={{fontSize: '0.65rem', color: 'var(--text-dim)', fontStyle: 'italic'}}>I sent the scary email...</p>
                    </div>
                    <div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
                      <div style={{flex: 1, textAlign: 'center', padding: '10px', background: 'var(--surface)', borderRadius: '8px', fontSize: '0.6rem'}}>
                        <span style={{fontFamily: "'Space Mono', monospace", fontSize: '0.8rem', display: 'block', color: 'var(--copper)'}}>&#x25CB;</span>
                        <span style={{color: 'var(--text-dim)'}}>Small</span>
                      </div>
                      <div style={{flex: 1, textAlign: 'center', padding: '10px', background: 'rgba(91, 191, 186, 0.12)', border: '1px solid var(--teal)', borderRadius: '8px', fontSize: '0.6rem'}}>
                        <span style={{fontFamily: "'Space Mono', monospace", fontSize: '0.8rem', display: 'block', color: 'var(--teal)'}}>&#x25C6;</span>
                        <span style={{color: 'var(--teal)'}}>Solid</span>
                      </div>
                      <div style={{flex: 1, textAlign: 'center', padding: '10px', background: 'var(--surface)', borderRadius: '8px', fontSize: '0.6rem'}}>
                        <span style={{fontFamily: "'Space Mono', monospace", fontSize: '0.8rem', display: 'block', color: 'var(--copper)'}}>&#x2726;</span>
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
                <p>Log wins. Track your North Star metric &mdash; applications sent, revenue earned, pages written, projects shipped. When imposter syndrome hits, open your evidence and let the data talk.</p>
                <p className="feature-detail">Commitment Lock keeps you accountable. The Evidence System proves it&apos;s working.</p>
              </div>
            </div>

            {/* Feature 5: Morning Spark + SOS */}
            <div className="feature-row">
              <div className="feature-visual">
                <div style={{maxWidth: '240px', margin: '0 auto'}}>
                  <div style={{background: 'var(--bg)', borderRadius: '24px', padding: '32px 24px', border: '1px solid var(--warm-border)', textAlign: 'center'}}>
                    <p style={{fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px'}}>Morning Spark &mdash; Day 14</p>
                    <p style={{fontFamily: "'DM Serif Display', serif", fontSize: '1rem', color: 'var(--text)', lineHeight: 1.5, marginBottom: '24px', fontStyle: 'italic'}}>&ldquo;Write a six-word story about your day so far.&rdquo;</p>
                    <div style={{width: '100%', height: '1px', background: 'var(--warm-border)', marginBottom: '24px'}}></div>
                    <p style={{fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: 'var(--error)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>SOS Button</p>
                    <p style={{fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '16px'}}>Overwhelmed? One tap.</p>
                    <div style={{background: 'rgba(166, 93, 87, 0.12)', border: '1px solid var(--error)', borderRadius: '10px', padding: '12px', fontSize: '0.8rem', color: 'var(--error)', fontWeight: 600}}>90-Second Reset</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Morning Spark + SOS Button</div>
                <h3>Creative joy before productivity. Calm when you need it.</h3>
                <p><strong>Morning Spark:</strong> 2 minutes to reconnect with creativity for fun. Daily prompts tied to your craft &mdash; remember, notice, play. The joy comes back before the work begins.</p>
                <p><strong>SOS Button:</strong> Overwhelmed? Anxious? One tap for guided breathwork and nervous system reset. 90 seconds to calm. Then back to work.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Paths */}
      <section className="paths-section">
        <div className="container">
          <div className="section-label">Your Direction</div>
          <h2 className="section-title">Pick a direction. Set a goal. Execute for 90 days.</h2>
          <p className="section-subtitle">
            You choose a path, set a North Star Goal with real metrics,
            and your AI co-pilot helps you execute through 9 structured sprints. Your creative energy needs a target &mdash; this gives it one.
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

      {/* Pricing */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-label">Investment</div>
          <h2 className="section-title">Start free. Go all-in when you&apos;re ready.</h2>
          <p className="section-subtitle" style={{marginLeft: 'auto', marginRight: 'auto'}}>
            Creative Archaeology is free &mdash; discover who you are before you invest.
            When you&apos;re ready to execute, one payment unlocks the full system.
          </p>
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
              </ul>
              <a href="#" className="pricing-btn-secondary">Start Free</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-label">Full Access</div>
              <div className="pricing-amount">$497</div>
              <div className="pricing-term">One-time payment &bull; Lifetime access</div>
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

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-label">Questions</div>
          <h2 className="section-title">Before you decide.</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">What exactly is the free version?</div>
              <div className="faq-answer">
                Creative Archaeology &mdash; a 5-minute deep dive into your creative identity. You&apos;ll get your creative profile,
                choose your path (Pivot, Build, or Evolve), and set your North Star Goal. Plus daily Morning Spark prompts to reconnect
                with creativity. It&apos;s the foundation. When you&apos;re ready to execute with sprints, tools, and AI guidance, you upgrade.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">Is this only for creative careers?</div>
              <div className="faq-answer">
                No. The three paths &mdash; Pivot, Build, and Evolve &mdash; work for any meaningful goal. Write a book. Break a pattern.
                Launch a side project. Level up a skill. The system is designed for creative minds, but your goal doesn&apos;t have to be a career move.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">How much time does this take each day?</div>
              <div className="faq-answer">
                Most days require 10-20 minutes. Some days less, some days more if you&apos;re doing deeper work.
                This is designed for busy professionals &mdash; not another thing to feel guilty about skipping.
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
              <div className="faq-question">Is this just another wellness app?</div>
              <div className="faq-answer">
                No. This is an execution system with tools, frameworks, and accountability architecture.
                There&apos;s mindfulness where it&apos;s useful (like the SOS button), but the focus is action and results &mdash; not relaxation.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">What makes this different from other coaching programs?</div>
              <div className="faq-answer">
                PYC isn&apos;t coaching &mdash; it&apos;s an execution system. Three things set it apart: (1) Creative Archaeology builds an
                emotional foundation no other tool offers. (2) The AI Co-Pilot remembers your journey and adapts its guidance.
                (3) You&apos;re not consuming content &mdash; you&apos;re running 9 structured sprints toward a specific, measurable goal.
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
            You buried it under years of<br/>&ldquo;being practical.&rdquo;
          </h2>
          <p className="section-subtitle" style={{margin: '0 auto 32px', textAlign: 'center'}}>
            <span className="copper">It&apos;s still there.</span>
          </p>
          <a href="#pricing" className="btn-primary">Start Free</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p className="footer-thesis">You were always meant to be the one breaking ground. Not filling roles.</p>
          <a href="#" className="logo">PIONEER <span>YOUR CREATIVE</span></a>
          <p>&copy; 2026 Pioneer Your Creative. All rights reserved.</p>
          <p style={{marginTop: '8px'}}>
            <a href="#" style={{color: 'var(--text-dim)', textDecoration: 'none'}}>Privacy</a> &bull;{' '}
            <a href="#" style={{color: 'var(--text-dim)', textDecoration: 'none'}}>Terms</a> &bull;{' '}
            <a href="#" style={{color: 'var(--text-dim)', textDecoration: 'none'}}>Contact</a>
          </p>
        </div>
      </footer>
    </>
  )
}
