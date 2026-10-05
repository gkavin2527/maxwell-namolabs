import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CTABandProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABand({
  title = "Bring clarity, structure, and peace of mind to your family's future",
  subtitle,
  buttonText = "Start your Consultation",
  buttonHref = "/contact",
}: CTABandProps) {
  return (
    <div className="relative rounded-[40px] overflow-hidden min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center p-8 sm:p-12 md:p-16 border border-[#e9e9e9]/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
      {/* Background landscape image matching reference */}
      <Image
        src="/images/cta-sunset-landscape.jpg"
        alt="Serene landscape horizon"
        fill
        className="object-cover object-[center_35%]"
        sizes="(max-width: 1280px) 100vw, 1200px"
        priority
      />

      {/* Atmospheric ambient overlay for smooth bottom fade and perfect contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered content strictly matching the reference */}
      <div className="relative z-10 text-center max-w-[780px] mx-auto space-y-6 sm:space-y-8 px-4">
        <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-semibold text-[#1b2045] tracking-tight leading-[1.14]">
          {title}
        </h2>

        {subtitle && (
          <p className="text-[15px] sm:text-[16px] text-[#4f4f4f] max-w-[560px] mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        <div>
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1b2045] hover:bg-[#006cff] active:bg-[#005bd6] text-white font-medium text-[15px] shadow-[0_4px_14px_rgba(27,32,69,0.22)] hover:shadow-[0_8px_24px_rgba(0,108,255,0.28)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
