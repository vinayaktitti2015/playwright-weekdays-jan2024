import { test } from "@playwright/test";
import {RegisterPage} from "../pages/RegisterPage.po";
import {BaseClass} from "../pages/BaseClass";

// readonly page: Page;
// const registerPage = new RegisterPage(page);
test.describe("user registration", () => {
  // Hooks
  test.beforeEach(async ({ page }) => {
    const basePage = new BaseClass(page);
    await basePage.openbrowser();
  });

  test("should register successfully", async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.userRegisterSuccessfully();
  });
});
