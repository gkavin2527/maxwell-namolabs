import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AboutPageHeader } from "@/components/sections/AboutPageHeader";
import { WhyMaxwell } from "@/components/sections/WhyMaxwell";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Why Maxwell",
  description:
    "Why clients choose Maxwell Financial Services: a licensed Auckland advice team, advice tailored to you, support when you claim and a check-in on your cover every year.",
};

export default function WhyMaxwellPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      <AboutPageHeader
        current="/about/why-maxwell"
        breadcrumb="Why Maxwell"
        tag="Why Maxwell"
        title="Insurance advice built on relationships and trust"
        intro="Maxwell Financial Services Limited is an Auckland-based financial advice provider helping New Zealand individuals, families and businesses protect what matters most."
        facts={[
          { value: "Class 2 Licence", label: "Licensed by the Financial Markets Authority (FSP737512)" },
          { value: "Since 2017", label: "Founded by Roger Venkatesh in Auckland" },
          { value: "19 years", label: "Industry experience across banking and insurance" },
        ]}
      />

      <Container>
        <WhyMaxwell />
      </Container>

      <Container>
        <CTABand
          title="Let's talk about your cover"
          // COMPLIANCE-REVIEW: "FREE no-obligation quote" wording as published on the current site (audit CR-8).
          subtitle="We can provide you a FREE no-obligation quote on all your insurance needs."
          buttonText="Get a Free Quote"
        />
      </Container>
    </div>
  );
}
