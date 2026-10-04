import * as React from "react";
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

      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processSteps.map((step) => {
          const Icon = step.icon;
          return (
            <li
              key={step.stepNumber}
              className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-7"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-[16px] bg-[#cce2ff] text-[#006cff] flex items-center justify-center">
                  <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <span className="text-[13px] font-bold text-[#6c6c6c] tracking-wider">
                  STEP 0{step.stepNumber}
                </span>
              </div>

              <h3 className="text-[20px] font-bold text-[#1b2045] mb-2">
                {step.title}
              </h3>

              <p className="text-[15px] text-[#4f4f4f] leading-relaxed">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>

      <div className="text-center">
        <Button href="/contact" size="lg">
          Get a Free Quote
        </Button>
      </div>
    </div>
  );
}
