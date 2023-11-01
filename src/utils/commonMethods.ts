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
            await this.page.locator(locator).click();
            console.log("Button has been clicked...")
        }
        catch (error) {
            console.log("Button hasn't been clicked...")
        }

    }

    async forceClickElement(locator: string) {

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
        try {
            // Check the checkbox
            await checkboxLocator.check();
    
            // Check if it should be checked and assert accordingly
            if (shouldBeChecked) {
                await expect(checkboxLocator).toBeChecked();
                await expect(checkboxLocator.isChecked()).toBeTruthy();
            } else {
                await expect(checkboxLocator.isChecked()).toBeFalsy();
            }
        } catch (error) {
            console.error(`An error occurred while checking and expecting the checkbox: ${error}`);
            
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

    async selectOptionFromAutocomplete(inputSelector: string, optionText: string, dropdownSelector: string) {
        try {
            await this.page.waitForSelector(inputSelector); // Wait for the input field
            await this.page.locator(inputSelector).fill(optionText); // Fill the input field
            await this.page.waitForTimeout(3000);
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

     

    async isCheckboxChecked(checkboxSelector: string) {
        // Wait for the checkbox element to be present
        await this.page.waitForSelector(checkboxSelector);

        // Get the checkbox element
        const checkbox = this.page.locator(checkboxSelector);

        // To check the checkbox
        // await checkbox.check();

        // Check if the checkbox is checked
        const isChecked = await checkbox.isChecked();

        return isChecked;
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

    //1.  This method for to fill an input field and retrieve its value.

    async fillInputFieldAndGetText1(inputSelector: string, textToFill: string) {
        await this.page.waitForSelector(inputSelector); // Wait for the input field
        await this.page.locator(inputSelector).isVisible(); // check the input field visible
        await this.page.locator(inputSelector).fill(textToFill); // Fill the input field

        // To get the value of the input field, use inputValue()
        const inputValue = this.page.locator(inputSelector).inputValue();
        return inputValue;
    }


    async fillInputFieldAndGetText(inputSelector: string, textToFill: string) {
        try {
          await this.page.waitForSelector(inputSelector); // Wait for the input field
          await this.page.locator(inputSelector).isVisible(); //  To check input filed is visible
          await this.page.locator(inputSelector).click();  // To click the input filed
          await this.page.locator(inputSelector).clear(); //  If to clear the existing text
          await this.page.locator(inputSelector).fill(textToFill); // Fill the input field
      
          // To get the value of the input field, use inputValue()
          const inputElement = this.page.locator(inputSelector);
          const inputValue = await inputElement.inputValue();
          console.log(inputValue);
          return inputValue;
        } catch (error) {
          console.error('An error occurred while filling input field and getting text:', error);
          return null; // Return null or another value to indicate the operation failed
        }
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

    async deleteIndividualRecord(recordSelector: string, deleteButtonSelector: string) {
        // Ensure that the page has loaded
        await this.page.waitForSelector(recordSelector);

        // Locate all records
        const records = await this.page.locator(recordSelector).all();

        for (const record of records) {
            // Find the delete button within the record
            const deleteButton = await record.locator(deleteButtonSelector);

            if (deleteButton) {
                await deleteButton.click(); // Click the delete button
                // You can add further confirmation steps if needed.
                return; // Record found and deleted
            }
        }

        console.log('Record not found or delete button not found.');
    }

    async deleteRowsInTableByCriteria(page: Page, tableSelector: string, headerSelector: string, allRows: string, tableCells: string, cellTextToFind: string, deleteButtonSelector: string) {
        try {
            // Wait for the table to load
            await page.waitForSelector(tableSelector);
            const table = await page.locator(tableSelector);
            await page.waitForTimeout(5000);
            const header = table.locator(headerSelector);
            console.log(await header.innerText());
            await page.waitForTimeout(2000);

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

                        // Find and click the delete button within the row
                        const deleteButton = await row.locator(deleteButtonSelector);

                        if (deleteButton) {
                            await deleteButton.click();
                            await page.waitForTimeout(2000);
                        }
                        return; // Found the cell text and deleted the row, so exit the function
                    }
                }
            }
            console.error(`The value "${cellTextToFind}" is not found in the cell: `);
        } catch (error) {
            console.error('An error occurred while interacting with the table:', error);
            //   this.page.screenshot({ path: 'error.png' });
        }

    }

    async deleteAllRecordsFromTable(locatorSelector: string, deleteLocator: Locator) {
        try {
            const elements = await this.page.locator(locatorSelector).all();
            for (let index = 0; index < elements.length; index++) {
                const name = await elements[index].innerText();
                console.log(name);

                // Find the delete button within the current row using the provided deleteLocator
                const deleteButton = await elements[index].locator(deleteLocator);

                if (deleteButton) {
                    await deleteButton.click();
                    await this.page.click(``);
                    console.log(`Deleted record: ${name}`);
                    // You can add further confirmation steps if needed.
                }
            }
            console.log('All records deleted');
        } catch (error) {
            console.error('An error occurred while deleting records:', error);
        }
    }

    async interactWithTableAndGetText(tableSelector: string, headerSelector: string, allRows: string, tableCells: string, cellTextToFind: string) {
        try {
          // Wait for the table to load
          await this.page.waitForSelector(tableSelector);
      
          // Locate the table element
          const table = await this.page.locator(tableSelector);
      
          // Locate the header element
          const header = table.locator(headerSelector);
          console.log(await header.innerText());
      
          // Get all rows in the table
          const rows = table.locator(allRows);
          console.log(`Rows Count: `, await rows.count());
      
          for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
      
            // Locate the cells within the current row
            const cells = row.locator(tableCells);
            const cellTexts = [];
      
            for (let j = 0; j < await cells.count(); j++) {
              const cellText = await cells.nth(j).innerText();
              cellTexts.push(cellText);
              // You can collect all cell texts in an array and process them as needed
            }
      
            // Log the cell texts for the current row
            console.log(`Cell Texts in Row ${i}:`, cellTexts);
      
            // If you want to perform an action based on cell text, you can do it here
      
            // Example: Check a checkbox if a certain cell text is found
            // if (cellTexts.includes(cellTextToFind)) {
            //   console.log(`The value "${cellTextToFind}" is found in the cell.`);
            //   // Perform your action (e.g., check a checkbox)
      
            //   // If you only want to check one checkbox and exit, you can return here
            //   return;
            // }
          }
      
          // If the text is not found in any cell
          console.error(`The value "${cellTextToFind}" is not found in any cell.`);
        } catch (error) {
          console.error('An error occurred while interacting with the table:', error);
          // You can add error handling or take a screenshot if needed
        }
      }

      async clearAndSendKeysToElements(xpath: string, values: (string | number)[]) {
        try {
            const elements = await this.page.locator(xpath).all();
    
            if (elements.length !== values.length) {
                throw new Error('Number of elements and values should match');
            }
    
            for (let i = 0; i < values.length; i++) {
                await elements[i].fill(values[i].toString());
            }
        } catch (error) {
            console.error('An error occurred while clearing and sending keys to elements:', error);
        }
    }

    async checkBox(locator: string, isChecked: boolean){
        try {
          await this.page.waitForSelector(locator);
          await this.page.locator(locator).isVisible;
          const checkbox = this.page.locator(locator);
          const currentCheckedState = await checkbox.isChecked();
      
          if (isChecked !== currentCheckedState) {
            await checkbox.click();
          }
        } catch (error) {
          console.error('Error the checkbox:', error);
        }
      }

      async selectRadioButton(locator: string) {
        try {
          await this.page.waitForSelector(locator);
          await this.page.locator(locator).isVisible;
          const radioButton = this.page.locator(locator);
      
          if (!(await radioButton.isChecked())) {
            await radioButton.click();
            console.log(`The radio button has been checked`);
            
          }
        } catch (error) {
          console.error('Error selecting the radio button:', error);
        }
      }

      async uploadFile(fileInputSelector: string, browseButtonSelector: string, filePaths: string[]) {
        try {
          await this.page.waitForSelector(browseButtonSelector);
          await this.page.locator(browseButtonSelector).click({ force: true });
      
          const [fileChooser] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.waitForSelector(fileInputSelector),
          ]);
      
          const isMultiple = fileChooser.isMultiple();
          console.log(isMultiple);
      
          await fileChooser.setFiles(filePaths);
        } catch (error) {
          console.error('Error uploading files:', error);
        }
      }
      
      
      
}


