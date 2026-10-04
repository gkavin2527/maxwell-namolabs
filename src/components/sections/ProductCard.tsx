import * as React from "react";
import Link from "next/link";
import { Product } from "@/content/products";
import { Tag } from "@/components/ui/Tag";
import {
  Accessibility,
  ArrowRight,
  Building2,
  Car,
  ExternalLink,
  HeartPulse,
  House,
  Shield,
  Sofa,
  Stethoscope,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/content/site-config";

const productIcons: Record<string, LucideIcon> = {
  "life-insurance": Users,
  "trauma-insurance": HeartPulse,
  "income-protection": Wallet,
  "permanent-disability-insurance": Accessibility,
  "health-insurance": Stethoscope,
  "home-insurance": House,
  "car-insurance": Car,
  "contents-insurance": Sofa,
  "business-insurance": Building2,
};

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryLabels = {
    personal: "Personal Cover",
    general: "General Insurance",
    commercial: "Business Cover",
  };
  const Icon = productIcons[product.slug] ?? Shield;

  return (
    <div className="relative bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-6 sm:p-7 flex flex-col justify-between hover:border-[#66a7ff] transition-colors duration-200 group">
      <div>
        {/* Icon + Category */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-[16px] bg-[#cce2ff] text-[#006cff] flex items-center justify-center">
            <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <Tag variant="glacial">
            {categoryLabels[product.category]}
          </Tag>
        </div>

        {/* Title — its link covers the whole card */}
        <h3 className="text-[20px] sm:text-[22px] font-bold text-[#1b2045] leading-snug mb-2 group-hover:text-[#006cff] transition-colors">
          <Link
            href={`/${product.slug}`}
            className="after:absolute after:inset-0 after:rounded-[40px] focus-visible:outline-none focus-visible:underline"
          >
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
        <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#006cff]" aria-hidden="true">
          <span>Explore Cover</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>

        {product.hasTowerCTA && (
          <a
            href={siteConfig.towerQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1 text-[13px] font-medium text-[#6c6c6c] hover:text-[#006cff] transition-colors"
          >
            <span>Tower Quote</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}
