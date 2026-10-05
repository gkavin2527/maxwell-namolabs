import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AboutPageHeader } from "@/components/sections/AboutPageHeader";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { CTABand } from "@/components/sections/CTABand";
import { partnersForCover } from "@/content/partners";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "The insurers and providers Maxwell Financial Services works with, including AIA, Fidelity Life, Partners Life, nib, Chubb Life, Momentum Life, Generate and Tower Insurance.",
};

export default function PartnersPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      <AboutPageHeader
        current="/about/partners"
        breadcrumb="Our Partners"
        tag="Our Partners"
        title="The insurers we work with"
        intro="Maxwell Financial Services has an excellent relationship with all major insurers, and we'll make sure you get an insurance solution that is formulated for your circumstances. We're not aligned with any one provider."
        facts={[
          {
            value: String(partnersForCover("Personal risk").length),
            label: "insurers for life, trauma, disability and income protection",
          },
          {
            value: String(partnersForCover("Health").length),
            label: "insurers for health insurance",
          },
          { value: "Tower", label: "for home, car and contents, with online quotes" },
        ]}
      />

      <Container>
        <PartnersSection />
      </Container>

      <Container>
        <CTABand
          title="Find the right cover for you"
          // COMPLIANCE-REVIEW: "FREE no-obligation quote" wording as published on the current site (audit CR-8).
          subtitle="We can provide you a FREE no-obligation quote on all your insurance needs."
          buttonText="Get a Free Quote"
        />
      </Container>
    </div>
  );
}
