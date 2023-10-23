import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage"
import { myBrowserFixture } from "../../../src/common/Fixtures/fixtures";
import ENV from "../../../src/utils/env";
import { Loginlocators } from "../../common/Locators/loginlocators";
import { Performancelocators } from "../../common/Locators/Performancelocators";
import {PerformancePage} from "../../pages/performancePage"
// Playwright_Cucumber_Traning\src\pages\performancePage.ts


let page: Page;
let loginpage: LoginPage;
let browser: Browser;
let performancelocators: Performancelocators;
let performancePage: PerformancePage;

setDefaultTimeout(60 * 1000 * 2)


BeforeAll(async () => {
  browser = await chromium.launch({ headless: false, args: ['--window-position=-8,0'] });
  page = await browser.newPage();
  loginpage = new LoginPage(page);
  performancelocators = new Performancelocators(page);
  performancePage = new PerformancePage(page);
});

// 1) Scenario: User Verify the visible Components # src\test\features\loginPage.feature:6

Given('User Login to OrangeHrm application', async function () {
  console.log("`${ENV.BASEURL}`======", `${ENV.BASEURL}`);
  await loginpage.visit(`${ENV.BASEURL}`);
  await page.waitForTimeout(5000);
  await loginpage.loginOrangeHRM(`${ENV.USERNAME}`,`${ENV.PASSWORD}`)
});

When('User click on Performance', async function () {
  await  performancePage.clickPerformance();
  console.log("testing performance is clicked ");

  //** configure */
  await performancePage.clickConfigure();
  await performancePage.clickKPIs();
  await performancePage.clickKPI_Addbtn();
  await performancePage.keyindicator_KPI();
  await performancePage.clickConfigure();
  await performancePage.clickTrackers();
  await performancePage.clickTracker_Addbtn();
  await performancePage.Trackers();

  //** manage reviews */
   await performancePage.managefields();
   await performancePage.managefields_ManageReviews();
   await performancePage.managePerformanceReview();



});



// AfterAll(async () => {
//   await page.close();
//   await browser.close();
// })











