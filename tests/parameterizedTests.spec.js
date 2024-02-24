import { test, expect } from "@playwright/test";

const userData = [
  {
    username: "Admin",
    password: "admin123",
  },
  {
    username: "Admin",
    password: "admin12333",
  },
  {
    username: "Admin2",
    password: "admin1234",
  },
];

let count = 1;
userData.forEach((data) => {
  test(`should test the login with multiple sets of credentials ${data.username}${count++}`, async ({
    page,
  }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    await page.waitForLoadState("domcontentloaded")
    await page.getByPlaceholder("Username").fill(data.username);
    await page.getByPlaceholder("Password").fill(data.password);
    await page.getByRole("button", { name: "Login" }).last().click()
  });
});
