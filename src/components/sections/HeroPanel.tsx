import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { siteConfig } from "@/content/site-config";
import { ShieldCheck, Phone, CheckCircle2 } from "lucide-react";

export function HeroPanel() {
  return (
    <div className="w-full bg-[#006cff] text-[#ffffff] rounded-[40px] p-8 md:p-14 lg:p-16 shadow-[rgba(0,0,0,0.15)_0px_16px_40px_0px] relative overflow-hidden">
      {/* Background radial gradient accent per DESIGN.md */}
      <div
        className="absolute -right-20 -bottom-20 w-[480px] h-[480px] rounded-full pointer-events-none opacity-40 blur-2xl"
        style={{
          background:
            "radial-gradient(78.13% 78.13% at 79.97% 80.72%, rgb(9, 159, 240) 0%, rgb(9, 121, 240) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Col: Core Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <Tag variant="glacial" className="bg-[#cce2ff] text-[#1b2045] font-semibold">
              Independent NZ Insurance Adviser
            </Tag>
            <span className="text-[#cce2ff] text-[13px] flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Class 2 Licensed &bull; FSP737512
            </span>
          </div>

          <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.08] text-[#ffffff] tracking-tight">
            Protecting What Matters Most to New Zealand Families
          </h1>

          <p className="text-[17px] sm:text-[19px] text-[#ffffff]/90 leading-relaxed font-normal max-w-[600px]">
            Personalised life, health, trauma, and business insurance tailored to your budget. We work for you — not the insurance companies.
          </p>

          {/* Value points */}
          <ul className="space-y-2.5 text-[15px] text-[#ffffff]/95">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#cce2ff] shrink-0" />
              <span>Independent comparison across top NZ insurers (AIA, nib, Chubb, Partners Life)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#cce2ff] shrink-0" />
              <span>100% Free, no-obligation quotes and policy reviews</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#cce2ff] shrink-0" />
              <span>Personal claims advocacy when you need it most</span>
            </li>
          </ul>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button
              href="/contact"
              variant="white"
              size="lg"
              className="text-[#006cff] font-bold"
            >
              Get Your Free Quote
            </Button>

            <Button
              href={siteConfig.phone.mobileTel}
              variant="outlineWhite"
              size="lg"
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Roger: {siteConfig.phone.mobile}</span>
            </Button>
          </div>
        </div>

        {/* Right Col: Adviser Spotlight & Trust */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[380px] bg-[#ffffff] text-[#1b2045] rounded-[40px] p-6 shadow-2xl border border-[#ffffff]/20">
            <div className="relative w-full h-[260px] rounded-[32px] overflow-hidden mb-5 bg-[#f9f9f9]">
              <Image
                src="/images/roger-venkatesh.jpg"
                alt="Roger Venkatesh, Director and Financial Adviser"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="space-y-2 text-center">
              <h2 className="text-[20px] font-bold text-[#1b2045]">
                Roger Venkatesh
              </h2>
              <p className="text-[13px] font-semibold text-[#006cff] uppercase tracking-wide">
                Director &amp; Financial Adviser &bull; FSP 539026
              </p>
              <p className="text-[14px] text-[#4f4f4f] leading-snug pt-1">
                19+ years industry experience helping clients secure the best cover at the most competitive premiums.
              </p>

              <div className="pt-3">
                <Button
                  href="/about"
                  variant="secondary"
                  size="sm"
                  className="w-full text-[14px]"
                >
                  Meet Roger &amp; Kiri
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
