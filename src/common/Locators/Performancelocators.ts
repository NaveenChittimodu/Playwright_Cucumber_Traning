
import {Locator, Page} from '@playwright/test'

export class Performancelocators{
   
    readonly page: Page;
    readonly performance: string;
    readonly configure: string;
    readonly configureKPIs: string;
    readonly configureTrackers: string;
    readonly addbtn: string;
    readonly keyindicator: string;
    readonly dropdown : string;
    readonly dropdownlocator : string;
    readonly selectdropdown : string;


   
    constructor(page: Page){
        this.page = page
        this.performance = "//span[text()='Performance']";
        this.configure = "//span[text()='Configure ']";
        this.configureKPIs = "//li/a[text() = 'KPIs']";
        this.configureTrackers = "//li/a[text() = 'Trackers']";
        this.addbtn = "//button[text()=' Add ']";
        this.keyindicator = "(//label[text()='Key Performance Indicator']/following::div/input)[1]";
        this.selectdropdown = `div.oxd-select-text`
        this.dropdownlocator= `div.oxd-select-dropdown div[role='listbox']`
        this.dropdown = `div.oxd-select-dropdown`

    }
}