import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AboutPageHeader } from "@/components/sections/AboutPageHeader";
import { AdvisersSection } from "@/components/sections/AdvisersSection";
import { CTABand } from "@/components/sections/CTABand";
import { advisers } from "@/content/advisers";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Our Advisers",
  description:
    "Meet Roger and Kiri Venkatesh, the licensed financial advisers at Maxwell Financial Services in Auckland (FSP 539026 and FSP 1007043).",
};

export default function AdvisersPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      <AboutPageHeader
        current="/about/advisers"
        breadcrumb="Our Advisers"
        tag="Our Advisers"
        title="Meet Roger and Kiri"
        intro="Roger and Kiri Venkatesh are the licensed financial advisers at Maxwell Financial Services. Both give advice under our Class 2 Licence from our office in New Lynn, Auckland."
        facts={[
          ...advisers.map((adviser) => ({
            value: adviser.fspNumber ?? adviser.name,
            label: `${adviser.name}, ${adviser.role}`,
          })),
          { value: siteConfig.phone.mobile, label: "Call us to speak with an adviser" },
        ]}
      />

      <Container>
        <AdvisersSection />
      </Container>

      <Container>
        <CTABand
          title="Talk to Roger and Kiri"
          subtitle="Reach out for a friendly, no-obligation conversation about your insurance needs."
          buttonText="Get in touch"
        />
      </Container>
    </div>
  );
}
