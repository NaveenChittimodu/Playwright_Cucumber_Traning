import { Page, expect,Locator } from "@playwright/test";
import { Pimlocators } from "../common/Locators/pimLocators";
import { GenericMethods } from "../utils/commomMethods";

export  class Pimmenu {
    readonly page: Page;
    private readonly pimlocators: Pimlocators;
    readonly genericMethods: GenericMethods;
    

    constructor(page: Page) {
        this.page = page;
        this.pimlocators = new Pimlocators(page);
        this.genericMethods = new GenericMethods(page); 
    }

    async clickpim(){
        await (await this.page.waitForSelector(this.pimlocators.PIM)).isVisible();
        await this.page.locator(this.pimlocators.PIM).click();
    }

    async clickaddemployee() {
        await (await this.page.waitForSelector(this.pimlocators.addemployee)).isVisible();
        await this.page.locator(this.pimlocators.addemployee).click();
    }

    async fillPIMfirstname(){
        await (await this.page.waitForSelector(this.pimlocators.firstName)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.firstName)).isEditable();
        await  this.page.locator(this.pimlocators.firstName).fill('yaswanth');
    }
    
    async fillPIMmiddlename(){
        await (await this.page.waitForSelector(this.pimlocators.middlename)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.middlename)).isEditable();
        await  this.page.locator(this.pimlocators.middlename).fill('lebu');
    }
    
    async fillPIMlastname(){
        await (await this.page.waitForSelector(this.pimlocators.lastname)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.lastname)).isEditable();
        await  this.page.locator(this.pimlocators.lastname).fill('leburu');
    }  
    
    async fillEmployeeid(){
        await (await this.page.waitForSelector(this.pimlocators.employeeId)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.employeeId)).isEditable();
        await  this.page.locator(this.pimlocators.employeeId).fill('8757');
    }

    async clickSavebutton() {
        await (await this.page.waitForSelector(this.pimlocators.savebutton)).isVisible();
        await this.page.locator(this.pimlocators.savebutton).click();
    }

    async fillOtherId() {
        await (await this.page.waitForSelector(this.pimlocators.otherID)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.otherID)).isEditable();
        await  this.page.locator(this.pimlocators.otherID).fill('8235');
    }

    async fillSnnNumber() {
        await (await this.page.waitForSelector(this.pimlocators.ssnNumber)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.ssnNumber)).isEditable();
        await  this.page.locator(this.pimlocators.ssnNumber).fill('9321');
    }

    async filldriverslicensenumber() {
        await (await this.page.waitForSelector(this.pimlocators.driversLicenseNumber)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.driversLicenseNumber)).isEditable();
        await  this.page.locator(this.pimlocators.driversLicenseNumber).fill('87656789');
    }

    async filllicenseexpiryDate() {
        await (await this.page.waitForSelector(this.pimlocators.licenseExpiryDate)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.licenseExpiryDate)).isEditable();
        await this.page.locator(this.pimlocators.licenseExpiryDate).click();
        await this.page.locator(this.pimlocators.licenseExpiryDateSelect).click();
    }
    
    async fillSinNumber() {
        await (await this.page.waitForSelector(this.pimlocators.sinNumber)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.sinNumber)).isEditable();
        await  this.page.locator(this.pimlocators.sinNumber).fill('5535');
    }
    
    async selectdropdown_Nationality() {
        await (await this.page.waitForSelector(this.pimlocators.nationality)).isVisible();
        await this.page.locator(this.pimlocators.nationality).click();
        await this.page.locator(this.pimlocators.selectnationality).click();
        
    }

    async selectdropdown_Marital_Status() {
        await (await this.page.waitForSelector(this.pimlocators.maritalstatus)).isVisible();
        await this.page.locator(this.pimlocators.maritalstatus).click();
        await this.page.locator(this.pimlocators.selectmaritalstatus).click();
    }

    async clickrequiredSavebutton() {
        await (await this.page.waitForSelector(this.pimlocators.requiredsavebutton)).isVisible();
        await this.page.locator(this.pimlocators.requiredsavebutton).click();
    }
    
    async clickonMaleRadiobutton() {
        await (await this.page.waitForSelector(this.pimlocators.maleRadioButton)).isVisible();
        await this.page.locator(this.pimlocators.maleRadioButton).click();
    }

    async selectdropdownBloodtype() {
        await (await this.page.waitForSelector(this.pimlocators.bloodtype)).isVisible();
        await this.page.locator(this.pimlocators.bloodtype).click();
        await this.page.locator(this.pimlocators.selectbloodtype).click();
    }

    async clickcustomSavebutton() {
        await (await this.page.waitForSelector(this.pimlocators.customsavebutton)).isVisible();
        await this.page.locator(this.pimlocators.customsavebutton).click();
    }

    async clickattachmentAddandUploadfile() {
        await this.page.locator(this.pimlocators.attachmentAddButton).click();
        await this.genericMethods.uploadFiles(this.pimlocators.clickonUploadBrowser,"sampleFile.jpeg");
        
    }
    
    async fillAttacmentComment() {
        await (await this.page.waitForSelector(this.pimlocators.attachmentComment)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.attachmentComment)).isEditable();
        await  this.page.locator(this.pimlocators.attachmentComment).fill('Samplepage');
    }

    async clickAttachmentSave() {
        await (await this.page.waitForSelector(this.pimlocators.attachmentSaveButton)).isVisible();
        await this.page.locator(this.pimlocators.attachmentSaveButton).click();
    }

    async clickAttachmentCancel() {
        await (await this.page.waitForSelector(this.pimlocators.attachmentCancelButton)).isVisible();
        await this.page.locator(this.pimlocators.attachmentCancelButton).click();
    }
    
    async clickContactDetails() {
        await (await this.page.waitForSelector(this.pimlocators.contatDetails)).isVisible();
        await this.page.locator(this.pimlocators.contatDetails).click();
    }

    async fillstreet1() {
        await (await this.page.waitForSelector(this.pimlocators.street1)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.street1)).isEditable();
        await (await this.page.waitForSelector(this.pimlocators.street1)).click();
        await  this.page.locator(this.pimlocators.street1).fill('Lanchohills');
    }

    async fillstreet2() {
        await (await this.page.waitForSelector(this.pimlocators.street2)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.street2)).isEditable();
        await (await this.page.waitForSelector(this.pimlocators.street2)).click();
        await  this.page.locator(this.pimlocators.street2).fill('Manikonda');
    }

    async fillcity() {
        await (await this.page.waitForSelector(this.pimlocators.city)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.city)).isEditable();
        await (await this.page.waitForSelector(this.pimlocators.city)).click();
        await  this.page.locator(this.pimlocators.city).fill('Hyderabad');
    }

    async fillHomeNO() {
        await (await this.page.waitForSelector(this.pimlocators.homeNO)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.homeNO)).isEditable();
        await (await this.page.waitForSelector(this.pimlocators.homeNO)).click();
        await  this.page.locator(this.pimlocators.homeNO).fill('456787');
    }

    async fillotherEmail() {
        await (await this.page.waitForSelector(this.pimlocators.otherEmail)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.otherEmail)).isEditable();
        await (await this.page.waitForSelector(this.pimlocators.otherEmail)).click();
        await  this.page.locator(this.pimlocators.otherEmail).fill('yas@gmail.com');
    }
    
    async clickContact_Details_Save() {
        await (await this.page.waitForSelector(this.pimlocators.saveContactDetails)).isVisible();
        await this.page.locator(this.pimlocators.saveContactDetails).click();
    }
    async clickEmergencyContacts() {
        await (await this.page.waitForSelector(this.pimlocators.emergencyContacts)).isVisible();
        await this.page.locator(this.pimlocators.emergencyContacts).click();
    }

    async clickADDEmergencyContacts() {
        await (await this.page.waitForSelector(this.pimlocators.add_AssignedEmergencyContacts)).isVisible();
        await this.page.locator(this.pimlocators.add_AssignedEmergencyContacts).click();
    }

    async fillname_AssignedEmergencyContacts() {
        await (await this.page.waitForSelector(this.pimlocators.name_AssignedEmergencyContacts)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.name_AssignedEmergencyContacts)).isEditable();
        await  this.page.locator(this.pimlocators.name_AssignedEmergencyContacts).fill('dill');
    }

    async fillrelationship_AssignedEmergencyContacts() {
        await (await this.page.waitForSelector(this.pimlocators.relationship_AssignedEmergencyContacts)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.relationship_AssignedEmergencyContacts)).isEditable();
        await  this.page.locator(this.pimlocators.relationship_AssignedEmergencyContacts).fill('bro');
    }

    async fillHomeTelephone_AssignedEmergencyContacts() {
        await (await this.page.waitForSelector(this.pimlocators.HomeTelephone_AssignedEmergencyContacts)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.HomeTelephone_AssignedEmergencyContacts)).isEditable();
        await  this.page.locator(this.pimlocators.HomeTelephone_AssignedEmergencyContacts).fill('765678');
    }

    async fillmobile_AssignedEmergencyContacts() {
        await (await this.page.waitForSelector(this.pimlocators.mobile_AssignedEmergencyContacts)).isVisible();
        await (await this.page.waitForSelector(this.pimlocators.mobile_AssignedEmergencyContacts)).isEditable();
        await  this.page.locator(this.pimlocators.mobile_AssignedEmergencyContacts).fill('9236637727');
    }

    async clickSAVEEmergencyContacts() {
        await (await this.page.waitForSelector(this.pimlocators.save_AssignedEmergencyContacts)).isVisible();
        await this.page.locator(this.pimlocators.save_AssignedEmergencyContacts).click();
    }

    async clickDependents() {
        await (await this.page.waitForSelector(this.pimlocators.clickon_Dependents)).isVisible();
        await this.page.locator(this.pimlocators.clickon_Dependents).click();
        await this.page.locator(this.pimlocators.add_AssignedDependents).click();
        await (await this.page.waitForSelector(this.pimlocators.name_AssignedDependents)).isEditable();
        await this.page.locator(this.pimlocators.name_AssignedDependents).fill('RAJ');
        await this.page.locator(this.pimlocators.relationship_AssignedDependents).click();
        await this.page.locator(this.pimlocators.select_relatioship_AssignedDependents).click();
        await this.page.locator(this.pimlocators.save_relatioship_AssignedDependents).click();
    }

    async clickJob() {
        await (await this.page.waitForSelector(this.pimlocators.clickon_job)).isVisible();
        await this.page.locator(this.pimlocators.clickon_job).click();
        await this.page.locator(this.pimlocators.joinedDate).click();
        await this.page.locator(this.pimlocators.joinedDate_selection).click();
        await this.page.locator(this.pimlocators.jobtitle).click();
        await this.page.locator(this.pimlocators.jobtitle_selection).click();
        await this.page.locator(this.pimlocators.jobcategory).click();
        await this.page.locator(this.pimlocators.jobcategory_selection).click();
        await this.page.locator(this.pimlocators.employmentStatus).click();
        await this.page.locator(this.pimlocators.employmentStatus_selection).click();
        await this.page.locator(this.pimlocators.save_Jobdetails).click();
    }

    async clickReport_to() {
        await (await this.page.waitForSelector(this.pimlocators.clickon_Reportto)).isVisible();
        await this.page.locator(this.pimlocators.clickon_Reportto).click();
        await this.page.locator(this.pimlocators.add_AssignedSupervisors).click();
        await (await this.page.waitForSelector(this.pimlocators.name_AssignedSupervisors)).isEditable();
        await this.page.locator(this.pimlocators.name_AssignedSupervisors).fill('Willette  Hagenes');
        await this.page.locator(this.pimlocators.selectname_AssignedSupervisors).click();
        await this.page.locator(this.pimlocators.reportingMethod_AssignedSupervisors).click();
        await this.page.locator(this.pimlocators.selectreportingMethod_AssignedSupervisors).click();
        await this.page.locator(this.pimlocators.save_AssignedSupervisors).click();
    }

    async fillEmployee_Information() {
        await (await this.page.waitForSelector(this.pimlocators.PIM)).isVisible();
        await this.page.locator(this.pimlocators.PIM).click();
        await (await this.page.waitForSelector(this.pimlocators.employee_Name_EmployeeInformation)).isEditable();
        await this.page.locator(this.pimlocators.employee_Name_EmployeeInformation).fill('yas');
        await this.page.locator(this.pimlocators.selectemployee_Name_EmployeeInformation).click();
        await this.page.locator(this.pimlocators.employee_ID_EmployeeInformation).fill('8757');
        await this.page.locator(this.pimlocators.employment_Status_EmployeeInformation).click();
        await this.page.locator(this.pimlocators.selectemployment_Status_EmployeeInformation).click();
        await (await this.page.waitForSelector(this.pimlocators.supervisor_Name_EmployeeInformation)).isEditable();
        await this.page.locator(this.pimlocators.supervisor_Name_EmployeeInformation).fill('Le mkm Huy');
        await this.page.locator(this.pimlocators.selectsupervisor_Name_EmployeeInformation).click();
        await this.page.locator(this.pimlocators.jobtitle_EmployeeInformation).click();
        await this.page.locator(this.pimlocators.selectjobtitle_EmployeeInformation).click();
        await this.page.locator(this.pimlocators.search_EmployeeInformation).click();
        await (await this.page.waitForSelector(this.pimlocators.searchRecord)).isVisible();
        const recordResult = await this.page.locator(this.pimlocators.searchRecord).textContent();
        console.log("result",recordResult)
    }
 
    async Deleterecord() {
        await (await this.page.waitForSelector(this.pimlocators.PIM)).isVisible();
        await this.page.locator(this.pimlocators.PIM).click();
        await (await this.page.waitForSelector(this.pimlocators.deleterecord)).isVisible();
        await this.page.locator(this.pimlocators.deleterecord).click();
        await (await this.page.waitForSelector(this.pimlocators.yesdeleterecord)).isVisible();
        await this.page.locator(this.pimlocators.yesdeleterecord).click();
    }
    
    async fillreports() {
        await (await this.page.waitForSelector(this.pimlocators.PIM)).isVisible();
        await this.page.locator(this.pimlocators.PIM).click();
        await this.page.locator(this.pimlocators.reports).click();
        await this.page.locator(this.pimlocators.reportName).fill('PIM Sample Report');
        await this.page.locator(this.pimlocators.selectReportName).click();
        await this.page.locator(this.pimlocators.employeeReports_Search).click();
        const recordSearch = await this.page.locator(this.pimlocators.recordSearchReport).textContent();
        console.log("Report record",recordSearch);
        await this.page.locator(this.pimlocators.editReport).click();
        await this.page.locator(this.pimlocators.selectionCriteria).click();
        await this.page.locator(this.pimlocators.select_SelectionCriteria).click();
        await this.page.locator(this.pimlocators.selectDisplayFieldGroup).click()
        await this.page.locator(this.pimlocators.select_selectDisplayFieldGroup).click()
        await this.page.locator(this.pimlocators.selectDisplayField).click()
        await this.page.locator(this.pimlocators.select_selectDisplayField).click()
        await this.page.locator(this.pimlocators.includeHeader_off).click()
        await this.page.locator(this.pimlocators.includeHeader_off).click()
        await this.page.locator(this.pimlocators.cancel_EditReport).click()
    }

    async addreports() {
        await (await this.page.waitForSelector(this.pimlocators.employeeReportsAdd)).isVisible();
        await this.page.locator(this.pimlocators.employeeReportsAdd).click();
        await this.page.locator(this.pimlocators.employeeReportsAdd_ReportName).fill("yaswanth");
        await this.page.locator(this.pimlocators.employeeReportsAdd_SelectionCriteria).click();
        await this.page.locator(this.pimlocators.employeeReportsAdd_select_SelectionCriteria).click();
        await this.page.locator(this.pimlocators.employeeReportsAdd_SelectDisplayFieldGroup).click();
        await this.page.locator(this.pimlocators.employeeReportsAdd_select_SelectDisplayFieldGroup).click();
        await this.page.locator(this.pimlocators.employeeReportsAdd_SelectDisplayField).click();
        await this.page.locator(this.pimlocators.employeeReportsAdd_select_SelectDisplayField).click();
        await this.page.locator(this.pimlocators.employeeReportsAdd_SelectDisplayField_plus).click();
        await this.page.locator(this.pimlocators.employeeReportsAdd_IncludeHeader_on).click();
        await this.page.locator(this.pimlocators.employeeReportsAdd_save).click();
        await this.page.locator(this.pimlocators.reports).click();
        let recordData = await (await this.page.waitForSelector(this.pimlocators.employeeReports_data)).isVisible();
        console.log("record Validation",recordData)
        await this.page.locator(this.pimlocators.employeeReports_RecordDelete).click();
        await this.page.locator(this.pimlocators.employeeReports_RecordDeleteYes).click();
    }
}