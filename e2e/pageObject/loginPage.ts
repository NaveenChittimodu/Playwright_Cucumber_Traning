// import { Page, expect, chromium, Browser } from "@playwright/test";

// export class LoginPage {
//     public page: Page;
//     readonly login: string;
//     readonly username: any;
//     readonly password: any;
//     readonly click: any;
//     readonly cancel: any;
//     readonly loginTitle: any;
//     readonly afterLogin: any;
//     readonly clickLoginBtn:any;
//     readonly clickCloseBtn:any;


//     constructor(page: Page) {
//         this.page = page;
//         this.login = "//a[@id='login2']";
//         this.username = "//*[@id='loginusername']";//*[@id="loginusername"]
//         this.password = "//input[@id='loginpassword']";
//         this.click = "//button[text()='Log in']";
//         this.cancel = "(//div[@class='modal-footer']//child::button[text()='Close'])[4]";
//         this.loginTitle = "//h5[@id='logInModalLabel']";
//         this.afterLogin = "//a[@id='nameofuser']";
//         this.clickLoginBtn="//button[text()='Log in']";
//         this.clickCloseBtn="(//button[text()='Close'])[3]";
//     }

//     async gotoLoginPage() {
//         await this.page.goto("https://www.demoblaze.com/index.html");
//     }

//     async getText(locator: string) {
//         await this.page.waitForSelector(locator)
//         return await this.page.locator(locator).textContent();
//     }

//     async enterText(locator: string, enterTheText: string) {
//         // await expect(await this.page.locator(locator)).toBeEditable();
//         // await expect(await this.page.locator(locator)).toBeEmpty();
//         await expect(await this.page.locator(locator)).toBeVisible();
//         // await expect(await this.page.locator(locator)).toBeEnabled();
//         await this.page.locator(locator).click()
//         // await this.page.locator(locator).fill(enterTheText);
//         await this.page.locator(locator).type(enterTheText);
//     }

//     async clickButton(locator: string) {
//         await this.page.waitForSelector(locator);
//         await expect(await this.page.locator(locator)).toBeVisible();
//         await this.page.locator(locator).click({ force: true });
        
//     }
//     async handleAlert(expectedMessage: string ) {
//         // const popup = await this.page.waitForSelector("ok");
//         // await popup.click();
//         // await this.page.waitForSelector(locator);
//         // await this.page.locator(locator).click({ force: true });
//         const dialog = await this.page.waitForEvent('dialog');
//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain(expectedMessage);
//         // const popup = await this.page.waitForSelector("ok");
//         // await popup.click({ force: true });
//         await dialog.accept();
        
//     }
// }

