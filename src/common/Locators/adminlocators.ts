import {Locator, Page} from '@playwright/test'

export class Adminlocators{
   
    readonly page: Page;
    readonly admin: string;
    readonly qualifications : string;
    readonly qualificationsmenu: string;
    readonly languages : string;
    readonly languages_Add: string;
    readonly languages_Name : string;
    readonly languages_Save : string;
    readonly languages_Data : string;
    readonly languages_Edit : string;
    readonly languages_errorAlert : string;
    readonly editlanguages_Data  : string;
    readonly languages_recordcount : string;
    readonly languages_Delete : string;
    readonly languages_YesDelete : string;
    
    readonly memberships : string;
    readonly memberships_Add : string;
    readonly memberships_Name : string;
    readonly memberships_Save : string;
    readonly memberships_Data : string;
    readonly memberships_Edit : string;
    readonly memberships_errorAlert : string;
    readonly editmemberships_Data : string;
    readonly memberships_recordcount : string;
    readonly memberships_Delete : string;
    readonly memberships_YesDelete : string;
    
    readonly nationalities : string;
    readonly nationalities_Add : string;
    readonly nationalities_Name: string;
    readonly nationalities_Save: string;
    readonly nationalities_Data : string;
    readonly nationalities_Edit : string;
    readonly nationalities_errorAlert : string;
    readonly editnationalities_Data : string;
    readonly nationalities_recordcount : string;
    readonly nationalities_Delete : string;
    readonly nationalities_YesDelete : string;
    readonly nationalities_Pages : string;
    readonly corporateBranding : string;
    readonly primaryFontColor : string;
    readonly primaryFontColor_Hex : string;
    readonly secondaryFontColor : string;
    readonly secondaryFontColor_Hex : string;
    readonly clientLogo_Browser : string;
    readonly clientBanner_Browser : string;
    readonly preview : string;
    readonly publish : string;
    readonly reset_to_Default : string;
    readonly configuration : string;
    readonly emailConfiguration : string;
    readonly emailConfiguration_components : string;
    readonly mailSent_As : string;
    readonly sendTestMail_on : string;
    readonly testEmailAddress : string;
    readonly emailSave : string;
    readonly sendTestMail_off : string;
    readonly emailReset : string;
    readonly brandLogo : string;
    readonly brandBanner : string;
    readonly chevron_Left : string;
    readonly email_Subscriptions : string;
    readonly emailSubscriptions_components : string;
    readonly leaveApplications_Action : string;
    readonly leaveApplications_Add : string;
    readonly leaveApplications_Name : string;
    readonly leaveApplications_Email : string;
    readonly leaveApplications_Cancel : string;
    readonly leaveApplications_Save : string;
    readonly leaveApplications_Recordcount : string;
    readonly leaveApplications_Trash : string;
    readonly leaveApplications_Edit : string;
    readonly leaveApplications_Yes_Delete : string;
    readonly Localization : string;
    

    constructor(page: Page){
        this.page = page
        this.admin = "//span[text()='Admin']";
        this.qualifications ="//span[text()='Qualifications ']";
        this.qualificationsmenu  ="//span[text()='Qualifications ']/following-sibling::ul"
        this.languages ="//a[contains(text(),'Languages')]";
        this.languages_Add ="//button[text()=' Add ']";
        this.languages_Name="//label[text()='Name']/following::input";
        this.languages_Save="//button[text()=' Save ']";
        this.languages_Data="//div[text()='Telugu']";
        this.languages_Edit="//div[text()='Telugu']/following::i[@class='oxd-icon bi-pencil-fill']";
        this.languages_errorAlert="//span[text()='Already exists']";
        this.editlanguages_Data="//div[text()='Hindi']";
        this.languages_recordcount="//span[@class='oxd-text oxd-text--span']";
        this.languages_Delete="//div[text()='Hindi']/following::i[@class='oxd-icon bi-trash'][1]";
        this.languages_YesDelete="//button[text()=' Yes, Delete ']";

        this.memberships="//a[contains(text(),'Memberships')]";
        this.memberships_Add="//h6[text()='Memberships']/following::i[@class='oxd-icon bi-plus oxd-button-icon']";
        this.memberships_Name="//label[text()='Name']/following::input";
        this.memberships_Save="//button[text()=' Save ']";
        this.memberships_Data="//div[text()='IPS']";
        this.memberships_Edit="//div[text()='IPS']/following::i[@class='oxd-icon bi-pencil-fill']";
        this.memberships_errorAlert="//span[text()='Already exists']";
        this.editmemberships_Data="//div[text()='ACCA']";
        this.memberships_recordcount="//span[@class='oxd-text oxd-text--span']";
        this.memberships_Delete="//div[text()='IAS']/following::i[@class='oxd-icon bi-trash'][1]";
        this.memberships_YesDelete="//button[text()=' Yes, Delete ']";

        this.nationalities="//a[contains(text(),'Nationalities')]";
        this.nationalities_Add="//h6[text()='Nationalities']/following::i[@class='oxd-icon bi-plus oxd-button-icon']";
        this.nationalities_Name="//label[text()='Name']/following::input";
        this.nationalities_Save="//button[text()=' Save ']";
        this.nationalities_Pages ="//button[text()='2']";
        this.nationalities_Data="//div[text()='India']";
        this.nationalities_Edit="(//div[text()='India']/following::i[@class='oxd-icon bi-pencil-fill'])[1]";
        this.nationalities_errorAlert="//span[text()='Already exists']";
        this.editnationalities_Data="//div[text()='Indo']";
        this.nationalities_recordcount="//span[@class='oxd-text oxd-text--span']";
        this.nationalities_Delete="//div[text()='Indo']/following::i[@class='oxd-icon bi-trash'][1]";
        this.nationalities_YesDelete="//button[text()=' Yes, Delete ']";

        this.corporateBranding ="//a[contains(text(),'Corporate Branding')]";
        this.primaryFontColor ="//label[text()='Primary Font Color']/following-sibling::div";
        this.primaryFontColor_Hex="//label[text()='HEX']/following-sibling::input";
        this.secondaryFontColor ="//label[text()='Secondary Font Color']/following-sibling::div";
        this.secondaryFontColor_Hex ="//label[text()='Secondary Font Color']/following::label[text()='HEX']/following-sibling::input"
        this.clientLogo_Browser="(//div[text()='Browse'])[1]";
        this.clientBanner_Browser="(//div[text()='Browse'])[2]";
        this.preview ="//button[text()=' Preview ']";
        this.publish = "//button[text()=' Publish ']";
        this.reset_to_Default ="//button[text()=' Reset to Default ']";
        this.brandLogo="//img[@alt='client brand logo']";
        this.brandBanner="//img[@alt='client brand banner']";
        this.chevron_Left="button[role='none']";

        this.configuration ="//span[text()='Configuration ']";
        this.emailConfiguration ="//a[contains(text(),'Email Configuration')]";
        this.emailConfiguration_components ="div.orangehrm-card-container";
        this.mailSent_As="(//label[text()='Mail Sent As']/following::input)[1]";
        this.sendTestMail_on ="//p[text()='Send Test Mail']/following-sibling::div";
        this.testEmailAddress = "//label[text()='Test Email Address']/following::input";
        this.emailSave = "//button[text()=' Save ']";
        this.sendTestMail_off="//span[contains(@class,'oxd-switch-input oxd-switch-input--active')]";
        this.emailReset="//button[text()=' Reset ']"; 
        
        this.email_Subscriptions="//a[contains(text(),'Email Subscriptions')]";
        this.emailSubscriptions_components="div.orangehrm-background-container";
        this.leaveApplications_Action="(//div[@class='oxd-table-cell-actions']//button)[1]";
        this.leaveApplications_Add ="//button[text()=' Add ']";
        this.leaveApplications_Name ="(//label[text()='Name']/following::input)[1]";
        this.leaveApplications_Email ="//label[text()='Email']/following::input";
        this.leaveApplications_Cancel ="//button[text()=' Cancel ']";
        this.leaveApplications_Save ="//button[text()=' Save ']";
        this.leaveApplications_Recordcount ="//span[@class='oxd-text oxd-text--span']";
        this.leaveApplications_Edit ="(//button[@type='button']/following-sibling::button)[1]";
        this.leaveApplications_Trash ="(//i[@class='oxd-icon bi-trash'])[1]";
        this.leaveApplications_Yes_Delete ="//button[text()=' Yes, Delete ']";
        
        this.Localization ="//a[contains(text(),'Localization')]"
        

    }
}


