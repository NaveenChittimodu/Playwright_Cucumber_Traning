// import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
// import { chromium, Page, Browser, expect } from "@playwright/test";
// import { LoginPage } from "../../../e2e/pageObject/loginPage";

// let browser: Browser;
// let page: Page;
// let loginPage: LoginPage;
// setDefaultTimeout(60*1000*2)

// Given('User navigate to the application', async function () {
//     browser = await chromium.launch({ headless: false });// need to change
//     page = await browser.newPage();
//     loginPage = new LoginPage(page);
//     await loginPage.gotoLoginPage();


// });


// Then('User click on the login link', async function () {
//     // await page.waitForTimeout(2000)
//     let login = await loginPage.clickButton(loginPage.login);
//     console.log("loginpage.login:", login)
//     console.log("login sucess")

// });


// Then('User enter the username as {string}', async function (username: string) {
//     await loginPage.enterText(loginPage.username, username);
//     console.log("username:", username)
// });

// Then('User enter the password as {string}', async function (password: string) {
//     await loginPage.enterText(loginPage.password, password);
//     console.log("passwordname:", password)
// });

// When('User click on the login button', async function () {
//     await loginPage.clickButton(loginPage.click);
// });

// Then('Login should be success', async function () {
//     const afterLoginText = await loginPage.getText(loginPage.afterLogin);
//     console.log("login sucessfully:", afterLoginText)
//     await expect(await afterLoginText).toBe("Welcome pavanol")
//     await browser.close()

// });


// Then('login should fail', async function () {
//     // await loginPage.clickButton(loginPage.click);
//     await loginPage.handleAlert( "User does not exist.");
//     console.log("user not exixting")
//     await browser.close()
//     // await loginPage.clickButton(loginPage.clickCloseBtn);
//     // console.log("user clicked on close button")
//     // const loginText = await loginPage.getText(loginPage.login);
//     // console.log("Login Attempt Failed :", loginText);
//     // await expect(loginText).toBe("Log in");
// });


