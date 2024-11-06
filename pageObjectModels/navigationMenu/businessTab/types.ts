import { OfferURL } from "./enums";

export interface PageData {
  URL: OfferURL;
  title: string;
  isTrialButtonVisible?: boolean;
}
