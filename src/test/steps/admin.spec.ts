import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage"
import { myBrowserFixture } from "../../common/Fixtures/fixtures";
import ENV from "../../utils/env";
import { Adminlocators } from "../../common/Locators/adminlocators";
import { Performancelocators } from "../../common/Locators/Performancelocators";
import { AdminPage } from "../../pages/adminPage"
// Playwright_Cucumber_Traning\src\pages\performancePage.ts


let page: Page;
let loginpage: LoginPage;
let browser: Browser;
let adminPage: AdminPage;
let adminlocators: Adminlocators;


setDefaultTimeout(60 * 1000 * 2)


BeforeAll(async () => {
  browser = await chromium.launch({ headless: false, args: ['--window-position=-8,0'] });
  page = await browser.newPage();
  loginpage = new LoginPage(page);
  adminPage = new AdminPage(page);
  adminlocators = new Adminlocators(page);

});

// 1) Scenario: User Verify the visible Components # src\test\features\loginPage.feature:6

Given('User Login to OrangeHrm application', async function () {
  console.log("`${ENV.BASEURL}`======", `${ENV.BASEURL}`);
  await loginpage.visit(`${ENV.BASEURL}`);
  await page.waitForTimeout(5000);
  await loginpage.loginOrangeHRM(`${ENV.USERNAME}`, `${ENV.PASSWORD}`)
});

When('User click on admin', async function () {
  await adminPage.clickAdmin();
  await adminPage.adminAddBtn();
  // await adminPage.adminUserSelect();
  // await adminPage.adminStatusSelect();
  // await adminPage.employeeName();
  // await adminPage.userName();
  // await adminPage.password();
  // await adminPage.confirmPassword();
  //========================================
  // await adminPage.clickJob();
  // await adminPage.clickJobTitles();
  // await adminPage.clickJob();
  // await adminPage.payGrades();
  // await adminPage.clickJob();
  // await adminPage.employeeStatus();
  // await adminPage.clickJob();
  // await adminPage.jobcategrories();
  // await adminPage.clickJob();
  // await adminPage.workShifts();

  //==================

  await adminPage.organization();
  await adminPage.generalinformation();
});






// AfterAll(async () => {
//   await page.close();
//   await browser.close();
// })











