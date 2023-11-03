// ***************** Importing Libraries ************************//
// ***************** Auther Name: Kasthuri Kandavelu ************//

import { Page, expect, Keyboard } from "@playwright/test";
import { LeavePageLocators } from "../common/Locators/leavePageLocators"
import * as testData from "../testData/json/testData.json"
import * as dotenv from "dotenv";
import {generalMethods} from "../common/generalMethods"

// ************* Leave Page class consist of all methods for intracting with Leave page **************//

export class LeavePage {
    readonly page: Page;
    private readonly leavePageLocators: LeavePageLocators;
    readonly generalMethods:generalMethods;

    // Creating object for page and Leave locators class to access All Locators in leave Page//

    constructor(page: Page) {
        this.page = page;
        this.leavePageLocators = new LeavePageLocators(page);
        this.generalMethods = new generalMethods();
    }

    // **************    Methods for Leave Module    ******************** //
    async clickMainLeave() {
        await this.page.waitForSelector(this.leavePageLocators.mainLeave);
        await this.page.locator(this.leavePageLocators.mainLeave).click();

    }


    async selectDropDownElements(clickDropDownLocator: string, dropdownLocator: string, dropDownValue: string) {
        try {
            await this.page.locator(clickDropDownLocator).click();
            await this.page.waitForTimeout(1000);
            const dropdownOptions = await this.page.$$(dropdownLocator);
            console.log(dropdownOptions);

            for (const dropdownoption of dropdownOptions) {

                if (await dropdownoption.isVisible() && await dropdownoption.isEnabled()) {
                    const dropdowntext = await dropdownoption.textContent();
                    console.log(dropdowntext);

                    if (dropdowntext === dropDownValue) {
                        await dropdownoption.click();
                        console.log(`Selected option: ${dropDownValue}`);
                        return;
                    }
                }
            }

            console.error(`Option "${dropDownValue}" was not found or not interactable.`);
        } catch (error) {
            console.error('Error selecting dropdown option:', error);

        }
    }

    async performance() {

        await this.selectDropDownElements(this.leavePageLocators.jobTitle, this.leavePageLocators.jobTitleDropdown, "Chief Executive Officer")

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
    async mondayFullDay() {
        await this.selectDropDownElements(this.leavePageLocators.mondayDropDown, this.leavePageLocators.FullDay, "Full Day");
    }

    async tuesdayFullDay() {
        await this.selectDropDownElements(this.leavePageLocators.tuesdayDropDown, this.leavePageLocators.FullDay, "Full Day");
    }

    async wednesdayFullDay() {
        await this.selectDropDownElements(this.leavePageLocators.wednesdayDropDown, this.leavePageLocators.FullDay, "Full Day");
    }
    async thursdayFullDay() {
        await this.selectDropDownElements(this.leavePageLocators.thursdayDropDown, this.leavePageLocators.FullDay, "Full Day");
    }
    async fridayFullDay() {
        await this.selectDropDownElements(this.leavePageLocators.fridayDropDown, this.leavePageLocators.FullDay, "Full Day");
    }
    async saturdayHalfDay() {
        await this.selectDropDownElements(this.leavePageLocators.saturdayDropDown, this.leavePageLocators.FullDay, "Non-working Day");
    }
    async sundayNonWorking() {
        await this.selectDropDownElements(this.leavePageLocators.sundayDropDown, this.leavePageLocators.FullDay, "Non-working Day");
    }
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

    async generateLeaveEntitilementAndReport() {
        await this.page.locator(this.leavePageLocators.leaveReport).isVisible();
        await this.page.locator(this.leavePageLocators.leaveReport).click({ force: true });
        await this.page.locator(this.leavePageLocators.LeaveEntitilementAndRepor).isVisible();
        await this.page.locator(this.leavePageLocators.LeaveEntitilementAndRepor).click({ force: true });
        await this.page.locator(this.leavePageLocators.leaveType).isVisible();
        await this.page.locator(this.leavePageLocators.leaveType).click({ force: true })
        await this.page.locator(this.leavePageLocators.maternityLeave).isVisible();
        await this.page.locator(this.leavePageLocators.maternityLeave).click({ force: true });
        await this.page.locator(this.leavePageLocators.reportLeavePeriod).isVisible();
        await this.page.locator(this.leavePageLocators.reportLeavePeriod).click({ force: true })
        await this.page.locator(this.leavePageLocators.leavedays).isVisible();
        await this.page.locator(this.leavePageLocators.leavedays).click({ force: true });
        await this.page.locator(this.leavePageLocators.GenerateReport).click({ force: true });
    }

    async myLeaveEntitilementAndReport() {
        await this.page.locator(this.leavePageLocators.leaveReport).isVisible();
        await this.page.locator(this.leavePageLocators.leaveReport).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeaveEntitilementAndReport).isVisible();

    }
    async performMyLeaveEntitilementAndReport() {
        await this.page.locator(this.leavePageLocators.leaveReport).isVisible();
        await this.page.locator(this.leavePageLocators.leaveReport).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeaveEntitilementAndReport).isVisible();
        await this.page.locator(this.leavePageLocators.myLeaveEntitilementAndReport).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeavePeriod).isVisible();
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.leavePageLocators.myLeavePeriod).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeavePeriodValue).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeaveGenerate).click({ force: true });

    }
    async myLeaveEntitilementAndReportListComponent() {
        await this.page.locator(this.leavePageLocators.myleave).click({ force: true });
        await this.page.locator(this.leavePageLocators.leaveReport).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeaveEntitilementAndReport).isVisible();
        await this.page.locator(this.leavePageLocators.myLeaveEntitilementAndReport).click({ force: true });
        await this.page.locator(this.leavePageLocators.leavePeriod).isVisible();
        await this.page.locator(this.leavePageLocators.generate).isVisible();

    }
    async fullScreenReportListComponent() {
        await this.page.locator(this.leavePageLocators.leaveReport).isVisible();
        await this.page.locator(this.leavePageLocators.leaveReport).click({ force: true });
        await this.page.locator(this.leavePageLocators.myLeaveEntitilementAndReport).isVisible();
        await this.page.locator(this.leavePageLocators.myLeaveEntitilementAndReport).click();
        await this.page.locator(this.leavePageLocators.fullScreenReport).click();
        // await this.page.locator(this.leavePageLocators.minfullScreen).isVisible();
        // await this.page.locator(this.leavePageLocators.minfullScreen).click();
        const keyboard: Keyboard = this.page.keyboard;
        await keyboard.press('Escape');

    }

    async leavePeriodComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.leavePeriodComponent).isVisible();
    }

    async leavePeriodResetComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.leavePeriodComponent).isVisible();
        await this.page.locator(this.leavePageLocators.leavePeriodComponent).click({ force: true });
        await this.page.locator(this.leavePageLocators.startMonth).click()
        await this.page.locator(this.leavePageLocators.selectstartMonth).click();
        await this.page.locator(this.leavePageLocators.startDate).click()
        await this.page.locator(this.leavePageLocators.startDateValue).click();
        await this.page.locator(this.leavePageLocators.leavePeriodReset).click();
    }

    async leavePeriodSaveComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.leavePeriodComponent).isVisible();
        await this.page.locator(this.leavePageLocators.leavePeriodComponent).click({ force: true });
        await this.page.locator(this.leavePageLocators.startMonth).click()
        await this.page.locator(this.leavePageLocators.selectstartMonth).click();
        await this.page.locator(this.leavePageLocators.startDate).click()
        await this.page.locator(this.leavePageLocators.startDateValue).click();
        await this.page.locator(this.leavePageLocators.leavePeriodSave).click

    }
    async leaveTypeComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.leaveTypeComponent).isVisible();
    }
    async addLeaveTypeComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.leaveTypeComponent).isVisible();
        await this.page.locator(this.leavePageLocators.leaveTypeComponent).click();
        await this.page.locator(this.leavePageLocators.addLeaveType).click({ force: true });

    }

    async multiSelectFunctionality() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.leaveTypeComponent).isVisible();
        await this.page.locator(this.leavePageLocators.leaveTypeComponent).click();
        await this.page.locator(this.leavePageLocators.leaveListName).click({ force: true })


    }
    async singleSelectFunctionality() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.leaveTypeComponent).isVisible();
        await this.page.locator(this.leavePageLocators.leaveTypeComponent).click();
        await this.page.locator(this.leavePageLocators.singleLeaveName).click({ force: true })
        await this.page.waitForTimeout(2000);
    }
    async deleteLeavePageList() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.leaveTypeComponent).isVisible();
        await this.page.locator(this.leavePageLocators.leaveTypeComponent).click();
        await this.page.locator(this.leavePageLocators.deleteLeaveName).isVisible();
        await this.page.waitForTimeout(2000);
    }
    async editLeavePage() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.leaveTypeComponent).isVisible();
        await this.page.locator(this.leavePageLocators.leaveTypeComponent).click();
        await this.page.locator(this.leavePageLocators.editleave).click();
        await this.page.locator(this.leavePageLocators.editLeaveType).click();
        await this.page.locator(this.leavePageLocators.saveEditLeave).click();
        await this.page.waitForTimeout(2000);
    }

    async workWeekComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.workWeekComponent).isVisible();
    }
    async workWeekMondaySort() {

        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.workWeekComponent).isVisible();
        await this.page.locator(this.leavePageLocators.workWeekComponent).click();
        await this.mondayFullDay()
        await this.page.locator(this.leavePageLocators.Save).click({ force: true });
    }
    async workWeekTuesdaySort() {
        await this.page.waitForTimeout(2000);
        await this.tuesdayFullDay();
        await this.page.locator(this.leavePageLocators.Save).click({ force: true });
    }
    async workWeekWednesdaySort() {
        await this.page.waitForTimeout(2000);
        await this.wednesdayFullDay();
        await this.page.locator(this.leavePageLocators.Save).click({ force: true });
    }
    async workWeekThursdaySort() {
        await this.page.waitForTimeout(2000);
        await this.thursdayFullDay();
        await this.page.locator(this.leavePageLocators.Save).click({ force: true });
    }

    async workWeekFridaySort() {
        await this.page.waitForTimeout(2000);
        await this.fridayFullDay();
        await this.page.locator(this.leavePageLocators.Save).click({ force: true });
    }
    async workWeekSaturdaySort() {
        await this.saturdayHalfDay();
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.leavePageLocators.Save).click({ force: true });
    }
    async workWeekSundaySort() {
        await this.sundayNonWorking();
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.leavePageLocators.Save).click({ force: true });
    }
    async verifyWorkWeekSave() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.workWeekComponent).isVisible();
        await this.page.locator(this.leavePageLocators.workWeekComponent).click();
        await this.page.locator(this.leavePageLocators.Save).isVisible();
    }
    async holidaysComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
    }
    async holidaysReset() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
        await this.page.locator(this.leavePageLocators.holidayComponent).click();
        await this.page.locator(this.leavePageLocators.holidayFromDate).fill(testData.testData.holidayFromDate);
        await this.page.locator(this.leavePageLocators.holidayToDate).fill(testData.testData.holidayToDate);
        await this.page.locator(this.leavePageLocators.holidayReset).click()
    }

    async holidaysSearch() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
        await this.page.locator(this.leavePageLocators.holidayComponent).click();
        await this.page.locator(this.leavePageLocators.holidayFromDate).fill("2023-02-14");
        await this.page.locator(this.leavePageLocators.holidayToDate).fill("2023-04-21");
        await this.page.locator(this.leavePageLocators.holidaySearch).click()
    }

    async addHolidays() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
        await this.page.locator(this.leavePageLocators.holidayComponent).click();
        await this.page.locator(this.leavePageLocators.addHolidays).click();
        await this.page.locator(this.leavePageLocators.holidaysname).click();
        await this.page.locator(this.leavePageLocators.holidayDate).click();
        await this.selectDropDownElements(this.leavePageLocators.holidayDropDown, this.leavePageLocators.fullHoliday, "Full Day");
        await this.page.locator(this.leavePageLocators.saveHoliday).click();

    }
    async addHolidaysComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
        await this.page.locator(this.leavePageLocators.holidayComponent).click({ force: true });
        await this.page.locator(this.leavePageLocators.addHoliday).isVisible();
        await this.page.locator(this.leavePageLocators.addHoliday).click({ force: true });
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.leavePageLocators.holidayName).isVisible();
        await this.page.locator(this.leavePageLocators.holidayName).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayName).fill("Pongal");
        await this.page.locator(this.leavePageLocators.holidayDate).isVisible();
        await this.page.locator(this.leavePageLocators.holidayDate).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayDate).type("2024-01-16");
        await this.page.locator(this.leavePageLocators.leaveDuration).click()
        await this.page.locator(this.leavePageLocators.fulldayHoliday).click()
        await this.page.locator(this.leavePageLocators.saveHoliday).click();

    }
    async cancelHolidaysComponent() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
        await this.page.locator(this.leavePageLocators.holidayComponent).click({ force: true });
        await this.page.locator(this.leavePageLocators.addHoliday).isVisible();
        await this.page.locator(this.leavePageLocators.addHoliday).click({ force: true });
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.leavePageLocators.holidayName).isVisible();
        await this.page.locator(this.leavePageLocators.holidayName).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayName).fill("Pongal");
        await this.page.locator(this.leavePageLocators.holidayDate).isVisible();
        await this.page.locator(this.leavePageLocators.holidayDate).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayDate).type("2024-01-16");
        await this.page.locator(this.leavePageLocators.leaveDuration).click()
        await this.page.locator(this.leavePageLocators.fulldayHoliday).click()
        await this.page.locator(this.leavePageLocators.cancelHoliday).click();

    }

    async saveHolidays() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
        await this.page.locator(this.leavePageLocators.holidayComponent).click({ force: true });
        await this.page.locator(this.leavePageLocators.addHoliday).isVisible();
        await this.page.locator(this.leavePageLocators.addHoliday).click({ force: true });
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.leavePageLocators.holidayName).isVisible();
        await this.page.locator(this.leavePageLocators.holidayName).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayName).fill("Pongal");
        await this.page.locator(this.leavePageLocators.holidayDate).isVisible();
        await this.page.locator(this.leavePageLocators.holidayDate).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayDate).type("2024-01-16");
        await this.page.locator(this.leavePageLocators.leaveDuration).click()
        await this.page.locator(this.leavePageLocators.fulldayHoliday).click()
        await this.page.locator(this.leavePageLocators.saveHoliday).click();

    }

    async multipleHolidaysSelection() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
        await this.page.locator(this.leavePageLocators.holidayComponent).click({ force: true });
        await this.page.locator(this.leavePageLocators.multipleHolidays).isVisible();
        await this.page.locator(this.leavePageLocators.multipleHolidays).click({ force: true });
    }
    async individualHolidaySelection() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
        await this.page.locator(this.leavePageLocators.holidayComponent).click({ force: true });
        await this.page.locator(this.leavePageLocators.singleHoliday).isVisible();
        await this.page.locator(this.leavePageLocators.singleHoliday).click({ force: true });
        await this.page.waitForTimeout(3000);
    }
    async deleteHoliday() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
        await this.page.locator(this.leavePageLocators.holidayComponent).click({ force: true });
        await this.page.locator(this.leavePageLocators.deleteHoliday).isVisible();
    }
    async editHoliday() {
        await this.page.locator(this.leavePageLocators.config).isVisible();
        await this.page.locator(this.leavePageLocators.config).click({ force: true });
        await this.page.locator(this.leavePageLocators.holidayComponent).isVisible();
        await this.page.locator(this.leavePageLocators.holidayComponent).click({ force: true });
        await this.page.locator(this.leavePageLocators.editHoliday).isVisible();

    }

    async leaveListComponent() {
        await this.page.locator(this.leavePageLocators.leaveList).isVisible();
        await this.page.locator(this.leavePageLocators.leaveList).click();

    }
    async leaveListResetFunctionality() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.leaveListReset).isVisible();
            await this.page.locator(this.leavePageLocators.leaveListReset).click();
            await expect(this.page.url()).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList");
            console.log('leaveListResetFunctionality in leave list was successful.');
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }


    }
    async leaveListSearchFunctionality() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.leaveListSearch).isVisible();
            await this.page.locator(this.leavePageLocators.leaveListSearch).click();
            console.log('leaveListSearchFunctionality in leave list was successful.');
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }
    }

    async totalLeaveListRecord() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.leaveListRecord).isVisible();
            console.log('TotalLeaveListRecord in leave list was successful.');
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }


    }
    async multiSelectionLeaveList() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.multiSelectionLeaveList).isVisible();
            await this.page.locator(this.leavePageLocators.multiSelectionLeaveList).click();
            console.log('multiSelectionLeaveList in leave list was successful.');
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }
    }
    async singleSelectionLeaveList() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.singleSelectionLeaveList).isVisible();
            await this.page.locator(this.leavePageLocators.singleSelectionLeaveList).click();
            console.log('Single selection in leave list was successful.');
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }
    }
    async leaveListApprove() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.leaveListApprove).isVisible();
            await this.page.locator(this.leavePageLocators.leaveListApprove).click();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }
    }









    async leaveListReject() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.leaveListReject).isVisible();
            await this.page.locator(this.leavePageLocators.leaveListReject).click();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }
    }
    async leaveListAddComments() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.waitForTimeout(3000)
            await this.page.locator(this.leavePageLocators.addComments).isVisible();
            await this.page.locator(this.leavePageLocators.addComments).click();
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).isVisible();
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).type("Leave request approved");
            await this.page.locator(this.leavePageLocators.commentsSave).click();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }
    async leaveListCommentsComponent() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.addComments).isVisible();
            await this.page.locator(this.leavePageLocators.addComments).click();
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).isVisible();
            await this.page.locator(this.leavePageLocators.commentClose).click();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }
    }
    async leaveListCommentsCancel() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.waitForTimeout(3000)
            await this.page.locator(this.leavePageLocators.addComments).isVisible();
            await this.page.locator(this.leavePageLocators.addComments).click();
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).isVisible();
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).fill("Leave request approved");
            await this.page.locator(this.leavePageLocators.commentsCancel).click();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }


    }
    async leaveListCommentsSave() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.addComments).isVisible();
            await this.page.locator(this.leavePageLocators.addComments).click();
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).isVisible();
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).type("Leave request approved");
            await this.page.locator(this.leavePageLocators.commentsSave).click();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }

    async leaveListCommentsClose() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.addComments).isVisible();
            await this.page.locator(this.leavePageLocators.addComments).click();
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).isVisible();
            await this.page.locator(this.leavePageLocators.commentClose).click();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }
    }
    async viewLeaveDetails() {

        try {

            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).isVisible();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }

    async viewLeaveRequestDetailsComponents() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).isVisible();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).click();
            await this.page.locator(this.leavePageLocators.leaveRequestComponents).isVisible();
            const listcomponents = await this.page.locator(this.leavePageLocators.leaveRequestComponents);
            console.log(listcomponents.textContent());
            console.log("View Leave Request component verification success")


        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }

    async LeaveRequestRecordComponents() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).isVisible();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).click();
            await this.page.locator(this.leavePageLocators.leaveRequestRecords).isVisible();
            const leaveRecords = await this.page.locator(this.leavePageLocators.leaveRequestRecords).textContent();
            console.log(leaveRecords);



        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }
    }
    async viewleaveListApprove() {
        try {
            // await this.page.pause();
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).isVisible();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).click();
            await this.page.waitForTimeout(3000)
            await this.page.locator(this.leavePageLocators.leaveListApprove).isVisible();
            await this.page.locator(this.leavePageLocators.leaveListApprove).click();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }
    }

    async viewleaveListReject() {
        try {

            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).isVisible();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).click();
            await this.page.waitForTimeout(3000)
            await this.page.locator(this.leavePageLocators.leaveListReject).isVisible();
            await this.page.locator(this.leavePageLocators.leaveListReject).click();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }
    }
    async viewleaveListAddComments() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.waitForTimeout(3000)
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).isVisible();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).click();
            await this.page.locator(this.leavePageLocators.comments).isVisible();
            await this.page.locator(this.leavePageLocators.comments).click();
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).isVisible()
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).type("Leave request approved");
            await this.page.locator(this.leavePageLocators.commentsSave).click();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }


    async viewleaveListCommentsCancel() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.waitForTimeout(3000)
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).isVisible();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).click();
            // await this.page.locator(this.leavePageLocators.addComments).isVisible();
            // await this.page.locator(this.leavePageLocators.addComments).click();
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).isVisible();
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).type("Leave request approved");
            await this.page.locator(this.leavePageLocators.commentsCancel).click();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }


    }
    async viewLeaveListCancel() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.waitForTimeout(3000)
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).isVisible();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).click();
            await this.page.waitForTimeout(3000)
            await this.page.locator(this.leavePageLocators.viewLeaveListComments).click();
            await this.page.locator(this.leavePageLocators.viewLeaveListComments).click();
            await this.page.waitForTimeout(3000)
            await this.page.locator(this.leavePageLocators.viewLeaveListCancel).click({ force: true });
            await this.page.waitForTimeout(3000)
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }
    async backComponentVerification() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.waitForTimeout(3000)
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).isVisible();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).click();
            await this.page.waitForTimeout(3000)
            await this.page.locator(this.leavePageLocators.viewLeaveListComments).click();
            await this.page.locator(this.leavePageLocators.viewListBackComponent).click();
            await this.page.waitForTimeout(3000)
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }
    async addCommentsVerification() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).isVisible();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).click();
            await this.page.locator(this.leavePageLocators.viewLeaveListComments).click();
            await this.page.waitForTimeout(3000)
            await this.page.locator(this.leavePageLocators.commentsTextBox).click({ force: true });
            await this.page.locator(this.leavePageLocators.commentsTextBox).type("Leave approved");
            await this.page.locator(this.leavePageLocators.commentsSave).click()

        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }
    async performPIMFunctionality() {
        try {

            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.viewPIMPage).isVisible()

        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }
    async navigationToPimPage() {
        try {
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.viewPIMPage).isVisible();
            await this.page.locator(this.leavePageLocators.viewPIMPage).click();
            await expect(this.page.url()).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/29");

        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }
    async performCancelLeave() {
        try {
            await this.page.locator(this.leavePageLocators.mainLeave).isVisible();
            await this.page.locator(this.leavePageLocators.mainLeave).click();
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.cancelLeave).isVisible();
            await this.page.locator(this.leavePageLocators.cancelLeave).click();

        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }
    async handleToastMessage() {

        const toastSelector = `//div[@class='oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text']`; // Change this to the actual selector for the toast message
        await this.page.waitForSelector(toastSelector);
        const toastMessage = await this.page.textContent(toastSelector);
        return toastMessage;
    }
    async successToastMessage() {
        try {
            await this.page.locator(this.leavePageLocators.mainLeave).isVisible();
            await this.page.locator(this.leavePageLocators.mainLeave).click();
            await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.dotDropDown).isVisible();
            await this.page.locator(this.leavePageLocators.dotDropDown).click();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).isVisible();
            await this.page.locator(this.leavePageLocators.viewLeaveDetails).click();
            await this.page.locator(this.leavePageLocators.comments).isVisible();
            await this.page.locator(this.leavePageLocators.comments).click();
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).isVisible()
            await this.page.locator(this.leavePageLocators.addCommentsTextBox).type("Leave request approved");
            await this.page.locator(this.leavePageLocators.commentsSave).click();
            await this.handleToastMessage();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }
    async seeAssignLeave() {
        try {
            await this.page.locator(this.leavePageLocators.mainLeave).isVisible();
            await this.page.locator(this.leavePageLocators.mainLeave).click();
            // await this.page.locator(this.leavePageLocators.leaveList).isVisible();
            // await this.page.locator(this.leavePageLocators.leaveList).click();
            await this.page.locator(this.leavePageLocators.assignLeave).isVisible();
            const assignLeave = await this.page.locator(this.leavePageLocators.assignLeave);
            console.log(assignLeave.textContent());


        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }


    async performAssignLeave() {
        try {
            await this.page.locator(this.leavePageLocators.mainLeave).isVisible();
            await this.page.locator(this.leavePageLocators.mainLeave).click();
            await this.page.locator(this.leavePageLocators.assignLeave).isVisible();
            await this.page.locator(this.leavePageLocators.assignLeave).click();
        }
        catch (error) {
            await this.page.locator(this.leavePageLocators.leaveListNoRecord).isVisible();
            console.log('No record found');
        }

    }





    // Call the function and handle the toast message


    // async getToastMessage() {
    //     const getToastText = await this.page.locator(this.recruitmentLocators.candidates.candidateToastMsg).textContent();
    //     console.log(`GetToastMessage Method` , getToastText);
    //     return getToastText;
    // }

}


// ********************** End of the Code **********************************//


