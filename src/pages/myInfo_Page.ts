import { expect,Locator, Page } from "@playwright/test";
import { MyInfoLocators } from "../common/Locators/myInfoLocators";
import { TimeLocators } from "../common/Locators/timeLocators";
// import * as constants from "../common/constants.json"
import * as assertion from "../testData/json/assertion.json"
import { CommonMethods } from "../utils/commonMethods";


export class MyInfoPage {
    readonly page: Page; middleName: any = ''; vacancyName: any = '';
    readonly timeLocators: TimeLocators;
    readonly myInfoLocators: MyInfoLocators;
    readonly commonMethods: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.timeLocators = new TimeLocators(page);
        this.myInfoLocators = new MyInfoLocators(page);
        this.commonMethods = new CommonMethods(page);
    }

      async navigateToMyInfo() {
        await this.page.waitForSelector(this.myInfoLocators.personalDetails.myInfoTab);
        await this.page.locator(this.myInfoLocators.personalDetails.myInfoTab).click();
        await expect(this.page.url()).toBe(`https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7`);
    }

      async employeeFullName(){
      const empFullName = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.empFullName,assertion.assertion.Fname);
      expect(empFullName).toBe(assertion.assertion.Fname);        
    }

      async employeeMiddleName(){
        const empMiddleName = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.empMiddleName,assertion.assertion.Mname);
        expect(empMiddleName).toBe(assertion.assertion.Mname);
      }

      async employeeLastName(){
        const empLastName = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.empLastName,assertion.assertion.Lname);
        expect(empLastName).toBe(assertion.assertion.Lname);
      }

      async employeeNickName(){
        const empNickName = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.empNickName,assertion.assertion.NickName);
        expect(empNickName).toBe(assertion.assertion.NickName);
      }

      async employeeID(){
        const empID = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.empEmployeeID,assertion.assertion.employeeID);
        expect(empID).toBe(assertion.assertion.employeeID);
      }

      async employeeOtherID(){
        const empOtherID = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.empOtherID,assertion.assertion.otherID);
        expect(empOtherID).toBe(assertion.assertion.otherID);
      }

      async employeeDriversLicenseNo(){
        const empDriverLicenseNo = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.empDriversLicenseNo,assertion.assertion.driversLicenseNo);
        expect(empDriverLicenseNo).toBe(assertion.assertion.driversLicenseNo);
      }

      async employeeLicenseExpDate(){
        const empLicenseExpDate = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.empLicenseExpDate,assertion.assertion.licenseExpDate);
        expect(empLicenseExpDate).toBe(assertion.assertion.licenseExpDate);
      }

      async employeeSSNNumber(){
        const empSSNNumber = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.empSSNnumber,assertion.assertion.ssnNumber);
        expect(empSSNNumber).toBe(assertion.assertion.ssnNumber);
      }

      async employeeSSINumber(){
        const empSSINumber = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.empSSINumber,assertion.assertion.ssiNumber);
        expect(empSSINumber).toBe(assertion.assertion.ssiNumber);
      }

      async employeeNationality(){
        await this.commonMethods.selectDropDownElements(this.myInfoLocators.personalDetails.empNationality,this.myInfoLocators.personalDetails.empNationalityDropdown,assertion.assertion.nationality);
      }

      async employeeMaritialStatus(){
        await this.commonMethods.selectDropDownElements(this.myInfoLocators.personalDetails.empMaritialStatus,this.myInfoLocators.personalDetails.empMaritialStatusDropDown,assertion.assertion.maritialStatus);
        await this.page.waitForTimeout(2000);
      }

      async employeeDOB(){
        const empDOB = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.empDOB,assertion.assertion.employeeDOB);
        await this.page.click(this.myInfoLocators.personalDetails.empDOB);
        expect(empDOB).toBe(assertion.assertion.employeeDOB);
      }

      async employeeGender(){
        await this.commonMethods.selectRadioButton(this.myInfoLocators.personalDetails.empGenderFemale);
      }

      async employeeMilitaryService(){
        const MilitaryService = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.empMilitaryService,assertion.assertion.militaryService);
        expect(MilitaryService).toBe(assertion.assertion.militaryService);
      }

      async employeeSmoker(){
        await this.commonMethods.checkBox(this.myInfoLocators.personalDetails.empSmoker,true);
      }

      async employeeSaveBtn(){
        await this.commonMethods.clickElement(this.myInfoLocators.personalDetails.empSaveBtn);
      }

      async customBloodType(){
        await this.commonMethods.selectDropDownElements(this.myInfoLocators.personalDetails.customBloodType,this.myInfoLocators.personalDetails.customBllodTypeDropDown,assertion.assertion.BloodType);
        await this.page.waitForTimeout(2000);
      }

      async customSaveBtn(){
        await this.commonMethods.clickElement(this.myInfoLocators.personalDetails.customSaveBtn);
        // await this.page.waitForTimeout(5000);
      }

      async empFileUpload(){
        // await this.page.waitForSelector(this.myInfoLocators.personalDetails.addBtn);
        await this.commonMethods.uploadFile(this.myInfoLocators.personalDetails.addBtn,this.myInfoLocators.personalDetails.browseBtn,["1.txt"]);
      }

    //   async empAddAttachment(){
    //     await this.page.waitForSelector(this.myInfoLocators.personalDetails.addBtn);
    //     await this.uploadFiles(this.myInfoLocators.personalDetails.addBtn,this.myInfoLocators.personalDetails.browseBtn,"images.png");
    //   }

    //   async clickattachmentAddandUploadfile() {
    //     await this.page.waitForSelector(this.myInfoLocators.personalDetails.addBtn)
    //     await this.page.locator(this.myInfoLocators.personalDetails.addBtn).click({force:true});
    //     const [uploadFiles] = await Promise.all([
    //         this.page.waitForEvent("filechooser"),
    //         // this.page.waitForSelector(this.myInfoLocators.personalDetails.browseBtn);
    //         this.page.click("div.oxd-file-button")
    //     ])
    //     const isMultiple = uploadFiles.isMultiple();
    //     console.log(isMultiple);
    //     uploadFiles.setFiles(["1.txt"])
    // }

    async addComments(){
      // await this.page.waitForSelector(this.myInfoLocators.personalDetails.addComments);
      const empaddComments = await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.personalDetails.addComments,assertion.assertion.comments);
      // const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.addComments).textContent();
      expect(empaddComments).toBe(assertion.assertion.comments);
    }

    async personalDetailsSaveBtn(){
      await this.commonMethods.clickElement(this.myInfoLocators.personalDetails.saveBtn);
      // await this.page.waitForTimeout(5000);
    }

    async personalDetailsCancelBtn(){
      await this.commonMethods.clickElement(this.myInfoLocators.personalDetails.cancelBtn);
      await this.page.waitForTimeout(5000);
    }

    async navigateToContactDetails(){
      await this.commonMethods.clickElement(this.myInfoLocators.personalDetails.contactDetailsTab);
      await this.page.waitForTimeout(5000);
    }

    async contactDetailsAddressField(){
      // await this.page.waitForSelector(this.myInfoLocators.personalDetails.myInfoTab);
      // await this.page.locator(this.myInfoLocators.personalDetails.myInfoTab).click();
      await this.page.waitForSelector(this.myInfoLocators.contactDetails.contactDetailsTab);
      await this.commonMethods.clickElement(this.myInfoLocators.contactDetails.contactDetailsTab);
      // await this.page.waitForTimeout(5000);
      await this.page.waitForSelector(this.myInfoLocators.contactDetails.contactDetailsStreet1);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.contactDetails.contactDetailsStreet1,assertion.assertion.street1);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.contactDetails.contactDetailsStreet2,assertion.assertion.street2);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.contactDetails.contactDetailsCity,assertion.assertion.city);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.contactDetails.contactDetailsState,assertion.assertion.state);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.contactDetails.contactDetailsPostalCode,assertion.assertion.postalCode);
      await this.commonMethods.selectDropDownElements(this.myInfoLocators.contactDetails.contactDetailsCountry,this.myInfoLocators.contactDetails.contactDetailsCountryDropDown,assertion.assertion.country);
      
    }

    async contactDetailsTelephoneField(){
      await this.page.waitForSelector(this.myInfoLocators.contactDetails.contactDeatilsHome);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.contactDetails.contactDeatilsHome,assertion.assertion.home);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.contactDetails.contactDetailsMobile,assertion.assertion.mobile);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.contactDetails.contactDetailsWork,assertion.assertion.work);
      await this.page.waitForTimeout(5000);
    }

    async contactDetailsEmailField(){
      await this.page.waitForSelector(this.myInfoLocators.contactDetails.contactDetailsWorkEmail);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.contactDetails.contactDetailsWorkEmail,assertion.assertion.workEmail);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.contactDetails.contactDetailsOtherEmail,assertion.assertion.otherEmail);
      await this.commonMethods.clickElement(this.myInfoLocators.contactDetails.contactDetailsSaveBtn);
      await this.commonMethods.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
    }

    async emergencyDetails(){
      await this.page.waitForSelector(this.myInfoLocators.emergencyContactDetails.emergencyContactDetailsTab);
      await this.commonMethods.clickElement(this.myInfoLocators.emergencyContactDetails.emergencyContactDetailsTab);
      await this.page.waitForSelector(this.myInfoLocators.emergencyContactDetails.emergencyContactAddBtn);
      await this.commonMethods.clickElement(this.myInfoLocators.emergencyContactDetails.emergencyContactAddBtn);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.emergencyContactDetails.emergencyContactName,assertion.assertion.name);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.emergencyContactDetails.emergencyContactRelatioship,assertion.assertion.relationship);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.emergencyContactDetails.emergencyContactHome,assertion.assertion.home);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.emergencyContactDetails.emergencyContactMobile,assertion.assertion.mobile);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.emergencyContactDetails.emergencyContactWork,assertion.assertion.work);
      await this.commonMethods.clickElement(this.myInfoLocators.contactDetails.contactDetailsSaveBtn);
      await this.commonMethods.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
    }

    async dependentsDetails(){
      await this.page.waitForSelector(this.myInfoLocators.dependents.dependentsTab);
      await this.commonMethods.clickElement(this.myInfoLocators.dependents.dependentsTab);
      await this.page.waitForSelector(this.myInfoLocators.dependents.dependentsAddBtn);
      await this.commonMethods.clickElement(this.myInfoLocators.dependents.dependentsAddBtn);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.dependents.dependentsName,assertion.assertion.name);
      await this.commonMethods.selectDropDownElements(this.myInfoLocators.dependents.dependentsRelationship,this.myInfoLocators.dependents.dependentsRelationshipDropDown,assertion.assertion.relationship);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.dependents.dependentsDOB,assertion.assertion.dependentDOB);
      await this.commonMethods.clickElement(this.myInfoLocators.contactDetails.contactDetailsSaveBtn);
      await this.commonMethods.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
      // await this.commonMethods.interactWithTable(this.timeLocators.projectInfoDetails.tableSelector, this.timeLocators.projectInfoDetails.headerSelector, this.timeLocators.projectInfoDetails.allRows, this.timeLocators.projectInfoDetails.tableCells, assertion.assertion.name);
    } 
    
    async immigrationDetails(){
      await this.page.waitForSelector(this.myInfoLocators.immigration.immigrationTab);
      await this.commonMethods.clickElement(this.myInfoLocators.immigration.immigrationTab);
      await this.page.waitForSelector(this.myInfoLocators.immigration.immigrationAddBtn);
      await this.commonMethods.clickElement(this.myInfoLocators.immigration.immigrationAddBtn);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.immigration.immigrationNumber,assertion.assertion.immigrationNumber);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.immigration.immigrationIssueDate,assertion.assertion.immigrationIssuedDate);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.immigration.immigrationExpiredDate,assertion.assertion.immigrationExpiredDate);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.immigration.immigrationEligibleDate,assertion.assertion.immigrationEligibleStatus);
      await this.commonMethods.selectDropDownElements(this.myInfoLocators.immigration.immigrationIssuedBy,this.myInfoLocators.immigration.immigrationIssuedByDraopDown,assertion.assertion.immigrationIssuedBy);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.immigration.immigrationEligibleData,assertion.assertion.immigrationEligibleReviewDate);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.immigration.immigrationComments,assertion.assertion.immigrationComments);
      await this.commonMethods.clickElement(this.myInfoLocators.contactDetails.contactDetailsSaveBtn);
      await this.commonMethods.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
      await this.commonMethods.interactWithTableTextField(this.timeLocators.projectInfoDetails.tableSelector, this.timeLocators.projectInfoDetails.headerSelector, this.timeLocators.projectInfoDetails.allRows, this.timeLocators.projectInfoDetails.tableCells, assertion.assertion.immigrationNumber);
    }
    
    async jobDetails(){
      await this.page.waitForSelector(this.myInfoLocators.job.jobTab);
      await this.commonMethods.clickElement(this.myInfoLocators.job.jobTab);
      const JoinedDate = await this.commonMethods.getTextFromElement(this.myInfoLocators.job.jobJoinedDate);
      console.log(JoinedDate);
      const title = await this.commonMethods.getTextFromElement(this.myInfoLocators.job.jobJobTitle);
      console.log(title);
      const jobSpec = await this.commonMethods.getTextFromElement(this.myInfoLocators.job.jobNotDefined);
      console.log(jobSpec);
      const jobCat = await this.commonMethods.getTextFromElement(this.myInfoLocators.job.jobJobCategory);
      console.log(jobCat);
      const subUnits = await this.commonMethods.getTextFromElement(this.myInfoLocators.job.jobSubUnit);
      console.log(subUnits);
      const jobLocations = await this.commonMethods.getTextFromElement(this.myInfoLocators.job.jobLocation);
      console.log(jobLocations);
      const jobEmpStatus = await this.commonMethods.getTextFromElement(this.myInfoLocators.job.jobEmployementStatus);
      console.log(jobEmpStatus);
      await this.commonMethods.clickElement(this.myInfoLocators.job.jobInclude);
      await this.page.waitForSelector(this.myInfoLocators.job.jobContractStartDate);
      await this.page.locator(this.myInfoLocators.job.jobContractStartDate).isVisible();
      await this.page.waitForSelector(this.myInfoLocators.job.jobContractEndDate);
      await this.page.locator(this.myInfoLocators.job.jobContractEndDate).isVisible();
      await this.page.waitForSelector(this.myInfoLocators.job.jobContactDetails);
      await this.page.locator(this.myInfoLocators.job.jobContactDetails).isVisible();

    }

    async qualificationDetails(){
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationTab);
      await this.commonMethods.clickElement(this.myInfoLocators.qualification.qualificationTab);
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationAddBtn);
      await this.commonMethods.clickElement(this.myInfoLocators.qualification.qualificationAddBtn);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationCompany,assertion.assertion.qualificationCompany);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationJobTitle,assertion.assertion.qualificationJobTitle);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationFrom,assertion.assertion.qualificationFrom);
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationTo);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationTo,assertion.assertion.qualificationTO);
      await this.page.click(this.myInfoLocators.qualification.qualificationTo);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationComments,assertion.assertion.qualificationComments);
      await this.commonMethods.clickElementAndVerifyToastNew(this.myInfoLocators.qualification.qualificationSaveBtn);
      await this.commonMethods.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
      await this.commonMethods.interactWithTableAndGetText(this.timeLocators.projectInfoDetails.tableSelector, this.timeLocators.projectInfoDetails.headerSelector, this.timeLocators.projectInfoDetails.allRows, this.timeLocators.projectInfoDetails.tableCells, assertion.assertion.projectInfocustomerEditedName);
    }

    async educationDetails(){
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationTab);
      await this.commonMethods.clickElement(this.myInfoLocators.qualification.qualificationTab);
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationEducationAddBtn);
      await this.commonMethods.clickElement(this.myInfoLocators.qualification.qualificationEducationAddBtn);
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationEducationAddBtn);
      await this.commonMethods.clickElement(this.myInfoLocators.qualification.qualificationEducationAddBtn);
      await this.commonMethods.selectDropDownElements(this.myInfoLocators.qualification.qualificationLevel,this.myInfoLocators.qualification.qualificationLevelDropDown,assertion.assertion.educationLevel);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationInstitute,assertion.assertion.educationInstitude);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationMajor,assertion.assertion.educationSpecification);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationYear,assertion.assertion.educationYear);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationScore,assertion.assertion.educationScore);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationStartDate,assertion.assertion.qualificationFrom);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationEndDate,assertion.assertion.qualificationFrom);
      await this.page.click(this.myInfoLocators.qualification.qualificationEndDate);
      await this.commonMethods.clickElementAndVerifyToastNew(this.myInfoLocators.qualification.qualificationEduSaveBtn);
      await this.commonMethods.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
      await this.commonMethods.interactWithTableTextField(this.timeLocators.projectInfoDetails.tableSelector, this.timeLocators.projectInfoDetails.headerSelector, this.timeLocators.projectInfoDetails.allRows, this.timeLocators.projectInfoDetails.tableCells, assertion.assertion.projectInfocustomerEditedName);
    }

    async skillDetails(){
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationSkillAddBtn);
      await this.commonMethods.clickElement(this.myInfoLocators.qualification.qualificationSkillAddBtn);
      await this.commonMethods.selectDropDownElements(this.myInfoLocators.qualification.qualificationSkill,this.myInfoLocators.qualification.qualificationSkillDropDown,assertion.assertion.skill);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationYearOfExperiance,assertion.assertion.Experiance);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationSkillComments,assertion.assertion.skillComment);
      await this.commonMethods.clickElementAndVerifyToastNew(this.myInfoLocators.qualification.qualificationSkillSaveBtn);
      await this.commonMethods.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
      await this.commonMethods.interactWithTableTextField(this.timeLocators.projectInfoDetails.tableSelector, this.timeLocators.projectInfoDetails.headerSelector, this.timeLocators.projectInfoDetails.allRows, this.timeLocators.projectInfoDetails.tableCells, assertion.assertion.projectInfocustomerEditedName);
    }

    async languageDetails(){
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationLanguageAddBtn);
      await this.commonMethods.clickElement(this.myInfoLocators.qualification.qualificationLanguageAddBtn);
      await this.commonMethods.selectDropDownElements(this.myInfoLocators.qualification.qualificationLanguage,this.myInfoLocators.qualification.qualificationLanguageDropDown,assertion.assertion.language);
      await this.commonMethods.selectDropDownElements(this.myInfoLocators.qualification.qualificationLanguageFluency,this.myInfoLocators.qualification.qualificationLanguageFluencyDropDown,assertion.assertion.fluency);
      await this.commonMethods.selectDropDownElements(this.myInfoLocators.qualification.qualificationLanguageCompetency,this.myInfoLocators.qualification.qualificationLanguageCompetencyDropDown,assertion.assertion.competency);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.qualification.qualificationLanguageCommets,assertion.assertion.skillComment);
      await this.commonMethods.clickElementAndVerifyToastNew(this.myInfoLocators.qualification.qualificationSkillSaveBtn);
      await this.commonMethods.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
      await this.commonMethods.interactWithTableTextField(this.timeLocators.projectInfoDetails.tableSelector, this.timeLocators.projectInfoDetails.headerSelector, this.timeLocators.projectInfoDetails.allRows, this.timeLocators.projectInfoDetails.tableCells, assertion.assertion.projectInfocustomerEditedName);
    }

    async licenseDetails(){
      await this.page.waitForSelector(this.myInfoLocators.membership.membershipTab);
      await this.commonMethods.clickElement(this.myInfoLocators.membership.membershipTab);
      await this.page.waitForSelector(this.myInfoLocators.membership.membershipAddBtn);
      await this.commonMethods.clickElement(this.myInfoLocators.membership.membershipAddBtn);
      await this.page.waitForSelector(this.myInfoLocators.membership.memberships);
      await this.commonMethods.selectDropDownElements(this.myInfoLocators.membership.memberships,this.myInfoLocators.membership.membershipDropDown,assertion.assertion.membership);
      await this.page.waitForSelector(this.myInfoLocators.membership.membershipSubscription);
      await this.commonMethods.selectDropDownElements(this.myInfoLocators.membership.membershipSubscription,this.myInfoLocators.membership.membershipSubscriptionDropDown,assertion.assertion.membershipSubscription);
      await this.page.waitForSelector(this.myInfoLocators.membership.membershipSubscriptionAmount);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.membership.membershipSubscriptionAmount,assertion.assertion.memberSubscriptionAmount);
      await this.page.waitForSelector(this.myInfoLocators.membership.membershipCurency);
      await this.commonMethods.selectDropDownElements(this.myInfoLocators.membership.membershipCurency,this.myInfoLocators.membership.membershipCurencyDropDown,assertion.assertion.membershipCurrency);
      await this.page.waitForSelector(this.myInfoLocators.membership.membershipSubscriptionCommenceDate);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.membership.membershipSubscriptionCommenceDate,assertion.assertion.qualificationFrom);
      await this.page.waitForSelector(this.myInfoLocators.membership.membershipSubscriptionRenewalDate);
      await this.commonMethods.fillInputFieldAndGetText(this.myInfoLocators.membership.membershipSubscriptionRenewalDate,assertion.assertion.qualificationTO);
      await this.page.click(this.myInfoLocators.membership.membershipSubscriptionRenewalDate);
      await this.commonMethods.clickElement(this.myInfoLocators.qualification.qualificationSaveBtn);
      await this.commonMethods.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
      await this.commonMethods.interactWithTableTextField(this.timeLocators.projectInfoDetails.tableSelector, this.timeLocators.projectInfoDetails.headerSelector, this.timeLocators.projectInfoDetails.allRows, this.timeLocators.projectInfoDetails.tableCells, assertion.assertion.projectInfocustomerEditedName);
    }

}


