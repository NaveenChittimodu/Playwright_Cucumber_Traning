import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_Page"
import ENV from "../../../src/utils/env";
import { Directorymenu } from "../../pages/directoryPage";
import { Directorylocators } from "../../common/Locators/directorylocators";


let page: Page;
let directorymenu: Directorymenu;
let browser: Browser;
let directorylocators : Directorylocators;
let loginPage : LoginPage;

setDefaultTimeout(60 * 1000 * 2)

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false ,args: ['--window-position=-8,0']});
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    directorylocators = new Directorylocators(page);
    directorymenu = new Directorymenu(page);
    console.log("ENV-======",ENV)

});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======",`${ENV.BASEURL}`);
    await loginPage.visit(`${ENV.BASEURL}`);
    await page.waitForTimeout(5000);
    await loginPage.loginOrangeHRM(`${ENV.USERNAME}`,`${ENV.PASSWORD}`);    
});


When('User click on Directory menu', async function () {
    await directorymenu.clickDirectory();
    console.log("test1")
});

Then('User fill the Directory data', async function () {
    await directorymenu.fillDirectorydata();
    console.log("test2")
});

AfterAll(async () => {

    await page.close();
    await browser.close();


})