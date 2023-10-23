import { Locator, Page, expect } from "@playwright/test";
import { log } from "console";

export class CommonMethods {

    public page: Page;

    constructor(page: Page){
        this.page = page;
        
    }
    
    async clickElement(locator:string){

        try {
            await this.page.waitForSelector(locator);
            await expect(await this.page.locator(locator)).toBeVisible();
            await this.page.locator(locator).click({ force: true });
            console.log("Button has been clicked...")
        } 
        catch (error) {
            console.log("Button hasn't been clicked...")
        }
        
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

    async checkAndExpectCheckbox(checkboxLocator: Locator, shouldBeChecked: boolean = true) {
        // Check the checkbox
        await checkboxLocator.check();
      
        // Check if it should be checked and assert accordingly
        if (shouldBeChecked) {
          await expect(checkboxLocator).toBeChecked();
          await expect(checkboxLocator.isChecked()).toBeTruthy();
        } else {
          await expect(checkboxLocator.isChecked()).toBeFalsy();
        }
      }

      async getElementText1(locator: string) {
        try {
          const element = await this.page.locator(locator);
          const text = await element.textContent();
          return text || '';
        } catch (error) {
          console.error(`Error while getting text: ${error}`);
          return null;
        }
      }

      async getElementText(locator: string) {
        try {
          const element = await this.page.locator(locator);
          const text = await element.textContent();
      
          if (text !== null && text !== '') {
            // Add your specific condition here
            if (text.includes('Some Expected Text')) {
              console.log('Text contains expected text.');
            } else {
              console.log('Text does not contain expected text.');
            }
          } else {
            console.log('Text is empty.');
          }
      
          return text || '';
        } catch (error) {
          console.error(`Error while getting text: ${error}`);
          return null;
        }
      }

}


