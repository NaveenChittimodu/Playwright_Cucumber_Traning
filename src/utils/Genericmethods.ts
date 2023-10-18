import { Page } from "@playwright/test";


export class GenericPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


async selectDropDownElements(clickDropDownLocator: string,dropdownLocator: string, dropDownValue: string) {
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

async selectDropDownElement(selectdropdown : string ,dropdownText : string) {
    let dropdownvalue = `//div/span[text() = '${dropdownText}']`
    if (await this.page.locator(selectdropdown).isVisible()) {
        await this.page.locator(selectdropdown).click();
        await this.page.locator(dropdownvalue).click();
    }
}

}