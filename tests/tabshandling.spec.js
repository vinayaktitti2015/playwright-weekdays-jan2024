import { test, expect, chromium, firefox } from "@playwright/test";

test("should switch to the tab", async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const mainPage = await context.newPage(); // open main page
  await mainPage.goto("https://phptravels.com/demo");

  const [newTab] = await Promise.all([
    context.waitForEvent("page"),
    mainPage.getByRole("link", { name: "Login" }).click(),
  ]);

  // switch to the new tab
  await newTab.waitForLoadState("load");
  await newTab.bringToFront();

  await expect(newTab).toHaveURL("https://phptravels.org/login");
  await expect(
    newTab.getByText("Sign in to your account to continue.")
  ).toBeVisible();

  await newTab.locator("#inputEmail").fill("admin");
  await newTab.locator("#inputPassword").fill("admin123");
  //await newTab.locator("#recaptcha-checkbox-border").click();
  await newTab.locator("#login").click();

  await newTab.close();

  // switch back to main page
  await expect(mainPage.getByText("Instant demo request form")).toBeVisible();
});
