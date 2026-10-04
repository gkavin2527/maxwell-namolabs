import { test, expect } from "@playwright/test";

test.describe("Quote Enquiry Form Tests", () => {
  test("submits an insurance quote enquiry successfully", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.locator("h1")).toContainText("We Are Here to Help");

    // Fill in Name, Phone, Email
    await page.fill('input[name="fullName"]', "Jane Doe");
    await page.fill('input[name="phone"]', "021 555 1234");
    await page.fill('input[name="email"]', "jane.doe@example.co.nz");

    // Select Life Insurance checkbox
    await page.check('input[value="Life Insurance"]');

    // Submit form
    await page.click('button[type="submit"]:has-text("Submit Quote Request")');

    // Verify confirmation message
    await expect(page.locator("body")).toContainText("Enquiry Received!");
    await expect(page.locator("body")).toContainText("Thank you, Jane Doe!");
  });
});
