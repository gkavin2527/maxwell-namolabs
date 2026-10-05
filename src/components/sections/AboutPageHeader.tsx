import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { AboutSubnav } from "@/components/sections/AboutSubnav";

export interface AboutFact {
  value: string;
  label: string;
}

export interface AboutPageHeaderProps {
  /** Route of the page being shown, e.g. "/about/advisers". */
  current: string;
  /** Final breadcrumb label. */
  breadcrumb: string;
  tag: string;
  title: string;
  intro: string;
  /** Short, verifiable facts shown in the brand panel beside the intro. */
  facts?: AboutFact[];
}

/** Breadcrumb, hero card and section sub-navigation shared by the About Us pages. */
export function AboutPageHeader({
  current,
  breadcrumb,
  tag,
  title,
  intro,
  facts,
}: AboutPageHeaderProps) {
  return (
    <>
      <div className="bg-white border-b border-mist py-4">
        <Container>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[14px] text-slate">
            <Link href="/" className="hover:text-electric-cobalt transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <Link href="/about" className="hover:text-electric-cobalt transition-colors">
              About Us
            </Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span aria-current="page" className="text-deep-indigo font-semibold">
              {breadcrumb}
            </span>
          </nav>
        </Container>
      </div>

      <Container className="space-y-5">
        <div className="bg-white border border-mist rounded-3xl p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className={facts?.length ? "lg:col-span-7 space-y-6" : "lg:col-span-12 space-y-6"}>
            <Tag variant="glacial">{tag}</Tag>
            <Heading as="h1" size="display">
              {title}
            </Heading>
            <p className="text-[17px] sm:text-[19px] text-graphite leading-relaxed max-w-[640px]">
              {intro}
            </p>
          </div>

          {facts?.length ? (
            <ul
              aria-label="At a glance"
              className="lg:col-span-5 bg-electric-cobalt text-white rounded-3xl p-8 divide-y divide-white/25"
            >
              {facts.map((fact) => (
                <li key={fact.label} className="py-4 first:pt-0 last:pb-0 space-y-1">
                  <p className="text-[28px] font-bold leading-tight">{fact.value}</p>
                  <p className="text-[14px] leading-snug">{fact.label}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <AboutSubnav current={current} />
      </Container>
    </>
  );
}
