import { Page, expect, Locator } from "@playwright/test";

import { Loginlocators } from "../common/Locators/loginlocators";


export class LoginPage {
    readonly page: Page;
    private readonly loginlocators: Loginlocators;


    constructor(page: Page) {
        this.page = page;
        this.loginlocators = new Loginlocators(page);
    }
    async visit(url: string) {
        this.page.goto(url)
    }
    async logoVisibility() {
        let logoValidation = await (await this.page.waitForSelector(this.loginlocators.logoImg)).isVisible();
        console.log(logoValidation)
    }

    async usernameComponent() {
        let usernameComponent = await (await this.page.waitForSelector(this.loginlocators.userName)).isVisible();
        console.log("Verification of usernameComponent:", usernameComponent)
    }

    async passwordComponent() {
        await (await this.page.waitForSelector(this.loginlocators.password)).isVisible();
    }

    async usernameinputComponent(username: string) {
        await (await this.page.waitForSelector(this.loginlocators.usernameInput)).isVisible();
        await (await this.page.waitForSelector(this.loginlocators.usernameInput)).isEditable();
        await this.page.locator(this.loginlocators.usernameInput).fill(username);
    }
    async resetUserName(username:string){
        await (await this.page.waitForSelector(this.loginlocators.resetUsernameInput)).isVisible();
        await (await this.page.waitForSelector(this.loginlocators.resetUsernameInput)).isEditable();
        await this.page.locator(this.loginlocators.usernameInput).fill(username);

    }

    async passwordinputComponent(password: string) {
        await (await this.page.waitForSelector(this.loginlocators.passwordInput)).isVisible();
        await (await this.page.waitForSelector(this.loginlocators.passwordInput)).isEditable();
        await this.page.locator(this.loginlocators.passwordInput).fill(password);
    }

    async loginbtn() {
        await (await this.page.waitForSelector(this.loginlocators.loginBtn)).isVisible();
        await this.page.locator(this.loginlocators.loginBtn).click({ force: true });
    }
    async LogoutBtn() {
        await this.page.locator(this.loginlocators.logoutBTN).click({ force: true })

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

    async forgotPassword() {
        let forgot_password_visible = await this.page.locator(this.loginlocators.forgotPassword).isVisible()
        console.log("=====ghzhtc", forgot_password_visible)
        await this.page.locator(this.loginlocators.forgotPassword).click();
    }
    async resetUserNameComponent() {
        let resetUserNameComponent = await (await this.page.waitForSelector(this.loginlocators.resetusernamecomponent)).isVisible();
        console.log("resetUserNameComponent:", resetUserNameComponent)

    }
    async resetCancelBtn() {
        let resetCancelBtnVerfy = await (await this.page.waitForSelector(this.loginlocators.resetPasswordCancelBtn)).isVisible();
        await (await this.page.waitForSelector(this.loginlocators.resetPasswordCancelBtn)).isEditable();
        console.log("resetCancelBtnVerify:", resetCancelBtnVerfy)

    }
    async resetPasswordVerify(){
        let resetPasswordVerify = await (await this.page.waitForSelector(this.loginlocators.resetPasswordVerifyBtn)).isVisible()
        console.log("resetPasswordVerify:",resetPasswordVerify)

    }
    async cancelResetPW(){
        // let cancelResetPW = await (await this.page.waitForSelector(this.loginlocators.resetPasswordCancelBtn)).isVisible()
        // console.log("cancelResetPW:",cancelResetPW)
        await this.page.locator(this.loginlocators.resetPasswordCancelBtn).click({force:true})
        await this.page.waitForTimeout(5000);
        
    }
    async clickResetPassword(){
        await (await this.page.waitForSelector(this.loginlocators.resetPasswordVerifyBtn)).click({force:true})
        console.log("clicked reset password button")
    }
    async verifyResetMessage(){
        let verifyResetMessage = await (await this.page.waitForSelector(this.loginlocators.resetSuccessMessage)).isVisible();
        let successMsg =await (await this.page.waitForSelector(this.loginlocators.resetSuccessMessage)).textContent()
        console.log(successMsg)
        console.log("Verification of usernameComponent:", verifyResetMessage)

    }
}
