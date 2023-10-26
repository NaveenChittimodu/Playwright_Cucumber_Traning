import { Page, expect, Locator } from "@playwright/test";

import {Performancelocators } from "../common/Locators/Performancelocators";
import {GenericPage } from "../../src/utils/Genericmethods";
import testdata from "../testData/json/perf_testData.json"


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
        await this.page.locator(this.performancelocators.keyindicator).fill(testdata.configure.key_indicatorName);
        await this.page.locator(this.performancelocators.Addkeyindicator).click();
        await this.genericmethods.selectDropDownElement(this.performancelocators.selectdropdown,testdata.configure.dropdown);
        await this.page.locator(this.performancelocators.minimum).click();
        await this.page.locator(this.performancelocators.minimum).clear();
        await this.page.locator(this.performancelocators.minimum).fill(testdata.configure.minValue);
        await this.page.locator(this.performancelocators.maximum).click();
        await this.page.locator(this.performancelocators.maximum).clear();
        await this.page.locator(this.performancelocators.maximum).fill(testdata.configure.maxValue);
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
        await this.page.locator(this.performancelocators.trackerName).fill(testdata.trackers.TrackerName);
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.performancelocators.employeeName).isVisible();;
        await this.page.locator(this.performancelocators.employeeName).click();
        await this.page.locator(this.performancelocators.employeeName).fill(testdata.trackers.employeeName);
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.performancelocators.employeeNametext).click();
        await this.page.locator(this.performancelocators.ReviewerName).isVisible();;
        await this.page.locator(this.performancelocators.ReviewerName).click();
        await this.page.locator(this.performancelocators.ReviewerName).fill(testdata.trackers.ReviewerName);
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.performancelocators.ReviewerNametext).click();
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
        await this.page.locator(this.performancelocators.employeeName).fill(testdata.manageReviews.employeeName);
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.performancelocators.ReviewerNametext).click();
        await this.page.locator(this.performancelocators.supervisorName).isVisible();;
        await this.page.locator(this.performancelocators.supervisorName).click();
        await this.page.locator(this.performancelocators.supervisorName).fill(testdata.manageReviews.supervisorName);
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.performancelocators.supervisorNameText).click();
        await this.page.locator(this.performancelocators.reviewPeriodStartDate).isVisible();;
        await this.page.locator(this.performancelocators.reviewPeriodStartDate).click();
        await this.page.locator(this.performancelocators.reviewPeriodStartDate).fill(testdata.manageReviews.reviewstartDate);
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.performancelocators.reviewPeriodEndDate).isVisible();;
        await this.page.locator(this.performancelocators.reviewPeriodEndDate).click();
        await this.page.locator(this.performancelocators.reviewPeriodEndDate).fill(testdata.manageReviews.reviewEndDate);
        await this.page.locator(this.performancelocators.reviewPeriodDueDate).isVisible();;
        await this.page.locator(this.performancelocators.reviewPeriodDueDate).click();
        await this.page.locator(this.performancelocators.reviewPeriodDueDate).fill(testdata.manageReviews.reviewDueDate);  
        await this.page.locator(this.performancelocators.required).isVisible();
        await this.page.locator(this.performancelocators.required).click();    
        await this.page.locator(this.performancelocators.save).isVisible();;
        await this.page.locator(this.performancelocators.save).click();    
    }


    async myTracker(){
        await this.page.locator(this.performancelocators.myTrackers).isVisible();
        await this.page.locator(this.performancelocators.myTrackers).click();
    }
    async  employeeTrackers(){
        await this.page.locator(this.performancelocators.employeeTrackers).isVisible();
        await this.page.locator(this.performancelocators.employeeTrackers).click();
    }
}
