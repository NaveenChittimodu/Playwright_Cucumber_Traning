import { Page } from "@playwright/test";

export class Recruitmentlocators{
    readonly page: Page;
    readonly candidates: any; vacancies: any; 
    shortlistLocators:any; recruitmentNavigation:any; toastMessage:any; 
    submit: any;

    constructor(page:Page){
        this.page = page;
        this.candidates = {
            recritmentTab: `ul.oxd-main-menu>li:nth-of-type(5)`,
            candidatesTab: `//a[contains(text(),'Candidates')]`,
            addACandidate: `i.oxd-icon.bi-plus`,
            firstName: `input[name='firstName']`,
            middleName: `input[name='middleName']`,
            lastName: `input[name='lastName']`,
            vaccancy: `div.oxd-select-text.oxd-select-text--active`,
            vacancyDropdown: `div.oxd-select-dropdown .oxd-select-option`,
            dropDownSelector:`div.oxd-select-dropdown div[role='option']`,
            dropDown:`div.oxd-select-dropdown`,
            email: `//div[@class='oxd-form-row']/following-sibling::div//label[text()='Email']/parent::div/following-sibling::div/input`,
            contactNumber: `//div[@class='oxd-form-row']/following-sibling::div//label[text()='Contact Number']/parent::div/following-sibling::div/input`,
            resume: `div.oxd-file-div.oxd-file-div--active`,
            keywords: `input[placeholder='Enter comma seperated words...']`,
            dateOfApplication: `//input[@placeholder='yyyy-mm-dd']`,
            notes: `textarea[placeholder='Type here']`,
            consentToKeepData: `//div[@class='oxd-form-row']/following-sibling::div//label[text()='Consent to keep data']`,
            subDiv: `oxd-table-filter`,
            head: `//h5[text()='Candidates']`,
            reset: `//button[text()=' Reset ']`,
            search: `//button[text()=' Search ']`,
            mainDiv: `.orangehrm-container`,
            totalRecordsList: `div.orangehrm-horizontal-padding span.oxd-text--span`,
            filter1: `//div[@class='oxd-form-row']//child::div//label[text()='Job Title']//parent::div//following-sibling::div//child::div[@class='oxd-select-text-input']`,
            filter2: `(//div[@class='oxd-select-text-input'])[4]`,
            jobTitle: `//div[@class='oxd-form-row']//child::div//label[text()='Job Title']//parent::div//following-sibling::div//child::div[@class='oxd-select-text-input']`,
            vacancy:`//div[@class='oxd-form-row']//child::div//label[text()='Vacancy']//parent::div//following-sibling::div//child::div[@class='oxd-select-text-input']`,
            hiringManager: `//div[@class='oxd-form-row']//child::div//label[text()='Hiring Manager']//parent::div//following-sibling::div//child::div[@class='oxd-select-text-input']`,
            status:`//div[@class='oxd-form-row']//child::div//label[text()='Status']//parent::div//following-sibling::div//child::div[@class='oxd-select-text-input']`,
            fromDate: `input[placeholder='From']`,
            candidateName:`//div[@class='oxd-form-row']//child::div//label[text()='Date of Application']//parent::div//following-sibling::div//input`,
            keywords1:`//div[@class='oxd-form-row']//child::div//label[text()='Date of Application']//parent::div//following-sibling::div//input`,
            toDate: `input[placeholder='To']`,
            methodOfApplication:`//div[@class='oxd-form-row']//child::div//label[text()='Method of Application']//parent::div//following-sibling::div//child::div[@class='oxd-select-text-input']`,
            candidateSaveBtn:`button[type='submit']`,
            candidateCancelBtn:`button.oxd-button.oxd-button--medium.oxd-button--ghost`,
            candidateToastMsg:`p.oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text`
        };

        this.vacancies = {
            vacanciesTab: `//a[text()='Vacancies']`,
            addNewVacancie: `//button[text()=' Add ']`,
            vacancieName: `//div[@class='oxd-grid-3 orangehrm-full-width-grid']/child::div//label[text()='Vacancy Name']//parent::div//following-sibling::div//input`,
            vacancieJobTitle: `div.oxd-select-text.oxd-select-text--active`,
            vacancieJobTitileDropDown: `div.oxd-select-dropdown div[role='option'] span`,
            vacancieRole: `div.oxd-select-text-input`,
            vacancieDescription: `textarea.oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical`,
            vacancieHiringManager:`input[placeholder='Type for hints...']`,
            recruiter: `//input[@placeholder='Type for hints...']`,
            vacancieCancel:`button.oxd-button.oxd-button--medium.oxd-button--ghost`,
            vacancieSave:`button[type='submit']`,
            totalOpenings: `//div[@class='oxd-grid-3 orangehrm-full-width-grid']/child::div//label[text()='Number of Positions']//parent::div//following-sibling::div//input`,
            filter1: `//div[@class='oxd-grid-3 orangehrm-full-width-grid']/child::div//label[text()='Job Title']//parent::div//following-sibling::div`,
            filter2: `//div[@class='oxd-form-row']/child::div//label[text()='Vacancy']//parent::div//following-sibling::div`,
            editIcon: `i.oxd-icon.bi-pencil-fill`,
            editOpenings: `//div[@class='oxd-grid-3 orangehrm-full-width-grid']/child::div//label[text()='Number of Positions']//parent::div//following-sibling::div`,
            deleteIcon: `//i[@class='oxd-icon bi-trash']`,
            confirmDelete: `//button[text()=' Yes, Delete ']`,
            vacanciesTitle: `//div[@class='oxd-form-row']//child::div//label[text()='Job Title']//parent::div//following-sibling::div//child::div[@class='oxd-select-text-input']`,
            vacanciesVacancy: `//div[@class='oxd-form-row']//child::div//label[text()='Vacancy']//parent::div//following-sibling::div//child::div[@class='oxd-select-text-input']`,
            vacanciesHaringManager: `//div[@class='oxd-grid-3 orangehrm-full-width-grid']/child::div//label[text()='Hiring Manager']//parent::div//following-sibling::div//input`,
            vacanciesStatus: `//div[@clear='false']`,
            vacaciesRequired: `//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']`,
            vacancy:`//label[text()='Vacancy']//parent::div//following-sibling::div/div/div`,
            vacancyDropDown:`.oxd-select-dropdown .oxd-select-option`,
            vacancySearch:`//button[text()=' Search ']`,
            vacancyEditBtn:`span.oxd-switch-input`,
            afterModifySave:`//button[@type='submit']`
        };

        this.shortlistLocators = {
            viewCandidate: `//i[@class='oxd-icon bi-eye-fill']`,
            shortListACandidate: `//button[text()=' Shortlist ']`,
            textArea: `//textarea[@placeholder='Type here']`,
            status: `.orangehrm-recruitment-status`,
        }
        this.recruitmentNavigation = `//span[text()='Recruitment']`;
        this.toastMessage = 'p.oxd-text--toast-message';
        this.submit = `//button[@type='submit']`;
    }

}