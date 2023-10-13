import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_Page"
import { myBrowserFixture } from "../../../src/common/Fixtures/fixtures";
import ENV from "../../../src/utils/env";
import { Loginlocators } from "../../common/Locators/loginlocators";
import { Recruitmentlocators } from "../../common/Locators/recruitmentLocators";
import { RecruitmentPage } from "../../pages/recruitment_Page";



let page: Page;
let browser: Browser;
let loginpage: LoginPage;
let recruitmentPage : RecruitmentPage;
let recruitmentLocators : Recruitmentlocators;


setDefaultTimeout(60 * 1000 * 2)


BeforeAll(async () => {
  browser = await chromium.launch({ headless: false ,args: ['--window-position=-8,0']});
  page = await browser.newPage();
  loginpage = new LoginPage(page);
  recruitmentPage = new RecruitmentPage(page);
  recruitmentLocators = new Recruitmentlocators(page);

});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======",`${ENV.BASEURL}`);
    await loginpage.visit(`${ENV.BASEURL}`);
    await page.waitForTimeout(5000);
    await loginpage.loginOrangeHRM(`${ENV.USERNAME}`,`${ENV.PASSWORD}`);
  });

When('User is able to see Recruitment page', async function () {
    await recruitmentPage.navigateToRecruitment();
    await expect(page.url()).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates");
    await page.waitForTimeout(5000);
});

When('User should able to see all the components in the Candidates page', async function () {
    await recruitmentPage.candidatesAllComponents();
    await expect(page.url()).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates");
    await page.waitForTimeout(5000);
});

When('User is able to add a new Candidates.', async function () {
    await recruitmentPage.clickAddButton();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate");
    await page.waitForTimeout(5000);
});

When('User verify all the components in the add new Candidates page', async function () {
    await recruitmentPage.newCandidatesAllComponents();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate");
    await page.waitForTimeout(5000);
});

// When('User cannot able to create a candidate with all the negative and invalid data', async function () {
//     await recruitmentPage.addNewCandidateWithBlankData();
//     await recruitmentPage.clickCandidates();
//     await recruitmentPage.clickAddButton();
//     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate");
//     await page.waitForTimeout(5000);
// });

When('User can able to create a candidate with all the positive and valid data', async function () {
    await recruitmentPage.addNewCandidate();
    const toastMsg = await recruitmentPage.getToastMessage()
    await expect(toastMsg).toBe("Successfully Saved");
    await page.waitForTimeout(5000);
});

When('User is able to click Vacancy TAB.', async function () {
    await recruitmentPage.clickVacancies();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewJobVacancy");
    await page.waitForTimeout(5000);
});

When('User should able to see all the components in the Vacancies page', async function () {
    await recruitmentPage.vacanciessAllComponents();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewJobVacancy");
    await page.waitForTimeout(5000);
});

When('User is able to add a new Vacancies.', async function () {
    await recruitmentPage.clickVacancyAddButton();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addJobVacancy");
    await page.waitForTimeout(5000);
});

When('User verify all the components in the add new Vacancies page', async function () {
    await recruitmentPage.newVacanciesAllComponents();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addJobVacancy");
    await page.waitForTimeout(5000);
});

When('User cannot able to create a Vacancie with all the negative and invalid data', async function () {
    await recruitmentPage.addNewVacancieWithInvalidData();
    await recruitmentPage.clickVacancies();
    await recruitmentPage.clickVacancyAddButton();
    // await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addJobVacancy");
    await page.waitForTimeout(5000);
});

When('User can able to create a Vacancie with all the positive and valid data', async function () {
    await recruitmentPage.addNewVacancie();
    // await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addJobVacancy");
    await page.waitForTimeout(5000);
});

AfterAll(async () => {
    await page.close();
    await browser.close();
  })