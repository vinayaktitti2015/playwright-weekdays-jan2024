import { test, expect } from "@playwright/test";

test("getByPlaceholder usecase", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).last().click();

  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
  await expect(page.getByText("Dashboard").last()).toBeVisible();
});

test("handle nth element", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator("ul li a").nth(5).click();
  await expect(page).toHaveURL("https://the-internet.herokuapp.com/checkboxes");
});

test("getByTestID usecase", async ({ page }) => {
  await page.goto("https://www.iproperty.com.my/");

  try {
    await page.getByRole("button", { name: "Consent" }).click();
    await page.locator(".ab-close-button").click();
  } catch (error) {
    console.warn(error);
  }

  await page.waitForSelector(page.getByTestId("select-area")) // explicit wait
  await page.getByTestId("select-area").selectOption("Kuala Lumpur");
});

test.afterEach(async ({ page }) => {
  await page.close();
});
