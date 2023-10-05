import { chromium, Browser, Page } from "@playwright/test";

const browserContext = async (): Promise<{ browser: Browser, page: Page }> => {
    let browser = await chromium.launch();
    let page = await browser.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    return { browser, page };
};
export const myBrowserFixture = browserContext;