import { expect } from "@playwright/test";
import { BaseClass } from "./BaseClass";
import data from "../testdata/registerdata.json";
// import {faker} from "@faker-js/faker";

export class RegisterPage {
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
    this.getNewsLetter = page.locator("#Newsletter");
    this.getPassword = page.locator("#Password");
    this.getConfirmPassword = page.locator("#ConfirmPassword");
    this.getRegisterBtn = page.locator("#register-button");
    this.getResult = page.locator(".result");
  }

  // stateless methods/functions for signup feature
  async clickRegisterLink() {
    await this.getRegisterLink.click();
  }

  async selectGender() {
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
  }
}


// pattern structure for
/**
 * constants
 * defining the locator values
 * created the page functions in the same class/file
 */
