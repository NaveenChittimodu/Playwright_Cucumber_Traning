
import {Locator, Page} from '@playwright/test'

export class Performancelocators{
   
    readonly page: Page;
    readonly performance: string;

   
    constructor(page: Page){
        this.page = page
        this.performance = "//span[text()='Performance']";
    }
}