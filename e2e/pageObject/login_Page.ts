import { Page, expect } from "@playwright/test";

export default class LoginPage {
    readonly page: Page;
    readonly logoImg: string;
    readonly userName: string;
    readonly password: string;
    private inputUserName: any;
    private InputPassword: any;
    readonly LoginBtn: string;
    readonly invalidMsg: string;
    readonly alertDiv: string;
    readonly requiredMsg: string;
    readonly forgot_Password:string;


    constructor(page: Page) {
        this.page = page;
        this.logoImg = ".orangehrm-login-branding img ";
        this.userName = "//p[text()='Username : Admin']";
        this.password = "//p[text()='Password : admin123']";
        this.inputUserName = "//input[@name='username']";
        this.InputPassword = "//input[@name='password']";
        this.LoginBtn = "//button[@type='submit']";
        this.invalidMsg = `//p[text()='Invalid credentials']`;
        this.alertDiv = `//div[@role='alert']//div[1]`;
        this.requiredMsg = "(//span[text()='Required'])[1]"
        this.forgot_Password ="//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']";


    }
    async browserLaunch() {
        this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    async logoVisibility() {
        let logoValidation = await (await this.page.waitForSelector(this.logoImg)).isVisible();
        console.log(logoValidation)
    }
    async elementVisibility() {
        await (await this.page.waitForSelector(this.logoImg)).isVisible();
        await (await this.page.waitForSelector(this.userName)).isVisible();
        await (await this.page.waitForSelector(this.password)).isVisible();
        await (await this.page.waitForSelector(this.inputUserName)).isVisible();
        await (await this.page.waitForSelector(this.inputUserName)).isEditable();
        await (await this.page.waitForSelector(this.InputPassword)).isVisible();
        await (await this.page.waitForSelector(this.InputPassword)).isEditable();
        await (await this.page.waitForSelector(this.LoginBtn)).isVisible();

    }

    async enterLoginCredentials(username: any, password: any) {
        await this.page.locator(this.inputUserName).type(username);
        await this.page.locator(this.InputPassword).type(password);
        await this.page.locator(this.LoginBtn).click();
    }
    async invalidCredentilas() {
        await this.page.waitForTimeout(5000);
        return await this.page.locator(this.invalidMsg).textContent();
    }
    async required() {
        return await this.page.locator(this.requiredMsg).textContent();
    }

    async enterText(locator: string, enterTheText: string) {
        await expect(await this.page.locator(locator)).toBeEditable();
        await expect(await this.page.locator(locator)).toBeEmpty();
        await expect(await this.page.locator(locator)).toBeVisible();
        await this.page.locator(locator).click()
        await this.page.locator(locator).fill(enterTheText);
    }
    async clickButton(locator: string) {
        await this.page.waitForSelector(locator);
        await expect(await this.page.locator(locator)).toBeVisible();
        await this.page.locator(locator).click({ force: true });

    }
    async forgotPassword(){
        let forgot_password_visible = await this.page.locator(this.forgot_Password).isVisible()
        console.log(forgot_password_visible)
        await this.page.locator(this.forgot_Password).click()

    }


}
