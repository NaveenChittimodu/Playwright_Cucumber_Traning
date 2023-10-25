import { expect, Locator, Page } from "@playwright/test";
import { TimeLocators } from "../common/Locators/timeLocators";
import { MyInfoLocators } from "../common/Locators/myInfoLocators";
// import * as constants from "../common/constants.json"
import * as assertion from "../testData/json/assertion.json"
import { addAbortListener } from "events";

export class TimePage {
    readonly page: Page;
    readonly myInfoLocators: MyInfoLocators;
    readonly timeLocators: TimeLocators;

    constructor(page: Page) {
        this.page = page;
        this.myInfoLocators = new MyInfoLocators(page);
        this.timeLocators = new TimeLocators(page);
    }

    async navigateToTime() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.timeTab);
        await this.page.locator(this.timeLocators.timeSheet.timeTab).click();
        const text = await this.getTextFromElement(this.timeLocators.timeSheetDetails.timeSheetTitle1);
        expect(text).toBe("Timesheets");
        // await this.clickElement(this.myInfoLocators.personalDetails.myInfoTab);
    }

    async clickElement(locator: string) {

        try {
            await this.page.waitForSelector(locator);
            await expect(await this.page.locator(locator)).toBeVisible();
            await this.page.locator(locator).click({ force: true });
            console.log("Button has been successfully clicked.")
        }
        catch (error) {
            console.log("Button has been clicked, which should not have happened.")
        }

    }

    async getTextFromElement(locator: string): Promise<string> {
        try {
            await this.page.waitForSelector(locator);
            await this.page.locator(locator).isVisible();
            const element = await this.page.locator(locator).first();
            if (element) {
                return await element.textContent();
            } else {
                console.error(`Element not found with locator: ${locator}`);
                return '';
            }
        } catch (error) {
            console.error(`Error getting text from the element: ${error}`);
            return '';
        }
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

    async clearAndSendKeysToElements(xpath: string, values: (string | number)[]) {

        const elements = await this.page.locator(xpath).all();

        if (elements.length !== values.length) {
            throw new Error('Number of elements and values should match');
            console.log(`Element lenght`, elements.length);
            console.log(`Values lenght`, values.length);
        }

        for (let i = 0; i < values.length; i++) {
            await elements[i].clear();
            await elements[i].fill(values[i].toString());
        }
    }

    async clickElementAndVerifyToastNew(elementLocator: string, messageToVerify?: string) {
        await this.page.locator(elementLocator).click({ force: true });

        if (messageToVerify) {
            const toastText = await this.getToastMessageNew(elementLocator);
            console.log("clickElementAndVerifyToast Method", toastText);
            expect(toastText).toEqual(messageToVerify);
        }
    }

    async getToastMessageNew(toastLocator: string) {
        const getToastText = await this.page.locator(toastLocator).textContent();
        console.log("getToastMessage Method", getToastText);
        return getToastText;
    }

    async enterText(locator: Locator, text: string) {
        try {
            await this.page.waitForSelector(locator.toString());
            await this.page.locator(locator.toString()).isVisible();
            await this.page.locator(locator.toString()).clear();
            await this.page.fill(locator.toString(), text);
            console.log('Text has been successfully entered.');
        } catch (error) {
            console.error('Text entry failed as expected :', error);
        }
    }

    async timeSheetPeriod() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.timeSheet);
        await this.clickElement(this.timeLocators.timeSheet.timeSheet);
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.timeSheet.myTimeSheet);
        await this.clickElement(this.timeLocators.timeSheet.myTimeSheet);
        const timeSheetPeriod = await this.getTextFromElement(this.timeLocators.timeSheetDetails.timeSheetPeriodInput);
        console.log(timeSheetPeriod);
    }


    async timeSheetEditCancel() {
        await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetEdit);
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProject);
        await this.page.locator(this.timeLocators.timeSheetDetails.timeSheetProject).fill("c");
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
        await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
        await this.selectDropDownElements(this.timeLocators.timeSheetDetails.timeSheetActivity, this.timeLocators.timeSheetDetails.timeSheetActivityDropDown, "Bug Fixes");
        await this.page.waitForTimeout(3000);
        await this.clearAndSendKeysToElements(this.timeLocators.timeSheetDetails.timeSheetDays, [8, 8, 8, 8, 8, 8, 8]);
        await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetCancelBtn);
        await this.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg)
    }

    async timeSheetEditReset() {
        await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetEdit);
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProject);
        await this.page.locator(this.timeLocators.timeSheetDetails.timeSheetProject).fill("c");
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
        await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
        await this.selectDropDownElements(this.timeLocators.timeSheetDetails.timeSheetActivity, this.timeLocators.timeSheetDetails.timeSheetActivityDropDown, "Bug Fixes");
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetDays);
        // await this.clearAndSendKeysToElements(this.timeLocators.timeSheetDetails.timeSheetDays,[8, 8, 8, 8, 8, 8, 8]);
        await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetResetBtn);
    }

    async timeSheetEditSave() {
        await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetEdit);
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProject);
        await this.page.locator(this.timeLocators.timeSheetDetails.timeSheetProject).fill("c");
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
        await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
        await this.selectDropDownElements(this.timeLocators.timeSheetDetails.timeSheetActivity, this.timeLocators.timeSheetDetails.timeSheetActivityDropDown, "Bug Fixes");
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetDays);
        await this.clearAndSendKeysToElements(this.timeLocators.timeSheetDetails.timeSheetDays, [8, 8, 8, 8, 8, 8, 8]);
        await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetResetBtn);
    }

    async timeSheetEmployeeSearch() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.timeSheet);
        await this.clickElement(this.timeLocators.timeSheet.timeSheet);
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.timeSheet.employeeTimeSheet);
        await this.clickElement(this.timeLocators.timeSheet.employeeTimeSheet);
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetEmpNameSearch);
        await this.page.locator(this.timeLocators.timeSheetDetails.timeSheetEmpNameSearch).fill("a");
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetEmpOdis);
        await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetEmpOdis);
        await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetViewBtn);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.noTimeSheetFound);
        const noSheetFound = await this.getTextFromElement(this.timeLocators.timeSheetDetails.noTimeSheetFound);
        console.log(noSheetFound);
    }

    async attendanceMyRecords() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.attendance);
        await this.clickElement(this.timeLocators.timeSheet.attendance);
        await this.page.waitForSelector(this.timeLocators.timeSheet.myRecords);
        await this.clickElement(this.timeLocators.timeSheet.myRecords);
        await this.enterText(this.timeLocators.attendanceDetails.attendanceDate, assertion.assertion.todayDate);
        await this.clickElement(this.timeLocators.attendanceDetails.attendaceViewBtn);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.totalRecordText);
        const noSheetFound = await this.getTextFromElement(this.timeLocators.attendanceDetails.totalRecordText);
        console.log(noSheetFound);
        expect(noSheetFound).toBe(" (3) Records Found");

    }

    async attendancePunchInOut() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.attendance);
        await this.clickElement(this.timeLocators.timeSheet.attendance);
        await this.page.waitForSelector(this.timeLocators.timeSheet.punchInOut);
        await this.clickElement(this.timeLocators.timeSheet.punchInOut);
        await this.enterText(this.timeLocators.attendanceDetails.punchInDate, "2023-10-19");
        // await this.clickElement(this.timeLocators.attendanceDetails.punchInDate);
        await this.enterText(this.timeLocators.attendanceDetails.punchInTime, "07:23 PM");
        await this.clickElement(this.timeLocators.attendanceDetails.punchInTime);
        await this.enterText(this.timeLocators.attendanceDetails.punchInComments, "QA Engineer");
        await this.clickElement(this.timeLocators.attendanceDetails.punchInBtn);

        const punchOutTime = await this.getTextFromElement(this.timeLocators.attendanceDetails.punchedOutTime);
        console.log(punchOutTime);
        const punchOutDate = await this.getTextFromElement(this.timeLocators.attendanceDetails.punchedOutDate);
        console.log(punchOutDate);
        await this.clickElement(this.timeLocators.attendanceDetails.punchOutBtn);

    }

    async isCheckboxChecked(checkboxSelector: string) {
        // Wait for the checkbox element to be present
        await this.page.waitForSelector(checkboxSelector);
      
        // Get the checkbox element
        const checkbox = this.page.locator(checkboxSelector);
      
        // Check if the checkbox is checked
        const isChecked = await checkbox.isChecked();
      
        return isChecked;
      }

      async employeeAttendanceRecord() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.attendance);
        await this.clickElement(this.timeLocators.timeSheet.attendance);
        await this.page.waitForSelector(this.timeLocators.timeSheet.employeeRecords);
        await this.clickElement(this.timeLocators.timeSheet.employeeRecords);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.employeeName);
        await this.selectOptionFromAutocomplete(this.timeLocators.attendanceDetails.employeeName,assertion.assertion.employeeName,this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.employeeDate);
        await this.enterText(this.timeLocators.attendanceDetails.employeeDate, assertion.assertion.projectDateRangeTo);
        await this.clickElement(this.timeLocators.attendanceDetails.employeeViewBtn);
        const textTrue = await this.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(textTrue).toBe("No Records Found");
      }


    async attendanceConfiguration() {
        await this.page.waitForSelector(this.timeLocators.timeSheet.attendance);
        await this.clickElement(this.timeLocators.timeSheet.attendance);
        await this.page.waitForSelector(this.timeLocators.timeSheet.configuration);
        await this.clickElement(this.timeLocators.timeSheet.configuration);
        await this.clickElement(this.timeLocators.attendanceDetails.configurationInOut);
        const CheckedInOut = await this.isCheckboxChecked(this.timeLocators.attendanceDetails.configurationInOut);
        console.log(`The checkbox is checked :` + CheckedInOut);
        await this.clickElement(this.timeLocators.attendanceDetails.configurationRecord);
        const CheckedRecord = await this.isCheckboxChecked(this.timeLocators.attendanceDetails.configurationRecord);
        console.log(`The checkbox is checked :` + CheckedRecord);
        await this.clickElement(this.timeLocators.attendanceDetails.configurationSubOrdinate);
        const CheckedSubOrdinate = await this.isCheckboxChecked(this.timeLocators.attendanceDetails.configurationSubOrdinate);
        console.log(`The checkbox is checked :` + CheckedSubOrdinate);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.configurationSaveBtn);
        await this.clickElement(this.timeLocators.attendanceDetails.configurationSaveBtn);
        const textTrue = await this.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(textTrue).toBe("Successfully Saved");

        await this.page.waitForSelector(this.timeLocators.attendanceDetails.configurationInOut);
        await this.clickElement(this.timeLocators.attendanceDetails.configurationInOut);
        const isCheckedInOut = await this.isCheckboxChecked(this.timeLocators.attendanceDetails.configurationInOut);
        console.log(`The checkbox is checked :` + isCheckedInOut);
        await this.clickElement(this.timeLocators.attendanceDetails.configurationRecord);
        const isCheckedRecord = await this.isCheckboxChecked(this.timeLocators.attendanceDetails.configurationRecord);
        console.log(`The checkbox is checked :` + isCheckedRecord);
        await this.clickElement(this.timeLocators.attendanceDetails.configurationSubOrdinate);
        const isCheckedSubOrdinate = await this.isCheckboxChecked(this.timeLocators.attendanceDetails.configurationSubOrdinate);
        console.log(`The checkbox is checked :` + isCheckedSubOrdinate);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.configurationSaveBtn);
        await this.clickElement(this.timeLocators.attendanceDetails.configurationSaveBtn);
        const textFalse = await this.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(textFalse).toBe("Successfully Saved");
    }

    //   async interactWithTable(tableSelector:string, cellTextToFind:string) {
    //     // Wait for the table to load
    //     await this.page.waitForSelector(tableSelector);

    //     const table = await this.page.locator(tableSelector);

    //     // Get all rows in the table
    //     const rows = table.locator('div.oxd-table-body div.oxd-table-row');

    //     for (let i = 0; i < await rows.count(); i++) {
    //       const row = rows.nth(i);
    //       const cells = row.locator('div.oxd-table-cell');

    //       for (let j = 0; j < await cells.count(); j++) {
    //         const cellText = await cells.nth(j).innerText();

    //         if (cellText.includes(cellTextToFind)) {
    //           console.log(cellText);
    //           await this.page.waitForTimeout(2000);
    //           return; // Found the cell text, so exit the function
    //         }
    //       }
    //     }
    //   }

    async interactWithTable(tableSelector: string, headerSelector: string, allRows: string, tableCells: string, cellTextToFind: string) {
        try {
            // Wait for the table to load
            await this.page.waitForSelector(tableSelector);
            const table = await this.page.locator(tableSelector);
            await this.page.waitForTimeout(5000);
            const header = table.locator(headerSelector);
            console.log(await header.innerText());
            await this.page.waitForTimeout(2000);

            // Get all rows in the table
            const rows = table.locator(allRows);
            console.log(`Rows Count: `, await rows.count());

            for (let i = 0; i < await rows.count(); i++) {
                const row = rows.nth(i);
                const cells = row.locator(tableCells);

                for (let j = 0; j < await cells.count(); j++) {
                    const cellText = await cells.nth(j).innerText();

                    if (cellText.includes(cellTextToFind)) {
                        console.log(`The value "${cellTextToFind}" is found in the cell: ${cellText}`);
                        await this.page.waitForTimeout(2000);
                        const checkbox = row.locator('input[type="checkbox"]');
                        await checkbox.check({ force: true });
                        await this.page.waitForTimeout(2000);
                        return; // Found the cell text, so exit the function
                    }
                    //   else{
                    //     console.log(`The value "${cellTextToFind}" is not found in the cell: ${cellText}`);
                    //   }
                }
            }
            console.error(`The value "${cellTextToFind}" is not found in the cell: `);
        } catch (error) {
            console.error('An error occurred while interacting with the table:', error);
            //   this.page.screenshot({ path: 'error.png' });

        }
    }

    async interactWithTableEditField(tableSelector: string, headerSelector: string, allRows: string, tableCells: string, cellTextToFind: string) {
        try {
            // Wait for the table to load
            await this.page.waitForSelector(tableSelector);
            const table = await this.page.locator(tableSelector);
            await this.page.waitForTimeout(5000);
            const header = table.locator(headerSelector);
            console.log(await header.innerText());
            await this.page.waitForTimeout(2000);

            // Get all rows in the table
            const rows = table.locator(allRows);
            console.log(`Rows Count: `, await rows.count());

            for (let i = 0; i < await rows.count(); i++) {
                const row = rows.nth(i);
                const cells = row.locator(tableCells);

                for (let j = 0; j < await cells.count(); j++) {
                    const cellText = await cells.nth(j).innerText();

                    if (cellText.includes(cellTextToFind)) {
                        console.log(`The value "${cellTextToFind}" is found in the cell: ${cellText}`);
                        await this.page.waitForTimeout(2000);
                        const checkbox = row.locator('.oxd-icon-button .bi-pencil-fill');
                        await checkbox.click({ force: true });
                        await this.page.waitForTimeout(2000);
                        return; // Found the cell text, so exit the function
                    }
                    //   else{
                    //     console.log(`The value "${cellTextToFind}" is not found in the cell: ${cellText}`);
                    //   }
                }
            }
            console.error(`The value "${cellTextToFind}" is not found in the cell: `);
        } catch (error) {
            console.error('An error occurred while interacting with the table:', error);
            //   this.page.screenshot({ path: 'error.png' });

        }
    }

    async interactWithTableDeletionField(tableSelector: string, headerSelector: string, allRows: string, tableCells: string, cellTextToFind: string) {
        try {
            // Wait for the table to load
            await this.page.waitForSelector(tableSelector);
            const table = await this.page.locator(tableSelector);
            await this.page.waitForTimeout(5000);
            const header = table.locator(headerSelector);
            console.log(await header.innerText());
            await this.page.waitForTimeout(2000);

            // Get all rows in the table
            const rows = table.locator(allRows);
            console.log(`Rows Count: `, await rows.count());

            for (let i = 0; i < await rows.count(); i++) {
                const row = rows.nth(i);
                const cells = row.locator(tableCells);

                for (let j = 0; j < await cells.count(); j++) {
                    const cellText = await cells.nth(j).innerText();

                    if (cellText.includes(cellTextToFind)) {
                        console.log(`The value "${cellTextToFind}" is found in the cell: ${cellText}`);
                        await this.page.waitForTimeout(2000);
                        const checkbox = row.locator('.oxd-icon-button .bi-trash');
                        await checkbox.click({ force: true });
                        await this.page.waitForTimeout(2000);
                        return; // Found the cell text, so exit the function
                    }
                    //   else{
                    //     console.log(`The value "${cellTextToFind}" is not found in the cell: ${cellText}`);
                    //   }
                }
            }
            console.error(`The value "${cellTextToFind}" is not found in the cell: `);
        } catch (error) {
            console.error('An error occurred while interacting with the table:', error);
            //   this.page.screenshot({ path: 'error.png' });

        }
    }

    async interactWithTableTextField(tableSelector: string, headerSelector: string, allRows: string, tableCells: string, cellTextToFind: string) {
        try {
            // Wait for the table to load
            await this.page.waitForSelector(tableSelector);
            const table = await this.page.locator(tableSelector);
            await this.page.waitForTimeout(5000);
            const header = table.locator(headerSelector);
            console.log(await header.innerText());
            await this.page.waitForTimeout(2000);

            // Get all rows in the table
            const rows = table.locator(allRows);
            console.log(`Rows Count: `, await rows.count());

            for (let i = 0; i < await rows.count(); i++) {
                const row = rows.nth(i);
                const cells = row.locator(tableCells);

                for (let j = 0; j < await cells.count(); j++) {
                    const cellText = await cells.nth(j).innerText();

                    if (cellText.includes(cellTextToFind)) {
                        console.log(`The value "${cellTextToFind}" is found in the cell: ${cellText}`);
                        await this.page.waitForTimeout(2000);
                        // const checkbox = row.locator('.oxd-icon-button .bi-trash');
                        // await checkbox.click({ force: true });
                        // await this.page.waitForTimeout(2000);
                        return; // Found the cell text, so exit the function
                    }
                    //   else{
                    //     console.log(`The value "${cellTextToFind}" is not found in the cell: ${cellText}`);
                    //   }
                }
            }
            console.error(`The value "${cellTextToFind}" is not found in the cell: `);
        } catch (error) {
            console.error('An error occurred while interacting with the table:', error);
            //   this.page.screenshot({ path: 'error.png' });

        }
    }


    async projectInfoCustomerAdd() {

        await this.clickElement(this.timeLocators.timeSheet.projectInfo);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.customer);
        await this.clickElement(this.timeLocators.projectInfoDetails.customer);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.customerAddBtn);
        await this.clickElement(this.timeLocators.projectInfoDetails.customerAddBtn);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.customerName);
        await this.enterText(this.timeLocators.projectInfoDetails.customerName, assertion.assertion.projectInfocustomerName);
        await this.enterText(this.timeLocators.projectInfoDetails.customerDescription, assertion.assertion.projectInfoDescription);
        await this.clickElement(this.timeLocators.projectInfoDetails.customerSaveBtn);
        await this.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.tableSelector);
        await this.interactWithTableEditField(this.timeLocators.projectInfoDetails.tableSelector, this.timeLocators.projectInfoDetails.headerSelector, this.timeLocators.projectInfoDetails.allRows, this.timeLocators.projectInfoDetails.tableCells, assertion.assertion.projectInfocustomerName);
        await this.enterText(this.timeLocators.projectInfoDetails.customerName, assertion.assertion.projectInfocustomerEditedName);
        await this.enterText(this.timeLocators.projectInfoDetails.customerDescription, assertion.assertion.projectInfocustomerEditedDesc);
        await this.clickElement(this.timeLocators.projectInfoDetails.customerSaveBtn);
        await this.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        await this.interactWithTableDeletionField(this.timeLocators.projectInfoDetails.tableSelector, this.timeLocators.projectInfoDetails.headerSelector, this.timeLocators.projectInfoDetails.allRows, this.timeLocators.projectInfoDetails.tableCells, assertion.assertion.projectInfocustomerEditedName);
        console.log("Table perfored");
        await this.clickElement(this.timeLocators.projectInfoDetails.confirmationDeletePopup);
        await this.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
    }

    async clickElementSelectDropDownValue(clickDropDownLocator: string, textValue:string, dropdownLocator: string, dropDownValue: string) {
        try {
            await this.page.waitForSelector(clickDropDownLocator);
            await this.page.fill(clickDropDownLocator,textValue);
            // await this.page.waitForSelector(clickDropDownLocator);
            // await this.page.type(clickDropDownLocator,textValue);
            await this.page.waitForSelector(dropdownLocator);
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

    async reportProjectReports() {
        
        await this.page.waitForSelector(this.timeLocators.timeSheet.reports);
        await this.clickElement(this.timeLocators.timeSheet.reports);
        await this.page.waitForSelector(this.timeLocators.timeSheet.projectReports);
        await this.clickElement(this.timeLocators.timeSheet.projectReports);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.addProjectsName);
        await this.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.addProjectsName,assertion.assertion.projectCustomerName,this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.projectDateRange);
        await this.enterText(this.timeLocators.attendanceDetails.projectDateRange, assertion.assertion.projectDateRange);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.projectToDate);
        await this.enterText(this.timeLocators.attendanceDetails.projectToDate, assertion.assertion.projectDateRangeTo);
        await this.clickElement(this.timeLocators.attendanceDetails.projectInclude);
        await this.clickElement(this.timeLocators.attendanceDetails.projectViewBtn);
        const text = await this.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(text).toBe("No Records Found");
    }

    async reportEmployeeReports() {
        
        await this.page.waitForSelector(this.timeLocators.timeSheet.reports);
        await this.clickElement(this.timeLocators.timeSheet.reports);
        await this.page.waitForSelector(this.timeLocators.timeSheet.employeeReports);
        await this.clickElement(this.timeLocators.timeSheet.employeeReports);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.reportEmpName);
        await this.selectOptionFromAutocomplete(this.timeLocators.attendanceDetails.reportEmpName,assertion.assertion.reportEmployeeName,this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.reportProjectName);
        await this.selectOptionFromAutocomplete(this.timeLocators.attendanceDetails.reportProjectName,assertion.assertion.reportProjectName,this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetActivity);
        await this.selectDropDownElements(this.timeLocators.timeSheetDetails.timeSheetActivity, this.timeLocators.timeSheetDetails.timeSheetActivityDropDown, assertion.assertion.reportActivityName);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.projectDateRange);
        await this.enterText(this.timeLocators.attendanceDetails.projectDateRange, assertion.assertion.projectDateRange);
        await this.page.waitForSelector(this.timeLocators.attendanceDetails.projectToDate);
        await this.enterText(this.timeLocators.attendanceDetails.projectToDate, assertion.assertion.projectDateRangeTo);
        await this.clickElement(this.timeLocators.attendanceDetails.projectInclude);
        await this.clickElement(this.timeLocators.attendanceDetails.projectViewBtn);
        const text = await this.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(text).toBe("No Records Found");
    }

    async reportAttendenceSummary() {
        
        await this.page.waitForSelector(this.timeLocators.timeSheet.reports);
        await this.clickElement(this.timeLocators.timeSheet.reports);
        await this.page.waitForSelector(this.timeLocators.timeSheet.attendenceSummary);
        await this.clickElement(this.timeLocators.timeSheet.attendenceSummary);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.employeeName);
        await this.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.employeeName,assertion.assertion.reportEmployeeName,this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.jobTitle);
        await this.selectDropDownElements(this.timeLocators.projectInfoDetails.jobTitle, this.timeLocators.projectInfoDetails.jobTitleDropDown, assertion.assertion.reportJobTitle);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.subUnit);
        await this.selectDropDownElements(this.timeLocators.projectInfoDetails.subUnit, this.timeLocators.projectInfoDetails.subUnitDropDown, assertion.assertion.reportSubUnit);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.employeeStatus);
        await this.selectDropDownElements(this.timeLocators.projectInfoDetails.employeeStatus, this.timeLocators.projectInfoDetails.employeeStatusDropdown, assertion.assertion.reportEmployeeStatus);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.dateRange);
        await this.enterText(this.timeLocators.projectInfoDetails.dateRange, assertion.assertion.projectDateRange);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.toDate);
        await this.enterText(this.timeLocators.projectInfoDetails.toDate, assertion.assertion.projectDateRangeTo);
        await this.clickElement(this.timeLocators.attendanceDetails.projectViewBtn);
        const text = await this.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(text).toBe("No Records Found");
    }

    async projectsInfoValidateProjectsAdd() {
        // await this.page.waitForSelector(this.timeLocators.timeSheet.projectInfo);
        await this.clickElement(this.timeLocators.timeSheet.projectInfo);
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projects);
        await this.clickElement(this.timeLocators.projectInfoDetails.projects);
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsCustomerName);
        await this.page.locator(this.timeLocators.projectInfoDetails.projectsCustomerName).fill("a");
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsCustomerName);
        await this.clickElement(this.timeLocators.projectInfoDetails.projectName);

        await this.clickElement(this.timeLocators.projectInfoDetails.projectsName);
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.timeLocators.projectInfoDetails.projectsName).fill("a");
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsName);
        await this.clickElement(this.timeLocators.projectInfoDetails.project);

        await this.clickElement(this.timeLocators.projectInfoDetails.projectsAdmin);
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.timeLocators.projectInfoDetails.projectsAdmin).fill("a");
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsAdmin);
        await this.clickElement(this.timeLocators.projectInfoDetails.projectAdmin);
        await this.clickElement(this.timeLocators.projectInfoDetails.projectsSearch);
        const text = await this.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        expect(text).toBe("No Records Found");
        await this.clickElement(this.timeLocators.projectInfoDetails.projectReset);
    }

    async projectsInfoAddNewProject() {
        
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsAddBtn);
        await this.clickElement(this.timeLocators.projectInfoDetails.projectsAddBtn);
        // await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.addProjectsName);
        await this.enterText(this.timeLocators.projectInfoDetails.addProjectsName, assertion.assertion.projectInfocustomerName);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsCustomerName);
        await this.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsCustomerName,assertion.assertion.projectsCustomerName,this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.addProjectsDescription);
        await this.clickElement(this.timeLocators.projectInfoDetails.addProjectsDescription);
        await this.page.fill(this.timeLocators.projectInfoDetails.addProjectsDescription, assertion.assertion.projectAddDescription);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsAdmin);
        await this.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsAdmin,assertion.assertion.projectsAdmin,this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.clickElement(this.timeLocators.projectInfoDetails.addProjectsSaveBtn);
    }

    async projectsInfoAddNewProjectclickCancel() {
        
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsAddBtn);
        await this.clickElement(this.timeLocators.projectInfoDetails.projectsAddBtn);
        // await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.addProjectsName);
        await this.enterText(this.timeLocators.projectInfoDetails.addProjectsName, assertion.assertion.projectInfocustomerName);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsCustomerName);
        await this.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsCustomerName,assertion.assertion.projectsCustomerName,this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.addProjectsDescription);
        await this.clickElement(this.timeLocators.projectInfoDetails.addProjectsDescription);
        await this.page.fill(this.timeLocators.projectInfoDetails.addProjectsDescription, assertion.assertion.projectAddDescription);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projectsAdmin);
        await this.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsAdmin,assertion.assertion.projectsAdmin,this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.clickElement(this.timeLocators.projectInfoDetails.addPfojectsCancelBtn);
       
    }

    async selectOptionFromAutocomplete(inputSelector: string, optionText: string, dropdownSelector: string) {
        try {
          await this.page.waitForSelector(inputSelector); // Wait for the input field
          await this.page.locator(inputSelector).fill(optionText); // Fill the input field
          await this.page.waitForSelector(dropdownSelector); // Wait for the dropdown options to appear
          const options = await this.page.$$(dropdownSelector); // Get the dropdown options
        
          for (const option of options) {
            const value = await option.textContent();
            if (value?.includes(optionText)) {
              await option.click(); // Click the desired option
              break;
            }
          }

        } catch (error) {
          console.error(`An error occurred: ${error}`);
          // Handle the error as needed (e.g., log it or perform error-specific actions)
        }
      }

      async isInputFieldEmpty(inputSelector: string) {
        // Wait for the input field to be present
        await this.page.waitForSelector(inputSelector);
        
        // Get the input element
        const inputElement = this.page.locator(inputSelector);
        
        // Get the value of the input field
        const inputValue = await inputElement.inputValue();
        
        // Check if the input field is empty
        return inputValue.trim() === '';
      }
      

    async projectInfoProjects() {
        // await this.page.waitForSelector(this.timeLocators.timeSheet.projectInfo);
        await this.clickElement(this.timeLocators.timeSheet.projectInfo);
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.timeLocators.projectInfoDetails.projects);
        await this.clickElement(this.timeLocators.projectInfoDetails.projects);
        await this.page.waitForTimeout(5000);
        await this.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsCustomerName,assertion.assertion.projectsCustomerName,this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsName,assertion.assertion.projectsName,this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.selectOptionFromAutocomplete(this.timeLocators.projectInfoDetails.projectsAdmin,assertion.assertion.projectsAdmin,this.timeLocators.projectInfoDetails.projectInfoCustomerNameDropdown);
        await this.clickElement(this.timeLocators.projectInfoDetails.projectsSearch);
        const projectsText = await this.getToastMessageNew(this.timeLocators.attendanceDetails.timePageToastMsg);
        console.log(projectsText);
        expect(projectsText).toBe("No Records Found");
        await this.clickElement(this.timeLocators.projectInfoDetails.projectReset);
        const customerName = await this.isInputFieldEmpty(this.timeLocators.projectInfoDetails.projectsCustomerName);
        console.log(`The customer field is Empty :` + customerName);
        const projectName = await this.isInputFieldEmpty(this.timeLocators.projectInfoDetails.projectsName);
        console.log(`The project field is Empty :` + projectName);
        const adminName = await this.isInputFieldEmpty(this.timeLocators.projectInfoDetails.projectsAdmin);
        console.log(`The admin field is Empty :` + adminName);
        
}
}