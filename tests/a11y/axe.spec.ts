import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility Testing (WCAG 2.2 AA)", () => {
  const routes = [
    "/",
    "/life-insurance",
    "/about",
    "/testimonials",
    "/disclosure-statement",
    "/privacy-policy",
    "/contact",
  ];

  for (const route of routes) {
    test(`route ${route} has zero critical or serious a11y violations`, async ({ page }) => {
      await page.goto(route);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      const seriousOrCritical = accessibilityScanResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );

      expect(seriousOrCritical).toEqual([]);
    });
  }
});
