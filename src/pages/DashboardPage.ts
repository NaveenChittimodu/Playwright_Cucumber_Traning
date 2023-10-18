import { Page, expect,Locator } from "@playwright/test";
import { DashboardLocator } from "../common/Locators/DashboardLocator";

export  class Dashboard {
    readonly page: Page;
    private readonly dashbtn: DashboardLocator;
    private readonly timeandwork:DashboardLocator ;
    private readonly timeandlogo:DashboardLocator;
    private readonly myactionbtn:DashboardLocator;
    private readonly leaverequestbtn: DashboardLocator;
    private readonly timesheetlink:DashboardLocator;
    private readonly selfreview:DashboardLocator;
    private readonly interviewlink:DashboardLocator;
    private readonly quickmoduletitle:DashboardLocator;
    private readonly assignleave:DashboardLocator;
    private readonly leavelist:DashboardLocator;
    private readonly timesheetlinktab:DashboardLocator;
    private readonly applyleavelink:DashboardLocator;
    private readonly myleavelink:DashboardLocator;
    private readonly mytimesheet:DashboardLocator;
    private readonly applyleavetab:DashboardLocator;
    private readonly bazzlatest:DashboardLocator;
    private readonly bazzlatestpostcount:DashboardLocator;
    private readonly employeeleave:DashboardLocator;
    private readonly settingsbutton:DashboardLocator;
    private readonly toggle:DashboardLocator;
    private readonly cancelbutton:DashboardLocator;
    private readonly employeedistribution:DashboardLocator;
    private readonly distributionsubunit:DashboardLocator;
    private readonly distributionlocationunit:DashboardLocator;
    
    

    constructor(page: Page) {
        this.page = page;
        this.dashbtn = new DashboardLocator(page); 
        this.timeandwork = new DashboardLocator(page);
        this.timeandlogo = new DashboardLocator(page);
        this.myactionbtn= new DashboardLocator(page);
        this.leaverequestbtn = new DashboardLocator(page);
        this.timesheetlink = new DashboardLocator(page);
        this.selfreview = new DashboardLocator(page);
        this.interviewlink =new DashboardLocator(page);
        this.quickmoduletitle = new DashboardLocator(page);
        this.assignleave = new DashboardLocator(page);
        this.leavelist = new DashboardLocator(page);
        this.timesheetlinktab = new DashboardLocator(page);
        this.applyleavelink = new DashboardLocator(page);
        this.myleavelink = new DashboardLocator(page);
        this.mytimesheet = new DashboardLocator(page);
        this.applyleavetab =  new DashboardLocator(page);
        this.bazzlatest = new DashboardLocator(page);
        this.bazzlatestpostcount =  new DashboardLocator(page);
        this.employeeleave = new DashboardLocator(page);
        this.settingsbutton = new DashboardLocator(page);
        this.cancelbutton = new DashboardLocator(page);
        this.toggle = new DashboardLocator(page);
        this.employeedistribution = new DashboardLocator(page);
        this.distributionsubunit = new DashboardLocator(page);
        this.distributionlocationunit = new DashboardLocator(page);
    }

    async clickBtn(){
        await (await this.page.waitForSelector(this.dashbtn.dashboardbtn)).isVisible();
        await this.page.locator(this.dashbtn.dashboardbtn).click();
    }

    
    async timeandWork(){
        await (await this.page.waitForSelector(this.timeandwork.dashboardbtn)).isVisible();
    }

    async timelogo(){
        await (await this.page.waitForSelector(this.timeandlogo.dashboardbtn)).isVisible();
        await this.page.locator(this.timeandlogo.dashboardbtn).click();

    }

    async myaction(){
        await (await this.page.waitForSelector(this.myactionbtn.dashboardbtn)).isVisible();
    
    }

    async leaverequest(){
        await (await this.page.waitForSelector(this.leaverequestbtn.dashboardbtn)).isVisible();
        await this.page.locator(this.leaverequestbtn.dashboardbtn).click();

    }

    async timesheet(){
        await (await this.page.waitForSelector(this.timesheetlink.dashboardbtn)).isVisible();
        await this.page.locator(this.timesheetlink.dashboardbtn).click();

    }

    async selfreviewlink(){
        await (await this.page.waitForSelector(this.selfreview.dashboardbtn)).isVisible();
        await this.page.locator(this.selfreview.dashboardbtn).click();

    }

    async interviewLink(){
        await (await this.page.waitForSelector(this.interviewlink.dashboardbtn)).isVisible();
        await this.page.locator(this.interviewlink.dashboardbtn).click();

    }

    async quickmoduleTitile(){

        await (await this.page.waitForSelector(this.quickmoduletitle.dashboardbtn)).isVisible();

    }

    async assignLeaveLink(){

        await (await this.page.waitForSelector(this.assignleave.dashboardbtn)).isVisible();
        await this.page.locator(this.assignleave.dashboardbtn).click();

    }

    async leaveList(){

        await (await this.page.waitForSelector(this.leavelist.dashboardbtn)).isVisible();
        await this.page.locator(this.leavelist.dashboardbtn).click();

    }

    async timesheetLinkTab(){

        await (await this.page.waitForSelector(this.timesheetlinktab.dashboardbtn)).isVisible();
        await this.page.locator(this.timesheetlinktab.dashboardbtn).click();

    }

    async applyLeaveLink(){

        await (await this.page.waitForSelector(this.applyleavelink.dashboardbtn)).isVisible();
        await this.page.locator(this.applyleavelink.dashboardbtn).click();

    }
    
    async myLeave(){

        await (await this.page.waitForSelector(this.myleavelink.dashboardbtn)).isVisible();
        await this.page.locator(this.myleavelink.dashboardbtn).click();

    }

    async mytimesheetLink(){

        await (await this.page.waitForSelector(this.mytimesheet.dashboardbtn)).isVisible();
        await this.page.locator(this.mytimesheet.dashboardbtn).click();

    }

    async bazzlatestTitle(){

        await (await this.page.waitForSelector(this.bazzlatest.dashboardbtn)).isVisible();

    }

    async bazzlatestcount(){

       return  await this.page.locator("//div[@class='oxd-grid-1 orangehrm-buzz-widget']").count();

    }

    async employee(){

         await (await this.page.waitForSelector(this.employeeleave.dashboardbtn)).isVisible();
         await (await this.page.waitForSelector(this.settingsbutton.dashboardbtn)).isVisible();
         await (await this.page.waitForSelector(this.toggle.dashboardbtn)).isVisible();
         await this.page.locator(this.cancelbutton.dashboardbtn).click();
 
     }

     async employeeDistribution(){

        await (await this.page.waitForSelector(this.employeedistribution.dashboardbtn)).isVisible();
        
    }



    async distributionSubunit(){

       const unit  = await (await this.page.waitForSelector(this.distributionsubunit.dashboardbtn)).isVisible();
       console.log('subunit ',unit);
        
    }

    async distributionLocationUnit(){

        const unit  = await (await this.page.waitForSelector(this.distributionlocationunit.dashboardbtn)).isVisible();
        
         
     }
 


     



 


}

    
    
