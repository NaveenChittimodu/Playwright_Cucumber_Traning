
import {Locator, Page} from '@playwright/test'

export class Performancelocators{
   
    readonly page: Page;
    readonly performance: string;
    readonly configure: string;
    readonly managerReviews: string;
    readonly configureKPIs: string;
    readonly configureTrackers: string;
    readonly addbtn: string;
    readonly keyindicator: string;
    readonly Addkeyindicator: string;
    readonly dropdown : string;
    readonly minimum : string;
    readonly maximum : string;
    readonly selectdropdown : string;
    readonly save : string;
    readonly trackerName : string;
    readonly  employeeName: string;
    readonly  employeeNametext: string;
    readonly  supervisorName: string;
    readonly  supervisorNameText: string;
    readonly ReviewerName : string;
    readonly ReviewerNametext : string;
    readonly manageReviews : string;
    readonly reviewPeriodStartDate : string;
    readonly reviewPeriodEndDate : string;
    readonly reviewPeriodDueDate : string;
    readonly required : string;


   
    constructor(page: Page){
        this.page = page
        this.performance = "//span[text()='Performance']";
        this.configure = "//span[text()='Configure ']";
        this.managerReviews = "//span[text()='Manage Reviews ']";
        this.configureKPIs = "//li/a[text() = 'KPIs']";
        this.configureTrackers = "//a[text()='Trackers']";
        this.addbtn = "//button[text()=' Add ']";
        this.keyindicator = "(//label[text()='Key Performance Indicator']/following::div/input)[1]";
        this.minimum = "(//label[text()='Minimum Rating']/following::input)[1]";
        this.maximum = "(//label[text()='Maximum Rating']/following::input)[1]";
        this.Addkeyindicator = "//p[text() ='Add Key Performance Indicator']"
        this.selectdropdown = `.oxd-select-text-input`
        this.dropdown = `//div/span[text() = 'Chief Financial Officer']`
        this.save = `//button[text()=' Save ']`

        this.trackerName = `(//label[text()='Tracker Name']/following::input)[1]`
        this.employeeName = `(//label[text()='Employee Name']/following::input)[1]`
        this.ReviewerName = `//label[text()='Reviewers']/following::input`
        this.ReviewerNametext = `//span[text()='Odis  Adalwin']`
        this.employeeNametext = `//span[text()='Cecil  Bonaparte']`
        this.supervisorNameText = `//span[text()='John  Smith']`


        // managereviews
        this.manageReviews = `//a[contains(text(),'Manage Reviews')]`

        this.reviewPeriodStartDate = `(//label[text()='Review Period Start Date']/following::input)[1]`
        this.reviewPeriodEndDate = `(//label[text()='Review Period End Date']/following::input)[1]`
        this.reviewPeriodDueDate = `(//label[text()='Due Date']/following::input)[1]`
        this.supervisorName = `(//label[text()='Supervisor Reviewer']/following::input)[1]`
        this.required = `//p[text()=' * Required']`

    }
}




// https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=0



