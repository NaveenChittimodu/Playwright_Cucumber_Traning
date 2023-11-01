import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login_Page"
import { myBrowserFixture } from "../../common/Fixtures/fixtures";
import ENV from "../../utils/env";
import { Loginlocators } from "../../common/Locators/loginlocators";
import { AdminLocators } from "../../common/Locators/Adminlocators";
import { Admin } from "../../pages/AdminPage";
import { count } from "console";


let page: Page;
let admin: Admin;
let browser: Browser;
let adminloc : AdminLocators;
let loginPage : LoginPage;

setDefaultTimeout(60 * 1000 * 2)

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false ,args: ['--window-position=-8,0']});
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    adminloc = new AdminLocators(page);
    admin = new Admin(page);
});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======",`${ENV.BASEURL}`);
    await loginPage.visit(`${ENV.BASEURL}`);
    await page.waitForTimeout(5000);
    await loginPage.loginOrangeHRM(`${ENV.USERNAME}`,`${ENV.PASSWORD}`);    
});

When('User click on Admin menu',async function(){

    await admin.clickBtn();
    console.log("admin menu passed");

});

Then('User click on the jobcategories',async function(){

    await admin.jobdropdown();
    console.log("Job categories passed");

});

Then('User click on the Job add',async function(){

    await admin.addBtn();
    console.log("Add button passed")

    await admin.alreadyCreatedjob();
    

});

Then('User editing the existing job name',async function(){

    await admin.rowlist();
    console.log("row list passed");
    
});