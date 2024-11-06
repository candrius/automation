import { type Locator, type Page } from "@playwright/test";
import { FreeTrialForm } from "./models/formDataModel";

export class BusinessFreeTrialPage {
  readonly page: Page;
  readonly choosePlanSelect: Locator;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly companyNameInput: Locator;
  readonly companyAddressInput: Locator;
  readonly countrySelect: Locator;
  readonly companySizeSelect: Locator;
  readonly notEmptyAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.choosePlanSelect = page.getByTestId(`business-free-trial-select-plan`);
    this.fullNameInput = page.getByTestId(`business-free-trial-email`);
    this.emailInput = page.getByTestId(`business-free-trial-full-name`);
    this.companyNameInput = page.getByTestId(
      `business-free-trial-company-name`
    );
    this.companyAddressInput = page.getByTestId(
      `business-free-trial-company-address`
    );
    this.countrySelect = page.getByTestId(`business-free-trial-select-country`);
    this.companySizeSelect = page.getByTestId(
      `business-free-trial-company-size`
    );
    this.notEmptyAlert = page.getByText("This field is mandatory");
  }

  async visit() {
    await this.page.goto("/business-free-trial/");
  }

  async clickSubmit() {
    await this.page.getByTestId(`business-free-trial-submit-button`).click();
  }

  async fillForm(formData: FreeTrialForm) {
    await this.choosePlanSelect.selectOption(formData.plan);
    await this.fullNameInput.fill(formData.fullName);
    await this.emailInput.fill(formData.email);
    await this.companyNameInput.fill(formData.companyName);
    await this.companyAddressInput.fill(formData.companyAddress);
    await this.countrySelect.selectOption(formData.country);
    await this.companySizeSelect.selectOption(formData.companySize);
  }
}
