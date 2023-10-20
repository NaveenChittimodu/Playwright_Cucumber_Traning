import { expect,Locator, Page } from "@playwright/test";
import { Recruitmentlocators } from "../common/Locators/recruitmentLocators";
import { Loginlocators } from "../common/Locators/loginlocators";
import { urlToHttpOptions } from "url";

export class RecruitmentPage {
    readonly page: Page; middleName: any = ''; vacancyName: any = '';

    readonly recruitmentLocators: Recruitmentlocators;

    constructor(page: Page) {
        this.page = page;
        this.recruitmentLocators = new Recruitmentlocators(page);
    }

    async selectDropDownElements(clickDropDownLocator: string,dropdownLocator: string, dropDownValue: string) {
        try {
            await this.page.locator(clickDropDownLocator).click();
            await this.page.waitForTimeout(1000);
            const dropdownOptions = await this.page.$$(dropdownLocator);
            console.log(dropdownOptions);

            for (const dropdownoption of dropdownOptions) {
                
                if (await dropdownoption.isVisible() && await dropdownoption.isEnabled()) {
                    const dropdowntext = await dropdownoption.textContent();
                    console.log(dropdowntext);
                    
                    if (dropdowntext === dropDownValue) {
                        await dropdownoption.click();
                        console.log(`Selected option: ${dropDownValue}`);
                        return; 
                    }
                }
            }
    
            console.error(`Option "${dropDownValue}" was not found or not interactable.`);
        } catch (error) {
            console.error('Error selecting dropdown option:', error);
        
        }
    }

    async vacancyNameAutoGenerate() {
        if (this.vacancyName === '') {
            let num = Math.floor(Math.random() * 3 + 919);
            this.vacancyName = 'Test Vacancy ' + num.toString();
            return this.vacancyName;
        } else {
            return this.vacancyName;
        }
    }

    async autoGenerateFName() {
        if (this.middleName === '') {
            let num = Math.floor(Math.random() * 3 + 255);
            this.middleName = 'Test' + num.toString();
            return this.middleName;
        } else {
            return this.middleName;
        }
    }

    async autoGenerateMName() {
        if (this.recruitmentLocators.candidates.middleName === '') {
            let num = Math.floor(Math.random() * 3 + 435);
            this.middleName = num.toString();
            return this.middleName;
        } else {
            return this.middleName;
        }
    }

    async autoGenerateLName() {
        if (this.recruitmentLocators.candidates.middleName === '') {
            let num = Math.floor(Math.random() * 3 + 559);
            this.middleName = 'Last' + num.toString();
            return this.middleName;
        } else {
            return this.middleName;
        }
    }

    async clickSave(messageToVerify?: string) {
        await this.page.locator(this.recruitmentLocators.candidates.candidateSaveBtn).click({ force: true });
        if (messageToVerify) {
            const toastText = await this.getToastMessage();
            console.log("clickSave Method" + toastText);
            expect(toastText).toEqual(messageToVerify);
        }
    }

    async getToastMessage() {
        const getToastText = await this.page.locator(this.recruitmentLocators.candidates.candidateToastMsg).textContent();
        console.log(`GetToastMessage Method` , getToastText);
        return getToastText;
    }

    async navigateToRecruitment() {
        await this.page.waitForSelector(this.recruitmentLocators.candidates.recritmentTab, { timeout: 5000 });
        await this.page.locator(this.recruitmentLocators.candidates.recritmentTab).click();
    }

    async clickCandidates() {
        await this.page.waitForSelector(this.recruitmentLocators.candidates.candidatesTab);
        await this.page.locator(this.recruitmentLocators.candidates.candidatesTab).click();
    }

    async candidatesAllComponents() {
        await this.page.locator(this.recruitmentLocators.candidates.jobTitle).isVisible();
        await this.page.locator(this.recruitmentLocators.candidates.vacancy).isVisible();
        await this.page.locator(this.recruitmentLocators.candidates.hiringManager).isVisible();
        await this.page.locator(this.recruitmentLocators.candidates.status).isVisible();
        await this.page.locator(this.recruitmentLocators.candidates.candidateName).isVisible();
        await this.page.locator(this.recruitmentLocators.candidates.keywords).isVisible();
        await this.page.locator(this.recruitmentLocators.candidates.dateOfApplication).isVisible();
        await this.page.locator(this.recruitmentLocators.candidates.toDate).isVisible();
        await this.page.locator(this.recruitmentLocators.candidates.methodOfApplication).isVisible();
    }

    async clickAddButton() {
        await this.page.waitForSelector(this.recruitmentLocators.candidates.addACandidate);
        await this.page.locator(this.recruitmentLocators.candidates.addACandidate).click();
    }

    async newCandidatesAllComponents() {
        await this.page.waitForSelector(this.recruitmentLocators.candidates.firstName);
        await this.page.locator(this.recruitmentLocators.candidates.firstName).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.candidates.middleName);
        await this.page.locator(this.recruitmentLocators.candidates.middleName).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.candidates.lastName);
        await this.page.locator(this.recruitmentLocators.candidates.lastName).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.candidates.vaccancy);
        await this.page.locator(this.recruitmentLocators.candidates.vaccancy).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.candidates.email);
        await this.page.locator(this.recruitmentLocators.candidates.email).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.candidates.contactNumber);
        await this.page.locator(this.recruitmentLocators.candidates.contactNumber).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.candidates.resume);
        await this.page.locator(this.recruitmentLocators.candidates.resume).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.candidates.keywords);
        await this.page.locator(this.recruitmentLocators.candidates.keywords).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.candidates.dateOfApplication);
        await this.page.locator(this.recruitmentLocators.candidates.dateOfApplication).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.candidates.notes);
        await this.page.locator(this.recruitmentLocators.candidates.notes).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.candidates.consentToKeepData);
        await this.page.locator(this.recruitmentLocators.candidates.consentToKeepData).isVisible();
        console.log("All the Elements are visisble.....")
    }

    async selectDropDownElement(dropdownLocator: string, dropDownText: string) {
        if (await this.page.locator(dropdownLocator).isVisible()) {
            await this.page.locator(dropDownText).click();
        }
    }

    async addNewCandidateWithBlankData() {
        await this.page.waitForSelector(this.recruitmentLocators.candidates.firstName);
        await this.page.locator(this.recruitmentLocators.candidates.firstName).fill(``);
        await this.page.waitForSelector(this.recruitmentLocators.candidates.middleName);
        await this.page.locator(this.recruitmentLocators.candidates.middleName).fill(``);
        await this.page.waitForSelector(this.recruitmentLocators.candidates.lastName);
        await this.page.locator(this.recruitmentLocators.candidates.lastName).fill(``);
        await this.page.waitForSelector(this.recruitmentLocators.candidates.vaccancy);
        await this.selectDropDownElements(this.recruitmentLocators.candidates.vaccancy,this.recruitmentLocators.candidates.dropDownSelector,"Junior Account Assistant");
        await this.page.waitForSelector(this.recruitmentLocators.candidates.email);
        await this.page.locator(this.recruitmentLocators.candidates.email).fill(``);
        await this.page.waitForSelector(this.recruitmentLocators.candidates.contactNumber);
        await this.page.locator(this.recruitmentLocators.candidates.contactNumber).fill("9999887766");
        await this.page.waitForSelector(this.recruitmentLocators.candidates.keywords);
        await this.page.locator(this.recruitmentLocators.candidates.keywords).fill("Software Engineer");
        await this.page.waitForSelector(this.recruitmentLocators.candidates.notes);
        await this.page.locator(this.recruitmentLocators.candidates.notes).fill("Good Person");
        await this.page.waitForTimeout(5000);
        await this.clickSave();
    }

    async addNewCandidate() {
        await this.page.waitForSelector(this.recruitmentLocators.candidates.firstName);
        await this.page.locator(this.recruitmentLocators.candidates.firstName).fill(await this.autoGenerateFName());
        await this.page.waitForSelector(this.recruitmentLocators.candidates.middleName);
        await this.page.locator(this.recruitmentLocators.candidates.middleName).fill(await this.autoGenerateMName());
        await this.page.waitForSelector(this.recruitmentLocators.candidates.lastName);
        await this.page.locator(this.recruitmentLocators.candidates.lastName).fill(await this.autoGenerateLName());
        await this.page.waitForSelector(this.recruitmentLocators.candidates.vaccancy);
        await this.selectDropDownElements(this.recruitmentLocators.candidates.vaccancy,this.recruitmentLocators.candidates.dropDownSelector,"Sales Representative");
        await this.page.waitForSelector(this.recruitmentLocators.candidates.email);
        await this.page.locator(this.recruitmentLocators.candidates.email).fill("Vimalraj@gmail.com");
        await this.page.waitForSelector(this.recruitmentLocators.candidates.contactNumber);
        await this.page.locator(this.recruitmentLocators.candidates.contactNumber).fill("9999887766");
        await this.page.waitForSelector(this.recruitmentLocators.candidates.keywords);
        await this.page.locator(this.recruitmentLocators.candidates.keywords).fill("Software Engineer");
        await this.page.waitForSelector(this.recruitmentLocators.candidates.notes);
        await this.page.locator(this.recruitmentLocators.candidates.notes).fill("Good Person");
        await this.page.waitForTimeout(5000);
        await this.clickSave();
        await this.getToastMessage();
    }

    async clickVacancies() {
        await this.page.locator(this.recruitmentLocators.vacancies.vacanciesTab).click();
    }

    async vacanciessAllComponents() {
        await this.page.locator(this.recruitmentLocators.vacancies.vacanciesTitle).isVisible();
        await this.page.locator(this.recruitmentLocators.vacancies.vacanciesVacancy).isVisible();
        await this.page.locator(this.recruitmentLocators.vacancies.vacanciesHaringManager).isVisible();
        await this.page.locator(this.recruitmentLocators.vacancies.vacanciesStatus).isVisible();
    }

    async clickVacancyAddButton() {
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.addANewVacancie);
        await this.page.locator(this.recruitmentLocators.vacancies.addANewVacancie).click();
    }

    async newVacanciesAllComponents() {
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieName);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieName).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieJobTitle);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieJobTitle).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieDescription);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieDescription).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieHiringManager);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieHiringManager).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.totalOpenings);
        await this.page.locator(this.recruitmentLocators.vacancies.totalOpenings).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieCancel);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieCancel).isVisible();
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieSave);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieSave).isVisible();
        console.log("All the Elements visisble.....")
    }

    async addNewVacancieWithInvalidData() {
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieName);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieName).fill(``);
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieJobTitle);
        // await this.selectDropDownElements(this.recruitmentLocators.vacancies.vacancieRole,this.recruitmentLocators.vacancies.vacancieJobTitileDropDown,"Chief Technical Officer");
        // await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieDescription);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieDescription).fill("");
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieHiringManager);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieHiringManager).type("");
        // await this.page.getByRole('option', { name: username }).getByText(username, { exact: true }).click();
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.totalOpenings);
        await this.page.locator(this.recruitmentLocators.vacancies.totalOpenings).fill('');
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieSave);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieSave).click();
        await this.page.waitForTimeout(5000);
    }

    async addNewVacancie() {
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieName);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieName).fill(await this.vacancyNameAutoGenerate());
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieJobTitle);
        await this.selectDropDownElements(this.recruitmentLocators.vacancies.vacancieRole,this.recruitmentLocators.vacancies.vacancieJobTitileDropDown,"Chief Technical Officer");
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieDescription);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieDescription).fill("Testing");
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieHiringManager);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieHiringManager).type("Peter Mac Anderson");
        // await this.page.getByRole('option', { name: username }).getByText(username, { exact: true }).click();
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.totalOpenings);
        await this.page.locator(this.recruitmentLocators.vacancies.totalOpenings).fill('10');
        await this.page.waitForSelector(this.recruitmentLocators.vacancies.vacancieSave);
        await this.page.locator(this.recruitmentLocators.vacancies.vacancieSave).click();
        await this.page.waitForTimeout(5000);
    }

}