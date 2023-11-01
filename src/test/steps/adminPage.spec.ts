import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_Page"
import ENV from "../../../src/utils/env";
import { Adminmenu } from "../../pages/adminPage";
import { Adminlocators } from "../../common/Locators/adminlocators";


let page: Page;
let adminmenu: Adminmenu;
let browser: Browser;
let adminlocators : Adminlocators;
let loginPage : LoginPage;

setDefaultTimeout(60 * 1000 * 2)

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false ,args: ['--window-position=-8,0']});
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    adminlocators = new Adminlocators(page);
    adminmenu = new Adminmenu(page);
    console.log("ENV-======",ENV)

});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======",`${ENV.BASEURL}`);
    await loginPage.visit(`${ENV.BASEURL}`);
    await page.waitForTimeout(5000);
    await loginPage.loginOrangeHRM(`${ENV.USERNAME}`,`${ENV.PASSWORD}`);    
});


When('User click on Admin menu', async function () {
    await adminmenu.clickAdmin();
    await page.locator(adminlocators.qualificationsmenu).isVisible();
    const qualifications = await page.locator(adminlocators.qualificationsmenu).textContent();
    console.log("Qualifications data",qualifications);
    console.log("test1")
});

Then('User fill the Languages data', async function () {
    await adminmenu.clickLanguages();
    console.log("test2")
});

Then('User fill the Memberships data', async function () {
    await adminmenu.clickAdmin();
    await adminmenu.clickMemberships();
    console.log("test3")
});


// AfterAll(async () => {

//     await page.close();
//     await browser.close();


// })