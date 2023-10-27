
import {Locator, Page} from '@playwright/test'

export class Adminlocators{
   
    readonly page: Page;
    readonly admin: string;
    readonly job: string;
    readonly adminAddbtn: string;
    readonly userSelectdropdown: string;
    readonly admindropdown: string;
    readonly statusSelectdropdown: string;
    readonly statusdropdown: string;
    readonly employeename : string
    readonly userName : string
    readonly password : string
    readonly confirmPassword : string
    readonly jobTitles : string
    readonly jobTitle : string
    readonly payGrades : string
    readonly addbtn : string
    readonly paygradeName : string
    readonly save : string


   
    constructor(page: Page){
        this.page = page
        this.admin = "//span[text()='Admin']";
        this.job = "//span[text()='Job ']";
        this.adminAddbtn = "//button[text()=' Add ']";
        this.userSelectdropdown = `(//div[@class='oxd-select-text-input'])[1]`
        this.admindropdown = `//div/span[text() = 'Admin']`
        this.statusSelectdropdown = `(//div[@class='oxd-select-text-input'])[2]`
        this.statusdropdown = `//div/span[text() = 'Enabled']`
        this.employeename = `(//label[text()='Employee Name']/following::input)[1]`
        this.userName  = `(//label[text()='Username']/following::input)[1]`
        this.password  = `(//label[text()='Password']/following::input)[1]`
        this.confirmPassword  = `(//label[text()='Confirm Password']/following::input)[1]`

        //job titles
        this.jobTitles = `//a[text()='Job Titles']`
        this.jobTitle = `(//label[text()='Job Title']/following::input)[1]`


        //paygrades
        this.payGrades = `//a[text()='Pay Grades']`
        this.addbtn = `//button[text() = ' Add ']`
        // this.paygradeName = `//input[@placeholder='Search']`
        this.paygradeName = `//label[text()='Name']/following::input`
        this.save = `//button[text()=' Save ']`


        //
        
    }
}