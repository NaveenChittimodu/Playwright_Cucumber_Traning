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
    readonly cancelBtn : string;
    readonly usernameresetInput : string;
    readonly resetPassword : string;
   
    constructor(page: Page){
        this.page = page
        this.logoImg = ".orangehrm-login-branding img ";
        this.userName = "//p[text()='Username : Admin']";
        this.password = "//p[text()='Password : admin123']";
        this.usernameInput = "//input[@name='username']"
        this.usernameresetInput = "///label[text()='Username']/following::input"
        this.passwordInput = "//input[@name='password']"
        this.loginBtn = "//button[@type='submit']"
        this.cancelBtn = "//button[text()=' Cancel ']"
        // this.forgotPassword = "//button[text()=' Reset Password ']"
        this.forgotPassword = "//button[text()='Forgot your password? ']"
        this.resetPassword = "//p[text()=' Reset Password ']"
        // this.resetPassword = "//p[text()='Forgot your password? ']"
        this.welcomeMessage = "//h1[@class='welcome-message']"
        this.logoutButton = "//button[@id='logoutButton']"
        
    }
}