import { Page, expect,Locator } from "@playwright/test";
import { MaintenancerdLocator } from "../common/Locators/maintenancelocator";


export  class Maintenance {
    readonly page: Page;
    private readonly maintenance: MaintenancerdLocator;
    // private readonly passwordbox: MaintenancerdLocator;
    // private readonly confirmbutton:MaintenancerdLocator;
    // private readonly puremployeerecord:MaintenancerdLocator;
    // private readonly typeforhints:MaintenancerdLocator;
    // private readonly searchbutton:MaintenancerdLocator;
    // private readonly dropdownarrow:MaintenancerdLocator;
    // private readonly candidaterecords:MaintenancerdLocator;
    // private readonly candidatesearchbutton:MaintenancerdLocator;
    // private readonly associatemanagerit:MaintenancerdLocator;
    // private readonly searchbuttoncandidate:MaintenancerdLocator;
    // private readonly recordcount:MaintenancerdLocator;
    // private readonly purgeallbtn:MaintenancerdLocator;
    // private readonly yesbutton:MaintenancerdLocator;
    // private readonly accessrecmenu:MaintenancerdLocator;
    // private readonly searchrecords:MaintenancerdLocator;
    // private readonly employeename:MaintenancerdLocator;
    // private readonly empsearchbtn:MaintenancerdLocator;

   
    constructor(page: Page) {
        this.page = page;
        this.maintenance = new MaintenancerdLocator(page); 
        // this.passwordbox = new MaintenancerdLocator(page);
        // this.confirmbutton = new MaintenancerdLocator(page);
        // this.puremployeerecord = new MaintenancerdLocator(page);
        // this.typeforhints = new MaintenancerdLocator(page);
        // this.searchbutton = new MaintenancerdLocator(page);
        // this.dropdownarrow =  new MaintenancerdLocator(page);
        // this.candidaterecords = new MaintenancerdLocator(page);
        // this.candidatesearchbutton = new MaintenancerdLocator(page);
        // this.associatemanagerit = new MaintenancerdLocator(page);
        // this.searchbuttoncandidate = new MaintenancerdLocator(page);
        // this.recordcount = new MaintenancerdLocator(page);
        // this.purgeallbtn = new MaintenancerdLocator(page);
        // this.yesbutton = new MaintenancerdLocator(page);
        // this.accessrecmenu = new MaintenancerdLocator(page);
        // this.searchrecords = new MaintenancerdLocator(page);
        // this.employeename = new MaintenancerdLocator(page);
        // this.empsearchbtn = new MaintenancerdLocator(page)
    }

    async maintainanceMenu(){


        await (await this.page.waitForSelector(this.maintenance.maintenance)).isVisible();
        await this.page.locator(this.maintenance.maintenance).click();
        await this.page.locator(this.maintenance.password).click();
        await this.page.locator(this.maintenance.password).fill("admin123");
        await this.page.locator(this.maintenance.confirmbtn).click();
    }

    async verifymenu(){

        await (await this.page.waitForSelector(this.maintenance.puremployeerecords)).isVisible();
        
        await (await this.page.waitForSelector(this.maintenance.typeforhints)).isVisible();

        await (await this.page.waitForSelector(this.maintenance.searchbtn)).isVisible();

    }

    // async dropdown(){

    //     await (await this.page.waitForSelector(this.dropdownarrow.dropdown)).isVisible();
    //     await (await this.page.locator(this.dropdownarrow.dropdown)).click();
    //     await (await this.page.locator(this.candidaterecords.candidaterec)).click();
    //     await (await this.page.locator(this.candidatesearchbutton.candidatesearchbtn)).click();
    //     await (await this.page.locator(this.candidatesearchbutton.candidatesearchbtn)).fill("Senior QA Lead");
    //     await (await this.page.locator(this.candidatesearchbutton.candidatesearchbtn)).click();

    //     await (await this.page.locator(this.associatemanagerit.associatemanager)).click();
    //     await (await this.page.locator(this.searchbuttoncandidate.searchbtncandidate)).click();
    //     let beforerecordcount =  await (await this.page.locator(this.recordcount.record)).textContent();

    //     console.log("beforerecordcount =====",beforerecordcount);

    //     await (await this.page.locator(this.purgeallbtn.purgeall)).click();
    //     await (await this.page.locator(this.yesbutton.yesbtn)).click();


    //     await (await this.page.waitForTimeout(10000));
    //     await (await this.page.reload());
    
    //     await (await this.page.locator(this.candidatesearchbutton.candidatesearchbtn)).click();
    //     await (await this.page.locator(this.candidatesearchbutton.candidatesearchbtn)).fill("Senior QA Lead");
    //     await (await this.page.locator(this.candidatesearchbutton.candidatesearchbtn)).click();

    //     await (await this.page.waitForTimeout(5000));

        
    //     await (await this.page.locator(this.associatemanagerit.associatemanager)).click();
    //     await (await this.page.locator(this.searchbuttoncandidate.searchbtncandidate)).click();

    //     let afterrecordcount =  await (await this.page.locator(this.recordcount.record)).textContent();

    //     console.log("afterrecordcount =====",afterrecordcount);

    // }

    async accessreords(){

        // await this.page.locator(this.maintenance.accessrecords).isVisible();
        // await this.page.locator(this.maintenance.accessrecords).click();
        // await this.page.locator(this.maintenance.searchrecords).click();
        // await this.page.locator(this.maintenance.empname).fill("vigneshwaran R");
        // await this.page.waitForTimeout(5000);
        // // await this.page.locator(this.maintenance.empname).fill("vignesh");
        // await this.page.locator(this.maintenance.empname).click();
        // await this.page.locator(this.maintenance.searchbtnemp).click();



        await this.page.locator(this.maintenance.accessrecords).isVisible();;
        await this.page.locator(this.maintenance.accessrecords).click();
        await this.page.locator(this.maintenance.searchrecords).click();
        await this.page.locator(this.maintenance.searchrecords).fill("vigneshwaran rajababu");
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.maintenance.empname).isVisible();
        await this.page.locator(this.maintenance.empname).click({force:true});
        await this.page.locator(this.maintenance.searchbtnemp).click();
        await this.page.locator(this.maintenance.downloadbtn).click();


    }

}