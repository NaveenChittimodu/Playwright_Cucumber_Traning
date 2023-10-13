import { Locator, Page, expect } from "@playwright/test";
import { log } from "console";

export class CommonMethods {

    public page: Page;

    constructor(page: Page){
        this.page = page;
        // this.loginlocators = new Loginlocators(page); 
    }
    
    async clickElement(locator:string){

        try {
            await this.page.waitForSelector(locator);
            await expect(await this.page.locator(locator)).toBeVisible();
            await this.page.locator(locator).click({ force: true });
            console.log("Button has been clicked...")
        } 
        catch (error) {
            console.log("Button hasn't been clicked...")
        }
        
    }

    async selectDropDownElement(dropdownLocator: string, dropDownText: string){
        if(await this.page.locator(dropdownLocator).isVisible()){
            await this.page.locator(dropDownText).click();
        }
    }
}


