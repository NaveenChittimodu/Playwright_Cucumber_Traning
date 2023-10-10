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
  await (await page.waitForSelector(loginlocators.loginBtn)).isVisible();
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
  await page.locator("//p[@class='oxd-userdropdown-name']").click({ force: true })
  await loginpage.LogoutBtn()

});


// 3) Scenario: Verifying User should be able to click forget password button # src\test\features\loginPage.feature:19

Then('User should able to click the forgot password', async function () {
<<<<<<< HEAD
  await loginpage.forgotPassword();
  await loginpage.resetPassword();
  console.log("testing6")
=======
  console.log("User able to complete forgot password btn")
  await loginpage.forgotPassword();
  await page.waitForTimeout(5000);

>>>>>>> d1b950ecd90d6d48fd3a0c88fcce62e5aafc5f45
});


Then('User Verify the Username Components', async function () {
<<<<<<< HEAD
  await (await page.waitForSelector(loginlocators.usernameInput)).isVisible();
  console.log("testing7") 
=======
  await loginpage.resetUserNameComponent();
  console.log("Verify the Username Components done")
>>>>>>> d1b950ecd90d6d48fd3a0c88fcce62e5aafc5f45
});



Then('User Verify the Cancel button', async function () {
<<<<<<< HEAD
  await loginpage.cancelbtn();
  console.log("testing8")
=======
  await loginpage.resetCancelBtn();
  console.log("User Verify the Cancel button done")

>>>>>>> d1b950ecd90d6d48fd3a0c88fcce62e5aafc5f45
});



Then('User Verify the Reset Password button', async function () {
<<<<<<< HEAD
  await loginpage.visit(`${ENV.BASEURL}`);
  await expect(page).toHaveURL(`${ENV.BASEURL}`);
  await page.waitForTimeout(5000);
  await loginpage.forgotPassword();
  await loginpage.resetPassword();
 
  console.log("testing9")
=======
  await loginpage.resetPasswordVerify()
  console.log("User Verify the Reset Password button")

>>>>>>> d1b950ecd90d6d48fd3a0c88fcce62e5aafc5f45
});



When('User Click the cancel button', async function () {
<<<<<<< HEAD
  await loginpage.cancelbtn();
  
  console.log("testing10")
=======
  await loginpage.cancelResetPW()
  console.log("User Click the cancel button")
>>>>>>> d1b950ecd90d6d48fd3a0c88fcce62e5aafc5f45

});

Then('verify the User back to login page', async function () {
<<<<<<< HEAD
  await expect(page).toHaveURL(`${ENV.BASEURL}`);
  console.log("testing11")
=======
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  console.log("verify the User back to login page")
>>>>>>> d1b950ecd90d6d48fd3a0c88fcce62e5aafc5f45

});


<<<<<<< HEAD
=======
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

>>>>>>> d1b950ecd90d6d48fd3a0c88fcce62e5aafc5f45

AfterAll(async () => {
  await page.close();
  await browser.close();
})











