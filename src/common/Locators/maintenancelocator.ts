import {Locator, Page} from '@playwright/test'

export class MaintenancerdLocator{

    readonly page: Page;
    readonly maintenance:any;
 

  
   
   
   
    constructor(page: Page){
        this.page = page
        this.maintenance = "//span[text()='Maintenance']";
      









    }


}