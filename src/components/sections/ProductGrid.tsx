import * as React from "react";
import { products } from "@/content/products";
import { ProductCard } from "@/components/sections/ProductCard";
import { Heading } from "@/components/ui/Heading";

export function ProductGrid() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-[720px] mx-auto space-y-3">
        <span className="text-[13px] font-bold text-[#006cff] uppercase tracking-wider">
          Comprehensive Protection
        </span>
        <Heading as="h2" size="heading-lg">
          Insurance Solutions Built Around Your Life
        </Heading>
        <p className="text-[16px] text-[#4f4f4f] leading-relaxed">
          From life and critical health to residential property and business risk, Roger Venkatesh provides independent guidance across New Zealand’s premier insurers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
