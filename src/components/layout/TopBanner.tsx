import * as React from "react";
import { siteConfig } from "@/content/site-config";
import { Phone, Mail, ShieldCheck } from "lucide-react";

export function TopBanner() {
  return (
    <div className="bg-[#006cff] text-[#ffffff] py-2 px-4 text-[13px] font-medium border-b border-[#0052cc]">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#cce2ff] shrink-0" aria-hidden="true" />
          <span>
            Licensed Class 2 Financial Advice Provider &bull; {siteConfig.fspNumber}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.phone.mobileTel}
            className="flex items-center gap-1.5 hover:text-[#cce2ff] transition-colors focus-visible:outline-none focus-visible:underline"
            aria-label={`Call Roger Venkatesh on ${siteConfig.phone.mobile}`}
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{siteConfig.phone.mobile}</span>
          </a>

          <a
            href={siteConfig.phone.officeTel}
            className="hidden sm:flex items-center gap-1.5 hover:text-[#cce2ff] transition-colors focus-visible:outline-none focus-visible:underline"
            aria-label={`Call Auckland Office on ${siteConfig.phone.office}`}
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{siteConfig.phone.office}</span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-[#cce2ff] transition-colors focus-visible:outline-none focus-visible:underline"
            aria-label={`Email ${siteConfig.email}`}
          >
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{siteConfig.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
