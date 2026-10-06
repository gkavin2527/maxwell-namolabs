import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CalendarCheck,
  Check,
  FileText,
  Handshake,
  LifeBuoy,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { awards } from "@/content/testimonials";
import { siteConfig } from "@/content/site-config";
import { clientPledge, clientPromises, whyReasons, type WhyIcon } from "@/content/why-maxwell";

export const reasonIcons: Record<WhyIcon, LucideIcon> = {
  shield: ShieldCheck,
  handshake: Handshake,
  target: Target,
  lifebuoy: LifeBuoy,
  calendar: CalendarCheck,
  file: FileText,
};

export function WhyMaxwell() {
  const award = awards[0];
  const awardPhoto = award?.images[0];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* What you can expect */}
      <section aria-labelledby="why-reasons-heading" className="space-y-8">
        <div className="text-center max-w-[680px] mx-auto space-y-3">
          <Tag variant="glacial">What to expect</Tag>
          <Heading as="h2" id="why-reasons-heading" size="heading-lg">
            What you can expect from us
          </Heading>
          <p className="text-[16px] text-graphite leading-relaxed">
            Our business is built on relationships and trust. Here is what that looks like when you
            work with Maxwell Financial Services.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyReasons.map((reason) => {
            const Icon = reasonIcons[reason.icon];

            return (
              <li
                key={reason.title}
                className="bg-white border border-mist rounded-3xl p-8 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-glacial-wash text-electric-cobalt flex items-center justify-center">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-[20px] font-bold text-deep-indigo">{reason.title}</h3>
                <p className="text-[15px] text-graphite leading-relaxed">{reason.body}</p>
                {reason.link && (
                  <Link
                    href={reason.link.href}
                    className="mt-auto pt-2 text-[14px] font-semibold text-electric-cobalt hover:underline"
                  >
                    {reason.link.label} &rarr;
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* Pledge and promise */}
      <section
        aria-labelledby="why-promise-heading"
        className="bg-electric-cobalt text-white rounded-3xl p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10"
      >
        <div className="lg:col-span-5 space-y-6">
          <p className="text-[12px] font-medium uppercase tracking-wider">Our pledge</p>
          <blockquote className="space-y-4">
            <p className="text-[17px] md:text-[19px] leading-relaxed font-medium">
              &ldquo;{clientPledge}&rdquo;
            </p>
            <footer className="text-[14px]">Maxwell Financial Services Limited</footer>
          </blockquote>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <Heading as="h2" id="why-promise-heading" size="heading-lg" inverted>
              Our promise to you
            </Heading>
            <p className="text-[15px]">
              Our duties under the Financial Markets Conduct Act 2013, as set out in our Disclosure
              Statement.
            </p>
          </div>

          <ol className="space-y-3">
            {clientPromises.map((promise) => (
              <li key={promise} className="flex items-start gap-3 text-[15px] leading-relaxed">
                <Check className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{promise}</span>
              </li>
            ))}
          </ol>

          <Button href="/disclosure-statement" variant="white" size="default">
            Read our Disclosure Statement
          </Button>
        </div>
      </section>

      {/* Recognition and consumer protection */}
      <section aria-labelledby="why-recognition-heading" className="space-y-8">
        <div className="text-center max-w-[680px] mx-auto space-y-3">
          <Tag variant="glacial">Trust</Tag>
          <Heading as="h2" id="why-recognition-heading" size="heading-lg">
            Recognition and consumer protection
          </Heading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {award && awardPhoto && (
            <article className="bg-white border border-mist rounded-3xl overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10]">
                <Image
                  src={awardPhoto.src}
                  alt={awardPhoto.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <Award className="w-6 h-6 text-electric-cobalt" aria-hidden="true" />
                <h3 className="text-[20px] font-bold text-deep-indigo">{award.title}</h3>
                <p className="text-[14px] text-slate">
                  {award.event} &bull; {award.date}
                </p>
                <Link
                  href="/testimonials"
                  className="inline-block pt-1 text-[14px] font-semibold text-electric-cobalt hover:underline"
                >
                  View award details &rarr;
                </Link>
              </div>
            </article>
          )}

          <article className="bg-white border border-mist rounded-3xl overflow-hidden flex flex-col">
            <div className="aspect-[16/10] bg-white border-b border-mist flex items-center justify-center p-8">
              <Image
                src="/images/trust/fscl-member-logo.png"
                alt="Financial Services Complaints Ltd (FSCL), a Financial Ombudsman Service"
                width={330}
                height={116}
                className="w-full max-w-[330px] h-auto"
              />
            </div>
            <div className="p-8 space-y-3">
              <ShieldCheck className="w-6 h-6 text-electric-cobalt" aria-hidden="true" />
              <h3 className="text-[20px] font-bold text-deep-indigo">Independent dispute resolution</h3>
              {/* COMPLIANCE-REVIEW: Disclosure Statement, "What should you do if you are unhappy with something?" */}
              <p className="text-[15px] text-graphite leading-relaxed">
                FSCL is our independent external ombudsman and dispute resolution service, approved by
                the Minister of Consumer Affairs. Their service costs you nothing, as we pay for it.
              </p>
              <Link
                href="/disclosure-statement"
                className="inline-block pt-1 text-[14px] font-semibold text-electric-cobalt hover:underline"
              >
                See how to make a complaint &rarr;
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* COMPLIANCE-REVIEW: verbatim FSP / licence paragraph (PRD FR-027) */}
      <p className="max-w-[860px] mx-auto text-center text-[13px] text-slate leading-relaxed">
        {siteConfig.regulatoryStatement}{" "}
        <Link href="/disclosure-statement" className="underline hover:text-deep-indigo">
          Read our Disclosure Statement
        </Link>
        .
      </p>
    </div>
  );
}
