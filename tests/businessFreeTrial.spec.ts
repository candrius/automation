import { expect } from "@playwright/test";
import { BusinessFreeTrialPage } from "../pageObjectModels/pages/freeTrialPage/BusinessFreeTrialPage";
import { FreeTrialForm } from "../pageObjectModels/pages/freeTrialPage/models/formDataModel";
import {
  CompanySize,
  Country,
  Plan,
} from "../pageObjectModels/pages/freeTrialPage/constants";
import { test } from "./fixtures";

test.describe("Business free trial page tests", async () => {
  let freeTrialPage: BusinessFreeTrialPage;

  test.beforeEach(async ({ page }) => {
    freeTrialPage = new BusinessFreeTrialPage(page);
    await freeTrialPage.visit();
  });

  test("fills out business trial form", async () => {
    const formData: FreeTrialForm = {
      plan: Plan.Teams,
      fullName: "Test user",
      email: "test@test.com",
      companyName: "test company inc.",
      companyAddress: "Test company address",
      country: Country.USA,
      companySize: CompanySize.Option1000Plus,
    };

    await freeTrialPage.fillForm(formData);

    // skipping submit not to post test data
    // await freeTrialPage.clickSubmit();
    // there would add some asserts for successful submit
  });

  test("error is shown when submitting empty values", async () => {
    await freeTrialPage.clickSubmit();

    await expect(freeTrialPage.notEmptyAlert).toHaveCount(8);

    for (let i = 0; i < 8; i++) {
      await expect(freeTrialPage.notEmptyAlert.nth(i)).toBeVisible();
    }
  });
});
