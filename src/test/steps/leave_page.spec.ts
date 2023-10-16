import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_Page"
import { myBrowserFixture } from "../../../src/common/Fixtures/fixtures";
import ENV from "../../../src/utils/env";
import { Loginlocators } from "../../common/Locators/loginlocators";
import { LeavePageLocators } from "../../common/Locators/leavePageLocators"
import { LeavePage } from "../../pages/LeavePage"


let page: Page;
let loginPage: LoginPage;
let browser: Browser;
// let loginlocators: Loginlocators;
let leaveLocators: LeavePageLocators;
let leavePage: LeavePage

setDefaultTimeout(60 * 1000 * 2)

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false, args: ['--window-position=-8,0'] });
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    leavePage = new LeavePage(page);

});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======", `${ENV.BASEURL}`);
    await loginPage.visit(`${ENV.BASEURL}`);
    await page.waitForTimeout(3000);
    await loginPage.loginOrangeHRM(`${ENV.USERNAME}`, `${ENV.PASSWORD}`);



});
When('user is able to see Apply Leave page and components', async function () {
    await leavePage.clickMainLeave();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList");
    await leavePage.leavePageComponent();

});


Then('user is able to see My leave list components', async function () {
    await leavePage.myListComponent();
});



Then('user is able to see Reset functionality', async function () { 
    await leavePage.verifyReset();

});


Then('user is able to see Search functionality', async function () {
    await leavePage.verifySearch();
  
});

Then('user is able to see List page components', async function () {
    console.log("1234")

});

Then('user is able to perform List page components multiselect functionality', async function () {
    console.log("1234")

});


Then('user is able to perform List page components individual select', async function () {
    console.log("1234")

});



Then('user is able to perform view functionality', async function () {
    console.log("1234")

});


Then('user is able to perform edit functionality', async function () {
    console.log("1234")

});



Then('user is able to perform delete functionality', async function () {
    console.log("1234")

});
// ##############################################


When('user is able to see Add Entitlements Components', async function () {
    await leavePage.clickMainLeave();
    await leavePage.addEntitleComponent();


});


Then('user is able to Perform Cancel functionality', async function () {
    await leavePage.entitlePageCancel();
});

Then('user is able to Perform Save functionality', async function () {
    await leavePage.entitilementSave();

});


Then('user is able to see Employee entitlement components', async function () {
    await leavePage.employeeEntitle();

});


Then('user is able to see Search Employee Entitlements Components', async function () {
    await leavePage.employeeEntitlementSerch();

});

Then('user is able to see My leave entitlements components', async function () {
    await leavePage.myLeaveEntitlement();

});

Then('user is able to Perform My leave entitlements search components', async function () {
    await leavePage.myLeaveEntitlementSearch();

});
Then('user is able to see My leave entitlements List page components', async function () {
    await leavePage.myLeaveEntitlementComponents();
;
});
Then('user is able to Perform Add new entitlements functionality', async function () {
    await leavePage.addNewEntitlement();
;
});


//


Then('user is able to see Leave Entitlements and Usage Report components', async function () {
    await leavePage.verifyLeaveEntitilementAndReport();

});
Then('user is able to perform Leave Entitlements and Usage Report generate functionality', async function () {
    await leavePage.genrateLeaveEntitilementAndReport();

});





Then('user is able to see My Leave Entitlements and Usage Report components', async function () {
    await leavePage.myLeaveEntitilementAndReport();

});
Then('user is able to perform My Leave Entitlements and Usage Report generate functionality', async function () {
    await leavePage.performMyLeaveEntitilementAndReport();

});

Then('user is able to see My Leave Entitlements and Usage Report list page components', async function () {
    await leavePage.myLeaveEntitilementAndReportListComponent();

});
Then('user is able to perform My Leave Entitlements and Usage Report full screen functionality', async function () {
    await leavePage.fullScreenReportListComponent();

});





// Config page
//
Then('user is able to see Leave Period components', async function () {
    await leavePage.leavePeriodComponent();

});
Then('user is able to perform Leave Period reset functionality', async function () {
    await leavePage.leavePeriodResetComponent();
    console.log("tc27")

});






Then('user is able to see Leave Types list page components', async function () {
    await leavePage.leaveTypeComponent();

});

Then('user is able to see Work Week components', async function () {
    await leavePage.workWeekComponent();

});

Then('user is able to see Holidays components', async function () {
    await leavePage.holidaysComponent();

});
Then('user is able to see Add Holiday page components', async function () {
    await leavePage.addHolidaysComponent();

});


Then('user is able to see leave list components', async function () {
    await leavePage.leaveListComponent();

});

// //
// Then('user is able to see total leave list record in list page', async function () {
//     await leavePage.totalLeaveList();

// });





