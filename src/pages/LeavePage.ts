import { Page } from "@playwright/test";
import {LeavePageLocators} from "../common/Locators/leavePageLocators"


export class LeavePage {
    readonly page: Page;
    private readonly leavePageLocators: LeavePageLocators;

    constructor(page: Page) {
        this.page = page;
        this.leavePageLocators = new LeavePageLocators(page);
    }
    async clickMainLeave() {
        // let mainLeave = await (await this.page.waitForSelector(this.leavePageLocators.mainLeave)).isVisible();
        // await (await this.page.waitForSelector(this.leavePageLocators.mainLeave)).click({force:true})
        // console.log("Verification of usernameComponent:", mainLeave)
        await this.page.waitForSelector(this.leavePageLocators.mainLeave);
        await this.page.locator(this.leavePageLocators.mainLeave).isVisible();
        await this.page.locator(this.leavePageLocators.mainLeave).click({force:true});

    }
    async clickApplyBtn(){
        await this.page.waitForSelector(this.leavePageLocators.apply);
        await this.page.locator(this.leavePageLocators.apply).isVisible();
        await this.page.locator(this.leavePageLocators.apply).click({force:true});
        
    }


}
