import { expect, type Locator, type Page } from "@playwright/test";
import { NavigationMenu } from "../NavigationMenu";
import { PageData } from "./types";

export class BusinessTab extends NavigationMenu {
  readonly startFreeTrialButton: Locator;
  readonly teamPasswordManagerLink: Locator;
  readonly businessPasswordManagerLink: Locator;
  readonly enterprisePasswordManagerLink: Locator;
  readonly businessPartnershipLink: Locator;

  constructor(page: Page) {
    super(page);
    this.startFreeTrialButton = page
      .locator("#Hero")
      .locator('[href="/business-free-trial/"]');
    const businessTabLocator = page.getByTestId("header-nav-business");
    this.teamPasswordManagerLink =
      businessTabLocator.getByTestId("header-nav-0");
    this.businessPasswordManagerLink =
      businessTabLocator.getByTestId("header-nav-1");
    this.enterprisePasswordManagerLink =
      businessTabLocator.getByTestId("header-nav-2");
    this.businessPartnershipLink =
      businessTabLocator.getByTestId("header-nav-3");
  }

  async clickStartFreeTrial() {
    await this.hoverBusinessTab();
    await this.startFreeTrialButton.click();
  }

  async assertOfferLinksToBeNotVisible() {
    const links = [
      this.teamPasswordManagerLink,
      this.businessPasswordManagerLink,
      this.enterprisePasswordManagerLink,
      this.businessPartnershipLink,
    ];

    await Promise.all(links.map((link) => expect(link).not.toBeVisible()));
  }

  async assertOpenedLinkAndTitle(data: PageData) {
    await expect(this.page).toHaveURL(data.URL);
    await expect(
      this.page.getByRole("heading", {
        name: data.title,
        exact: true,
      })
    ).toBeVisible();
  }
}
