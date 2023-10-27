import {Locator, Page} from '@playwright/test'

export class Directorylocators{
   
    readonly page: Page;
    readonly directory: string;
    readonly collapseIcon: string;
    readonly expandIcon : string;
    readonly expandIcon_data : string;
    readonly employeeName : string;
    readonly selelct_employeeName : string;
    readonly jobTitle: string;
    readonly selelct_jobTitle : string;
    readonly location : string;
    readonly selelct_location : string;
    readonly directorySearch : string
    readonly employeeDirectory : string
    readonly employeeDirectorydata : string

    constructor(page: Page){
        this.page = page
        this.directory = "//span[text()='Directory']";
        this.collapseIcon = "i.oxd-icon.bi-caret-up-fill";
        this.expandIcon="//i[@class='oxd-icon bi-caret-down-fill']";
        this.expandIcon_data ="div.oxd-form-row";
        this.employeeName ="input[placeholder='Type for hints...']";
        this.selelct_employeeName="//span[text()='Peter Mac Anderson']";
        this.jobTitle ="(//div[text()='-- Select --'])[1]";
        this.selelct_jobTitle="//span[text()='Chief Financial Officer']";
        this.location ="//div[text()='-- Select --']";
        this.selelct_location ="//span[text()='New York Sales Office']";
        this.directorySearch ="//button[text()=' Search ']";
        this.employeeDirectory ="div.oxd-sheet.oxd-sheet--rounded";
        this.employeeDirectorydata="div.orangehrm-corporate-directory-sidebar";
    }

}

