import {Locator, Page} from '@playwright/test'

export class MaintenancerdLocator{

    readonly page: Page;
    readonly maintenance:any;
    readonly password:any;
    readonly confirmbtn:any;
    readonly puremployeerecords:any;
    readonly typeforhints:any;
    readonly searchbtn:any;
 

  
   
   
   
    constructor(page: Page){
        this.page = page
        this.maintenance = "//span[text()='Maintenance']";
        this.password = "//input[@name='password']";
        this.confirmbtn ="//button[@type='submit']";
        this.puremployeerecords = "//h6[text()='Purge Employee Records']";
        this.typeforhints ="//input[@placeholder='Type for hints...']";
        this.searchbtn = "//button[text()=' Search ']";

       
      









    }


}