import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_Page"
import ENV from "../../../src/utils/env";
import { Buzzmenu } from "../../pages/buzzPage";
import { Buzzlocators } from "../../common/Locators/buzzlocators";


let page: Page;
let buzzmenu: Buzzmenu;
let browser: Browser;
let buzzlocators : Buzzlocators;
let loginPage : LoginPage;

setDefaultTimeout(60 * 1000 * 2)

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false ,args: ['--window-position=-8,0']});
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    buzzlocators = new Buzzlocators(page);
    buzzmenu = new Buzzmenu(page);
    console.log("ENV-======",ENV)

});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======",`${ENV.BASEURL}`);
    await loginPage.visit(`${ENV.BASEURL}`);
    await page.waitForTimeout(5000);
    await loginPage.loginOrangeHRM(`${ENV.USERNAME}`,`${ENV.PASSWORD}`);    
});


When('User click on Buzz menu', async function () {
    await buzzmenu.clickBuzz();
    console.log("test1")
    await buzzmenu.sharephoto();
    console.log("test2")
    // await page.waitForTimeout(3000);
});