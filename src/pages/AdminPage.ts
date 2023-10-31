import { Page, expect,Locator } from "@playwright/test";
import { AdminLocators } from "../common/Locators/Adminlocators";

export  class Admin {
    readonly page: Page;
    readonly adminlocator: AdminLocators;
    
    constructor(page: Page) {
        this.page = page;
        this.adminlocator = new AdminLocators(page); 
   
    }

    async clickBtn(){
        await (await this.page.waitForSelector(this.adminlocator.dashboardbtn)).isVisible();
        await this.page.locator(this.adminlocator.dashboardbtn).click();
    }

}