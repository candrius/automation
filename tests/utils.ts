import { BrowserContext } from "@playwright/test";
import { DateTime } from "luxon";

export const addMonthsToCurrentDateUnix = (months: number) => {
  let unixTimeStamp = DateTime.now().plus({ months }).toUnixInteger();

  return unixTimeStamp;
};
