import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { advisers } from "@/content/advisers";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

export function AdvisersSection() {
  const { address } = siteConfig;

  return (
    <div className="space-y-12 sm:space-y-16">
      <div className="space-y-8">
        {advisers.map((adviser, index) => {
          const headingId = `adviser-${slugify(adviser.name)}`;
          const firstName = adviser.name.split(" ")[0];

          return (
            <article
              key={adviser.name}
              aria-labelledby={headingId}
              className="bg-white border border-mist rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              <div
                className={cn(
                  "lg:col-span-5 bg-glacial-wash/40 p-8 md:p-12 flex items-center justify-center",
                  index % 2 === 1 && "lg:order-2"
                )}
              >
                <div className="relative w-full max-w-[340px] aspect-square">
                  <Image
                    src={adviser.photo}
                    alt={adviser.photoAlt}
                    fill
                    sizes="(min-width: 1024px) 340px, 70vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 p-8 md:p-12 space-y-6">
                <div className="space-y-3">
                  {adviser.fspNumber && <Tag variant="glacial">{adviser.fspNumber}</Tag>}
                  <Heading as="h2" id={headingId} size="heading-lg">
                    {adviser.name}
                  </Heading>
                  <p className="text-[16px] font-semibold text-deep-indigo">{adviser.role}</p>
                  {adviser.legalName && (
                    <p className="text-[13px] text-slate">Registered name: {adviser.legalName}</p>
                  )}
                </div>

                <p className="flex items-start gap-2 text-[14px] text-graphite">
                  <Award className="w-4 h-4 mt-0.5 shrink-0 text-electric-cobalt" aria-hidden="true" />
                  <span>{adviser.experience}</span>
                </p>

                <div className="space-y-4 text-[15px] text-graphite leading-relaxed">
                  {adviser.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    href={siteConfig.phone.mobileTel}
                    variant="primary"
                    size="default"
                    className="gap-2"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Call {adviser.phone}</span>
                  </Button>
                  <Button
                    href={`mailto:${adviser.email}`}
                    variant="secondary"
                    size="default"
                    className="gap-2"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Email {firstName}</span>
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section
          aria-labelledby="advisers-licence-heading"
          className="bg-white border border-mist rounded-3xl p-8 space-y-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-glacial-wash text-electric-cobalt flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" aria-hidden="true" />
          </div>
          <Heading as="h2" id="advisers-licence-heading" size="heading">
            Licensed to give advice
          </Heading>
          {/* COMPLIANCE-REVIEW: mirrors the Disclosure Statement, "Licensing Information" */}
          <p className="text-[15px] text-graphite leading-relaxed">
            {siteConfig.legalName} ({siteConfig.fspNumber}) holds a {siteConfig.licenceType} issued by
            the Financial Markets Authority to provide financial advice. The following advisers can
            give advice under our Class 2 Licence:
          </p>
          <ul className="space-y-1 text-[15px] font-medium text-deep-indigo">
            {advisers.map((adviser) => (
              <li key={adviser.name}>
                {adviser.legalName ?? adviser.name} ({adviser.fspNumber})
              </li>
            ))}
          </ul>
          <Link
            href="/disclosure-statement"
            className="inline-block pt-1 text-[14px] font-semibold text-electric-cobalt hover:underline"
          >
            Read our Disclosure Statement &rarr;
          </Link>
        </section>

        <section
          aria-labelledby="advisers-contact-heading"
          className="bg-white border border-mist rounded-3xl p-8 flex flex-col gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-glacial-wash text-electric-cobalt flex items-center justify-center">
            <Phone className="w-6 h-6" aria-hidden="true" />
          </div>
          <Heading as="h2" id="advisers-contact-heading" size="heading">
            Get in touch
          </Heading>
          <ul className="space-y-3 text-[15px] text-graphite">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-0.5 shrink-0 text-electric-cobalt" aria-hidden="true" />
              <span>
                <a href={siteConfig.phone.mobileTel} className="font-semibold text-deep-indigo hover:underline">
                  {siteConfig.phone.mobile}
                </a>{" "}
                mobile &bull;{" "}
                <a href={siteConfig.phone.officeTel} className="font-semibold text-deep-indigo hover:underline">
                  {siteConfig.phone.office}
                </a>{" "}
                office
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-0.5 shrink-0 text-electric-cobalt" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-deep-indigo hover:underline">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-electric-cobalt" aria-hidden="true" />
              <span>
                {address.street}, {address.suburb}, {address.city} {address.postcode}
              </span>
            </li>
          </ul>
          <Button href="/contact" variant="secondary" size="default" className="mt-auto self-start">
            Send an enquiry
          </Button>
        </section>
      </div>
    </div>
  );
}
