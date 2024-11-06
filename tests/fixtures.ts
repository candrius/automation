import { test as base, BrowserContext } from "@playwright/test";
import { addMonthsToCurrentDateUnix } from "./utils";

const test = base.extend<{
  context: BrowserContext;
}>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    const cookies = [
      {
        name: "consent",
        value: "rejected%2CES",
        domain: ".nordpass.com",
        path: "/",
        expires: addMonthsToCurrentDateUnix(13),
      },
    ];
    await context.addCookies(cookies);

    await use(context);
    await context.close();
  },
});

export { test };
