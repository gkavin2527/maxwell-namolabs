import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { awards, testimonials } from "@/content/testimonials";
import { CTABand } from "@/components/sections/CTABand";
import { Award as AwardIcon, Star, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials & Awards | Maxwell Financial Services",
  description:
    "Client recognition and industry awards for Maxwell Financial Services. Winner of the mySolutions Top Achiever Award 2023.",
};

export default function TestimonialsPage() {
  const topAward = awards[0];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Breadcrumb Header */}
      <div className="bg-[#ffffff] border-b border-[#e9e9e9] py-4">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[14px] text-[#787878]">
            <Link href="/" className="hover:text-[#006cff] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1b2045] font-semibold">Testimonials &amp; Awards</span>
          </nav>
        </Container>
      </div>

      {/* Hero Header */}
      <Container>
        <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-14 shadow-sm text-center max-w-[900px] mx-auto space-y-4">
          <Tag variant="glacial">Recognition &amp; Client Feedback</Tag>

          <Heading as="h1" size="display">
            Awards &amp; Customer Trust
          </Heading>

          <p className="text-[17px] sm:text-[19px] text-[#4f4f4f] leading-relaxed max-w-[680px] mx-auto">
            At Maxwell Financial Services, our priority is providing honest, transparent advice and exceptional claims support when our clients need it most.
          </p>
        </div>
      </Container>

      {/* Featured Award Section */}
      {topAward && (
        <Container>
          <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-12 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-14 h-14 rounded-[20px] bg-[#cce2ff] text-[#006cff] flex items-center justify-center shrink-0">
                <AwardIcon className="w-8 h-8" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[13px] font-bold text-[#006cff] uppercase tracking-wider">
                  Industry Excellence Recognition
                </span>
                <Heading as="h2" size="heading-lg">
                  {topAward.title}
                </Heading>
                <p className="text-[15px] text-[#787878]">
                  {topAward.event} &bull; {topAward.date} &bull; {topAward.venue}
                </p>
              </div>
            </div>

            <p className="text-[17px] text-[#1b2045] font-medium leading-relaxed italic bg-[#f9f9f9] p-6 rounded-[24px] border border-[#e9e9e9]">
              &ldquo;{topAward.description}&rdquo;
            </p>

            {/* Award Photo Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {topAward.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-[320px] sm:h-[400px] rounded-[32px] overflow-hidden bg-[#f9f9f9] border border-[#e9e9e9] shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      )}

      {/* Client Reviews Section */}
      <Container>
        <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-12 shadow-sm space-y-6 text-center">
          <Heading as="h2" size="heading">
            What Our Clients Say
          </Heading>

          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-[#f9f9f9] p-6 rounded-[24px] border border-[#e9e9e9] space-y-3"
                >
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-[15px] text-[#4f4f4f] italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="pt-2 border-t border-[#e9e9e9] text-[13px] text-[#1b2045] font-semibold">
                    {t.author}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-[600px] mx-auto space-y-4 py-8 bg-[#f9f9f9] rounded-[24px] p-6 border border-[#e9e9e9]">
              <div className="flex items-center justify-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-[15px] text-[#4f4f4f] leading-relaxed">
                Roger Venkatesh is committed to delivering exceptional insurance advice and claims advocacy to clients across Auckland and New Zealand.
              </p>
              {/* NOTE(audit C-3): Scraped site used an unrendered external iframe widget for Google/client reviews. */}
              {/* TODO(client): Add verified Google Reviews or customer testimonial quotes. */}
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="default">
                  Share Your Experience or Request a Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>

      {/* CTA Band */}
      <Container>
        <CTABand
          title="Experience Award-Winning Insurance Advisory"
          subtitle="Get in touch with Roger Venkatesh today for a free review of your current policies."
        />
      </Container>
    </div>
  );
}
