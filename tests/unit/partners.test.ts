import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import {
  coverGroups,
  otherPartners,
  partners,
  partnersForCover,
  type PartnerCover,
} from "@/content/partners";

const disclosure = fs.readFileSync(
  path.resolve(process.cwd(), "src/app/disclosure-statement/page.tsx"),
  "utf8"
);

/** Names listed under a "we work with" heading on the Disclosure Statement page. */
function disclosureNames(heading: string): string[] {
  const start = disclosure.indexOf(heading);
  expect(start, `"${heading}" not found on the disclosure page`).toBeGreaterThan(-1);

  const after = disclosure.slice(start + heading.length);
  const list = after.match(/^\s*<\/p>\s*<ul[^>]*>([\s\S]*?)<\/ul>/);
  if (list) {
    return [...list[1].matchAll(/<li>([^<]+)<\/li>/g)].map((match) => match[1].trim());
  }

  const line = after.match(/^\s*<\/p>\s*<p[^>]*>([^<]+)<\/p>/);
  return line ? line[1].split(",").map((name) => name.trim()) : [];
}

const disclosureHeadings: [PartnerCover, string][] = [
  ["Personal risk", "For personal risk insurance, we work with:"],
  ["Health", "For health insurance, we work with:"],
  ["KiwiSaver", "For KiwiSaver:"],
  ["General insurance", "For General insurance:"],
  ["Business", "For Business insurance:"],
];

describe("Partner covers", () => {
  for (const [cover, heading] of disclosureHeadings) {
    it(`match the Disclosure Statement for ${cover}`, () => {
      const expected = disclosureNames(heading).map((name) => name.toLowerCase()).sort();
      const actual = partnersForCover(cover)
        .map(
          (name) =>
            expected.find((listed) => name.toLowerCase().includes(listed)) ?? `UNMATCHED: ${name}`
        )
        .sort();

      expect(expected.length).toBeGreaterThan(0);
      expect(actual).toEqual(expected);
    });
  }

  it("gives every partner at least one cover", () => {
    for (const partner of [...partners, ...otherPartners]) {
      expect(partner.covers.length, partner.name).toBeGreaterThan(0);
    }
  });

  it("describes every cover that is in use", () => {
    const used = new Set([...partners, ...otherPartners].flatMap((partner) => partner.covers));

    expect([...used].sort()).toEqual(coverGroups.map((group) => group.cover).sort());
  });
});
