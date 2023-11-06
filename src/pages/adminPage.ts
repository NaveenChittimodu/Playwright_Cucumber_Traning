import { Page, expect,Locator } from "@playwright/test";
import { Adminlocators } from "../common/Locators/adminlocators";
import { GenericMethods } from "../utils/commomMethods";

export  class Adminmenu {
    readonly page: Page;
    private readonly adminlocators: Adminlocators;
    readonly path:any
    readonly genericMethods: GenericMethods;
    

    constructor(page: Page) {
        this.page = page;
        this.adminlocators = new Adminlocators(page);
        this.genericMethods = new GenericMethods(page);

    }

    async clickAdmin(){
        await (await this.page.waitForSelector(this.adminlocators.admin)).isVisible();
        await this.page.locator(this.adminlocators.admin).click();
        await this.page.locator(this.adminlocators.qualifications).click();
    }

    async clickLanguages(){
        await this.page.locator(this.adminlocators.admin).click();
        await this.page.locator(this.adminlocators.qualifications).click();
        await this.page.locator(this.adminlocators.languages).click();
        await this.page.locator(this.adminlocators.languages_Add).click();
        await this.page.locator(this.adminlocators.languages_Name).fill('Telugu');
        await this.page.locator(this.adminlocators.languages_Save).click();
        let languages = await (await this.page.waitForSelector(this.adminlocators.languages_Data)).isVisible();
        console.log("Languages Validation",languages);
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.adminlocators.languages_Edit).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.adminlocators.languages_Name).fill('English');
        const languagesError = await this.page.locator(this.adminlocators.languages_errorAlert).textContent();
        console.log("Error reson",languagesError);
        await this.page.locator(this.adminlocators.languages_Name).fill('Hindi');
        await this.page.locator(this.adminlocators.languages_Save).click();
        let editLanguage = await (await this.page.waitForSelector(this.adminlocators.editlanguages_Data)).isVisible();
        console.log("Edited Languages Validation",editLanguage);
        const recourdcount = await this.page.locator(this.adminlocators.languages_recordcount).textContent();
        console.log("Languages Record count Before Delete",recourdcount);
        await this.page.locator(this.adminlocators.languages_Delete).click();
        await this.page.locator(this.adminlocators.languages_YesDelete).click();
        const recourdcount1 = await this.page.locator(this.adminlocators.languages_recordcount).textContent();
        console.log("Languages Record count After Delete",recourdcount1);
    }

    async clickMemberships(){
        await this.page.locator(this.adminlocators.admin).click();
        await this.page.locator(this.adminlocators.qualifications).click();
        await (await this.page.waitForSelector(this.adminlocators.memberships)).isVisible();
        await this.page.locator(this.adminlocators.memberships).click();
        await this.page.locator(this.adminlocators.memberships_Add).click();
        await this.page.locator(this.adminlocators.memberships_Name).fill('IPS');
        await this.page.locator(this.adminlocators.memberships_Save).click();
        let memberships = await (await this.page.waitForSelector(this.adminlocators.memberships_Data)).isVisible();
        console.log("Memberships Validation",memberships);
        await this.page.locator(this.adminlocators.memberships_Edit).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.adminlocators.memberships_Name).fill('ACCA');
        const languagesError = await this.page.locator(this.adminlocators.languages_errorAlert).textContent();
        console.log("Error reson",languagesError);
        await this.page.locator(this.adminlocators.memberships_Name).fill('IAS');
        await this.page.locator(this.adminlocators.memberships_Save).click();
        let editMembership = await (await this.page.waitForSelector(this.adminlocators.editmemberships_Data)).isVisible();
        console.log("Edited Memberships Validation",editMembership);
        const membershipRecordCount = await this.page.locator(this.adminlocators.memberships_recordcount).textContent();
        console.log("Membership Record count Before Delete",membershipRecordCount);
        await this.page.locator(this.adminlocators.memberships_Delete).click();
        await this.page.locator(this.adminlocators.memberships_YesDelete).click();
        const membershipRecordCount1 = await this.page.locator(this.adminlocators.memberships_recordcount).textContent();
        console.log("Membership Record count After Delete",membershipRecordCount1);
    }

    async clickNationalities(){
        await this.page.locator(this.adminlocators.admin).click();
        await (await this.page.waitForSelector(this.adminlocators.nationalities)).isVisible();
        await this.page.locator(this.adminlocators.nationalities).click();
        await this.page.locator(this.adminlocators.nationalities_Add).click();
        await this.page.locator(this.adminlocators.nationalities_Name).fill('India');
        await this.page.locator(this.adminlocators.nationalities_Save).click();
        await this.page.locator(this.adminlocators.nationalities_Pages).click();
        let nationalities = await (await this.page.waitForSelector(this.adminlocators.nationalities_Data)).isVisible();
        console.log("Nationalities Validation",nationalities);
        await this.page.locator(this.adminlocators.nationalities_Edit).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.adminlocators.nationalities_Name).fill('Indian');
        const nationalitiesError = await this.page.locator(this.adminlocators.nationalities_errorAlert).textContent();
        console.log("Error reson",nationalitiesError);
        await this.page.locator(this.adminlocators.nationalities_Name).fill('Indo');
        await this.page.locator(this.adminlocators.nationalities_Save).click();
        await this.page.locator(this.adminlocators.nationalities_Pages).click();
        let editNationalities = await (await this.page.waitForSelector(this.adminlocators.editnationalities_Data)).isVisible();
        console.log("Edited Nationalities Validation",editNationalities);
        const nationalitiesRecordCount = await this.page.locator(this.adminlocators.nationalities_recordcount).textContent();
        console.log("Nationalities Record count Before Delete",nationalitiesRecordCount);
        await this.page.locator(this.adminlocators.nationalities_Pages).click();
        await this.page.locator(this.adminlocators.nationalities_Delete).click();
        await this.page.locator(this.adminlocators.nationalities_YesDelete).click();
        const nationalitiesRecordCount1 = await this.page.locator(this.adminlocators.nationalities_recordcount).textContent();
        console.log("Nationalities Record count After Delete",nationalitiesRecordCount1);
    }

    async clickcorporateBranding(){
        await this.page.locator(this.adminlocators.admin).click();
        await (await this.page.waitForSelector(this.adminlocators.corporateBranding)).isVisible();
        await this.page.locator(this.adminlocators.corporateBranding).click();
        await this.page.locator(this.adminlocators.primaryFontColor).click();
        await this.page.locator(this.adminlocators.primaryFontColor_Hex).fill('#6a48b9')
        await this.page.keyboard.press('Enter');
        await this.page.locator(this.adminlocators.secondaryFontColor).click();
        
        await this.page.locator(this.adminlocators.secondaryFontColor_Hex).fill('#fdd80a')
        await this.page.keyboard.press('Enter');
        await this.genericMethods.uploadFiles(this.adminlocators.clientLogo_Browser,"50px.png");
        await this.genericMethods.uploadFiles(this.adminlocators.clientBanner_Browser,"182px.jpg");
        await this.page.locator(this.adminlocators.preview).click();
        await this.page.locator(this.adminlocators.publish).click();
        await this.page.locator(this.adminlocators.reset_to_Default).click();
    }

    async clickEmail_configurations(){
        await this.page.locator(this.adminlocators.admin).click();
        await (await this.page.waitForSelector(this.adminlocators.configuration)).isVisible();
        await this.page.locator(this.adminlocators.configuration).click();
        await this.page.locator(this.adminlocators.emailConfiguration).click();
        let emailConfiguration = await (await this.page.waitForSelector(this.adminlocators.emailConfiguration_components)).isVisible();
        console.log("Email Configuration Validation",emailConfiguration);
    }
}