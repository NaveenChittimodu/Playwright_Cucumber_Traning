import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login_Page"
import { myBrowserFixture } from "../../common/Fixtures/fixtures";
import ENV from "../../utils/env";
import { Loginlocators } from "../../common/Locators/loginlocators";
import { DashboardLocator } from "../../common/Locators/DashboardLocator";
import { Dashboard } from "../../pages/DashboardPage";
import { count } from "console";


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


Then('User click on the interview link',async function(){


    await dashboard.interviewLink();


});


Then('User click on the quickmodule title',async function(){


    await dashboard.quickmoduleTitile();


});

Then('User click on the assignleave',async function(){


    await dashboard.assignLeaveLink();

});

Then('User click on the leavelist',async function(){


    await dashboard.leaveList();

});

Then('User Click on the timesheetlink',async function(){


    await dashboard.timesheetLinkTab();

});


Then('User Click on the applyleave',async function(){


    await dashboard.applyLeaveLink();

});


Then('User Click on the myleave',async function(){


    await dashboard.myLeave();

});

Then('User Click on the mytimesheet',async function(){

    await dashboard.mytimesheetLink();

});


Then('User Click on the buzzlatest',async function(){

    await dashboard.bazzlatestTitle();

});
  
Then('User Click on the buzzpostcount',async function(){

    const postcount  = await page.locator("//div[@class='oxd-grid-1 orangehrm-buzz-widget']").count();

    console.log(postcount,'count passed')

});
  
Then('User Click on the employeeleave setings toogle cancel button',async function(){


    await dashboard.employee();

});

Then('User click on the employee distribution',async function(){


    await dashboard.employeeDistribution();

});
Then('User click on the distribution subunit',async function(){


    await dashboard.distributionSubunit();

});

Then('User click on the employee distribution location',async function(){


    await dashboard.distributionLocationUnit();

});




