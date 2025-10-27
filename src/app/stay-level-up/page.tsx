import { PathLandingTemplate, type PathLandingTemplateProps } from "@/components/PathLandingTemplate";

const stayLevelUpContent: PathLandingTemplateProps = {
  hero: {
    eyebrow: "Choose Your Path",
    headline: "Ready to Future-Proof Your Career?",
    subheadline: "Master AI, become indispensable, and position yourself for promotion—without leaving your job.",
    paragraphs: [
      "You're not ready to quit. But you know the industry is shifting fast, and staying still means falling behind. \"What if AI makes me obsolete? What if I can't keep up? How do I stay relevant?\"",
      "The truth: You don't need to leave. You need to evolve. Master the skills AI can't replicate, position yourself as irreplaceable, and lead the change instead of fearing it.",
    ],
    ctaLabel: "Start Evolving — $97",
    ctaId: "stay-hero-cta",
  },
  outcomes: [
    {
      title: "Become the go-to person in your organization",
      description:
        "Position yourself as indispensable. You're not just doing your job—you're solving problems no one else can, seeing opportunities others miss, and leading with confidence.",
    },
    {
      title: "Lead with AI, not fear it",
      description:
        "Master the tools that amplify your creativity and productivity. You're not being replaced by AI—you're leveraging it to become 10x more valuable.",
    },
    {
      title: "Position yourself for promotion or new opportunities",
      description:
        "Stand out as someone who adapts, innovates, and delivers. Whether it's a promotion, a raise, or new opportunities internally, you're no longer invisible.",
    },
  ],
  phasesSubheadline: "Three phases designed for professionals who want to level up without burning out.",
  phases: [
    {
      label: "PHASE 1: START (Days 1-30)",
      subtitle: "Unlock Your Creative Energy",
      description:
        "Break through the fear and self-doubt that keep you playing small. Build the confidence to take on bigger challenges and position yourself as a leader—not just an executor.",
      sprints: ["Sprint 1: Break Free From Blocks", "Sprint 2: Design Your Future", "Sprint 3: Think Like Your Future Self"],
      outcome:
        "By Day 30: You're no longer waiting for permission or the \"right moment.\" You're taking initiative, speaking up in meetings, and positioning yourself as someone who leads—not just follows.",
    },
    {
      label: "PHASE 2: SUSTAIN (Days 31-60)",
      subtitle: "Strengthen Your Creative Energy",
      description:
        "Optimize your focus, energy, and productivity. Build systems that help you perform at your peak without burning out—so you can consistently deliver exceptional work.",
      sprints: ["Sprint 4: Clear Mental Clutter", "Sprint 5: Build Your Power Systems", "Sprint 6: Become Unbreakable"],
      outcome:
        "By Day 60: You're operating at a higher level than your peers. You've mastered focus, eliminated distractions, and built resilience. You're consistently showing up as your best self.",
    },
    {
      label: "PHASE 3: SHIP (Days 61-90)",
      subtitle: "Activate Your Creative Energy",
      description:
        "Master the AI-proof skills that make you irreplaceable: creative problem-solving, emotional intelligence, and the ability to ship results. Position yourself for the promotion or opportunity you want.",
      sprints: ["Sprint 7: Solve Problems Like a Pro", "Sprint 8: Build Your Human Edge", "Sprint 9: Ship & Get Results"],
      outcome:
        "By Day 90: You've positioned yourself as indispensable. You're solving problems others can't, leading initiatives, and getting recognized. You're not worried about AI—you're leveraging it.",
    },
  ],
  closer: {
    text:
      "This isn't another professional development course that gives you certificates and no results. It's a complete system that transforms how you show up, perform, and position yourself—so you're future-proof, not obsolete.",
    ctaLabel: "Start Sprint 1 — $97",
    secondaryText: "Sprint 1 launches November 1. Lock in beta pricing.",
    ctaId: "stay-closer-cta",
  },
};

export default function StayLevelUpPage() {
  return <PathLandingTemplate {...stayLevelUpContent} />;
}
