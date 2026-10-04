import {
  ClipboardList,
  FileCheck,
  Presentation,
  RefreshCw,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  stepNumber: number;
  title: string;
  icon: LucideIcon;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Discover",
    icon: Search,
    description:
      "We learn about your health, assets, liabilities, goals and current cover to see whether it is right for your situation.",
  },
  {
    stepNumber: 2,
    title: "The Plan",
    icon: ClipboardList,
    description:
      "Using the best products available in New Zealand, we tailor a plan to your situation, budget and future plans.",
  },
  {
    stepNumber: 3,
    title: "Present",
    icon: Presentation,
    description:
      "We meet with you, explain the reasons behind every recommendation and adjust anything you would like changed.",
  },
  {
    stepNumber: 4,
    title: "Implement",
    icon: FileCheck,
    description:
      "We complete the applications, submit them to the insurer and keep you updated until your cover is in place.",
  },
  {
    stepNumber: 5,
    title: "Review",
    icon: RefreshCw,
    description:
      "At least once a year we check whether your circumstances have changed, with a free review if your cover needs adjusting.",
  },
  {
    stepNumber: 6,
    title: "Insured & Supported",
    icon: ShieldCheck,
    // NOTE(audit C-2): In the scraped site, Step 6 had identical body copy to Step 5.
    // TODO(client): Provide client's intended copy for Step 6 ('Insured').
    description:
      "If you ever need to claim, we act as your advocate with the insurer to keep the process smooth and stress-free.",
  },
];
