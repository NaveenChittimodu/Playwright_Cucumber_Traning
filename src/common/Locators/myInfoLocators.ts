import { Locator, Page } from "@playwright/test";

export class MyInfoLocators{
    readonly page: Page;
    readonly personalDetails:any;

    constructor(page:Page){

        this.page = page;
        this.personalDetails = {
            myInfoTab : `ul.oxd-main-menu>li:nth-of-type(6)`,
            empImg : `img.employee-image`,
            personalDetailsTitle : `//h6[text()='Personal Details']`,
            empFullName : `//input[@name='firstName']`,
            empMiddleName : `//input[@name='middleName']`,
            empLastName : `//input[@name='lastName']`,
            empNickName : `//label[text()='Nickname']//parent::div//following-sibling::div//input`,
            empEmployeeID : `//label[normalize-space(text())='Employee Id']//parent::div//following-sibling::div//input`,
            empOtherID : `//label[normalize-space(text())='Other Id']//parent::div//following-sibling::div//input`,
            empLicenseExpDate:`//label[text()='License Expiry Date']//parent::div//following-sibling::div/div//input`,
            empSSNnumber: `//label[text()='SSN Number']//parent::div//following-sibling::div//input`,
            empSSINumber:`//label[text()='SIN Number']//parent::div//following-sibling::div//input`,
            empNationality: `//label[text()='Nationality']//parent::div//following-sibling::div`,
            empNationalityDropdown: `div.oxd-select-dropdown .oxd-select-option`,
            empMaritialStatus: `//label[text()='Marital Status']//parent::div//following-sibling::div`,
            empMaritialStatusDropDown: `div.oxd-select-dropdown .oxd-select-option`

        };
        
    }

}