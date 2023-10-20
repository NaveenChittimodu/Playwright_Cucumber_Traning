import { expect,Locator, Page } from "@playwright/test";
import { MyInfoLocators } from "../common/Locators/myInfoLocators";
// import * as constants from "../common/constants.json"
import * as assertion from "../testData/json/assertion.json"
import { addAbortListener } from "events";


export class MyInfoPage {
    readonly page: Page; middleName: any = ''; vacancyName: any = '';

    readonly myInfoLocators: MyInfoLocators;

    constructor(page: Page) {
        this.page = page;
        this.myInfoLocators = new MyInfoLocators(page);
    }

    async clickElement(locator:string){

        try {
            await this.page.waitForSelector(locator);
            await expect(await this.page.locator(locator)).toBeVisible();
            await this.page.locator(locator).click({ force: true });
            console.log("Button has been clicked...")
        } 
        catch (error) {
            console.log("Button hasn't been clicked...")
        }
        
    }

      async navigateToMyInfo() {
        await this.page.waitForSelector(this.myInfoLocators.personalDetails.myInfoTab);
        await this.page.locator(this.myInfoLocators.personalDetails.myInfoTab).click();
        // await this.clickElement(this.myInfoLocators.personalDetails.myInfoTab);
    }

    async enterText(locator: Locator, text: string) {
        try {
          await this.page.waitForSelector(locator.toString());
          await this.page.locator(locator.toString()).click();
          await this.page.locator(locator.toString()).clear();
          await this.page.fill(locator.toString(), text);
          console.log('Text is entered');
        } catch (error) {
          console.error('Text not entered:', error);
        }
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

    // async getText(locator: string) {
    //   try {
    //     const element = await this.page.locator(locator).waitFor({ state: 'visible' });
    //     const text = await element.textContent();
    //     console.log(text);
        
    //     return text;
    //   } catch (error) {
    //     console.error(`Error getting text from the element: ${error}`);
    //     return '';
    //   }
    // }

    async selectRadioButton(locator: Locator, optionValue: string) {
      try {
        const radioButton = await locator.locator(`input[value="${optionValue}"]`);
        
        if (await radioButton.isVisible() && await radioButton.isEnabled()) {
          await radioButton.click();
        } else {
          console.error(`Option button "${optionValue}" is not visible or not enabled.`);
        }
      } catch (error) {
        console.error('Error selecting option button:', error);
      }
    }

    async optionButton(locator: string, isChecked: boolean){
      try {
        const checkbox = this.page.locator(locator);
        const currentCheckedState = await checkbox.isChecked();
    
        if (isChecked !== currentCheckedState) {
          await checkbox.click();
        }
      } catch (error) {
        console.error('Error the checkbox:', error);
      }
    }

    async uploadFiles(addLocator:string,fileInputLocator: Locator, files: string | string[]){
      try {
        // Click the add button
        await this.page.waitForSelector(addLocator);
        await this.page.locator(addLocator).click();
        await this.page.waitForTimeout(1000);
        
        // Click the file input element
        await fileInputLocator.click();
    
        // Wait for the file chooser event and set selected file(s)
        const [fileChooser] = await Promise.all([
          this.page.waitForEvent('filechooser', { timeout: 2000 }),
          fileInputLocator.click(),
        ]);
    
        if (Array.isArray(files)) {
          await fileChooser.setFiles(files);
        } else {
          await fileChooser.setFiles(files);
        }
    
        const isMultiple = fileChooser.isMultiple();
        console.log(`File upload is multiple: ${isMultiple}`);
      } catch (error) {
        console.error('Error uploading files:', error);
      }
    }  

    async clickSave(messageToVerify?: string) {
      await this.page.locator(this.myInfoLocators.contactDetails.contactDetailsSaveBtn).click({ force: true });
      if (messageToVerify) {
          const toastText = await this.getToastMessage();
          console.log("clickSave Method" + toastText);
          expect(toastText).toEqual(messageToVerify);
      }
  }

  async getToastMessage() {
      const getToastText = await this.page.locator(this.myInfoLocators.contactDetails.contactDetailsToastMsg).textContent();
      console.log(`GetToastMessage Method` , getToastText);
      return getToastText;
  }
      async employeeFullName(){
        await this.enterText(this.myInfoLocators.personalDetails.empFullName,assertion.assertion.Fname);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empFullName).textContent();
        return fullnameText;
        // expect(fullnameText).toBe(assertion.assertion.Fname);
        
      }

      async employeeMiddleName(){
        await this.enterText(this.myInfoLocators.personalDetails.empMiddleName,assertion.assertion.Mname);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empMiddleName).textContent();
        // expect(fullnameText).toBe(assertion.assertion.Mname);
      }

      async employeeLastName(){
        await this.enterText(this.myInfoLocators.personalDetails.empLastName,assertion.assertion.Lname);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empLastName).textContent();
        // expect(fullnameText).toBe(assertion.assertion.Lname);
      }

      async employeeNickName(){
        await this.enterText(this.myInfoLocators.personalDetails.empNickName,assertion.assertion.NickName);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empNickName).textContent();
        // expect(fullnameText).toBe(assertion.assertion.NickName);
      }

      async employeeID(){
        await this.enterText(this.myInfoLocators.personalDetails.empEmployeeID,assertion.assertion.employeeID);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empEmployeeID).textContent();
        // expect(fullnameText).toBe(assertion.assertion.employeeID);
      }

      async employeeOtherID(){
        await this.enterText(this.myInfoLocators.personalDetails.empOtherID,assertion.assertion.otherID);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empOtherID).textContent();
        //expect(fullnameText).toBe(assertion.assertion.otherID);
      }

      async employeeDriversLicenseNo(){
        await this.enterText(this.myInfoLocators.personalDetails.empDriversLicenseNo,assertion.assertion.driversLicenseNo);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empDriversLicenseNo).textContent();
        //expect(fullnameText).toBe(assertion.assertion.otherID);
      }

      async employeeLicenseExpDate(){
        await this.page.click(this.myInfoLocators.personalDetails.empLicenseExpDate)
        // await this.page.fill(this.myInfoLocators.personalDetails.empLicenseExpDate,formattedDate);
        await this.enterText(this.myInfoLocators.personalDetails.empLicenseExpDate,assertion.assertion.licenseExpDate);
        // const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empLicenseExpDate).textContent();
        // expect(fullnameText).toBe(assertion.assertion.licenseExpDate);
      }

      async employeeSSNNumber(){
        await this.enterText(this.myInfoLocators.personalDetails.empSSNnumber,assertion.assertion.ssnNumber);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empSSNnumber).textContent();
        // expect(fullnameText).toBe(assertion.assertion.ssnNumber);
      }

      async employeeSSINumber(){
        await this.enterText(this.myInfoLocators.personalDetails.empSSINumber,assertion.assertion.ssiNumber);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empSSINumber).textContent();
        // expect(fullnameText).toBe(assertion.assertion.ssiNumber);
      }

      async employeeNationality(){
        await this.selectDropDownElements(this.myInfoLocators.personalDetails.empNationality,this.myInfoLocators.personalDetails.empNationalityDropdown,assertion.assertion.nationality);
        // await this.page.waitForTimeout(2000);
      }

      async employeeMaritialStatus(){
        await this.selectDropDownElements(this.myInfoLocators.personalDetails.empMaritialStatus,this.myInfoLocators.personalDetails.empMaritialStatusDropDown,assertion.assertion.maritialStatus);
        await this.page.waitForTimeout(2000);
      }

      async employeeDOB(){
        await this.page.click(this.myInfoLocators.personalDetails.empDOB)
        await this.enterText(this.myInfoLocators.personalDetails.empDOB,assertion.assertion.employeeDOB);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empLicenseExpDate).textContent();
        // expect(fullnameText).toBe(assertion.assertion.licenseExpDate);
      }

      async employeeGender(){
        await this.optionButton(this.myInfoLocators.personalDetails.empGenderFemale,true);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empGenderFemale).textContent();
        // expect(fullnameText).toBe(assertion.assertion.licenseExpDate);
      }

      async employeeMilitaryService(){
        await this.enterText(this.myInfoLocators.personalDetails.empMilitaryService,assertion.assertion.militaryService);
        const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empMilitaryService).textContent();
        //expect(fullnameText).toBe(assertion.assertion.otherID);
      }

      async employeeSmoker(){
        await this.page.locator(this.myInfoLocators.personalDetails.empSmoker).isChecked;
        // const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.empMilitaryService).textContent();
        //expect(fullnameText).toBe(assertion.assertion.otherID);
      }

      async employeeSaveBtn(){
        // await this.page.waitForSelector(this.myInfoLocators.personalDetails.empSaveBtn);
        await this.clickElement(this.myInfoLocators.personalDetails.empSaveBtn);
        await this.page.waitForTimeout(5000);
      }

      async customBloodType(){
        // await this.page.waitForSelector(this.myInfoLocators.personalDetails.customBloodType);
        await this.selectDropDownElements(this.myInfoLocators.personalDetails.customBloodType,this.myInfoLocators.personalDetails.customBllodTypeDropDown,assertion.assertion.BloodType);
        await this.page.waitForTimeout(2000);
      }

      async customSaveBtn(){
        await this.clickElement(this.myInfoLocators.personalDetails.customSaveBtn);
        await this.page.waitForTimeout(5000);
      }

      async empAddAttachment(){
        await this.page.waitForSelector(this.myInfoLocators.personalDetails.addBtn);
        await this.uploadFiles(this.myInfoLocators.personalDetails.addBtn,this.myInfoLocators.personalDetails.browseBtn,"images.png");
      }

      async clickattachmentAddandUploadfile() {
        await this.page.waitForSelector(this.myInfoLocators.personalDetails.addBtn)
        await this.page.locator(this.myInfoLocators.personalDetails.addBtn).click({force:true});
        const [uploadFiles] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            // this.page.waitForSelector(this.myInfoLocators.personalDetails.browseBtn);
            this.page.click("div.oxd-file-button")
        ])
        const isMultiple = uploadFiles.isMultiple();
        console.log(isMultiple);
        uploadFiles.setFiles(["images.png"])
    }

    async addComments(){
      await this.page.waitForSelector(this.myInfoLocators.personalDetails.addComments);
      await this.enterText(this.myInfoLocators.personalDetails.addComments,assertion.assertion.comments);
      const fullnameText = await this.page.locator(this.myInfoLocators.personalDetails.addComments).textContent();
      //expect(fullnameText).toBe(assertion.assertion.otherID);
    }

    async personalDetailsSaveBtn(){
      await this.clickElement(this.myInfoLocators.personalDetails.saveBtn);
      await this.page.waitForTimeout(5000);
    }

    async personalDetailsCancelBtn(){
      await this.clickElement(this.myInfoLocators.personalDetails.cancelBtn);
      await this.page.waitForTimeout(5000);
    }

    async navigateToContactDetails(){
      await this.clickElement(this.myInfoLocators.personalDetails.contactDetailsTab);
      await this.page.waitForTimeout(5000);
    }

    async contactDetailsAddressField(){
      // await this.page.waitForSelector(this.myInfoLocators.personalDetails.myInfoTab);
      // await this.page.locator(this.myInfoLocators.personalDetails.myInfoTab).click();
      await this.page.waitForSelector(this.myInfoLocators.contactDetails.contactDetailsTab);
      await this.clickElement(this.myInfoLocators.contactDetails.contactDetailsTab);
      await this.page.waitForTimeout(5000);
      await this.enterText(this.myInfoLocators.contactDetails.contactDetailsStreet1,assertion.assertion.street1);
      await this.enterText(this.myInfoLocators.contactDetails.contactDetailsStreet2,assertion.assertion.street2);
      await this.enterText(this.myInfoLocators.contactDetails.contactDetailsCity,assertion.assertion.city);
      await this.enterText(this.myInfoLocators.contactDetails.contactDetailsState,assertion.assertion.state);
      await this.enterText(this.myInfoLocators.contactDetails.contactDetailsPostalCode,assertion.assertion.postalCode);
      await this.selectDropDownElements(this.myInfoLocators.contactDetails.contactDetailsCountry,this.myInfoLocators.contactDetails.contactDetailsCountryDropDown,assertion.assertion.country);
      
    }

    async contactDetailsTelephoneField(){
      await this.page.waitForSelector(this.myInfoLocators.contactDetails.contactDeatilsHome);
      await this.enterText(this.myInfoLocators.contactDetails.contactDeatilsHome,assertion.assertion.home);
      await this.enterText(this.myInfoLocators.contactDetails.contactDetailsMobile,assertion.assertion.mobile);
      await this.enterText(this.myInfoLocators.contactDetails.contactDetailsWork,assertion.assertion.work);
      await this.page.waitForTimeout(5000);
    }

    async contactDetailsEmailField(){
      await this.page.waitForSelector(this.myInfoLocators.contactDetails.contactDetailsWorkEmail);
      await this.enterText(this.myInfoLocators.contactDetails.contactDetailsWorkEmail,assertion.assertion.workEmail);
      await this.enterText(this.myInfoLocators.contactDetails.contactDetailsOtherEmail,assertion.assertion.otherEmail);
      await this.clickSave();
      await this.getToastMessage();
    }

    async emergencyDetails(){
      await this.page.waitForSelector(this.myInfoLocators.emergencyContactDetails.emergencyContactDetailsTab);
      await this.clickElement(this.myInfoLocators.emergencyContactDetails.emergencyContactDetailsTab);
      await this.page.waitForTimeout(5000);
      await this.page.waitForSelector(this.myInfoLocators.emergencyContactDetails.emergencyContactAddBtn);
      await this.clickElement(this.myInfoLocators.emergencyContactDetails.emergencyContactAddBtn);
      await this.enterText(this.myInfoLocators.emergencyContactDetails.emergencyContactName,assertion.assertion.name);
      await this.enterText(this.myInfoLocators.emergencyContactDetails.emergencyContactRelatioship,assertion.assertion.relationship);
      await this.enterText(this.myInfoLocators.emergencyContactDetails.emergencyContactHome,assertion.assertion.home);
      await this.enterText(this.myInfoLocators.emergencyContactDetails.emergencyContactMobile,assertion.assertion.mobile);
      await this.enterText(this.myInfoLocators.emergencyContactDetails.emergencyContactWork,assertion.assertion.work);
      await this.clickSave();
      await this.getToastMessage();
    }

    async dependentsDetails(){
      await this.page.waitForSelector(this.myInfoLocators.dependents.dependentsTab);
      await this.clickElement(this.myInfoLocators.dependents.dependentsTab);
      await this.page.waitForTimeout(5000);
      await this.page.waitForSelector(this.myInfoLocators.dependents.dependentsAddBtn);
      await this.clickElement(this.myInfoLocators.dependents.dependentsAddBtn);
      await this.enterText(this.myInfoLocators.dependents.dependentsName,assertion.assertion.name);
      await this.selectDropDownElements(this.myInfoLocators.dependents.dependentsRelationship,this.myInfoLocators.dependents.dependentsRelationshipDropDown,assertion.assertion.relationship);
      await this.enterText(this.myInfoLocators.dependents.dependentsDOB,assertion.assertion.dependentDOB);
      await this.clickSave();
      await this.getToastMessage();
    }

    // async clickButtonAndVerifyToast(locatorBtn: string, locatorText: string, messageToVerify?: string) {
    //   await this.page.waitForSelector(locatorBtn)
    //   await this.page.locator(locatorBtn).click({ force: true });
    //   if (messageToVerify) {
    //     const toastText = await this.getToastTextMessage(locatorText);
    //     console.log("clickButtonAndVerifyToast Method: " + toastText);
    //     expect(toastText).toEqual(messageToVerify);
    //   }
    // }
    
    // async getToastTextMessage(locatorText: string) {
    //   await this.page.waitForSelector(locatorText);
    //   const getToastText = await this.page.locator(locatorText).textContent();
    //   console.log(`GetToastTextMessage Method: `, getToastText);
    //   return getToastText;
    // }

    async clickElementAndVerifyToast(elementLocator:string, messageToVerify:string) {
      await this.page.locator(elementLocator).click({ force: true });
  
      if (messageToVerify) {
          const toastText = await this.getToastMessage();
          console.log("clickElementAndVerifyToast Method", toastText);
          expect(toastText).toEqual(messageToVerify);
      }
  }
  
  async getNewToastMessage(locator:string) {
      const toastLocator = locator;
      const getToastText = await this.page.locator(toastLocator).textContent();
      console.log("getToastMessage Method", getToastText);
      return getToastText;
  }
  
    
    async immigrationDetails(){
      await this.page.waitForSelector(this.myInfoLocators.immigration.immigrationTab);
      await this.clickElement(this.myInfoLocators.immigration.immigrationTab);
      await this.page.waitForTimeout(5000);
      await this.page.waitForSelector(this.myInfoLocators.immigration.immigrationAddBtn);
      await this.clickElement(this.myInfoLocators.immigration.immigrationAddBtn);
      await this.enterText(this.myInfoLocators.immigration.immigrationNumber,assertion.assertion.immigrationNumber);
      await this.enterText(this.myInfoLocators.immigration.immigrationIssueDate,assertion.assertion.immigrationIssuedDate);
      await this.enterText(this.myInfoLocators.immigration.immigrationExpiredDate,assertion.assertion.immigrationExpiredDate);
      await this.enterText(this.myInfoLocators.immigration.immigrationEligibleDate,assertion.assertion.immigrationEligibleStatus);
      await this.selectDropDownElements(this.myInfoLocators.immigration.immigrationIssuedBy,this.myInfoLocators.immigration.immigrationIssuedByDraopDown,assertion.assertion.immigrationIssuedBy);
      await this.enterText(this.myInfoLocators.immigration.immigrationEligibleData,assertion.assertion.immigrationEligibleReviewDate);
      await this.enterText(this.myInfoLocators.immigration.immigrationComments,assertion.assertion.immigrationComments);
      // await this.clickElementAndVerifyToast(this.myInfoLocators.immigration.immigrationSaveBtn,"Successfully Saved");
      // await this.getNewToastMessage(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
    }

    async getTextFromElement(locator: string): Promise<string> {
      try {
        const element = await this.page.locator(locator).first();
        if (element) {
          return await element.textContent();
        } else {
          console.error(`Element not found with locator: ${locator}`);
          return '';
        }
      } catch (error) {
        console.error(`Error getting text from the element: ${error}`);
        return '';
      }
    }
    
    async jobDetails(){
      await this.page.waitForSelector(this.myInfoLocators.job.jobTab);
      await this.clickElement(this.myInfoLocators.job.jobTab);
      await this.page.waitForTimeout(5000);
      const JoinedDate = await this.getTextFromElement(this.myInfoLocators.job.jobJoinedDate);
      console.log(JoinedDate);
      const title = await this.getTextFromElement(this.myInfoLocators.job.jobJobTitle);
      console.log(title);
      const jobSpec = await this.getTextFromElement(this.myInfoLocators.job.jobNotDefined);
      console.log(jobSpec);
      const jobCat = await this.getTextFromElement(this.myInfoLocators.job.jobJobCategory);
      console.log(jobCat);
      const subUnits = await this.getTextFromElement(this.myInfoLocators.job.jobSubUnit);
      console.log(subUnits);
      const jobLocations = await this.getTextFromElement(this.myInfoLocators.job.jobLocation);
      console.log(jobLocations);
      const jobEmpStatus = await this.getTextFromElement(this.myInfoLocators.job.jobEmployementStatus);
      console.log(jobEmpStatus);
      await this.clickElement(this.myInfoLocators.job.jobInclude);
      await this.page.waitForSelector(this.myInfoLocators.job.jobContractStartDate);
      await this.page.locator(this.myInfoLocators.job.jobContractStartDate).isVisible();
      await this.page.waitForSelector(this.myInfoLocators.job.jobContractEndDate);
      await this.page.locator(this.myInfoLocators.job.jobContractEndDate).isVisible();
      await this.page.waitForSelector(this.myInfoLocators.job.jobContactDetails);
      await this.page.locator(this.myInfoLocators.job.jobContactDetails).isVisible();

    }

    async clickElementAndVerifyToastNew(elementLocator: string, messageToVerify?: string) {
      await this.page.locator(elementLocator).click({ force: true });
  
      if (messageToVerify) {
          const toastText = await this.getToastMessageNew(elementLocator);
          console.log("clickElementAndVerifyToast Method", toastText);
          expect(toastText).toEqual(messageToVerify);
      }
  }
  
  async getToastMessageNew(toastLocator: string) {
      const getToastText = await this.page.locator(toastLocator).textContent();
      console.log("getToastMessage Method", getToastText);
      return getToastText;
  }
  

    async qualificationDetails(){
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationTab);
      await this.clickElement(this.myInfoLocators.qualification.qualificationTab);
      await this.page.waitForTimeout(5000);
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationAddBtn);
      await this.clickElement(this.myInfoLocators.qualification.qualificationAddBtn);
      await this.enterText(this.myInfoLocators.qualification.qualificationCompany,assertion.assertion.qualificationCompany);
      await this.enterText(this.myInfoLocators.qualification.qualificationJobTitle,assertion.assertion.qualificationJobTitle);
      await this.enterText(this.myInfoLocators.qualification.qualificationFrom,assertion.assertion.qualificationFrom);
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationTo);
      await this.enterText(this.myInfoLocators.qualification.qualificationTo,assertion.assertion.qualificationTO);
      await this.page.click(this.myInfoLocators.qualification.qualificationTo);
      await this.enterText(this.myInfoLocators.qualification.qualificationComments,assertion.assertion.qualificationComments);
      // await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationSaveBtn);
      await this.clickElementAndVerifyToastNew(this.myInfoLocators.qualification.qualificationSaveBtn);
      await this.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
    }

    async educationDetails(){
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationEducationAddBtn);
      await this.clickElement(this.myInfoLocators.qualification.qualificationEducationAddBtn);
      await this.page.waitForTimeout(5000);
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationEducationAddBtn);
      await this.clickElement(this.myInfoLocators.qualification.qualificationEducationAddBtn);
      await this.selectDropDownElements(this.myInfoLocators.qualification.qualificationLevel,this.myInfoLocators.qualification.qualificationLevelDropDown,assertion.assertion.educationLevel);
      await this.enterText(this.myInfoLocators.qualification.qualificationInstitute,assertion.assertion.educationInstitude);
      await this.enterText(this.myInfoLocators.qualification.qualificationMajor,assertion.assertion.educationSpecification);
      await this.enterText(this.myInfoLocators.qualification.qualificationYear,assertion.assertion.educationYear);
      await this.enterText(this.myInfoLocators.qualification.qualificationScore,assertion.assertion.educationScore);
      await this.enterText(this.myInfoLocators.qualification.qualificationStartDate,assertion.assertion.qualificationFrom);
      await this.enterText(this.myInfoLocators.qualification.qualificationEndDate,assertion.assertion.qualificationFrom);
      await this.page.click(this.myInfoLocators.qualification.qualificationEndDate);
      await this.clickElementAndVerifyToastNew(this.myInfoLocators.qualification.qualificationEduSaveBtn);
      await this.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
    }

    async skillDetails(){
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationSkillAddBtn);
      await this.clickElement(this.myInfoLocators.qualification.qualificationSkillAddBtn);
      await this.page.waitForTimeout(5000);
      await this.selectDropDownElements(this.myInfoLocators.qualification.qualificationSkill,this.myInfoLocators.qualification.qualificationSkillDropDown,assertion.assertion.skill);
      await this.enterText(this.myInfoLocators.qualification.qualificationYearOfExperiance,assertion.assertion.Experiance);
      await this.enterText(this.myInfoLocators.qualification.qualificationSkillComments,assertion.assertion.skillComment);
      await this.clickElementAndVerifyToastNew(this.myInfoLocators.qualification.qualificationSkillSaveBtn);
      await this.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
    }

    async languageDetails(){
      await this.page.waitForSelector(this.myInfoLocators.qualification.qualificationLanguageAddBtn);
      await this.clickElement(this.myInfoLocators.qualification.qualificationLanguageAddBtn);
      await this.page.waitForTimeout(5000);
      await this.selectDropDownElements(this.myInfoLocators.qualification.qualificationLanguage,this.myInfoLocators.qualification.qualificationLanguageDropDown,assertion.assertion.language);
      await this.selectDropDownElements(this.myInfoLocators.qualification.qualificationLanguageFluency,this.myInfoLocators.qualification.qualificationLanguageFluencyDropDown,assertion.assertion.fluency);
      await this.selectDropDownElements(this.myInfoLocators.qualification.qualificationLanguageCompetency,this.myInfoLocators.qualification.qualificationLanguageCompetencyDropDown,assertion.assertion.competency);
      await this.enterText(this.myInfoLocators.qualification.qualificationLanguageCommets,assertion.assertion.skillComment);
      await this.clickElementAndVerifyToastNew(this.myInfoLocators.qualification.qualificationSkillSaveBtn);
      await this.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
    }

    async licenseDetails(){
      await this.page.waitForSelector(this.myInfoLocators.membership.membershipTab);
      await this.clickElement(this.myInfoLocators.membership.membershipTab);
      await this.page.waitForTimeout(5000);
      await this.page.waitForSelector(this.myInfoLocators.membership.membershipAddBtn);
      await this.clickElement(this.myInfoLocators.membership.membershipAddBtn);
      await this.selectDropDownElements(this.myInfoLocators.membership.memberships,this.myInfoLocators.membership.membershipDropDown,assertion.assertion.membership);
      await this.selectDropDownElements(this.myInfoLocators.membership.membershipSubscription,this.myInfoLocators.membership.membershipSubscriptionDropDown,assertion.assertion.membershipSubscription);
      await this.enterText(this.myInfoLocators.membership.membershipSubscriptionAmount,assertion.assertion.memberSubscriptionAmount);
      await this.selectDropDownElements(this.myInfoLocators.membership.membershipCurency,this.myInfoLocators.membership.membershipCurencyDropDown,assertion.assertion.membershipCurrency);
      await this.enterText(this.myInfoLocators.membership.membershipSubscriptionCommenceDate,assertion.assertion.qualificationFrom);
      await this.page.waitForSelector(this.myInfoLocators.membership.membershipSubscriptionRenewalDate);
      await this.enterText(this.myInfoLocators.membership.membershipSubscriptionRenewalDate,assertion.assertion.qualificationTO);
      await this.page.click(this.myInfoLocators.membership.membershipSubscriptionRenewalDate);
      await this.clickElementAndVerifyToastNew(this.myInfoLocators.qualification.qualificationSkillSaveBtn);
      await this.getToastMessageNew(this.myInfoLocators.contactDetails.contactDetailsToastMsg);
    }

}


