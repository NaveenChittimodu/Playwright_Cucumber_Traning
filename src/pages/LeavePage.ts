import { Page, expect } from "@playwright/test";
import { LeavePageLocators } from "../common/Locators/leavePageLocators"


export class LeavePage {
    readonly page: Page;
    private readonly leavePageLocators: LeavePageLocators;

    constructor(page: Page) {
        this.page = page;
        this.leavePageLocators = new LeavePageLocators(page);
    }
    async clickMainLeave() {
        await this.page.waitForSelector(this.leavePageLocators.mainLeave);
        // await this.page.locator(this.leavePageLocators.mainLeave).isVisible();
        await this.page.locator(this.leavePageLocators.mainLeave).click();

    }


    async performance(){

    }
    async leavePageComponent() {
        await this.page.waitForSelector(this.leavePageLocators.apply);
        await this.page.locator(this.leavePageLocators.apply).isVisible();
        await this.page.locator(this.leavePageLocators.apply).click({ force: true });

        await this.page.locator(this.leavePageLocators.applyLeave).isVisible();
        await this.page.locator(this.leavePageLocators.leaveBalance).isVisible();
        await this.page.locator(this.leavePageLocators.toDate).isVisible();
        await this.page.locator(this.leavePageLocators.leaveBalance).isVisible();
        await this.page.locator(this.leavePageLocators.applyBtn).isVisible()

    }
    async myListComponent() {
        await this.page.locator(this.leavePageLocators.myleave).isVisible();
        await this.page.locator(this.leavePageLocators.myleave).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeaveList).isVisible();
        await this.page.locator(this.leavePageLocators.myLeaveFromDate).isVisible();
        await this.page.locator(this.leavePageLocators.myLeaveToDate).isVisible();
        await this.page.locator(this.leavePageLocators.recordFound).isVisible();
        await this.page.locator(this.leavePageLocators.showLeaveStatus).isVisible();
        await this.page.locator(this.leavePageLocators.leave_Type).isVisible();

    }
    async verifyReset() {
        await this.page.locator(this.leavePageLocators.myleave).isVisible();
        await this.page.locator(this.leavePageLocators.myleave).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeaveReset).isVisible();
        await this.page.locator(this.leavePageLocators.myLeaveReset).isEnabled()

    }
    async verifySearch() {
        await this.page.locator(this.leavePageLocators.myLeaveSearch).isVisible();
    }
    async addEntitleComponent() {
        await this.page.waitForSelector(this.leavePageLocators.entitlements);
        await this.page.locator(this.leavePageLocators.entitlements).isVisible();
        await this.page.locator(this.leavePageLocators.entitlements).click({ force: true });
        await this.page.waitForSelector(this.leavePageLocators.editEntitle);
        await this.page.locator(this.leavePageLocators.editEntitle).isVisible();
        await this.page.locator(this.leavePageLocators.editEntitle).click({ force: true });
        await this.page.waitForTimeout(3000)

    }

    async entitlePageCancel() {
        await this.page.locator(this.leavePageLocators.entitlementCancel).isVisible();
        await expect(this.page.url()).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/leave/addLeaveEntitlement");
        await this.page.locator(this.leavePageLocators.entitlementCancel).click()
        await expect(this.page.url()).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveEntitlements");
    }
    async entitilementSave() {
        await this.page.locator(this.leavePageLocators.entitlements).click({ force: true });
        await this.page.locator(this.leavePageLocators.editEntitle).click({ force: true });
        await this.page.locator(this.leavePageLocators.entitlementSave).isVisible();
        await this.page.locator(this.leavePageLocators.entitlementSave).click()
    }
    async employeeEntitle() {
        await this.page.locator(this.leavePageLocators.entitlements).click({ force: true });
        await this.page.waitForSelector(this.leavePageLocators.employeeEntitle);
        await this.page.locator(this.leavePageLocators.employeeEntitle).isVisible();
    }

    async employeeEntitlementSerch() {
        await this.page.locator(this.leavePageLocators.employeeEntitle).isVisible();
        await this.page.locator(this.leavePageLocators.employeeEntitle).click({ force: true })
        await this.page.locator(this.leavePageLocators.employeeEntitleSearch).isVisible();
        await this.page.locator(this.leavePageLocators.employeeEntitleSearch).isVisible();
    }
    async myLeaveEntitlement() {
        await this.page.locator(this.leavePageLocators.entitlements).click({ force: true });
        await this.page.locator(this.leavePageLocators.myEntitlements).isVisible();
        await this.page.locator(this.leavePageLocators.myEntitlements).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeaveEntitlement).isVisible();
    }

    async myLeaveEntitlementSearch() {
        await this.page.locator(this.leavePageLocators.entitlements).click({ force: true });
        await this.page.locator(this.leavePageLocators.myEntitlements).isVisible();
        await this.page.locator(this.leavePageLocators.myEntitlements).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeaveEntitlement).isVisible();
        await this.page.locator(this.leavePageLocators.myLeaveEntitlementSerch).isVisible();

    }
    async myLeaveEntitlementComponents() {
        await this.page.locator(this.leavePageLocators.entitlements).click({ force: true });
        await this.page.locator(this.leavePageLocators.myEntitlements).isVisible();
        await this.page.locator(this.leavePageLocators.myEntitlements).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeaveEntitlement).isVisible();
        await this.page.locator(this.leavePageLocators.myLeaveEntitlementSerch).isVisible();

    }

    /////////////////////////////////////
    async addNewEntitlement() {
        await this.page.locator(this.leavePageLocators.entitlements).click({ force: true });
        await this.page.locator(this.leavePageLocators.editEntitle).isVisible();
        await this.page.locator(this.leavePageLocators.editEntitle).click({ force: true });
        await this.page.locator(this.leavePageLocators.employeeName).isVisible();
        await this.page.locator(this.leavePageLocators.employeeName).click({ force: true });
        await this.page.locator(this.leavePageLocators.employeeName).type('e');
        await this.page.waitForTimeout(5000)
        await this.page.locator(this.leavePageLocators.employeenameList).click();
        
        await this.page.locator(this.leavePageLocators.leaveTypeEntitlement).click();
        await this.page.locator(this.leavePageLocators.selectLeaveType).click();
        await this.page.locator(this.leavePageLocators.employeenameNumber).click();
        await this.page.locator(this.leavePageLocators.employeenameNumber).fill('2');
        await this.page.locator(this.leavePageLocators.entitlementSave).click();
        await this.page.waitForTimeout(3000);
        
    }


    

    async verifyLeaveEntitilementAndReport() {
        await this.page.locator(this.leavePageLocators.leaveReport).isVisible();
        await this.page.locator(this.leavePageLocators.leaveReport).click({ force: true });
        await this.page.locator(this.leavePageLocators.LeaveEntitilementAndRepor).isVisible();

    }
    async myLeaveEntitilementAndReport() {
        await this.page.locator(this.leavePageLocators.leaveReport).isVisible();
        await this.page.locator(this.leavePageLocators.leaveReport).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeaveEntitilementAndReport).isVisible();

    }
    async myLeaveEntitilementAndReportListComponent() {
        await this.page.locator(this.leavePageLocators.myleave).click({ force: true });
        await this.page.locator(this.leavePageLocators.leaveReport).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeaveEntitilementAndReport).isVisible();
        await this.page.locator(this.leavePageLocators.myLeaveEntitilementAndReport).click({ force: true });
        await this.page.locator(this.leavePageLocators.leavePeriod).isVisible();
        await this.page.locator(this.leavePageLocators.generate).isVisible();

    }
    // config

    async leavePeriodComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.leavePeriodComponent).isVisible();
    }

    async leaveTypeComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.leaveTypeComponent).isVisible();
    }

    async workWeekComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.workWeekComponent).isVisible();
    }

    async holidaysComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
    }
    async addHolidaysComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
        await this.page.locator(this.leavePageLocators.holidayComponent).click({ force: true });
        await this.page.locator(this.leavePageLocators.addHoliday).isVisible();

    }

    
    async leaveListComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
        await this.page.locator(this.leavePageLocators.holidayComponent).click({ force: true });
        await this.page.locator(this.leavePageLocators.addHoliday).isVisible();

    }
    // async totalLeaveList(){
    //     await this.page.locator(this.leavePageLocators.)
    // }



}


