import * as React from "react";
import Image from "next/image";
import { awards } from "@/content/testimonials";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Award as AwardIcon } from "lucide-react";

export function Recognition() {
  const award = awards[0];
  if (!award) return null;
  const photo = award.images[0];

  return (
    <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="space-y-5 order-2 lg:order-1">
        <span className="text-[13px] font-bold text-[#006cff] uppercase tracking-wider">
          Industry Recognition
        </span>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-[16px] bg-[#cce2ff] text-[#006cff] flex items-center justify-center shrink-0">
            <AwardIcon className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <Heading as="h2" size="heading-lg">
              {award.title}
            </Heading>
            <p className="text-[15px] text-[#6c6c6c]">{award.event}</p>
          </div>
        </div>

        <p className="text-[16px] text-[#4f4f4f] leading-relaxed">
          On 14 March 2024, Maxwell Financial Services received the Top Achiever Award 2023 at the
          mySolutions Business Excellence Awards, held at the Hyundai Marine Events Centre on
          Auckland&rsquo;s Tamaki Drive.
        </p>

        <Button href="/testimonials" variant="secondary">
          See Our Awards
        </Button>
      </div>

      {photo && (
        <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden bg-[#f9f9f9] order-1 lg:order-2">
          <Image
            src={photo.src}
            alt="The Maxwell Financial Services team holding the mySolutions Top Achiever 2023 award"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
