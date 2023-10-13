import { Page, expect, Locator } from "@playwright/test";
import { GenericPage } from "../utils/Genericmethods";
import { Adminlocators} from "../common/Locators/adminlocators"


export class PerformancePage {
    readonly page: Page;
    readonly adminlocator : Adminlocators
    private readonly genericmethodpage: GenericPage;


    constructor(page: Page) {
        this.page = page;
        this.genericmethodpage = new GenericPage(page)
        this.adminlocator = new Adminlocators(page)
    }


    async clickAdmin(){
        await this.page.locator(this.adminlocator.admin).isVisible();
        await this.page.locator(this.adminlocator.admin).click();
    }


}
