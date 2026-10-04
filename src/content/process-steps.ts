export interface ProcessStep {
  stepNumber: number;
  title: string;
  icon: string;
  iconAlt: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Discover",
    icon: "/images/process/options.png",
    iconAlt: "Discover and understand your needs",
    description:
      "As with any plan for the future, we need to gather information about you. This information will vary depending on the cover being put in place and may include gathering details of medical conditions, assets, liabilities, expenses, your goals, and current coverage so a review can ascertain whether you have the right insurance for your current situation.",
  },
  {
    stepNumber: 2,
    title: "The Plan",
    icon: "/images/process/information.png",
    iconAlt: "Customised insurance plan tailoring",
    description:
      "Using the best products available in New Zealand, we will tailor a plan that will match requirements taking into account your current situation, budget, current and future plans, objectives, and requirements. This will be a plan that is tailored just for you.",
  },
  {
    stepNumber: 3,
    title: "Present",
    icon: "/images/process/meeting.png",
    iconAlt: "Presenting recommendations in person or online",
    description:
      "We will come back to meet you and present the insurance plan. We will fully explain the reasons behind our recommendations and work with you on any changes or variations you might want to the recommendations.",
  },
  {
    stepNumber: 4,
    title: "Implement",
    icon: "/images/process/ticking.png",
    iconAlt: "Putting your insurance cover into action",
    description:
      "In this step, we work with you to put your insurance plan into action. This involves completion of application forms and gathering of supporting documentation. We then submit your application to the insurance company and follow it through underwriting, acceptance, and issue, keeping you informed at every stage.",
  },
  {
    stepNumber: 5,
    title: "Review",
    icon: "/images/process/covered.png",
    iconAlt: "Annual policy check and review",
    description:
      "Once your insurance is in place we will touch base with you. We will at least once a year check with you to see if your circumstances have changed. A change in circumstances may require an adjustment in your levels of cover with a free review.",
  },
  {
    stepNumber: 6,
    title: "Insured & Supported",
    icon: "/images/process/insured.png",
    iconAlt: "Full ongoing claims and policy support",
    // NOTE(audit C-2): In the scraped site, Step 6 had identical body copy to Step 5.
    // TODO(client): Provide client's intended copy for Step 6 ('Insured').
    description:
      "Enjoy full peace of mind knowing you and your family are protected. In the event of a claim, Roger and the Maxwell team act as your personal advocate to ensure smooth, stress-free claim processing with the insurer.",
  },
];
