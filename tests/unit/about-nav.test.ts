import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { aboutPageLinks, mainNavConfig, type NavGroup } from "@/content/nav-config";
import sitemap from "@/app/sitemap";

const aboutMenu = mainNavConfig.find(
  (item): item is NavGroup => "children" in item && item.label === "About Us"
);

describe("About Us navigation", () => {
  it("lists every About page in the dropdown", () => {
    const hrefs = aboutMenu?.children?.flatMap((group) => group.items.map((item) => item.href));

    expect(hrefs).toEqual(
      expect.arrayContaining(["/about", "/about/why-maxwell", "/about/advisers", "/about/partners"])
    );
    for (const link of aboutPageLinks) {
      expect(hrefs).toContain(link.href);
    }
  });

  it("has a page for every About link", () => {
    for (const link of aboutPageLinks) {
      const file = path.resolve(process.cwd(), `src/app${link.href}/page.tsx`);

      expect(fs.existsSync(file), link.href).toBe(true);
    }
  });

  it("includes every About page in the sitemap", () => {
    const urls = sitemap().map((entry) => new URL(entry.url).pathname);

    for (const link of aboutPageLinks) {
      expect(urls, link.href).toContain(link.href);
    }
  });
});
