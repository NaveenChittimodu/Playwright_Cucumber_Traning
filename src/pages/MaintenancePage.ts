import { Page, expect,Locator } from "@playwright/test";
import { MaintenancerdLocator } from "../common/Locators/maintenancelocator";

export  class Maintenance {
    readonly page: Page;
    private readonly mainbtn: MaintenancerdLocator;
   
    constructor(page: Page) {
        this.page = page;
        this.mainbtn = new MaintenancerdLocator(page); 
       
    }

    async maintainanceMenu(){


        await (await this.page.waitForSelector(this.mainbtn.maintenance)).isVisible();
        await this.page.locator(this.mainbtn.maintenance).click();

        
    }

}