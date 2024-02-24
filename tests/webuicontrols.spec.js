import { test, expect } from "@playwright/test";

// test suite
test.describe("globalsqa page test", () => {
  // hooks or annotations

  test.beforeEach(async ({ page }) => {
    page.on("pageerror", (error) => {
      console.error("page error", error);
    });
    await page.goto("https://www.globalsqa.com/samplepagetest/");
    await page.waitForTimeout(5000)
    try {
      page.on("popup", async (popup) => {
        popup.waitForLoadState();
        await page
          .locator("button[aria-label='Consent'] p[class='fc-button-label']")
          .click();
      
      });
    } catch (e) {
      console.warn("Popup not exist on page");
    }
  });

  test("should fill the form successfully", async ({ page }) => {
    // upload file
    await page
      .locator('[name="file-553"]')
      .setInputFiles("./testdata/sample.pdf");

    // input data
    await page.locator('[name$="name"]').fill("james doe");
    await page.locator('[name$="email"]').fill("james@yahoo.com");
    await page
      .locator('[name$="website"]')
      .fill("http://localhost:8080/login?from=%2F");

    // dropdown handling
    await page.locator("#g2599-experienceinyears").selectOption("7-10");

    // checkbox and radio buttons
    await page.locator("input[value='Automation Testing']").check();
    await page.locator("input[value='Post Graduate']").check();

    // alerts handling
    await page.locator("button[onclick='myFunction()']").click();

    page.on("dialog", async (popup) => {
      // predefined and user-defined
      popup.accept();
      popup.accept();
    });

    // comments
    await page
      .locator("#contact-form-comment-g2599-comment")
      .fill("test comments");
    await page.locator("button[type='submit']").click();

    // results page
    await page.waitForLoadState("domcontentloaded");
    await expect(page).toHaveTitle("Sample Page Test - GlobalSQA");
    const message = await page
      .locator("div[class='content_bgr'] h3:nth-child(1)")
      .textContent();
    expect(message).toEqual("Message Sent (go back)");
  });
});

/**
 * test suite - collection of tests
 * hooks - pre-conditions and post-conditions
 * test case - tests to be executed
 */
