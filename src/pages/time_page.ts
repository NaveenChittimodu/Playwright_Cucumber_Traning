import { expect,Locator, Page } from "@playwright/test";
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
    // await this.clickElement(this.myInfoLocators.personalDetails.myInfoTab);
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
      await this.page.locator(locator.toString()).click();
      await this.page.locator(locator.toString()).clear();
      await this.page.fill(locator.toString(), text);
      console.log('Text is entered');
    } catch (error) {
      console.error('Text not entered:', error);
    }
  }

  async timeSheetPeriod(){
    await this.page.waitForSelector(this.timeLocators.timeSheet.timeSheet);
    await this.clickElement(this.timeLocators.timeSheet.timeSheet);
    await this.page.waitForTimeout(5000);
    await this.page.waitForSelector(this.timeLocators.timeSheet.myTimeSheet);
    await this.clickElement(this.timeLocators.timeSheet.myTimeSheet);
    const timeSheetPeriod = await this.getTextFromElement(this.timeLocators.timeSheetDetails.timeSheetPeriodInput);
    console.log(timeSheetPeriod);
  }

  
  async timeSheetEditCancel(){
    await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetEdit);
    await this.page.waitForTimeout(5000);
    await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProject);
    await this.page.locator(this.timeLocators.timeSheetDetails.timeSheetProject).fill("c");
    await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
    await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
    await this.selectDropDownElements(this.timeLocators.timeSheetDetails.timeSheetActivity,this.timeLocators.timeSheetDetails.timeSheetActivityDropDown,"Bug Fixes");
    await this.page.waitForTimeout(3000);
    await this.clearAndSendKeysToElements(this.timeLocators.timeSheetDetails.timeSheetDays,[8, 8, 8, 8, 8, 8, 8]);
    await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetCancelBtn);
    await this.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg)
  }

  async timeSheetEditReset(){
    await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetEdit);
    await this.page.waitForTimeout(5000);
    await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProject);
    await this.page.locator(this.timeLocators.timeSheetDetails.timeSheetProject).fill("c");
    await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
    await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
    await this.selectDropDownElements(this.timeLocators.timeSheetDetails.timeSheetActivity,this.timeLocators.timeSheetDetails.timeSheetActivityDropDown,"Bug Fixes");
    await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetDays);
    // await this.clearAndSendKeysToElements(this.timeLocators.timeSheetDetails.timeSheetDays,[8, 8, 8, 8, 8, 8, 8]);
    await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetResetBtn);
  }

  async timeSheetEditSave(){
    await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetEdit);
    await this.page.waitForTimeout(5000);
    await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProject);
    await this.page.locator(this.timeLocators.timeSheetDetails.timeSheetProject).fill("c");
    await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
    await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetProjectApache);
    await this.selectDropDownElements(this.timeLocators.timeSheetDetails.timeSheetActivity,this.timeLocators.timeSheetDetails.timeSheetActivityDropDown,"Bug Fixes");
    await this.page.waitForSelector(this.timeLocators.timeSheetDetails.timeSheetDays);
    await this.clearAndSendKeysToElements(this.timeLocators.timeSheetDetails.timeSheetDays,[8, 8, 8, 8, 8, 8, 8]);
    await this.clickElement(this.timeLocators.timeSheetDetails.timeSheetResetBtn);
  }

  async timeSheetEmployeeSearch(){
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

  async attendanceMyRecords(){
    await this.page.waitForSelector(this.timeLocators.timeSheet.attendance);
    await this.clickElement(this.timeLocators.timeSheet.attendance);
    await this.page.waitForTimeout(5000);
    await this.page.waitForSelector(this.timeLocators.timeSheet.myRecords);
    await this.clickElement(this.timeLocators.timeSheet.myRecords);
    await this.page.waitForTimeout(5000);
    await this.enterText(this.timeLocators.attendanceDetails.attendanceDate,"2023-10-19");
    await this.clickElement(this.timeLocators.attendanceDetails.attendanceDate);
    await this.page.waitForSelector(this.timeLocators.attendanceDetails.noRecordsFound);
    const noSheetFound = await this.getTextFromElement(this.timeLocators.attendanceDetails.noRecordsFound);
    console.log(noSheetFound);
    await this.page.waitForSelector(this.timeLocators.attendanceDetails.attendaceViewBtn);
    await this.clickElement(this.timeLocators.attendanceDetails.attendaceViewBtn);
  }

  async attendancePunchInOut(){
    // await this.page.waitForSelector(this.timeLocators.timeSheet.attendance);
    await this.clickElement(this.timeLocators.timeSheet.attendance);
    await this.page.waitForTimeout(5000);
    await this.page.waitForSelector(this.timeLocators.timeSheet.punchInOut);
    await this.clickElement(this.timeLocators.timeSheet.punchInOut);
    await this.page.waitForTimeout(5000);
    await this.enterText(this.timeLocators.attendanceDetails.punchInDate,"2023-10-19");
    // await this.clickElement(this.timeLocators.attendanceDetails.punchInDate);
    await this.enterText(this.timeLocators.attendanceDetails.punchInTime,"07:23 PM");
    await this.clickElement(this.timeLocators.attendanceDetails.punchInTime);
    await this.enterText(this.timeLocators.attendanceDetails.punchInComments,"QA Engineer");
    await this.clickElement(this.timeLocators.attendanceDetails.punchInBtn);

    const punchOutTime = await this.getTextFromElement(this.timeLocators.attendanceDetails.punchedOutTime);
    console.log(punchOutTime);
    const punchOutDate = await this.getTextFromElement(this.timeLocators.attendanceDetails.punchedOutDate);
    console.log(punchOutDate);
    await this.clickElement(this.timeLocators.attendanceDetails.punchOutBtn);

  }

  
  async attendanceConfiguration(){

    await this.clickElement(this.timeLocators.timeSheet.attendance);
    await this.page.waitForTimeout(5000);
    await this.page.waitForSelector(this.timeLocators.timeSheet.configuration);
    await this.clickElement(this.timeLocators.timeSheet.configuration);
    await this.page.waitForTimeout(5000);

    await this.clickElement(this.timeLocators.attendanceDetails.configurationInOut);
    await this.clickElement(this.timeLocators.attendanceDetails.configurationRecord);
    await this.clickElement(this.timeLocators.attendanceDetails.configurationSubOrdinate);
    await this.page.waitForSelector(this.timeLocators.attendanceDetails.configuration);
    await this.clickElement(this.timeLocators.attendanceDetails.configurationSaveBtn);
  }
  

}