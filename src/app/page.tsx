'use client'

import { useEffect } from 'react'
import './landing.css'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const threats = entry.target.querySelectorAll('.stakes-threat, .stakes-threat-mobile')
          threats.forEach((threat, i) => {
            setTimeout(() => {
              threat.classList.add('visible')
            }, i * 300)
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    const desktopThreats = document.getElementById('stakes-threats')
    const mobileThreats = document.getElementById('stakes-threats-mobile')
    if (desktopThreats) observer.observe(desktopThreats)
    if (mobileThreats) observer.observe(mobileThreats)

    return () => observer.disconnect()
  }, [])
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="container">
          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <a href="#" className="logo">PIONEER <span>YOUR CREATIVE</span></a>
            <span style={{fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--copper)', border: '1px solid rgba(200,149,108,0.4)', borderRadius: '4px', padding: '3px 7px'}}>Founding beta</span>
          </div>
          <a href="#pricing" className="nav-cta">Join the Beta &rarr;</a>
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
              <h2 className="hero-headline">The creative edge AI threatens most is the one thing that actually wins in an AI economy &mdash; if you can get back to it.</h2>
              <p className="hero-subline">PYC is the 90-day system that reconnects it, and builds it into a career, a craft, and a life AI can&rsquo;t replace.</p>
              <p style={{fontSize: '0.85rem', color: 'var(--copper)', marginTop: '-20px', marginBottom: '28px', lineHeight: 1.5}}>PYC is in founding beta &mdash; we&rsquo;re opening <strong>15 spots</strong> to the people who&rsquo;ll shape it with us.</p>
              <div className="hero-cta-group">
                <a href="#pricing" className="btn-primary">Claim a Founding Spot &rarr;</a>
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
                            <div key={i} className={`pm-wave-bar ${i < 11 ? 'pm-wave-filled' : ''}`} style={{height: `${6 + Math.sin(i * 0.7) * 8 + Math.abs(Math.sin(i * 2.3)) * 4}px`}}></div>
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
          </div>
        </div>
      </section>

      {/* Stakes Landscape */}
      <section style={{padding: '0'}}>
        <div className="container">
          <div className="hero-landscape-wrap stakes-landscape-wrap" style={{position: 'relative', overflow: 'hidden'}}>
            <svg viewBox="0 0 1400 700" xmlns="http://www.w3.org/2000/svg" width="100%" style={{display: 'block'}} preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="stakesSkyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#030808"/>
                  <stop offset="30%" stopColor="#0a1515"/>
                  <stop offset="60%" stopColor="#0f1a12"/>
                  <stop offset="100%" stopColor="#160d08"/>
                </linearGradient>
                <radialGradient id="stakesHorizonGlow" cx="50%" cy="65%" r="45%">
                  <stop offset="0%" stopColor="#c8956c" stopOpacity="0.18"/>
                  <stop offset="50%" stopColor="#c8956c" stopOpacity="0.05"/>
                  <stop offset="100%" stopColor="#c8956c" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="stakesSunGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e8720a" stopOpacity="0.9"/>
                  <stop offset="20%" stopColor="#d4561a" stopOpacity="0.6"/>
                  <stop offset="50%" stopColor="#c8956c" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#c8956c" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="stakesEmberLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="transparent"/>
                  <stop offset="30%" stopColor="#d4561a" stopOpacity="0.5"/>
                  <stop offset="50%" stopColor="#e8720a" stopOpacity="0.8"/>
                  <stop offset="70%" stopColor="#d4561a" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="transparent"/>
                </linearGradient>
                <radialGradient id="stakesVignette" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="transparent"/>
                  <stop offset="100%" stopColor="rgba(0,0,0,0.7)"/>
                </radialGradient>
                <filter id="stakesGrain" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves={4} seed="5" result="noise"/>
                  <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
                  <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay"/>
                </filter>
              </defs>
              <rect width="1400" height="700" fill="url(#stakesSkyGrad)"/>
              <rect width="1400" height="700" fill="url(#stakesHorizonGlow)"/>
              <g fill="#5bbfba" opacity="0.3">
                <circle cx="120" cy="40" r="0.8"/><circle cx="245" cy="28" r="0.6"/><circle cx="380" cy="55" r="0.9"/><circle cx="510" cy="22" r="0.7"/>
                <circle cx="640" cy="45" r="0.6"/><circle cx="790" cy="18" r="0.8"/><circle cx="920" cy="38" r="0.7"/><circle cx="1050" cy="25" r="0.9"/>
                <circle cx="1180" cy="50" r="0.6"/><circle cx="1320" cy="32" r="0.8"/><circle cx="68" cy="80" r="0.5"/><circle cx="185" cy="95" r="0.6"/>
              </g>
              <g fill="#c8956c" opacity="0.15">
                <circle cx="158" cy="62" r="0.7"/><circle cx="420" cy="75" r="0.6"/><circle cx="685" cy="58" r="0.5"/><circle cx="945" cy="48" r="0.7"/><circle cx="1205" cy="65" r="0.6"/>
              </g>
              <circle cx="700" cy="460" r="90" fill="url(#stakesSunGlow)"/>
              <circle cx="700" cy="460" r="16" fill="none" stroke="#e8720a" strokeWidth="0.7" opacity="0.6"/>
              <circle cx="700" cy="460" r="8" fill="none" stroke="#e8720a" strokeWidth="0.5" opacity="0.8"/>
              <circle cx="700" cy="460" r="4" fill="#e8720a" opacity="0.9"/>
              <line x1="0" y1="462" x2="1400" y2="462" stroke="url(#stakesEmberLine)" strokeWidth="0.8" opacity="0.4"/>
              <path d="M0,520 C60,505 140,510 220,495 C300,480 380,490 460,478 C540,466 620,475 700,465 C780,455 860,468 940,458 C1020,448 1100,460 1180,450 C1260,440 1340,452 1400,448 L1400,700 L0,700 Z" fill="none" stroke="#5bbfba" strokeWidth="0.5" opacity="0.15"/>
              <path d="M0,535 C50,518 120,525 200,508 C280,491 360,505 440,492 C520,479 600,488 680,476 C760,464 840,478 920,468 C1000,458 1080,470 1160,460 C1240,450 1320,462 1400,458 L1400,700 L0,700 Z" fill="#0a1510" stroke="#5bbfba" strokeWidth="0.7" opacity="0.35"/>
              <path d="M0,535 C50,518 120,525 200,508 C280,491 360,505 440,492 C520,479 600,488 680,476 C760,464 840,478 920,468 C1000,458 1080,470 1160,460 C1240,450 1320,462 1400,458 L1400,700 L0,700 Z" fill="#080e0a" opacity="0.5"/>
              <path d="M0,560 C40,542 100,548 170,530 C240,512 320,528 400,515 C460,505 520,512 590,500 C650,490 710,498 780,488 C850,478 930,492 1000,482 C1070,472 1140,485 1210,475 C1280,465 1350,478 1400,472 L1400,700 L0,700 Z" fill="#0d1208" stroke="#c8956c" strokeWidth="0.9" opacity="0.5"/>
              <path d="M340,538 L355,522 L372,520 L385,538" fill="none" stroke="#c8956c" strokeWidth="0.6" opacity="0.4"/>
              <path d="M840,502 L856,485 L875,483 L888,502" fill="none" stroke="#c8956c" strokeWidth="0.6" opacity="0.4"/>
              <path d="M0,585 C30,568 80,575 140,555 C200,535 270,550 340,538 C400,528 450,535 510,522 C560,512 610,520 665,510 C720,500 780,512 840,502 C900,492 960,505 1020,495 C1080,485 1140,498 1200,488 C1260,478 1330,490 1400,486 L1400,700 L0,700 Z" fill="#121008" stroke="#c8956c" strokeWidth="1.2" opacity="0.65"/>
              <path d="M260,568 C275,553 293,550 306,560" fill="none" stroke="#c8956c" strokeWidth="0.8" opacity="0.4"/>
              <path d="M660,528 C676,512 696,509 710,520" fill="none" stroke="#c8956c" strokeWidth="0.8" opacity="0.4"/>
              <path d="M1170,482 C1185,467 1204,464 1216,474" fill="none" stroke="#c8956c" strokeWidth="0.8" opacity="0.35"/>
              <path d="M0,615 C25,598 65,605 110,585 C155,565 210,580 260,568 C310,556 360,565 410,553 C450,543 490,550 535,540 C575,530 615,538 660,528 C700,518 740,526 780,516 C820,506 865,514 905,504 C945,494 990,503 1035,493 C1080,483 1125,492 1170,482 C1215,472 1260,482 1305,475 C1350,468 1380,478 1400,474 L1400,700 L0,700 Z" fill="#0f0d08" stroke="#c8956c" strokeWidth="1.4" opacity="0.8"/>
              <g transform="translate(960, 490)" opacity="0.9">
                <rect x="-1" y="-11" width="2" height="9" fill="#e8720a" opacity="0.9"/>
                <circle cx="0" cy="-13" r="2" fill="#e8720a" opacity="0.9"/>
                <line x1="0" y1="-7" x2="4" y2="-4" stroke="#e8720a" strokeWidth="1" opacity="0.8"/>
                <line x1="0" y1="-7" x2="-3" y2="-3" stroke="#e8720a" strokeWidth="1" opacity="0.8"/>
                <line x1="0" y1="-1" x2="-2" y2="4" stroke="#e8720a" strokeWidth="1" opacity="0.8"/>
                <line x1="0" y1="-1" x2="2" y2="4" stroke="#e8720a" strokeWidth="1" opacity="0.8"/>
                <circle cx="0" cy="-5" r="8" fill="#e8720a" opacity="0.05"/>
              </g>
              <rect x="0" y="660" width="1400" height="40" fill="#080806" opacity="0.5"/>
              <rect width="1400" height="700" fill="url(#stakesVignette)"/>
              <rect width="1400" height="700" fill="transparent" filter="url(#stakesGrain)" opacity="0.08"/>
            </svg>

            {/* Paradox Headline */}
            <div className="stakes-headline">
              <h2>Creatives are <span className="ember">the most threatened</span>.<br/>And <span className="teal">most equipped</span> to thrive.</h2>
            </div>

            {/* Desktop Threats — absolutely positioned over landscape */}
            <div className="threats-layer threats-desktop" id="stakes-threats">
              <div className="stakes-threat">
                <div className="stakes-threat-label">Existential threat</div>
                <div className="stakes-threat-title">AI is coming for creative jobs</div>
                <div className="stakes-threat-body">Skills that took years to develop are being commoditized in months. The &ldquo;safe&rdquo; creative career paths are becoming unsafe.</div>
                <div className="stakes-threat-link" style={{fontStyle: 'italic', color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '10px', lineHeight: 1.5}}>Phase 3 shows you how to deploy the skills AI can&rsquo;t replace &mdash; and use AI to amplify them.</div>
              </div>
              <div className="stakes-threat">
                <div className="stakes-threat-label">External pressure</div>
                <div className="stakes-threat-title">Modern life is engineered against you</div>
                <div className="stakes-threat-body">Distraction by design &mdash; and creative brains are more susceptible. You can&rsquo;t think your way out of a feeling problem.</div>
                <div className="stakes-threat-link" style={{fontStyle: 'italic', color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '10px', lineHeight: 1.5}}>Phase 2 reclaims your focus and builds the operating system that protects it.</div>
              </div>
              <div className="stakes-threat">
                <div className="stakes-threat-label">Internal blockers</div>
                <div className="stakes-threat-title">The result: a crisis of action</div>
                <div className="stakes-threat-body">Fear disguised as &ldquo;being practical.&rdquo; Imposter syndrome. You know you need to move &mdash; but something keeps you frozen.</div>
                <div className="stakes-threat-link" style={{fontStyle: 'italic', color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '10px', lineHeight: 1.5}}>Phase 1 teaches you to name the fear, feel it, and act anyway.</div>
              </div>
            </div>
          </div>

          {/* Mobile Threats — normal flow below landscape */}
          <div className="threats-mobile" id="stakes-threats-mobile">
            <div className="stakes-threat-mobile">
              <div className="stakes-threat-label">Existential threat</div>
              <div className="stakes-threat-title">AI is coming for creative jobs</div>
              <div className="stakes-threat-body">Skills that took years to develop are being commoditized in months. The &ldquo;safe&rdquo; creative career paths are becoming unsafe.</div>
              <div className="stakes-threat-link" style={{fontStyle: 'italic', color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '10px', lineHeight: 1.5}}>Phase 3 shows you how to deploy the skills AI can&rsquo;t replace &mdash; and use AI to amplify them.</div>
            </div>
            <div className="stakes-threat-mobile">
              <div className="stakes-threat-label">External pressure</div>
              <div className="stakes-threat-title">Modern life is engineered against you</div>
              <div className="stakes-threat-body">Distraction by design &mdash; and creative brains are more susceptible. You can&rsquo;t think your way out of a feeling problem.</div>
              <div className="stakes-threat-link" style={{fontStyle: 'italic', color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '10px', lineHeight: 1.5}}>Phase 2 reclaims your focus and builds the operating system that protects it.</div>
            </div>
            <div className="stakes-threat-mobile">
              <div className="stakes-threat-label">Internal blockers</div>
              <div className="stakes-threat-title">The result: a crisis of action</div>
              <div className="stakes-threat-body">Fear disguised as &ldquo;being practical.&rdquo; Imposter syndrome. You know you need to move &mdash; but something keeps you frozen.</div>
              <div className="stakes-threat-link" style={{fontStyle: 'italic', color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '10px', lineHeight: 1.5}}>Phase 1 teaches you to name the fear, feel it, and act anyway.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Paradox Resolution */}
      <section style={{padding: '48px 0 64px', textAlign: 'center'}}>
        <div className="container">
          <p style={{fontFamily: "'Inter Tight', sans-serif", fontSize: '1.3rem', fontWeight: 500, color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6}}>
            Divergent thinking. Emotional intelligence. Pattern recognition. These are the skills AI can&rsquo;t replace. <strong style={{color: 'var(--copper)', fontWeight: 600, fontSize: '1.35rem'}}>Your unfair advantage &mdash; buried under fear and burnout. Until now.</strong>
          </p>
          <div style={{marginTop: '28px'}}>
            <a href="#pricing" className="btn-primary">Unlock Your Creative Energy</a>
          </div>
        </div>
      </section>

      {/* The Bridge — Why Nothing Else Works */}
      <section className="bridge-section">
        <div className="container">
          <div className="section-label">The Consumption Trap</div>
          <h2 className="section-title">You&apos;re not passive. You&apos;re too capable to sit still &mdash; so you consume.</h2>
          <p className="section-subtitle">A course. A tool. A coach. Another framework, more content. It feels like forward motion and quiets the anxiety &mdash; without the exposure of the real move. Each one solves a piece. None gets you to act.</p>
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
            <p className="bridge-punchline">Here&apos;s what nobody says out loud: every competitor isn&apos;t an alternative to PYC. <span className="copper">It&apos;s part of the disease</span> &mdash; one more thing to consume for a mind already drowning.</p>
            <p className="bridge-subline">PYC is the one thing that isn&apos;t consumption &mdash; the system that reconnects you first, then moves you to real action. Whether you&apos;re building, pivoting, or evolving.</p>
          </div>
        </div>
      </section>

      {/* What This Does For You */}
      <section style={{padding: '80px 0 40px'}}>
        <div className="container">
          <h2 className="section-title" style={{textAlign: 'center', marginBottom: '20px'}}>Your creative engine is switched off. PYC switches it back on.</h2>
          <p className="section-subtitle" style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '48px'}}>This is not wellness &mdash; it&apos;s the mechanism. PYC starts where nothing else does: by reconnecting you with creativity on a level that has nothing to do with your job. Reconnect first, then move.</p>
          <div className="phases-grid">
            <div className="phase-card">
              <div className="phase-name" style={{color: 'var(--text-primary)', fontSize: '1.15rem', lineHeight: 1.3, marginBottom: '16px'}}>It breaks the freeze.</div>
              <div className="phase-desc">When creativity is welded to your income, every move becomes a referendum on your worth &mdash; so you freeze. Reconnecting with it as play removes the stakes, so you can move again.</div>
            </div>
            <div className="phase-card">
              <div className="phase-name" style={{color: 'var(--text-primary)', fontSize: '1.15rem', lineHeight: 1.3, marginBottom: '16px'}}>It rebuilds the faculty AI made valuable.</div>
              <div className="phase-desc">Curiosity, association, taste &mdash; the faculties now most valuable are muscles. Exploratory practice rebuilds the exact ones AI can&apos;t replicate, on ground AI can&apos;t touch.</div>
            </div>
            <div className="phase-card">
              <div className="phase-name" style={{color: 'var(--text-primary)', fontSize: '1.15rem', lineHeight: 1.3, marginBottom: '16px'}}>It refills the tank &mdash; and surfaces your direction.</div>
              <div className="phase-desc">Burnout is creativity stripped of its reward. Intrinsic practice puts the fuel back &mdash; and you find your North Star by noticing what lights you up, which you can&apos;t do while you&apos;re numb.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Part C: The Execution System */}
      <section className="execution-section">
        <div className="container">
          <div className="section-label">The Journey</div>
          <h2 className="section-title">Three phases. Nine sprints. Nine tools you keep for life.</h2>
          <p className="section-subtitle">The structure mirrors the threat &mdash; and resolves it in reverse, clearing the root first. Every sprint installs a permanent internal shift and produces real external proof: transformation and receipts, every ten days.</p>
          <div className="phases-grid">
            <div className="phase-card">
              <div className="phase-number">Phase 1 &mdash; Days 1-30</div>
              <div className="phase-name">UNLOCK</div>
              <div className="phase-desc">Clear the internal blocks before they cost you everything. Fear, resistance, and an identity that won&apos;t let you evolve &mdash; then direction and the first imperfect move. You leave able to act while afraid, and start before you&apos;re ready.</div>
              <div className="phase-sprints" style={{marginBottom: '4px'}}>Directly combats: internal blockers.</div>
              <div className="phase-sprints">Sprints 1-3</div>
            </div>
            <div className="phase-card">
              <div className="phase-number">Phase 2 &mdash; Days 31-60</div>
              <div className="phase-name">STRENGTHEN</div>
              <div className="phase-desc">Build systems the modern world can&apos;t strip. Protect your focus from a world built to steal it, learn how you actually work, and recover from setbacks without spiraling. You leave with a defended mind and a personal operating system.</div>
              <div className="phase-sprints" style={{marginBottom: '4px'}}>Directly combats: external pressure.</div>
              <div className="phase-sprints">Sprints 4-6</div>
            </div>
            <div className="phase-card">
              <div className="phase-number">Phase 3 &mdash; Days 61-90</div>
              <div className="phase-name">ACTIVATE</div>
              <div className="phase-desc">Turn the creative faculty into your professional edge. Solve problems with curiosity instead of panic, name and deploy the human value AI can&apos;t replicate, and close your open loops. You leave with a clear articulation of your edge &mdash; and the proof to back it.</div>
              <div className="phase-sprints" style={{marginBottom: '4px'}}>Directly combats: existential threat.</div>
              <div className="phase-sprints">Sprints 7-9</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="how-it-works">
        <div className="container">
          <div className="section-label">What&apos;s Inside</div>
          <h2 className="section-title">Built for creative brains. Not productivity generics.</h2>
          <p className="section-subtitle">Every piece is load-bearing. Sprints instead of habits. State change before action. An AI partner that remembers everything &mdash; and tools you keep for life.</p>

          <div className="feature-showcase">

            {/* Feature 1: AI Co-Pilot */}
            <div className="feature-row">
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
                <div className="feature-label">Your AI Co-Pilot</div>
                <h3>A collaborator who&apos;s known you for months.</h3>
                <p>An AI partner wired into your goals, your blocks, and your progress. Day 1, the moves are already good. By Day 90, they read like a coach who&apos;s known you for months &mdash; because every reflection makes it sharper. It names the pattern when you&apos;re avoiding the hard thing, before you recognize it yourself.</p>
                <p className="feature-detail">It doesn&apos;t just respond. It initiates. It pushes back. It gets you to act &mdash; and your investment compounds where a competitor starts from zero.</p>
              </div>
            </div>

            {/* Feature 2: Structured Sprints */}
            <div className="feature-row reverse">
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
                <div className="feature-label">North Star &amp; Sprints</div>
                <h3>One goal. One move. You never guess what&apos;s next.</h3>
                <p>Choose your path and set one North Star Goal &mdash; a dream big enough to matter, with one number that proves you&apos;re moving. Then execute through 10-day sprints built for creative brains: each day, one named move, set the night before.</p>
                <p className="feature-detail">State change first, then honest action. You don&apos;t have to feel ready &mdash; you just run the card, and it compounds into something real.</p>
              </div>
            </div>

            {/* Feature 3: Immersive Experiences */}
            <div className="feature-row">
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
                            <div key={i} className={`pm-wave-bar ${i < 11 ? 'pm-wave-filled' : ''}`} style={{height: `${5 + Math.sin(i * 0.7) * 7 + Math.abs(Math.sin(i * 2.3)) * 4}px`}}></div>
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
                <div className="feature-label">Immersive Audio &amp; Reflection</div>
                <h3>Change the state first. Then everything moves.</h3>
                <p>You already know what to do. The problem is your nervous system. Cinematic, story-driven audio &mdash; crafted with film and TV sound design &mdash; shifts how you feel, followed by honest reflection while you&apos;re still open. Because information alone never changed anyone&apos;s behavior.</p>
                <p className="feature-detail">10-20 minutes a day. For people with jobs, families, and 47 open browser tabs.</p>
              </div>
            </div>

            {/* Feature 4: Evidence System */}
            <div className="feature-row reverse">
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
                <div className="feature-label">Your Evidence Wall</div>
                <h3>When imposter syndrome hits, open this.</h3>
                <p>Applications sent. Revenue earned. Pages written. Projects shipped. Every win logged, every metric tracked &mdash; real receipts that pile up as you move. The data doesn&apos;t lie &mdash; even when your fear voice does.</p>
                <p className="feature-detail">Your Co-Pilot holds you accountable. Your Evidence Wall proves it&apos;s working.</p>
              </div>
            </div>

            {/* Feature 5: Creative Archaeology */}
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
                <div className="feature-label">Creative Archaeology</div>
                <h3>Switch the engine back on.</h3>
                <p>3 minutes. 4 questions. You surface the creative self that got buried &mdash; and the truth behind your blocks. The starting point, because you can&apos;t deploy an engine you&apos;ve lost contact with. The reconnection triggers the focus and flow-state chemistry everything else runs on. It&apos;s not nostalgia. It&apos;s performance fuel.</p>
                <p className="feature-detail">Free for everyone. Your unfair advantage shouldn&apos;t cost anything to discover.</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Paths */}
      <section className="paths-section">
        <div className="container">
          <div className="section-label">YOUR PATH</div>
          <h2 className="section-title">Pick a direction. Set a goal. Execute for 90 days.</h2>
          <p className="section-subtitle" style={{marginBottom: '4px'}}>
            You choose a path, set a North Star Goal with real metrics,
            and your AI co-pilot helps you execute through 9 structured sprints.
          </p>
          <p className="section-subtitle">
            Your creative energy needs a target &mdash; this gives it one.
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
          <div style={{textAlign: 'center', marginTop: '48px'}}>
            <a href="#pricing" className="btn-primary">Start Free &mdash; Find Your Path</a>
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
                Creative Archaeology &mdash; an experience that uncovers your creative identity in under 3 minutes. You&apos;ll get your creative profile, choose your path (Pivot, Build, or Evolve), and set your North Star Goal. It&apos;s the foundation &mdash; and your answers start training the AI Co-Pilot that guides everything. When you&apos;re ready to execute, you join the founding cohort for the full system.
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
              <div className="faq-question">I don&apos;t have time for another program.</div>
              <div className="faq-answer">
                Most days are one card &mdash; one move, already decided the night before. It&apos;s built for people with a demanding job and a full life, not free afternoons. 10-20 minutes most days; deeper work only when you choose it.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">What if I fall behind?</div>
              <div className="faq-answer">
                You can&apos;t. It&apos;s completion-paced, not a countdown &mdash; you move to the next sprint when you&apos;ve done the work, on your timeline. Your AI Co-Pilot picks up exactly where you left off. No guilt trips. Progress, not perfection.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">Is this a wellness thing?</div>
              <div className="faq-answer">
                No. The reconnection is real, but it&apos;s a performance mechanism &mdash; it switches your creative engine back on so you can build something undeniable in the real world. Think infrastructure, not self-care. There&apos;s regulation where it&apos;s useful (like the SOS button), but the focus is action and proof.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">How is this different from the courses I&apos;ve bought?</div>
              <div className="faq-answer">
                Courses give you information. You don&apos;t have a knowledge problem &mdash; you have a frozen-engine problem. PYC reconnects you first, then runs your daily execution and produces real proof. The AI Co-Pilot compounds &mdash; every reflection makes it know you deeper, and by Sprint 6 it coaches with a precision no human achieves in that timeframe. It&apos;s the opposite of one more thing to consume.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">Why only 15 spots?</div>
              <div className="faq-answer">
                Because founding members get direct access to me, and that doesn&apos;t scale. Small cohort, real attention, founding price locked for life. When the cohort fills, founding pricing closes and the price returns to standard.
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
          <h2 className="section-title" style={{maxWidth: '760px', margin: '0 auto 20px'}}>
            You can keep consuming.<br/>Or you can pioneer.
          </h2>
          <p className="section-subtitle" style={{margin: '0 auto 16px', textAlign: 'center'}}>
            The way forward isn&apos;t to bury the creative self and survive &mdash; it&apos;s to reconnect with it. It&apos;s the one capability AI amplifies instead of replacing. <span className="copper">15 founding spots. Price locked for life.</span>
          </p>
          <p className="section-subtitle" style={{margin: '0 auto 32px', textAlign: 'center', fontWeight: 600, color: 'var(--text)'}}>
            Stay human. Stay creative. <span className="copper">Pioneer a path AI can&apos;t replace.</span>
          </p>
          <a href="#pricing" className="btn-primary">Claim Your Founding Spot &rarr;</a>
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
