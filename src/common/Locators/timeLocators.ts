import { Locator, Page } from "@playwright/test";

export class TimeLocators{
    readonly page: Page;
    readonly timeSheet:any;timeSheetDetails:any;attendanceDetails:any;projectInfoDetails:any;

    constructor(page:Page){

        this.page = page;
        this.timeSheet = {
            timeTab : `ul.oxd-main-menu>li:nth-of-type(4)`,
            timeSheet :`//span[text()='Timesheets ']`,
            myTimeSheet:`//a[contains(text(),'My Timesheets')]`,
            employeeTimeSheet: `//a[contains(text(),'Employee Timesheets')]`,
            attendance:`//span[text()='Attendance ']`,
            myRecords:`//a[contains(text(),'My Records')]`,
            punchInOut:`//a[contains(text(),'Punch In/Out')]`,
            employeeRecords:`//a[contains(text(),'Employee Records')]`,
            configuration: `//a[contains(text(),'Configuration')]`,
            reports:`//span[text()='Reports ']`,
            projectReports:`//a[contains(text(),'Project Reports')]`,
            employeeReports:`//a[contains(text(),'Employee Reports')]`,
            attendenceSummary:`//a[contains(text(),'Attendance Summary')]`,
            projectInfo:`//span[text()='Project Info ']`,
            customers:`//a[contains(text(),'Customers')]`,
            projects:`//a[contains(text(),'Projects')]`

        };

    this.timeSheetDetails = {
        timeSheetTitle: `orangehrm-timesheet-header--title`,
        timeSheetPeriodTitle: `//p[text()='Timesheet Period']`,
        timeSheetPeriodInput:`//span[text()='Project Info ']/following::input`,
        timeSheetEdit:`button.oxd-button.oxd-button--medium.oxd-button--ghost`,
        timeSheetSubmit:`//button[text()=' Submit ']`,
        timeSheetProject: `//input[@placeholder='Type for hints...']`,
        timeSheetProjectApache:`//span[text()='Apache Software Foundation - ASF - Phase 1']`,
        timeSheetProjects:`//div[@class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]//input`,
        timeSheetActivity: `div.oxd-select-text-input`,
        timeSheetActivityDropDown:`div.oxd-select-dropdown .oxd-select-option`,
        timeSheetDays:`//div[@class="oxd-input-group oxd-input-field-bottom-space"]//input[@class="oxd-input oxd-input--active"]`,
        timeSheetMon: `(//input[@class='oxd-input oxd-input--active'])[2]`,
        timeSheetTue: `(//input[@class='oxd-input oxd-input--active'])[3]`,
        timeSheetWed: `(//input[@class='oxd-input oxd-input--active'])[4]`,
        timeSheetThu: `(//input[@class='oxd-input oxd-input--active'])[5]`,
        timeSheetFri: `(//input[@class='oxd-input oxd-input--active'])[6]`,
        timeSheetSat: `(//input[@class='oxd-input oxd-input--active'])[7]`,
        timeSheetSun: `(//input[@class='oxd-input oxd-input--active'])[8]`,
        timeSheetCancelBtn:`//button[text()=' Cancel ']`,
        timeSheetResetBtn:`//button[text()=' Reset ']`,
        timeSheetSaveBtn:`//button[@type='submit']`,
        timeSheetEmpNameSearch:`//input[@placeholder='Type for hints...']`,
        timeSheetEmpOdis:`//span[text()='Odis  Adalwin']`,
        timeSheetViewBtn:`//p[text()=' * Required']/following-sibling::button`,
        noTimeSheetFound:`//p[text()='No Timesheets Found']`
    };
    this.attendanceDetails = {
        attendeanceTitle: `//h5[text()='My Attendance Records']`,
        attendanceDate: `//label[text()='Date']//parent::div//following-sibling::div`,
        attendaceViewBtn:`//button[text()=' View ']`,
        noRecordsFound:`//span[text()='No Records Found']`,
        punchInTitle:`//h6[text()='Punch In']`,
        punchInDate:`//label[text()='Date']//parent::div//following-sibling::div`,
        punchInTime:`//label[text()='Time']//parent::div//following-sibling::div`,
        punchInComments:`//label[text()='Note']//parent::div//following-sibling::div`,
        punchInBtn:`//button[@type='submit']`,
        punchOutPunchedTime:`//label[text()='Punched in time']//parent::div//following-sibling::div`,
        punchedOutDate:`//label[text()='Date']//parent::div//following-sibling::div`,
        punchedOutTime:`//label[text()='Time']//parent::div//following-sibling::div`,
        punchOutComments:`//label[text()='Note']//parent::div//following-sibling::div`,
        punchOutBtn:`//button[contains(@class,'oxd-button oxd-button--medium')]`,
        employeeTitle:`//h5[text()='Employee Attendance Records']`,
        employeeName:`//label[text()='Employee Name']//parent::div//following-sibling::div`,
        employeeDate:`//label[text()='Date']//parent::div//following-sibling::div`,
        employeeViewBtn:`//button[@type='submit']`,
        configurationTitle:`//h6[text()='Attendance Configuration']`,
        configurationInOut:`(//input[@type='checkbox']/following-sibling::span)[1]`,
        configurationRecord:`(//input[@type='checkbox']/following-sibling::span)[2]`,
        configurationSubOrdinate:`(//input[@type='checkbox']/following-sibling::span)[3]`,
        configurationSaveBtn:`//button[text()=' Save ']`,
        projectName:`//label[text()='Project Name']//parent::div//following-sibling::div`,
        projectDateRange:`//label[text()='Project Date Range']//parent::div//following-sibling::div`,
        projectToDate:`//input[@placeholder='To']`,
        projectInclude:`//span[contains(@class,'oxd-switch-input oxd-switch-input--active')]`,
        projectViewBtn:`//button[contains(@class,'oxd-button oxd-button--medium')]`,
        reportEmpName:`//label[text()='Employee Name']//parent::div//following-sibling::div`,
        reportProjectName:`//label[text()='Project Name']//parent::div//following-sibling::div`,
        reportActivityName:`//label[text()='Activity Name']//parent::div//following-sibling::div`,
        reportActivityNameDropDown:`div.oxd-select-dropdown .oxd-select-option`,
        reportProjectDateRange:`//label[text()='Project Date Range']//parent::div//following-sibling::div`,
        reportProjectToDate:`//input[@placeholder='To']`,
        reportIncude:`//span[contains(@class,'oxd-switch-input oxd-switch-input--active')]`,
        reportViewBtn:`//button[contains(@class,'oxd-button oxd-button--medium')]`

    };

    this.projectInfoDetails = {
        customer: `//h6[text()='Customers']`,
        customerAddBtn: `//button[contains(@class,'oxd-button oxd-button--medium')]`,
        customerName:`//label[text()='Name']//parent::div//following-sibling::div`,
        customerDescription:`//label[text()='Description']//parent::div//following-sibling::div`,
        customerCancel:`//button[text()=' Cancel ']`,
        customerSaveBtn:`//button[@type='submit']`
    }

    }
}