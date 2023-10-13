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
    


}
