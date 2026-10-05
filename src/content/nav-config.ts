export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  children?: {
    category?: string;
    items: NavItem[];
  }[];
}

/**
 * Pages in the About Us section. Shared by the header dropdown and the
 * sub-navigation on each About page so the two can't drift apart.
 */
export const aboutPageLinks: NavItem[] = [
  {
    label: "About Maxwell Financial",
    href: "/about",
    description: "Meet Roger & Kiri Venkatesh, your independent Auckland insurance advisers.",
  },
  {
    label: "Why Maxwell",
    href: "/about/why-maxwell",
    description: "What you can expect when you work with us.",
  },
  {
    label: "Our Advisers",
    href: "/about/advisers",
    description: "Roger and Kiri Venkatesh, licensed financial advisers.",
  },
  {
    label: "Our Partners",
    href: "/about/partners",
    description: "The insurers we work with.",
  },
];

export const mainNavConfig: (NavItem | NavGroup)[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Insurance",
    children: [
      {
        category: "Personal & Family Cover",
        items: [
          {
            label: "Life Insurance",
            href: "/life-insurance",
            description: "Financial security for your family in the event of death or terminal illness.",
          },
          {
            label: "Trauma Insurance",
            href: "/trauma-insurance",
            description: "Tax-free lump sum payment upon critical illness or injury diagnosis.",
          },
          {
            label: "Income Protection",
            href: "/income-protection",
            description: "Monthly income replacement if sickness or injury keeps you from working.",
          },
          {
            label: "Permanent Disability (TPD)",
            href: "/permanent-disability-insurance",
            description: "Substantial lump sum cover if permanent disability prevents future work.",
          },
          {
            label: "Health Insurance",
            href: "/health-insurance",
            description: "Prompt access to private hospitals, diagnostics, and specialist treatments.",
          },
        ],
      },
      {
        category: "Property & Vehicle",
        items: [
          {
            label: "Home Insurance",
            href: "/home-insurance",
            description: "Rebuild and natural hazard protection for your residential properties.",
          },
          {
            label: "Car Insurance",
            href: "/car-insurance",
            description: "Comprehensive vehicle cover and roadside support across New Zealand.",
          },
          {
            label: "Contents Insurance",
            href: "/contents-insurance",
            description: "Protect your furniture, portable tech, and valuables anywhere in NZ.",
          },
        ],
      },
      {
        category: "Commercial & Business",
        items: [
          {
            label: "Business Insurance",
            href: "/business-insurance",
            description: "Commercial risk management, key person cover, and liability protection.",
          },
        ],
      },
    ],
  },
  {
    label: "About Us",
    children: [
      {
        category: "Who We Are",
        items: aboutPageLinks,
      },
      {
        category: "Trust & Legal",
        items: [
          {
            label: "Testimonials & Awards",
            href: "/testimonials",
            description: "Client feedback and our 2023 mySolutions Top Achiever recognition.",
          },
          {
            label: "Disclosure Statement",
            href: "/disclosure-statement",
            description: "Class 2 Licence disclosure, duties, commissions, and disputes process.",
          },
          {
            label: "Privacy Policy",
            href: "/privacy-policy",
            description: "How we collect, store, and protect your personal information.",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
