"use client";

import * as React from "react";
import Link from "next/link";
import { ShieldCheck, Phone } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface CTABandProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABand({
  title = "Bring clarity, structure, and peace of mind to your family\x27s future",
  subtitle,
  buttonText = "Start your Consultation",
  buttonHref = "/contact",
}: CTABandProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Smooth entrance reveal animation when scrolling into view
      gsap.from(".cta-animated-content", {
        y: 35,
        opacity: 0,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Subtle ambient background glow pulse
      gsap.to(".cta-ambient-glow", {
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-[32px] sm:rounded-[40px] overflow-hidden py-14 sm:py-16 md:py-20 px-6 sm:px-10 md:px-14 border border-[#e9e9e9] shadow-[0_4px_24px_rgba(0,108,255,0.04)] bg-white flex items-center justify-center"
    >
      {/* ── Brand Theme Gradient: Glacial Wash, Sky Tint & Cobalt Ambient Mesh ── */}
      <div
        className="cta-ambient-glow absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `
            radial-gradient(120% 90% at 50% -20%, rgba(204, 226, 255, 0.85) 0%, rgba(225, 238, 255, 0.65) 35%, rgba(240, 247, 255, 0.5) 65%, transparent 100%),
            radial-gradient(75% 55% at 10% 15%, rgba(215, 233, 255, 0.75) 0%, transparent 65%),
            radial-gradient(75% 55% at 90% 15%, rgba(204, 226, 255, 0.75) 0%, transparent 65%),
            linear-gradient(180deg, #edf5ff 0%, #f6faff 50%, #ffffff 100%)
          `,
        }}
      />

      {/* ── Centered Content matching website design system ── */}
      <div className="relative z-10 text-center max-w-[720px] mx-auto space-y-6">
        <h2 className="cta-animated-content text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#1b2045] tracking-tight leading-[1.16]">
          {title}
        </h2>

        {subtitle && (
          <p className="cta-animated-content text-[15px] sm:text-[16px] text-[#4f4f4f] max-w-[560px] mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Action Area: Moderately Sized Button (Arrow Removed) + Lowered Trust Line */}
        <div className="cta-animated-content pt-2 flex flex-col items-center justify-center">
          <Link
            href={buttonHref}
            className="group relative inline-flex items-center justify-center px-9 py-4 sm:px-11 sm:py-4.5 rounded-[16px] bg-[#006cff] hover:bg-[#0056cc] active:bg-[#0047a8] text-white font-semibold text-[16px] sm:text-[17px] shadow-[0_6px_20px_rgba(0,108,255,0.28)] hover:shadow-[0_10px_30px_rgba(0,108,255,0.42)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer text-center"
          >
            <span>{buttonText}</span>
          </Link>

          {/* Clean trust assurance row — spaced lower down with smooth micro-hover */}
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 text-[13px] text-[#6c6c6c] pt-5 sm:pt-6">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#1b2045]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#006cff] shrink-0" />
              <span>Free 15-min consultation</span>
            </span>
            <span className="text-[#cccccc] select-none" aria-hidden="true">•</span>
            <span>No obligation</span>
            <span className="text-[#cccccc] select-none" aria-hidden="true">•</span>
            <a
              href={siteConfig.phone.mobileTel}
              className="inline-flex items-center gap-1.5 font-medium text-[#1b2045] hover:text-[#006cff] transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#006cff] shrink-0" />
              <span>Call {siteConfig.phone.mobile}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
