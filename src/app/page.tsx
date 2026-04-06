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
            <div className="hero-left">
              <h1>
                Pioneer a path<br/>
                <span className="hero-accent">AI can&apos;t replace.</span>
              </h1>
              <h2 className="hero-headline">An app for creative professionals navigating the AI shift</h2>
              <p className="hero-subline">Whether you&apos;re building a business, pivoting careers, or evolving where you are.</p>
              <div className="hero-cta-group">
                <a href="#pricing" className="btn-primary">Start Free &mdash; No Credit Card</a>
                <a href="#how-it-works" className="btn-secondary">See How It Works</a>
              </div>
            </div>
            <div className="hero-phone">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen-carousel">

                  {/* Screen 1: Co-Pilot Daily Driver */}
                  <div className="carousel-screen screen-1">
                    <div className="pm-header">
                      <span className="pm-sprint">Sprint 3 &middot; Day 4</span>
                      <span className="pm-dropdown">S3 &#9660;</span>
                    </div>
                    <p className="pm-greeting">Good morning.</p>
                    <div className="pm-energy">
                      <div className="pm-energy-dot">&#128164;</div>
                      <div className="pm-energy-dot">&#128528;</div>
                      <div className="pm-energy-dot pm-energy-active">&#128170;</div>
                      <div className="pm-energy-dot">&#9889;</div>
                      <div className="pm-energy-dot">&#128293;</div>
                    </div>
                    <div className="pm-focus-card">
                      <span className="pm-focus-label">TODAY&apos;S FOCUS</span>
                      <p className="pm-focus-title">Network outreach (0/2)</p>
                      <p className="pm-focus-sub">Co-Pilot has a plan.</p>
                    </div>
                    <div className="pm-ai-bubble">
                      <span className="pm-ai-label">CO-PILOT &middot; 8:12 AM</span>
                      <p className="pm-ai-text">Good energy. Let&apos;s use it on the one thing you keep pushing off. Want me to draft a message you can tweak and send?</p>
                    </div>
                    <div className="pm-user-bubble">
                      <p>Yeah, that would help.</p>
                    </div>
                    <div className="pm-input-bar">
                      <span className="pm-input-placeholder">What&apos;s on your mind?</span>
                      <span className="pm-send-btn">&#9650;</span>
                    </div>
                    <div className="pm-tab-bar">
                      <span className="pm-tab pm-tab-active">Co-Pilot</span>
                      <span className="pm-tab">Today</span>
                      <span className="pm-tab">Audio</span>
                      <span className="pm-tab">Toolkit</span>
                    </div>
                  </div>

                  {/* Screen 2: Immersive Experience */}
                  <div className="carousel-screen screen-2 pm-immersive">
                    <button className="pm-close-btn">&times;</button>
                    <div className="pm-immersive-content">
                      <div className="pm-play-btn">
                        <span className="pm-play-triangle">&#9654;</span>
                      </div>
                      <p className="pm-imm-title">The Cost of Waiting</p>
                      <p className="pm-imm-subtitle">Sprint 3 &middot; Lesson 1 &middot; Immersive Story</p>
                      <div className="pm-waveform">
                        <div className="pm-waveform-bars">
                          {Array.from({length: 32}).map((_, i) => (
                            <div key={i} className={`pm-wave-bar ${i < 11 ? 'pm-wave-filled' : ''}`} style={{height: `${6 + Math.sin(i * 0.7) * 8 + Math.random() * 4}px`}}></div>
                          ))}
                        </div>
                      </div>
                      <div className="pm-timestamps">
                        <span>2:47</span>
                        <span>8:30</span>
                      </div>
                      <div className="pm-caption-card">
                        <p>Everyone talks about starting. Nobody talks about the cost of not starting. Every day you wait, the gap between who you are and who you could be gets a little wider&hellip;</p>
                      </div>
                    </div>
                  </div>

                  {/* Screen 3: Reflection → Co-Pilot */}
                  <div className="carousel-screen screen-3">
                    <span className="pm-reflect-label">REFLECTION &middot; SPRINT 3, LESSON 1</span>
                    <p className="pm-reflect-question">What are you choosing inaction on right now?</p>
                    <div className="pm-reflect-input">
                      <p>Honestly... the conversation with my manager about the role change. I keep telling myself the timing isn&apos;t right.</p>
                    </div>
                    <div className="pm-reflect-divider"></div>
                    <div className="pm-ai-bubble">
                      <span className="pm-ai-label pm-ai-label-copper">CO-PILOT</span>
                      <p className="pm-ai-text">You just named it. The &ldquo;timing&rdquo; excuse is the Sprint 1 fear pattern &mdash; fear of judgment wearing a practical disguise. When is your next 1:1?</p>
                    </div>
                    <div className="pm-screen3-spacer"></div>
                    <div className="pm-input-bar">
                      <span className="pm-input-placeholder">What&apos;s on your mind?</span>
                      <span className="pm-send-btn">&#9650;</span>
                    </div>
                    <div className="pm-tab-bar">
                      <span className="pm-tab pm-tab-active">Co-Pilot</span>
                      <span className="pm-tab">Today</span>
                      <span className="pm-tab">Audio</span>
                      <span className="pm-tab">Toolkit</span>
                    </div>
                  </div>

                  {/* Screen 4: Today Scoreboard */}
                  <div className="carousel-screen screen-4">
                    <div className="pm-header">
                      <span className="pm-sprint">Sprint 3 &middot; Day 4 of 10</span>
                      <span className="pm-streak">&#9679; 12</span>
                    </div>
                    <div className="pm-progress-dots">
                      <span className="pm-pdot pm-pdot-done"></span>
                      <span className="pm-pdot pm-pdot-done"></span>
                      <span className="pm-pdot pm-pdot-done"></span>
                      <span className="pm-pdot pm-pdot-current"></span>
                      <span className="pm-pdot"></span>
                      <span className="pm-pdot"></span>
                      <span className="pm-pdot"></span>
                      <span className="pm-pdot"></span>
                      <span className="pm-pdot"></span>
                      <span className="pm-pdot"></span>
                    </div>
                    <div className="pm-goal-card">
                      <span className="pm-goal-label">&#9733; NORTH STAR &middot; PIVOT PATH</span>
                      <p className="pm-goal-text">Land a UX role at an AI company</p>
                      <div className="pm-goal-bar">
                        <div className="pm-goal-fill"></div>
                      </div>
                      <span className="pm-goal-metric">7 / 15 applications</span>
                    </div>
                    <div className="pm-actions-card">
                      <span className="pm-actions-label">SPRINT 3 ACTIONS</span>
                      <div className="pm-action-item">
                        <span className="pm-action-check pm-action-done">&#10003;</span>
                        <span className="pm-action-text pm-action-strike">Send 3 applications</span>
                        <span className="pm-action-count pm-action-count-done">3/3</span>
                      </div>
                      <div className="pm-action-item">
                        <span className="pm-action-check pm-action-progress">&#9679;</span>
                        <span className="pm-action-text">Update portfolio</span>
                        <span className="pm-action-count pm-action-count-progress">1/2</span>
                      </div>
                      <div className="pm-action-item">
                        <span className="pm-action-check">&#9633;</span>
                        <span className="pm-action-text">Network outreach</span>
                        <span className="pm-action-count">0/2</span>
                      </div>
                    </div>
                    <div className="pm-lesson-card">
                      <span className="pm-lesson-label">&#9654; TODAY&apos;S LESSON</span>
                      <p className="pm-lesson-title">The Cost of Waiting</p>
                      <p className="pm-lesson-subtitle">Immersive Story &middot; 12 min</p>
                      <span className="pm-lesson-cta">Start Lesson &rarr;</span>
                    </div>
                    <div className="pm-tab-bar">
                      <span className="pm-tab">Co-Pilot</span>
                      <span className="pm-tab pm-tab-today-active">Today</span>
                      <span className="pm-tab">Audio</span>
                      <span className="pm-tab">Toolkit</span>
                    </div>
                  </div>

                </div>
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
              Creatives are <span className="ember">the most threatened.</span><br/>
              And <span className="teal">most equipped</span> to thrive.
            </div>
            <div className="paradox-lines">
              <p className="paradox-line paradox-line-bright">Divergent thinking. Emotional intelligence. Connecting unrelated ideas.</p>
              <p className="paradox-line paradox-line-muted">These are the skills AI can&apos;t replace.</p>
              <p className="paradox-line paradox-line-advantage">Your unfair advantage.</p>
              <p className="paradox-line paradox-line-muted">Buried under fear and burnout.</p>
              <p className="paradox-punch copper">Until now.</p>
            </div>
          </div>
          <a href="#pricing" className="btn-primary">Unlock Your Creative Energy</a>
        </div>
      </section>

      {/* The Bridge — Why Nothing Else Works */}
      <section className="bridge-section">
        <div className="container">
          <div className="section-label">Why Nothing Else Has Worked</div>
          <h2 className="section-title">You&apos;ve tried. It didn&apos;t stick. Here&apos;s why.</h2>
          <p className="section-subtitle">You&apos;ve tried meditation apps, productivity tools, coaching, AI. Each one solves a piece. None solves the problem.</p>
          <div className="bridge-grid">
            <div className="bridge-card">
              <div className="bridge-card-title">Meditation apps</div>
              <p className="bridge-card-body bridge-card-body-first">Calm you down but don&apos;t move you forward.</p>
              <p className="bridge-card-body">You feel better for 10 minutes, then open your laptop to the same problems.</p>
              <div className="bridge-card-tag">
                <div className="bridge-tag-solves"><span className="bridge-tag-label">Solves:</span> state</div>
                <div className="bridge-tag-misses"><span className="bridge-tag-label">Misses:</span> action, memory, accountability</div>
              </div>
            </div>
            <div className="bridge-card">
              <div className="bridge-card-title">Productivity apps</div>
              <p className="bridge-card-body bridge-card-body-first">Track tasks but ignore the fear blocking you from starting.</p>
              <p className="bridge-card-body">You don&apos;t need a better to-do list.</p>
              <div className="bridge-card-tag">
                <div className="bridge-tag-solves"><span className="bridge-tag-label">Solves:</span> tracking</div>
                <div className="bridge-tag-misses"><span className="bridge-tag-label">Misses:</span> state change, emotional depth, coaching</div>
              </div>
            </div>
            <div className="bridge-card">
              <div className="bridge-card-title">Traditional coaching</div>
              <p className="bridge-card-body bridge-card-body-first">Gives you clarity once a week but disappears between sessions.</p>
              <p className="bridge-card-body">The breakthroughs happen at 11pm on a Tuesday.</p>
              <div className="bridge-card-tag">
                <div className="bridge-tag-solves"><span className="bridge-tag-label">Solves:</span> personalization</div>
                <div className="bridge-tag-misses"><span className="bridge-tag-label">Misses:</span> always-on, affordability, memory</div>
              </div>
            </div>
            <div className="bridge-card">
              <div className="bridge-card-title">AI chatbots</div>
              <p className="bridge-card-body bridge-card-body-first">Give generic advice because they don&apos;t know you.</p>
              <p className="bridge-card-body">You&apos;ll get the same answer as everyone else.</p>
              <div className="bridge-card-tag">
                <div className="bridge-tag-solves"><span className="bridge-tag-label">Solves:</span> availability</div>
                <div className="bridge-tag-misses"><span className="bridge-tag-label">Misses:</span> personalization, state change, accountability</div>
              </div>
            </div>
          </div>
          <div className="bridge-bottom">
            <p className="bridge-punchline">PYC is the first system that combines <span className="copper">all four</span>: state change, emotional depth, AI memory, and real-world execution.</p>
            <p className="bridge-subline">Whether you&apos;re building a business, pivoting careers, or evolving where you are &mdash; this system adapts to your path.</p>
          </div>
        </div>
      </section>


      {/* Part C: The Execution System */}
      <section className="execution-section">
        <div className="container">
          <div className="section-label">What You&apos;ll Achieve</div>
          <h2 className="section-title">Three phases. Each one removes what&apos;s in your way.</h2>
          <p className="section-subtitle">You don&apos;t need more motivation. You need to systematically clear the forces keeping you stuck &mdash; in the right order.</p>
          <div className="phases-grid">
            <div className="phase-card">
              <div className="phase-number">Phase 1 &mdash; Days 1-30</div>
              <div className="phase-name">UNLOCK</div>
              <div className="phase-desc">Walk into the room without the voice saying &lsquo;who are you to do this?&rsquo; Phase 1 teaches you to name the fear, feel it, and act anyway.</div>
              <div className="phase-sprints">Sprints 1-3</div>
            </div>
            <div className="phase-card">
              <div className="phase-number">Phase 2 &mdash; Days 31-60</div>
              <div className="phase-name">STRENGTHEN</div>
              <div className="phase-desc">Reclaim the 2 hours a day you&apos;re losing to noise and distraction. Phase 2 builds your personal operating system &mdash; protecting your focus and freeing up bandwidth to execute.</div>
              <div className="phase-sprints">Sprints 4-6</div>
            </div>
            <div className="phase-card">
              <div className="phase-number">Phase 3 &mdash; Days 61-90</div>
              <div className="phase-name">ACTIVATE</div>
              <div className="phase-desc">Deploy the skills AI can&apos;t replace. Use AI to amplify the rest. Phase 3 teaches you to trust your divergent thinking, articulate it, and use it professionally.</div>
              <div className="phase-sprints">Sprints 7-9</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="how-it-works">
        <div className="container">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Built for creative brains. Not productivity generics.</h2>
          <p className="section-subtitle">Sprints instead of habits. State change before action. An AI coach that remembers everything.</p>

          <div className="feature-showcase">

            {/* Feature 1: Creative Archaeology */}
            <div className="feature-row">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen fm-screen">
                    <div className="fm-progress-dots">
                      <span className="fm-dot fm-dot-done"></span>
                      <span className="fm-dot fm-dot-done"></span>
                      <span className="fm-dot fm-dot-active"></span>
                      <span className="fm-dot"></span>
                    </div>
                    <p className="fm-question">When did it stop &mdash; and what took its place?</p>
                    <p className="fm-subtext">What filled the space where creating used to be?</p>
                    <div className="fm-options">
                      <div className="fm-option fm-option-selected">Work took over</div>
                      <div className="fm-option fm-option-selected">Someone&apos;s voice said it wasn&apos;t worth it</div>
                      <div className="fm-option">Fear of not being good enough</div>
                      <div className="fm-option">Time just slipped away</div>
                    </div>
                    <div className="fm-spacer"></div>
                    <div className="fm-continue-btn">Continue</div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Where It Starts</div>
                <h3>Reconnect with the energy source you buried.</h3>
                <p>3 minutes. 4 questions. You rediscover the creative identity you left behind &mdash; the music, the writing, the making. Neuroscience shows this reconnection triggers the dopamine and flow-state chemistry that powers focus and execution. It&apos;s not nostalgia. It&apos;s performance fuel.</p>
                <p className="feature-detail">Free for everyone. Your unfair advantage shouldn&apos;t cost anything to discover.</p>
              </div>
            </div>

            {/* Feature 2: AI Co-Pilot */}
            <div className="feature-row reverse">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen fm-screen">
                    <div className="pm-header">
                      <span className="pm-sprint">Sprint 5 &middot; Day 3</span>
                      <span className="pm-dropdown">S5 &#9660;</span>
                    </div>
                    <p className="pm-greeting">Good morning.</p>
                    <div className="pm-energy">
                      <div className="pm-energy-dot">&#128164;</div>
                      <div className="pm-energy-dot">&#128528;</div>
                      <div className="pm-energy-dot">&#128170;</div>
                      <div className="pm-energy-dot pm-energy-active">&#9889;</div>
                      <div className="pm-energy-dot">&#128293;</div>
                    </div>
                    <div className="pm-goal-card">
                      <span className="pm-goal-label">&#9733; NORTH STAR &middot; PIVOT PATH</span>
                      <p className="pm-goal-text">Land a UX role at an AI company</p>
                      <div className="pm-goal-bar"><div className="pm-goal-fill" style={{width: '60%'}}></div></div>
                      <span className="pm-goal-metric">9 / 15 applications</span>
                    </div>
                    <div className="pm-ai-bubble">
                      <span className="pm-ai-label">CO-PILOT &middot; 8:12 AM</span>
                      <p className="pm-ai-text">You&apos;ve sent 9 applications but zero follow-ups. The pattern from Sprint 2 &mdash; avoidance disguised as patience. Pick one. Follow up today.</p>
                    </div>
                    <div className="pm-user-bubble">
                      <p>You&apos;re right. Sending the follow-up to Carta now.</p>
                    </div>
                    <div className="pm-input-bar">
                      <span className="pm-input-placeholder">What&apos;s on your mind?</span>
                      <span className="pm-send-btn">&#9650;</span>
                    </div>
                    <div className="pm-tab-bar">
                      <span className="pm-tab pm-tab-active">Co-Pilot</span>
                      <span className="pm-tab">Today</span>
                      <span className="pm-tab">Audio</span>
                      <span className="pm-tab">Toolkit</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">Who Holds You Accountable</div>
                <h3>A coach that&apos;s there at 11pm on a Tuesday.</h3>
                <p>It names the pattern when you&apos;re avoiding the hard thing &mdash; before you recognize it yourself. Every reflection makes it sharper. By Sprint 6, it coaches with a precision no human achieves in that timeframe.</p>
                <p className="feature-detail">It doesn&apos;t just respond. It initiates. It pushes back. It gets you to act.</p>
              </div>
            </div>

            {/* Feature 3: Structured Sprints */}
            <div className="feature-row">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen fm-screen">
                    <div className="pm-header">
                      <span className="pm-sprint">Sprint 3 &middot; Day 4 of 10</span>
                      <span className="pm-streak">&#9679; 8</span>
                    </div>
                    <div className="pm-goal-card">
                      <span className="pm-goal-label">&#9733; NORTH STAR &middot; BUILD PATH</span>
                      <p className="pm-goal-text">Launch freelance design business</p>
                      <div className="pm-goal-bar"><div className="pm-goal-fill" style={{width: '35%'}}></div></div>
                      <span className="pm-goal-metric">7 / 20 clients</span>
                    </div>
                    <div className="pm-actions-card">
                      <span className="pm-actions-label">SPRINT 3 ACTIONS</span>
                      <div className="pm-action-item">
                        <span className="pm-action-check pm-action-done">&#10003;</span>
                        <span className="pm-action-text pm-action-strike">Update portfolio site</span>
                        <span className="pm-action-count pm-action-count-done">Done</span>
                      </div>
                      <div className="pm-action-item">
                        <span className="pm-action-check pm-action-progress">&#9679;</span>
                        <span className="pm-action-text">Send 5 cold outreach emails</span>
                        <span className="pm-action-count pm-action-count-progress">3/5</span>
                      </div>
                      <div className="pm-action-item">
                        <span className="pm-action-check">&#9633;</span>
                        <span className="pm-action-text">Schedule 2 coffee meetings</span>
                        <span className="pm-action-count">0/2</span>
                      </div>
                    </div>
                    <div className="pm-lesson-card">
                      <span className="pm-lesson-label">&#9654; TODAY&apos;S LESSON</span>
                      <p className="pm-lesson-title">Start Ugly</p>
                      <p className="pm-lesson-subtitle">Immersive Story &middot; 10 min</p>
                      <span className="pm-lesson-cta">Start Lesson &rarr;</span>
                    </div>
                    <div className="pm-tab-bar">
                      <span className="pm-tab">Co-Pilot</span>
                      <span className="pm-tab pm-tab-today-active">Today</span>
                      <span className="pm-tab">Sprints</span>
                      <span className="pm-tab">Toolkit</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">How You Execute</div>
                <h3>One goal. One metric. You never guess what to do next.</h3>
                <p>Choose your path. Set one North Star Goal with one number that proves you&apos;re moving. Then execute through 10-day sprints designed for creative brains &mdash; each day has one clear action, each sprint builds on the last.</p>
                <p className="feature-detail">Sprints instead of habits. Because creative brains don&apos;t do &ldquo;a little every day.&rdquo; They do intense bursts, then recover.</p>
              </div>
            </div>

            {/* Feature 4: Immersive Experiences */}
            <div className="feature-row reverse">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen fm-screen fm-immersive-screen">
                    <button className="pm-close-btn">&times;</button>
                    <div className="pm-immersive-content">
                      <div className="pm-play-btn">
                        <span className="pm-play-triangle">&#9654;</span>
                      </div>
                      <p className="pm-imm-title">The Cost of Waiting</p>
                      <p className="pm-imm-subtitle">Sprint 3 &middot; Immersive Story</p>
                      <div className="pm-waveform">
                        <div className="pm-waveform-bars">
                          {Array.from({length: 28}).map((_, i) => (
                            <div key={i} className={`pm-wave-bar ${i < 11 ? 'pm-wave-filled' : ''}`} style={{height: `${5 + Math.sin(i * 0.7) * 7 + Math.random() * 4}px`}}></div>
                          ))}
                        </div>
                      </div>
                      <div className="pm-timestamps">
                        <span>3:24</span>
                        <span>8:30</span>
                      </div>
                      <div className="pm-caption-card">
                        <p>Every day you wait, the gap between who you are and who you could be gets a little wider&hellip;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">How You Shift</div>
                <h3>Feel it first. Then act.</h3>
                <p>You already know what you need to do. The problem is your nervous system. Cinematic audio stories &mdash; crafted with film and TV sound design &mdash; change your physiological state. You feel the obstacle before you learn to overcome it.</p>
                <p className="feature-detail">10-20 minutes a day. For people with jobs, families, and 47 open browser tabs.</p>
              </div>
            </div>

            {/* Feature 5: Evidence System */}
            <div className="feature-row">
              <div className="feature-visual">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen fm-screen">
                    <div className="pm-header">
                      <span className="fm-ew-header">Evidence Wall</span>
                      <span className="fm-ew-metric">9/15</span>
                    </div>
                    <div className="fm-ew-goal">
                      <span className="fm-ew-goal-label">&#9733; PIVOT PATH</span>
                      <span className="fm-ew-goal-text">Land a UX role</span>
                      <div className="pm-goal-bar"><div className="pm-goal-fill" style={{width: '60%'}}></div></div>
                    </div>
                    <div className="fm-ew-feed">
                      <div className="fm-ew-item fm-ew-green">
                        <p className="fm-ew-item-title">Sent follow-up to Carta</p>
                        <p className="fm-ew-item-meta">Solid win &middot; Today</p>
                      </div>
                      <div className="fm-ew-item fm-ew-teal">
                        <p className="fm-ew-item-title">Sprint 4 Complete &#10003;</p>
                        <p className="fm-ew-item-meta">Proof &middot; 2 days ago</p>
                      </div>
                      <div className="fm-ew-item fm-ew-copper">
                        <p className="fm-ew-item-title">Had the hard conversation with manager</p>
                        <p className="fm-ew-item-meta">Huge win &middot; 4 days ago</p>
                      </div>
                      <div className="fm-ew-item fm-ew-green">
                        <p className="fm-ew-item-title">Updated portfolio with 2 case studies</p>
                        <p className="fm-ew-item-meta">Solid win &middot; 1 week ago</p>
                      </div>
                    </div>
                    <div className="pm-tab-bar">
                      <span className="pm-tab">Co-Pilot</span>
                      <span className="pm-tab">Today</span>
                      <span className="pm-tab">Audio</span>
                      <span className="pm-tab">Toolkit</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-label">How You Prove It</div>
                <h3>When imposter syndrome hits, open this.</h3>
                <p>Applications sent. Revenue earned. Pages written. Projects shipped. Every win logged, every metric tracked. The data doesn&apos;t lie &mdash; even when your fear voice does.</p>
                <p className="feature-detail">Your Co-Pilot holds you accountable. Your Evidence Wall proves it&apos;s working.</p>
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
              </ul>
              <a href="#" className="pricing-btn-secondary">Start Free</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-label">Full Access</div>
              <div className="pricing-amount">$497</div>
              <div className="pricing-term">One-time payment &bull; Lifetime access</div>
              <ul className="pricing-features">
                <li className="includes-tag">Everything in Free, plus:</li>
                <li>AI Co-Pilot with memory that compounds every sprint</li>
                <li>9 immersive transformation sprints (90 days)</li>
                <li>Cinematic audio stories + lesson learnings</li>
                <li>State-change audio (focus, calm, energy)</li>
                <li>Evidence Wall with metric tracking</li>
                <li>SOS Button (90-second nervous system reset)</li>
                <li>Path-specific coaching + content</li>
                <li>Future sprints + updates included</li>
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
                Creative Archaeology &mdash; an experience that uncovers your creative identity in under 3 minutes. You&apos;ll get your creative profile, choose your path (Pivot, Build, or Evolve), and set your North Star Goal. It&apos;s the foundation &mdash; and your answers start training the AI coach that guides everything. When you&apos;re ready to execute with sprints, audio, and full AI coaching, you upgrade.
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
                The program is self-paced. Life happens. Your AI Co-Pilot picks up where you left off &mdash; it remembers what you were working on and what you committed to. No guilt trips. Just &ldquo;welcome back, here&apos;s where we are.&rdquo; Progress, not perfection.
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
                Three things: (1) Creative Archaeology builds an emotional foundation no other tool offers &mdash; it reconnects you with the creative energy that&apos;s your actual competitive advantage. (2) The AI Co-Pilot compounds &mdash; every reflection, every conversation, every win makes it know you deeper. By Sprint 6, it coaches with precision no human achieves in that timeframe. (3) The audio content is art, not lectures. It changes your state first, then moves you to action. The reflections hit while you&apos;re still open. That honesty is what makes everything else work.
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
            Your creative energy is your<br/>unfair advantage.
          </h2>
          <p className="section-subtitle" style={{margin: '0 auto 32px', textAlign: 'center'}}>
            <span className="copper">It&apos;s been there the whole time.</span>
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
