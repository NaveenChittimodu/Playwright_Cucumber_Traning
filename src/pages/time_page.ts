import { expect, Locator, Page } from "@playwright/test";
import { TimeLocators } from "../common/Locators/timeLocators";
import { MyInfoLocators } from "../common/Locators/myInfoLocators";
// import * as constants from "../common/constants.json"
import * as assertion from "../testData/json/assertion.json"
import {CommonMethods} from "../utils/commonMethods"

export class TimePage {
    readonly page: Page;
    readonly myInfoLocators: MyInfoLocators;
    readonly timeLocators: TimeLocators;
    readonly commonMethods: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.myInfoLocators = new MyInfoLocators(page);
        this.timeLocators = new TimeLocators(page);
        this.commonMethods = new CommonMethods(page);
    }

    async navigateToTime() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.timeTab);
        await this.page.locator(this.timeLocators.timeSheet.timeTab).click();
        const text = await this.commonMethods.getTextFromElement(this.timeLocators.timeSheetDetails.timeSheetTitle1);
        expect(text).toBe("Timesheets");
        // await this.clickElement(this.myInfoLocators.personalDetails.myInfoTab);
    }

    async timeSheetPeriod() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.timeSheet);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.timeSheet);
        await this.page.waitForSelector(this.timeLocators.timeSheet.myTimeSheet);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.myTimeSheet);
        const timeSheetPeriod = await this.commonMethods.getTextFromElement(this.timeLocators.timeSheetDetails.timeSheetPeriodInput);
        console.log(timeSheetPeriod);
    }

    async timeSheetEditCancel() {
        await this.commonMethods.clickElement(this.timeLocators.timeSheetDetails.timeSheetEdit);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProject);
        await this.page.locator(this.timeLocators.timeSheetDetails.timeSheetProject).fill(assertion.assertion.editTimeSheetProject);
        await this.page.waitForTimeout(1000);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
        await this.commonMethods.clickElement(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
        await this.commonMethods.selectDropDownElements(this.timeLocators.timeSheetDetails.timeSheetActivity, this.timeLocators.timeSheetDetails.timeSheetActivityDropDown, assertion.assertion.editTimeSheetActivityDropDown);
        await this.page.waitForTimeout(3000);
        await this.commonMethods.clearAndSendKeysToElements(this.timeLocators.timeSheetDetails.timeSheetDays, [8, 8, 8, 8, 8, 8, 8]);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetCancelBtn);
        await this.commonMethods.clickElement(this.timeLocators.timeSheetDetails.timeSheetCancelBtn);
        // await this.commonMethods.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
    }

    async timeSheetEditReset() {
        await this.commonMethods.clickElement(this.timeLocators.timeSheetDetails.timeSheetEdit);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProject);
        await this.page.locator(this.timeLocators.timeSheetDetails.timeSheetProject).fill(assertion.assertion.editTimeSheetProject);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
        await this.commonMethods.clickElement(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
        await this.commonMethods.selectDropDownElements(this.timeLocators.timeSheetDetails.timeSheetActivity, this.timeLocators.timeSheetDetails.timeSheetActivityDropDown,assertion.assertion.editTimeSheetActivityDropDown);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetDays);
        await this.commonMethods.clearAndSendKeysToElements(this.timeLocators.timeSheetDetails.timeSheetDays,[8, 8, 8, 8, 8, 8, 8]);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetResetBtn);
        await this.commonMethods.clickElement(this.timeLocators.timeSheetDetails.timeSheetResetBtn);
    }

    async timeSheetEditSave() {
        await this.commonMethods.clickElement(this.timeLocators.timeSheetDetails.timeSheetEdit);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProject);
        await this.page.locator(this.timeLocators.timeSheetDetails.timeSheetProject).fill(assertion.assertion.editTimeSheetProject);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
        await this.commonMethods.clickElement(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
        await this.commonMethods.selectDropDownElements(this.timeLocators.timeSheetDetails.timeSheetActivity, this.timeLocators.timeSheetDetails.timeSheetActivityDropDown,assertion.assertion.editTimeSheetActivityDropDown);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetDays);
        await this.commonMethods.clearAndSendKeysToElements(this.timeLocators.timeSheetDetails.timeSheetDays, [8, 8, 8, 8, 8, 8, 8]);
        await this.commonMethods.clickElement(this.timeLocators.timeSheetDetails.timeSheetSaveBtn);
    }

    async timeSheetEmployeeSearch() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.timeSheet);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.timeSheet);
        await this.page.waitForSelector(this.timeLocators.timeSheet.employeeTimeSheet);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.employeeTimeSheet);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetEmpNameSearch);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.timeSheetDetails.timeSheetEmpNameSearch,assertion.assertion.loginUserName,this.timeLocators.timeSheetDetails.timeSheetNameSearchDropDown);
        await this.commonMethods.clickElement(this.timeLocators.timeSheetDetails.timeSheetViewBtn);
    }

    async attendanceMyRecords() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.attendance);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.attendance);
        await this.page.waitForSelector(this.timeLocators.timeSheet.myRecords);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.myRecords);
        await this.commonMethods.enterText(this.timeLocators.attendanceDetails.attendanceDate, assertion.assertion.todayDate);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.attendaceViewBtn);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.totalRecordText);
        const noSheetFound = await this.commonMethods.getTextFromElement(this.timeLocators.attendanceDetails.totalRecordText);
        console.log(noSheetFound);
        expect(noSheetFound).toBe(" (2) Records Found");

    }

    async attendancePunchInOut() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.attendance);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.attendance);
        await this.page.waitForSelector(this.timeLocators.timeSheet.punchInOut);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.punchInOut);
        await expect(this.page.url()).toBe(assertion.assertionURL.punchIn);
        await this.commonMethods.enterText(this.timeLocators.attendanceDetails.punchInDate, assertion.assertion.punchDate);
        // await this.clickElement(this.timeLocators.attendanceDetails.punchInDate);
        await this.commonMethods.enterText(this.timeLocators.attendanceDetails.punchInTime, assertion.assertion.punchTime);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.punchInTime);
        await this.commonMethods.enterText(this.timeLocators.attendanceDetails.punchInComments, assertion.assertion.punchComments);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.punchInBtn);
        const punchOutTime = await this.commonMethods.getTextFromElement(this.timeLocators.attendanceDetails.punchedOutTime);
        console.log(punchOutTime);
        const punchOutDate = await this.commonMethods.getTextFromElement(this.timeLocators.attendanceDetails.punchedOutDate);
        console.log(punchOutDate);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.punchOutBtn);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.punchOutBtn);
    }

    async employeeAttendanceRecord() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.attendance);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.attendance);
        await this.page.waitForSelector(this.timeLocators.timeSheet.employeeRecords);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.employeeRecords);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.employeeName);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.attendanceDetails.employeeName, assertion.assertion.employeeName, this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.employeeDate);
        await this.commonMethods.enterText(this.timeLocators.attendanceDetails.employeeDate, assertion.assertion.projectDateRangeTo);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.employeeViewBtn);
        const textTrue = await this.commonMethods.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(textTrue).toBe("No Records Found");
    }


    async attendanceConfiguration() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.attendance);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.attendance);
        await this.page.waitForSelector(this.timeLocators.timeSheet.configuration);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.configuration);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.configurationInOut);
        const CheckedInOut = await this.commonMethods.isCheckboxChecked(this.timeLocators.attendanceDetails.configurationInOut);
        console.log(`The checkbox is checked :` + CheckedInOut);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.configurationRecord);
        const CheckedRecord = await this.commonMethods.isCheckboxChecked(this.timeLocators.attendanceDetails.configurationRecord);
        console.log(`The checkbox is checked :` + CheckedRecord);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.configurationSubOrdinate);
        const CheckedSubOrdinate = await this.commonMethods.isCheckboxChecked(this.timeLocators.attendanceDetails.configurationSubOrdinate);
        console.log(`The checkbox is checked :` + CheckedSubOrdinate);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.configurationSaveBtn);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.configurationSaveBtn);
        const textTrue = await this.commonMethods.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(textTrue).toBe("Successfully Saved");
        await this.page.waitForTimeout(2000);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.configurationInOut);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.configurationInOut);
        const isCheckedInOut = await this.commonMethods.isCheckboxChecked(this.timeLocators.attendanceDetails.configurationInOut);
        console.log(`The checkbox is checked :` + isCheckedInOut);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.configurationRecord);
        const isCheckedRecord = await this.commonMethods.isCheckboxChecked(this.timeLocators.attendanceDetails.configurationRecord);
        console.log(`The checkbox is checked :` + isCheckedRecord);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.configurationSubOrdinate);
        const isCheckedSubOrdinate = await this.commonMethods.isCheckboxChecked(this.timeLocators.attendanceDetails.configurationSubOrdinate);
        console.log(`The checkbox is checked :` + isCheckedSubOrdinate);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.configurationSaveBtn);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.configurationSaveBtn);
        const textFalse = await this.commonMethods.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(textFalse).toBe("Successfully Saved");
    }

    async projectInfoCustomerAdd() {

        await this.commonMethods.clickElement(this.timeLocators.timeSheet.projectInfo);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.customer);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.customer);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.customerAddBtn);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.customerAddBtn);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.customerName);
        await this.commonMethods.enterText(this.timeLocators.projectInfoDetails.customerName, assertion.assertion.projectInfocustomerName);
        await this.commonMethods.enterText(this.timeLocators.projectInfoDetails.customerDescription, assertion.assertion.projectInfoDescription);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.customerSaveBtn);
        await this.commonMethods.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.tableSelector);
        await this.commonMethods.interactWithTableEditField(this.timeLocators.projectInfoDetails.tableSelector, this.timeLocators.projectInfoDetails.headerSelector, this.timeLocators.projectInfoDetails.allRows, this.timeLocators.projectInfoDetails.tableCells, assertion.assertion.projectInfocustomerName);
        await this.commonMethods.enterText(this.timeLocators.projectInfoDetails.customerName, assertion.assertion.projectInfocustomerEditedName);
        await this.commonMethods.enterText(this.timeLocators.projectInfoDetails.customerDescription, assertion.assertion.projectInfocustomerEditedDesc);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.customerSaveBtn);
        await this.commonMethods.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        await this.commonMethods.interactWithTableDeletionField(this.timeLocators.projectInfoDetails.tableSelector, this.timeLocators.projectInfoDetails.headerSelector, this.timeLocators.projectInfoDetails.allRows, this.timeLocators.projectInfoDetails.tableCells, assertion.assertion.projectInfocustomerEditedName);
        console.log("Table perfored");
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.confirmationDeletePopup);
        await this.commonMethods.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
    }


    async reportProjectReports() {

        await this.page.waitForSelector(this.timeLocators.timeSheet.reports);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.reports);
        await this.page.waitForSelector(this.timeLocators.timeSheet.projectReports);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.projectReports);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.addProjectsName);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.addProjectsName, assertion.assertion.projectCustomerName, this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.projectDateRange);
        await this.commonMethods.enterText(this.timeLocators.attendanceDetails.projectDateRange, assertion.assertion.projectDateRange);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.projectToDate);
        await this.commonMethods.enterText(this.timeLocators.attendanceDetails.projectToDate, assertion.assertion.projectDateRangeTo);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.projectInclude);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.projectViewBtn);
        const text = await this.commonMethods.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(text).toBe("No Records Found");
    }

    async reportEmployeeReports() {

        await this.page.waitForSelector(this.timeLocators.timeSheet.reports);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.reports);
        await this.page.waitForSelector(this.timeLocators.timeSheet.employeeReports);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.employeeReports);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.reportEmpName);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.attendanceDetails.reportEmpName, assertion.assertion.reportEmployeeName, this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.reportProjectName);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.attendanceDetails.reportProjectName, assertion.assertion.reportProjectName, this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetActivity);
        await this.commonMethods.selectDropDownElements(this.timeLocators.timeSheetDetails.timeSheetActivity, this.timeLocators.timeSheetDetails.timeSheetActivityDropDown, assertion.assertion.reportActivityName);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.projectDateRange);
        await this.commonMethods.enterText(this.timeLocators.attendanceDetails.projectDateRange, assertion.assertion.projectDateRange);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.projectToDate);
        await this.commonMethods.enterText(this.timeLocators.attendanceDetails.projectToDate, assertion.assertion.projectDateRangeTo);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.projectInclude);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.projectViewBtn);
        const text = await this.commonMethods.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(text).toBe("No Records Found");
    }

    async reportAttendenceSummary() {

        await this.page.waitForSelector(this.timeLocators.timeSheet.reports);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.reports);
        await this.page.waitForSelector(this.timeLocators.timeSheet.attendenceSummary);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.attendenceSummary);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.employeeName);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.employeeName, assertion.assertion.reportEmployeeName, this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.jobTitle);
        await this.commonMethods.selectDropDownElements(this.timeLocators.projectInfoDetails.jobTitle, this.timeLocators.projectInfoDetails.jobTitleDropDown, assertion.assertion.reportJobTitle);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.subUnit);
        await this.commonMethods.selectDropDownElements(this.timeLocators.projectInfoDetails.subUnit, this.timeLocators.projectInfoDetails.subUnitDropDown, assertion.assertion.reportSubUnit);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.employeeStatus);
        await this.commonMethods.selectDropDownElements(this.timeLocators.projectInfoDetails.employeeStatus, this.timeLocators.projectInfoDetails.employeeStatusDropdown, assertion.assertion.reportEmployeeStatus);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.dateRange);
        await this.commonMethods.enterText(this.timeLocators.projectInfoDetails.dateRange, assertion.assertion.projectDateRange);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.toDate);
        await this.commonMethods.enterText(this.timeLocators.projectInfoDetails.toDate, assertion.assertion.projectDateRangeTo);
        await this.commonMethods.clickElement(this.timeLocators.attendanceDetails.projectViewBtn);
        const text = await this.commonMethods.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(text).toBe("No Records Found");
    }

    async projectsInfoValidateProjectsAdd() {
        // await this.page.waitForSelector(this.timeLocators.timeSheet.projectInfo);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.projectInfo);
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projects);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projects);
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsCustomerName);
        await this.page.locator(this.timeLocators.projectInfoDetails.projectsCustomerName).fill("a");
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsCustomerName);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projectName);

        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projectsName);
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.timeLocators.projectInfoDetails.projectsName).fill("a");
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsName);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.project);

        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projectsAdmin);
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.timeLocators.projectInfoDetails.projectsAdmin).fill("a");
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsAdmin);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projectAdmin);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projectsSearch);
        const text = await this.commonMethods.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(text).toBe("No Records Found");
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projectReset);
    }

    async projectsInfoAddNewProject() {
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.projectInfo);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projects);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projects);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsAddBtn);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projectsAddBtn);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.addProjectsName);
        await this.commonMethods.enterText(this.timeLocators.projectInfoDetails.addProjectsName, assertion.assertion.projectInfocustomerName);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsCustomerName);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsCustomerName, assertion.assertion.projectsCustomerName, this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.addProjectsDescription);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.addProjectsDescription);
        await this.page.fill(this.timeLocators.projectInfoDetails.addProjectsDescription, assertion.assertion.projectAddDescription);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsAdmin);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsAdmin, assertion.assertion.projectsAdmin, this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.addProjectsSaveBtn);

    }

    async projectsInfoAddNewProjectclickCancel() {
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.projectInfo);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projects);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projects);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsAddBtn);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projectsAddBtn);
        // await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.addProjectsName);
        await this.commonMethods.enterText(this.timeLocators.projectInfoDetails.addProjectsName, assertion.assertion.projectInfocustomerName);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsCustomerName);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsCustomerName, assertion.assertion.projectsCustomerName, this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.addProjectsDescription);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.addProjectsDescription);
        await this.page.fill(this.timeLocators.projectInfoDetails.addProjectsDescription, assertion.assertion.projectAddDescription);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsAdmin);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsAdmin, assertion.assertion.projectsAdmin, this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.addPfojectsCancelBtn);

    }

    async projectInfoProjects() {
        // await this.page.waitForSelector(this.timeLocators.timeSheet.projectInfo);
        await this.commonMethods.clickElement(this.timeLocators.timeSheet.projectInfo);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projects);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projects);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsCustomerName, assertion.assertion.projectsCustomerName, this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsName, assertion.assertion.projectsName, this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.commonMethods.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsAdmin, assertion.assertion.projectsAdmin, this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projectsSearch);
        const projectsText = await this.commonMethods.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        console.log(projectsText);
        expect(projectsText).toBe("No Records Found");
        await this.commonMethods.clickElement(this.timeLocators.projectInfoDetails.projectReset);
        const customerName = await this.commonMethods.isInputFieldEmpty(this.timeLocators.projectInfoDetails.projectsCustomerName);
        console.log(`The customer field is Empty :` + customerName);
        const projectName = await this.commonMethods.isInputFieldEmpty(this.timeLocators.projectInfoDetails.projectsName);
        console.log(`The project field is Empty :` + projectName);
        const adminName = await this.commonMethods.isInputFieldEmpty(this.timeLocators.projectInfoDetails.projectsAdmin);
        console.log(`The admin field is Empty :` + adminName);
        await this.commonMethods.interactWithTableAndGetText(this.timeLocators.projectInfoDetails.tableSelector, this.timeLocators.projectInfoDetails.headerSelector, this.timeLocators.projectInfoDetails.allRows, this.timeLocators.projectInfoDetails.tableCells, assertion.assertion.projectInfocustomerEditedName);
        console.log("Table Performed");
        
    }
}