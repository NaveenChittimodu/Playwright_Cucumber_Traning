
import {Locator, Page} from '@playwright/test'

export class Performancelocators{
   
    readonly page: Page;
    readonly performance: string;
    readonly configure: string;
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


   
    constructor(page: Page){
        this.page = page
        this.performance = "//span[text()='Performance']";
        this.configure = "//span[text()='Configure ']";
        this.configureKPIs = "//li/a[text() = 'KPIs']";
        this.configureTrackers = "//a[text()='Trackers']";
        this.addbtn = "//button[text()=' Add ']";
        this.keyindicator = "(//label[text()='Key Performance Indicator']/following::div/input)[1]";
        this.minimum = "(//label[text()='Minimum Rating']/following::input)[1]";
        this.maximum = "(//label[text()='Maximum Rating']/following::input)[1]";
        this.Addkeyindicator = "//p[text() ='Add Key Performance Indicator']"
        this.selectdropdown = `.oxd-select-wrapper`//`//div[@class='oxd-select-text-input']`
        this.dropdown = `//div[text()='Account Assistant'] .oxd-select-dropdown .oxd-select-option`//div[@role='listbox']`
        this.save = `//button[text()=' Save ']`

        this.trackerName = `(//label[text()='Tracker Name']/following::input)[1]`
        this.employeeName = `(//label[text()='Tracker Name']/following::input)[1]`
        this.ReviewerName = `(//label[text()='Tracker Name']/following::input)[1]`


    }
}