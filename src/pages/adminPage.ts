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
}
