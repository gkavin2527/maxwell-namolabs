import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { HeroPanel } from "@/components/sections/HeroPanel";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { TowerCTAModule } from "@/components/sections/TowerCTAModule";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { AdviserSpotlight } from "@/components/sections/AdviserSpotlight";
import { CTABand } from "@/components/sections/CTABand";
import { Recognition } from "@/components/sections/Recognition";
import { WhyMaxwellSummary } from "@/components/sections/WhyMaxwellSummary";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { ShieldCheck, Award, Users, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Maxwell Financial Services | Independent Insurance Adviser NZ",
  description:
    "Expert life, health, trauma, income protection, and commercial insurance advice in Auckland, NZ. Compare leading providers with Roger Venkatesh (FSP 539026).",
};

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. Hero Section */}
      <div>
        <Container>
          <HeroPanel />
        </Container>
      </div>

      {/* 2. Trust Metrics Bar */}
      <Container>
        <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-6 sm:p-8 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-[16px] bg-[#cce2ff] text-[#006cff] mb-1">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-[26px] sm:text-[30px] font-bold text-[#1b2045]">19+</div>
            <div className="text-[13px] text-[#4f4f4f] font-medium">Years Financial Experience</div>
          </div>

          <div className="space-y-1">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-[16px] bg-[#cce2ff] text-[#006cff] mb-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-[26px] sm:text-[30px] font-bold text-[#1b2045]">Class 2</div>
            <div className="text-[13px] text-[#4f4f4f] font-medium">FMA Licensed Advice Provider</div>
          </div>

          <div className="space-y-1">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-[16px] bg-[#cce2ff] text-[#006cff] mb-1">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-[26px] sm:text-[30px] font-bold text-[#1b2045]">8+</div>
            <div className="text-[13px] text-[#4f4f4f] font-medium">Leading Insurer Partners</div>
          </div>

          <div className="space-y-1">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-[16px] bg-[#cce2ff] text-[#006cff] mb-1">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div className="text-[26px] sm:text-[30px] font-bold text-[#1b2045]">100%</div>
            <div className="text-[13px] text-[#4f4f4f] font-medium">Free, No-Obligation Advice</div>
          </div>
        </div>
      </Container>

      {/* 3. Tower Quick Quote Strip */}
      <Container>
        <TowerCTAModule />
      </Container>

      {/* 4. Product Showcase */}
      <Container>
        <div id="products">
          <ProductGrid />
        </div>
      </Container>

      {/* 5. 6-Step Advisory Process */}
      <Container>
        <ProcessSteps />
      </Container>

      {/* 6. Adviser Profile Spotlight */}
      <Container>
        <AdviserSpotlight />
      </Container>

      {/* 7. Partner Provider Logos */}
      <Container>
        <PartnerLogos />
      </Container>

      {/* 8. Why Maxwell */}
      <Container>
        <WhyMaxwellSummary />
      </Container>

      {/* 9. Industry Recognition */}
      <Container>
        <Recognition />
      </Container>

      {/* 10. Customer Reviews */}
      <Container>
        <CustomerReviews />
      </Container>

      {/* 11. Final Call to Action Band */}
      <Container>
        <CTABand />
      </Container>
    </div>
  );
}
