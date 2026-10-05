import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { clientPledge, clientPromises, whyReasons } from "@/content/why-maxwell";

const read = (relativePath: string) =>
  fs.readFileSync(path.resolve(process.cwd(), relativePath), "utf8");

describe("Why Maxwell content", () => {
  it("repeats the Disclosure Statement duties verbatim", () => {
    const disclosure = read("src/app/disclosure-statement/page.tsx");

    expect(clientPromises).toHaveLength(9);
    for (const promise of clientPromises) {
      expect(disclosure).toContain(`<li>${promise}</li>`);
    }
  });

  it("keeps the pledge verbatim from the current site", () => {
    expect(read("content/scraped/about.md")).toContain(clientPledge);
  });

  it("never describes advice as free of charge", () => {
    // The Disclosure Statement says insurers pay commission and a clawback fee can apply.
    const copy = [...whyReasons.map((reason) => `${reason.title} ${reason.body}`), ...clientPromises]
      .join(" ")
      .toLowerCase();

    expect(copy).not.toMatch(/free (advice|of charge)|no[- ]cost|zero[- ]cost|no fees|100% free/);
  });

  it("only links reasons to the Disclosure Statement", () => {
    const links = whyReasons.flatMap((reason) => (reason.link ? [reason.link.href] : []));

    expect(links).toEqual(["/disclosure-statement"]);
  });
});
