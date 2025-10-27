import { PathLandingTemplate, type PathLandingTemplateProps } from "@/components/PathLandingTemplate";

const launchBusinessContent: PathLandingTemplateProps = {
  hero: {
    eyebrow: "Choose Your Path",
    headline: "Ready to Launch Your Business?",
    subheadline: "Stop overthinking. Launch your business or side hustle—and land your first clients—in 90 days.",
    paragraphs: [
      "You've been sitting on the idea for months (maybe years). You know what you want to build, but paralysis keeps you stuck. \"Where do I even start? What if it fails? What if no one buys?\"",
      "The truth: You don't need more information. You need a system that breaks through the fear, eliminates decision fatigue, and gives you daily momentum—even with a full-time job.",
    ],
    ctaLabel: "Start Building — $97",
    ctaId: "launch-hero-cta",
  },
  outcomes: [
    {
      title: "Launch and gain your first clients or customers",
      description:
        "Stop planning and start shipping. By Day 90, your business is live—not just \"in progress.\" You've made your first sales and validated that people will pay for what you offer.",
    },
    {
      title: "Build systems that work around your life",
      description:
        "Create a sustainable side hustle (or full-time business) that fits your 9-5, family commitments, and energy levels. No burnout. No all-nighters. Just consistent progress.",
    },
    {
      title: "Create sustainable income—not just hustle harder",
      description:
        "Build something that scales. You're not just trading time for money—you're creating systems, offers, and momentum that compound over time.",
    },
  ],
  phasesSubheadline: "Three phases designed for builders who need to launch while keeping their day job.",
  phases: [
    {
      label: "PHASE 1: START (Days 1-30)",
      subtitle: "Unlock Your Creative Energy",
      description:
        "Break through the paralysis and fear keeping your idea stuck in your head. Build the confidence and clarity to take your first real steps—while still employed.",
      sprints: ["Sprint 1: Break Free From Blocks", "Sprint 2: Design Your Future", "Sprint 3: Think Like Your Future Self"],
      outcome:
        "By Day 30: You've stopped planning and started building. Your idea is no longer hypothetical—you're taking daily action on your launch, making real progress.",
    },
    {
      label: "PHASE 2: SUSTAIN (Days 31-60)",
      subtitle: "Strengthen Your Creative Energy",
      description:
        "Protect your focus and build a system that works around your 9-5. Eliminate distractions, optimize your energy, and show up consistently without burning out.",
      sprints: ["Sprint 4: Clear Mental Clutter", "Sprint 5: Build Your Power Systems", "Sprint 6: Become Unbreakable"],
      outcome:
        "By Day 60: You have a sustainable system for building your business nights and weekends. You're making real progress without sacrificing sleep, health, or your current job performance.",
    },
    {
      label: "PHASE 3: SHIP (Days 61-90)",
      subtitle: "Activate Your Creative Energy",
      description:
        "Stop preparing and start shipping. Master the skills that attract clients, close deals, and create momentum. Launch with confidence and land your first sales.",
      sprints: ["Sprint 7: Solve Problems Like a Pro", "Sprint 8: Build Your Human Edge", "Sprint 9: Ship & Get Results"],
      outcome: "By Day 90: Your business is live. You've gained your first clients or customers. You're not \"working on your business\"—you have a business.",
    },
  ],
  closer: {
    text:
      "This isn't another course that teaches theory and leaves you stuck in analysis paralysis. It's a complete system that takes you from idea to launch—with real revenue—in 90 days.",
    ctaLabel: "Start Sprint 1 — $97",
    secondaryText: "Sprint 1 launches November 1. Lock in beta pricing.",
    ctaId: "launch-closer-cta",
  },
};

export default function LaunchBusinessPage() {
  return <PathLandingTemplate {...launchBusinessContent} />;
}
