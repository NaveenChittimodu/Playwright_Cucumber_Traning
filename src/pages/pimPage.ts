import { Page, expect,Locator } from "@playwright/test";
import { Pimlocators } from "../common/Locators/pimLocators";


export  class Pimmenu {
    readonly page: Page;
    private readonly pimlocators: Pimlocators;
    

    constructor(page: Page) {
        this.page = page;
        this.pimlocators = new Pimlocators(page); 
    }

    async clickpim(){
        await (await this.page.waitForSelector(this.pimlocators.PIM)).isVisible();
        await this.page.locator(this.pimlocators.PIM).click({force : true});
    }

    async clickaddemployee() {
        await (await this.page.waitForSelector(this.pimlocators.addemployee)).isVisible();
        await this.page.locator(this.pimlocators.addemployee).click({force : true});
    }

    async fillPIMfirstname(firstname:string){
        
        await (await this.page.waitForSelector(this.pimlocators.firstName)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.firstName)).isEditable();
        await  this.page.locator(this.pimlocators.firstName).fill(firstname);
    }
    
    async fillPIMmiddlename(middlename:string){
        await (await this.page.waitForSelector(this.pimlocators.middlename)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.middlename)).isEditable();
        await  this.page.locator(this.pimlocators.middlename).fill(middlename);
    }
    
    async fillPIMlastname(lastname:string){
        await (await this.page.waitForSelector(this.pimlocators.lastname)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.lastname)).isEditable();
        await  this.page.locator(this.pimlocators.lastname).fill(lastname);
    }  
    
    async fillEmployeeid(employeeid:string){
        await (await this.page.waitForSelector(this.pimlocators.employeeId)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.employeeId)).isEditable();
        await  this.page.locator(this.pimlocators.employeeId).fill(employeeid);
    }

    async clickSavebutton() {
        await (await this.page.waitForSelector(this.pimlocators.savebutton)).isVisible();
        await this.page.locator(this.pimlocators.savebutton).click();
    }

    async fillOtherId(otherid:string) {
        await (await this.page.waitForSelector(this.pimlocators.otherID)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.otherID)).isEditable();
        await  this.page.locator(this.pimlocators.otherID).fill(otherid);
    }

    async fillSnnNumber(ssnnumber:string) {
        await (await this.page.waitForSelector(this.pimlocators.ssnNumber)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.ssnNumber)).isEditable();
        await  this.page.locator(this.pimlocators.ssnNumber).fill(ssnnumber);
    }

    // async filldriverslicensenumber(driverslicensenumber:string) {
    //     await (await this.page.waitForSelector(this.pimlocators.driversLicenseNumber)).isVisible();
    //     await (await this.page.waitForSelector(this.pimlocators.driversLicenseNumber)).isEditable();
    //     await  this.page.locator(this.pimlocators.driversLicenseNumber).fill(driverslicensenumber);

    // }

    async filllicenseexpiryDate(license_expiry_date:string) {
        await (await this.page.waitForSelector(this.pimlocators.licenseExpiryDate)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.licenseExpiryDate)).isEditable();
        await  this.page.locator(this.pimlocators.ssnNumber).fill(license_expiry_date);
    }
    
    async fillSinNumber(sinnumber:string) {
        await (await this.page.waitForSelector(this.pimlocators.sinNumber)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.sinNumber)).isEditable();
        await  this.page.locator(this.pimlocators.sinNumber).fill(sinnumber);
    }
    
    // async selectdropdown_Nationality(dropdownLocator: string, dropDownText: string) {
    //     if(await this.page.locator(dropdownLocator).isVisible()){
    //         await this.page.locator(dropDownText).click()
    //     }
    // }

    async selectdropdown_Marital_Status(dropdownLocator: string, dropDownText: string) {
        if(await this.page.locator(dropdownLocator).isVisible()){
           await this.page.locator(dropdownLocator).click()
           await this.page.locator(dropDownText).isVisible()
           await this.page.locator(dropDownText).click()
        }
    }

    async clickrequiredSavebutton() {
        await (await this.page.waitForSelector(this.pimlocators.requiredsavebutton)).isVisible();
        await this.page.locator(this.pimlocators.requiredsavebutton).click();
    }
    
    async clickonMaleRadiobutton() {
        await (await this.page.waitForSelector(this.pimlocators.maleRadioButton)).isVisible();
        await this.page.locator(this.pimlocators.maleRadioButton).click();
    }

    // async selectdropdownBloodtype(dropdownLocator: string, dropDownText: string) {
    //     if(await this.page.locator(dropdownLocator).isVisible()){
    //         await this.page.locator(dropDownText).click()
    //     }
    // }

    async clickcustomSavebutton() {
        await (await this.page.waitForSelector(this.pimlocators.customsavebutton)).isVisible();
        await this.page.locator(this.pimlocators.customsavebutton).click();
    }

    async clickattachmentAddandUploadfile() {
        await this.page.locator(this.pimlocators.attachmentAddButton).click();
        const [uploadFiles] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.locator(this.pimlocators.clickonUploadBrowser).click()
        ])
        const isMultiple = uploadFiles.isMultiple();
        console.log(isMultiple);
        uploadFiles.setFiles(["sampleFile.jpeg"
        ])
    }
    
    async fillAttacmentComment(comment:string) {
        await (await this.page.waitForSelector(this.pimlocators.attachmentComment)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.attachmentComment)).isEditable();
        await  this.page.locator(this.pimlocators.attachmentComment).fill(comment);
    }

    async clickAttachmentSave() {
        await (await this.page.waitForSelector(this.pimlocators.attachmentSaveButton)).isVisible();
        await this.page.locator(this.pimlocators.attachmentSaveButton).click();
    }

    async clickAttachmentCancel() {
        await (await this.page.waitForSelector(this.pimlocators.attachmentCancelButton)).isVisible();
        await this.page.locator(this.pimlocators.attachmentCancelButton).click();
    }

    async clickDeletebutton() {
        // await (await this.page.waitForSelector(this.pimlocators.selectRecord)).isVisible();
        // await this.page.locator(this.pimlocators.selectRecord).click();
        await (await this.page.waitForSelector(this.pimlocators.deleteSelected)).isVisible();
        await this.page.locator(this.pimlocators.deleteSelected).click();
    }



    async clickContactDetails() {
        await (await this.page.waitForSelector(this.pimlocators.contatDetails)).isVisible();
        await this.page.locator(this.pimlocators.contatDetails).click();
    }

    async fillstreet1() {

    }



}