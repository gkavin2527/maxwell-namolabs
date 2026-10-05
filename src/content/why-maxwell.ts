// Copy for the Why Maxwell page.
//
// Every line is taken, or closely paraphrased, from Maxwell's own published
// material (content/scraped/*.md and the Disclosure Statement). Do not add
// statistics, rankings, comparisons with banks or other advisers, or "free" /
// "no cost" advice claims that are not in those sources (PRD FR-005). The
// Disclosure Statement says insurers pay Maxwell commission and that a
// clawback fee can apply, so advice must never be described as free of charge.

export type WhyIcon = "shield" | "handshake" | "target" | "lifebuoy" | "calendar" | "file";

export interface WhyReason {
  icon: WhyIcon;
  title: string;
  body: string;
  link?: { href: string; label: string };
}

// COMPLIANCE-REVIEW: reasons restate the Disclosure Statement ("Licensing Information",
// "Our duties ... and promise to you", "Commission and Fees", "Conflicts of Interest")
// and the Review step on the home page.
export const whyReasons: WhyReason[] = [
  {
    icon: "shield",
    title: "Licensed and regulated",
    body: "Maxwell Financial Services holds a Class 2 Licence issued by the Financial Markets Authority, and our advisers give advice under it.",
  },
  {
    icon: "handshake",
    title: "Not aligned with any one provider",
    body: "We work with major New Zealand insurers and we're not aligned with any one of them, so our advice is tailored to your individual needs.",
  },
  {
    icon: "target",
    title: "Advice that fits your life",
    body: "Our solutions are tailor-made for individuals, families and businesses, and we only provide advice that is suitable to your needs.",
  },
  {
    icon: "lifebuoy",
    title: "Help when you need to claim",
    body: "We're here to help set up your policy and, if something unfortunate happens, to support you through making a claim.",
  },
  {
    icon: "calendar",
    title: "A check-in every year",
    // COMPLIANCE-REVIEW: "free review" wording as published on the current site (audit CR-8).
    body: "Once your cover is in place we'll check in at least once a year to see if your circumstances have changed. If a review is required, we'll arrange a free review so your plan stays relevant to your situation.",
  },
  {
    icon: "file",
    title: "Open about how we're paid",
    body: "If you put a policy in place through us, the insurer pays us commission. Our Disclosure Statement sets out what each provider pays us, any fees that may apply and how we manage conflicts of interest.",
    link: { href: "/disclosure-statement", label: "Read our Disclosure Statement" },
  },
];

// COMPLIANCE-REVIEW: verbatim from the Disclosure Statement, "Our duties (under the
// Financial Markets Conduct Act 2013) and promise to you". tests/unit/why-maxwell.test.ts
// checks each line still matches src/app/disclosure-statement/page.tsx.
export const clientPromises: string[] = [
  "We will educate and provide you expert advice to help you execute a protection plan and achieve security.",
  "We will be fair and honest with you.",
  "We will only provide advice that is suitable to your needs.",
  "We are not aligned with any one provider so you can be assured that our advice is tailored to your individual needs.",
  "We will at all times protect your privacy and confidential information.",
  "We will meet and maintain the competence, knowledge and skill that are set out in the Code of Professional Conduct for Financial Advice Services (Code).",
  "We will maintain the ethical and behavioural standards, as well as duties of care that are required by New Zealand law.",
  "We are here to help, not only set up your policy but also if something unfortunate happens and you need to make a claim.",
  "We will build a relationship with you to support you, your family and your needs and goals.",
];

// Verbatim pledge from the About page of the current site (content/scraped/about.md).
export const clientPledge =
  "We pledge to build strong relationships with our Clients and productive partnerships with our Insurance Carriers and our Community. We will strive to be the best niche marketer of insurance products and services in New Zealand. We will offer appropriate products which provide financial security and protection to kiwi families or individuals. We will deliver value and personalised service and support to our clients.";
