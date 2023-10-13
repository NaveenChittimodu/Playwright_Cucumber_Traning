import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login_Page"
import { myBrowserFixture } from "../../common/Fixtures/fixtures";
import ENV from "../../utils/env";
import { Loginlocators } from "../../common/Locators/loginlocators";
import { DashboardLocator } from "../../common/Locators/DashboardLocator";
import { Dashboard } from "../../pages/DashboardPage";


let page: Page;
let dashboard: Dashboard;
let browser: Browser;
let dashboardloc : DashboardLocator;
let loginPage : LoginPage;

setDefaultTimeout(60 * 1000 * 2)

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false ,args: ['--window-position=-8,0']});
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    dashboardloc = new DashboardLocator(page);
    dashboard = new Dashboard(page);
});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======",`${ENV.BASEURL}`);
    await loginPage.visit(`${ENV.BASEURL}`);
    await page.waitForTimeout(5000);
    await loginPage.loginOrangeHRM(`${ENV.USERNAME}`,`${ENV.PASSWORD}`);    
});


When('User click on Dashboard menu', async function () {
    await dashboard.clickBtn();
    console.log("test1")
});

Then('User click on the time and work',async function(){

await dashboard.timeandWork();
console.log("time passed");


});

Then('User click on the timer link',async function(){

    await dashboard.timelogo();
});
 

Then('User click on the myaction',async function(){

    await dashboard.myaction();
});
 

Then('User click on the leave request link',async function(){

    await dashboard.leaverequest();
});
 

Then('User click on the timesheet link',async function(){

    await dashboard.timesheet();
});
 

Then('User click on the Self review link',async function(){


    await dashboard.selfreviewlink();


});
