'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';
import { Particles } from '@/components/Particles';
import RealCrisisCalm from '@/sections/RealCrisisCalm';

const Subnav = dynamic(() => import('@/components/Subnav'), { ssr: false });

const SPRINT1_COURSE_URL = 'https://pioneeryourcreative.thinkific.com/courses/sprint1' as const;
const DISCOVERY_CALL_URL = '/apply' as const;
const CLARITY_CALL_URL = '/clarity-call' as const;


type Lesson = {
  title: string;
  description: string;
};

type Benefit = {
  number: string;
  title: string;
  lines: string[];
};

type PricingCard = {
  badge: string;
  title: string;
  price: string;
  priceNote: string;
  description: string;
  included: string[];
  ctaLabel: string;
  href: string;
  highlight?: boolean;
};

type FaqItem = {
  question: string;
  answer: string;
};

type JourneyCard = {
  icon: string;
  eyebrow: string;
  title: string;
  body: string;
  arc: string;
  outcomes: string[];
  challenge: string;
  ctaLabel: string;
  ctaId: string;
};

type PhaseCard = {
  label: string;
  subtitle: string;
  description: string;
  sprints: string[];
  outcomeHighlight: string;
  outcomeText: string;
  delay: string;
};

type FlowColumn = {
  title: string;
  descriptor: string;
  bullets: string[];
};

type DailyCard = {
  icon: string;
  title: string;
  body: string;
};

const sprintOneLessons: Lesson[] = [
  {
    title: 'Lesson 1: Fear — Break the Inaction Cycle',
    description: 'Understand fear as a neurological signal. Learn the 3-minute protocol that moves you from freeze to action in real time.',
  },
  {
    title: 'Lesson 2: Resistance — Recognize Your Patterns',
    description: 'Map YOUR specific avoidance loops (research binges, perfectionism, "timing optimization"). Stop sabotaging the leap you need to make.',
  },
  {
    title: 'Lesson 3: Identity — Permission to Evolve',
    description: 'Update outdated professional rules keeping you obedient instead of entrepreneurial. Test new operating modes without blowing up your life.',
  },
];

const sprintOneTools = ['Fear Interrupt Protocol', 'Resistance Pattern Map', 'Identity Experiment Framework'];

const pricingCards: PricingCard[] = [
  {
    badge: 'START HERE',
    title: 'Sprint 1 Only',
    price: '$97',
    priceNote: 'regularly $297 after beta',
    description: 'Start with the foundation. Restore your creative operating system before Sprint 2 builds vision on top.',
    included: [
      '✓ All 3 lessons + execution tools',
      '✓ 10 days of AI Co-Pilot accountability',
      '✓ Private community access',
      '✓ Lifetime access to Sprint 1 content',
      '✓ Input on Sprint 2 development',
      '✓ Upgrade to full program anytime',
    ],
    ctaLabel: 'Start Sprint 1 — $97',
    href: SPRINT1_COURSE_URL,
  },
  {
    badge: 'BEST VALUE - SAVE $1,976',
    title: 'Full 90-Day Journey (Pre-Order)',
    price: '$697',
    priceNote: 'regularly $2,673 when complete',
    description: 'Complete the 90-day transformation. Rewire fear, burnout, and distraction into sustainable creative momentum.',
    included: [
      '✓ All 9 sprints (releasing consecutively)',
      '✓ Get Sprint 1 immediately',
      '✓ Shape future content with your feedback',
      '✓ Personalized AI Co-Pilot (90 days)',
      '✓ All execution tools (yours forever)',
      '✓ Pioneer community access',
      '✓ Lifetime access + all future updates',
    ],
    ctaLabel: 'Pre-Order Full Journey — $697',
    href: '/journey',
    highlight: true,
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What makes this different from other courses I've abandoned?",
    answer:
      "80% doing beats 100% learning. Sprint 1 isn't passive consumption. Your AI Co-Pilot checks in daily, the community sees your progress, and every lesson ends with action. It's harder to disappear than to execute. Not Education. Execution.",
  },
  {
    question: 'I’ve started and abandoned so many programs. Why will this be different?',
    answer:
      'Sprint 1 isn’t passive consumption. Your AI Co-Pilot checks in daily, the community sees your progress, and every lesson ends with action. It’s harder to disappear than to execute.',
  },
  {
    question: 'What if I don’t have time for daily work?',
    answer:
      'You commit to 15–30 minutes per day in the intake. That’s the requirement. If 15 minutes feels impossible, it’s a priority issue we’ll solve together.',
  },
  {
    question: 'Is this therapy?',
    answer: 'No. Sprint 1 addresses creative execution patterns, not clinical care. If you’re experiencing clinical symptoms, partner with a licensed professional.',
  },
  {
    question: 'What happens after Sprint 1?',
    answer:
      'Sprint 1 is the foundation for the 90-day journey. You can continue to Sprint 2 (releasing January 2026) or pre-order the full journey at beta pricing. Each sprint builds on the previous one.',
  },
  {
    question: 'Can I do this while working full-time?',
    answer: 'Yes. Sprint 1 is engineered for busy creatives—15–20 minutes per day fits around any schedule.',
  },
  {
    question: 'What if I need help during the sprint?',
    answer: 'Your AI Co-Pilot supports you daily, the community answers questions, and human support is available at support@pioneeryourcreative.com whenever you need it.',
  },
];

const journeyCards: JourneyCard[] = [
  {
    icon: '',
    eyebrow: 'PIVOT YOUR CAREER',
    title: 'Ready to Pivot',
    body: "You're done with your current role and ready to leverage your skills in a new direction.",
    arc:
      'Break through fear (Days 1-30) → Build focus to navigate job search chaos (Days 31-60) → Position yourself with confidence that stands out (Days 61-90)',
    outcomes: [
      'Resume updated and positioned',
      'Interviews scheduled',
      'Clear negotiation strategy',
    ],
    challenge: '"Am I too late? What if I choose wrong?"',
    ctaLabel: 'EXPLORE THIS PATH →',
    ctaId: 'journey-pivot',
  },
  {
    icon: '',
    eyebrow: 'LAUNCH YOUR BUSINESS',
    title: 'Ready to Build',
    body: "You're launching something of your own while keeping your job. You want ownership and income on your terms.",
    arc:
      'Break through launch paralysis (Days 1-30) → Build sustainable systems around your 9-5 (Days 31-60) → Ship with creative differentiation (Days 61-90)',
    outcomes: [
      'Validated offer and live landing page',
      'First clients or customers signed',
      '$1K-$5K in revenue (or clear pipeline)',
    ],
    challenge: '"Too many ideas. Where do I even start?"',
    ctaLabel: 'EXPLORE THIS PATH →',
    ctaId: 'journey-build',
  },
  {
    icon: '',
    eyebrow: 'STAY & LEVEL UP',
    title: 'Ready to Evolve',
    body: "You're not leaving—yet. But you need to adapt. You want to master AI and become indispensable.",
    arc:
      "Break through fear of leading without a title (Days 1-30) → Build focus to deliver high-impact work (Days 31-60) → Master creative problem-solving AI can't replace (Days 61-90)",
    outcomes: [
      'AI integrated into your daily workflow',
      'Leading a high-impact initiative',
      'Promotion conversation in progress',
    ],
    challenge: "\"What if I can't adapt fast enough?\"",
    ctaLabel: 'EXPLORE THIS PATH →',
    ctaId: 'journey-evolve',
  },
];

const howItActuallyWorksColumns: FlowColumn[] = [
  {
    title: 'INTERNAL SHIFT',
    descriptor: 'What we fix',
    bullets: [
      'Break fear that keeps you stuck',
      'Build focus despite burnout',
      "Unlock creative edge AI can't replace",
    ],
  },
  {
    title: 'EXECUTION SYSTEM',
    descriptor: 'What we provide',
    bullets: [
      'Daily micro-goals calibrated to your energy',
      'AI Co-Pilot that keeps you on track',
      'Physical tools that hard-wire commitment',
    ],
  },
  {
    title: 'EXTERNAL OUTCOMES',
    descriptor: 'What you achieve',
    bullets: [
      'Resume updated → Interviews scheduled → Offer received',
      'Offer validated → Clients signed → Revenue flowing',
      'AI integrated → Initiative led → Promotion secured',
    ],
  },
];

const dailyRoutineCards: DailyCard[] = [
  {
    icon: '🎧',
    title: 'ONE AUDIO LESSON (5-15 min)',
    body: 'Short, immersive audio that shifts your state before asking for action. Psychology first, tactics second.',
  },
  {
    icon: '✓',
    title: 'ONE MICRO-GOAL (5-10 min)',
    body: 'One clear action calibrated to your energy. Small wins compound into massive transformation.',
  },
  {
    icon: '🤖',
    title: 'AI CHECK-IN (2 min)',
    body: 'Your Co-Pilot tracks progress and surfaces only what you need next. Zero overwhelm.',
  },
];

const phaseCards: PhaseCard[] = [
  {
    label: 'PHASE 1: START (Days 1-30)',
    subtitle: 'Unlock Your Creative Energy',
    description:
      'Break through fear, resistance, and mental fog.\n\nBuild confidence to take action—even on low-motivation days.',
    sprints: ['Sprint 1: Break Free From Blocks', 'Sprint 2: Design Your Future', 'Sprint 3: Think Like Your Future Self'],
    outcomeHighlight: 'By Day 30',
    outcomeText:
      "You're no longer stuck in your head. You're taking daily action despite fear and uncertainty.",
    delay: '0ms',
  },
  {
    label: 'PHASE 2: SUSTAIN (Days 31-60)',
    subtitle: 'Strengthen Your Creative Energy',
    description:
      'Detox from digital distraction, optimize your environment, and protect your \nfocus so you can show up consistently without burning out.',
    sprints: ['Sprint 4: Clear Mental Clutter', 'Sprint 5: Build Your Power Systems', 'Sprint 6: Become Unbreakable'],
    outcomeHighlight: 'By Day 60',
    outcomeText:
      "You're no longer scattered and exhausted. You have a sustainable \nsystem for protecting your focus and energy.",
    delay: '120ms',
  },
  {
    label: 'PHASE 3: SHIP (Days 61-90)',
    subtitle: 'Activate Your Creative Energy',
    description:
      'Master divergent thinking, leverage AI without being replaced by it, and finish \nwhat you started. This is where ideas become reality.',
    sprints: ['Sprint 7: Solve Problems Like a Pro', 'Sprint 8: Build Your Human Edge', 'Sprint 9: Ship & Get Results'],
    outcomeHighlight: 'By Day 90',
    outcomeText:
      "You've launched your project, landed the new role, or positioned \nyourself as indispensable.",
    delay: '240ms',
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [ctaParticlesActive, setCtaParticlesActive] = useState(false);
  const [ctaPrefersReducedMotion, setCtaPrefersReducedMotion] = useState(false);
  const [ctaIsMobile, setCtaIsMobile] = useState(false);
  const [showSystemsSticky, setShowSystemsSticky] = useState(false);

  const trackCta = useCallback((ctaId: string) => {
    if (typeof window === 'undefined') {
      return;
    }

    const payload = { event: 'cta_click', cta: ctaId };
    const w = window as typeof window & { dataLayer?: Array<Record<string, unknown>> };

    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push(payload);
    }

    window.dispatchEvent?.(new CustomEvent('cta-click', { detail: payload }));

    if (process.env.NODE_ENV !== 'production') {
      console.info('[CTA]', payload);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    document
      .querySelectorAll<HTMLElement>('.constellation-wrapper')
      .forEach((wrapper) => wrapper.classList.add('glow-active'));
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.fade-in-section')
    );

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const realCrisisItems = Array.from(
      document.querySelectorAll<HTMLElement>('#real-crisis .rc-anim')
    );
    const realCrisisBlocks = Array.from(
      document.querySelectorAll<HTMLElement>('#real-crisis .rc-block')
    );
    const egBlocks = Array.from(document.querySelectorAll<HTMLElement>('#problem .eg-anim'));
    const egBlockElements = Array.from(
      document.querySelectorAll<HTMLElement>('#problem .eg-block')
    );
    const takeaway = document.querySelector<HTMLElement>('#eg-takeaway');
    const whySection = document.querySelector<HTMLElement>('#how-it-works');
    const whyCards = Array.from(document.querySelectorAll<HTMLElement>('#how-it-works .wiw-anim'));
    const frameworkSection = document.querySelector<HTMLElement>('#framework');
    const frameworkCards = Array.from(
      document.querySelectorAll<HTMLElement>('#framework .fw-anim')
    );
    const frameworkCallouts = frameworkSection
      ? Array.from(frameworkSection.querySelectorAll<HTMLElement>('.po-anim'))
      : [];
    const paradoxSection = Array.from(
      document.querySelectorAll<HTMLElement>('.the-paradox-anim')
    );
    const threeSystemsText = Array.from(
      document.querySelectorAll<HTMLElement>('.three-systems-anim')
    );
    const threeSystemsItems = Array.from(
      document.querySelectorAll<HTMLElement>('.three-systems-item')
    );
    const proofSection = document.querySelector<HTMLElement>('#why-this-works');
    const proofCards = Array.from(
      document.querySelectorAll<HTMLElement>('#why-this-works .wiw-anim')
    );
    const whoSection = document.querySelector<HTMLElement>('#who-its-for');
    const whoCards = Array.from(
      document.querySelectorAll<HTMLElement>('#who-its-for .wif-anim')
    );
    const whoDividers = whoSection
      ? Array.from(whoSection.querySelectorAll<HTMLElement>('.wif-anim-divider'))
      : [];
    const ctaSection = document.querySelector<HTMLElement>('#cta-momentum');
    const listElements: HTMLElement[] = [
      ...paradoxSection,
      ...realCrisisItems,
      ...egBlocks,
      ...(whyCards ?? []),
      ...frameworkCards,
      ...frameworkCallouts,
      ...proofCards,
      ...whoCards,
      ...whoDividers,
    ];
    const blockElements: HTMLElement[] = [
      ...(takeaway ? [takeaway] : []),
      ...realCrisisBlocks,
      ...egBlockElements,
      ...(whySection ? [whySection] : []),
      ...(frameworkSection ? [frameworkSection] : []),
      ...(proofSection ? [proofSection] : []),
      ...(whoSection ? [whoSection] : []),
      ...(ctaSection ? [ctaSection] : []),
    ];

    if (!listElements.length && !blockElements.length) {
      return;
    }

    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealElement = (el: HTMLElement) => {
      el.classList.remove('opacity-0', 'translate-y-2', 'translate-y-1');
      el.classList.add('opacity-100', 'translate-y-0');
    };

    const activate = () => {
      listElements.forEach(revealElement);
      blockElements.forEach(revealElement);
      [...threeSystemsText, ...threeSystemsItems].forEach(revealElement);
    };

    if (prefersReduced) {
      activate();
      return;
    }

    const listObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            revealElement(el);
            listObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
    );

    const blockObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            revealElement(el);
            blockObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    );

    listElements.forEach((el) => listObserver.observe(el));
    blockElements.forEach((el) => blockObserver.observe(el));

    const threeSystemsObserver =
      threeSystemsText.length || threeSystemsItems.length
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const el = entry.target as HTMLElement;
                  revealElement(el);
                  if (threeSystemsObserver) {
                    threeSystemsObserver.unobserve(el);
                  }
                }
              });
            },
            { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
          )
        : null;

    threeSystemsText.forEach((el) => threeSystemsObserver?.observe(el));
    threeSystemsItems.forEach((el) => threeSystemsObserver?.observe(el));

    return () => {
      listObserver.disconnect();
      blockObserver.disconnect();
      threeSystemsObserver?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const section = document.getElementById('framework') as HTMLElement | null;
    const fill = document.getElementById('fw-progress-fill') as HTMLElement | null;

    if (!section || !fill) {
      return;
    }

    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      fill.style.width = '100%';
      return;
    }

    let running = false;
    let active = false;

    const onScroll = () => {
      if (!active || running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        if (!active) {
          running = false;
          return;
        }

        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const sectionHeight = rect.height;
        const sectionTopAbs = window.scrollY + rect.top;
        const viewportMid = window.scrollY + vh * 0.5;
        const denom = Math.max(1, sectionHeight - vh);
        const raw = (viewportMid - sectionTopAbs) / denom;
        const clamped = Math.max(0, Math.min(1, raw));
        fill.style.width = `${(clamped * 100).toFixed(1)}%`;
        running = false;
      });
    };

    const handleScroll = () => onScroll();
    const handleResize = () => onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          active = entry.isIntersecting;
          if (active) {
            onScroll();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(section);

    const rect = section.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      active = true;
      onScroll();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setCtaIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updatePreference = () => {
      const prefers = mediaQuery.matches;
      setCtaPrefersReducedMotion(prefers);
      if (prefers) {
        setCtaParticlesActive(false);
      }
    };

    updatePreference();

    const listener = () => updatePreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(listener);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', listener);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(listener);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || ctaPrefersReducedMotion) {
      return;
    }

    const target = document.getElementById('cta-momentum');
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCtaParticlesActive(true);
          } else {
            setCtaParticlesActive(false);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [ctaPrefersReducedMotion]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[data-scroll-link][href^="#"]')
    );

    const supportsSmoothScroll =
      'scrollBehavior' in document.documentElement.style;

    const onClick = (event: Event) => {
      const anchor = event.currentTarget as HTMLAnchorElement | null;
      if (!anchor) {
        return;
      }

      const hash = anchor.getAttribute('href') ?? '';
      if (!hash.startsWith('#')) {
        return;
      }

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) {
        return;
      }

      event.preventDefault();
      const prefersReduced =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!supportsSmoothScroll && !prefersReduced) {
        const rect = target.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }

      target.scrollIntoView({
        behavior: prefersReduced ? 'auto' : 'smooth',
        block: 'start',
      });
    };

    links.forEach((link) => link.addEventListener('click', onClick));
    return () => {
      links.forEach((link) => link.removeEventListener('click', onClick));
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const link = document.querySelector<HTMLElement>('.paradox-link');
    if (!link) {
      return;
    }

    const storageKey = 'paradox-link-pulsed';
    if (sessionStorage.getItem(storageKey)) {
      return;
    }

    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      sessionStorage.setItem(storageKey, '1');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            link.classList.add('pulse-once');
            sessionStorage.setItem(storageKey, '1');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(link);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const systemsSection = document.getElementById('how-it-works');
    if (!systemsSection) {
      return;
    }

    const footerEl = document.querySelector<HTMLElement>('footer');
    let systemsBeyondHalf = false;
    let footerVisible = false;

    const update = () => {
      setShowSystemsSticky(systemsBeyondHalf && !footerVisible);
    };

    const systemsObserver = new IntersectionObserver(
      ([entry]) => {
        systemsBeyondHalf = entry.intersectionRatio < 0.5;
        update();
      },
      { threshold: [0.5] }
    );
    systemsObserver.observe(systemsSection);

    let footerObserver: IntersectionObserver | undefined;
    if (footerEl) {
      footerObserver = new IntersectionObserver(
        ([entry]) => {
          footerVisible = entry.isIntersecting;
          update();
        },
        { threshold: 0.05 }
      );
      footerObserver.observe(footerEl);
    }

    return () => {
      systemsObserver.disconnect();
      footerObserver?.disconnect();
    };
  }, [setShowSystemsSticky]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-anim-type]')
    );

    if (!animatedElements.length) {
      return;
    }

    const applyActiveState = (el: HTMLElement, store = true) => {
      const type = el.dataset.animType;
      if (!type) {
        return;
      }

      if (type === 'fade-20') {
        el.classList.remove('fade-up-20-init');
        el.classList.add('fade-active');
      } else if (type === 'fade-10') {
        el.classList.remove('fade-up-10-init');
        el.classList.add('fade-active');
      } else if (type === 'scale-line') {
        el.classList.remove('scale-line-init');
        el.classList.add('scale-line-active');
      } else if (type === 'accent') {
        el.classList.remove('accent-pulse-init');
        el.classList.add('accent-pulse-active');
        if (store) {
          el.classList.add('accent-pulse-once');
          window.setTimeout(() => {
            el.classList.remove('accent-pulse-once');
          }, 1100);
        }
      }
    };

    const reducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const eligible: HTMLElement[] = [];

    animatedElements.forEach((el, index) => {
      const key = el.dataset.animKey ? `anim:${el.dataset.animKey}` : `anim:index:${index}`;
      if (reducedMotion) {
        applyActiveState(el, false);
        if (key) {
          sessionStorage.setItem(key, '1');
        }
        return;
      }

      if (key && sessionStorage.getItem(key)) {
        applyActiveState(el, false);
      } else {
        eligible.push(el);
      }
    });

    if (reducedMotion || !eligible.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const el = entry.target as HTMLElement;
          const key = el.dataset.animKey ? `anim:${el.dataset.animKey}` : undefined;
          applyActiveState(el);
          if (key) {
            sessionStorage.setItem(key, '1');
          }
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    eligible.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      return;
    }

    const layers = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax]')
    );

    if (!layers.length) {
      return;
    }

    const updateLayers = () => {
      const viewport = window.innerHeight;
      const range = viewport * 0.2;

      layers.forEach((layer) => {
        const parent = layer.parentElement;
        if (!parent) {
          return;
        }

        const rect = parent.getBoundingClientRect();
        const speed = Number(layer.dataset.parallaxSpeed ?? '1');
        const progress = Math.min(1, Math.max(0, (range - rect.top) / range));
        const translate = -20 * progress * speed;
        layer.style.transform = `translateY(${translate.toFixed(2)}px)`;
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          updateLayers();
          ticking = false;
        });
      }
    };

    updateLayers();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);


  return (
    <>
      <Header />
      <Navbar onCtaClick={trackCta} />
      <main className="bg-black text-white">
        <section id="hero" className="relative overflow-hidden py-20 md:py-24 px-6 md:px-16 lg:px-24 scroll-mt-28">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-l from-red-600/35 via-orange-400/18 via-red-700/28 to-transparent" aria-hidden="true" />
            <div className="absolute right-0 top-0 h-[900px] w-[900px] bg-gradient-radial from-[#EF4444]/48 via-[#FB923C]/28 to-transparent" aria-hidden="true" />
            <div className="absolute right-10 top-1/3 h-[700px] w-[700px] bg-gradient-radial from-orange-500/34 via-red-500/18 to-transparent blur-2xl" aria-hidden="true" />
            <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] bg-gradient-radial from-[#FB923C]/30 via-transparent to-transparent blur-3xl" aria-hidden="true" />
            <div className="absolute right-1/3 top-1/2 h-[420px] w-[420px] bg-gradient-radial from-white/22 via-white/6 to-transparent blur-3xl" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-radial from-black/55 via-transparent to-transparent" aria-hidden="true" />
            <div
              className="pointer-events-none absolute inset-0 mix-blend-screen opacity-22"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,0.12) 0.5px, transparent 0.5px)',
                backgroundSize: '18px 18px',
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-14"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '26px 26px',
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-12"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(255,255,255,0.05) 8%, transparent 8%), linear-gradient(225deg, rgba(255,255,255,0.04) 6%, transparent 6%)',
                backgroundSize: '42px 42px, 36px 36px',
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black to-transparent" aria-hidden="true" />
          </div>
          <Particles speed={0.8} className="hero-particles" />
          <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-start justify-center">
            <div className="flex max-w-3xl flex-col items-start">
              <p className="mb-4 label" style={{ letterSpacing: '0.15em' }}>
                Stay Human. Stay Creative.
              </p>
              <h1 className="hero-headline text-white max-w-3xl leading-[1.1]">
                Become Irreplaceable in the AI Era
              </h1>
              <p className="mt-5 body-large text-white/80 max-w-2xl">
                <span className="font-semibold text-white">A 90-day guided execution program built for burned-out creatives who need to</span>
                &apos;{' '}
                <span className="text-[#9AE6B4] font-semibold">pivot careers</span>,{' '}
                <span className="text-[#9AE6B4] font-semibold">launch businesses</span>,{' '}
                <span className="text-[#9AE6B4] font-semibold">or level up where they are</span> — without quitting their jobs.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={SPRINT1_COURSE_URL}
                  data-cta="sprint1"
                  onClick={() => trackCta('sprint1')}
                  className="cta-primary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm md:text-base"
                >
                  Start Sprint 1 — $97
                </Link>
                <Link
                  href="#how-it-works"
                  data-scroll-link
                  data-cta="framework"
                  onClick={() => trackCta('framework')}
                  className="cta-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base"
                >
                  Explore the 90-Day Framework →
                </Link>
              </div>
              <p className="mt-3 body-small text-white/60">
                10-day foundation • Money-back guarantee • Beta pricing
              </p>
            </div>
          </div>
        </section>

        <section
          id="join"
          aria-labelledby="bridge-title"
          className="relative -mt-20 md:-mt-24 lg:-mt-28 bg-gradient-to-b from-[rgba(64,10,12,0.35)] via-black/80 to-black py-10 md:py-14 scroll-mt-28"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl border border-[rgba(154,230,180,0.45)] bg-black/35 p-5 md:p-6 backdrop-blur-md shadow-[0_0_55px_-10px_rgba(154,230,180,0.5)]">
              <h2 id="bridge-title" className="mt-3 text-center section-headline text-white">
                The Human Edge Blueprint
              </h2>

              <p className="mt-3 text-center body max-w-2xl mx-auto">
                Free 10-day starter guide: 5 skills AI can't replace. 15 min/day.
              </p>

              <form
                action="#"
                method="POST"
                className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-[2fr_minmax(0,220px)_auto]"
              >
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className="rounded-md bg-black/60 px-4 py-3 text-sm text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-[var(--green-primary)]/40"
                />
                <select
                  className="rounded-md bg-black/60 px-4 py-3 text-sm text-white ring-1 ring-white/10"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Your goal (optional)
                  </option>
                  <option>Pivot careers</option>
                  <option>Start a business</option>
                  <option>Launch a side project</option>
                </select>
                <button
                  type="submit"
                  data-cta="leadmagnet"
                  onClick={() => trackCta('leadmagnet')}
                  className="rounded-full bg-[var(--green-primary)] px-6 py-3 font-medium text-black transition hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60"
                >
                  Get the Blueprint →
                </button>
              </form>

              <p className="mt-2 body-small text-center text-white/50">No spam. Only evolution.</p>
            </div>
          </div>
        </section>
        <RealCrisisCalm />

        <section id="problem" className="scroll-mt-28 bg-gradient-to-b from-black via-[#0C1013] to-[#0A1014] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mt-6 mb-10 max-w-3xl text-center md:mt-8 md:mb-12 lg:mx-0 lg:text-left">
              <p className="label mb-3" style={{ letterSpacing: '0.18em', color: 'var(--coral)' }}>
                THE EXECUTION GAP
              </p>
              <div className="max-w-2xl md:max-w-3xl space-y-2">
                <h2 className="eg-block fade-up text-3xl font-bold leading-tight opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[0ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none md:text-5xl">
                  Where Ambition Meets Resistance
                </h2>
              </div>
            </div>
            <div className="mt-10 grid items-start gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
              <div className="max-w-2xl md:max-w-3xl space-y-4">
                <p className="eg-block fade-up text-[17px] md:text-[18px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[140ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                  <strong className="text-[var(--green-primary)]">You don&apos;t need more ideas. You need the energy and structure to ship them.</strong>
                </p>
                <p className="eg-block fade-up text-[17px] md:text-[18px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[170ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                  You already know what to build—a pivot, a project, a path out. But you&apos;re stuck between knowing and doing.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-outside pl-5">
                  <li className="eg-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[0ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    Fear keeps your identity as &quot;employee.&quot;
                  </li>
                  <li className="eg-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[90ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    Burnout drains your drive — nothing left for dreams.
                  </li>
                  <li className="eg-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[180ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    Perfectionism traps you in endless drafts.
                  </li>
                </ul>
                <p className="eg-block fade-up text-[17px] md:text-[18px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[210ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                  This isn&apos;t a motivation problem — it&apos;s a <strong>human operating system</strong> problem.
                </p>
                <p className="eg-block fade-up text-[17px] md:text-[18px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[240ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                  You can&apos;t create freedom while running on survival.
                </p>
              </div>
              <div className="grid gap-4 self-start md:gap-5 xl:translate-x-4">
                <div className="rounded-xl bg-[color:color-mix(in_srgb,_var(--coral)_10%,_transparent)] ring-1 ring-[color:color-mix(in_srgb,_var(--coral)_45%,_transparent)] p-5 text-left shadow-lg shadow-black/30 md:p-6">
                  <p className="eg-block fade-up mt-4 text-xl md:text-2xl font-semibold opacity-90 text-[var(--coral)] opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[160ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    The Cost of Waiting
                  </p>
                  <ul className="mt-3 space-y-2 list-disc list-outside pl-5">
                    <li className="eg-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[0ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                      Every month you wait, your energy funds someone else&apos;s dream
                    </li>
                    <li className="eg-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[90ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                      Creators half your age are shipping six-figure ideas
                    </li>
                    <li className="eg-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[180ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                      AI is moving faster than your recovery
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              id="eg-takeaway"
              className="mt-12 text-center opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <div className="eg-block fade-up mx-auto max-w-3xl rounded-lg border border-green-400/60 bg-white/8 px-6 py-6 text-left opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[220ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none shadow-[0_15px_45px_rgba(10,20,15,0.45)]">
                <p className="font-semibold text-base md:text-lg text-red-400">
                  <span className="font-semibold">The Shift</span> — the gap between <em>employed</em> and <em>free</em> isn&apos;t knowledge; it&apos;s execution.
                </p>
                <p className="mt-2 text-base md:text-lg leading-relaxed opacity-90">
                  Execution starts with restored energy, emotional resilience, and a daily system for progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="paradox" className="relative pb-16 pt-20 md:pb-20 md:pt-24 scroll-mt-28">
          <div className="mx-auto max-w-3xl px-6 opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] the-paradox-anim">
            <p
              className="fade-up-10-init mb-2 label"
              style={{ letterSpacing: '0.15em', color: '#38BDF8' }}
              data-anim-type="fade-10"
              data-anim-key="paradox-eyebrow"
            >
              The Paradox
            </p>
            <h2
              className="fade-up-20-init section-headline"
              data-anim-type="fade-20"
              data-anim-key="paradox-heading"
            >
              Your Creative Energy Is Your Competitive Edge
            </h2>

            <p
              className="fade-up-10-init mt-4 text-base md:text-lg leading-relaxed text-white/90"
              data-anim-type="fade-10"
              data-anim-key="paradox-copy-1"
            >
              AI can replicate your output. It can&apos;t replicate your <span className="font-semibold text-white">creative energy</span>—the fuel that turns ideas into momentum, fear into focus, and frustration into finished work.
            </p>

            <p
              className="fade-up-10-init mt-3 text-base md:text-lg leading-relaxed text-white/80"
              data-anim-type="fade-10"
              data-anim-key="paradox-copy-2"
            >
              For the first time in history, <span className="font-semibold text-[var(--green-primary)]">a single creative can build a business or movement without permission.</span>
            </p>

            <p
              className="fade-up-10-init mt-3 text-base md:text-lg leading-relaxed text-white/80"
              data-anim-type="fade-10"
              data-anim-key="paradox-copy-3"
            >
              But only if you protect that energy instead of letting burnout drain it.
            </p>

            <p
              className="fade-up-10-init mt-3 text-base md:text-lg leading-relaxed text-white/80"
              data-anim-type="fade-10"
              data-anim-key="paradox-copy-4"
            >
              The system that exhausted you also taught you what not to do. Harness your creative energy, channel it with precision, and what burned you out becomes your launchpad.
            </p>

            <p
              className="fade-up-10-init mt-4 text-base md:text-lg leading-relaxed text-white/90"
              data-anim-type="fade-10"
              data-anim-key="paradox-copy-5"
            >
              That&apos;s where the 90-Day Framework begins: building a life AI can&apos;t replace.
            </p>

            {/* Bridge to the next section */}
            <div className="mt-6 flex items-center gap-3 text-sm md:text-base text-white/80">
              <span
                className="scale-line-init inline-block h-[2px] w-10 rounded-full bg-[var(--green-primary)]/70"
                data-anim-type="scale-line"
                data-anim-key="paradox-divider"
              ></span>
              <span
                className="fade-up-10-init"
                data-anim-type="fade-10"
                data-anim-key="paradox-bridge"
              >
                You&apos;ve seen the paradox — here&apos;s how we make execution inevitable.
              </span>
            </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#cta-momentum"
              data-scroll-link
              data-cta="sprint1"
              onClick={() => trackCta('sprint1')}
              className="fade-up-10-init inline-flex items-center justify-center rounded-full bg-[var(--green-primary)] px-7 py-3 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60 md:px-8 md:py-3.5 md:text-base"
              data-anim-type="fade-10"
              data-anim-key="paradox-primary-cta"
            >
              Start Sprint 1 — $97
            </Link>
            <Link
              href="#how-it-works"
              data-scroll-link
              data-cta="framework"
              onClick={() => trackCta('framework')}
              className="fade-up-10-init inline-flex items-center justify-center rounded-full border border-[var(--green-primary)] px-6 py-3 text-sm font-medium text-[var(--green-primary)] transition hover:bg-[var(--green-primary)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60 md:px-6 md:py-3 md:text-base"
              data-anim-type="fade-10"
              data-anim-key="paradox-secondary-cta"
              style={{ transitionDelay: '80ms' }}
            >
              See the Framework →
            </Link>
          </div>
          <div className="mt-4">
            <Link
              href="#how-it-works"
              className="paradox-link fade-up-10-init inline-flex items-center gap-2 text-sm md:text-base font-medium text-[var(--green-primary)] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/40 rounded px-1"
              data-scroll-link
              data-cta="framework"
              onClick={() => trackCta('framework')}
              data-anim-type="fade-10"
              data-anim-key="paradox-link"
            >
              View the 3 Systems <span aria-hidden="true">↓</span>
            </Link>
          </div>
          </div>
          <div
            aria-hidden="true"
            className="parallax-layer pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-black/70 to-black"
            data-parallax="layer"
            data-parallax-speed="0.7"
          />
        </section>

        <section
          id="how-it-actually-works"
          className="relative mx-auto mt-12 max-w-6xl px-6 pb-16 pt-12 text-white md:mt-20 md:pb-20 md:pt-16 scroll-mt-28"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#050505]/90 px-6 py-12 md:px-12 md:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-0 h-48 rounded-[32px] bg-[radial-gradient(circle,_rgba(154,230,180,0.25),_transparent_60%)] blur-3xl opacity-50"
            />
            <div className="relative z-10 text-left">
              <p className="label" style={{ letterSpacing: '0.2em', color: '#9AE6B4' }}>
                HOW IT ACTUALLY WORKS
              </p>
              <h2 className="mt-3 section-headline text-white">
                The Transformation + The Execution = Your Results
              </h2>
              <p className="mt-4 body text-white/80 max-w-3xl">
                The framework isn&apos;t just about mindset shifts. It&apos;s about giving you the execution infrastructure to actually do the work.
              </p>
            </div>

            <div className="relative z-10 mt-12 flex flex-col gap-6 md:flex-row md:items-stretch md:gap-8">
              {howItActuallyWorksColumns.map((column, index) => (
                <div
                  key={column.title}
                  className="relative flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-left backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: '#9AE6B4' }}>
                    {column.title}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-white">{column.descriptor}</p>
                  <ul className="mt-4 space-y-2 text-base leading-relaxed text-white/80">
                    {column.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#9AE6B4]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {index < howItActuallyWorksColumns.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[-42px] top-1/2 hidden -translate-y-1/2 md:flex"
                    >
                      <svg
                        width="64"
                        height="32"
                        viewBox="0 0 64 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-[0_0_12px_rgba(154,230,180,0.35)]"
                      >
                        <path d="M4 16h44" stroke="#9AE6B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M44 8l12 8-12 8" stroke="#9AE6B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="relative z-10 mt-12 text-center text-lg font-semibold text-white md:text-xl">
              &quot;You bring the ambition. We remove the blocks AND give you the execution system.&quot;
            </p>
            <div className="relative z-10 mt-6 flex justify-center">
              <Link
                href="#framework"
                data-scroll-link
                data-cta="hiaw-see-framework"
                onClick={() => trackCta('hiaw-see-framework')}
                className="inline-flex items-center justify-center rounded-full bg-[var(--green-primary)] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_10px_40px_rgba(154,230,180,0.35)] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60 md:text-base"
              >
                SEE THE FRAMEWORK →
              </Link>
            </div>
          </div>
        </section>

        {/* =========================
           WHO IT’S FOR
           ========================= */}
        <section
          id="who-its-for"
          className="relative mt-24 mx-auto max-w-6xl px-6 py-20 md:py-24 opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <header className="max-w-3xl">
            <p
              className="fade-up-10-init mb-2 label"
              style={{ letterSpacing: '0.15em' }}
              data-anim-type="fade-10"
              data-anim-key="who-eyebrow"
            >
              WHO IT’S FOR
            </p>
            <h2
              className="fade-up-20-init section-headline"
              data-anim-type="fade-20"
              data-anim-key="who-heading"
            >
              Built for Pioneers Who Are
            </h2>
            <div
              aria-hidden="true"
              className="wif-anim-divider scale-line-init mt-3 h-[2px] w-16 bg-green-400/40 rounded-full opacity-0 translate-y-1 transition-all duration-500 ease-out delay-[120ms]"
              data-anim-type="scale-line"
              data-anim-key="who-divider"
            />
            <p
              className="fade-up-10-init mt-3 body"
              data-anim-type="fade-10"
              data-anim-key="who-subcopy"
            >
              If you’re ambitious, burned out by corporate, and ready to build something you own — this was designed for you.
            </p>
          </header>

          <div className="mt-10 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
            <article className="wif-anim delay-0 card path-card fade-in-section opacity-0 translate-y-2">
              <h3 className="card-label">Pivoting</h3>
              <p className="mt-3 body-small">
                Burned out, undervalued, or ready for a career shift.
              </p>
              <p className="mt-2 body-small">
                You want to leverage your skills in a new direction.
              </p>
            </article>

            <article className="wif-anim delay-[120ms] card path-card fade-in-section opacity-0 translate-y-2">
              <h3 className="card-label">Building</h3>
              <p className="mt-3 body-small">
                Turning your creative skills into income.
              </p>
              <p className="mt-2 body-small">
                You want ownership, autonomy, and a life you control.
              </p>
            </article>

            <article className="wif-anim delay-[240ms] card path-card fade-in-section opacity-0 translate-y-2">
              <h3 className="card-label">Evolving</h3>
              <p className="mt-3 body-small">
                Leveling up where you already are.
              </p>
              <p className="mt-2 body-small">
                You want to future-proof your skills and become indispensable.
              </p>
            </article>
          </div>
        </section>

        <section
          id="your-path"
          className="relative mx-auto max-w-6xl px-6 py-20 md:py-24 scroll-mt-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-headline uppercase tracking-[0.2em] text-white">
              HOW PIONEERS APPLY THE FRAMEWORK
            </h2>
            <p className="mt-4 body text-white/80">
              The system is universal. Here&apos;s how different people use it.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {journeyCards.map((card) => (
              <article
                key={card.title}
                className="journey-card card path-card fade-in-section flex h-full flex-col"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {card.icon}
                  </span>
                  <div>
                    <p className="card-label">{card.eyebrow}</p>
                    <h3 className="mt-1 card-title text-white">{card.title}</h3>
                  </div>
                </div>
                <p className="mt-4 body">{card.body}</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#9AE6B4]">
                    THE 90-DAY ARC
                  </p>
                  <p className="mt-3 text-sm text-white/80">{card.arc}</p>
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#9AE6B4]">
                    WHAT YOU&apos;LL HAVE
                  </p>
                  <ul className="mt-3 space-y-2 text-base text-white">
                    {card.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 text-[#9AE6B4]" aria-hidden="true">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#f87171]">
                    YOUR BIGGEST OBSTACLE
                  </p>
                  <div className="card-challenge">
                    <p>{card.challenge}</p>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Link
                    href={DISCOVERY_CALL_URL}
                    data-cta={card.ctaId}
                    onClick={() => trackCta(card.ctaId)}
                    className="inline-flex w-full items-center justify-center rounded-full bg-[var(--green-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60"
                  >
                    {card.ctaLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-4xl px-6 pb-20 text-center md:pb-24">
          <div className="rounded-[32px] border border-white/10 bg-white/5 px-8 py-12 backdrop-blur">
            <p className="label" style={{ letterSpacing: '0.2em' }}>
              ALL PATHS START HERE
            </p>
            <p className="mt-4 text-xl font-semibold text-white md:text-2xl">
              No matter where you&apos;re headed, Sprint 1 breaks the fear, resistance, and identity blocks that keep you stuck.
            </p>
            <p className="mt-3 text-base text-white/80">
              Get moving in 10 days. Build momentum from there.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href={SPRINT1_COURSE_URL}
                data-cta="paths-sprint1"
                onClick={() => trackCta('paths-sprint1')}
                className="inline-flex items-center justify-center rounded-full bg-[var(--green-primary)] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60"
              >
                START SPRINT 1 — $97
              </Link>
              <Link
                href="#pricing"
                data-scroll-link
                data-cta="paths-pricing"
                onClick={() => trackCta('paths-pricing')}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                SEE PRICING →
              </Link>
            </div>
          </div>
        </section>

        <div
          aria-hidden="true"
          className="scale-line-init h-px w-full bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent"
          data-anim-type="scale-line"
          data-anim-key="divider-paradox-three"
        />
 
        <section id="how-it-works" className="relative bg-black pt-16 pb-24 md:pt-24 md:pb-24 text-white scroll-mt-28">
          <div
            aria-hidden="true"
            className="parallax-layer pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#111] via-transparent to-transparent"
            data-parallax="layer"
            data-parallax-speed="0.5"
          />
          <div className="three-systems-anim mx-auto max-w-4xl px-6 sm:px-4 md:px-0 opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <p
              className="fade-up-10-init mb-4 label"
              style={{ letterSpacing: '0.15em' }}
              data-anim-type="fade-10"
              data-anim-key="three-systems-eyebrow"
            >
              How It Works
            </p>
            <h2
              className="fade-up-20-init section-headline text-white"
              data-anim-type="fade-20"
              data-anim-key="three-systems-heading"
            >
            Make Execution Inevitable
            </h2>
            <p
              className="fade-up-10-init mt-6 max-w-2xl body"
              data-anim-type="fade-10"
              data-anim-key="three-systems-lede"
            >
              Most programs teach what to do. This system rewires how you operate—removing the internal blocks and external chaos that keep you stuck.
            </p>

            <div className="mt-10">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/70">
                What Happens Every Day
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {dailyRoutineCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/5 bg-white/[0.04] p-5 text-left"
                  >
                    <div className="text-3xl" aria-hidden="true">
                      {card.icon}
                    </div>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      {card.title}
                    </p>
                    <p className="mt-3 text-sm text-white/80">{card.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Time Commitment: 15-30 min/day. That&apos;s it.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/70">
                The Complete System
              </p>
              <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
            </div>

            <div className="mt-10 space-y-10 md:mt-16 md:space-y-16">
              {[
                {
                  title: 'Low-Lift Learning',
                  eyebrow: 'System 1',
                  points: [
                    'Short, ADHD-friendly lessons that get you moving fast',
                    'Cinematic audio shifts your emotional state so action feels natural',
                    "20% learning, 80% doing — constant, measurable progress",
                  ],
                  lead: 'Bite-sized lessons designed for burned-out brains.',
                  delay: '80ms',
                },
                {
                  title: 'Clear Daily Micro-Goals',
                  eyebrow: 'System 2',
                  points: [
                    'One goal a day, calibrated to your energy',
                    "Small 4% pushes that keep you growing",
                    "Micro-sprints, not hustle fantasies",
                  ],
                  lead: 'Small wins compound into massive transformation.',
                  delay: '160ms',
                },
                {
                  title: 'Accountability Failsafes',
                  eyebrow: 'System 3',
                  points: [
                    'AI Co-Pilot tailored to your life — zero overload, just direction',
                    'Accountability pods keep you showing up',
                    'Physical tools that hard-wire commitment',
                  ],
                  lead: "Multiple layers ensure you don't drop off.",
                  delay: '240ms',
                },
              ].map((card, idx) => (
                <div
                  key={card.title}
                  className="three-systems-item card opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transitionDelay: card.delay }}
                >
                  <p className="card-label">{card.eyebrow}</p>
                  <h3
                    className="fade-up-20-init card-title text-white mb-2"
                    data-anim-type="fade-20"
                    data-anim-key={`three-systems-card${idx + 1}-heading`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="fade-up-10-init body"
                    data-anim-type="fade-10"
                    data-anim-key={`three-systems-card${idx + 1}-copy`}
                  >
                    <strong className="text-white">{card.lead}</strong>
                  </p>
                  <ul
                    className="fade-up-10-init mt-3 card-bullets"
                    data-anim-type="fade-10"
                    data-anim-key={`three-systems-card${idx + 1}-copy-detail`}
                  >
                    {card.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div
              className="fade-up-10-init mt-14 text-center md:mt-20"
              data-anim-type="fade-10"
              data-anim-key="three-systems-closer"
            >
              <p className="mx-auto max-w-2xl text-base text-white/80 md:text-lg md:leading-relaxed">
                This isn&apos;t another course you watch and forget. It&apos;s a sensory-driven system that rebuilds how you operate—so execution becomes inevitable, not aspirational.
              </p>
              <Link
                href="#framework"
                data-scroll-link
                data-cta="three-systems-see-framework"
                onClick={() => trackCta('three-systems-see-framework')}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60"
              >
                See the Framework →
              </Link>
            </div>
          </div>
        </section>

        <section
          id="framework"
          className="relative mx-auto max-w-6xl px-6 py-20 md:py-24 scroll-mt-28"
        >
          <div className="mx-auto max-w-3xl text-left lg:mx-0">
            <p className="label" style={{ letterSpacing: '0.15em' }}>THE 90-DAY FRAMEWORK</p>
            <h2 className="mt-3 section-headline">
              Stay Human. Stay Creative.
              <br className="hidden md:block" />
              Become Irreplaceable
            </h2>
            <p className="mt-4 body">
              The 90-day execution system that restores your energy, locks in focus, and gets your work shipped—without quitting your job.
            </p>
            <p className="mt-3 body-small">
              Every phase builds on the last so you stop stalling, build momentum, and become unmissable in 90 days.
            </p>
            <div aria-hidden="true" className="mt-6 h-[2px] w-32 overflow-hidden rounded-full bg-white/10">
              <div
                id="fw-progress-fill"
                className="h-full rounded-full bg-green-400/60 transition-[width] duration-300 ease-out"
                style={{ width: '0%' }}
              />
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {phaseCards.map((phase) => (
              <article
                key={phase.label}
                className="fw-anim card phase-card fade-in-section flex h-full flex-col opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transitionDelay: phase.delay }}
              >
                <p className="card-label">{phase.label}</p>
                <h3 className="mt-2 card-title text-white">{phase.subtitle}</h3>
                <p className="mt-3 body whitespace-pre-line">
                  {phase.description}
                </p>
                <div className="mt-5">
                  <p className="card-label">Sprints inside</p>
                  <ul className="mt-3 space-y-2">
                    {phase.sprints.map((sprint) => (
                      <li key={sprint} className="flex items-center gap-3 body">
                        <span className="w-1.5 h-1.5 bg-[#9AE6B4] rounded-full flex-shrink-0"></span>
                        {sprint}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto card-outcome whitespace-pre-line">
                  <p className="body">
                    <strong>{phase.outcomeHighlight}:</strong> {phase.outcomeText}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-2xl font-bold text-white">This isn&apos;t theory. It&apos;s execution.</p>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-white/80">
              Every sprint gives you exactly what you need to move forward—immersive lessons, daily micro-goals, and accountability that keeps you on track.
            </p>
            <Link
              href={SPRINT1_COURSE_URL}
              data-cta="framework-sprint1"
              onClick={() => trackCta('framework-sprint1')}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--green-primary)] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60"
            >
              Start Sprint 1 — $97
            </Link>
            <p className="mt-3 text-sm text-white/60">Sprint 1 launches November 1. Lock in beta pricing.</p>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-20 md:pb-24">
          <div className="mx-auto mt-4 max-w-3xl rounded-2xl border-2 border-[#9AE6B4] bg-[#9AE6B4]/10 p-8 text-center shadow-[0_0_60px_rgba(154,230,180,0.2)]">
            <p className="text-2xl font-bold text-white">&quot;Stop planning. Start building.&quot;</p>
            <p className="mt-4 text-base text-white/80">
              You can&apos;t build vision on burnout. You can&apos;t ship while frozen by fear. Sprint 1 interrupts the drains—fear, distraction, identity—so everything else becomes possible.
            </p>
          </div>
          <div
            id="sprint-1-details"
            className="mx-auto mt-16 max-w-4xl space-y-6 rounded-3xl border-l-4 border-[#9AE6B4] bg-[#9AE6B4]/10 p-8 shadow-[0_0_60px_rgba(154,230,180,0.2)]"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Why Sprint 1 Comes First</h3>
              <p className="text-lg text-white/80">
                You can&apos;t build vision on burnout. You can&apos;t enter flow while frozen by fear. You can&apos;t ship while distracted and depleted.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What Sprint 1 Does:</h4>
              <div className="space-y-3 text-base text-white/80">
                {sprintOneLessons.map((lesson) => (
                  <div key={lesson.title}>
                    <p className="font-semibold text-white">{lesson.title}</p>
                    <p className="text-sm text-white/70">{lesson.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">By Day 10, you&apos;ll have:</h4>
              <ul className="space-y-2 text-base text-white/80">
                <li>✅ Broken your fear pattern (identified + interrupted)</li>
                <li>✅ Taken action you&apos;ve been avoiding for weeks/months</li>
                <li>✅ Shipped something small (proof you can execute)</li>
                <li>✅ Clarity on who you&apos;re becoming vs. who you&apos;re leaving behind</li>
              </ul>
            </div>
            <p className="text-base font-semibold text-[#9AE6B4]">Tools You Get: {sprintOneTools.join(' • ')}</p>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-[var(--green-primary)] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90"
            >
              Start Sprint 1 — Build Now
            </Link>
          </div>
        </section>

        <section
          id="how-it-works-detail"
          className="relative mx-auto max-w-6xl px-6 py-20 md:py-24 opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <header className="max-w-3xl">
            <p className="mb-2 label" style={{ letterSpacing: '0.15em' }}>THE PROOF</p>
            <h2 className="section-headline">What Makes This Different</h2>
            <p className="mt-3 body">
              Most programs teach what to do. This system rewires how you operate — blending behavioral psychology, AI accountability, and creative-energy optimization — so execution becomes automatic.
            </p>
          </header>

          <div className="mt-10 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
            {[
              {
                title: "Cinematic Audio Transformation",
                bullets: [
                  "Spatial audio shifts your nervous system before you even \"try\"—cinematic stories rewire your state at the subconscious level",
                  "Multi-sensory immersion bypasses resistance—you move because you feel different, not because you forced yourself",
                ],
                delay: '0ms',
              },
              {
                title: "AI-Powered Personalization",
                bullets: [
                  "Your system adapts to YOUR patterns—not generic advice you'll ignore",
                  "Get only what you need, when you need it—no drowning in content",
                ],
                delay: '80ms',
              },
              {
                title: "Train Skills AI Can't Replace",
                bullets: [
                  "Build your human edge: divergent thinking, emotional intelligence, creative problem-solving",
                  "AI makes you faster, not obsolete—learn to wield it as your co-pilot",
                ],
                delay: '160ms',
              },
              {
                title: "Ship Real Work, Not Just Insights",
                bullets: [
                  "Every sprint delivers tangible output—portfolio pieces, client work, job interviews",
                  "Inner transformation AND outer proof—both matter",
                ],
                delay: '240ms',
              },
            ].map((card) => (
              <article
                key={card.title}
                className="wiw-anim card phase-card fade-in-section h-full flex flex-col opacity-0 translate-y-2 transition-all duration-500 ease-out"
                style={{ transitionDelay: card.delay }}
              >
                <div className="flex items-center gap-3">
                  <div className="card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      className="opacity-90"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 8v4l2.5 2.5" />
                    </svg>
                  </div>
                  <h3 className="card-title text-white">{card.title}</h3>
                </div>
                <div className="mt-4 space-y-3">
                  {card.bullets.map((bullet) => (
                    <p key={bullet} className="body">{bullet}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="bg-gradient-to-b from-[#0A0A0A] via-[#0A1014] to-[#000000] pt-16 pb-12 md:pt-20 md:pb-16">
          <div className="mx-auto max-w-5xl space-y-3 px-4 text-center sm:px-6 lg:px-8">
            <p className="label" style={{ letterSpacing: '0.2em' }}>
              START TODAY
            </p>
            <h2 className="section-headline">Start Small. Build Momentum.</h2>
            <p className="body text-white/80">
              No one commits to 90 days on Day 1. Start with Sprint 1. See results. Then decide.
            </p>
            <p className="body">
              Beta pioneers shape the system. Lock in founder pricing. Build a life AI can&apos;t replace.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {pricingCards.map((card) => (
                <div
                  key={card.title}
                  className={`flex h-full flex-col p-8 text-left ${card.highlight ? 'card card-emphasis' : 'card'}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                        card.highlight ? 'bg-[var(--green-primary)] text-black' : 'border border-white/20 text-white/70'
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 card-title text-white">{card.title}</h3>
                  <div className="mt-4 text-5xl font-bold text-white">{card.price}</div>
                  <p className="mt-2 body-small">{card.priceNote}</p>
                  <p className="mt-6 body">{card.description}</p>
                  <ul className="mt-6 card-bullets">
                    {card.included.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href={card.href}
                    className={`mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold uppercase tracking-wide transition ${
                      card.highlight
                        ? 'bg-[var(--green-primary)] text-black shadow-lg shadow-black/30 hover:opacity-90'
                        : 'border border-[var(--green-primary)] bg-transparent text-[var(--green-primary)] hover:bg-[var(--green-primary)]/10'
                    }`}
                  >
                    {card.ctaLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-black/60 p-8 text-center shadow-[0_0_60px_rgba(0,0,0,0.4)] fade-in-section">
            <h3 className="card-title text-[var(--coral)]">100% Money-Back Guarantee</h3>
            <p className="mt-4 body">
              Complete Sprint 1 (all 3 lessons + tools) and use the AI Co-Pilot for 10 days.
              <br />
              If you don&apos;t see measurable progress in your ability to take action and build a life you own, email us for a full refund.
              <br />
              We&apos;re not asking you to trust the system. We&apos;re asking you to test it.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 body-small">
              <span>🔒 Secure checkout</span>
              <span>💳 All payment methods</span>
              <span>⚡ Instant access</span>
            </div>
          </div>
          <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 lg:px-8 fade-in-section">
            <h3 className="text-center card-title">Common Questions</h3>
            <div className="mt-10 space-y-4">
              {faqItems.map((item) => {
                const isOpen = openFaq === item.question;
                return (
                  <div key={item.question} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(15,20,30,0.35)]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : item.question)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="card-title text-white">{item.question}</span>
                      <span className={`text-3xl text-[var(--coral)] transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">
                        +
                      </span>
                    </button>
                    {isOpen ? <div className="border-t border-white/10 px-6 py-6 body">{item.answer}</div> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="cta-momentum" className="bg-gradient-to-r from-[#9AE6B4]/20 via-[#68D391]/10 to-transparent py-24 scroll-mt-28">
          <div className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-white/10 bg-black/40 p-10 text-center shadow-[0_0_80px_rgba(154,230,180,0.18)]">
            <h2 className="section-headline">Your Creative Energy Is Your Greatest Asset</h2>
            <p className="body">
              Every day you wait, AI automates another skill. But a life AI can&apos;t replace? That&apos;s yours to build.
              <br />
              <br />
              90 days from now: shipped work, sustainable systems, a life you own.
              <br />
              <br />
              Or another abandoned course.
              <br />
              <br />
              The window is closing. Stop planning. Start building.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href={SPRINT1_COURSE_URL}
                data-cta="sprint1"
                onClick={() => trackCta('sprint1')}
                className="inline-flex items-center justify-center rounded-full bg-[var(--green-primary)] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60"
              >
                Start Sprint 1 — Build Now
              </Link>
              <Link
                href="/journey"
                data-cta="framework"
                onClick={() => trackCta('framework')}
                className="inline-flex items-center justify-center rounded-full border border-[var(--green-primary)] bg-transparent px-8 py-4 text-base font-semibold uppercase tracking-wide text-[var(--green-primary)] transition-colors hover:bg-[var(--green-primary)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60"
              >
                Pre-Order Full Journey — $697
              </Link>
            </div>
            <p className="body-small">Questions? Email support@pioneeryourcreative.com</p>
          </div>
        </section>
      </main>
      <Footer />
      <Subnav />
    </>
  );
}
