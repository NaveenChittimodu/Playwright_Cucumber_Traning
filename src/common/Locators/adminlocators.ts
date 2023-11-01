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
    // readonly postShareIcon : string;
    // readonly postSharedata : string;
    // readonly shareInShareIcon : string;
    // readonly postHeart : string;
    // readonly postLikecount : string;
    // readonly sharecount : string;
    // readonly commentCount : string;
    // readonly upcomingAnniversaries : string;
    // readonly upcomingAnniversariesdata : string;
    
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
        
    }
}


