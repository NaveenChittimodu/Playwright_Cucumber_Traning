import {Locator, Page} from '@playwright/test'

export class DashboardLocator{
   
    readonly page: Page;
    readonly dashboardbtn : any;
    readonly timeandwork : any;
    readonly timelogo : any;
    readonly myaction: any;
    readonly leaverequest: any;
    readonly timesheet: any;
    readonly selfreview:any;
    readonly interviewlink: any;

  
   
   
   
    constructor(page: Page){
        this.page = page
        this.dashboardbtn = "//span[text()='Dashboard']";
        this.timeandwork = "//p[text()='Time at Work']";
        this.timelogo = "//i[@class='oxd-icon bi-stopwatch']";
        this.myaction = "//p[text()='My Actions']";
        this.leaverequest = "//p[text()=' (13) Leave Requests to Approve']";
        this.timesheet = "//p[text()=' (9) Timesheets to Approve']";
        this.selfreview = "//p[text()='(1) Pending Self Review']";
        this.interviewlink = "//p[text()='(1) Candidate to Interview']";
        

        
}
}