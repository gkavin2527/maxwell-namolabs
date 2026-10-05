import { test, expect } from "@playwright/test";

const aboutPages = [
  {
    path: "/about/why-maxwell",
    heading: "Insurance advice built on relationships and trust",
    menuLabel: "Why Maxwell",
  },
  { path: "/about/advisers", heading: "Meet Roger and Kiri", menuLabel: "Our Advisers" },
  { path: "/about/partners", heading: "The insurers we work with", menuLabel: "Our Partners" },
];

test.describe("About Us pages", () => {
  for (const { path, heading } of aboutPages) {
    test(`${path} shows its heading, breadcrumb and section links`, async ({ page }) => {
      await page.goto(path);

      await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
      await expect(page.getByRole("navigation", { name: "Breadcrumb" })).toContainText("About Us");

      const sectionNav = page.getByRole("navigation", { name: "About Us sections" });
      await expect(sectionNav.getByRole("link")).toHaveCount(4);
      await expect(sectionNav.locator('[aria-current="page"]')).toHaveCount(1);
    });
  }

  test("Why Maxwell never describes advice as free of charge", async ({ page }) => {
    await page.goto("/about/why-maxwell");

    await expect(page.locator("main")).not.toContainText(/free advice|free of charge|zero cost/i);
    await expect(page.locator("main")).toContainText("the insurer pays us commission");
  });

  test("Partners lists the Tower online quote link safely", async ({ page }) => {
    await page.goto("/about/partners");

    const quote = page.getByRole("link", { name: /Get an online quote/ });
    await expect(quote).toHaveAttribute("target", "_blank");
    await expect(quote).toHaveAttribute("rel", /noopener/);
  });

  test.describe("from the header (desktop)", () => {
    test.use({ viewport: { width: 1280, height: 800 } });
    test.skip(({ isMobile }) => isMobile, "Hover menus only exist in the desktop header");

    for (const { path, menuLabel } of aboutPages) {
      test(`About Us dropdown opens ${path}`, async ({ page }) => {
        await page.goto("/");

        const header = page.locator("header");
        await header.getByRole("button", { name: "About Us" }).hover();
        await header.getByRole("link", { name: menuLabel }).click();

        await expect(page).toHaveURL(new RegExp(`${path}$`));
        await expect(
          page.locator("header").getByRole("button", { name: "About Us" })
        ).toHaveClass(/font-semibold/);
      });
    }
  });

  test.describe("from the header (mobile)", () => {
    test.use({ viewport: { width: 390, height: 844 } });

    test("mobile menu links to the About pages", async ({ page }) => {
      await page.goto("/");
      await page.getByRole("button", { name: "Open navigation menu" }).click();

      for (const { path, menuLabel } of aboutPages) {
        await expect(page.locator("header").getByRole("link", { name: menuLabel })).toHaveAttribute(
          "href",
          path
        );
      }
    });
  });
});
