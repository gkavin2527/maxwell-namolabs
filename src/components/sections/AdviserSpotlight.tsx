import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { advisers } from "@/content/advisers";
import { siteConfig } from "@/content/site-config";

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

export function AdviserSpotlight() {
  return (
    <section aria-labelledby="home-advisers-heading" className="space-y-10">
      <div className="text-center max-w-[700px] mx-auto space-y-3">
        <Eyebrow>Your Licensed Advisers</Eyebrow>
        <Heading as="h2" id="home-advisers-heading" size="heading-lg">
          Meet Your Financial Advisers
        </Heading>
        <p className="text-[16px] text-graphite leading-relaxed">
          Roger and Kiri look after you from your first conversation through to setting up your
          policy and, if you ever need to claim, supporting you through it.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {advisers.map((adviser) => {
          const headingId = `home-adviser-${slugify(adviser.name)}`;

          return (
            <article
              key={adviser.name}
              aria-labelledby={headingId}
              className="bg-white border border-mist rounded-3xl p-7 sm:p-8 flex flex-col gap-6"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-3xl overflow-hidden bg-glacial-wash/40">
                  <Image
                    src={adviser.photo}
                    alt={adviser.photoAlt}
                    fill
                    sizes="(min-width: 640px) 128px, 96px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="space-y-2">
                  {adviser.fspNumber && <Tag variant="glacial">{adviser.fspNumber}</Tag>}
                  <h3 id={headingId} className="text-[22px] font-bold leading-tight text-deep-indigo">
                    {adviser.name}
                  </h3>
                  <p className="text-[14px] font-semibold text-graphite">{adviser.role}</p>
                </div>
              </div>

              <p className="flex items-start gap-2 text-[14px] text-slate">
                <Award className="w-4 h-4 mt-0.5 shrink-0 text-electric-cobalt" aria-hidden="true" />
                <span>{adviser.experience}</span>
              </p>

              <p className="text-[15px] text-graphite leading-relaxed">{adviser.bio[0]}</p>
            </article>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href={siteConfig.phone.mobileTel} variant="primary" size="default" className="gap-2">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Call {siteConfig.phone.mobile}</span>
          </Button>
          <Button
            href={`mailto:${siteConfig.email}`}
            variant="secondary"
            size="default"
            className="gap-2"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Email us</span>
          </Button>
        </div>

        <Button href="/about/advisers" variant="ghost" size="link" className="text-[14px] font-semibold">
          Read the full adviser profiles &rarr;
        </Button>
      </div>

      {/* COMPLIANCE-REVIEW: mirrors the Disclosure Statement, "Licensing Information" */}
      <p className="max-w-[760px] mx-auto text-center text-[13px] text-slate leading-relaxed">
        {siteConfig.legalName} ({siteConfig.fspNumber}) holds a {siteConfig.licenceType} issued by the
        Financial Markets Authority to provide financial advice. Both advisers can give advice under
        our {siteConfig.licenceType}.{" "}
        <Link href="/disclosure-statement" className="underline hover:text-deep-indigo">
          Read our Disclosure Statement
        </Link>
        .
      </p>
    </section>
  );
}
