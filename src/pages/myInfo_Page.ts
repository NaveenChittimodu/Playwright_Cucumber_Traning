import { expect,Locator, Page } from "@playwright/test";
import { MyInfoLocators } from "../common/Locators/myInfoLocators";
// import * as constants from "../common/constants.json"
import * as assertion from "../testData/json/assertion.json"


export class MyInfoPage {
    readonly page: Page; middleName: any = ''; vacancyName: any = '';

    readonly myInfoLocators: MyInfoLocators;

    constructor(page: Page) {
        this.page = page;
        this.myInfoLocators = new MyInfoLocators(page);
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

      async navigateToMyInfo() {
        await this.page.waitForSelector(this.myInfoLocators.personalDetails.myInfoTab);
        await this.page.locator(this.myInfoLocators.personalDetails.myInfoTab).click();
        // await this.clickElement(this.myInfoLocators.personalDetails.myInfoTab);
    }

    async enterText(locator: Locator, text: string) {
        try {
          await this.page.waitForSelector(locator.toString());
          await this.page.locator(locator.toString()).click();
          await this.page.locator(locator.toString()).clear();
          await this.page.fill(locator.toString(), text);
          console.log('Text is entered');
        } catch (error) {
          console.error('Text not entered:', error);
        }
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

    async  checkBox(locator: string, isChecked: boolean){
      try {
        const checkbox = this.page.locator(locator);
        const currentCheckedState = await checkbox.isChecked();
    
        if (isChecked !== currentCheckedState) {
          await checkbox.click();
        }
      } catch (error) {
        console.error('Error the checkbox:', error);
      }
    }

      async employeeFullName(){
        await this.enterText(this.myInfoLocators.personalDetails.empFullName,assertion.assertion.Fname);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empFullName).textContent();
        // expect(fullnameText).toBe(assertion.assertion.Fname);
        
      }

      async employeeMiddleName(){
        await this.enterText(this.myInfoLocators.personalDetails.empMiddleName,assertion.assertion.Mname);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empMiddleName).textContent();
        // expect(fullnameText).toBe(assertion.assertion.Mname);
      }

      async employeeLastName(){
        await this.enterText(this.myInfoLocators.personalDetails.empLastName,assertion.assertion.Lname);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empLastName).textContent();
        // expect(fullnameText).toBe(assertion.assertion.Lname);
      }

      async employeeNickName(){
        await this.enterText(this.myInfoLocators.personalDetails.empNickName,assertion.assertion.NickName);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empNickName).textContent();
        // expect(fullnameText).toBe(assertion.assertion.NickName);
      }

      async employeeID(){
        await this.enterText(this.myInfoLocators.personalDetails.empEmployeeID,assertion.assertion.employeeID);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empEmployeeID).textContent();
        // expect(fullnameText).toBe(assertion.assertion.employeeID);
      }

      async employeeOtherID(){
        await this.enterText(this.myInfoLocators.personalDetails.empOtherID,assertion.assertion.otherID);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empOtherID).textContent();
        //expect(fullnameText).toBe(assertion.assertion.otherID);
      }

      async employeeLicenseExpDate(){
        await this.enterText(this.myInfoLocators.personalDetails.empLicenseExpDate,assertion.assertion.licenseExpDate);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empLicenseExpDate).textContent();
        // expect(fullnameText).toBe(assertion.assertion.licenseExpDate);
      }

      async employeeSSNNumber(){
        await this.enterText(this.myInfoLocators.personalDetails.empSSNnumber,assertion.assertion.ssnNumber);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empSSNnumber).textContent();
        // expect(fullnameText).toBe(assertion.assertion.ssnNumber);
      }

      async employeeSSINumber(){
        await this.enterText(this.myInfoLocators.personalDetails.empSSINumber,assertion.assertion.ssiNumber);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empSSINumber).textContent();
        // expect(fullnameText).toBe(assertion.assertion.ssiNumber);
      }

      async employeeNationality(){
        await this.selectDropDownElements(this.myInfoLocators.personalDetails.empNationality,this.myInfoLocators.personalDetails.empNationalityDropdown,assertion.assertion.nationality);
        await this.page.waitForTimeout(2000);
      }

      async employeeMaritialStatus(){
        await this.selectDropDownElements(this.myInfoLocators.personalDetails.employeeMaritialStatus,this.myInfoLocators.personalDetails.empMaritialStatusDropDown,assertion.assertion.maritialStatus);
      }


}