import { test, expect } from "@playwright/test";

test("should fetch the network logs and verify response", async ({
  context,
  page,
}) => {
  const response = "";
  // intercept the request
  await context.route(
    "https://www.instagram.com/api/v1/web/accounts/login/ajax/",
    async (route) => {
      response = await route.fetch();
      console.log(response);
    }
  );

  // ui auto
  await page.goto("https://www.instagram.com/");
  await page.locator("//input[@name='username']").fill("912323232232");
  await page.locator("//input[@name='password']").fill("9293i3232");
  await page.locator('[type="submit"]').click();

  await page.waitForTimeout(10000);

  expect(response.status).toBe(403);
});
