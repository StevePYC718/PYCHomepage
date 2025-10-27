import { PathLandingTemplate, type PathLandingTemplateProps } from "@/components/PathLandingTemplate";

const pivotPageContent: PathLandingTemplateProps = {
  hero: {
    eyebrow: "Choose Your Path",
    headline: "Ready to Pivot Your Career?",
    subheadline: 'Stop waiting for the "right time." Land a role that excites you—not just pays you—in 90 days.',
    paragraphs: [
      'You\'re done with your current role, company, or industry. You know you need to make a move, but fear and imposter syndrome keep you frozen. "Am I too late? What if I choose wrong? What if I\'m not good enough?"',
      "The truth: You already have the skills. You just need the confidence, clarity, and system to make the pivot without starting from scratch.",
    ],
    ctaLabel: "Start Your Pivot — $97",
    ctaId: "pivot-hero-cta",
  },
  outcomes: [
    {
      title: "Land a role that excites you",
      description:
        "Position yourself as valuable in a new space. Walk into interviews with confidence, knowing exactly how to articulate your transferable skills and unique value.",
    },
    {
      title: "Transition without starting from scratch",
      description:
        "Leverage what you've already built. You're not throwing away years of experience—you're repositioning it for maximum impact in your new direction.",
    },
    {
      title: "Overcome imposter syndrome and fear",
      description:
        "Stop second-guessing yourself. Make decisions as your future self—the version of you who's already made the pivot and is thriving.",
    },
  ],
  phasesSubheadline: "Three phases designed for career pivoters who can't afford to quit before they're ready.",
  phases: [
    {
      label: "PHASE 1: START (Days 1-30)",
      subtitle: "Unlock Your Creative Energy",
      description:
        "Break through the fear and imposter syndrome keeping you stuck. Build unshakeable confidence so you can take action on your pivot—even while employed full-time.",
      sprints: ["Sprint 1: Break Free From Blocks", "Sprint 2: Design Your Future", "Sprint 3: Think Like Your Future Self"],
      outcome:
        "By Day 30: You've clarified exactly where you're going and why. You're taking daily action toward your new role—updating your positioning, reaching out to contacts, building the narrative of your pivot.",
    },
    {
      label: "PHASE 2: SUSTAIN (Days 31-60)",
      subtitle: "Strengthen Your Creative Energy",
      description:
        "Protect your focus and energy while juggling your current job. Build sustainable systems so you can make consistent progress without burning out.",
      sprints: ["Sprint 4: Clear Mental Clutter", "Sprint 5: Build Your Power Systems", "Sprint 6: Become Unbreakable"],
      outcome:
        "By Day 60: You have a system that works around your 9-5. You're showing up consistently—networking, learning, positioning—without sacrificing your sanity or current performance.",
    },
    {
      label: "PHASE 3: SHIP (Days 61-90)",
      subtitle: "Activate Your Creative Energy",
      description:
        "Finish strong. Master the skills that make you indispensable in your new space. Show up with confidence, articulate your value with clarity, and land the role.",
      sprints: ["Sprint 7: Solve Problems Like a Pro", "Sprint 8: Build Your Human Edge", "Sprint 9: Ship & Get Results"],
      outcome: 'By Day 90: You\'ve landed the new role or you\'re in final-round interviews. You\'re not "thinking about pivoting"—you\'ve made the move.',
    },
  ],
  closer: {
    text:
      "This isn't another career coaching program that leaves you with worksheets and no results. It's a complete system that meets you where you are—employed, burned out, scared—and gets you to where you want to be.",
    ctaLabel: "Start Sprint 1 — $97",
    secondaryText: "Sprint 1 launches November 1. Lock in beta pricing.",
    ctaId: "pivot-closer-cta",
  },
};

export default function PivotYourCareerPage() {
  return <PathLandingTemplate {...pivotPageContent} />;
}
