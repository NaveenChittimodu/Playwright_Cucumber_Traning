// ***************** Importing Libraries ***********
// ***************** Auther Name: Kasthuri Kandavelu ************

import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_Page"
import { myBrowserFixture } from "../../../src/common/Fixtures/fixtures";
import ENV from "../../../src/utils/env";
import { Loginlocators } from "../../common/Locators/loginlocators";


let page: Page;
let loginpage: LoginPage;
let browser: Browser;
let loginlocators: Loginlocators;

setDefaultTimeout(60 * 1000 * 2)
 

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false, args: ['--window-position=-8,0'] });
  page = await browser.newPage();
  loginpage = new LoginPage(page);
  loginlocators = new Loginlocators(page);


});

// 1) Scenario: User Verify the visible Components # src\test\features\loginPage.feature:6

Given('User Login to OrangeHrm application', async function () {
  console.log("`${ENV.BASEURL}`======", `${ENV.BASEURL}`);
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
  await (await page.waitForSelector(loginlocators.forgotPassword)).isVisible();
  console.log("testing4")
});


// 2) Scenario: User Login should be success # src\test\features\loginPage.feature:13

Then('User enter the username', async function () {
  console.log("username", `${ENV.USERNAME}`)
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
  await page.waitForTimeout(5000);

  await loginpage.LogoutBtn()

});


// 3) Scenario: Verifying User should be able to click forget password button # src\test\features\loginPage.feature:19

Then('User should able to click the forgot password', async function () {
  console.log("User able to complete forgot password btn")
  await loginpage.forgotPassword();
  await page.waitForTimeout(5000);

});


Then('User Verify the Username Components', async function () {
  await loginpage.resetUserNameComponent();
  console.log("Verify the Username Components done")
});



Then('User Verify the Cancel button', async function () {
  await loginpage.resetCancelBtn();
  console.log("User Verify the Cancel button done")

});



Then('User Verify the Reset Password button', async function () {
  await loginpage.resetPasswordVerify()
  console.log("User Verify the Reset Password button")

});



When('User Click the cancel button', async function () {
  await loginpage.cancelResetPW()
  console.log("User Click the cancel button")

});

Then('verify the User back to login page', async function () {
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  console.log("verify the User back to login page")

});


// // 4) Scenario: Verifying User should be able reset password # src\test\features\loginPage.feature:27

Then('User pass the username in the input box', async function () {
  await loginpage.resetUserName(`${ENV.USERNAME}`);
  await page.waitForTimeout(3000)
  console.log("User pass the username in the input box")


});

Then('User click the reset password', async function () {
  await loginpage.clickResetPassword()
  await page.waitForTimeout(3000)
  console.log("User click the reset password")

});

Then('verify the reset password success message', async function () {
  await loginpage.verifyResetMessage()
  console.log("verify the reset password success message")


});


AfterAll(async () => {
  await page.close();
  await browser.close();
})











