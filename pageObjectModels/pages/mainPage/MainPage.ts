import { expect, type Locator, type Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto("/");
  }
}
