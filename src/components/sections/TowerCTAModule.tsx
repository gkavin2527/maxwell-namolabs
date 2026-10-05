import * as React from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { ExternalLink } from "lucide-react";

export function TowerCTAModule() {
  return (
    <div className="bg-[#006cff] rounded-[40px] p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        <div className="bg-[#ffffff] rounded-[16px] w-[112px] h-[56px] relative shrink-0">
          <Image
            src="/images/partners/tower.jpg"
            alt="Tower Insurance"
            fill
            className="object-contain p-2"
          />
        </div>

        <div className="flex-1 space-y-2">
          <Heading as="h3" size="heading" inverted>
            Home, Car &amp; Contents Insurance
          </Heading>
          <p className="text-[16px] text-[#ffffff]/80 leading-relaxed max-w-[560px]">
            Get a quote online with Tower in a few minutes. Cover one, or bundle all three together.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Button
            href={siteConfig.towerQuoteUrl}
            external
            variant="white"
            className="gap-2"
          >
            <span>Get a Tower Quote</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </Button>
          <Button href="/contact" variant="outlineWhite">
            Ask Roger First
          </Button>
        </div>
      </div>
    </div>
  );
}
