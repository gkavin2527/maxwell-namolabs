import { test, expect } from "@playwright/test";

test.describe("Callback Request Form Tests", () => {
  test("submits quick callback request successfully", async ({ page }) => {
    await page.goto("/");

    // Fill in quick callback form
    await page.fill('#cb-fullName', "Mark Taylor");
    await page.fill('#cb-phone', "021 987 6543");
    await page.selectOption('#cb-bestTime', "morning");

    await page.click('button[type="submit"]:has-text("Request Free Callback")');

    // Verify confirmation message
    await expect(page.locator("body")).toContainText("Callback Requested!");
    await expect(page.locator("body")).toContainText("Thank you, Mark Taylor.");
  });
});
