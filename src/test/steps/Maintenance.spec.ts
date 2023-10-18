import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login_Page"
import { myBrowserFixture } from "../../common/Fixtures/fixtures";
import ENV from "../../utils/env";
import { Loginlocators } from "../../common/Locators/loginlocators";
import { MaintenancerdLocator } from "../../common/Locators/maintenancelocator";
import { Maintenance } from "../../pages/MaintenancePage";
import { count } from "console";


let page: Page;
let maintenance: Maintenance;
let browser: Browser;
let maintenanceloc : MaintenancerdLocator;
let loginPage : LoginPage;

setDefaultTimeout(60 * 1000 * 2)

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false ,args: ['--window-position=-8,0']});
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    maintenanceloc = new MaintenancerdLocator(page);
    maintenance = new Maintenance(page);
});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======",`${ENV.BASEURL}`);
    await loginPage.visit(`${ENV.BASEURL}`);
    await page.waitForTimeout(5000);
    await loginPage.loginOrangeHRM(`${ENV.USERNAME}`,`${ENV.PASSWORD}`);    
});

When('User click on Maintenance menu',async function(){

    await maintenance.maintainanceMenu();
    console.log("main passed");

    


});

