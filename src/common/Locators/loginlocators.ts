import {Locator, Page} from '@playwright/test'

export class Loginlocators{
   
    readonly page: Page;
    readonly logoImg: string;
     readonly userName: string;
    readonly password: string;
    readonly usernameInput: string;
    readonly passwordInput : string;
    readonly loginBtn : string;
    readonly forgotPassword : string;
    readonly welcomeMessage : string;
    readonly logoutButton : string;
    readonly resetusernamecomponent : string;
    readonly resetusernameInput : string;
   
    constructor(page: Page){
        this.page = page
        this.logoImg = ".orangehrm-login-branding img ";
        this.userName = "//p[text()='Username : Admin']";
        this.password = "//p[text()='Password : admin123']";
        this.usernameInput = "//input[@name='username']"
        this.passwordInput = "//input[@name='password']"
        this.loginBtn = "///button[@type='submit']"
        this.forgotPassword = "//a[@id='forgotPasswordLink']"
        this.welcomeMessage = "//h1[@class='welcome-message']"
        this.logoutButton = "//button[@id='logoutButton']"
        this.resetusernamecomponent = "//input[@name='username']"
        this.resetusernameInput = "//input[@name='username']"
    }
}