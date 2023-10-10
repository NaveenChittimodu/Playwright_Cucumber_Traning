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
    readonly logoutBTN :string;
    readonly resetPasswordCancelBtn: string;
    readonly resetPasswordVerifyBtn:string;
    readonly resetUsernameInput:string;
    readonly resetSuccessMessage:string;

   
    constructor(page: Page){
        this.page = page
        this.logoImg = ".orangehrm-login-branding img ";
        this.userName = "//p[text()='Username : Admin']";
        this.password = "//p[text()='Password : admin123']";
        this.usernameInput = "//input[@name='username']"
        this.passwordInput = "//input[@name='password']"
        this.loginBtn = "//button[@type='submit']"
        this.forgotPassword = "//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']"
        this.welcomeMessage = "//h1[@class='welcome-message']"
        this.logoutButton = "//button[@id='logoutButton']"
        this.logoutBTN="//a[text()='Logout']"
        this.resetusernamecomponent = "//input[@name='username']"
        this.resetusernameInput = "//input[@name='username']"
        this.resetPasswordCancelBtn="//button[@class='oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel']"
        this.resetPasswordVerifyBtn="//button[@class='oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset']"
        this.resetUsernameInput ="//input[@class='oxd-input oxd-input--active']";
        this.resetSuccessMessage="//h6[@class='oxd-text oxd-text--h6 orangehrm-forgot-password-title']";

        

    }
}