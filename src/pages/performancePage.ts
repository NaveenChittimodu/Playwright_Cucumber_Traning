import { Page, expect, Locator } from "@playwright/test";

import {Performancelocators } from "../common/Locators/Performancelocators";


export class PerformancePage {
    readonly page: Page;
    private readonly performancelocators: Performancelocators;


    constructor(page: Page) {
        this.page = page;
        this.performancelocators = new Performancelocators(page);
    }


    async clickPerformance(){
        await this.page.locator(this.performancelocators.performance).isVisible();
        await this.page.locator(this.performancelocators.performance).click();
    }
}
