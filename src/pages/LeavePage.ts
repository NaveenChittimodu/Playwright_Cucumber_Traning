import { Page, expect } from "@playwright/test";
import {LeavePageLocators} from "../common/Locators/leavePageLocators"


export class LeavePage {
    readonly page: Page;
    private readonly leavePageLocators: LeavePageLocators;

    constructor(page: Page) {
        this.page = page;
        this.leavePageLocators = new LeavePageLocators(page);
    }
    async clickMainLeave() {
        await this.page.waitForSelector(this.leavePageLocators.mainLeave);
        await this.page.locator(this.leavePageLocators.mainLeave).isVisible();
        await this.page.locator(this.leavePageLocators.mainLeave).click({force:true});

    }
    async leavePageComponent(){
        await this.page.waitForSelector(this.leavePageLocators.apply);
        await this.page.locator(this.leavePageLocators.apply).isVisible();
        await this.page.locator(this.leavePageLocators.apply).click({force:true});

        await this.page.locator(this.leavePageLocators.applyLeave).isVisible();
        await this.page.locator(this.leavePageLocators.leaveBalance).isVisible();
        await this.page.locator(this.leavePageLocators.toDate).isVisible();
        await this.page.locator(this.leavePageLocators.leaveBalance).isVisible();
        await this.page.locator(this.leavePageLocators.applyBtn).isVisible()
        
    }
    async myListComponent(){
        await this.page.locator(this.leavePageLocators.myleave).isVisible();
        await this.page.locator(this.leavePageLocators.myleave).click({force:true});
        await this.page.locator(this.leavePageLocators.myLeaveList).isVisible();
        await this.page.locator(this.leavePageLocators.myLeaveFromDate).isVisible();
        await this.page.locator(this.leavePageLocators.myLeaveToDate).isVisible();
        await this.page.locator(this.leavePageLocators.recordFound).isVisible();
        await this.page.locator(this.leavePageLocators.showLeaveStatus).isVisible();
        await this.page.locator(this.leavePageLocators.leave_Type).isVisible();

    }
    async verifyReset(){
        await this.page.locator(this.leavePageLocators.myLeaveReset).isVisible();
        await this.page.locator(this.leavePageLocators.myLeaveReset).isEnabled()

    }
    async verifySearch(){
        await this.page.locator(this.leavePageLocators.myLeaveSearch).isVisible();
    }
    async addEntitleComponent(){
        await this.page.waitForSelector(this.leavePageLocators.entitlements);
        await this.page.locator(this.leavePageLocators.entitlements).isVisible();
        await this.page.locator(this.leavePageLocators.entitlements).click({force:true});
        await this.page.locator(this.leavePageLocators.entitlements).click({force:true});
        await this.page.waitForSelector(this.leavePageLocators.entitlements);
        await this.page.locator(this.leavePageLocators.entitlements).isVisible();
        await this.page.locator(this.leavePageLocators.entitlements).click({force:true});
        await this.page.waitForSelector(this.leavePageLocators.editEntitle);
        await this.page.locator(this.leavePageLocators.editEntitle).isVisible();
        await this.page.locator(this.leavePageLocators.editEntitle).click({force:true});
        await this.page.waitForTimeout(3000)

    }

    async entitlePageCancel(){
        await this.page.locator(this.leavePageLocators.entitlementCancel).isVisible();
        await expect(this.page.url()).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/leave/addLeaveEntitlement");
        await this.page.locator(this.leavePageLocators.entitlementCancel).click()
        await expect(this.page.url()).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveEntitlements");
    }
    async entitilementSave(){
        await this.page.locator(this.leavePageLocators.entitlementSave).isVisible();
        await this.page.locator(this.leavePageLocators.entitlementSave).click()
    }
    async employeeEntitle(){
        await this.page.waitForSelector(this.leavePageLocators.entitlements);
        await this.page.locator(this.leavePageLocators.entitlements).isVisible();
        await this.page.waitForSelector(this.leavePageLocators.employeeEntitle);
        await this.page.locator(this.leavePageLocators.employeeEntitle).isVisible();


    }


}






