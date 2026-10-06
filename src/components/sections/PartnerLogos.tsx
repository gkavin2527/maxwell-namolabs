import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { partners } from "@/content/partners";

export function PartnerLogos() {
  return (
    <section aria-labelledby="home-partners-heading" className="space-y-10">
      <div className="text-center max-w-[700px] mx-auto space-y-3">
        <Eyebrow>Our Insurance Partners</Eyebrow>
        <Heading as="h2" id="home-partners-heading" size="heading-lg">
          Partners We Work With
        </Heading>
        {/* COMPLIANCE-REVIEW: the "Our Partners" wording on the current site (content/scraped/home.md) */}
        <p className="text-[16px] text-graphite leading-relaxed">
          Maxwell Financial Services has an excellent relationship with all major insurers, and
          we&rsquo;ll make sure you get an insurance solution that is formulated for your
          circumstances.
        </p>
      </div>

      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {partners.map((partner) => (
          <li
            key={partner.name}
            className="bg-white border border-mist rounded-3xl overflow-hidden flex flex-col"
          >
            <div className="h-24 sm:h-28 border-b border-mist p-5 sm:p-6">
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  fill
                  sizes="(min-width: 1024px) 240px, 45vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="p-4 sm:p-5 space-y-1 grow">
              <p className="text-[15px] font-bold text-deep-indigo">{partner.name}</p>
              <p className="text-[13px] text-slate leading-snug">{partner.covers.join(" · ")}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center gap-4">
        <Button href="/about/partners" variant="secondary" size="default">
          See who we work with for each type of cover
        </Button>

        {/* COMPLIANCE-REVIEW: mirrors the Disclosure Statement ("Commission and Fees") */}
        <p className="max-w-[760px] text-center text-[13px] text-slate leading-relaxed">
          If you take out a policy or invest through us, we may be paid commission by the provider.
          Our{" "}
          <Link href="/disclosure-statement" className="underline hover:text-deep-indigo">
            Disclosure Statement
          </Link>{" "}
          sets out how much each provider pays us.
        </p>
      </div>
    </section>
  );
}
