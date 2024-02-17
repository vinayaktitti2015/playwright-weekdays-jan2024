import { expect } from "@playwright/test";
import { BaseClass } from "./BaseClass";
// import data from "../testdata/registerdata.json";
// import {faker} from "@faker-js/faker";
import 'dotenv/config';
import fs from "fs";

exports.RegisterPage = class RegisterPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    //super(page);
    this.page = page;
    this.getRegisterLink = page.locator(".ico-register"); // css selectors
    this.getGender = page.locator("#gender-male");
    this.getFirstName = page.locator("#FirstName");
    this.getLastName = page.locator("#LastName");
    this.getEmail = page.locator("#Email");
    this.getNewsLetter = page.locator("label[id$='18']"); //single quotes
    this.getPassword = page.locator("#Password"); // double quotes
    this.getConfirmPassword = page.locator("#ConfirmPassword");
    this.getRegisterBtn = page.locator("#register-button");
    this.getResult = page.locator(".result");
    // await expect(page.getByText(/welcome, [A-Za-z]+$/i)).toBeVisible();

  }

  async openbrowser() {
    await this.page.goto(process.env.BASEURL, {waitUntil: "networkidle"});
  }

  // stateless methods/functions for signup feature
  async clickRegisterLink() {
    this.page.waitForTimeout(5000)
    await this.getRegisterLink.click();
  }

  async selectGender() {
    await this.page.waitForLoadState("domcontentloaded")
    await this.getGender.check();
  }

  async enterFirstname(args) {
    await this.getFirstName.clear();
    await this.getFirstName.fill(args);
  }

  async enterLastname(args) {
    await this.getLastName.clear();
    await this.getLastName.fill(args);
  }

  async enterEmail(args) {
    await this.getEmail.clear();
    await this.getEmail.fill(args);
  }

  async selectNewsletter() {
    await this.getNewsLetter.check();
  }

  async enterPassword(args) {
    await this.getPassword.clear();
    await this.getPassword.fill(args);
  }

  async enterConfirmPassword(args) {
    await this.getConfirmPassword.clear();
    await this.getConfirmPassword.fill(args);
  }

  async clickRegisterBtn() {
    await this.getRegisterBtn.click();
  }

  async verifyResult(args) {
    await expect(this.getResult).toHaveText(args);
  }

  async userRegisterSuccessfully() {
    //const email = faker.internet.email();

    fs.readFile("../testdata/registerdata.json", async (error, data) => {
      await this.clickRegisterLink();
      await this.selectGender();
      await this.enterFirstname(data.firstname);
      await this.enterLastname(data.lastname);
      await this.enterEmail(data.email);
      await this.selectNewsletter();
      await this.enterPassword(data.password);
      await this.enterConfirmPassword(data.password);
      await this.clickRegisterBtn();
      await this.verifyResult(data.result);
    });
  }
}
