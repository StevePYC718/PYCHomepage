'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';
import { Particles } from '@/components/Particles';

const Subnav = dynamic(() => import('@/components/Subnav'), { ssr: false });


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
    href: '/sprint-1',
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

    const realCrisisItems = Array.from(
      document.querySelectorAll<HTMLElement>('#crisis .rc-anim')
    );
    const realCrisisBlocks = Array.from(
      document.querySelectorAll<HTMLElement>('#crisis .rc-block')
    );
    const egBlocks = Array.from(document.querySelectorAll<HTMLElement>('#execution .eg-anim'));
    const egBlockElements = Array.from(
      document.querySelectorAll<HTMLElement>('#execution .eg-block')
    );
    const takeaway = document.querySelector<HTMLElement>('#eg-takeaway');
    const whySection = document.querySelector<HTMLElement>('#systems');
    const whyCards = Array.from(document.querySelectorAll<HTMLElement>('#systems .wiw-anim'));
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
    const proofSection = document.querySelector<HTMLElement>('#why-this-works-proof');
    const proofCards = Array.from(
      document.querySelectorAll<HTMLElement>('#why-this-works-proof .wiw-anim')
    );
    const whoSection = document.querySelector<HTMLElement>('#creatives');
    const whoCards = Array.from(
      document.querySelectorAll<HTMLElement>('#creatives .wif-anim')
    );
    const whoDividers = whoSection
      ? Array.from(whoSection.querySelectorAll<HTMLElement>('.wif-anim-divider'))
      : [];
    const ctaSection = document.querySelector<HTMLElement>('#start');
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
                  threeSystemsObserver.unobserve(el);
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

    const systemsSection = document.getElementById('systems');
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
        <section id="hero" className="relative min-h-screen overflow-hidden pt-32 pb-24 md:pt-40 md:pb-16 scroll-mt-28">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-l from-red-500/30 via-red-700/15 to-transparent" aria-hidden="true" />
            <div className="absolute right-0 top-0 h-[900px] w-[900px] bg-gradient-radial from-[#F87171]/40 via-[#F87171]/20 to-transparent" aria-hidden="true" />
            <div className="absolute right-10 top-1/3 h-[700px] w-[700px] bg-gradient-radial from-red-500/35 via-red-600/15 to-transparent blur-2xl" aria-hidden="true" />
            <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] bg-gradient-radial from-[#F87171]/30 via-transparent to-transparent blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black to-transparent" aria-hidden="true" />
          </div>
          <Particles />
          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-start px-6 pt-2 sm:px-8 md:pt-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--green-primary)] opacity-80">
                Stay Human. Stay Creative.
              </p>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Build a Life AI Can’t Replace.
              </h1>
              <div className="max-w-2xl md:max-w-3xl mt-4 space-y-4">
                <p className="text-[17px] md:text-[18px] leading-relaxed opacity-90">
                  AI is automating skills faster than you can adapt.
                  <br />
                  Job security is a myth. Burnout is engineered.
                </p>
                <p className="text-[17px] md:text-[18px] leading-relaxed opacity-90">
                  The antidote isn’t more information — it’s{' '}
                  <span className="font-semibold text-white">execution</span>.
                </p>
                <p className="text-[17px] md:text-[18px] leading-relaxed opacity-90">
                  A 90-day system that helps creative professionals rebuild energy, regain focus, and launch the work that makes them free — whether{' '}
                  <span className="font-semibold text-[var(--brand-green)]">
                    pivoting careers, starting a business, or building something of your own
                  </span>
                  .
                </p>
              </div>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-8">
                <Link
                  href="#final-cta"
                  data-scroll-link
                  data-cta="sprint1"
                  onClick={() => trackCta('sprint1')}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--green-primary)] px-8 py-3.5 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60 md:px-8 md:py-3.5 md:text-base"
                >
                  Start Sprint 1 — $97
                </Link>
                <Link
                  href="#three-systems"
                  data-scroll-link
                  data-cta="framework"
                  onClick={() => trackCta('framework')}
                  className="inline-flex items-center justify-center rounded-full border border-[var(--green-primary)] px-6 py-3 text-sm font-medium text-[var(--green-primary)] transition hover:bg-[var(--green-primary)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60 md:px-6 md:py-3 md:text-base"
                >
                  Explore the 90-Day Framework →
                </Link>
              </div>
              <p className="mt-3 text-xs opacity-70 md:text-sm">
                10-day foundation • Money-back guarantee • Beta pricing
              </p>
            </div>
          </div>
        </section>

        <section
          id="join"
          aria-labelledby="bridge-title"
          className="relative -mt-16 md:-mt-20 lg:-mt-24 bg-gradient-to-b from-[rgba(64,10,12,0.35)] via-black/80 to-black py-12 md:py-14 scroll-mt-28"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl border border-[rgba(99,255,173,0.18)] bg-black/35 p-5 md:p-6 backdrop-blur-md shadow-[0_0_40px_-12px_rgba(99,255,173,0.18)]">
              <p className="text-center text-[10px] md:text-xs tracking-[.28em] uppercase text-[var(--green-primary)]">
                90 Days • 3 Phases • Start • Sustain • Ship
              </p>

              <h2 id="bridge-title" className="mt-3 text-center text-2xl md:text-3xl font-bold">
                Not education. <span className="text-[var(--green-primary)]">Execution.</span>
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
                  Get the Starter Kit →
                </button>
              </form>

              <p className="mt-3 text-xs text-center text-white/50">No spam. One-click unsubscribe.</p>
            </div>
          </div>
        </section>
        <section id="real-crisis" className="scroll-mt-28 bg-gradient-to-b from-black via-[#0C1013] to-[#0A1014] py-32 md:py-40">
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="mb-3 text-xs tracking-[0.18em] uppercase text-red-400/80 md:text-sm">THE REAL CRISIS</p>
            <div className="max-w-2xl md:max-w-3xl space-y-2">
              <h1 className="rc-block fade-up text-3xl md:text-5xl font-bold leading-tight opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[0ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                Why Most Creatives Stay Stuck
              </h1>
            </div>
            <div className="mt-6 max-w-2xl md:max-w-3xl space-y-4">
              <p className="rc-block fade-up text-[17px] md:text-[18px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[80ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                <strong className="text-[var(--green-primary)]">You’re burned out by the system — and too drained to build your way out of it.</strong>
              </p>
              <p className="rc-block fade-up text-[17px] md:text-[18px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[160ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                AI is replacing roles faster than you can pivot. And even though you want to start something new — a side project, a business, a creative escape — <strong>you can’t find the clarity, focus, or energy to move forward.</strong>
              </p>
              <p className="rc-block fade-up text-[17px] md:text-[18px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[240ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                You built a creative career — but meetings, metrics, and mental fatigue rewired your brain for survival, not creation.
              </p>
            </div>
            <div className="rc-block fade-up mt-8 grid grid-cols-1 gap-5 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[240ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none md:mt-10 md:grid-cols-2 md:gap-6">
              <div className="rounded-xl bg-white/[0.025] ring-1 ring-white/[0.06] p-6 md:p-7">
                <h4 className="text-base md:text-lg font-semibold text-white mb-3">What It Feels Like</h4>
                <ul className="mt-3 space-y-2 list-disc list-outside pl-5">
                  <li className="rc-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[0ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    AI is accelerating. Your motivation isn’t.
                  </li>
                  <li className="rc-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[90ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    You scroll, consume, absorb — but nothing sticks.
                  </li>
                  <li className="rc-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[180ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    The feed hums with “progress,” but it’s all noise in disguise.
                  </li>
                  <li className="rc-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[270ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    You wake up already tired — the day hasn’t even begun.
                  </li>
                  <li className="rc-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[360ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    You’ve got the ambition. You just need a system that can keep up.
                  </li>
                </ul>
              </div>
              <div className="rc-block fade-up rounded-xl bg-black/30 border border-white/10 p-6 md:p-7 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[180ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
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
                  <h5 className="text-[var(--green-primary)] font-medium mb-1">The White Space</h5>
                  <p className="text-white/70 text-sm">
                    We rebuild your human OS — energy, focus, execution — so you can pivot with purpose,
                    create your own path, and build the life your creativity deserves.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="#paradox"
                data-scroll-link
                data-cta="framework"
                onClick={() => trackCta('framework')}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--green-primary)] transition hover:text-[var(--green-primary)]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60"
              >
                See How The System Fixes This →
              </Link>
            </div>
          </div>
        </section>

        <section id="execution-gap" className="scroll-mt-28 bg-gradient-to-b from-black via-[#0C1013] to-[#0A1014] py-32 md:py-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mt-6 mb-10 max-w-3xl text-center md:mt-8 md:mb-12 lg:mx-0 lg:text-left">
              <p className="text-xs tracking-[0.18em] uppercase text-[var(--coral)] md:text-sm mb-3 md:mb-4">THE EXECUTION GAP</p>
              <div className="max-w-2xl md:max-w-3xl space-y-2">
                <h2 className="eg-block fade-up text-3xl font-bold leading-tight opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[0ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none md:text-5xl">
                  Where Ambition Meets Resistance
                </h2>
              </div>
            </div>
            <div className="mt-10 grid items-start gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
              <div className="max-w-2xl md:max-w-3xl space-y-4">
                <p className="eg-block fade-up text-[17px] md:text-[18px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[140ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                  <strong className="text-[var(--green-primary)]">You don’t need more ideas. You need the system and stamina to act on them.</strong>
                </p>
                <p className="eg-block fade-up text-[17px] md:text-[18px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[170ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                  You already know what to build — a pivot, a project, a path out. But fear, fatigue, and perfectionism keep you from shipping anything real.
                </p>
                <p className="eg-block fade-up text-[17px] md:text-[18px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[200ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                  You live in the space between <em>knowing</em> and <em>doing.</em>
                </p>
                <ul className="mt-4 space-y-2 list-disc list-outside pl-5">
                  <li className="eg-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[0ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    Fear hijacks every leap — your identity stays “employee.”
                  </li>
                  <li className="eg-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[90ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    Burnout drains your drive — nothing left for your dream.
                  </li>
                  <li className="eg-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[180ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    Perfectionism traps you in endless drafts.
                  </li>
                </ul>
                <p className="eg-block fade-up text-[17px] md:text-[18px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[210ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                  This isn’t a motivation problem — it’s a <strong>human operating system</strong> problem.
                </p>
                <p className="eg-block fade-up text-[17px] md:text-[18px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[240ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                  You can’t create freedom while running on survival.
                </p>
              </div>
              <div className="grid gap-4 self-start md:gap-5 xl:translate-x-4">
                <div className="rounded-xl bg-[color:color-mix(in_srgb,_var(--coral)_10%,_transparent)] ring-1 ring-[color:color-mix(in_srgb,_var(--coral)_45%,_transparent)] p-6 text-left shadow-lg shadow-black/30 md:p-7">
                  <p className="eg-block fade-up mt-6 text-[17px] md:text-[18px] font-semibold opacity-90 text-[var(--coral)] opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[160ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                    Meanwhile…
                  </p>
                  <ul className="mt-3 space-y-2 list-disc list-outside pl-5">
                    <li className="eg-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[0ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                      AI is moving faster than your recovery.
                    </li>
                    <li className="eg-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[90ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                      Creators half your age are shipping six-figure ideas.
                    </li>
                    <li className="eg-anim fade-up text-[16px] md:text-[17px] leading-relaxed opacity-90 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[180ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                      Every month you wait, your energy funds someone else’s dream.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              id="eg-takeaway"
              className="mt-12 text-center opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <div className="eg-block fade-up mx-auto max-w-3xl rounded-sm border-l-2 border-green-400/40 bg-gradient-to-r from-green-500/5 to-transparent pl-4 text-left opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[220ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
                <p className="font-semibold text-base md:text-lg text-red-400">
                  The Shift — the gap between <em>employed</em> and <em>free</em> isn’t knowledge; it’s execution.
                </p>
                <p className="mt-2 text-base md:text-lg leading-relaxed opacity-90">
                  And execution starts with restored energy, emotional resilience, and a daily system for progress.
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <Link
                  href="#systems"
                  data-scroll-link
                  data-cta="framework"
                  onClick={() => trackCta('framework')}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--green-primary)] px-8 py-3.5 text-sm font-medium tracking-wide text-[var(--green-primary)] transition-colors hover:bg-[var(--green-primary)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60 md:px-9 md:py-4 md:text-base"
                >
                  See the 90-Day Framework →
                </Link>
              </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#start"
              data-scroll-link
              data-cta="sprint1"
              onClick={() => trackCta('sprint1')}
              className="inline-flex items-center justify-center rounded-full bg-[var(--green-primary)] px-7 py-3 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60 md:px-8 md:py-3.5 md:text-base"
            >
              Start Sprint 1 — $97
            </Link>
            <Link
              href="#paradox"
              data-scroll-link
              data-cta="framework"
              onClick={() => trackCta('framework')}
              className="inline-flex items-center justify-center rounded-full border border-[var(--green-primary)] px-6 py-3 text-sm font-medium text-[var(--green-primary)] transition hover:bg-[var(--green-primary)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60 md:px-6 md:py-3 md:text-base"
            >
              See How The System Fixes This →
            </Link>
          </div>
            </div>
          </div>
        </section>
        <section id="paradox" className="relative pb-16 pt-20 md:pb-20 md:pt-24 scroll-mt-28">
          <div className="mx-auto max-w-3xl px-6 opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] the-paradox-anim">
            <p
              className="fade-up-10-init mb-2 text-[11px] md:text-xs tracking-[0.18em] uppercase text-[#38BDF8]"
              data-anim-type="fade-10"
              data-anim-key="paradox-eyebrow"
            >
              The Paradox
            </p>
            <h2
              className="fade-up-20-init text-3xl md:text-5xl font-bold leading-tight"
              data-anim-type="fade-20"
              data-anim-key="paradox-heading"
            >
              Why Creatives Face the Most Risk — and Hold the Power to Thrive
            </h2>

            <p
              className="fade-up-10-init mt-4 text-base md:text-lg leading-relaxed text-white/90"
              data-anim-type="fade-10"
              data-anim-key="paradox-copy-1"
            >
              Technology killed creativity — and also made it unstoppable. The same tools burning out creative professionals are the ones that can set them free.
            </p>

            <p
              className="fade-up-10-init mt-3 text-base md:text-lg leading-relaxed text-white/80"
              data-anim-type="fade-10"
              data-anim-key="paradox-copy-2"
            >
              AI is replacing jobs faster than people can pivot. Yet for the first time, a single creative can build a business or movement — without permission.
            </p>

            <p
              className="fade-up-10-init mt-3 text-base md:text-lg leading-relaxed text-white/80"
              data-anim-type="fade-10"
              data-anim-key="paradox-copy-3"
            >
              <span className="font-semibold text-white">Creative energy</span> is your human advantage — the fuel that turns imagination into momentum.
              <span className="font-semibold text-white"> Creative transmutation</span> turns fear and frustration into output. Direct that energy, and the system that burned you out becomes your launchpad.
            </p>

            <p
              className="fade-up-10-init mt-4 text-base md:text-lg font-semibold text-[var(--green-primary)]"
              data-anim-type="fade-10"
              data-anim-key="paradox-copy-4"
            >
              That’s where the 90-Day Framework begins.
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
                You've seen the paradox — here’s how we make execution inevitable.
            </span>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#final-cta"
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
              href="#three-systems"
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
              href="#systems"
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

        <div
          aria-hidden="true"
          className="scale-line-init h-px w-full bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent"
          data-anim-type="scale-line"
          data-anim-key="divider-paradox-three"
        />

        <section id="three-systems" className="relative bg-black pt-16 pb-24 md:pt-24 md:pb-24 text-white scroll-mt-28">
          <div
            aria-hidden="true"
            className="parallax-layer pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#111] via-transparent to-transparent"
            data-parallax="layer"
            data-parallax-speed="0.5"
          />
          <div className="three-systems-anim mx-auto max-w-4xl px-6 sm:px-4 md:px-0 opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <p
              className="fade-up-10-init mb-4 text-[11px] uppercase tracking-[0.18em] text-[#57FFB7]"
              data-anim-type="fade-10"
              data-anim-key="three-systems-eyebrow"
            >
              Why This Works
            </p>
            <h2
              className="fade-up-20-init text-3xl font-semibold leading-tight text-white md:text-5xl"
              data-anim-type="fade-20"
              data-anim-key="three-systems-heading"
            >
              The 3 Systems That Make Execution Inevitable
            </h2>
            <p
              className="fade-up-10-init mt-6 max-w-2xl mx-auto text-base text-white/80 md:text-lg md:leading-relaxed"
              data-anim-type="fade-10"
              data-anim-key="three-systems-lede"
            >
              Most programs give you content and call it progress. We built three systems that make{' '}
              <span
                className="accent-pulse-init font-medium text-[#57FFB7]"
                data-anim-type="accent"
                data-anim-key="three-systems-lede-accent"
              >
                creative execution inevitable
              </span>{' '}
              — so you stop consuming and start creating.
            </p>

            <div className="mt-10 space-y-10 md:mt-16 md:space-y-16">
              <div
                className="three-systems-item border-l-2 md:border-l-4 border-[#57FFB7] pl-5 md:pl-6 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transitionDelay: '100ms' }}
              >
                <h3
                  className="fade-up-20-init text-xl font-semibold text-white mb-2 md:text-2xl"
                  data-anim-type="fade-20"
                  data-anim-key="three-systems-card1-heading"
                >
                  System 1: The Execution Engine
                </h3>
                <p
                  className="fade-up-10-init text-white/80 text-base leading-relaxed md:text-lg"
                  data-anim-type="fade-10"
                  data-anim-key="three-systems-card1-copy"
                >
                  <strong>Accountability meets adaptability.</strong> Your AI Co-Pilot keeps you on track with daily check-ins,
                  gentle nudges, and smart pattern tracking. If you fall behind, it doesn’t shame you — it adapts your goals to your real energy and schedule.
                </p>
                <p
                  className="fade-up-10-init mt-2"
                  data-anim-type="fade-10"
                  data-anim-key="three-systems-card1-result-text"
                >
                  <span
                    className="accent-pulse-init text-base font-medium text-[#57FFB7] md:text-lg"
                    data-anim-type="accent"
                    data-anim-key="three-systems-card1-result"
                  >
                    Result: Consistency without burnout. You keep moving — even on low-motivation days.
                  </span>
                </p>
              </div>

              <div
                className="three-systems-item border-l-2 md:border-l-4 border-[#57FFB7] pl-5 md:pl-6 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transitionDelay: '200ms' }}
              >
                <h3
                  className="fade-up-20-init text-xl font-semibold text-white mb-2 md:text-2xl"
                  data-anim-type="fade-20"
                  data-anim-key="three-systems-card2-heading"
                >
                  System 2: The Focus Framework
                </h3>
                <p
                  className="fade-up-10-init text-white/80 text-base leading-relaxed md:text-lg"
                  data-anim-type="fade-10"
                  data-anim-key="three-systems-card2-copy"
                >
                  <strong>One clear goal. Every day. Zero overwhelm.</strong> Each morning, define one small, specific task that moves your creative life forward.
                  The system adjusts difficulty based on your momentum, creating sustainable progress instead of perfection paralysis.
                </p>
                <p
                  className="fade-up-10-init mt-2"
                  data-anim-type="fade-10"
                  data-anim-key="three-systems-card2-result-text"
                >
                  <span
                    className="accent-pulse-init text-base font-medium text-[#57FFB7] md:text-lg"
                    data-anim-type="accent"
                    data-anim-key="three-systems-card2-result"
                  >
                    Result: Action becomes automatic — even when life’s busy.
                  </span>
                </p>
              </div>

              <div
                className="three-systems-item border-l-2 md:border-l-4 border-[#57FFB7] pl-5 md:pl-6 opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transitionDelay: '300ms' }}
              >
                <h3
                  className="fade-up-20-init text-xl font-semibold text-white mb-2 md:text-2xl"
                  data-anim-type="fade-20"
                  data-anim-key="three-systems-card3-heading"
                >
                  System 3: The Adaptive Learning Path
                </h3>
                <p
                  className="fade-up-10-init text-white/80 text-base leading-relaxed md:text-lg"
                  data-anim-type="fade-10"
                  data-anim-key="three-systems-card3-copy"
                >
                  <strong>Personalized progress that fits your mind.</strong> The framework learns your personality, patterns, and goals — recommending the right tools
                  and lessons exactly when you need them. No information overload, no wasted time.
                </p>
                <p
                  className="fade-up-10-init mt-2"
                  data-anim-type="fade-10"
                  data-anim-key="three-systems-card3-result-text"
                >
                  <span
                    className="accent-pulse-init text-base font-medium text-[#57FFB7] md:text-lg"
                    data-anim-type="accent"
                    data-anim-key="three-systems-card3-result"
                  >
                    Result: A personalized roadmap for growth, built around you.
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-12 md:mt-16">
              <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent p-8 md:p-10">
                <div
                  className="scale-line-init pointer-events-none absolute inset-0"
                  data-anim-type="scale-line"
                  data-anim-key="three-systems-summary-glow"
                />
                <div className="relative">
                  <h4
                    className="fade-up-20-init text-center text-xl font-semibold text-white md:text-3xl"
                    data-anim-type="fade-20"
                    data-anim-key="three-systems-summary-heading"
                  >
                    How It All Connects
                  </h4>
                  <p
                    className="fade-up-10-init mt-3 text-center text-sm font-medium uppercase tracking-[0.18em] text-white/60 md:mt-4"
                    data-anim-type="fade-10"
                    data-anim-key="three-systems-summary-sub"
                  >
                    Each system amplifies the next
                  </p>
                  <div className="mt-6 grid gap-4 md:gap-5">
                    <div
                      className="fade-up-10-init flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3 md:px-5 md:py-4"
                      data-anim-type="fade-10"
                      data-anim-key="three-systems-summary-item-1"
                    >
                      <span className="accent-pulse-init mt-1 h-2 w-2 flex-none rounded-full bg-[#57FFB7]" data-anim-type="accent" data-anim-key="three-systems-summary-dot-1" />
                      <p className="text-sm text-white/80 md:text-base">Accountability builds focus.</p>
                    </div>
                    <div
                      className="fade-up-10-init flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3 md:px-5 md:py-4"
                      data-anim-type="fade-10"
                      data-anim-key="three-systems-summary-item-2"
                      style={{ transitionDelay: '80ms' }}
                    >
                      <span className="accent-pulse-init mt-1 h-2 w-2 flex-none rounded-full bg-[#57FFB7]" data-anim-type="accent" data-anim-key="three-systems-summary-dot-2" />
                      <p className="text-sm text-white/80 md:text-base">Focus fuels measurable data.</p>
                    </div>
                    <div
                      className="fade-up-10-init flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3 md:px-5 md:py-4"
                      data-anim-type="fade-10"
                      data-anim-key="three-systems-summary-item-3"
                      style={{ transitionDelay: '160ms' }}
                    >
                      <span className="accent-pulse-init mt-1 h-2 w-2 flex-none rounded-full bg-[#57FFB7]" data-anim-type="accent" data-anim-key="three-systems-summary-dot-3" />
                      <p className="text-sm text-white/80 md:text-base">Data personalizes your learning.</p>
                    </div>
                  </div>
                  <p
                    className="fade-up-10-init mt-6 text-center text-sm text-white/70 md:text-base md:leading-relaxed"
                    data-anim-type="fade-10"
                    data-anim-key="three-systems-summary-outro"
                    style={{ transitionDelay: '220ms' }}
                  >
                    That’s how execution becomes effortless — and creativity becomes your competitive edge in the AI economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky CTA removed in favor of sub-navigation */}

        <section id="framework" className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 scroll-mt-28">
          <div className="max-w-3xl">
            <p className="mb-2 text-xs tracking-[0.18em] uppercase text-[var(--green-primary)]">THE CREATIVE TRANSMUTATION FRAMEWORK™</p>
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
              <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[color:color-mix(in_srgb,_var(--green-primary)_35%,_white_65%)]">
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
                <p className="text-[11px] tracking-[0.18em] uppercase text-[var(--green-primary)]">
                  PHASE 1 — START
                </p>
                <h3 className="mt-2 text-lg font-semibold">Unlock Your Creative Energy</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  Break the blocks that stop action. Replace paralysis with motion.
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base leading-relaxed opacity-90">
                  <li>
                    → <span className="font-medium">Sprint 1: Break Free From Blocks</span>
                    <span className="ml-2 inline-flex items-center rounded-full border border-[var(--green-primary)] bg-[var(--green-primary)]/10 px-2 py-[2px] text-[11px] font-semibold text-[var(--green-primary)]">
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
                <p className="text-[11px] tracking-[0.18em] uppercase text-[var(--green-primary)]">
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
                <p className="text-[11px] tracking-[0.18em] uppercase text-[var(--green-primary)]">
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
                className="inline-flex items-center text-sm font-semibold uppercase tracking-wide text-[var(--green-primary)] transition-colors hover:text-[var(--green-primary)]/80"
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
              className="inline-flex items-center justify-center rounded-full bg-[var(--green-primary)] px-8 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/30 transition-opacity hover:opacity-90"
            >
              Start Sprint 1 — Build Now
            </Link>
          </div>
        </section>
        {/* =========================
           WHY THIS WORKS (When Everything Else Doesn’t)
           ========================= */}
        <section
          id="why-this-works"
          className="relative mx-auto max-w-6xl px-6 py-20 md:py-24 opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] scroll-mt-28"
        >
          <header className="max-w-3xl">
            <p className="mb-2 text-xs tracking-[0.18em] uppercase text-[var(--green-primary)]">THE PROOF</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Why This Works
            </h2>
            <p className="mt-3 text-base md:text-lg leading-relaxed opacity-90">
              Most programs teach <em>what</em> to do. This system rewires <em>how</em> you operate — blending neuroscience,
              AI accountability, and creative-energy optimization — so execution becomes automatic.
            </p>
          </header>

          {/* GRID: 6 cards */}
          <div className="mt-10 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* 1 */}
            <article className="wiw-anim delay-0 rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-white/[0.06] opacity-0 translate-y-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-[var(--green-primary)]">
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
                    <path d="M8 6a3 3 0 0 0-3 3v2a4 4 0 0 0 4 4v3" />
                    <path d="M16 6a3 3 0 0 1 3 3v2a4 4 0 0 1-4 4v3" />
                    <path d="M12 3v18" />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold">Behavior-Driven Execution</h3>
              </div>
              <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90">
                Grounded in neuroscience and behavioral design. We don’t rely on motivation — we rewire habits,
                attention, and identity for consistent action.
              </p>
              <div className="mt-auto"></div>
            </article>

            {/* 2 */}
            <article className="wiw-anim delay-[120ms] rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-white/[0.06] opacity-0 translate-y-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-[var(--green-primary)]">
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
                    <rect x="5" y="9" width="14" height="8" rx="2"></rect>
                    <circle cx="12" cy="5" r="2"></circle>
                    <path d="M12 7v2"></path>
                    <path d="M8 13h.01M16 13h.01"></path>
                  </svg>
                </span>
                <h3 className="text-lg font-semibold">AI-Powered Accountability</h3>
              </div>
              <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90">
                An adaptive AI Co-Pilot tracks your creative patterns and calibrates goals to your energy.
                No more drop-off — just data-driven consistency.
              </p>
              <div className="mt-auto"></div>
            </article>

            {/* 3 */}
            <article className="wiw-anim delay-[240ms] rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-white/[0.06] opacity-0 translate-y-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-[var(--green-primary)]">
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
                    <path d="M12 2v6M12 16v6M2 12h6M16 12h6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M19.1 4.9l-4.2 4.2M9.1 14.9l-4.2 4.2" />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold">Creative Energy First</h3>
              </div>
              <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90">
                You can’t execute while burned out. We restore mental clarity, rebuild resilience, and protect focus
                from digital overload.
              </p>
              <div className="mt-auto"></div>
            </article>

            {/* 4 */}
            <article className="wiw-anim delay-0 rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-white/[0.06] opacity-0 translate-y-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-[var(--green-primary)]">
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
                    <path d="M9 11l2 2 4-4"></path>
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                  </svg>
                </span>
                <h3 className="text-lg font-semibold">80% Doing Beats 100% Learning</h3>
              </div>
              <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90">
                No long lectures or passive theory. Daily execution, experiments, and integration — not consumption.
              </p>
              <div className="mt-auto"></div>
            </article>

            {/* 5 */}
            <article className="wiw-anim delay-[120ms] rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-white/[0.06] opacity-0 translate-y-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-[var(--green-primary)]">
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
                    <path d="M6 7l6 13 6-13"></path>
                    <path d="M2 7h20"></path>
                    <path d="M7 7l5-5 5 5"></path>
                  </svg>
                </span>
                <h3 className="text-lg font-semibold">Build What AI Can’t Replace</h3>
              </div>
              <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90">
                AI can replicate output, not originality. We cultivate divergent thinking, intuition,
                and human-level creativity that technology can’t automate.
              </p>
              <div className="mt-auto"></div>
            </article>

            {/* 6 */}
            <article className="wiw-anim delay-[240ms] rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-white/[0.06] opacity-0 translate-y-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-[var(--green-primary)]">
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
                    <circle cx="12" cy="12" r="8"></circle>
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 2v3M2 12h3M12 22v-3M22 12h-3"></path>
                  </svg>
                </span>
                <h3 className="text-lg font-semibold">Measurable Transformation</h3>
              </div>
              <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90">
                Every sprint produces tangible outcomes — shipped work, sustainable systems, renewed purpose.
                By Day 90, execution is identity.
              </p>
              <div className="mt-auto"></div>
            </article>
          </div>

          {/* Optional: contextual link */}
          <div className="mt-8 text-center">
            <a
              href="#framework"
              className="inline-flex items-center gap-2 text-[var(--green-primary)] underline underline-offset-4 transition-colors hover:text-[var(--green-primary)]/80"
            >
              Learn how the 3 Systems make this possible →
            </a>
          </div>
        </section>
        {/* =========================
           WHO IT’S FOR
           ========================= */}
        <section
          id="creatives"
          className="relative mt-24 mx-auto max-w-6xl px-6 py-20 md:py-24 opacity-0 translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <header className="max-w-3xl">
            <p
              className="fade-up-10-init mb-2 text-xs tracking-[0.18em] uppercase text-[#38BDF8]"
              data-anim-type="fade-10"
              data-anim-key="who-eyebrow"
            >
              WHO IT’S FOR
            </p>
            <h2
              className="fade-up-20-init text-3xl md:text-5xl font-bold leading-tight"
              data-anim-type="fade-20"
              data-anim-key="who-heading"
            >
              Built for Creative Professionals Building Their Way Out
            </h2>
            <div
              aria-hidden="true"
              className="wif-anim-divider scale-line-init mt-3 h-[2px] w-16 bg-green-400/40 rounded-full opacity-0 translate-y-1 transition-all duration-500 ease-out delay-[120ms]"
              data-anim-type="scale-line"
              data-anim-key="who-divider"
            />
            <p
              className="fade-up-10-init mt-3 text-base md:text-lg leading-relaxed opacity-90"
              data-anim-type="fade-10"
              data-anim-key="who-subcopy"
            >
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
              <Link
                href="#start"
                data-scroll-link
                data-cta="sprint1"
                onClick={() => trackCta('sprint1')}
                className="inline-flex items-center justify-center rounded-full bg-[var(--green-primary)] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60 md:text-base"
              >
                Build a Life AI Can’t Replace
              </Link>
              <Link
                href="#systems"
                data-scroll-link
                data-cta="framework"
                onClick={() => trackCta('framework')}
                className="inline-flex items-center justify-center rounded-full border border-[var(--green-primary)] px-6 py-3 text-sm text-[var(--green-primary)] transition-colors hover:bg-[var(--green-primary)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)]/60 md:text-base"
              >
                Explore the Full 90-Day Journey →
              </Link>
            </div>
          </div>
        </section>

        <section id="paths" className="bg-gradient-to-b from-black via-[#0C1013] to-[#0A1014] py-24 scroll-mt-28">
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
                  href="/sprint-1"
                  className="mt-6 inline-flex items-center text-base font-semibold text-[var(--green-primary)] transition-colors hover:text-[var(--green-primary)]/80"
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
                  className="mt-6 inline-flex items-center text-base font-semibold text-[var(--green-primary)] transition-colors hover:text-[var(--green-primary)]/80"
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
                        card.highlight ? 'bg-[var(--green-primary)] text-black' : 'border border-white/20 text-white/70'
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
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-black/60 p-8 text-center shadow-[0_0_60px_rgba(0,0,0,0.4)]">
            <h3 className="text-2xl font-bold text-[var(--coral)]">100% Money-Back Guarantee</h3>
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
                      <span className={`text-3xl text-[var(--coral)] transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">
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
        <section id="final-cta" className="bg-gradient-to-r from-[#9AE6B4]/20 via-[#68D391]/10 to-transparent py-24 scroll-mt-28">
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
                href="/sprint-1"
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
            <p className="text-sm text-white/60">Questions? Email support@pioneeryourcreative.com</p>
          </div>
        </section>
      </main>
      <Footer />
      <Subnav />
    </>
  );
}
