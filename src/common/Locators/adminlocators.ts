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
    readonly error_Alert : string;
    readonly editlanguages_Data  : string;
    readonly languages_recoundcount : string;
    readonly languages_Delete : string;
    readonly languages_YesDelete : string;
    
    // readonly mostRecentPosts : string;
    // readonly mostLikedPosts : string;
    // readonly mostCommentedPosts : string;
    // readonly mostRecentpostdata : string;
    // readonly mostLikedPostsdata : string;
    // readonly mostCommentedPostsdata : string;
    // readonly threeDots : string;
    // readonly deletePost : string;
    // readonly yesDeletePost : string;
    // readonly postComment : string;
    // readonly writeComment : string;
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
        this.error_Alert="//span[text()='Already exists']";
        this.editlanguages_Data="//div[text()='Hindi']";
        this.languages_recoundcount="//span[@class='oxd-text oxd-text--span']";
        this.languages_Delete="//div[text()='Hindi']/following::i[@class='oxd-icon bi-trash'][1]";
        this.languages_YesDelete="//button[text()=' Yes, Delete ']";
        
        
    }
}


