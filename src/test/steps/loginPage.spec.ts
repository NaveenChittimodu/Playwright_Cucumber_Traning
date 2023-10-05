import { Given, When, Then, Before, BeforeAll } from "@cucumber/cucumber";
import { Page, chromium ,Browser} from "@playwright/test";
import{LoginPage} from "../../../e2e/pageObject/login_Page"
import { myBrowserFixture } from "../../../e2e/common/fixtures";

let page : Page;
let loginpage : LoginPage;
let browser : Browser;
BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginpage = new LoginPage(page);
  await loginpage.browserLaunch();
});




// 1) Scenario: User Verify the visible Components # src\test\features\loginPage.feature:6

Given('User Login to OrangeHrm application', async function () {
  // page = (await myBrowserFixture()).page;
  // loginpage = new LoginPage(page);
    const browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    await loginpage.browserLaunch();  

});

Then('User verify the OrangeHRM Logo', async function () {
  await loginpage.elementVisibility();

});



Then('User verify the loginPage Logo', async function () {
  console.log("testing")

});


Then('User verify the username and password components', async function () {
  console.log("testing")

});



Then('User verify the username input and password input', async function () {
  console.log("testing")

});



Then('User verify the login button and forget password option', async function () {
  console.log("testing")

});


// 2) Scenario: User Login should be success # src\test\features\loginPage.feature:13

Given('User Login to OrangeHrm application', async function () {
  console.log("testing")

});



When('User enter the username as {string}', async function (string) {
  console.log("testing")

});



When('User enter the password as {string}', async function (string) {
  console.log("testing")

});



When('User click on the login button', async function () {
  console.log("testing")

});



Then('Login should be success', async function () {
  console.log("testing")

});


// 3) Scenario: Verifying User should be able to click forget password button # src\test\features\loginPage.feature:19

Given('User Login to OrangeHrm application', async function () {
  console.log("testing")

});



Then('User should able to click the forgot password', async function () {
  console.log("testing")

});



Then('User Verify the Username Components', async function () {
  console.log("testing")

});



Then('User Verify the Cancel button', async function () {
  console.log("testing")

});



Then('User Verify the Reset Password button', async function () {
  console.log("testing")

});



When('User Click the cancel button', async function () {
  console.log("testing")

});



Then('verify the User back to login page', async function () {
  console.log("testing")

});


// 4) Scenario: Verifying User should be able reset password # src\test\features\loginPage.feature:27

Given('User Login to OrangeHrm application', async function () {
  console.log("testing")

});


When('User should able to click the forgot password', async function () {

});



Then('User pass the username in the input box', async function () {

});



Then('User click the reset password', async function () {

});


Then('verify the reset password success message', async function () {

});


// 5) Scenario: Login should not be success # src\test\features\loginPage.feature:33

Given('User Login to OrangeHrm application', async function () {

});


Then('User enter the username as {string}', async function (string) {

});


Then('User enter the password as {string}', async function (string) {

});


When('User click on the login button', async function () {

});


Then('login should fail', async function () {

});









