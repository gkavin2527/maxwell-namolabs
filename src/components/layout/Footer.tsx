"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site-config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Footer() {
  const footerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined" || !footerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Staggered smooth fade-up entrance for columns
      gsap.from(".footer-animated-col", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });

      // Subtle watermark fade-in
      gsap.from(".footer-watermark", {
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#f9f9f9] border-t border-[#e9e9e9]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16 py-14">
          
          {/* Left: Brand / Company Info */}
          <div className="footer-animated-col lg:w-[340px] shrink-0 space-y-4">
            <Link href="/" className="inline-block focus-visible:outline-none transition-transform duration-200 hover:scale-[1.02]">
              <Image
                src="/images/logo.png"
                alt="Maxwell Financial Services"
                width={150}
                height={40}
                className="h-[34px] w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-[#6c6c6c] leading-[1.65]">
              Independent New Zealand insurance advisory. Helping families and
              businesses navigate life, health, and commercial risks since 2017.
            </p>
            <p className="text-[12px] text-[#9a9a9a] pt-1">
              &copy; 2024–{new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            </p>
          </div>

          {/* Right: 3 Neatly Aligned Link Columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 lg:max-w-[700px] lg:ml-auto">
            {/* Column 1: Personal Insurance */}
            <div className="footer-animated-col space-y-4">
              <h3 className="text-[13px] font-semibold text-[#1b2045] tracking-tight">
                Personal Insurance
              </h3>
              <ul className="space-y-2.5 text-[13px] text-[#6c6c6c]">
                <li>
                  <Link href="/life-insurance" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Life Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/trauma-insurance" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Trauma Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/health-insurance" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Health Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/income-protection" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Income Protection
                  </Link>
                </li>
                <li>
                  <Link href="/life-insurance" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Mortgage Protection
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: General & Business */}
            <div className="footer-animated-col space-y-4">
              <h3 className="text-[13px] font-semibold text-[#1b2045] tracking-tight">
                General &amp; Business
              </h3>
              <ul className="space-y-2.5 text-[13px] text-[#787878]">
                <li>
                  <Link href="/home-insurance" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Home Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/contents-insurance" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Contents Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/car-insurance" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Car Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/business-insurance" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Business Insurance
                  </Link>
                </li>
                <li>
                  <a
                    href={siteConfig.towerQuoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5"
                  >
                    Instant Tower Quote
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="footer-animated-col space-y-4">
              <h3 className="text-[13px] font-semibold text-[#1b2045] tracking-tight">
                Company
              </h3>
              <ul className="space-y-2.5 text-[13px] text-[#6c6c6c]">
                <li>
                  <Link href="/about" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about/why-maxwell" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Why Maxwell
                  </Link>
                </li>
                <li>
                  <Link href="/about/advisers" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Our Advisers
                  </Link>
                </li>
                <li>
                  <Link href="/about/partners" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/disclosure-statement" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#006cff] hover:translate-x-1 inline-block transition-all duration-200 py-0.5">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Giant brand watermark — gradient blue like MaxHome with subtle reveal */}
      <div
        className="footer-watermark overflow-hidden select-none pointer-events-none"
        aria-hidden="true"
      >
        <p
          className="text-center font-bold leading-none tracking-tighter whitespace-nowrap"
          style={{
            fontSize: "clamp(80px, 20vw, 240px)",
            background: "linear-gradient(to bottom, #006cff 0%, #cce2ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "-0.08em",
          }}
        >
          Maxwell
        </p>
      </div>
    </footer>
  );
}
