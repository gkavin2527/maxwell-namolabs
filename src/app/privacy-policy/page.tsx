// COMPLIANCE-REVIEW: Privacy policy verbatim from scraped source with Privacy Act 2020 alignment.

import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Maxwell Financial Services Ltd",
  description:
    "Privacy Policy for Maxwell Financial Services Limited. How we collect, store, protect and manage your personal and health information under the Privacy Act 2020.",
};

export default function PrivacyPolicyPage() {
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
            <span className="text-[#1b2045] font-semibold">Privacy Policy</span>
          </nav>
        </Container>
      </div>

      <Container narrow>
        <article className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-14 shadow-sm space-y-8 text-[15px] text-[#4f4f4f] leading-relaxed">
          <header className="space-y-4 pb-6 border-b border-[#e9e9e9]">
            <Tag variant="glacial">Legal &amp; Compliance</Tag>
            <Heading as="h1" size="display">
              Privacy Policy
            </Heading>
            <p className="text-[14px] text-[#787878]">
              Maxwell Financial Services Limited &bull; Last updated: April 2026
            </p>
          </header>

          <p className="text-[16px] font-medium text-[#1b2045]">
            We have implemented measures to comply with our obligations under the Privacy Act 2020, including the Health Information Privacy Code 2020.
          </p>

          <section className="space-y-3">
            <Heading as="h2" size="heading-sm">
              Why does Maxwell Financial Services Limited collect my personal information?
            </Heading>
            <p>
              We collect personal information primarily to enable us to provide insurance benefits and related services. If the information provided to us is not accurate or complete, we may not be able to provide an accurate quote, or provide benefits for the requested insurance or related services.
            </p>
          </section>

          <section className="space-y-3">
            <Heading as="h2" size="heading-sm">
              What personal information does Maxwell Financial Services Limited keep?
            </Heading>
            <p>
              The personal information we hold will depend on whether someone is an insured person or a recognised provider and which services they have used. Information may include:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name, address, contact details, date of birth, email address;</li>
              <li>Payment history;</li>
              <li>Current or past details of private health insurance;</li>
              <li>Claim details;</li>
              <li>Health information including pre-existing condition information;</li>
              <li>Employment or membership details where the insurance policy is connected to a workplace or association;</li>
              <li>Travel plans.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <Heading as="h2" size="heading-sm">
              How does Maxwell Financial Services Limited collect personal information?
            </Heading>
            <p>
              We may collect personal information directly, in person or by phone or internet when someone:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Applies to become a customer or recognised provider, including when someone starts and does not complete an online application to become a customer;</li>
              <li>Becomes a customer as part of a workplace or association scheme;</li>
              <li>Provides information during the course of their policy or relationship with Maxwell Financial Services Limited;</li>
              <li>Requests information concerning our services; or lodges a claim.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <Heading as="h2" size="heading-sm">
              How does Maxwell Financial Services Limited use personal information?
            </Heading>
            <p>The information we collect is used to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide benefits for insurance and related services;</li>
              <li>Determine eligibility to provide or receive an insurance or related service;</li>
              <li>Administer insurance and related services;</li>
              <li>Develop, promote or market our current and future insurance and related services;</li>
              <li>Prevent, detect and investigate any fraud; and</li>
              <li>Comply with laws and regulations.</li>
            </ul>
            {/* COMPLIANCE-REVIEW: Scraped text retains reference to Privacy Act 1993/2020 */}
            <p className="pt-2 text-[14px]">
              If we use personal information for direct marketing or research purposes, we will do so in accordance with the Privacy Act 2020 including the Health Information Privacy Code 2020 and any electronic marketing or research correspondence sent to an individual will give them the opportunity to &ldquo;opt out&rdquo; of receiving any further marketing or research correspondence.
            </p>
          </section>

          <section className="space-y-3">
            <Heading as="h2" size="heading-sm">
              Use of AI tools and recording
            </Heading>
            <p>
              We may use AI-powered tools to record, transcribe, and summarise meetings (including phone/video/in-person). This may involve audio recordings and transcripts of discussions about your financial situation.
            </p>
            <p className="font-semibold text-[#1b2045]">Purpose:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To improve accuracy of advice records</li>
              <li>To ensure compliance with regulatory requirements</li>
              <li>To reduce administrative errors</li>
            </ul>
            <p className="font-semibold text-[#1b2045] pt-2">Third-party providers:</p>
            <p>
              We use third-party service providers (such as Marloo and Zoom AI note taker) to process recordings and generate notes. They are contractually bound to protect your information. Data may be stored overseas, such as in the United States and Australia.
            </p>
          </section>

          <section className="space-y-3">
            <Heading as="h2" size="heading-sm">
              Specific Notification
            </Heading>
            <p>
              On those occasions when we obtain private or confidential information from a third party, we will:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Explicitly name the source of information</li>
              <li>Describe types of data or information received</li>
              <li>Clearly advise what our specific purpose is</li>
              <li>Identify other potential recipients</li>
              <li>Obtain your acknowledgement and consent</li>
            </ul>
          </section>

          <section className="space-y-3">
            <Heading as="h2" size="heading-sm">
              Will personal information be given to anyone else?
            </Heading>
            <p>
              In providing our services and using personal information in accordance with this Policy, we may collect information from or disclose a person’s personal information to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your financial adviser and the dealership group that they are a member of;</li>
              <li>The Group Administrator where the insurance policy is part of a workplace or association scheme;</li>
              <li>Insurance service providers including other insurers and reinsurers, recognised private hospitals and public hospitals, doctors and medical specialists and professional medical authorities, including the ACC and the Ministry of Health;</li>
              <li>Our contractors and service providers performing services including legal, marketing, market research, and IT administration;</li>
              <li>Our existing and future strategic partners in respect of covers and services provided under a distribution arrangement;</li>
              <li>Industry bodies, to aid in the prevention, detection and investigation of fraud; and</li>
              <li>Law enforcement agencies, regulators or other parties as required by law.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <Heading as="h2" size="heading-sm">
              Can personal information be checked and corrected?
            </Heading>
            <p>
              The accuracy of personal information is important to us. We will take reasonable steps to ensure that personal information is accurate, complete and up-to-date. If a person believes that any personal information we hold is not accurate, complete or up-to-date, the person should contact us immediately.
            </p>
          </section>

          <section className="space-y-3">
            <Heading as="h2" size="heading-sm">
              Is personal information secure?
            </Heading>
            <p>
              We take all reasonable steps to ensure personal information is kept secure. We protect the privacy and security of the personal information we hold through the use of encryption, security access controls, firewalls, and computerized security systems. Access to information stored electronically is restricted to staff whose positions require access.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#e9e9e9]">
            <Heading as="h2" size="heading-sm">
              Need more information?
            </Heading>
            <p>
              Personal information is collected and held by Maxwell Financial Services Limited.
            </p>
            <div className="space-y-1 text-[14px]">
              <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-[#006cff] underline">{siteConfig.email}</a></p>
              <p><strong>Mobile:</strong> <a href={siteConfig.phone.mobileTel} className="text-[#006cff] underline">{siteConfig.phone.mobile}</a></p>
              <p><strong>Office Phone:</strong> <a href={siteConfig.phone.officeTel} className="text-[#006cff] underline">{siteConfig.phone.office}</a></p>
              <p><strong>Address:</strong> {siteConfig.address.street}, {siteConfig.address.suburb}, {siteConfig.address.city} {siteConfig.address.postcode}</p>
            </div>
          </section>
        </article>
      </Container>
    </div>
  );
}
