import { Locator, Page } from "@playwright/test";
import { LeavePageLocators } from "../common/Locators/leavePageLocators"

export class generalMethods {
    // readonly page: Page;
    // private readonly Locator: LeavePageLocators;

    async enterText(page: Page, locator :string, text: string) {
        await page.waitForSelector(locator);
        await page.fill(locator,text);
    }

    async clickWhenVisible(page: Page, locator: string) {
        await page.waitForSelector(locator);
        await page.click(locator);
    }

    async waitForLocatorVisible(page: Page, locator: string) {
        await page.waitForSelector(locator);
        await page.isVisible(locator)
    }
    
}
