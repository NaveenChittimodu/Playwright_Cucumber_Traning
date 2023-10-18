import {Locator, Page} from '@playwright/test'

export class LeavePageLocators{
    readonly page: Page;
    readonly mainLeave : string;
    readonly apply:string;
    readonly myleave:string;
    readonly entitlements:string;
    readonly reports:string;
    readonly more :string;


  


    // locators for items below apply button
    readonly applyLeave : string;
    readonly leaveType:any;
    readonly leaveBalance:string;
    readonly fromDate:string;
    readonly toDate:string;
    readonly comments:string;
    readonly applyBtn :string;

    // // locators for my leave
    readonly myLeaveList: string;
    readonly myLeaveFromDate:string;
    readonly myLeaveToDate:string;
    readonly recordFound:string;
    readonly showLeaveStatus:string;
    readonly leave_Type:string;
    readonly myLeaveReset:any;
    readonly myLeaveSearch:string;


    readonly holidayName:string;



    readonly editEntitle:string;
    readonly entitlementCancel:string;
    readonly entitlementSave:string;
    readonly employeeEntitle:string;
    readonly employeeEntitleSearch:string;
    readonly myEntitlements:string;
    readonly myLeaveEntitlement:string;
    readonly myLeaveEntitlementSerch:string;


    readonly employeeName:string;
    readonly employeenameList: string;
    readonly employeenameNumber:any;
    readonly leaveTypeEntitlement:string;
    readonly selectLeaveType:string;


    // report
    readonly leaveReport:string;
    readonly LeaveEntitilementAndRepor:string;
    readonly myLeaveEntitilementAndReport:string;
    readonly myLeaveEntitilementAndReportComponent:string;
    readonly leavePeriod:string;
    readonly generate:string;

    readonly reportLeaveType:string;
    readonly maternityLeave:string;
    readonly reportLeavePeriod:string;
    readonly leavedays:string;
    readonly Location:string;
    readonly emplocation:string;
    readonly subUnit:string;
    readonly subUnitValue:string;
    readonly jobTitle:string;
   
    readonly jobTitleDropdown:string;
    readonly GenerateReport:string;

    readonly myLeavePeriod:string;
    readonly myLeavePeriodValue:string;
    readonly myLeaveGenerate:string;

    readonly fillScreenReport:string;



    // config 
    readonly config:string;
    readonly leavePeriodComponent:string;
    readonly leaveTypeComponent:string;
    readonly workWeekComponent :string;
    readonly holidayComponent:string;
    readonly startMonth:string;
    readonly selectstartMonth:string;
    readonly leavePeriodReset:string;
    readonly startDate:string;
    readonly startDateValue:string;
    readonly leavePeriodSave:string;

    readonly addLeaveType:string;
    readonly addLeaveTypeName:string;
    readonly saveLeaveType:string;
    readonly leaveListName:string;
    readonly singleLeaveName:string;
    readonly deleteLeaveName:string;

    readonly editleave:string;
    readonly editLeaveType:string;
    readonly saveEditLeave:string;

    readonly FullDay:string;
    readonly mondayDropDown:string;
    readonly HalfDay:string;
    readonly mondayNonWorkingDay:string;
    readonly Save:string;
    readonly tuesdayDropDown:string;
    readonly wednesdayDropDown:string;
    readonly thursdayDropDown:string;
    readonly fridayDropDown:string;
    readonly saturdayDropDown:string;
    readonly sundayDropDown:string;


    // holiday
    readonly addHoliday:string;
    readonly holidayDate:string;
    readonly leaveDuration:string;
    readonly saveHoliday:string;
    readonly fulldayHoliday:string;
    
    
    constructor(page:Page){
       
        this.page = page
        this.mainLeave ="//span[text()='Leave']";
        this.apply="//a[text()='Apply']";

    
        
        this.reports="//span[text()='Reports ']";
        this.more="//span[text()='More ']";
        
        this.applyLeave="//h6[text()='Apply Leave']";
        this.leaveBalance="//label[text()='Leave Balance']";
        this.fromDate="//label[text()='From Date']";
        this.toDate="//label[text()='To Date']";
        this.comments="//label[text()='Comments']";
        this.applyBtn="//button[text()=' Apply ']";

        // my leave 
        this.myleave="//a[text()='My Leave']";
        this.myLeaveList="//h5[text()='My Leave List']";
        this.myLeaveFromDate="//label[text()='From Date']";
        this.myLeaveToDate="//label[text()='To Date']";
        this.recordFound="div.orangehrm-header-container span";
        this.showLeaveStatus="//div[@class='oxd-select-text oxd-select-text--active'][1]";
        this.leave_Type="(//div[@class='oxd-select-text oxd-select-text--active'])[2]";
        this.myLeaveReset="//button[text()=' Reset ']";
        this.myLeaveSearch="//button[text()=' Search ']";
       
      
        

        // add leave
        this.holidayName="//label[text()='Name']//parent::div//following-sibling::div//input";
        this.holidayDate="//div[@class='oxd-date-input']";
        this.leaveDuration="//div[@class='oxd-select-text oxd-select-text--active']";
        this.fulldayHoliday="//span[text()='Full Day']";
        this.saveHoliday="//button[text()=' Save ']";
        



        /// entitlement
        this.entitlements="//span[text()='Entitlements ']";
        this.editEntitle="//a[contains(text(),'Add Entitlements')]";
        this.entitlementCancel="//button[text()=' Cancel ']";
        this.entitlementSave="//button[@type='submit']";
        this.employeeEntitle="//a[text()='Employee Entitlements']";
        this.employeeEntitleSearch="//button[@type='submit']";
        this.myEntitlements="//a[text()='My Entitlements']";
        this.myLeaveEntitlement="//h5[text()='My Leave Entitlements']";
        this.myLeaveEntitlementSerch="//button[@type='submit']";

        this.employeeName="//input[@placeholder='Type for hints...']";
        this.employeenameList="//div[@role='option']//span[text()='Lavonne  Casper']"
        this.employeenameNumber="//div[@class='oxd-grid-item oxd-grid-item--gutters']//input[@class='oxd-input oxd-input--active']";
        this.leaveTypeEntitlement="//div[text()='-- Select --']";
        this.selectLeaveType="//span[text()='CAN - Bereavement']";


        //// report

        this.leaveReport="//span[text()='Reports ']";
        this.LeaveEntitilementAndRepor="//a[text()='Leave Entitlements and Usage Report']";
        this.reportLeaveType="//div[@class='oxd-select-wrapper']//div[text()='CAN - Bereavement']"
        this.maternityLeave="//span[text()='CAN - Matternity']";
        this.reportLeavePeriod="//div[@class='oxd-select-text oxd-select-text--active']//div[text()='01-01-2023 - 31-12-2023']";
        this.leavedays="//div[@class='oxd-select-option --selected']//span[text()='01-01-2023 - 31-12-2023']";
        this.Location="(//div[@class='oxd-select-text oxd-select-text--active']//div[text()='-- Select --'])[1]";
        this.emplocation="//span[text()='HQ - CA, USA']"; 
        this.subUnit="//div[@class='oxd-select-text oxd-select-text--focus']";
        this.subUnitValue="//span[text()='Administration']";
        this.jobTitle="//label[text()='Job Title']//parent::div//following-sibling::div";
        this.jobTitleDropdown = "div.oxd-select-dropdown .oxd-select-option";
        this.GenerateReport="//button[text()=' Generate ']";   
        
        this.myLeavePeriod="//div[@class='oxd-select-text-input']"; 
        this.myLeavePeriodValue="//div[@class='oxd-select-option --selected']"; 
        this.myLeaveGenerate="//button[text()=' Generate ']";  
        this.fillScreenReport="//i[@class='oxd-icon bi-arrows-fullscreen oxd-icon-button__icon --toggable-icon']";                






        this.myLeaveEntitilementAndReport="//a[text()='My Leave Entitlements and Usage Report']";
        this.myLeaveEntitilementAndReportComponent="div[@class='oxd-report-table --frame']";
        this.leavePeriod="//div[@class='oxd-select-text oxd-select-text--active']";
        this.generate="//button[@type='submit']";




        // confif
        this.config="//span[text()='Configure ']";
        this.leavePeriodComponent="//a[text()='Leave Period']";
        this.leaveTypeComponent="//a[text()='Leave Types']";
        this.workWeekComponent="//a[text()='Work Week']";
        this.holidayComponent="//a[text()='Holidays']";
        this.addHoliday="button.oxd-button--secondary i";

        this.startMonth="(//div[@class='oxd-select-text--after']//i)[1]";
        this.selectstartMonth="//span[text()='February']";
        this.startDate="(//div[@class='oxd-select-text--after']//i)[2]";
        this.startDateValue="//span[text()='05']";
        this.leavePeriodReset="//button[text()=' Reset ']";
        this.leavePeriodSave="//button[text()=' Save ']";


        this.addLeaveType="//button[@class='oxd-button oxd-button--medium oxd-button--secondary']";
        this.addLeaveTypeName="(//input[@class='oxd-input oxd-input--active'])[2]";
        this.saveLeaveType="//button[@type='submit']";
        this.leaveListName="(//div[@class='oxd-checkbox-wrapper']//input[@type='checkbox'])[1]";
        this.singleLeaveName="//div[text()='CAN - Personal']";
        this.deleteLeaveName="(//button[@class='oxd-icon-button oxd-table-cell-action-space'])[1]";


        this.editleave="(//i[@class='oxd-icon bi-pencil-fill'])[1]";
        this.editLeaveType="(//input[@class='oxd-input oxd-input--active'])[2]";
        this.saveEditLeave="//button[@type='submit']";
        
        this.mondayDropDown="//label[text()='Monday']//parent::div//following-sibling::div/div";
        this.FullDay="//span[text()='Full Day']";
        this.HalfDay="//span[text()='Half Day']";
        this.mondayNonWorkingDay="//span[text()='Non-working Day']";
        this.Save="//button[@type='submit']";
        this.tuesdayDropDown="//label[text()='Tuesday']//parent::div//following-sibling::div/div";
        this.wednesdayDropDown="//label[text()='Wednesday']//parent::div//following-sibling::div/div";
        this.thursdayDropDown="//label[text()='Thursday']//parent::div//following-sibling::div/div";
        this.fridayDropDown="//label[text()='Friday']//parent::div//following-sibling::div/div";
        this.saturdayDropDown="//label[text()='Saturday']//parent::div//following-sibling::div/div";
        this.sundayDropDown="//label[text()='Sunday']//parent::div//following-sibling::div/div";
        
        
    }

}