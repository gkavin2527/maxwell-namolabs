import { test, expect } from "@playwright/test";

test.describe("Header dropdown navigation (desktop)", () => {
  test.use({ viewport: { width: 1280, height: 800 } });
  test.skip(({ isMobile }) => isMobile, "Hover menus only exist in the desktop header");

  test("stays open while the pointer travels from the trigger to a menu item", async ({ page }) => {
    await page.goto("/");

    const header = page.locator("header");
    const trigger = header.getByRole("button", { name: "About Us" });
    const item = header.getByRole("link", { name: /Testimonials & Awards/ });

    await trigger.hover();
    await expect(item).toBeVisible();

    // Move down onto the item the way a person would: in small, unhurried steps.
    const box = (await item.boundingBox())!;
    const target = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
    await page.mouse.move(target.x, target.y, { steps: 25 });

    await expect(item).toBeVisible();
    await item.click();
    await expect(page).toHaveURL(/\/testimonials$/);
  });

  test("closes once the pointer leaves the trigger and the menu", async ({ page }) => {
    await page.goto("/");

    const header = page.locator("header");
    const item = header.getByRole("link", { name: /Testimonials & Awards/ });

    await header.getByRole("button", { name: "About Us" }).hover();
    await expect(item).toBeVisible();

    await page.mouse.move(640, 600, { steps: 10 });
    await expect(item).toBeHidden();
  });

  test("clicking a hover-opened trigger keeps the menu open", async ({ page }) => {
    await page.goto("/");

    const header = page.locator("header");
    const trigger = header.getByRole("button", { name: "About Us" });
    const item = header.getByRole("link", { name: /Testimonials & Awards/ });

    await trigger.hover();
    await expect(item).toBeVisible();

    await trigger.click();
    await expect(item).toBeVisible();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  test("opens with Enter and closes with Escape, returning focus to the trigger", async ({ page }) => {
    await page.goto("/");

    const header = page.locator("header");
    const trigger = header.getByRole("button", { name: "About Us" });
    const item = header.getByRole("link", { name: /Testimonials & Awards/ });

    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(item).toBeVisible();

    await page.keyboard.press("Tab");
    await expect(item).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(item).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});
