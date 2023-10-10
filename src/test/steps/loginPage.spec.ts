import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_Page"
import { myBrowserFixture } from "../../../src/common/Fixtures/fixtures";
import ENV from "../../../src/utils/env";
import { Loginlocators } from "../../common/Locators/loginlocators";
// Playwright_Cucumber_Traning\src\common\Locators\loginlocators.ts

let page: Page;
let loginpage: LoginPage;
let browser: Browser;
let loginlocators : Loginlocators;

setDefaultTimeout(60 * 1000 * 2)


BeforeAll(async () => {
  browser = await chromium.launch({ headless: false ,args: ['--window-position=-8,0']});
  page = await browser.newPage();
  loginpage = new LoginPage(page);
  loginlocators = new Loginlocators(page);
});

// 1) Scenario: User Verify the visible Components # src\test\features\loginPage.feature:6

Given('User Login to OrangeHrm application', async function () {
  console.log("`${ENV.BASEURL}`======",`${ENV.BASEURL}`);
  await loginpage.visit(`${ENV.BASEURL}`);
  await page.waitForTimeout(5000);
});

Then('User verify the OrangeHRM Logo', async function () {
  await loginpage.logoVisibility();
  console.log("testing logo");
});

Then('User verify the loginPage Logo', async function () {
  await loginpage.logoVisibility();
  console.log("testing1");
});

Then('User verify the username and password components', async function () {
  await loginpage.usernameComponent();
  await loginpage.passwordComponent();
  console.log("testing2");
});

Then('User verify the username input and password input', async function () {
  await (await page.waitForSelector(loginlocators.usernameInput)).isVisible();
  await (await page.waitForSelector(loginlocators.passwordInput)).isVisible();
  console.log("testing3");
});

Then('User verify the login button and forget password option', async function () {
  await (await page.waitForSelector(loginlocators.loginBtn)).isVisible();
  await (await page.waitForSelector(loginlocators.loginBtn)).isVisible();
  console.log("testing4")
});


// 2) Scenario: User Login should be success # src\test\features\loginPage.feature:13

Then('User enter the username', async function () {
  console.log("username",`${ENV.USERNAME}`)
  await loginpage.usernameinputComponent(`${ENV.USERNAME}`);
});

Then('User enter the password', async function () {
  console.log(" password", `${ENV.PASSWORD}`)
  await loginpage.passwordinputComponent(`${ENV.PASSWORD}`);

});

Then('User click on the login button', async function () {
  await loginpage.loginbtn();
  console.log("login button");

});

Then('Login should be success', async function () {
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  console.log("testing5")

});


// 3) Scenario: Verifying User should be able to click forget password button # src\test\features\loginPage.feature:19

Then('User should able to click the forgot password', async function () {
  await loginpage.forgotPassword();
  await loginpage.resetPassword();
  console.log("testing6")
});


Then('User Verify the Username Components', async function () {
  await (await page.waitForSelector(loginlocators.usernameInput)).isVisible();
  console.log("testing7") 
});



Then('User Verify the Cancel button', async function () {
  await loginpage.cancelbtn();
  console.log("testing8")
});



Then('User Verify the Reset Password button', async function () {
  await loginpage.visit(`${ENV.BASEURL}`);
  await expect(page).toHaveURL(`${ENV.BASEURL}`);
  await page.waitForTimeout(5000);
  await loginpage.forgotPassword();
  await loginpage.resetPassword();
 
  console.log("testing9")
});



When('User Click the cancel button', async function () {
  await loginpage.cancelbtn();
  
  console.log("testing10")

});



Then('verify the User back to login page', async function () {
  await expect(page).toHaveURL(`${ENV.BASEURL}`);
  console.log("testing11")

});



AfterAll(async () => {
  await page.close();
  await browser.close();
})











