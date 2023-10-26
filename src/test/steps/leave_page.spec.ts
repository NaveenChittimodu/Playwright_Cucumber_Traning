// ***************** Importing Libraries ***********
// ***************** Auther Name: Kasthuri Kandavelu ************
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
    await leavePage.verifySearch();
    console.log("need to need to work on these testcase.. application not supporting")

});
Then('user is able to perform List page components multiselect functionality', async function () {
    await leavePage.verifySearch();
    console.log("need to work on these testcase.. application not supporting")

});
Then('user is able to perform List page components individual select', async function () {
    await leavePage.verifySearch();
    console.log("need to work on these testcase.. application not supporting")

});
Then('user is able to perform view functionality', async function () {
    await leavePage.verifySearch();
    console.log("need to work on these testcase.. application not supporting")

});
Then('user is able to perform edit functionality', async function () {
    await leavePage.verifySearch();
    console.log("need to work on these testcase.. application not supporting")

});

Then('user is able to perform delete functionality', async function () {
    await leavePage.verifySearch();
    console.log("need to work on these testcase.. application not supporting")

});

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

});
Then('user is able to Perform Add new entitlements functionality', async function () {
    await leavePage.addNewEntitlement();

});
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
Then('user is able to perform Leave Period save functionality', async function () {
    await leavePage.leavePeriodSaveComponent();
    console.log("tc28")

});

Then('user is able to see Leave Types list page components', async function () {
    await leavePage.leaveTypeComponent();

});

Then('user is able to perform Leave Types Add functionality', async function () {
    await leavePage.addLeaveTypeComponent();

});

Then('user is able to perform Leave Types list page multiselectlect functionality', async function () {
    await leavePage.multiSelectFunctionality();

});
Then('user is able to perform Leave Types list page individual select functionality', async function () {
    await leavePage.singleSelectFunctionality();

});

Then('user is able to perform Leave Types list page delete functionality', async function () {
    await leavePage.deleteLeavePageList();

});
Then('user is able to perform Leave Types list page edit functionality', async function () {
    await leavePage.editLeavePage();

});
Then('user is able to see Work Week components', async function () {
    await leavePage.workWeekComponent();

});

Then('user is able to perform Work Week Monday sort functionality', async function () {
    await leavePage.workWeekMondaySort();

});
Then('user is able to perform Work Week Tuesday sort functionality', async function () {
    await leavePage.workWeekTuesdaySort();

});

Then('user is able to perform Work Week Wednesday sort functionality', async function () {
    await leavePage.workWeekWednesdaySort();

});
Then('user is able to perform Work Week Thursday sort functionality', async function () {
    await leavePage.workWeekThursdaySort();

});
Then('user is able to perform Work Week Friday sort functionality', async function () {
    await leavePage.workWeekFridaySort();

});
Then('user is able to perform Work Week Saturday sort functionality', async function () {
    await leavePage.workWeekSaturdaySort();

});
Then('user is able to perform Work Week Sunday sort functionality', async function () {
    await leavePage.workWeekSundaySort();

});
Then('user is able to perform Work Week save sort functionality', async function () {
    await leavePage.verifyWorkWeekSave();

});

Then('user is able to see Holidays components', async function () {
    await leavePage.holidaysComponent();


});
Then('user is able to perform Holidays reset functionality', async function () {
    await leavePage.holidaysReset();
    console.log("tc45")

});
Then('user is able to perform Holidays search functionality', async function () {
    await leavePage.holidaysSearch();
    console.log("tc46")

});
Then('user is able to perform Holidays add functionality in list page', async function () {
    await leavePage.addHolidays();
    console.log("tc47")

});

Then('user is able to see Add Holiday page components', async function () {
    await leavePage.addHolidaysComponent();
    console.log("tc48")

});
Then('user is able to perform Add Holiday page cancel functionality', async function () {
    await leavePage.cancelHolidaysComponent();
    console.log("tc49")

});

Then('user is able to perform Add Holiday page save functionality', async function () {
    await leavePage.saveHolidays();
    console.log("tc50")

});
Then('user is able to perform Add Holiday list page multiselectlect', async function () {
    await leavePage.multipleHolidaysSelection();
    console.log("tc51")

});


Then('user is able to perform Add Holiday list page individual select functionality', async function () {
    await leavePage.individualHolidaySelection();
    console.log("tc52")

});
Then('user is able to perform Add Holiday list page delete functionality', async function () {
    await leavePage.deleteHoliday();
    console.log("tc53")

});
Then('user is able to perform Add Holiday list page edit functionality', async function () {
    await leavePage.editHoliday();
    console.log("tc54")

});
Then('user is able to see leave list components', async function () {
    await leavePage.leaveListComponent();
    console.log("tc55")

});
Then('user is able to perform leave list reset functionality in the list page', async function () {
    await leavePage.leaveListResetFunctionality();
    console.log("tc56")

});
Then('user is able to perform leave list search functionality in the list page', async function () {
    await leavePage.leaveListSearchFunctionality();
    console.log("tc57")

});

Then('user is able to see total leave list record in list page', async function () {
    await leavePage.totalLeaveListRecord();
    console.log("tc58")

});

Then('user is able to perform Multiselect functionality in the list page', async function () {
    await leavePage.multiSelectionLeaveList();
    console.log("tc59")

});
Then('user is able to perform individual select functionality in the list page', async function () {
    await leavePage.singleSelectionLeaveList();
    console.log("tc60")

});

Then('user is able to perform approve functionality in the list page', async function () {
    await leavePage.leaveListApprove();
    console.log("user is able to perform approve functionality in the list page")

});
Then('user is able to perform reject functionality in the list page', async function () {
    await leavePage.leaveListReject();
    console.log("user is able to perform reject functionality in the list pagetc62")

});

Then('user is able to perform Add comment functionality in the list page', async function () {
    await leavePage.leaveListAddComments();
    console.log("user is able to perform Add comment functionality in the list page")

});
Then('user is able to see leave request Comments components in the list page', async function () {
    await leavePage.leaveListCommentsComponent();
    console.log("tc64")

});
Then('user is able to perform leave request comments cancel functionality in the list page', async function () {
    await leavePage.leaveListCommentsCancel();
    console.log("tc65")

});

Then('user is able to perform leave request comments save functionality in the list', async function () {
    await leavePage.leaveListCommentsSave();
    console.log("tc66")

});
Then('user is able to perform leave request comments close functionality in the list page', async function () {
    await leavePage.leaveListCommentsClose();
    console.log("tc67")

});
Then('user is able to see view leave details in the list page', async function () {
    await leavePage.viewLeaveDetails();
    console.log("tc68")

});
Then('user is able to see view leave request details components in the list page', async function () {
    await leavePage.viewLeaveRequestDetailsComponents();
    console.log("tc69")

});
Then('user is able to see total record components in the list page', async function () {
    await leavePage.LeaveRequestRecordComponents();
    console.log("tc70")

});

Then('user is able to perform cancel leave functionality in the list page', async function () {
    await leavePage.cancelLeasveList();
    console.log("tc74")

});
































