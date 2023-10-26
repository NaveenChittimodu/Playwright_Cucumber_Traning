import { Locator, Page, expect } from "@playwright/test";
import { log } from "console";

export class CommonMethods {

    public page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async clickElement(locator: string) {

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
    // This method uploads a single file to a web page using Playwright.
    // For Example: 
    //  const fileInputSelector = ".mqfihd-upload"; // Selector for the file input element
    //  const filePaths = "tests/UploadFiles/1.txt"; // Paths to the files you want to upload

    async uploadSingleFile(fileInputSelector: string, filePath: string) {
        await this.page.waitForSelector(fileInputSelector); // Wait for the file input element
        await this.page.locator(fileInputSelector).click(); // Click the file input to trigger the file dialog
        await this.page.locator(fileInputSelector).setInputFiles(filePath); // Set the file to upload
        await this.page.waitForTimeout(5000); // Wait for some time (you can adjust this)
    }

    //This method uploads a multiple file to a web page using Playwright
    // For Example: 
    //  const fileInputSelector = ".mqfihd-upload"; // Selector for the file input element
    //  const filePaths = ["tests/UploadFiles/1.txt", "tests/UploadFiles/2.txt", "tests/UploadFiles/3.txt"]; // Paths to the files you want to upload

    async uploadMultipleFiles(fileInputSelector: string, filePaths: string[]) {
        await this.page.waitForSelector(fileInputSelector); // Wait for the file input element
        await this.page.locator(fileInputSelector).click(); // Click the file input to trigger the file dialog

        for (const filePath of filePaths) {
            await this.page.locator(fileInputSelector).setInputFiles(filePath); // Set the file to upload
            await this.page.waitForTimeout(2000); // Wait for some time between file uploads (you can adjust this)
        }
    }

    async selectOptionFromAutocomplete(inputSelector: string, dropdownSelector:string, optionText: string) {
      
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
      
        await this.page.waitForTimeout(5000); // Wait for some time (you can adjust this)
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

      //1.  This method for to fill an input field and retrieve its value.

      async fillInputFieldAndGetText(inputSelector: string, textToFill: string) {
        await this.page.waitForSelector(inputSelector); // Wait for the input field
        await this.page.locator(inputSelector).isVisible(); // check the input field visible
        await this.page.locator(inputSelector).fill(textToFill); // Fill the input field
      
        // To get the value of the input field, use inputValue()
        const inputValue = this.page.locator(inputSelector).inputValue();
        return inputValue;
      }


      async fillInputFieldAndGetText1(inputSelector: string, textToFill: string) {
        await this.page.waitForSelector(inputSelector); // Wait for the input field
        await this.page.locator(inputSelector).fill(textToFill); // Fill the input field
      
        // To get the value of the input field, use inputValue()
        const inputElement = this.page.locator(inputSelector);
        const inputValue = await inputElement.inputValue();
        return inputValue;
      }

      async validateRequiredErrorMessage(inputSelector: string, submitButtonSelector: string, expectedErrorMessage: string) {
        try {
          // Ensure that the input field is empty
          await this.page.fill(inputSelector, '');
          
          // Submit the form (you can use a specific submit button)
          await this.page.click(submitButtonSelector);
          
          // Wait for the error message to appear
          await this.page.waitForSelector('Your error message selector here');
          
          // Get the error message text
          const errorMessage = await this.page.textContent('Your error message selector here');
          
          // Check if the error message matches the expected message
          return errorMessage === expectedErrorMessage;
        } catch (error) {
          console.error(`An error occurred: ${error}`);
          return false; // Handle the error and return false
        }
      }

}


