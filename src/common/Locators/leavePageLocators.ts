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




    constructor(page:Page){
       
        this.page = page
        this.mainLeave ="ul.oxd-main-menu li:nth-of-type(3)";
        this.apply="//a[text()='Apply']";
        this.myleave="//a[text()='My Leave']";
        this.entitlements="//span[text()='Entitlements ']";
        this.reports="//span[text()='Reports ']";
        this.more="//span[text()='More ']";
        this.applyLeave="//h6[text()='Apply Leave']";
        this.leaveBalance="//label[text()='Leave Balance']";
        this.fromDate="//label[text()='From Date']";
        this.toDate="//label[text()='To Date']";
        this.comments="//label[text()='Comments']";
        this.applyBtn="//button[text()=' Apply ']";

    }

}