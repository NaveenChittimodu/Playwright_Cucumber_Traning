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
        timeSheetTitle1:`//span[@class='oxd-topbar-header-breadcrumb']/h6[text()='Timesheets']`,
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
        noTimeSheetFound:`//p[text()='No Timesheets Found']`,
        timeSheetNameSearchDropDown:`.oxd-autocomplete-dropdown .oxd-autocomplete-option`,
        loginUserName : `p.oxd-userdropdown-name`
    };
    this.attendanceDetails = {
        attendeanceTitle: `//h5[text()='My Attendance Records']`,
        attendanceDate: `//label[text()='Date']//parent::div//following-sibling::div//input`,
        attendaceViewBtn:`//button[text()=' View ']`,
        noRecordsFound:`//span[text()='No Records Found']`,
        punchInTitle:`//h6[text()='Punch In']`,
        punchInDate:`//label[text()='Date']//parent::div//following-sibling::div`,
        punchInTime:`//label[text()='Time']//parent::div//following-sibling::div`,
        punchInComments:`//label[text()='Note']//parent::div//following-sibling::div`,
        punchInBtn:`//button[@type='submit']`,
        punchOutPunchedTime:`//label[text()='Punched in time']//parent::div//following-sibling::div`,
        punchedOutDate:`//label[text()='Date']//parent::div//following-sibling::div//input`,
        punchedOutTime:`//label[text()='Time']//parent::div//following-sibling::div`,
        punchOutComments:`//label[text()='Note']//parent::div//following-sibling::div`,
        punchOutBtn:`//button[text()=' Out ']`,
        employeeTitle:`//h5[text()='Employee Attendance Records']`,
        employeeName:`//label[text()='Employee Name']//parent::div//following-sibling::div//input`,
        employeeDate:`//label[text()='Date']//parent::div//following-sibling::div//input`,
        employeeViewBtn:`//button[@type='submit']`,
        configurationTitle:`//h6[text()='Attendance Configuration']`,
        configurationInOut:`(//input[@type='checkbox']/following-sibling::span)[1]`,
        configurationRecord:`(//input[@type='checkbox']/following-sibling::span)[2]`,
        configurationSubOrdinate:`(//input[@type='checkbox']/following-sibling::span)[3]`,
        configurationSaveBtn:`//button[text()=' Save ']`,
        projectName:`//label[text()='Project Name']//parent::div//following-sibling::div`,
        projectInfoCustomerName:`//label[text()='Customer Name']//parent::div//following-sibling::div//input`,
        projectInfoProject:`//label[text()='Project']//parent::div//following-sibling::div//input`,
        projectInfoProjectAdmin:`//label[text()='Project Admin']//parent::div//following-sibling::div//input`,
        projectDateRange:`//label[text()='Project Date Range']//parent::div//following-sibling::div//input`,
        projectToDate:`//input[@placeholder='To']`,
        projectInclude:`//span[contains(@class,'oxd-switch-input oxd-switch-input--active')]`,
        projectViewBtn:`//button[contains(@class,'oxd-button oxd-button--medium')]`,
        reportEmpName:`//label[text()='Employee Name']//parent::div//following-sibling::div//input`,
        reportProjectName:`//label[text()='Project Name']//parent::div//following-sibling::div//input`,
        reportProjectNameDropDown:`.oxd-autocomplete-dropdown .oxd-autocomplete-option`,
        reportActivityName:`//label[text()='Activity Name']//parent::div//following-sibling::div`,
        reportActivityNameDropDown:`div.oxd-select-dropdown .oxd-select-option`,
        reportProjectDateRange:`//label[text()='Project Date Range']//parent::div//following-sibling::div`,
        reportProjectToDate:`//input[@placeholder='To']`,
        reportIncude:`//span[contains(@class,'oxd-switch-input oxd-switch-input--active')]`,
        reportViewBtn:`//button[contains(@class,'oxd-button oxd-button--medium')]`,
        timePageToastMsg:`.oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text`,
        totalRecordText:`.orangehrm-horizontal-padding.orangehrm-vertical-padding .oxd-text`
        

    };

    this.projectInfoDetails = {
        customer: `//a[contains(text(),'Customers')]`,
        customerAddBtn: `//button[contains(@class,'oxd-button oxd-button--medium')]`,
        customerName:`//label[text()='Name']//parent::div//following-sibling::div//input`,
        customerDescription:`//label[text()='Description']//parent::div//following-sibling::div//textarea`,
        customerCancel:`//button[text()=' Cancel ']`,
        customerSaveBtn:`//button[@type='submit']`,
        tableSelector:`div.oxd-table`,
        headerSelector:`div.oxd-table-header`,
        allRows:`div.oxd-table-body div.oxd-table-row`,
        tableCells:`div.oxd-table-cell`,
        deleteSelectedItem:`//button[text()=' Delete Selected ']`,
        confirmationDeletePopup:`//button[text()=' Yes, Delete ']`,
        projects:`//a[contains(text(),'Projects')]`,
        projectsCustomerName:`//label[text()='Customer Name']//parent::div//following-sibling::div//input`,
        projectsName:`//label[text()='Project']//parent::div//following-sibling::div//input`,
        projectsAdmin:`//label[text()='Project Admin']//parent::div//following-sibling::div//input`,
        projectReset:`button.oxd-button.oxd-button--medium.oxd-button--ghost`,
        projectsSearch:`//button[text()=' Reset ']/following-sibling::button`,
        projectsAddBtn:`//button[text()=' Add ']`,
        addProjectsTitle:`//h6[text()='Add Project']`,
        addProjectsName:`//label[text()='Name']//parent::div//following-sibling::div//input`,
        addProjectsCustomerName:`//label[text()='Customer Name']//parent::div//following-sibling::div//input`,
        addProjectsDescription:`//label[text()='Description']//parent::div//following-sibling::div//textarea`,
        addProjectsAdmin:`//label[text()='Project Admin']//parent::div//following-sibling::div//input`,
        addPfojectsCancelBtn:`//button[text()=' Cancel ']`,
        addProjectsSaveBtn:`//button[text()=' Cancel ']`,
        projectName:`//span[text()='ACME Ltd']`,
        project:`//span[text()='ACME Ltd']`,
        projectAdmin:`(//div[@class='oxd-autocomplete-option']//span)[1]`,
        projectInfoCustomerNameDropdown:`.oxd-autocomplete-dropdown .oxd-autocomplete-option span`,
        employeeName: `//label[text()='Employee Name']//parent::div//following-sibling::div//input`,
        jobTitle:`//label[text()='Job Title']//parent::div//following-sibling::div`,
        jobTitleDropDown:`div.oxd-select-dropdown .oxd-select-option`,
        subUnit:`//label[text()='Sub Unit']//parent::div//following-sibling::div`,
        subUnitDropDown:`div.oxd-select-dropdown .oxd-select-option`,
        employeeStatus:`//label[text()='Employment Status']//parent::div//following-sibling::div`,
        employeeStatusDropdown:`div.oxd-select-dropdown .oxd-select-option`,
        dateRange:`//label[text()='Date Range']//parent::div//following-sibling::div//input`,
        toDate:`//input[@placeholder='To']`

    }

    }
}