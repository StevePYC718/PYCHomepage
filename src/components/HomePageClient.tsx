'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Particles } from '@/components/Particles';

const HERO_IO_THRESHOLD = 0.2;
const HERO_IO_ROOT_MARGIN = '0px 0px -10% 0px';

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

const SPRINT1_COURSE_URL = 'https://pioneeryourcreative.thinkific.com/courses/sprint1' as const;

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
      "80% doing beats 100% learning. Sprint 1 isn't passive consumption. Your AI Co-Pilot checks in daily, the community sees your progress, and every lesson ends with action. It's harder to disappear than to execute. Not education. Execution.",
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


function Constellation() {
  const debugConstellation = false;

  return (
    <div className={`pointer-events-none absolute inset-0 z-0 ${debugConstellation ? 'debug-constellation' : ''}`}>
      <div className="constellation-inner">
        <svg className="constellation-svg" viewBox="0 0 900 600" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ADE80" stopOpacity="1" />
            <stop offset="50%" stopColor="#9AE6B4" stopOpacity="1" />
            <stop offset="100%" stopColor="#68D391" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path className="constellation-path path-draw-1" d="M120 450 L200 380 L180 300" />
        <path className="constellation-path path-draw-2" d="M200 380 L280 350 L350 320" />
        <path className="constellation-path path-draw-3" d="M350 320 L420 280 L450 200" />
        <path className="constellation-path path-draw-4" d="M420 280 L480 300" />
        <path className="constellation-path path-draw-5" d="M480 300 L580 280" />
        <path className="constellation-path path-draw-6" d="M580 280 L600 350 L680 380" />
        <path className="constellation-path path-draw-7" d="M680 380 L750 350 L800 280 L780 200" />
        <path
          className="journey-path journey-draw"
          d="M120 450 Q200 380 350 320 T450 200 Q580 250 680 380 T800 280"
          stroke="url(#journeyGradient)"
        />
        <circle className="constellation-star star-appear-1" cx="120" cy="450" r="6" />
        <circle className="star-core star-appear-1" cx="120" cy="450" r="3" />
        <circle className="constellation-star star-appear-2" cx="200" cy="380" r="8" />
        <circle className="star-core star-appear-2" cx="200" cy="380" r="4" />
        <circle className="constellation-star star-appear-3" cx="350" cy="320" r="10" />
        <circle className="star-core star-appear-3" cx="350" cy="320" r="5" />
        <circle className="constellation-star star-appear-4" cx="450" cy="200" r="8" />
        <circle className="star-core star-appear-4" cx="450" cy="200" r="4" />
        <circle className="constellation-star star-appear-5" cx="580" cy="280" r="10" />
        <circle className="star-core star-appear-5" cx="580" cy="280" r="5" />
        <circle className="constellation-star star-appear-6" cx="680" cy="380" r="8" />
        <circle className="star-core star-appear-6" cx="680" cy="380" r="4" />
        <circle className="constellation-star star-appear-7" cx="800" cy="280" r="12" />
        <circle className="star-core star-appear-7" cx="800" cy="280" r="6" />
        <text className="stage-label label-fade-1" x="120" y="485">
          BREAK FREE
        </text>
        <text className="stage-description label-fade-1" x="120" y="500">
          Turn fear into fuel
        </text>
        <text className="stage-label label-fade-2" x="200" y="365">
          IGNITE PURPOSE
        </text>
        <text className="stage-description label-fade-2" x="200" y="350">
          Clarify your vision
        </text>
        <text className="stage-label label-fade-3" x="350" y="305">
          MASTER MINDSET
        </text>
        <text className="stage-description label-fade-3" x="350" y="290">
          Step into growth
        </text>
        <text className="stage-label label-fade-4" x="450" y="185">
          CLEAR &amp; FUEL
        </text>
        <text className="stage-description label-fade-4" x="450" y="170">
          Detox distractions
        </text>
        <text className="stage-label label-fade-5" x="580" y="265">
          BUILD RESILIENCE
        </text>
        <text className="stage-description label-fade-5" x="580" y="250">
          Sustainable strength
        </text>
        <text className="stage-label label-fade-6" x="680" y="415">
          THINK ALCHEMIST
        </text>
        <text className="stage-description label-fade-6" x="680" y="430">
          Bold ideas emerge
        </text>
        <text className="stage-label label-fade-7" x="760" y="265">
          SHIP &amp; SCALE
        </text>
        <text className="stage-description label-fade-7" x="760" y="250">
          Projects launched
        </text>
        </svg>
      </div>
      <style jsx>{`
        .debug-constellation {
          outline: 1px solid rgba(0, 255, 0, 0.25);
        }

        .constellation-inner {
          position: absolute;
          left: 65%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: clamp(300px, 55vw, 520px);
          opacity: 0.9;
        }

        .constellation-svg {
          display: block;
          width: 100%;
          height: auto;
        }

        @media (max-width: 767px) {
          .constellation-inner {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.7;
          }
        }

        @media (min-width: 1280px) {
          .constellation-inner {
            opacity: 1;
          }
        }

        .constellation-path {
          stroke: #4ade80;
          stroke-width: 1;
          fill: none;
          stroke-linecap: round;
          opacity: 0.4;
          filter: drop-shadow(0 0 2px rgba(74, 222, 128, 0.4));
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }

        .journey-path {
          stroke: #9ae6b4;
          stroke-width: 2;
          fill: none;
          stroke-linecap: round;
          opacity: 0.8;
          filter: drop-shadow(0 0 6px rgba(154, 230, 180, 0.6));
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
        }

        .path-draw-1 {
          animation: drawPath 1s ease-out 2s forwards;
        }

        .path-draw-2 {
          animation: drawPath 1s ease-out 2.5s forwards;
        }

        .path-draw-3 {
          animation: drawPath 1s ease-out 3s forwards;
        }

        .path-draw-4 {
          animation: drawPath 1s ease-out 3.5s forwards;
        }

        .path-draw-5 {
          animation: drawPath 1s ease-out 4s forwards;
        }

        .path-draw-6 {
          animation: drawPath 1s ease-out 4.5s forwards;
        }

        .path-draw-7 {
          animation: drawPath 1s ease-out 5s forwards;
        }

        .journey-draw {
          animation: drawPath 3s ease-out 5.5s forwards;
        }

        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }

        .constellation-star {
          fill: #9ae6b4;
          opacity: 0;
          filter: drop-shadow(0 0 4px rgba(154, 230, 180, 0.6));
        }

        .star-core {
          fill: #ffffff;
          opacity: 0;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.7));
        }

        .star-appear-1 {
          animation: starBurst 0.5s ease-out 0.5s forwards;
        }

        .star-appear-2 {
          animation: starBurst 0.5s ease-out 0.8s forwards;
        }

        .star-appear-3 {
          animation: starBurst 0.5s ease-out 1.1s forwards;
        }

        .star-appear-4 {
          animation: starBurst 0.5s ease-out 1.4s forwards;
        }

        .star-appear-5 {
          animation: starBurst 0.5s ease-out 1.7s forwards;
        }

        .star-appear-6 {
          animation: starBurst 0.5s ease-out 2s forwards;
        }

        .star-appear-7 {
          animation: starBurst 0.5s ease-out 2.3s forwards;
        }

        @keyframes starBurst {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.5);
          }
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
        }

        .stage-label {
          fill: #9ae6b4;
          font-size: 12px;
          opacity: 0;
        }

        .stage-description {
          fill: #68d391;
          font-size: 10px;
          opacity: 0;
        }

        .label-fade-1 {
          animation: labelAppear 1s ease-out 6s forwards;
        }

        .label-fade-2 {
          animation: labelAppear 1s ease-out 6.3s forwards;
        }

        .label-fade-3 {
          animation: labelAppear 1s ease-out 6.6s forwards;
        }

        .label-fade-4 {
          animation: labelAppear 1s ease-out 6.9s forwards;
        }

        .label-fade-5 {
          animation: labelAppear 1s ease-out 7.2s forwards;
        }

        .label-fade-6 {
          animation: labelAppear 1s ease-out 7.5s forwards;
        }

        .label-fade-7 {
          animation: labelAppear 1s ease-out 7.8s forwards;
        }

        @keyframes labelAppear {
          to {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [ctaParticlesActive, setCtaParticlesActive] = useState(false);
  const [ctaPrefersReducedMotion, setCtaPrefersReducedMotion] = useState(false);
  const [ctaIsMobile, setCtaIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.hero-title, .hero-subhead')
    );

    if (!elements.length) {
      return;
    }

    const showElements = () => {
      elements.forEach((el) => el.classList.add('visible'));
    };

    const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery?.matches ?? false;

    if (prefersReducedMotion) {
      showElements();
      sessionStorage.setItem('heroPlayed', '1');
      return;
    }

    const hasAnimated = sessionStorage.getItem('heroPlayed') === '1';
    if (hasAnimated) {
      showElements();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let triggered = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
            triggered = true;
          }
        });

        if (triggered) {
          sessionStorage.setItem('heroPlayed', '1');
        }
      },
      { threshold: HERO_IO_THRESHOLD, rootMargin: HERO_IO_ROOT_MARGIN }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);


  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const egBlocks = Array.from(document.querySelectorAll<HTMLElement>('#problem .eg-anim'));
    const takeaway = document.querySelector<HTMLElement>('#eg-takeaway');
    const whySection = document.querySelector<HTMLElement>('#why-it-works');
    const whyCards = Array.from(document.querySelectorAll<HTMLElement>('#why-it-works .wiw-anim'));
    const frameworkSection = document.querySelector<HTMLElement>('#framework');
    const frameworkCards = Array.from(
      document.querySelectorAll<HTMLElement>('#framework .fw-anim')
    );
    const frameworkCallouts = frameworkSection
      ? Array.from(frameworkSection.querySelectorAll<HTMLElement>('.po-anim'))
      : [];
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
    const elements = [
      ...egBlocks,
      ...(takeaway ? [takeaway] : []),
      ...(whyCards ?? []),
      ...(frameworkSection ? [frameworkSection] : []),
      ...frameworkCards,
      ...frameworkCallouts,
      ...(proofSection ? [proofSection] : []),
      ...proofCards,
      ...(whoSection ? [whoSection] : []),
      ...whoCards,
      ...whoDividers,
      ...(ctaSection ? [ctaSection] : []),
    ];

    if (!elements.length && !whySection && !ctaSection) {
      return;
    }

    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealElement = (el: HTMLElement) => {
      el.classList.remove('opacity-0', 'translate-y-2', 'translate-y-1');
      el.classList.add('opacity-100', 'translate-y-0');
    };

    const activate = () => {
      elements.forEach(revealElement);
      if (whySection) {
        revealElement(whySection);
      }
      if (frameworkSection) {
        revealElement(frameworkSection);
      }
      if (proofSection) {
        revealElement(proofSection);
      }
      if (whoSection) {
        revealElement(whoSection);
      }
      if (ctaSection) {
        revealElement(ctaSection);
      }
    };

    if (prefersReduced) {
      activate();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            revealElement(el);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    if (whySection) {
      observer.observe(whySection);
    }
    if (frameworkSection) {
      observer.observe(frameworkSection);
    }
    if (proofSection) {
      observer.observe(proofSection);
    }
    if (whoSection) {
      observer.observe(whoSection);
    }
    if (ctaSection) {
      observer.observe(ctaSection);
    }

    return () => observer.disconnect();
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


  return (
    <>
      <Header />
      <main className="bg-black text-white">
        <section className="relative min-h-screen overflow-hidden pt-2 pb-16 md:pt-6 md:pb-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-l from-red-500/30 via-red-700/15 to-transparent" aria-hidden="true" />
            <div className="absolute right-0 top-0 h-[900px] w-[900px] bg-gradient-radial from-[#F87171]/40 via-[#F87171]/20 to-transparent" aria-hidden="true" />
            <div className="absolute right-10 top-1/3 h-[700px] w-[700px] bg-gradient-radial from-red-500/35 via-red-600/15 to-transparent blur-2xl" aria-hidden="true" />
            <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] bg-gradient-radial from-[#F87171]/30 via-transparent to-transparent blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black to-transparent" aria-hidden="true" />
          </div>
          <Particles />
          <Constellation />
          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-start px-6 pt-12 sm:px-8 sm:pt-14 md:pt-20 lg:px-10">
            <div className="max-w-5xl">
              <p className="mb-5 text-lg font-bold uppercase tracking-[0.32em] text-[#68D391] sm:text-xl">Stay Human. Stay Creative.</p>
              <h1 className="hero-title mb-6 space-y-3 text-7xl font-bold tracking-tight opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[6px] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:translate-y-0 sm:text-8xl lg:mb-8 lg:text-9xl">
                <span className="block">Build a Life AI Can’t Replace</span>
              </h1>
              <div className="mt-4 space-y-6 md:mt-5 md:space-y-8">
                <p className="hero-subhead mb-5 text-4xl leading-snug text-white/80 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[6px] delay-[120ms] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:translate-y-0 sm:mb-6 md:mb-7 md:text-5xl md:leading-tight">
                  <span className="font-medium">AI is automating skills faster than you can learn them.</span>
                  <br />
                  Job security is a myth. Burnout is engineered.
                </p>
                <p className="hero-subhead mb-5 text-4xl leading-snug text-white/90 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[6px] delay-[120ms] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:translate-y-0 sm:mb-6 md:mb-7 md:text-5xl md:leading-tight">
                  The antidote isn’t more information — it’s <span className="font-semibold">execution</span>.
                </p>
                <p className="hero-subhead text-4xl leading-snug text-white/90 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[6px] delay-[140ms] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:translate-y-0 md:text-5xl md:leading-tight">
                  A 90-day system that helps creative professionals escape burnout, rebuild focus, and launch work that feels human again.
                </p>
              </div>
              <div className="mt-6 md:mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={SPRINT1_COURSE_URL}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90"
                >
                  Start Sprint 1 — $97
                </Link>
                <Link
                  href="/journey"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[var(--brand-accent)] bg-transparent px-8 py-4 text-base font-semibold uppercase tracking-wide text-[var(--brand-accent)] transition-colors hover:bg-[var(--brand-accent)]/10"
                >
                  Explore the Full Journey
                </Link>
              </div>
              <p className="mt-3 text-sm text-white/60">10-day foundation • Money-back guarantee • Beta access pricing</p>
            </div>
          </div>
          <style jsx>{`
            :global(.hero-title.visible),
            :global(.hero-subhead.visible) {
              opacity: 1;
              transform: translateY(0);
            }

            @media (prefers-reduced-motion: reduce) {
              :global(.hero-title),
              :global(.hero-subhead) {
                animation: none !important;
                transition: none !important;
                opacity: 1 !important;
                transform: none !important;
              }
            }
          `}</style>
        </section>

        {/* Lead Magnet Bridge — Seamless Hero Continuation */}
        <section
          aria-labelledby="bridge-title"
          className="relative -mt-16 md:-mt-20 lg:-mt-24 bg-gradient-to-b from-[rgba(64,10,12,0.35)] via-black/80 to-black py-14 md:py-16"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl border border-[color:color-mix(in_srgb,_var(--brand-accent)_18%,_transparent)] bg-black/35 p-5 md:p-6 backdrop-blur-md shadow-[0_0_40px_-12px_color-mix(in_srgb,_var(--brand-accent)_18%,_transparent)]">
              <p className="text-center text-[10px] md:text-xs tracking-[.28em] uppercase text-[var(--brand-accent)]">
                90 Days • 3 Phases • Start • Sustain • Ship
              </p>

              <h2 id="bridge-title" className="mt-3 text-center text-2xl md:text-3xl font-bold">
                Not education. <span className="text-[var(--brand-accent)]">Execution.</span>
              </h2>

              <p className="mt-2 text-center text-sm md:text-base text-white/80 max-w-2xl mx-auto">
                Get the 10-Day Starter Kit: prompts, checklists, and daily micro-goals to start your pivot in 15–30 minutes a day.
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
                  className="rounded-md bg-black/60 px-4 py-3 text-sm text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-[color:color-mix(in_srgb,_var(--brand-accent)_40%,_transparent)]"
                />
                <select
                  className="rounded-md bg-black/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 focus:outline-none focus:ring-[color:color-mix(in_srgb,_var(--brand-accent)_30%,_transparent)]"
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
                  className="rounded-full bg-[var(--brand-accent)] px-6 py-3 font-medium text-black transition hover:-translate-y-[1px]"
                >
                  Get the Starter Kit →
                </button>
              </form>

              <p className="mt-3 text-xs text-center text-white/50">No spam. One-click unsubscribe.</p>
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="h-32 bg-gradient-to-b from-black via-black/60 to-[#0A1014]" />

        <section className="bg-gradient-to-b from-black via-[#0C1013] to-[#0A1014] py-24">
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28" id="real-crisis">
            <p className="mb-3 text-xs md:text-sm tracking-[0.18em] uppercase text-red-400/90">THE REAL CRISIS</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
              Why Creative Professionals Can’t Escape Burnout
            </h2>
            <p className="mt-5 text-base md:text-lg opacity-90 max-w-3xl">
              You built a creative career—then meetings, metrics, and mental fatigue drained the spark as AI accelerated.
            </p>
            <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-white/20 p-6 md:p-7">
                <p className="text-xs tracking-[0.16em] uppercase text-white/60">What You’re Up Against</p>
                <h4 className="text-white font-semibold mt-2 mb-3">What It Feels Like</h4>
                <ul className="mt-3 space-y-2 list-disc list-outside pl-5 text-sm md:text-base leading-relaxed text-white/85">
                  <li>AI rising. Motivation falling.</li>
                  <li>Constant input, zero output.</li>
                  <li>Digital noise disguised as progress.</li>
                  <li>Drained before the day begins.</li>
                  <li>Ambition, no system.</li>
                </ul>
              </div>
              <div className="rounded-xl bg-black/30 border border-white/10 p-6 md:p-7">
                <h4 className="text-white font-semibold mb-1">What’s Really Going On</h4>
                <p className="text-white/60 text-sm mb-4">
                  You’re trying to build your next chapter with an exhausted operating system.
                  The corporate machine optimized you for output — not originality.
                </p>
                <p className="text-white/60 text-sm mb-4">
                  Your creative energy — the one thing AI can’t replicate — is buried under
                  burnout, distraction, and digital chaos.
                </p>
                <div className="mt-4 border border-white/10 rounded-md p-3 bg-black/40">
                  <h5 className="text-[var(--brand-accent)] font-medium mb-1">The White Space</h5>
                  <p className="text-white/70 text-sm">
                    We rebuild your human OS — energy, focus, execution — so you can pivot with purpose,
                    create your own path, and build the life your creativity deserves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="bg-gradient-to-b from-black via-[#0C1013] to-[#0A1014] py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0 mt-6 md:mt-8 space-y-2 md:space-y-3 mb-10 md:mb-12">
              <p className="text-xs md:text-sm tracking-[0.18em] uppercase text-[var(--brand-energy)]">THE EXECUTION GAP</p>
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">Where Ambition Meets Resistance</h2>
              <p className="text-base md:text-lg leading-snug md:leading-relaxed text-white/80 max-w-[60ch] mx-auto lg:mx-0">You know what to do — but fear, burnout, and perfectionism keep you from doing it.</p>
            </div>
            <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-5 md:gap-6 items-start">
              <div className="h-full max-w-[56ch] space-y-5 text-base leading-relaxed text-white/90 md:text-lg">
                <p>You’re not short on ideas or drive — you’re short on execution.</p>
                <p>You live in the gap between knowing and doing.</p>
                <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="eg-anim rounded-lg bg-white/5 p-4 text-center opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-0 motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100">
                    <p>
                      <span className="font-semibold text-white">Fear</span> stops you before you start.
                    </p>
                  </div>
                  <div className="eg-anim rounded-lg bg-white/5 p-4 text-center opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[120ms] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100">
                    <p>
                      <span className="font-semibold text-white">Burnout</span> drains you when you try.
                    </p>
                  </div>
                  <div className="eg-anim rounded-lg bg-white/5 p-4 text-center opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[240ms] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100">
                    <p>
                      <span className="font-semibold text-white">Perfectionism</span> traps you in drafts that never ship.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] gap-3 self-start -mt-10 md:mt-0 md:-translate-y-36 md:gap-4 transform">
                <div className="flex flex-col justify-between rounded-2xl border border-[color:color-mix(in_srgb,_var(--brand-energy)_40%,_transparent)] bg-[color:color-mix(in_srgb,_var(--brand-energy)_10%,_transparent)] p-4 text-left shadow-lg shadow-black/30 md:p-5 min-h-0">
                  <h3 className="mb-3 text-lg font-semibold text-white">You Can't START</h3>
                  <p className="text-white/85 leading-snug">Fear hijacks every leap. Resistance wins. Your identity stays “employee.”</p>
                </div>
                <div className="flex flex-col justify-between rounded-2xl border border-[color:color-mix(in_srgb,_var(--brand-energy)_40%,_transparent)] bg-[color:color-mix(in_srgb,_var(--brand-energy)_10%,_transparent)] p-4 text-left shadow-lg shadow-black/30 md:p-5 min-h-0">
                  <h3 className="mb-3 text-lg font-semibold text-white">You Can't SUSTAIN</h3>
                  <p className="text-white/85 leading-snug">Your job drains your energy. Chaos kills focus. Nothing left at 6 AM or 9 PM.</p>
                </div>
                <div className="flex flex-col justify-between rounded-2xl border border-[color:color-mix(in_srgb,_var(--brand-energy)_40%,_transparent)] bg-[color:color-mix(in_srgb,_var(--brand-energy)_10%,_transparent)] p-4 text-left shadow-lg shadow-black/30 md:p-5 min-h-0">
                  <h3 className="mb-3 text-lg font-semibold text-white">You Can't SHIP</h3>
                  <p className="text-white/85 leading-snug">Perfectionism locks you in draft mode. You stall at the first obstacle.</p>
                </div>
                <div className="rounded-2xl border border-[color:color-mix(in_srgb,_var(--brand-energy)_40%,_transparent)] bg-[color:color-mix(in_srgb,_var(--brand-energy)_10%,_transparent)] p-4 text-left shadow-lg shadow-black/30 md:p-5 min-h-0">
                  <h3 className="mb-3 text-lg font-semibold uppercase tracking-wide text-[var(--brand-energy)]">MEANWHILE</h3>
                  <ul className="list-disc list-outside pl-5 space-y-1.5 leading-snug text-white/85 md:space-y-1.5">
                    <li>AI is automating faster than you can adapt.</li>
                    <li>Creators half your age are building six-figure businesses.</li>
                    <li>Your “secure” job may not exist in 5 years.</li>
                    <li>Every month you wait, your creative energy funds work that doesn’t fulfill you.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              id="eg-takeaway"
              className="mt-12 text-center opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <p className="text-lg font-semibold text-red-400">
                The gap between employed and free isn’t knowledge — it’s execution.
              </p>
              <div aria-hidden="true" className="mx-auto my-4 h-px w-16 rounded-full bg-green-400/60" />
              <p className="text-lg font-semibold text-green-400">
                You can’t execute with emotional blocks, low energy, and no system.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
           SECTION 4: Why It Works (Condensed)
           ========================= */}
        <section
          id="why-it-works"
          className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 border-t border-green-400/20 opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <p className="mb-2 text-xs md:text-sm tracking-[0.18em] uppercase text-[var(--brand-accent)]">WHY THIS WORKS</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            The 3 Systems That Make Execution Inevitable
          </h2>
          <p className="mt-3 text-base md:text-lg opacity-90 max-w-2xl">
            Other programs give you information. We remove what stops you from using it.
          </p>

          <div className="mt-10 space-y-10 md:mt-16 md:space-y-16">
            <div className="three-systems-item border-l-2 md:border-l-4 border-[var(--brand-accent)] pl-5 md:pl-6 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ transitionDelay: '80ms' }}>
              <h3 className="text-xl font-semibold text-white md:text-2xl">System 1: The Execution Engine</h3>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                <strong className="text-white">Your AI Co-Pilot holds you accountable—without shame.</strong>
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                Your AI Co-Pilot is trained on YOUR strengths, blindspots, and goals. It tracks your patterns, adapts to your real energy levels, and gives you one clear daily goal—no drop-off, just data-driven consistency.
              </p>
              <p className="mt-3 text-sm md:text-base text-white/70">
                <span className="font-medium text-[var(--brand-accent)]">Result:</span> You keep moving, even on low-motivation days.
              </p>
            </div>
            <div className="three-systems-item border-l-2 md:border-l-4 border-[var(--brand-accent)] pl-5 md:pl-6 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ transitionDelay: '160ms' }}>
              <h3 className="text-xl font-semibold text-white md:text-2xl">System 2: The Focus Framework</h3>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                <strong className="text-white">One goal. Every day. Zero overwhelm.</strong>
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                Inspired by Y Combinator's "do one thing" principle: each morning, define one small task that moves your creative life forward. The system adjusts based on your momentum—no rigid timelines, no shame when life gets messy.
              </p>
              <p className="mt-3 text-sm md:text-base text-white/70">
                <span className="font-medium text-[var(--brand-accent)]">Result:</span> Action becomes automatic, even when life&apos;s busy.
              </p>
            </div>
            <div className="three-systems-item border-l-2 md:border-l-4 border-[var(--brand-accent)] pl-5 md:pl-6 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ transitionDelay: '240ms' }}>
              <h3 className="text-xl font-semibold text-white md:text-2xl">System 3: The Adaptive Learning Path</h3>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                <strong className="text-white">Implementation over information overload.</strong>
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                ADHD-optimized "quick hit" lessons with sensory-driven immersion (audio, reflection prompts, cinematic storytelling). Your Notion Dashboard has hundreds of resources, but your AI Co-Pilot only surfaces what YOU need based on your momentum.
              </p>
              <p className="mt-3 text-sm md:text-base text-white/70">
                <span className="font-medium text-[var(--brand-accent)]">Result:</span> No endless scrolling. Just the right lesson at the right time—and you actually finish.
              </p>
            </div>
          </div>
        </section>

        <section
          id="why-this-works"
          className="relative mx-auto max-w-6xl px-6 py-20 md:py-24 opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <header className="max-w-3xl">
            <p className="mb-2 text-xs tracking-[0.18em] uppercase text-[var(--brand-accent)]">THE PROOF</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Why This Works</h2>
            <p className="mt-3 text-base md:text-lg leading-relaxed opacity-90">
              Most programs teach what to do. This system rewires how you operate — blending neuroscience, AI accountability, and creative-energy optimization — so execution becomes automatic.
            </p>
          </header>

          <div className="mt-10 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[               {"title": "Behavior-Driven Execution", "body": "Grounded in neuroscience and behavioral design. We don't rely on motivation — we rewire habits, attention, and identity for consistent action.", "delay": '0ms'},              {"title": "AI-Powered Accountability", "body": "An adaptive AI Co-Pilot tracks your creative patterns and calibrates goals to your energy. No more drop-off — just data-driven consistency.", "delay": '80ms'},              {"title": "Creative Energy First", "body": "You can't execute while burned out. We restore mental clarity, rebuild resilience, and protect focus from digital overload.", "delay": '160ms'},              {"title": "Actually Finish What You Start", "body": "Most programs either overwhelm you or abandon you. Udemy dumps 50 hours of video lectures you'll never finish. MasterClass inspires but provides no implementation structure. Maven gives accountability but rigid timelines that shame you when life gets messy. We give you ADHD-optimized "quick hit" lessons (5-15 min), sensory immersion that rewires behavior, and AI curation that surfaces only what YOU need right now—so you actually complete things instead of collecting courses.", "delay": '240ms'},              {"title": "Build What AI Can't Replace", "body": "AI can replicate output, not originality. We cultivate divergent thinking, intuition, and human-level creativity that technology can't automate.", "delay": '320ms'},              {"title": "Measurable Transformation", "body": "Every sprint produces tangible outcomes — shipped work, sustainable systems, renewed purpose. By Day 90, execution is identity.", "delay": '400ms'}            ].map((card) => (
              <article
                key={card.title}
                className="wiw-anim rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-white/[0.06] opacity-0 translate-y-2"
                style={{ transitionDelay: card.delay }}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-[var(--brand-accent)]">
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
                  </span>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                </div>
                <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90">{card.body}</p>
              </article>
            ))}
          </div>
        </section> className="mt-12">
            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[                 {"title": "Behavior-Driven Execution", "body": "Grounded in neuroscience and behavioral design. We don't rely on motivation — we rewire habits, attention, and identity for consistent action.", "delay": '0ms'},                {"title": "AI-Powered Accountability", "body": "An adaptive AI Co-Pilot tracks your creative patterns and calibrates goals to your energy. No more drop-off — just data-driven consistency.", "delay": '80ms'},                {"title": "Creative Energy First", "body": "You can't execute while burned out. We restore mental clarity, rebuild resilience, and protect focus from digital overload.", "delay": '160ms'},                {"title": "Actually Finish What You Start", "body": "Most programs either overwhelm you or abandon you. Udemy dumps 50 hours of video lectures you'll never finish. MasterClass inspires but provides no implementation structure. Maven gives accountability but rigid timelines that shame you when life gets messy. We give you ADHD-optimized "quick hit" lessons (5-15 min), sensory immersion that rewires behavior, and AI curation that surfaces only what YOU need right now—so you actually complete things instead of collecting courses.", "delay": '240ms'},                {"title": "Build What AI Can't Replace", "body": "AI can replicate output, not originality. We cultivate divergent thinking, intuition, and human-level creativity that technology can't automate.", "delay": '320ms'},                {"title": "Measurable Transformation", "body": "Every sprint produces tangible outcomes — shipped work, sustainable systems, renewed purpose. By Day 90, execution is identity.", "delay": '400ms'}              ].map((card) => (
                <article
                  key={card.title}
                  className="wiw-anim rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-white/[0.06] opacity-0 translate-y-2"
                  style={{ transitionDelay: card.delay }}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-[var(--brand-accent)]">
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
                    </span>
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  </div>
                  <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90">{card.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="#framework" className="inline-flex items-center gap-2 text-[var(--brand-accent)] underline underline-offset-4 transition-colors hover:text-[var(--brand-accent)]/80">
                [Learn how the 3 Systems make this possible →]
              </a>
            </div>
          </div>
        </section>


        <section id="framework" className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-2 text-xs tracking-[0.18em] uppercase text-[var(--brand-accent)]">THE CREATIVE TRANSMUTATION FRAMEWORK™</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Start. Sustain. Ship.
              <br className="hidden md:block" />
              Build a Life AI Can’t Replace.
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed opacity-90">
              The 90-day execution system that <strong>unlocks</strong>, <strong>strengthens</strong>, and <strong>activates</strong> your creative energy — so you can build a life AI can’t replace while you’re employed.
            </p>
            <p className="mt-3 text-sm md:text-base leading-relaxed opacity-80">
              Not another course or performance program — this systematically removes what prevents you from executing.
            </p>
            <div aria-hidden="true" className="mt-6 h-[2px] w-32 overflow-hidden rounded-full bg-white/10">
              <div
                id="fw-progress-fill"
                className="h-full rounded-full bg-green-400/60 transition-[width] duration-300 ease-out"
                style={{ width: '0%' }}
              />
            </div>
            <div className="mt-6 mb-6 border border-white/10 rounded-lg bg-white/5 p-4 max-w-2xl po-anim opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[80ms]">
              <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[color:color-mix(in_srgb,_var(--brand-accent)_35%,_white_65%)]">
                Phase Overview
              </p>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                Each phase builds on the last — unlocking Creative Energy, strengthening your systems, then activating the work AI can’t replace.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-7xl">
            <div className="grid gap-6 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <article className="fw-anim rounded-xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-0">
                <p className="text-[11px] tracking-[0.18em] uppercase text-[color:color-mix(in_srgb,_var(--brand-accent)_35%,_white_65%)]">
                  PHASE 1 — START
                </p>
                <h3 className="mt-2 text-lg font-semibold">Unlock Your Creative Energy</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  Break the blocks that stop action. Replace paralysis with motion.
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base leading-relaxed opacity-90">
                  <li>
                    → <span className="font-medium">Sprint 1: Break Free From Blocks</span>
                    <span className="ml-2 inline-flex items-center rounded-full border border-[var(--brand-accent)] bg-[var(--brand-accent)]/10 px-2 py-[2px] text-[11px] font-semibold text-[var(--brand-accent)]">
                      Available now
                    </span>
                  </li>
                  <li>→ <span className="font-medium">Sprint 2: Ignite Vision &amp; Purpose</span></li>
                  <li>→ <span className="font-medium">Sprint 3: Master Your Mindset</span></li>
                </ul>
                <div className="mt-auto" />
                <p className="mt-4 italic text-sm md:text-base opacity-75 leading-relaxed">
                  Outcome: You move despite fear. Identity begins to shift.
                </p>
              </article>
              <article className="fw-anim rounded-xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[120ms]">
                <p className="text-[11px] tracking-[0.18em] uppercase text-[color:color-mix(in_srgb,_var(--brand-accent)_35%,_white_65%)]">
                  PHASE 2 — SUSTAIN
                </p>
                <h3 className="mt-2 text-lg font-semibold">Strengthen Your Creative Energy</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  Protect attention. Build energy. Install resilience — without burnout.
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base leading-relaxed opacity-90">
                  <li>→ <span className="font-medium">Sprint 4: Clear Mental Clutter</span></li>
                  <li>→ <span className="font-medium">Sprint 5: Fuel Body &amp; Mind</span></li>
                  <li>→ <span className="font-medium">Sprint 6: Build Resilience &amp; Strength</span></li>
                </ul>
                <div className="mt-auto" />
                <p className="mt-4 italic text-sm md:text-base opacity-75 leading-relaxed">
                  Outcome: Consistency becomes natural. Focus and stamina return.
                </p>
              </article>
              <article className="fw-anim rounded-xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[240ms]">
                <p className="text-[11px] tracking-[0.18em] uppercase text-[color:color-mix(in_srgb,_var(--brand-accent)_35%,_white_65%)]">
                  PHASE 3 — SHIP
                </p>
                <h3 className="mt-2 text-lg font-semibold">Activate Your Creative Energy</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  Think like an alchemist. Generate bold ideas. Finish and share.
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base leading-relaxed opacity-90">
                  <li>→ <span className="font-medium">Sprint 7: Think Like an Alchemist</span></li>
                  <li>→ <span className="font-medium">Sprint 8: Master Your Creative Toolkit</span></li>
                  <li>→ <span className="font-medium">Sprint 9: Create, Ship &amp; Scale</span></li>
                </ul>
                <div className="mt-auto" />
                <p className="mt-4 italic text-sm md:text-base opacity-75 leading-relaxed">
                  Outcome: Regular flow, shipped projects, rising creative confidence.
                </p>
              </article>
            </div>
            <div className="mt-10 space-y-2 text-center text-white/70">
              <p className="text-sm">Want the full breakdown of each sprint?</p>
              <Link
                href="/journey"
                className="inline-flex items-center text-sm font-semibold uppercase tracking-wide text-[var(--brand-accent)] transition-colors hover:text-[var(--brand-accent)]/80"
              >
                See The Complete 90-Day Journey →
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border-2 border-[#9AE6B4] bg-[#9AE6B4]/10 p-8 text-center shadow-[0_0_60px_rgba(154,230,180,0.2)]">
            <p className="text-2xl font-bold text-white">
              "Stop planning. Start building."
            </p>
            <p className="mt-4 text-base text-white/80">
              You can't build vision on burnout. You can't enter flow while frozen by fear. Sprint 1 interrupts the drains—so everything else becomes possible.
            </p>
          </div>
          <div
            id="sprint-1-details"
            className="mx-auto mt-16 max-w-4xl space-y-6 rounded-3xl border-l-4 border-[#9AE6B4] bg-[#9AE6B4]/10 p-8 shadow-[0_0_60px_rgba(154,230,180,0.2)]"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Why Sprint 1 Comes First</h3>
              <p className="text-lg text-white/80">
                You can't build vision on burnout. You can't enter flow while frozen by fear. You can't ship while distracted and depleted.
              </p>
              <p className="text-lg text-white/80">
                Sprint 1 interrupts the drains—fear, resistance, outdated identity—so everything else becomes possible.
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
              <h4 className="text-xl font-semibold text-white">By Day 10, you'll have:</h4>
              <ul className="space-y-2 text-base text-white/80">
                <li>✅ Broken your fear pattern (identified + interrupted)</li>
                <li>✅ Taken action you've been avoiding for weeks/months</li>
                <li>✅ Shipped something small (proof you can execute)</li>
                <li>✅ Clarity on who you're becoming vs. who you're leaving behind</li>
              </ul>
            </div>
            <p className="text-base font-semibold text-[#9AE6B4]">Tools You Get: {sprintOneTools.join(' • ')}</p>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90"
            >
              Start Sprint 1 — Build Now
            </Link>
          </div>
        </section>

        {/* =========================
           WHY THIS WORKS (When Everything Else Doesn’t)
           ========================= */}
        

        {/* =========================
           WHO IT’S FOR
           ========================= */}
        <section
          id="who-its-for"
          className="relative mx-auto max-w-6xl px-6 py-20 md:py-24 opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <header className="max-w-3xl">
            <p className="mb-2 text-xs tracking-[0.18em] uppercase text-[#38BDF8]">WHO IT’S FOR</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Built for Creative Professionals Building Their Way Out
            </h2>
            <div
              aria-hidden="true"
              className="wif-anim-divider mt-3 h-[2px] w-16 bg-green-400/40 rounded-full opacity-0 translate-y-1 transition-all duration-500 ease-out delay-[120ms]"
            />
            <p className="mt-3 text-base md:text-lg leading-relaxed opacity-90">
              If you’re ambitious, burned out by corporate, and ready to build something you own — this was designed for you.
            </p>
          </header>

          {/* Two-card criteria grid */}
          <div className="mt-10 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
            {/* FOR YOU */}
            <article className="wif-anim delay-0 rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 transition-all duration-500 ease-out hover:bg-white/[0.06] hover:-translate-y-[2px] opacity-0 translate-y-2">
              <h3 className="text-lg font-semibold">This Is For You If</h3>
              <ul className="mt-3 space-y-2 text-sm md:text-base leading-relaxed opacity-90">
                <li>✓ You have a “good” job but it’s draining your creative energy.</li>
                <li>✓ AI is reshaping your industry and you want ownership and autonomy.</li>
                <li>✓ You’ve got ideas but can’t get yourself to start (or keep going).</li>
                <li>✓ You’ll commit <span className="font-semibold">15–30 minutes/day</span> for 90 days.</li>
                <li>✓ You want a system that restores energy, protects focus, and forces execution.</li>
              </ul>
            </article>

            {/* NOT FOR YOU */}
            <article className="wif-anim delay-[120ms] rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 transition-all duration-500 ease-out hover:bg-white/[0.06] hover:-translate-y-[2px] opacity-0 translate-y-2">
              <h3 className="text-lg font-semibold">This Is <span className="italic">Not</span> For You If</h3>
              <ul className="mt-3 space-y-2 text-sm md:text-base leading-relaxed opacity-90">
                <li>✗ You want motivation without action (this is <span className="font-semibold">80% doing</span>).</li>
                <li>✗ You’re browsing options but not ready to build.</li>
                <li>✗ You expect overnight results or passive learning.</li>
                <li>✗ You’re seeking therapy/clinical support (we address creative blocks, not clinical care).</li>
                <li>✗ You need everything built before you start — this is built <span className="font-semibold">with</span> pioneers.</li>
              </ul>
            </article>
          </div>

          {/* Micro reassurance + CTA */}
          <div className="mt-8 text-center">
            <p className="text-sm md:text-base opacity-75">Ten days to prove momentum. Money-back guarantee. Beta access pricing.</p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SPRINT1_COURSE_URL}
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]/60 md:text-base"
              >
                Start Sprint 1 — $97
              </a>
              <a
                href="/journey"
                className="inline-flex items-center justify-center rounded-full border border-[var(--brand-accent)] px-6 py-3 text-sm text-[var(--brand-accent)] transition-colors hover:bg-[var(--brand-accent)]/10 md:text-base"
              >
                Explore the Full 90-Day Journey →
              </a>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-black via-[#0C1013] to-[#0A1014] py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#9AE6B4]">Two Paths. One Framework.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left shadow-lg shadow-black/30">
                <h3 className="text-2xl font-bold text-white">For Individuals</h3>
                <p className="mt-4 text-base text-white/80">
                  Build a life AI can't replace. Escape corporate. Launch your business. Own your creative future.
                </p>
                <Link
                  href={SPRINT1_COURSE_URL}
                  className="mt-6 inline-flex items-center text-base font-semibold text-[var(--brand-accent)] transition-colors hover:text-[var(--brand-accent)]/80"
                >
                  Start Sprint 1 →
                </Link>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left shadow-lg shadow-black/30">
                <h3 className="text-2xl font-bold text-white">For Organizations</h3>
                <p className="mt-4 text-base text-white/80">
                  Future-proof your creative talent pipeline. Reduce burnout. Build teams that thrive in the AI era.
                </p>
                <Link
                  href="/enterprise"
                  className="mt-6 inline-flex items-center text-base font-semibold text-[var(--brand-accent)] transition-colors hover:text-[var(--brand-accent)]/80"
                >
                  Explore Enterprise →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-gradient-to-b from-[#101523] via-[#0A1014] to-[#110C13] py-24">
          <div className="mx-auto max-w-5xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold sm:text-5xl">Start Building Today</h2>
            <p className="text-xl text-white/80">Beta pioneers shape the system. Lock in founder pricing. Build a life AI can't replace.</p>
          </div>
          <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {pricingCards.map((card) => (
                <div
                  key={card.title}
                  className={`flex h-full flex-col rounded-3xl p-8 text-left shadow-xl shadow-black/40 ${
                    card.highlight ? 'border-2 border-[#9AE6B4]/30 bg-gradient-to-b from-white/10 via-white/5 to-transparent' : 'border border-white/10 bg-white/5'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                        card.highlight ? 'bg-[#9AE6B4] text-black' : 'border border-white/20 text-white/70'
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-3xl font-bold text-white">{card.title}</h3>
                  <div className="mt-4 text-5xl font-bold text-white">{card.price}</div>
                  <p className="mt-2 text-sm text-white/60">{card.priceNote}</p>
                  <p className="mt-6 text-base text-white/80">{card.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-white/80">
                    {card.included.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href={card.href}
                    className={`mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold uppercase tracking-wide transition ${
                      card.highlight
                        ? 'bg-[var(--brand-accent)] text-black shadow-lg shadow-black/30 hover:opacity-90'
                        : 'border border-[var(--brand-accent)] bg-transparent text-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/10'
                    }`}
                  >
                    {card.ctaLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-black/60 p-8 text-center shadow-[0_0_60px_rgba(0,0,0,0.4)]">
            <h3 className="text-2xl font-bold text-[var(--brand-energy)]">100% Money-Back Guarantee</h3>
            <p className="mt-4 text-lg text-white/80">
              Complete Sprint 1 (all 3 lessons + tools) and use the AI Co-Pilot for 10 days.
              <br />
              If you don't see measurable progress in your ability to take action and build a life you own, email us for a full refund.
              <br />
              We're not asking you to trust the system. We're asking you to test it.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <span>🔒 Secure checkout</span>
              <span>💳 All payment methods</span>
              <span>⚡ Instant access</span>
            </div>
          </div>
          <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-3xl font-bold">Common Questions</h3>
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
                      <span className="text-lg font-semibold text-white">{item.question}</span>
                      <span className={`text-3xl text-[var(--brand-energy)] transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">
                        +
                      </span>
                    </button>
                    {isOpen ? <div className="border-t border-white/10 px-6 py-6 text-base text-white/70">{item.answer}</div> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cta" className="bg-gradient-to-r from-[#9AE6B4]/20 via-[#68D391]/10 to-transparent py-24">
          <div className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-white/10 bg-black/40 p-10 text-center shadow-[0_0_80px_rgba(154,230,180,0.18)]">
            <h2 className="text-4xl font-bold sm:text-5xl">Your Creative Energy Is Your Greatest Asset</h2>
            <p className="text-xl text-white/80">
              Every day you wait, AI automates another skill. But Creative Energy can never be automated.
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
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90"
              >
                Start Sprint 1 — Build Now
              </Link>
              <Link
                href="/journey"
                className="inline-flex items-center justify-center rounded-full border border-[var(--brand-accent)] bg-transparent px-8 py-4 text-base font-semibold uppercase tracking-wide text-[var(--brand-accent)] transition-colors hover:bg-[var(--brand-accent)]/10"
              >
                Pre-Order Full Journey — $697
              </Link>
            </div>
            <p className="text-sm text-white/60">Questions? Email support@pioneeryourcreative.com</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
