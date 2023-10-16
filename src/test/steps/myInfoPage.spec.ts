import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_Page"
import { myBrowserFixture } from "../../../src/common/Fixtures/fixtures";
import ENV from "../../../src/utils/env";
import { MyInfoLocators } from "../../common/Locators/myInfoLocators";
import { MyInfoPage } from "../../pages/myInfo_Page";


let page: Page;
let browser: Browser;
let loginpage: LoginPage;
let myInfoLocators: MyInfoLocators;
let myInfoPage: MyInfoPage;

setDefaultTimeout(60 * 1000 * 2)

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false ,args: ['--window-position=-8,0']});
  page = await browser.newPage();
  loginpage = new LoginPage(page);
  myInfoLocators = new MyInfoLocators(page);
  myInfoPage = new MyInfoPage(page);

});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======",`${ENV.BASEURL}`);
    await loginpage.visit(`${ENV.BASEURL}`);
    await page.waitForTimeout(5000);
    await loginpage.loginOrangeHRM(`${ENV.USERNAME}`,`${ENV.PASSWORD}`);
  });

  When('User is able to fill the Employee fullName', async function () {
    await myInfoPage.navigateToMyInfo();
    await myInfoPage.employeeFullName();
    await myInfoPage.employeeMiddleName();
    await myInfoPage.employeeLastName();
});

When('User is able to fill the Employee Nickname', async function () {
    // await myInfoPage.navigateToMyInfo();
    await myInfoPage.employeeNickName();
});

When('User is able to fill the Employee Id and Other Id', async function () {
    // await myInfoPage.navigateToMyInfo();
    await myInfoPage.employeeID();
    await myInfoPage.employeeOtherID();
});

When('User is able to fill the Drivers License Number', async function () {
    // await myInfoPage.navigateToMyInfo();
    await myInfoPage.employeeID();
    await myInfoPage.employeeOtherID();
});

When('User is able to fill the SSN Number', async function () {
    // await myInfoPage.navigateToMyInfo();
    await myInfoPage.employeeSSNNumber();
});

When('User is able to fill the SIN Number', async function () {
    // await myInfoPage.navigateToMyInfo();
    await myInfoPage.employeeSSINumber();
});

When('User is able to select the Nationality', async function () {
    // await myInfoPage.navigateToMyInfo();
    await myInfoPage.employeeNationality();
});

When('User is able to select the Marital Status', async function () {
    // await myInfoPage.navigateToMyInfo();
    await myInfoPage.employeeMaritialStatus();
    await page.waitForTimeout(4000);
});


// AfterAll(async () => {
//     await page.close();
//     await browser.close();
//   });