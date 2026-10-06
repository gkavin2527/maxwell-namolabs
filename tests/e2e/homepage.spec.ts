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

test.describe("Homepage sections", () => {
  test("shows the lower sections in order, ending with reviews and the call to action", async ({ page }) => {
    await page.goto("/");

    const order = [
      "Meet Your Financial Advisers",
      "Partners We Work With",
      "Insurance advice built on relationships and trust", // Why Maxwell
      "Top Achiever Award 2023", // Industry Recognition
      "What Our Customers Say",
      "Bring clarity, structure, and peace of mind to your family's future", // CTA band
    ];
    const headings = (await page.locator("main h2").allTextContents()).map((text) => text.trim());

    expect(headings.filter((text) => order.includes(text))).toEqual(order);
  });

  test("no longer has the quick callback form", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Request a Quick Callback" })).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Request Free Callback" })).toHaveCount(0);
  });

  test("introduces both licensed advisers", async ({ page }) => {
    await page.goto("/");

    const advisers = page.locator('section[aria-labelledby="home-advisers-heading"]');
    await expect(advisers.getByRole("heading", { level: 3 })).toHaveText([
      "Roger Venkatesh",
      "Kiri Venkatesh",
    ]);
    await expect(advisers).toContainText("FSP 539026");
    await expect(advisers).toContainText("FSP 1007043");
  });

  test("links each partner to what we work with them for", async ({ page }) => {
    await page.goto("/");

    const partners = page.locator('section[aria-labelledby="home-partners-heading"]');
    await expect(partners.getByRole("listitem")).toHaveCount(8);
    await expect(partners.getByRole("link", { name: /each type of cover/ })).toHaveAttribute(
      "href",
      "/about/partners"
    );
  });

  test("new sections never describe advice as free of charge", async ({ page }) => {
    await page.goto("/");

    // The Disclosure Statement says insurers pay commission and a clawback fee can apply.
    for (const id of ["advisers", "partners", "why", "reviews"]) {
      await expect(page.locator(`section[aria-labelledby="home-${id}-heading"]`)).not.toContainText(
        /free advice|free of charge|zero cost|no cost/i
      );
    }
  });
});
