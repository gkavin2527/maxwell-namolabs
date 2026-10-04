export interface Partner {
  name: string;
  logo: string;
  alt: string;
  category: "Life & Health" | "General & Commercial" | "Investment & KiwiSaver";
}

export const partners: Partner[] = [
  {
    name: "AIA New Zealand",
    logo: "/images/partners/aia.gif",
    alt: "AIA New Zealand Insurance",
    category: "Life & Health",
  },
  {
    name: "Fidelity Life",
    logo: "/images/partners/fidelity.jpg",
    alt: "Fidelity Life Insurance New Zealand",
    category: "Life & Health",
  },
  {
    name: "Partners Life",
    logo: "/images/partners/partners-life.png",
    alt: "Partners Life Insurance",
    category: "Life & Health",
  },
  {
    name: "nib Insurance",
    logo: "/images/partners/nib.png",
    alt: "nib Health Insurance New Zealand",
    category: "Life & Health",
  },
  {
    name: "Chubb Life",
    logo: "/images/partners/chubb.jpg",
    alt: "Chubb Life Insurance New Zealand",
    category: "Life & Health",
  },
  {
    name: "Momentum Life",
    logo: "/images/partners/momentum.jpg",
    alt: "Momentum Life Insurance",
    category: "Life & Health",
  },
  {
    name: "Generate",
    logo: "/images/partners/generate.jpg",
    alt: "Generate KiwiSaver and Insurance",
    category: "Investment & KiwiSaver",
  },
  {
    name: "Tower Insurance",
    logo: "/images/partners/tower.jpg",
    alt: "Tower General Insurance",
    category: "General & Commercial",
  },
];
