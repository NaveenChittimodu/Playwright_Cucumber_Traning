import { Page, expect,Locator } from "@playwright/test";
import { Directorylocators } from "../common/Locators/directorylocators";

export  class Directorymenu {
    readonly page: Page;
    private readonly directorylocators: Directorylocators;
    

    constructor(page: Page) {
        this.page = page;
        this.directorylocators = new Directorylocators(page); 
    }

    async clickDirectory(){
        await (await this.page.waitForSelector(this.directorylocators.directory)).isVisible();
        await this.page.locator(this.directorylocators.directory).click();
        await this.page.locator(this.directorylocators.collapseIcon).click();
        await this.page.locator(this.directorylocators.expandIcon).click();
        await (await this.page.waitForSelector(this.directorylocators.expandIcon_data)).isVisible();
        const data = await this.page.locator(this.directorylocators.expandIcon_data).textContent();
        console.log("result",data)
    }
    
    async fillDirectorydata(){
        await (await this.page.waitForSelector(this.directorylocators.employeeName)).isEditable();
        await this.page.locator(this.directorylocators.employeeName).fill('pet');
        await this.page.locator(this.directorylocators.selelct_employeeName).click();
        await this.page.locator(this.directorylocators.jobTitle).click();
        await this.page.locator(this.directorylocators.selelct_jobTitle).click();
        // await this.page.locator(this.directorylocators.location).click();
        // await this.page.locator(this.directorylocators.selelct_location).click();
        await this.page.locator(this.directorylocators.directorySearch).click();
        await this.page.locator(this.directorylocators.employeeDirectory).click();
        await (await this.page.waitForSelector(this.directorylocators.employeeDirectorydata)).isVisible();
        const data = await this.page.locator(this.directorylocators.employeeDirectorydata).textContent();
        console.log("result1",data)
    } 
}