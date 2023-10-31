import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_Page"
import { CommonMethods } from "../../utils/commonMethods";
import ENV from "../../../src/utils/env";
import { TimeLocators } from "../../common/Locators/timeLocators";
import { TimePage } from "../../pages/time_page";
import * as assertion from "../../testData/json/assertion.json";
import { MyInfoLocators } from "../../common/Locators/myInfoLocators";


let page: Page;
let browser: Browser;
let loginpage: LoginPage;
let commonMethods: CommonMethods
let timeLocators: TimeLocators;
let timePage: TimePage;
let myInfoLocators: MyInfoLocators;

setDefaultTimeout(60 * 1000 * 2)

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false ,args: ['--window-position=-8,0']});
  page = await browser.newPage();
  loginpage = new LoginPage(page);
  timeLocators = new TimeLocators(page);
  timePage = new TimePage(page);
  commonMethods = new CommonMethods(page);
  myInfoLocators = new MyInfoLocators(page);

});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======",`${ENV.BASEURL}`);
    await loginpage.visit(`${ENV.BASEURL}`);
    await page.waitForTimeout(5000);
    await loginpage.loginOrangeHRM(`${ENV.USERNAME}`,`${ENV.PASSWORD}`);
  });

When('Verify the Timesheet period should be Current week date', async function () {
    await timePage.navigateToTime();
    expect(page.url()).toBe(assertion.assertionURL.viewEmployeeTimeSheet);
    await timePage.timeSheetPeriod();
    expect(page.url()).toBe(assertion.assertionURL.viewMyTimeSheet);
    
});

When('Verify the Edit Timesheet after clicking cancel button', async function () {
    await timePage.timeSheetEditCancel();
    expect(page.url()).toBe(assertion.assertionURL.viewMyTimeSheetDate);
});

When('Verify the Edit Timesheet after clicking Reset button', async function () {
    await timePage.timeSheetEditReset();
    expect(page.url()).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/time/editTimesheet/262");

});

When('Verify the Edit Timesheet and save the timesheet', async function () {
    await timePage.timeSheetEditSave();
    expect(page.url()).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/time/editTimesheet/262");
    const toastMsg = await commonMethods.getToastMessageNew(myInfoLocators.contactDetails.contactDetailsToastMsg);
    await expect(toastMsg).toBe("Successfully Saved");
});

When('Verify the user is able to search and view the Employee timesheet', async function () {
    await timePage.timeSheetEmployeeSearch();
    expect(page.url()).toBe(assertion.assertionURL.viewTimeSheetEmployee);
    const userNameText = await page.locator(timeLocators.timeSheetDetails.loginUserName).innerText();
    console.log(userNameText);
    expect(userNameText).toContain(assertion.assertion.loginUserName);
});

When('Verify the user is able to search and view the My Attendance Recods', async function () {
    await timePage.attendanceMyRecords();
        expect(page.url()).toBe(assertion.assertionURL.viewMyAttendanceRecord);
});

When('Verify the user is able to fill the Punch In and Punch Out details', async function () {
    await timePage.attendancePunchInOut();
    await expect(page.url()).toBe(assertion.assertionURL.punchOut);
    const punchOutToastMsg = await commonMethods.getToastMessageNew(myInfoLocators.contactDetails.contactDetailsToastMsg);
    await expect(punchOutToastMsg).toBe("Successfully Saved");
});

When('Verify the user is able to search and retrieve Employee Attendance Records', async function () {
    await timePage.employeeAttendanceRecord();
    // expect(page.url()).toBe(assertion.assertionURL.configure);
    
});

When('Verify the user is able to enable and disable all the configuraiton option', async function () {
    await timePage.attendanceConfiguration();
    expect(page.url()).toBe(assertion.assertionURL.configure);
    
});

When('Verify the user is able to search and retrieve project reports', async function () {
    await timePage.reportProjectReports();
    expect(page.url()).toBe(assertion.assertionURL.displayProjectReportCreteria);
    
});

When('Verify the user is able to search and retrieve employee reports', async function () {
    await timePage.reportEmployeeReports();
    expect(page.url()).toBe(assertion.assertionURL.displayEmployeeReportCreteria);   
});

When('Verify the user is able to search and retrieve employee Attendance Summary', async function () {
    await timePage.reportAttendenceSummary();
    expect(page.url()).toBe(assertion.assertionURL.displayAttendanceSummaryReportCriteria); 
});

When('Verify the user is able to Add the new Customer - Edit the new Customer - Delete the existing Customer - from step 15 to 17', async function () {
    await timePage.projectInfoCustomerAdd();
    expect(page.url()).toBe(assertion.assertionURL.viewCustomer);
   
});

When('Verify the user is able to Reset the filled fileds and Search the Project records - from step 17 to 18', async function () {
    await timePage.projectInfoProjects();
    expect(page.url()).toBe(assertion.assertionURL.viewProject);
   
});

When('Verify the user is able to Add the Project records', async function () {
    await timePage.projectsInfoAddNewProject();
    expect(page.url()).toBe(assertion.assertionURL.viewProject);
   
});

When('Verify the user is able to cancel the filled fields of Add Project records', async function () {
    await timePage.projectsInfoAddNewProjectclickCancel();
    expect(page.url()).toBe(assertion.assertionURL.viewProject);
   
});


// AfterAll(async () => {
//     await page.close();
//     await browser.close();
//   });