import { test } from "@playwright/test";
//import { RegisterPage } from "../pages/RegisterPage.po";
import { BaseClass } from "../../pages/BaseClass.js";
const { RegisterPage } = require("../../pages/RegisterPage.po.js");

// readonly page: Page;
// const registerPage = new RegisterPage(page);
test.describe("user registration", () => {
  test("should register successfully", async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.openbrowser();
    await registerPage.userRegisterSuccessfully();
  });
});
