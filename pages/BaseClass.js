import "dotenv/config";

export class BaseClass {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  async openbrowser() {
    await this.page.goto(process.env.BASEURL);
  }

  async closebrowser() {
    await this.page.close();
  }

  async goBack() {
    await this.page.goBack();
  }

  async goForward() {
    await this.page.goForward();
  }

  async reload() {
    await this.page.reload();
  }
}


