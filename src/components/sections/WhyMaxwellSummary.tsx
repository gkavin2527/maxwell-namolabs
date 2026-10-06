import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { reasonIcons } from "@/components/sections/WhyMaxwell";
import { whyReasons } from "@/content/why-maxwell";

/** Home page version of the Why Maxwell page. The copy lives in src/content/why-maxwell.ts. */
export function WhyMaxwellSummary() {
  return (
    <section
      aria-labelledby="home-why-heading"
      className="bg-electric-cobalt rounded-3xl p-6 sm:p-8 md:p-12 space-y-10"
    >
      <div className="text-center max-w-[720px] mx-auto space-y-4">
        <Tag variant="white">Why Maxwell</Tag>
        <Heading as="h2" id="home-why-heading" size="heading-lg" inverted>
          Insurance advice built on relationships and trust
        </Heading>
        <p className="text-[16px] text-white leading-relaxed">
          Here is what you can expect when you work with Maxwell Financial Services.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {whyReasons.map((reason) => {
          const Icon = reasonIcons[reason.icon];

          return (
            <li key={reason.title} className="bg-white rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-11 h-11 rounded-2xl bg-glacial-wash text-electric-cobalt flex items-center justify-center">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-[18px] font-bold leading-snug text-deep-indigo">{reason.title}</h3>
              <p className="text-[14px] text-graphite leading-relaxed">{reason.body}</p>
              {reason.link && (
                <Link
                  href={reason.link.href}
                  className="mt-auto pt-1 text-[14px] font-semibold text-electric-cobalt hover:underline"
                >
                  {reason.link.label} &rarr;
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      <div className="text-center">
        <Button href="/about/why-maxwell" variant="white" size="default">
          Learn more about Maxwell
        </Button>
      </div>
    </section>
  );
}
