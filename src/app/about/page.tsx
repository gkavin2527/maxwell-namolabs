import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { AboutSubnav } from "@/components/sections/AboutSubnav";
import { AdviserCard } from "@/components/sections/AdviserCard";
import { CTABand } from "@/components/sections/CTABand";
import { advisers } from "@/content/advisers";
import { siteConfig } from "@/content/site-config";
import { ShieldCheck, Award, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Roger & Kiri Venkatesh | Maxwell Financial Services",
  description:
    "Learn about Maxwell Financial Services Limited. Meet licensed financial advisers Roger Venkatesh (FSP 539026) and Kiri Venkatesh (FSP 1007043).",
};

export default function AboutPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Breadcrumb Header */}
      <div className="bg-[#ffffff] border-b border-[#e9e9e9] py-4">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[14px] text-[#787878]">
            <Link href="/" className="hover:text-[#006cff] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1b2045] font-semibold">About Us</span>
          </nav>
        </Container>
      </div>

      {/* Hero Header */}
      <Container className="space-y-5">
        <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-14 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Tag variant="glacial">About Maxwell Financial Services</Tag>
            <span className="text-[13px] text-[#787878] flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#006cff]" />
              FMA Class 2 Advice Provider &bull; {siteConfig.fspNumber}
            </span>
          </div>

          <Heading as="h1" size="display">
            Independent Advice, Decades of Banking &amp; Insurance Experience
          </Heading>

          <p className="text-[17px] sm:text-[19px] text-[#4f4f4f] leading-relaxed max-w-[840px]">
            Maxwell Financial Services Limited was founded in 2017 to provide New Zealand families and business owners with genuinely independent, personalised insurance advice and steadfast claims advocacy.
          </p>
        </div>

        <AboutSubnav current="/about" />
      </Container>

      {/* Advisers Section */}
      <Container>
        <div className="space-y-8">
          <div className="text-center max-w-[680px] mx-auto space-y-2">
            <span className="text-[13px] font-bold text-[#006cff] uppercase tracking-wider">
              Licensed Financial Advisers
            </span>
            <Heading as="h2" size="heading-lg">
              Meet Your Dedicated Team
            </Heading>
            <p className="text-[15px] text-[#4f4f4f]">
              We work directly with you at every stage, providing personalized policy recommendations and ongoing reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisers.map((adviser) => (
              <AdviserCard key={adviser.name} adviser={adviser} />
            ))}
          </div>
        </div>
      </Container>

      {/* Company Philosophy & Credentials */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-10 shadow-sm space-y-5">
            <Heading as="h2" size="heading">
              Our Commitment to You
            </Heading>
            <div className="space-y-4 text-[15px] text-[#4f4f4f] leading-relaxed">
              <p>
                Our goal in the insurance industry is to drive premiums down through better management of the entire insurance process — including personalized support, structured underwriting, and benefit maximization.
              </p>
              <p>
                As independent advisers operating under an FMA Class 2 licence, we are not tied to any single provider. We review products across AIA, Fidelity Life, Partners Life, nib, Chubb, and Tower to find the cover that truly fits your life and budget.
              </p>
              <p>
                Most importantly, we stand beside you during claims. An insurance policy is only as good as the claim experience, and Roger personally assists you in managing and processing any claims requirements you may have.
              </p>
            </div>

            <div className="pt-2">
              <Button href="/contact" variant="primary" size="default">
                Request a Free Consultation
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[16px] bg-[#cce2ff] text-[#006cff] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-[18px] font-bold text-[#1b2045]">
                  Industry Recognition
                </h3>
              </div>
              <p className="text-[14px] text-[#4f4f4f] leading-relaxed">
                Awarded the <strong>Top Achiever Award 2023</strong> at the mySolutions business excellence awards in Auckland, recognizing outstanding client advocacy and advisory excellence.
              </p>
              <Link
                href="/testimonials"
                className="inline-block text-[14px] font-semibold text-[#006cff] hover:underline"
              >
                View Award Details &rarr;
              </Link>
            </div>

            <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[16px] bg-[#cce2ff] text-[#006cff] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[18px] font-bold text-[#1b2045]">
                  Consumer Protection
                </h3>
              </div>
              <p className="text-[14px] text-[#4f4f4f] leading-relaxed">
                Member of <strong>Financial Services Complaints Limited (FSCL)</strong>, an independent approved dispute resolution service providing free support to consumers.
              </p>
              <Link
                href="/disclosure-statement"
                className="inline-block text-[14px] font-semibold text-[#006cff] hover:underline"
              >
                Read Disclosure Statement &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* CTA */}
      <Container>
        <CTABand
          title="Ready to Discuss Your Insurance Options?"
          subtitle="Roger & Kiri are here to help. Reach out today for a friendly, no-obligation conversation."
        />
      </Container>
    </div>
  );
}
