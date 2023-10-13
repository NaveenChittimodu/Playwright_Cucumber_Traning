
import {Locator, Page} from '@playwright/test'

export class Adminlocators{
   
    readonly page: Page;
    readonly admin: string;


   
    constructor(page: Page){
        this.page = page
        this.admin = "//span[text()='Admin']";
    }
}