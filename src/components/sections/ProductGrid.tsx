import * as React from "react";
import { products } from "@/content/products";
import { ProductCard } from "@/components/sections/ProductCard";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

const groups = [
  {
    id: "products-family",
    title: "Protect Your Family",
    description: "Personal cover for your life, health and income, tailored to your situation.",
    products: products.filter((p) => p.category === "personal"),
    // 5 cards: 3 + 2, last row centred
    cardWidth: "md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
  },
  {
    id: "products-property",
    title: "Protect Your Home, Car & Business",
    description: "General and business cover, including quick online quotes through Tower.",
    products: products.filter((p) => p.category !== "personal"),
    // 4 cards: 2 x 2
    cardWidth: "md:w-[calc(50%-12px)]",
  },
];

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

      <div className="space-y-12">
        {groups.map((group) => (
          <section key={group.id} aria-labelledby={group.id} className="space-y-6">
            <div className="space-y-1">
              <Heading as="h3" size="heading" id={group.id}>
                {group.title}
              </Heading>
              <p className="text-[15px] text-[#4f4f4f]">{group.description}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {group.products.map((product) => (
                <div key={product.slug} className={cn("w-full flex [&>*]:w-full", group.cardWidth)}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
