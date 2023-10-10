import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_Page"
import { myBrowserFixture } from "../../../src/common/Fixtures/fixtures";
import ENV from "../../../src/utils/env";
import { Loginlocators } from "../../common/Locators/loginlocators";
import { LeavePageLocators } from "../../common/Locators/leavePageLocators"
import { LeavePage } from "../../pages/LeavePage"


let page: Page;
let loginPage: LoginPage;
let browser: Browser;
// let loginlocators: Loginlocators;
let leaveLocators: LeavePageLocators;
let leavePage: LeavePage

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false, args: ['--window-position=-8,0'] });
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    leavePage = new LeavePage(page);

});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======", `${ENV.BASEURL}`);
    await loginPage.visit(`${ENV.BASEURL}`);
    await loginPage.loginOrangeHRM(`${ENV.USERNAME}`, `${ENV.PASSWORD}`);
    await page.waitForTimeout(4000);
});
When('User click on leave Page menu', async function () {
    await leavePage.clickMainLeave();
    await page.waitForTimeout(2000);

});

Then('User verify the leave Page visibility', async function () {
    // // await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList");
    // console.log("User verify the leave Page visibility")
    // // await page.waitForTimeout(3000);


});

Then('click on apply', async function () {
    await leavePage.clickApplyBtn();
    console.log("testing 3")

});

Then('verify apply leave components', async function () {
    console.log("testing 4")


});



