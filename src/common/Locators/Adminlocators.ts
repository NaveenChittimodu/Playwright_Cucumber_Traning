import {Locator, Page} from '@playwright/test'

export class AdminLocators{
   
    readonly page: Page;
    readonly adminmenu : any;
    readonly joboption:any;
    readonly jobcategories:any;
    readonly addbutton:any;
    readonly namebox:any;
    readonly savebutton:any;
    readonly cancelbutton:any;
    readonly alreadyexist:any;
    readonly rowlistcount:any;

     
    
  
   
    constructor(page: Page){
        this.page = page
        this.adminmenu = "//span[text()='Admin']";
        this.joboption = "//span[text()='Job ']";
        this.jobcategories = "//a[text()='Job Categories']";
        this.addbutton = "//button[text()=' Add ']";
        this.namebox = "//span[text()='Configuration ']//following::input";
        this.savebutton = "//button[@type='submit']";
        this.cancelbutton = "//button[text()=' Cancel ']";
        this.alreadyexist =  "//span[text()='Already exists']";
        this.rowlistcount = "//div[@class='oxd-table-body']";

    }


}