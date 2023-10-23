import { Page, expect,Locator } from "@playwright/test";
import { MaintenancerdLocator } from "../common/Locators/maintenancelocator";


export  class Maintenance {
    readonly page: Page;
    private readonly mainbtn: MaintenancerdLocator;
    private readonly passwordbox: MaintenancerdLocator;
    private readonly confirmbutton:MaintenancerdLocator;
    private readonly puremployeerecord:MaintenancerdLocator;
    private readonly typeforhints:MaintenancerdLocator;
    private readonly searchbutton:MaintenancerdLocator;
   
    constructor(page: Page) {
        this.page = page;
        this.mainbtn = new MaintenancerdLocator(page); 
        this.passwordbox = new MaintenancerdLocator(page);
        this.confirmbutton = new MaintenancerdLocator(page);
        this.puremployeerecord = new MaintenancerdLocator(page);
        this.typeforhints = new MaintenancerdLocator(page);
        this.searchbutton = new MaintenancerdLocator(page);
       
    }

    async maintainanceMenu(){


        await (await this.page.waitForSelector(this.mainbtn.maintenance)).isVisible();
        await this.page.locator(this.mainbtn.maintenance).click();
        await this.page.locator(this.passwordbox.password).click();
        await this.page.locator(this.passwordbox.password).fill("admin123");
        await this.page.locator(this.confirmbutton.confirmbtn).click();
    }

    async verifymenu(){

        await (await this.page.waitForSelector(this.puremployeerecord.puremployeerecords)).isVisible();
        
        await (await this.page.waitForSelector(this.typeforhints.typeforhints)).isVisible();

        await (await this.page.waitForSelector(this.searchbutton.searchbtn)).isVisible();



    }




}