import { Page, expect, Locator } from "@playwright/test";

import {Performancelocators } from "../common/Locators/Performancelocators";
import {GenericPage } from "../../src/utils/Genericmethods";


export class PerformancePage {
    readonly page: Page;
    private readonly performancelocators: Performancelocators;
    private  genericmethods: GenericPage;


    constructor(page: Page) {
        this.page = page;
        this.performancelocators = new Performancelocators(page);
        this.genericmethods = new GenericPage(page);
    }


    async clickPerformance(){
        await this.page.locator(this.performancelocators.performance).isVisible();
        await this.page.locator(this.performancelocators.performance).click();
    }
    async clickConfigure(){
        await this.page.locator(this.performancelocators.configure).isVisible();
        await this.page.locator(this.performancelocators.configure).click();
    }
    async clickKPIs(){
        await this.page.locator(this.performancelocators.configureKPIs).isVisible();
        await this.page.locator(this.performancelocators.configureKPIs).click();
    }
   

    async clickKPI_Addbtn(){
        await this.page.locator(this.performancelocators.addbtn).isVisible();
        await this.page.locator(this.performancelocators.addbtn).click();
    }
    

    async keyindicator_KPI(){
        await this.page.locator(this.performancelocators.keyindicator).isVisible();
        await this.page.locator(this.performancelocators.keyindicator).click();
        await this.page.locator(this.performancelocators.keyindicator).fill("key indicators1");
        await this.page.locator(this.performancelocators.Addkeyindicator).click();
        await this.genericmethods.selectDropDownElement(this.performancelocators.selectdropdown,"Customer Success Manager");
        await this.page.locator(this.performancelocators.minimum).click();
        await this.page.locator(this.performancelocators.minimum).clear();
        await this.page.locator(this.performancelocators.minimum).fill("30");
        await this.page.locator(this.performancelocators.maximum).click();
        await this.page.locator(this.performancelocators.maximum).clear();
        await this.page.locator(this.performancelocators.maximum).fill("80");
        await this.page.locator(this.performancelocators.save).click();
    }


    async clickTrackers(){
        await this.page.locator(this.performancelocators.configureTrackers).isVisible();
        await this.page.locator(this.performancelocators.configureTrackers).click();
    }

    async clickTracker_Addbtn(){
        await this.page.locator(this.performancelocators.addbtn).isVisible();
        await this.page.locator(this.performancelocators.addbtn).click();
    }


    async Trackers(){
        await this.page.locator(this.performancelocators.trackerName).isVisible();
        await this.page.locator(this.performancelocators.trackerName).click();
        await this.page.locator(this.performancelocators.trackerName).fill("Tracker2");
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.performancelocators.employeeName).isVisible();;
        await this.page.locator(this.performancelocators.employeeName).click();
        await this.page.locator(this.performancelocators.employeeName).fill("c");
        await this.page.waitForTimeout(3000)
        await this.page.locator(`//span[text()='Cecil  Bonaparte']`).click();
        await this.page.locator(this.performancelocators.ReviewerName).isVisible();;
        await this.page.locator(this.performancelocators.ReviewerName).click();
        await this.page.locator(this.performancelocators.ReviewerName).fill("n");
        await this.page.waitForTimeout(3000)
        await this.page.locator(`//span[text()='Odis  Adalwin']`).click();
        await this.page.locator(this.performancelocators.save).click();
    }

   
 async managefields(){
        await this.page.locator(this.performancelocators.managerReviews).isVisible();
        await this.page.locator(this.performancelocators.managerReviews).click();
    }

    async managefields_ManageReviews(){
        await this.page.locator(this.performancelocators.manageReviews).isVisible();
        await this.page.locator(this.performancelocators.manageReviews).click();
        await this.page.locator(this.performancelocators.addbtn).isVisible();
        await this.page.locator(this.performancelocators.addbtn).click();
    }

    async managePerformanceReview(){
        await this.page.locator(this.performancelocators.employeeName).isVisible();;
        await this.page.locator(this.performancelocators.employeeName).click();
        await this.page.locator(this.performancelocators.employeeName).fill("n");
        await this.page.waitForTimeout(3000)
        await this.page.locator(`//span[text()='Odis  Adalwin']`).click();
        await this.page.locator(this.performancelocators.supervisorName).isVisible();;
        await this.page.locator(this.performancelocators.supervisorName).click();
        await this.page.locator(this.performancelocators.supervisorName).fill("n");
        await this.page.waitForTimeout(3000)
        await this.page.locator(`//span[text()='John  Smith']`).click();
        await this.page.locator(this.performancelocators.reviewPeriodStartDate).isVisible();;
        await this.page.locator(this.performancelocators.reviewPeriodStartDate).click();
        await this.page.locator(this.performancelocators.reviewPeriodStartDate).fill("2023-10-25");
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.performancelocators.reviewPeriodEndDate).isVisible();;
        await this.page.locator(this.performancelocators.reviewPeriodEndDate).click();
        await this.page.locator(this.performancelocators.reviewPeriodEndDate).fill("2023-10-28");
        await this.page.locator(this.performancelocators.reviewPeriodDueDate).isVisible();;
        await this.page.locator(this.performancelocators.reviewPeriodDueDate).click();
        await this.page.locator(this.performancelocators.reviewPeriodDueDate).fill("2023-10-29");  
        await this.page.locator(`//p[text()=' * Required']`).isVisible();
        await this.page.locator(`//p[text()=' * Required']`).click();    
        await this.page.locator(this.performancelocators.save).isVisible();;
        await this.page.locator(this.performancelocators.save).click();    
    }
}
