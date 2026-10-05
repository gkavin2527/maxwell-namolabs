import * as React from "react";
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
    <div className="relative rounded-[40px] overflow-hidden min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex items-center justify-center p-8 sm:p-12 md:p-16 border border-[#e9e9e9]/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
      {/* ── Pure Sunset Sky Gradient matching reference ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(110% 75% at 50% 0%, rgba(255, 196, 154, 0.95) 0%, rgba(251, 168, 126, 0.85) 30%, rgba(232, 167, 194, 0.75) 55%, rgba(206, 190, 230, 0.6) 75%, transparent 100%),
            radial-gradient(70% 50% at 15% 15%, rgba(255, 214, 185, 0.9) 0%, transparent 70%),
            radial-gradient(70% 50% at 85% 15%, rgba(250, 185, 145, 0.9) 0%, transparent 70%),
            linear-gradient(180deg, #fec7a2 0%, #f6b5c3 32%, #e0cff0 62%, #f2ebf7 82%, #faf8fc 95%, #ffffff 100%)
          `,
        }}
      />

      {/* ── Soft Rolling Dune Curves (Pure Vector Gradient Waves) ── */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden h-[180px] sm:h-[220px]">
        {/* Back Dune Wave */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-[160px] sm:h-[190px]"
          viewBox="0 0 1440 220"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120 C 320 60, 680 160, 1020 90 C 1220 50, 1360 80, 1440 100 L 1440 220 L 0 220 Z"
            fill="url(#duneBack)"
          />
          <defs>
            <linearGradient id="duneBack" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ded5ea" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#f5eff8" stopOpacity="0.85" />
            </linearGradient>
          </defs>
        </svg>

        {/* Middle Dune Wave */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-[130px] sm:h-[160px]"
          viewBox="0 0 1440 180"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80 C 240 140, 560 40, 920 100 C 1180 140, 1340 70, 1440 90 L 1440 180 L 0 180 Z"
            fill="url(#duneMid)"
          />
          <defs>
            <linearGradient id="duneMid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ebe4f3" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#faf7fc" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>

        {/* Front Foreground Dune Wave */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-[90px] sm:h-[120px]"
          viewBox="0 0 1440 140"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 C 380 10, 720 80, 1100 40 C 1280 20, 1390 50, 1440 60 L 1440 140 L 0 140 Z"
            fill="url(#duneFront)"
          />
          <defs>
            <linearGradient id="duneFront" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f7f3fa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── Centered Content strictly matching reference ── */}
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
