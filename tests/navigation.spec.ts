import { MainPage } from "../pageObjectModels/pages/mainPage/MainPage";
import { BusinessTab } from "../pageObjectModels/navigationMenu/businessTab/BusinessTab";
import { test } from "./fixtures";
import { OfferURL } from "../pageObjectModels/navigationMenu/businessTab/enums";

test.describe("Navigation menu tests", async () => {
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.visit();
  });

  test.describe("Business tab tests", async () => {
    let businessTab: BusinessTab;

    test.beforeEach(async ({ page }) => {
      businessTab = new BusinessTab(page);
    });

    test("should open business tab and navigate to plans", async () => {
      await businessTab.assertOfferLinksToBeNotVisible();
      await businessTab.hoverBusinessTab();
      await businessTab.teamPasswordManagerLink.click();

      await businessTab.assertOpenedLinkAndTitle({
        URL: OfferURL.teamPasswordManagerURL,
        title: "Team password manager",
      });

      await businessTab.businessPasswordManagerLink.click();

      await businessTab.assertOpenedLinkAndTitle({
        URL: OfferURL.businessPasswordManagerURL,
        title: "Business password manager, simplified",
      });

      await businessTab.enterprisePasswordManagerLink.click();

      await businessTab.assertOpenedLinkAndTitle({
        URL: OfferURL.enterprisePasswordManagerURL,
        title: "Effortless enterprise password manager",
      });

      await businessTab.businessPartnershipLink.click();

      await businessTab.assertOpenedLinkAndTitle({
        URL: OfferURL.businessPartnershipURL,
        title: "Join the NordPass partner network",
      });
    });
  });
});
