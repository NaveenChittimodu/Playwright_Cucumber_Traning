import {Locator, Page} from '@playwright/test'

export class MaintenancerdLocator{

    readonly page: Page;
    readonly maintenance:any;
    readonly password:any;
    readonly confirmbtn:any;
    readonly puremployeerecords:any;
    readonly typeforhints:any;
    readonly searchbtn:any;
    readonly dropdown:any;
    readonly candidaterec:any;
    readonly candidatesearchbtn:any;
    readonly associatemanager:any;
    readonly searchbtncandidate:any;
    readonly record:any;
    readonly purgeall:any;
    readonly yesbtn:any;

    readonly accessrecords:any;
    readonly searchrecords:any;

  
   
   
   
    constructor(page: Page){
        this.page = page
        this.maintenance = "//span[text()='Maintenance']";
        this.password = "//input[@name='password']";
        this.confirmbtn ="//button[@type='submit']";
        this.puremployeerecords = "//h6[text()='Purge Employee Records']";
        this.typeforhints ="//input[@placeholder='Type for hints...']";
        this.searchbtn = "//button[text()=' Search ']";
        this.dropdown = "//i[@class='oxd-icon bi-chevron-down']";
        this.candidaterec ="//a[text()='Candidate Records']";
        this.candidatesearchbtn = "//input[@placeholder='Type for hints...']";
        this.associatemanager = "//span[text()='Senior QA Lead']";
        this.searchbtncandidate = "//button[text()=' Search ']";
        this.record = "//span[@class='oxd-text oxd-text--span']";
        this.purgeall = "//button[text()=' Purge All ']";
        this.yesbtn = "//button[text()=' Yes, Purge ']";
        this.accessrecords = "//a[text()='Access Records']";
        this.searchrecords = "//div[@class='oxd-autocomplete-wrapper']";

       
      









    }


}