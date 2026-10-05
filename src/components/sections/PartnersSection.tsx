import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { coverGroups, partners, partnersForCover } from "@/content/partners";

// Short plain-English version of the Discover, The Plan and Present steps on the home page.
const matchSteps = [
  {
    title: "We learn about you",
    body: "We gather information about you, your goals and your current cover so we can check whether you have the right insurance for your situation.",
  },
  {
    title: "We tailor a plan",
    body: "Using the best products available in New Zealand, we put together a plan that matches your situation, budget and objectives.",
  },
  {
    title: "We explain our advice",
    body: "We meet you to present the plan, explain the reasons behind our recommendations and work with you on any changes you want.",
  },
];

export function PartnersSection() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Partner grid */}
      <section aria-labelledby="partners-grid-heading">
        <h2 id="partners-grid-heading" className="sr-only">
          Our partners
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="bg-white border border-mist rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="h-[112px] border-b border-mist p-6">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 90vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-6 flex flex-col gap-3 grow">
                <h3 className="text-[18px] font-bold text-deep-indigo">{partner.name}</h3>
                <ul className="flex flex-wrap gap-2">
                  {partner.covers.map((cover) => (
                    <li key={cover}>
                      <Tag variant="glacial">{cover}</Tag>
                    </li>
                  ))}
                </ul>
                {partner.quoteUrl && (
                  <a
                    href={partner.quoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-electric-cobalt hover:underline"
                  >
                    Get an online quote
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* By type of cover */}
      <section aria-labelledby="partners-covers-heading" className="space-y-8">
        <div className="text-center max-w-[680px] mx-auto space-y-3">
          <Tag variant="glacial">By type of cover</Tag>
          <Heading as="h2" id="partners-covers-heading" size="heading-lg">
            Who we work with for each type of cover
          </Heading>
        </div>

        <ul className="bg-white border border-mist rounded-3xl divide-y divide-mist overflow-hidden">
          {coverGroups.map((group) => (
            <li
              key={group.cover}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:p-8 md:items-center"
            >
              <div className="md:col-span-5 space-y-1">
                <h3 className="text-[18px] font-bold text-deep-indigo">{group.title}</h3>
                <p className="text-[14px] text-slate">
                  {group.summary}
                  {group.viaReferral && " Offered through referral partners."}
                </p>
              </div>
              <ul className="md:col-span-7 flex flex-wrap gap-2">
                {partnersForCover(group.cover).map((name) => (
                  <li
                    key={name}
                    className="inline-flex items-center rounded-sm bg-parchment border border-mist px-3 py-1.5 text-[14px] font-medium text-deep-indigo"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* COMPLIANCE-REVIEW: mirrors the Disclosure Statement ("Services offered through referral partners", "Commission and Fees") */}
        <p className="max-w-[760px] mx-auto text-center text-[13px] text-slate leading-relaxed">
          If you take out a policy or invest through us, we may be paid commission by the provider.
          Our{" "}
          <Link href="/disclosure-statement" className="underline hover:text-deep-indigo">
            Disclosure Statement
          </Link>{" "}
          sets out how much each provider pays us.
        </p>
      </section>

      {/* How we match you with a policy */}
      <section aria-labelledby="partners-steps-heading" className="space-y-8">
        <div className="text-center max-w-[680px] mx-auto space-y-3">
          <Tag variant="glacial">How it works</Tag>
          <Heading as="h2" id="partners-steps-heading" size="heading-lg">
            How we match you with a policy
          </Heading>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matchSteps.map((step, index) => (
            <li
              key={step.title}
              className="bg-white border border-mist rounded-3xl p-8 flex flex-col gap-3"
            >
              <span
                aria-hidden="true"
                className="w-10 h-10 rounded-2xl bg-glacial-wash text-deep-indigo font-bold flex items-center justify-center"
              >
                {index + 1}
              </span>
              <h3 className="text-[20px] font-bold text-deep-indigo">{step.title}</h3>
              <p className="text-[15px] text-graphite leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
