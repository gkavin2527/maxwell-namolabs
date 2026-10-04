import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/content/products";
import { Tag } from "@/components/ui/Tag";
import { ArrowRight, ExternalLink } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryLabels = {
    personal: "Personal Cover",
    general: "General Insurance",
    commercial: "Business Cover",
  };

  return (
    <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-6 sm:p-7 flex flex-col justify-between hover:border-[#66a7ff] hover:shadow-[rgba(0,0,0,0.08)_0px_8px_24px_0px] transition-all duration-200 group">
      <div>
        {/* Product Image */}
        <div className="relative w-full h-[180px] rounded-[32px] overflow-hidden mb-5 bg-[#f9f9f9]">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Tag Category */}
        <div className="mb-3">
          <Tag variant="glacial">
            {categoryLabels[product.category]}
          </Tag>
        </div>

        {/* Title */}
        <h3 className="text-[20px] sm:text-[22px] font-bold text-[#1b2045] leading-snug mb-2 group-hover:text-[#006cff] transition-colors">
          <Link href={`/${product.slug}`} className="focus-visible:outline-none focus-visible:underline">
            {product.title}
          </Link>
        </h3>

        {/* Short description */}
        <p className="text-[15px] text-[#4f4f4f] leading-relaxed mb-4">
          {product.shortDescription}
        </p>
      </div>

      {/* Card Footer CTAs */}
      <div className="pt-4 border-t border-[#e9e9e9] flex items-center justify-between gap-3">
        <Link
          href={`/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#006cff] hover:text-[#4672ff] transition-colors focus-visible:outline-none focus-visible:underline"
        >
          <span>Explore Cover</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        {product.hasTowerCTA && (
          <a
            href={siteConfig.towerQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-[#787878] hover:text-[#006cff] transition-colors"
            title="Instant quote via partner Tower Insurance"
          >
            <span>Tower Quote</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
