import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { CallbackForm } from "@/components/sections/CallbackForm";
import { siteConfig } from "@/content/site-config";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Free Insurance Quote | Maxwell Financial Services",
  description:
    "Get in touch with Roger Venkatesh at Maxwell Financial Services. Call 021 592 786 or request a free insurance quote online.",
};

export default function ContactPage() {
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
            <span className="text-[#1b2045] font-semibold">Contact Us</span>
          </nav>
        </Container>
      </div>

      {/* Hero Header */}
      <Container>
        <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-14 shadow-sm space-y-4 max-w-[900px] mx-auto text-center">
          <Tag variant="glacial">Get in Touch</Tag>

          <Heading as="h1" size="display">
            We Are Here to Help
          </Heading>

          <p className="text-[17px] sm:text-[19px] text-[#4f4f4f] leading-relaxed max-w-[680px] mx-auto">
            Whether you need a full insurance review, a quick comparison across top NZ insurers, or assistance with a claim, reach out to Roger and Kiri today.
          </p>
        </div>
      </Container>

      {/* Direct Contact Cards */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone */}
          <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 shadow-sm space-y-4 text-center">
            <div className="w-12 h-12 rounded-[16px] bg-[#cce2ff] text-[#006cff] flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="text-[18px] font-bold text-[#1b2045]">Call Us Directly</h2>
            <div className="space-y-2 text-[15px]">
              <div>
                <a
                  href={siteConfig.phone.mobileTel}
                  className="block font-semibold text-[#006cff] hover:underline"
                >
                  {siteConfig.phone.mobile}
                </a>
                <span className="text-[13px] text-[#787878]">Roger Venkatesh (Mobile)</span>
              </div>
              <div className="pt-1 border-t border-[#e9e9e9]">
                <a
                  href={siteConfig.phone.officeTel}
                  className="block font-semibold text-[#1b2045] hover:text-[#006cff]"
                >
                  {siteConfig.phone.office}
                </a>
                <span className="text-[13px] text-[#787878]">Auckland Office</span>
              </div>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 shadow-sm space-y-4 text-center">
            <div className="w-12 h-12 rounded-[16px] bg-[#cce2ff] text-[#006cff] flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-[18px] font-bold text-[#1b2045]">Send an Email</h2>
            <div className="space-y-2 text-[15px]">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block font-semibold text-[#006cff] hover:underline break-all"
              >
                {siteConfig.email}
              </a>
              <p className="text-[13px] text-[#787878]">
                We typically reply within 2–4 business hours.
              </p>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 shadow-sm space-y-4 text-center">
            <div className="w-12 h-12 rounded-[16px] bg-[#cce2ff] text-[#006cff] flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-[18px] font-bold text-[#1b2045]">Office Address</h2>
            <div className="space-y-1 text-[14px] text-[#4f4f4f]">
              <p className="font-semibold text-[#1b2045]">{siteConfig.address.street}</p>
              <p>{siteConfig.address.suburb}, {siteConfig.address.city} {siteConfig.address.postcode}</p>
              <p className="text-[12px] text-[#787878] pt-1">
                Postal: {siteConfig.address.postalAddress}
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Forms Section: Quote Form & Callback Form */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>

          <div className="lg:col-span-4 space-y-8">
            <CallbackForm />

            <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#006cff]" />
                <h3 className="text-[16px] font-bold text-[#1b2045]">
                  Office Hours
                </h3>
              </div>
              <p className="text-[14px] text-[#4f4f4f] leading-relaxed">
                {siteConfig.hours}
              </p>
              <div className="pt-2 border-t border-[#e9e9e9] text-[13px] text-[#787878]">
                Weekend and evening consultations available upon request.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
