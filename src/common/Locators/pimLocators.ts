import {Locator, Page} from '@playwright/test'

export class Pimlocators{
   
    readonly page: Page;
    readonly PIM: string;
    readonly addemployee: string;
    readonly firstName: string;
    readonly middlename: string;
    readonly lastname : string;
    readonly employeeId : string;
    readonly savebutton : string;
    readonly otherID : string;
    readonly ssnNumber: string;
    readonly driversLicenseNumber : string;
    readonly licenseExpiryDate:string;
    readonly sinNumber:string;
    readonly selectnationality:string;
    readonly selectmaritalstatus:string;
    readonly requiredsavebutton: string; 
    readonly maleRadioButton: string;
    readonly bloodtype: string;
    readonly customsavebutton :string;
    readonly attachmentAddButton :string;
    readonly clickonUploadBrowser :string;
    readonly attachmentComment :string;
    readonly attachmentSaveButton :string;
    readonly attachmentCancelButton :string;
    readonly selectRecord :string;
    readonly deleteSelected :string;
    readonly contatDetails :string;
    readonly street1 :string;
    readonly emergencyContacts :string;
    readonly add_AssignedEmergencyContacts :string;
    readonly name_AssignedEmergencyContacts :string;
    readonly relationship_AssignedEmergencyContacts :string;
    readonly mobile_AssignedEmergencyContacts :string;
   
   
    constructor(page: Page){
        this.page = page
        this.PIM = "//span[text()='PIM']";
        this.addemployee = "//a[contains(text(),'Add Employee')]";
        this.firstName = "//input[@placeholder='First Name']";
        this.middlename = "//input[@placeholder='Middle Name']";
        this.lastname = "//input[@placeholder='Last Name']";
        this.employeeId="(//label[text()='Employee Id']/following::div/input)";
        this.savebutton="//button[@type='submit']";
        this.otherID =`//label[normalize-space(text())='Other Id']//parent::div//following-sibling::div//input`;
        this.ssnNumber=`//label[text()='SSN Number']//parent::div//following-sibling::div//input`;
        this.driversLicenseNumber="";
        this.licenseExpiryDate=`//label[text()='License Expiry Date']//parent::div//following-sibling::div/div//input`;
        this.sinNumber =`//label[text()='SIN Number']//parent::div//following-sibling::div//input`;
        this.selectnationality = "(//div[@class='oxd-select-text--after']//i)[1]";
        this.selectmaritalstatus="(//div[@class='oxd-select-text oxd-select-text--active'])[2]";
        this.maleRadioButton= "//label[text()='Male']";
        this.requiredsavebutton = "//p[text()=' * Required']/following-sibling::button"
        this.bloodtype = "(//div[@class='oxd-select-text oxd-select-text--active'])[3]";
        this.customsavebutton = "(//form/following::div/hr/following::div/button)[1]";
        this.attachmentAddButton ="//button[text()=' Add ']";
        this.clickonUploadBrowser ="div.oxd-file-div.oxd-file-div--active";
        this.attachmentComment ="textarea[placeholder='Type comment here']";
        this.attachmentSaveButton = "//button[@type='button']/following-sibling::button";
        this.attachmentCancelButton ="button.oxd-button.oxd-button--medium.oxd-button--ghost";
        this.selectRecord ="oxd-table-card-cell-checkbox";
        this.deleteSelected ="//i[@class='oxd-icon bi-trash']";

        this.contatDetails ="//a[contains(text(),'Contact Details')]";
        this.street1 ="(//span[text()='Configuration ']/following::input)[1]";
        this.emergencyContacts ="//a[contains(text(),'Emergency Contacts')]";
        this.add_AssignedEmergencyContacts ="//h6[text()='Assigned Emergency Contacts']/following-sibling::button";

        this.name_AssignedEmergencyContacts ="(//label[text()='Name']/following::input)[1]";
        this.relationship_AssignedEmergencyContacts ="(//label[text()='Relationship']/following::input)[1]";
        this.mobile_AssignedEmergencyContacts ="(//input[@modelmodifiers='[object Object]'])[2]"
        // `//div[@class='oxd-form-row']//child::div//label[text()='Vacancy']//parent::div//following-sibling::div//child::div[@class='oxd-select-text-input']`,

    }
}