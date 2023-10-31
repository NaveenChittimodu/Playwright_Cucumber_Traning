import {Locator, Page} from '@playwright/test'

export class AdminLocators{
   
    readonly page: Page;
    readonly dashboardbtn : any;
    
  
   
    constructor(page: Page){
        this.page = page

    }


}