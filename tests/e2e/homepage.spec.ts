import { test, expect } from "@playwright/test";

test.describe("Homepage End-to-End Tests", () => {
  test("loads successfully and renders essential branding and trust elements", async ({ page }) => {
    await page.goto("/");

    // Verify Title & Meta
    await expect(page).toHaveTitle(/Maxwell Financial Services/i);

    // Verify Main Heading
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Protecting What Matters Most");

    // Verify Regulatory / Licensing Statement
    await expect(page.locator("body")).toContainText("FSP737512");
    await expect(page.locator("body")).toContainText("Roger Venkatesh (FSP 539026)");

    // Verify Phone Contact
    await expect(page.locator("body")).toContainText("(021) 592 786");

    // Verify All 9 Products are listed
    const productTitles = [
      "Life Insurance",
      "Trauma Insurance",
      "Income / Mortgage Protection Insurance",
      "Permanent Disability Insurance",
      "Health Insurance",
      "Home Insurance",
      "Car Insurance",
      "Contents Insurance",
      "Business Insurance",
    ];

    for (const title of productTitles) {
      await expect(page.getByRole("heading", { name: title, exact: true })).toBeVisible();
    }
  });

  test("navigates to product detail page when clicked", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Life Insurance", exact: true }).first().click();
    await expect(page).toHaveURL(/.*life-insurance/);
    await expect(page.locator("h1")).toContainText("Life Insurance");
  });

  test("navigates to public disclosure statement", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Public Disclosure Statement" }).first().click();
    await expect(page).toHaveURL(/.*disclosure-statement/);
    await expect(page.locator("h1")).toContainText("Disclosure Statement");
  });
});
