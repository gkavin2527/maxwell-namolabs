import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site-config";

export function Footer() {
  return (
    <footer className="bg-[#f9f9f9] border-t border-[#e9e9e9]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Main row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10 py-14">
          {/* Left: Logo + tagline + copyright */}
          <div className="space-y-3 max-w-[300px]">
            <Image
              src="/images/logo.png"
              alt="Maxwell Financial Services"
              width={160}
              height={44}
              className="h-[36px] w-auto object-contain"
            />
            <p className="text-[13px] text-[#6c6c6c] leading-relaxed">
              Independent New Zealand insurance advisory. Helping families and
              businesses navigate life, health, and commercial risks since 2017.
            </p>
            <p className="text-[12px] text-[#6c6c6c]">
              &copy; 2024–2026 {siteConfig.legalName}. All rights reserved.
            </p>
          </div>

          {/* Right: Link columns */}
          <div className="flex gap-16 sm:gap-20">
            {/* Product */}
            <div>
              <h3 className="text-[13px] font-semibold text-[#1b2045] mb-4">
                Insurance
              </h3>
              <ul className="space-y-3 text-[13px] text-[#6c6c6c]">
                <li>
                  <Link href="/" className="hover:text-[#1b2045] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/life-insurance" className="hover:text-[#1b2045] transition-colors">
                    Life Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/health-insurance" className="hover:text-[#1b2045] transition-colors">
                    Health Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/home-insurance" className="hover:text-[#1b2045] transition-colors">
                    Home Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#1b2045] transition-colors">
                    Get a Free Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[13px] font-semibold text-[#1b2045] mb-4">
                Company
              </h3>
              <ul className="space-y-3 text-[13px] text-[#6c6c6c]">
                <li>
                  <Link href="/about" className="hover:text-[#1b2045] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about/why-maxwell" className="hover:text-[#1b2045] transition-colors">
                    Why Maxwell
                  </Link>
                </li>
                <li>
                  <Link href="/about/advisers" className="hover:text-[#1b2045] transition-colors">
                    Our Advisers
                  </Link>
                </li>
                <li>
                  <Link href="/about/partners" className="hover:text-[#1b2045] transition-colors">
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-[#1b2045] transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/disclosure-statement" className="hover:text-[#1b2045] transition-colors">
                    Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#1b2045] transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#1b2045] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Giant brand watermark — gradient blue like MaxHome */}
      <div
        className="overflow-hidden select-none pointer-events-none"
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
