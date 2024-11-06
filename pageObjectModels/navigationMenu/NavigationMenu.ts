import { type Locator, type Page } from "@playwright/test";
import { MainPage } from "../pages/mainPage/MainPage";

export class NavigationMenu extends MainPage {
  readonly businessTab: Locator;

  constructor(page: Page) {
    super(page);
    this.businessTab = page.getByTestId("header-nav-business");
  }

  async clickBusinessTab() {
    await this.businessTab.click();
  }

  async hoverBusinessTab() {
    await this.businessTab.hover();
  }
}
