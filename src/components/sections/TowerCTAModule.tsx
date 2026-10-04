import * as React from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { ExternalLink, ShieldCheck } from "lucide-react";

export function TowerCTAModule() {
  return (
    <div className="bg-[#ffffff] border-2 border-[#cce2ff] rounded-[40px] p-8 md:p-12 shadow-sm relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#006cff] bg-[#cce2ff] px-3 py-1 rounded-[16px]">
              Direct Partner Quote
            </span>
            <div className="h-6 w-20 relative">
              <Image
                src="/images/partners/tower.jpg"
                alt="Tower Insurance"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <Heading as="h3" size="heading">
            Need an Instant Online Quote for Home, Car, or Contents?
          </Heading>

          <p className="text-[15px] text-[#4f4f4f] leading-relaxed max-w-[640px]">
            Through our partnership with Tower Insurance, you can calculate premiums and build your customized home, vehicle, and contents bundle online in minutes.
          </p>

          <div className="flex items-center gap-2 text-[13px] text-[#787878]">
            <ShieldCheck className="w-4 h-4 text-[#006cff]" />
            <span>Maxwell Financial Services client code pre-applied: <strong>MYSOL142</strong></span>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center items-stretch md:items-end">
          <Button
            href={siteConfig.towerQuoteUrl}
            external
            variant="primary"
            size="lg"
            className="flex items-center justify-center gap-2 font-semibold"
          >
            <span>Quote Online Now</span>
            <ExternalLink className="w-4 h-4" />
          </Button>

          <Button
            href="/contact"
            variant="secondary"
            size="default"
            className="text-center"
          >
            Ask Roger for Advice First
          </Button>
        </div>
      </div>
    </div>
  );
}
