import { Locator, Page } from "@playwright/test";

export class MyInfoLocators{
    readonly page: Page;
    readonly personalDetails:any;contactDetails:any;emergencyContactDetails:any;dependents:any;immigration:any;
    job:any;qualification:any;membership:any;

    constructor(page:Page){

        this.page = page;
        this.personalDetails = {
            myInfoTab : `ul.oxd-main-menu>li:nth-of-type(6)`,
            empImg : `img.employee-image`,
            personalDetailsTitle : `//h6[text()='Personal Details']`,
            empFullName : `//input[@name='firstName']`,
            empMiddleName : `//input[@name='middleName']`,
            empLastName : `//input[@name='lastName']`,
            empNickName : `//label[text()='Nickname']//parent::div//following-sibling::div//input`,
            empEmployeeID : `//label[normalize-space(text())='Employee Id']//parent::div//following-sibling::div//input`,
            empOtherID : `//label[normalize-space(text())='Other Id']//parent::div//following-sibling::div//input`,
            empDriversLicenseNo: `//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[2]/input[1]`,
            empLicenseExpDate:`//label[text()='License Expiry Date']//parent::div//following-sibling::div/div//input`,
            empSSNnumber: `//label[text()='SSN Number']//parent::div//following-sibling::div//input`,
            empSSINumber:`//label[text()='SIN Number']//parent::div//following-sibling::div//input`,
            empNationality: `//label[text()='Nationality']//parent::div//following-sibling::div`,
            empNationalityDropdown: `div.oxd-select-dropdown .oxd-select-option`,
            empMaritialStatus: `//label[text()='Marital Status']//parent::div//following-sibling::div`,
            empMaritialStatusDropDown: `div.oxd-select-dropdown .oxd-select-option`,
            empDOB: `//label[text()='Date of Birth']//parent::div//following-sibling::div/div//input`,
            empGenderMale: `//label[text()='Male']`,
            empGenderFemale: `//label[text()='Female']`,
            empMilitaryService: `//label[text()='Military Service']//parent::div//following-sibling::div/input`,
            empSmoke: `//label[text()='Smoker']`,
            empSaveBtn: `//p[text()=' * Required']//parent::div//child::button`,
            empBloodType: `//div[text()='-- Select --']`,
            empSmoker: `//label[text()='Yes']`,
            empRequired: `//p[text()=' * Required']`,
            customBloodType: `//label[text()='Blood Type']//parent::div//following-sibling::div`,
            customBllodTypeDropDown: `div.oxd-select-dropdown .oxd-select-option`,
            customSaveBtn: `(//button[text()=' Save '])[2]`,
            addBtn: `button.oxd-button.oxd-button--medium.oxd-button--text`,
            browseBtn: `div.oxd-file-div.oxd-file-div--active`,
            comments:`//textarea[@placeholder='Type comment here']`,
            cancelBtn:`//button[' Cancel ']`,
            saveBtn:`//button[@type='button']/following-sibling::button[1]`
        };

        this.contactDetails = {
            contactDetailsTab : `//a[contains(text(),'Contact Details')]`,
            contactDetailsStreet1: `//label[text()='Street 1']//parent::div//following-sibling::div/input`,
            contactDetailsStreet2: `//label[text()='Street 2']//parent::div//following-sibling::div/input`,
            contactDetailsCity: `//label[text()='City']//parent::div//following-sibling::div/input`,
            contactDetailsState: `//label[text()='State/Province']//parent::div//following-sibling::div/input`,
            contactDetailsPostalCode: `//label[text()='Zip/Postal Code']//parent::div//following-sibling::div/input`,
            contactDetailsCountry: `//label[text()='Country']//parent::div//following-sibling::div`,
            contactDetailsCountryDropDown:`.oxd-select-dropdown .oxd-select-option`,
            contactDeatilsHome:`//label[text()='Home']//parent::div//following-sibling::div/input`,
            contactDetailsMobile: `//label[text()='Mobile']//parent::div//following-sibling::div/input`,
            contactDetailsWork: `//label[text()='Work']//parent::div//following-sibling::div/input`,
            contactDetailsWorkEmail: `//label[text()='Work Email']//parent::div//following-sibling::div/input`,
            contactDetailsOtherEmail: `//label[text()='Other Email']//parent::div//following-sibling::div/input`,
            contactDetailsSaveBtn: `//button[@type='submit']`,
            contactDetailsAddBtn: `button.oxd-button.oxd-button--medium.oxd-button--text`,
            contactDetailsBrowseBtn: `div.oxd-file-button`,
            contactDetailsCommets: `textarea[placeholder='Type comment here']`,
            contactDetailsCancel: `button.oxd-button.oxd-button--medium.oxd-button--ghost`,
            contactDetailsSave: `(//button[@type='submit'])[2]`,
            contactDetailsToastMsg:`.oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text`

        };
        this.emergencyContactDetails = {
            emergencyContactDetailsTab : `//a[contains(text(),'Emergency Contacts')]`,
            emergencyContactAddBtn: `//h6[text()='Assigned Emergency Contacts']/following-sibling::button`,
            emergencyContactName : `//label[text()='Name']//parent::div//following-sibling::div/input`,
            emergencyContactRelatioship: `//label[text()='Relationship']//parent::div//following-sibling::div/input`,
            emergencyContactHome: `//label[text()='Home Telephone']//parent::div//following-sibling::div/input`,
            emergencyContactMobile: `//label[text()='Mobile']//parent::div//following-sibling::div/input`,
            emergencyContactWork: `//label[text()='Work Telephone']//parent::div//following-sibling::div/input`,
            emergencyContactCancel : `button.oxd-button.oxd-button--medium.oxd-button--ghost`,
            emergencyContactSave:`button[type='submit']`,
            emergencyContactRequired: `p.oxd-text.oxd-text--p.orangehrm-form-hint`
        
        };

        this.dependents = {
            dependentsTab : `//a[contains(text(),'Dependents')]`,
            dependentsAddBtn:`//h6[text()='Assigned Dependents']/following-sibling::button`,
            dependentsName : `//label[text()='Name']//parent::div//following-sibling::div/input`,
            dependentsRelationship: `//label[text()='Relationship']//parent::div//following-sibling::div`,
            dependentsRelationshipDropDown: `.oxd-select-dropdown .oxd-select-option`,
            dependentsDOB: `input[placeholder='yyyy-mm-dd']`,
            dependentsCancelBtn: `button.oxd-button.oxd-button--medium.oxd-button--ghost`,
            dependentsSaveBtn: `button[type='submit']`,
            dependentsAddBtn1: `//h6[text()='Assigned Dependents']/following-sibling::button`,
            dependentsAttachedBtn: `//h6[text()='Attachments']/following-sibling::button`,
            dependentsBrowseBtn: `.oxd-file-button`,
            dependentsCommets: `textarea.oxd-textarea.oxd-textarea--active`,   

        };
        this.immigration = {
            immigrationTab : `//a[contains(text(),'Immigration')]`,
            immigrationAddBtn: `//h6[text()='Assigned Immigration Records']/following-sibling::button`,
            immigrationPassport:`//label[text()='Passport']`,
            immigrationVisa:`//label[text()='Visa']`,
            immigrationNumber: `//label[text()='Number']//parent::div//following-sibling::div/input`,
            immigrationIssueDate:`//label[text()='Issued Date']//parent::div//following-sibling::div/div//input`,
            immigrationExpiredDate:`//label[text()='Expiry Date']//parent::div//following-sibling::div/div//input`,
            immigrationEligibleDate: `//label[text()='Eligible Status']//parent::div//following-sibling::div/input`,
            immigrationIssuedBy:`//label[text()='Issued By']//parent::div//following-sibling::div`,
            immigrationIssuedByDraopDown:`.oxd-select-dropdown .oxd-select-option`,
            immigrationEligibleData:`//label[text()='Eligible Review Date']//parent::div//following-sibling::div/div//input`,
            immigrationComments:`textarea[placeholder='Type Comments here']`,
            immigrationCancelBtn:`//p[text()=' * Required']/following-sibling::button[text()=' Cancel ']`,
            immigrationSaveBtn:`//p[text()=' * Required']/following-sibling::button[text()=' Save ']`,
            immigrationRequired:`p.oxd-text.oxd-text--p.orangehrm-form-hint`
        };
        this.job = {
            jobTab : `//a[contains(text(),'Job')]`,
            jobJoinedDate:`//label[text()='Joined Date']//parent::div//following-sibling::div/div//input`,
            jobJobTitle:`//div[text()='HR Manager']`,
            jobNotDefined:`//p[text()='Not Defined']`,
            jobJobCategory:`//div[text()='Officials and Managers']`,
            jobSubUnit:`//div[text()='Human Resources']`,
            jobLocation:`//div[text()='Texas R&D']`,
            jobEmployementStatus:`//label[text()='Employment Status']`,
            jobInclude:`//span[contains(@class,'oxd-switch-input oxd-switch-input--active')]`,
            jobContractStartDate:`//label[text()='Contract Start Date']//parent::div//following-sibling::div/div//input`,
            jobContractEndDate:`//label[text()='Contract End Date']//parent::div//following-sibling::div/div//input`,
            jobContactDetails:`//label[text()='Contract Details']//parent::div//following-sibling::div/child::div`

        };

        this.qualification = {
            qualificationTab : `//a[contains(text(),'Qualifications')]`,
            qualificationAddBtn:`//h6[text()='Work Experience']/following-sibling::button`,
            qualificationCompany:`//label[text()='Company']//parent::div//following-sibling::div/input`,
            qualificationJobTitle:`//label[text()='Job Title']//parent::div//following-sibling::div/input`,
            qualificationFrom:`//label[text()='From']//parent::div//following-sibling::div//input`,
            qualificationTo:`//label[text()='To']//parent::div//following-sibling::div//input`,
            qualificationComments:`//textarea[contains(@class,'oxd-textarea oxd-textarea--active')]`,
            qualificationRequired:`p.oxd-text.oxd-text--p.orangehrm-form-hint`,
            qualificationCancelBtn:`button.oxd-button.oxd-button--medium.oxd-button--ghost`,
            qualificationSaveBtn:`button[type='submit']`,
            qualificationEducationAddBtn:`//h6[text()='Education']/following-sibling::button`,
            qualificationLevel: `//label[text()='Level']//parent::div//following-sibling::div`,
            qualificationLevelDropDown:`.oxd-select-dropdown .oxd-select-option`,
            qualificationInstitute: `//label[text()='Institute']//parent::div//following-sibling::div/input`,
            qualificationMajor:`//label[text()='Major/Specialization']//parent::div//following-sibling::div/input`,
            qualificationYear:`//label[text()='Year']//parent::div//following-sibling::div/input`,
            qualificationScore:`//label[text()='GPA/Score']//parent::div//following-sibling::div/input`,
            qualificationStartDate:`//label[text()='Start Date']//parent::div//following-sibling::div/div//input`,
            qualificationEndDate:`//label[text()='End Date']//parent::div//following-sibling::div/div//input`,
            qualificationEduRequired:`(//p[text()=' * Required'])[2]`,
            qualificationEduCancelBtn:`(//div[@class='oxd-form-actions'])[2]`,
            qualificationEduSaveBtn:`(//button[@type='button']/following-sibling::button)[3]`,
            qualificationSkillAddBtn:`//h6[text()='Skills']/following-sibling::button`,
            qualificationSkill: `//label[text()='Skill']//parent::div//following-sibling::div`,
            qualificationSkillDropDown:`.oxd-select-dropdown .oxd-select-option`,
            qualificationYearOfExperiance:`//label[text()='Years of Experience']//parent::div//following-sibling::div/input`,
            qualificationSkillComments:`//label[text()='Comments']`,
            qualificationSkillRequired:`(//div[@class='oxd-form-actions']//p)[3]`,
            qualificationSkillCancelBtn:`(//button[text()=' Cancel '])[3]`,
            qualificationSkillSaveBtn:`(//button[text()=' Save '])[3]`,
            qualificationLanguageAddBtn:`//h6[text()='Languages']/following-sibling::button`,
            qualificationLanguage: `//label[text()='Language']//parent::div//following-sibling::div`,
            qualificationLanguageDropDown:`.oxd-select-dropdown .oxd-select-option`,
            qualificationLanguageFluency: `//label[text()='Fluency']//parent::div//following-sibling::div`,
            qualificationLanguageFluencyDropDown:`.oxd-select-dropdown .oxd-select-option`,
            qualificationLanguageCompetency: `//label[text()='Competency']//parent::div//following-sibling::div`,
            qualificationLanguageCompetencyDropDown:`.oxd-select-dropdown .oxd-select-option`,
            qualificationLanguageCommets:`(//label[text()='Comments'])[2]/following::textarea`,
            qualificationLicenseAddBtn:`//h6[text()='License']/following-sibling::button`,
            qualificationLicenseType: `//label[text()='License Type']//parent::div//following-sibling::div`,
            qualificationLicenseTypeDropDown:`.oxd-select-dropdown .oxd-select-option`,
            qualificationLicenseNumber:`//label[text()='License Number']//parent::div//following-sibling::div/input`,
            qualificationLicenseIssuedDate:`//label[text()='Issued Date']//parent::div//following-sibling::div/div//input`,
            qualificationLicenseExpiryDate:`//label[text()='Expiry Date']//parent::div//following-sibling::div/div//input`,

        };

        this.membership = {
            membershipTab : `//a[contains(text(),'Memberships')]`,
            membershipAddBtn:`//h6[text()='Assigned Memberships']/following-sibling::button`,
            memberships: `//label[text()='Membership']//parent::div//following-sibling::div`,
            membershipDropDown:`.oxd-select-dropdown .oxd-select-option`,
            membershipSubscription:`//label[text()='Subscription Paid By']//parent::div//following-sibling::div`,
            membershipSubscriptionDropDown:`.oxd-select-dropdown .oxd-select-option`,
            membershipSubscriptionAmount:`//label[text()='Subscription Amount']//parent::div//following-sibling::div/input`,
            membershipCurency: `//label[text()='Currency']//parent::div//following-sibling::div`,
            membershipCurencyDropDown:`.oxd-select-dropdown .oxd-select-option`,
            membershipSubscriptionCommenceDate:`//label[text()='Subscription Commence Date']//parent::div//following-sibling::div/div//input`,
            membershipSubscriptionRenewalDate:`//label[text()='Subscription Renewal Date']//parent::div//following-sibling::div/div//input`,
        }
    }

}