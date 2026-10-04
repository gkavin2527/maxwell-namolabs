import { describe, it, expect } from "vitest";
import { products } from "@/content/products";
import { siteConfig } from "@/content/site-config";
import { processSteps } from "@/content/process-steps";
import { partners } from "@/content/partners";

describe("Content Integrity & Regulatory Requirements", () => {
  it("has exactly 9 insurance products", () => {
    expect(products.length).toBe(9);
  });

  it("enables Tower CTA exclusively for home, car, and contents insurance", () => {
    const towerProducts = products.filter((p) => p.hasTowerCTA).map((p) => p.slug);
    expect(towerProducts).toEqual(
      expect.arrayContaining(["home-insurance", "car-insurance", "contents-insurance"])
    );
    expect(towerProducts.length).toBe(3);
  });

  it("contains mandatory Class 2 and FSP regulatory statements verbatim", () => {
    expect(siteConfig.regulatoryStatement).toContain("Maxwell Financial Services Limited (FSP737512)");
    expect(siteConfig.regulatoryStatement).toContain("Class 2 Licence");
    expect(siteConfig.regulatoryStatement).toContain("Roger Venkatesh (FSP 539026)");
  });

  it("contains all 6 process steps", () => {
    expect(processSteps.length).toBe(6);
    expect(processSteps[0].title).toBe("Discover");
    expect(processSteps[1].title).toBe("The Plan");
  });

  it("contains all 8 partner insurers", () => {
    expect(partners.length).toBe(8);
  });
});
