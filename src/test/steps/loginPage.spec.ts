import { Given, When, Then, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, chromium, Browser } from "@playwright/test";
import LoginPage from "../../../e2e/pageObject/login_Page"
import { myBrowserFixture } from "../../../e2e/common/fixtures";

let page: Page;
let loginpage: LoginPage;
let browser: Browser;

setDefaultTimeout(60 * 1000 * 2)

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    await loginpage.browserLaunch();
    await page.waitForTimeout(5000)
});
// 1) Scenario: User Verify the visible Components # src\test\features\loginPage.feature:6

Given('User Login to OrangeHrm application', async function () {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

});

Then('User verify the OrangeHRM Logo', async function () {
    await loginpage.logoVisibility();
});

Then('User verify the loginPage Logo', async function () {
    await loginpage.logoVisibility();

});
Then('User verify the username and password components', async function () {
    await loginpage.logoVisibility();


});

Then('User verify the username input and password input', async function () {
    await loginpage.logoVisibility();
    console.log("testing3")

});

Then('User verify the login button and forget password option', async function () {
    await loginpage.logoVisibility();
    console.log("testing4")

});


// 2) Scenario: User Login should be success # src\test\features\loginPage.feature:13


Then('User enter the username as {string}', async function (username) {
    console.log("testing")
    await loginpage.enterText("//input[@name='username']", username);


});

Then('User enter the password as {string}', async function (password) {
    await loginpage.enterText("//input[@name='password']", password);
    console.log("testing")

});

Then('User click on the login button', async function () {
    await loginpage.clickButton("//button[@type='submit']")
    console.log("testing")

});

Then('Login should be success', async function () {
    console.log("testing5")

});


// // // 3) Scenario: Verifying User should be able to click forget password button # src\test\features\loginPage.feature:19

Then('User should able to click the forgot password', async function () {
  console.log("testing6")
  await loginpage.forgotPassword()


});



Then('User Verify the Username Components', async function () {
  console.log("testing7")

});



Then('User Verify the Cancel button', async function () {
  console.log("testing8")

});



Then('User Verify the Reset Password button', async function () {
  console.log("testing9")

});



When('User Click the cancel button', async function () {
  console.log("testing10")

});



Then('verify the User back to login page', async function () {
  console.log("testing11")

});


// // 4) Scenario: Verifying User should be able reset password # src\test\features\loginPage.feature:27


// When('User should able to click the forgot password', async function () {
//     console.log("testing12")

// });



// Then('User pass the username in the input box', async function () {
//     console.log("testing13")


// });



// Then('User click the reset password', async function () {
//     console.log("testing14")


// });


// Then('verify the reset password success message', async function () {
//     console.log("testing15")


// });


// // 5) Scenario: Login should not be success # src\test\features\loginPage.feature:33


// Then('login should fail', async function () {
//     console.log("testing12")


// });









