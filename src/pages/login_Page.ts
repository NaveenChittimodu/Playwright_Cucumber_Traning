import { Page, expect,Locator } from "@playwright/test";

import { Loginlocators } from "../common/Locators/loginlocators";


export  class LoginPage {
    readonly page: Page;
    private readonly loginlocators: Loginlocators;
    

    constructor(page: Page) {
        this.page = page;
        this.loginlocators = new Loginlocators(page); 
    }
    async visit(url:string) {
        this.page.goto(url)
    }
    async logoVisibility() {
        let logoValidation = await (await this.page.waitForSelector(this.loginlocators.logoImg)).isVisible();
        console.log(logoValidation)
    }

    async usernameComponent(){
        await (await this.page.waitForSelector(this.loginlocators.userName)).isVisible();
    }

    async passwordComponent(){
        await (await this.page.waitForSelector(this.loginlocators.password)).isVisible();
    }

    async usernameinputComponent(username:string){
        await (await this.page.waitForSelector(this.loginlocators.usernameInput)).isVisible();
        await (await this.page.waitForSelector(this.loginlocators.usernameInput)).isEditable();
        await  this.page.locator(this.loginlocators.usernameInput).fill(username);
    }

    async passwordinputComponent(password :string){
        await (await this.page.waitForSelector(this.loginlocators.passwordInput)).isVisible();
        await (await this.page.waitForSelector(this.loginlocators.passwordInput)).isEditable();
        await  this.page.locator(this.loginlocators.passwordInput).fill(password);
    }
    
    async loginbtn(){
        await (await this.page.waitForSelector(this.loginlocators.loginBtn)).isVisible();
        await this.page.locator(this.loginlocators.loginBtn).click({force : true});
    }


    async fillValue(element: Locator, value: any) {
        await element.scrollIntoViewIfNeeded();
        await element.waitFor({ state: 'visible' });
        expect(await element.isVisible()).toBeTruthy();
        await element.fill(value);
    }

    // async invalidCredentilas() {
    //     await this.page.waitForTimeout(5000);
    //     return await this.page.locator(this.invalidMsg).textContent();
    // }
    // async required() {
    //     return await this.page.locator(this.requiredMsg).textContent();
    // }

    async clickElement(locator: string) {
        await this.page.waitForSelector(locator);
        await expect(await this.page.locator(locator)).toBeVisible();
        await this.page.locator(locator).click({ force: true });
    }

    async forgotPassword(){
        let forgot_password_visible = await this.page.locator(this.loginlocators.forgotPassword).isVisible()
        console.log("=====ghzhtc",forgot_password_visible)
        await this.page.locator(this.loginlocators.forgotPassword).click();
    }

    async loginOrangeHRM(userName: string , password : string){
        await this.logoVisibility();
        await this.usernameinputComponent(userName);
        await this.passwordinputComponent(password);
        await this.loginbtn();
     }
}
