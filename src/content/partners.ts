import { siteConfig } from "@/content/site-config";

// COMPLIANCE-REVIEW: `covers`, `otherPartners` and `coverGroups` mirror the Disclosure
// Statement ("Types of Financial Advice we provide" and the "we work with" lists).
// tests/unit/partners.test.ts checks them against the current copy.
export type PartnerCover =
  | "Personal risk"
  | "Health"
  | "General insurance"
  | "KiwiSaver"
  | "Business";

export interface Partner {
  name: string;
  logo: string;
  alt: string;
  category: "Life & Health" | "General & Commercial" | "Investment & KiwiSaver";
  /** What Maxwell works with this partner for. */
  covers: PartnerCover[];
  /** Online quote tool, where Maxwell has one. */
  quoteUrl?: string;
}

export const partners: Partner[] = [
  {
    name: "AIA New Zealand",
    logo: "/images/partners/aia.gif",
    alt: "AIA New Zealand Insurance",
    category: "Life & Health",
    covers: ["Personal risk", "Health"],
  },
  {
    name: "Fidelity Life",
    logo: "/images/partners/fidelity.jpg",
    alt: "Fidelity Life Insurance New Zealand",
    category: "Life & Health",
    covers: ["Personal risk"],
  },
  {
    name: "Partners Life",
    logo: "/images/partners/partners-life.png",
    alt: "Partners Life Insurance",
    category: "Life & Health",
    covers: ["Personal risk", "Health"],
  },
  {
    name: "nib Insurance",
    logo: "/images/partners/nib.png",
    alt: "nib Health Insurance New Zealand",
    category: "Life & Health",
    covers: ["Personal risk", "Health"],
  },
  {
    name: "Chubb Life",
    logo: "/images/partners/chubb.jpg",
    alt: "Chubb Life Insurance New Zealand",
    category: "Life & Health",
    covers: ["Personal risk"],
  },
  {
    name: "Momentum Life",
    logo: "/images/partners/momentum.jpg",
    alt: "Momentum Life Insurance",
    category: "Life & Health",
    covers: ["Personal risk"],
  },
  {
    name: "Generate",
    logo: "/images/partners/generate.jpg",
    alt: "Generate KiwiSaver and Insurance",
    category: "Investment & KiwiSaver",
    covers: ["KiwiSaver"],
  },
  {
    name: "Tower Insurance",
    logo: "/images/partners/tower.jpg",
    alt: "Tower General Insurance",
    category: "General & Commercial",
    covers: ["General insurance"],
    quoteUrl: siteConfig.towerQuoteUrl,
  },
];

/** Named in the Disclosure Statement but without a logo on the current site. */
export const otherPartners: { name: string; covers: PartnerCover[] }[] = [
  { name: "Howden", covers: ["General insurance"] },
  { name: "Blanket Insurance", covers: ["Business"] },
];

export interface CoverGroup {
  cover: PartnerCover;
  title: string;
  summary: string;
  /** The Disclosure Statement lists this as offered through referral partners. */
  viaReferral?: boolean;
}

export const coverGroups: CoverGroup[] = [
  {
    cover: "Personal risk",
    title: "Personal risk insurance",
    summary: "Life, trauma, disability and income / mortgage type covers.",
  },
  {
    cover: "Health",
    title: "Health insurance",
    summary: "Medical and health insurance.",
  },
  {
    cover: "General insurance",
    title: "General insurance",
    summary: "Fire and general insurance, including home, car and contents.",
    viaReferral: true,
  },
  {
    cover: "KiwiSaver",
    title: "KiwiSaver",
    summary: "KiwiSaver and managed funds.",
    viaReferral: true,
  },
  {
    cover: "Business",
    title: "Business insurance",
    summary: "Insurance for your business.",
  },
];

/** Names of every partner Maxwell works with for the given type of cover. */
export function partnersForCover(cover: PartnerCover): string[] {
  return [...partners, ...otherPartners]
    .filter((partner) => partner.covers.includes(cover))
    .map((partner) => partner.name);
}
