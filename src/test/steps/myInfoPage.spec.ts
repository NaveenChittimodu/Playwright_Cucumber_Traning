import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_Page"
import { myBrowserFixture } from "../../../src/common/Fixtures/fixtures";
import ENV from "../../../src/utils/env";
import { MyInfoLocators } from "../../common/Locators/myInfoLocators";
import { MyInfoPage } from "../../pages/myInfo_Page";
import { CommonMethods } from "../../utils/commonMethods";
import { TimeLocators } from "../../common/Locators/timeLocators";



let page: Page;
let browser: Browser;
let loginpage: LoginPage;
let myInfoLocators: MyInfoLocators;
let timeLocators: TimeLocators;
let myInfoPage: MyInfoPage;
let commonMethods : CommonMethods

setDefaultTimeout(60 * 1000 * 2)

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false ,args: ['--window-position=-8,0']});
  page = await browser.newPage();
  loginpage = new LoginPage(page);
  myInfoLocators = new MyInfoLocators(page);
  timeLocators = new TimeLocators(page);
  myInfoPage = new MyInfoPage(page);
  commonMethods = new CommonMethods(page);

});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======",`${ENV.BASEURL}`);
    await loginpage.visit(`${ENV.BASEURL}`);
    await page.waitForTimeout(5000);
    await loginpage.loginOrangeHRM(`${ENV.USERNAME}`,`${ENV.PASSWORD}`);
  });

  When('User is able to fill the Employee fullName', async function () {
    await myInfoPage.navigateToMyInfo();
    await myInfoPage.employeeFullName();
    await myInfoPage.employeeMiddleName();
    await myInfoPage.employeeLastName();

});

When('User is able to fill the Employee Nickname', async function () {
    await myInfoPage.employeeNickName();
});

When('User is able to fill the Employee Id and Other Id', async function () {
    await myInfoPage.employeeID();
    await myInfoPage.employeeOtherID();
});

When('User is able to fill the Drivers License Number', async function () {
    await myInfoPage.employeeDriversLicenseNo();
});

When('User is able to select the License Expiry Date', async function () {
    await myInfoPage.employeeLicenseExpDate();
});

When('User is able to fill the SSN Number', async function () {
    await myInfoPage.employeeSSNNumber();
});

When('User is able to fill the SIN Number', async function () {
    await myInfoPage.employeeSSINumber();
});

When('User is able to select the Nationality', async function () {
    await myInfoPage.employeeNationality();
    await page.waitForTimeout(2000);
});

When('User is able to select the Marital Status', async function () {
    await myInfoPage.employeeMaritialStatus();
});

When('User is able to select the Date of Birth', async function () {
    await myInfoPage.employeeDOB();
});

When('User is able to select the Gender Radio options', async function () {
    await myInfoPage.employeeGender();
});

When('User is able to fill the Military Service textbox', async function () {
    await myInfoPage.employeeMilitaryService();
});

When('User is able to Check and Uncheck the Smoker checkbox', async function () {
    await myInfoPage.employeeSmoker();
});

Then('User is able to save the personal details', async function () {
    await myInfoPage.employeeSaveBtn();
    const toastText = await commonMethods.getToastMessageNew(timeLocators.attendanceDetails.timePageToastMsg);
    expect(toastText).toBe("Successfully Updated");
});

When('User is able to select the blood type', async function () {
    await myInfoPage.customBloodType();
});

Then('User is able to save the custom field details', async function () {
    await myInfoPage.customSaveBtn();
    const toastText = await commonMethods.getToastMessageNew(timeLocators.attendanceDetails.timePageToastMsg);
    expect(toastText).toBe("Successfully Saved");
});

When('User is able to attach the file using Add and Browse button', async function () {
    await myInfoPage.empFileUpload();
    const toastText = await commonMethods.getToastMessageNew(timeLocators.attendanceDetails.timePageToastMsg);
    expect(toastText).toBe("Successfully Saved");
});

When('User is able to fill the Comment in Add Attachment section', async function () {
    await myInfoPage.addComments();
});

When('User is able to save the Attachments', async function () {
    await myInfoPage.personalDetailsSaveBtn();
    const toastText = await commonMethods.getToastMessageNew(timeLocators.attendanceDetails.timePageToastMsg);
    expect(toastText).toBe("Successfully Saved");
});

When('User is able to Cancel the Attachments', async function () {
    await myInfoPage.personalDetailsCancelBtn();
});

When('User is able to fill the Address fields', async function () {
    await myInfoPage.contactDetailsAddressField();
});

When('User is able to fill the Telephone fields', async function () {
    await myInfoPage.contactDetailsTelephoneField();
});

When('User is able to fill the Email fields and user is able to save all the entered field values and verify the toast message - from step 23 to 24', async function () {
    await myInfoPage.contactDetailsEmailField();
    const toastMsg = await commonMethods.getToastMessageNew(myInfoLocators.contactDetails.contactDetailsToastMsg);
    await expect(toastMsg).toBe("Successfully Updated");
});

When('User is able to fill the Assigned Emergency Contacts fields', async function () {
    await myInfoPage.emergencyDetails();
    const toastMsg = await commonMethods.getToastMessageNew(myInfoLocators.contactDetails.contactDetailsToastMsg);
    await expect(toastMsg).toBe("Successfully Saved");
});

When('User is able to fill the Add and save Dependents fields', async function () {
    await myInfoPage.dependentsDetails();
    const toastMsg = await commonMethods.getToastMessageNew(myInfoLocators.contactDetails.contactDetailsToastMsg);
    await expect(toastMsg).toBe("Successfully Saved");
});

When('User is able to fill the Add Immigration fields and save the details', async function () {
    await myInfoPage.immigrationDetails();
    // const toastMsg = await commonMethods.getToastMessageNew(myInfoLocators.contactDetails.contactDetailsToastMsg);
    // await expect(toastMsg).toBe("Successfully Saved");
});

When('Verify the Job Details fields is filled with value and user is able to click on Include Employment Contract Details checkbox - from step 31 to 32', async function () {
    await myInfoPage.jobDetails();
}); 

When('User is able to click on Include Employment Contract Details checkbox', async function () {
    await myInfoPage.jobDetails();
    // const toastMsg = await myInfoPage.getToastMessage()
    // await expect(toastMsg).toBe("Successfully Saved");
    // await page.waitForTimeout(5000);
});

When('User is able to fill the Work Experience fields', async function () {
    await myInfoPage.qualificationDetails();
    // const toastMsg = await commonMethods.getToastMessageNew(myInfoLocators.contactDetails.contactDetailsToastMsg);
    // await expect(toastMsg).toBe("Successfully Saved");
});

When('User is able to fill the Education fields', async function () {
    await myInfoPage.educationDetails();
});

When('User is able to fill the Skills fields', async function () {
    await myInfoPage.skillDetails();
});

When('User is able to fill the Languages fields', async function () {
    await myInfoPage.languageDetails();
});

When('User is able to fill the License fields', async function () {
    await myInfoPage.navigateToMyInfo();
});

When('User is able to fill the License fields1', async function () {
    await myInfoPage.licenseDetails();
});


// AfterAll(async () => {
//     await page.close();
//     await browser.close();
//   });