import { Page, expect,Locator } from "@playwright/test";
import { Adminlocators } from "../common/Locators/adminlocators";

export  class Adminmenu {
    readonly page: Page;
    private readonly adminlocators: Adminlocators;
    readonly path:any
    

    constructor(page: Page) {
        this.page = page;
        this.adminlocators = new Adminlocators(page);

    }

    async clickAdmin(){
        await (await this.page.waitForSelector(this.adminlocators.admin)).isVisible();
        await this.page.locator(this.adminlocators.admin).click();
        await this.page.locator(this.adminlocators.qualifications).click();
    }

    async clickLanguages(){
        await this.page.locator(this.adminlocators.languages).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.adminlocators.languages_Add).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.adminlocators.languages_Name).fill('Telugu');
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.adminlocators.languages_Save).click();
        await this.page.waitForTimeout(3000);
        
        let languages = await (await this.page.waitForSelector(this.adminlocators.languages_Data)).isVisible();
        await this.page.waitForTimeout(3000);
        console.log("Languages Validation",languages)
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.adminlocators.languages_Edit).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.adminlocators.languages_Name).fill('English');
        await this.page.waitForTimeout(3000);
        const error = await this.page.locator(this.adminlocators.error_Alert).textContent();
        console.log("Error reson",error);

        await this.page.locator(this.adminlocators.languages_Name).fill('Hindi');
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.adminlocators.languages_Save).click();
        await this.page.waitForTimeout(3000);
        let EditLanguage = await (await this.page.waitForSelector(this.adminlocators.editlanguages_Data)).isVisible();
        await this.page.waitForTimeout(3000);
        console.log("Edited Languages Validation",EditLanguage);
        await this.page.waitForTimeout(3000);
        const recourdcount = await this.page.locator(this.adminlocators.languages_recoundcount).textContent();
        console.log("Record count Before Delete",recourdcount);

        await this.page.locator(this.adminlocators.languages_Delete).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.adminlocators.languages_YesDelete).click();
        const recourdcount1 = await this.page.locator(this.adminlocators.languages_recoundcount).textContent();
        console.log("Record count After Delete",recourdcount1);


    }
}