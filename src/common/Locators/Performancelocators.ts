
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
    readonly ReviewerName : string;
    readonly manageReviews : string;


   
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

        // managereviews
        this.manageReviews = `//a[contains(text(),'Manage Reviews')]`



    }
}




// https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=0



