import { Page, expect, Locator } from "@playwright/test";

import{ Adminlocators }   from "../common/Locators/adminlocators";
import { GenericPage } from "../utils/Genericmethods";
import { Performancelocators } from "../common/Locators/Performancelocators";


export class AdminPage {
    readonly page: Page;
    private readonly adminloctators: Adminlocators;
    private readonly genericmethodpage: GenericPage;


    constructor(page: Page) {
        this.page = page;
        this.adminloctators = new Adminlocators(page);
        this.genericmethodpage = new GenericPage(page)
    }


    async clickAdmin(){
        await this.page.locator(this.adminloctators.admin).isVisible();
        await this.page.locator(this.adminloctators.admin).click();
    }
    async adminAddBtn(){
        await this.page.locator(this.adminloctators.adminAddbtn).isVisible();
        await this.page.locator(this.adminloctators.adminAddbtn).click();
    }
    async clickJob(){
        await this.page.locator(this.adminloctators.job).isVisible();
        await this.page.locator(this.adminloctators.job).click();
    }
    async adminUserSelect(){
        await this.page.locator(this.adminloctators.userSelectdropdown).isVisible();
        await this.page.locator(this.adminloctators.userSelectdropdown).click();
        await this.page.locator(this.adminloctators.admindropdown).isVisible();
        await this.page.locator(this.adminloctators.admindropdown).click({force : true});
    }
    async adminStatusSelect(){
        await this.page.locator(this.adminloctators.statusSelectdropdown).isVisible();
        await this.page.locator(this.adminloctators.statusSelectdropdown).click();
        await this.page.locator(this.adminloctators.statusdropdown).isVisible();
        await this.page.locator(this.adminloctators.statusdropdown).click({force :true});
    }

    async employeeName(){
    await this.page.locator(this.adminloctators.employeename).isVisible();;
        await this.page.locator(this.adminloctators.employeename).click();
        await this.page.locator(this.adminloctators.employeename).fill("n");
        await this.page.waitForTimeout(3000)
        await this.page.locator(`//span[text()='Odis  Adalwin']`).click();

    }
    async userName(){
    await this.page.locator(this.adminloctators.userName).isVisible();;
        await this.page.locator(this.adminloctators.userName).click();
        await this.page.locator(this.adminloctators.userName).clear();
        await this.page.locator(this.adminloctators.userName).fill("Admin1");
    }
    async password(){
        await this.page.locator(this.adminloctators.password).isVisible();;
        await this.page.locator(this.adminloctators.password).click();
        await this.page.locator(this.adminloctators.password).fill("admin1232");
    }
    async confirmPassword(){
        await this.page.locator(this.adminloctators.confirmPassword).isVisible();;
        await this.page.locator(this.adminloctators.confirmPassword).click();
        await this.page.locator(this.adminloctators.confirmPassword).fill("admin1232");
    }
    async clickJobTitles(){
        await this.page.locator(this.adminloctators.jobTitles).isVisible();
        await this.page.locator(this.adminloctators.jobTitles).click();
        await this.page.locator(this.adminloctators.adminAddbtn).isVisible();
        await this.page.locator(this.adminloctators.adminAddbtn).click();
        await this.page.locator(this.adminloctators.jobTitle).fill("naveen1")
        await this.page.locator(this.adminloctators.save).click();
    }
    async payGrades(){
        await this.page.locator(this.adminloctators.payGrades).isVisible();
        await this.page.locator(this.adminloctators.payGrades).click();
        await this.page.locator(this.adminloctators.addbtn).isVisible();
        await this.page.locator(this.adminloctators.addbtn).click();
        await this.page.locator(this.adminloctators.paygradeName).isVisible();
        await this.page.locator(this.adminloctators.paygradeName).click();
        await this.page.locator(this.adminloctators.paygradeName).fill("Naveen");
        await this.page.locator(this.adminloctators.save).isVisible();
        await this.page.locator(this.adminloctators.save).click();

    }

    async employeeStatus(){
        await this.page.locator(this.adminloctators.employeeStatus).click();
        await this.page.locator(this.adminloctators.addbtn).isVisible();
        await this.page.locator(this.adminloctators.addbtn).click();
        await this.page.locator(this.adminloctators.employeeStatusName).isVisible();
        await this.page.locator(this.adminloctators.employeeStatusName).click();
        await this.page.locator(this.adminloctators.employeeStatusName).fill("Naveen");
        await this.page.locator(this.adminloctators.save).isVisible();
        await this.page.locator(this.adminloctators.save).click();
    }
    async jobcategrories(){
        await this.page.locator(this.adminloctators.jobcategories).click();
        await this.page.locator(this.adminloctators.addbtn).isVisible();
        await this.page.locator(this.adminloctators.addbtn).click();
        await this.page.locator(this.adminloctators.jobcategory).isVisible();
        await this.page.locator(this.adminloctators.jobcategory).click();
        await this.page.locator(this.adminloctators.jobcategory).fill("CEO");
        await this.page.locator(this.adminloctators.save).isVisible();
        await this.page.locator(this.adminloctators.save).click();
    }
    async workShifts(){
        await this.page.locator(this.adminloctators.WorkShifts).click();
        await this.page.locator(this.adminloctators.addbtn).isVisible();
        await this.page.locator(this.adminloctators.addbtn).click();
        await this.page.locator(this.adminloctators.WorkShiftName).isVisible();
        await this.page.locator(this.adminloctators.WorkShiftName).click();
        await this.page.locator(this.adminloctators.WorkShiftName).fill("Workday1")
        await this.page.locator(this.adminloctators.WorkShiftFrom).isVisible();
        await this.page.locator(this.adminloctators.WorkShiftFrom).click();
        await this.page.locator(this.adminloctators.WorkShiftFrom).fill("01:00 AM");
        await this.page.locator(this.adminloctators.WorkShiftTo).isVisible();
        await this.page.locator(this.adminloctators.WorkShiftTo).click();
        await this.page.locator(this.adminloctators.WorkShiftTo).fill("05:00 PM");
        await this.page.locator(`//label[text()='Duration Per Day']`).click();
        await this.page.locator(this.adminloctators.assignedemployes).isVisible();
        await this.page.locator(this.adminloctators.assignedemployes).click();
        await this.page.locator(this.adminloctators.assignedemployes).fill("o");
        await this.page.waitForTimeout(3000)
        await this.page.locator(`//span[text()='WoW Enjoyer  AlphaTester']`).click();
        await this.page.locator(this.adminloctators.save).isVisible();
        await this.page.locator(this.adminloctators.save).click();
    }

    async organization (){
         await this.page.locator(this.adminloctators.organization).isVisible();
         await this.page.locator(this.adminloctators.organization).click()
    }
    async generalinformation (){
         await this.page.locator(this.adminloctators.generalinformation).isVisible();
         await this.page.locator(this.adminloctators.generalinformation).click()
    }

}
