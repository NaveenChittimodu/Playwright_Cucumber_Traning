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


    readonly editEntitle:string;
    readonly entitlementCancel:string;
    readonly entitlementSave:string;
    readonly employeeEntitle:string;
    readonly employeeEntitleSearch:string;
    readonly myEntitlements:string;
    readonly myLeaveEntitlement:string;
    readonly myLeaveEntitlementSerch:string;


    // report
    readonly leaveReport:string;
    readonly LeaveEntitilementAndRepor:string;
    readonly myLeaveEntitilementAndRepor:string;


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


        //// report

        this.leaveReport="//span[text()='Reports ']";
        this.LeaveEntitilementAndRepor="//a[text()='Leave Entitlements and Usage Report']";
        this.myLeaveEntitilementAndRepor="//a[text()='My Leave Entitlements and Usage Report']";




    }

}