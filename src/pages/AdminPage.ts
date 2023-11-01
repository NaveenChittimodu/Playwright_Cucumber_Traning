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
        await (await this.page.waitForSelector(this.adminlocator.adminmenu)).isVisible();
        await this.page.locator(this.adminlocator.adminmenu).click();

    }
    async jobdropdown(){
        
        await (await this.page.waitForSelector(this.adminlocator.joboption)).isVisible();
        await this.page.locator(this.adminlocator.joboption).click();
        await this.page.locator(this.adminlocator.jobcategories).click();

    }

    async addBtn(){
        
        await (await this.page.waitForSelector(this.adminlocator.addbutton));
        await this.page.locator(this.adminlocator.addbutton).click();
        await this.page.locator(this.adminlocator.namebox).fill('naveen');
        await this.page.locator(this.adminlocator.savebutton).click();
       

    }

    async alreadyCreatedjob(){
        
        await (await this.page.waitForSelector(this.adminlocator.addbutton)).isVisible();
        await this.page.locator(this.adminlocator.addbutton).click();
        await this.page.locator(this.adminlocator.namebox).fill('naveen');
        await this.page.locator(this.adminlocator.savebutton).click();
        await this.page.locator(this.adminlocator.alreadyexist).textContent();
        console.log('The job name already exist');
        await this.page.locator(this.adminlocator.cancelbutton).click();
        


    }
    async rowlist(){
        

        let lenghtcount  = await this.page.locator(this.adminlocator.rowlistcount);

        
        console.log('count number is ',lenghtcount);
        for(let i=0;i<lenghtcount;i++){

        let row = await this.page.locator(this.adminlocator.rowlistcount).nth(i);

        // console.log('count number is ',lenghtcount);

        }
    
    }

}