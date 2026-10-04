import * as React from "react";
import Image from "next/image";
import { processSteps } from "@/content/process-steps";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export function ProcessSteps() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-[700px] mx-auto space-y-3">
        <span className="text-[13px] font-bold text-[#006cff] uppercase tracking-wider">
          How We Work For You
        </span>
        <Heading as="h2" size="heading-lg">
          Our 6-Step Advisory Process
        </Heading>
        <p className="text-[16px] text-[#4f4f4f] leading-relaxed">
          We take the stress and confusion out of insurance. Here is how we ensure you get the right cover, structured properly from day one.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {processSteps.map((step) => (
          <div
            key={step.stepNumber}
            className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-7 flex flex-col justify-between hover:border-[#66a7ff] transition-colors shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[13px] font-bold text-[#006cff] bg-[#cce2ff] px-3 py-1 rounded-[16px]">
                  Step 0{step.stepNumber}
                </span>
                <div className="w-12 h-12 relative">
                  <Image
                    src={step.icon}
                    alt={step.iconAlt}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-[20px] font-bold text-[#1b2045] mb-2.5">
                {step.title}
              </h3>

              <p className="text-[15px] text-[#4f4f4f] leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-[#e9e9e9]">
              <Button href="/contact" variant="ghost" size="link" className="text-[14px] text-[#006cff]">
                Get A Free Quote &rarr;
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
