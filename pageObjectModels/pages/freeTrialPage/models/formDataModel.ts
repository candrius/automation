import { Country, Plan } from "../constants";

export interface FreeTrialForm {
  plan: Plan;
  fullName: string;
  email: string;
  companyName: string;
  companyAddress: string;
  country: Country;
  companySize: string;
}
