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
    

    constructor(page: Page) {
        this.page = page;
        this.dashbtn = new DashboardLocator(page); 
        this.timeandwork = new DashboardLocator(page);
        this.timeandlogo = new DashboardLocator(page);
        this.myactionbtn= new DashboardLocator(page);
        this.leaverequestbtn = new DashboardLocator(page);
        this.timesheetlink = new DashboardLocator(page);
        this.selfreview = new DashboardLocator(page);
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


    







}

    
    
