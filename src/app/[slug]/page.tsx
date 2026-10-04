import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug } from "@/content/products";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { TowerCTAModule } from "@/components/sections/TowerCTAModule";
import { ProductCard } from "@/components/sections/ProductCard";
import { siteConfig } from "@/content/site-config";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
  Phone,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.title} NZ | Maxwell Financial Services`,
    description: product.shortDescription,
    alternates: {
      canonical: `${siteConfig.siteUrl}/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Independent Advice | Maxwell Financial Services`,
      description: product.shortDescription,
      url: `${siteConfig.siteUrl}/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categoryLabels = {
    personal: "Personal Cover",
    general: "General Insurance",
    commercial: "Business Risk",
  };

  const relatedProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

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
            <span>Insurance</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1b2045] font-semibold">{product.title}</span>
          </nav>
        </Container>
      </div>

      {/* Product Hero Section */}
      <Container>
        <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <Tag variant="glacial">{categoryLabels[product.category]}</Tag>

            <Heading as="h1" size="display" className="text-[#1b2045]">
              {product.title}
            </Heading>

            <p className="text-[17px] sm:text-[19px] text-[#4f4f4f] leading-relaxed font-normal">
              {product.shortDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="#quote-form" variant="primary" size="lg">
                Get A Free Quote
              </Button>
              <Button
                href={siteConfig.phone.mobileTel}
                variant="secondary"
                size="lg"
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Roger: {siteConfig.phone.mobile}</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full h-[280px] sm:h-[340px] rounded-[36px] overflow-hidden bg-[#f9f9f9] border border-[#e9e9e9] shadow-sm">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Detailed Overview: What is it & Key Benefits */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: What is it */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-10 shadow-sm space-y-4">
              <Heading as="h2" size="heading">
                What is {product.title}?
              </Heading>
              <div className="space-y-3 text-[16px] text-[#4f4f4f] leading-relaxed">
                {product.whatIsIt.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Who is eligible */}
            <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-10 shadow-sm space-y-4">
              <Heading as="h2" size="heading">
                Who can have {product.title}?
              </Heading>
              <ul className="space-y-3 text-[15px] text-[#4f4f4f]">
                {product.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#006cff] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage Comparison */}
            <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-10 shadow-sm space-y-6">
              <Heading as="h2" size="heading">
                Coverage Details
              </Heading>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 bg-[#cce2ff]/30 p-5 rounded-[24px] border border-[#cce2ff]">
                  <h3 className="text-[16px] font-bold text-[#1b2045] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#006cff]" />
                    What is Covered
                  </h3>
                  <ul className="space-y-2 text-[14px] text-[#4f4f4f]">
                    {product.whatIsCovered.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#006cff] font-bold">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 bg-[#f9f9f9] p-5 rounded-[24px] border border-[#e9e9e9]">
                  <h3 className="text-[16px] font-bold text-[#1b2045] flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-[#787878]" />
                    Standard Exclusions
                  </h3>
                  <ul className="space-y-2 text-[14px] text-[#4f4f4f]">
                    {product.whatIsNotCovered.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#787878] font-bold">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Benefits & Considerations */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-10 shadow-sm space-y-5">
              <Heading as="h2" size="heading">
                Benefits of {product.title}
              </Heading>

              <ul className="space-y-3.5 text-[15px] text-[#4f4f4f]">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#006cff] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {product.factorsToConsider && product.factorsToConsider.length > 0 && (
              <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-10 shadow-sm space-y-4">
                <Heading as="h2" size="heading-sm" className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#006cff]" />
                  Factors to Consider
                </Heading>
                <ul className="space-y-2.5 text-[14px] text-[#4f4f4f]">
                  {product.factorsToConsider.map((factor, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#006cff] font-bold">&bull;</span>
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Contact Card */}
            <div className="bg-[#1b2045] text-[#ffffff] rounded-[40px] p-8 shadow-sm space-y-4">
              <h3 className="text-[20px] font-bold text-[#ffffff]">
                Speak to Roger Venkatesh
              </h3>
              <p className="text-[14px] text-[#cce2ff] leading-relaxed">
                Have questions regarding cover amounts or policy terms? Roger can guide you through the underwriting requirements.
              </p>
              <div className="pt-2">
                <Button
                  href={siteConfig.phone.mobileTel}
                  variant="white"
                  size="default"
                  className="w-full text-[#1b2045] font-semibold"
                >
                  Call {siteConfig.phone.mobile}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Tower Insurance CTA Module if applicable */}
      {product.hasTowerCTA && (
        <Container>
          <TowerCTAModule />
        </Container>
      )}

      {/* Quote Form Section */}
      <div id="quote-form">
        <Container narrow>
          <QuoteForm defaultProductSlug={product.slug} />
        </Container>
      </div>

      {/* Related Products */}
      <Container>
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-[24px] font-bold text-[#1b2045]">
              Other Insurance Options to Consider
            </h2>
            <p className="text-[15px] text-[#4f4f4f]">
              Most clients combine policies to ensure comprehensive protection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
