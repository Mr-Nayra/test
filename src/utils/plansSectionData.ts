import plan1_bg from "./images/plansSection/plan1_bg.webp";
import plan2_bg from "./images/plansSection/plan2_bg.webp";

export const plansSectionData = [
  {
    backgroundImage: plan1_bg,
    heading: "Open-source",
    targetUser: "Get Started for free",
    charges: "Free",
    description: [
      "Unlimited evaluations",
      "Help with Onboarding",
      "Community Slack support",
    ],
    buttonText: "Read Docs",
  },
  {
    backgroundImage: plan1_bg,
    heading: "Managed",
    targetUser: "For small teams",
    charges: "$ 50/month",
    description: [
      "5,000 evaluations per month",
      "OpenAI API Cost included",
      "Realtime dashboards",
      "Monthly consultations for custom metrics",
      "Dedicated Slack support",
    ],
    buttonText: "Start Free Trial",
  },
  // {
  //   backgroundImage: plan1_bg,
  //   heading: "PRO",
  //   targetUser: "For small teams.",
  //   charges: "$ 499/month",
  //   description: [
  //     "20,000 evaluations per month",
  //     "OpenAI API Cost included",
  //     "Weekly consultations for custom metrics",
  //     "24*7 Slack support",
  //     "CEO’s Personal Number",
  //   ],
  //   buttonText: "Start Free Trial",
  // },
  {
    backgroundImage: plan1_bg,
    heading: "Custom",
    targetUser: "For enterprises",
    charges: "Custom",
    description: [
      "Unlimited evaluations",
      "White-label and embedded offering",
      "Premium support for custom metrics",
      "24*7 Slack support",
      "Self Hosted Deployments",
      "CEO's Personal Number",
    ],
    buttonText: "Talk To Us",
  },
];
