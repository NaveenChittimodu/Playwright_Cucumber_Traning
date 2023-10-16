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
    readonly quickmodule:any;
    readonly assignleave:any;
    readonly leavelist:any;
    readonly timesheetlink:any;
    readonly applyleave:any;
    readonly myleave:any;
    readonly mytimesheet:any;
    readonly buzzlatest:any;
    readonly buzzpostcount:any;
    readonly employeeleave:any;
    readonly settingsbtn:any;
    readonly togglebtn:any;
    readonly cancelbtn:any;
    readonly savebtn:any;
    readonly closebtn:any;
    readonly employeechart:any;
    readonly subunit:any;

  
   
   
   
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
        this.quickmodule="//p[text()='Quick Launch']";
        this.assignleave="//button[@title='Assign Leave']";
        this.leavelist="//button[@title='Leave List']";
        this.timesheetlink = "//button[@title='My Timesheet']";
        this.applyleave = "//button[@title='Apply Leave']";
        this.myleave = "//button[@title='My Leave']";
        this.mytimesheet = "//button[@title='My Timesheet']";
        this.buzzlatest = "//p[text()='Buzz Latest Posts']";
        this.buzzpostcount = "//div[@class='oxd-grid-1 orangehrm-buzz-widget']";
        //need to loop the above xpath to get the count f the post.
        this.employeeleave = "//p[text()='Employees on Leave Today']";
        this.settingsbtn = "//i[@class='oxd-icon bi-gear-fill orangehrm-leave-card-icon']";
        this.togglebtn = "//div[@class='oxd-sheet oxd-sheet--rounded oxd-sheet--white oxd-dialog-sheet oxd-dialog-sheet--shadow oxd-dialog-sheet--gutters orangehrm-dialog-modal']";
        this.cancelbtn = "//button[text()=' Cancel ']";
        this.savebtn = "//button[@type='submit']";
        this.closebtn = "//button[@class='oxd-dialog-close-button oxd-dialog-close-button-position']";
        this.employeechart = "//p[text()='Employee Distribution by Sub Unit']";
        this.subunit = "//span[@title='Human Resources']";
        
}
}