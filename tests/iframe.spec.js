import { test, expect } from "@playwright/test";

test("should switch to iframe", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/iframe");

  const content = await page.frameLocator("#mce_0_ifr").locator("body");
  content.clear();
  content.fill("test contents");

  await expect(content).toHaveText("test contents");
});
