import * as React from "react";
import Image from "next/image";
import { partners } from "@/content/partners";
import { Heading } from "@/components/ui/Heading";

export function PartnerLogos() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-[680px] mx-auto space-y-2">
        <span className="text-[13px] font-bold text-[#006cff] uppercase tracking-wider">
          Top New Zealand Insurers
        </span>
        <Heading as="h2" size="heading-lg">
          Partners We Work With
        </Heading>
        <p className="text-[15px] text-[#4f4f4f]">
          We compare policies across New Zealand’s most reputable insurance providers to find the optimal coverage and premium terms for you.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 items-center">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-[#ffffff] border border-[#e9e9e9] rounded-[24px] p-5 h-[100px] flex items-center justify-center hover:border-[#66a7ff] transition-colors shadow-sm group"
          >
            <div className="relative w-full h-[52px]">
              <Image
                src={partner.logo}
                alt={partner.alt}
                fill
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
