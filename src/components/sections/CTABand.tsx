import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { siteConfig } from "@/content/site-config";
import { Phone } from "lucide-react";

export interface CTABandProps {
  title?: string;
  subtitle?: string;
}

export function CTABand({
  title = "Ready to Review or Put New Insurance in Place?",
  subtitle = "Talk to Roger today for independent advice, free quotes, and personalised cover tailored to your family's needs.",
}: CTABandProps) {
  return (
    <div className="bg-[#006cff] text-[#ffffff] rounded-[40px] p-8 md:p-14 shadow-lg text-center relative overflow-hidden">
      <div className="max-w-[720px] mx-auto space-y-6 relative z-10">
        <Heading as="h2" size="heading-lg" inverted className="text-[#ffffff]">
          {title}
        </Heading>

        <p className="text-[17px] text-[#ffffff]/90 leading-relaxed font-normal">
          {subtitle}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="white"
            size="lg"
            className="text-[#006cff] font-bold"
          >
            Get A Free Quote
          </Button>

          <Button
            href={siteConfig.phone.mobileTel}
            variant="outlineWhite"
            size="lg"
            className="flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call {siteConfig.phone.mobile}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
