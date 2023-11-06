import {Locator, Page} from '@playwright/test'

export class Pimlocators{
   
    readonly page: Page;
    readonly PIM: string;
    readonly addemployee: string;
    readonly firstName: string;
    readonly middlename: string;
    readonly lastname : string;
    readonly employeeId : string;
    readonly savebutton : string;
    readonly otherID : string;
    readonly driversLicenseNumber : string;
    readonly licenseExpiryDate:string;
    readonly licenseExpiryDateSelect:string;
    readonly ssnNumber: string;
    readonly sinNumber:string;
    readonly nationality :string;
    readonly selectnationality:string;
    readonly maritalstatus :string;
    readonly selectmaritalstatus:string;
    readonly requiredsavebutton: string; 
    readonly maleRadioButton: string;
    readonly bloodtype: string;
    readonly selectbloodtype : string;
    readonly customsavebutton :string;
    readonly attachmentAddButton :string;
    readonly clickonUploadBrowser :string;
    readonly attachmentComment :string;
    readonly attachmentSaveButton :string;
    readonly attachmentCancelButton :string;
    readonly selectRecord :string;
    readonly deleteSelected :string;
    readonly contatDetails :string;
    readonly street1 :string;
    readonly street2 :string;
    readonly city :string;
    readonly homeNO :string;
    readonly saveContactDetails :string;
    readonly otherEmail :string;
    readonly emergencyContacts :string;
    readonly add_AssignedEmergencyContacts :string;
    readonly name_AssignedEmergencyContacts :string;
    readonly relationship_AssignedEmergencyContacts :string;
    readonly HomeTelephone_AssignedEmergencyContacts :string;
    readonly mobile_AssignedEmergencyContacts :string;
    readonly save_AssignedEmergencyContacts :string;
    readonly clickon_Dependents :string;
    readonly add_AssignedDependents :string;
    readonly name_AssignedDependents :string;
    readonly relationship_AssignedDependents :string;
    readonly select_relatioship_AssignedDependents :string;
    readonly save_relatioship_AssignedDependents :string;
    readonly clickon_job:string;
    readonly joinedDate:string;
    readonly joinedDate_selection :string;
    readonly jobtitle:string;
    readonly jobtitle_selection :string;
    readonly jobcategory:string;
    readonly jobcategory_selection :string;
    readonly employmentStatus :string;
    readonly employmentStatus_selection :string;
    readonly save_Jobdetails :string;
    readonly clickon_Reportto :string;
    readonly add_AssignedSupervisors :string;
    readonly name_AssignedSupervisors :string;
    readonly selectname_AssignedSupervisors:string;
    readonly reportingMethod_AssignedSupervisors:string;
    readonly selectreportingMethod_AssignedSupervisors :string;
    readonly save_AssignedSupervisors :string;
    readonly employee_Name_EmployeeInformation :string;
    readonly selectemployee_Name_EmployeeInformation:string;
    readonly employee_ID_EmployeeInformation :string;
    readonly employment_Status_EmployeeInformation:string;
    readonly selectemployment_Status_EmployeeInformation:string;
    readonly supervisor_Name_EmployeeInformation:string;
    readonly selectsupervisor_Name_EmployeeInformation:string;
    readonly jobtitle_EmployeeInformation:string;
    readonly selectjobtitle_EmployeeInformation:string;
    readonly search_EmployeeInformation:string;
    readonly searchRecord:string;
    readonly deleterecord:string;
    readonly yesdeleterecord :string;
    readonly reports :string;
    readonly reportName :string;
    readonly selectReportName :string;
    readonly employeeReports_Search :string;
    readonly recordSearchReport :string;
    readonly editReport :string;
    readonly selectionCriteria :string;
    readonly select_SelectionCriteria :string;
    readonly selectDisplayFieldGroup :string;
    readonly select_selectDisplayFieldGroup :string;
    readonly selectDisplayField :string;
    readonly select_selectDisplayField :string;
    readonly includeHeader_off :string;
    readonly includeHeader_on :string;
    readonly cancel_EditReport :string;
    readonly employeeReportsAdd :string;
    readonly employeeReportsAdd_ReportName :string;
    readonly employeeReportsAdd_SelectionCriteria :string;
    readonly employeeReportsAdd_select_SelectionCriteria :string;
    readonly employeeReportsAdd_SelectDisplayFieldGroup :string;
    readonly employeeReportsAdd_select_SelectDisplayFieldGroup :string;
    readonly employeeReportsAdd_SelectDisplayField :string;
    readonly employeeReportsAdd_select_SelectDisplayField :string;
    readonly employeeReportsAdd_SelectDisplayField_plus :string;
    readonly employeeReportsAdd_IncludeHeader_on :string;
    readonly employeeReportsAdd_save :string;
    readonly employeeReports_data :string;
    readonly employeeReports_RecordDelete :string;
    readonly employeeReports_RecordDeleteYes :string;
   
   
    constructor(page: Page){
        this.page = page
        this.PIM = "//span[text()='PIM']";
        this.addemployee = "//a[contains(text(),'Add Employee')]";
        this.firstName = "//input[@placeholder='First Name']";
        this.middlename = "//input[@placeholder='Middle Name']";
        this.lastname = "//input[@placeholder='Last Name']";
        this.employeeId="(//label[text()='Employee Id']/following::div/input)";
        this.savebutton="//button[@type='submit']";
        this.otherID ="//label[normalize-space(text())='Other Id']//parent::div//following-sibling::div//input";
        this.driversLicenseNumber=`(//label[text()="Driver's License Number"]/following::div/input)[1]`;
        this.licenseExpiryDate="//label[text()='License Expiry Date']//parent::div//following-sibling::div/div//input";
        this.licenseExpiryDateSelect="//div[text()='10']"
        this.ssnNumber="//label[text()='SSN Number']//parent::div//following-sibling::div//input";
        this.sinNumber =`//label[text()='SIN Number']//parent::div//following-sibling::div//input`;
        this.nationality = "(//div[text()='-- Select --'])[1]";
        this.selectnationality="//span[text()='Indian']";
        this.maritalstatus="//label[text()='Marital Status']/following::div[@clear='false']"
        this.selectmaritalstatus="//span[text()='Single']";
        this.maleRadioButton= "//label[text()='Male']";
        this.requiredsavebutton = "//p[text()=' * Required']/following-sibling::button";
        this.bloodtype = "(//div[@class='oxd-select-text--after']//i)[3]";
        this.selectbloodtype="//span[text()='A+']";
        this.customsavebutton = "(//form/following::div/hr/following::div/button)[1]";
        this.attachmentAddButton ="//button[@class='oxd-button oxd-button--medium oxd-button--text']";
        this.clickonUploadBrowser ="div.oxd-file-div.oxd-file-div--active";
        this.attachmentComment ="textarea[placeholder='Type comment here']";
        this.attachmentSaveButton = "//button[@type='button']/following-sibling::button";
        this.attachmentCancelButton ="button.oxd-button.oxd-button--medium.oxd-button--ghost";
        this.selectRecord ="oxd-table-card-cell-checkbox";
        this.deleteSelected ="//i[@class='oxd-icon bi-trash']";

        this.contatDetails ="//a[contains(text(),'Contact Details')]";
        this.street1 ="(//label[text()='Street 1']/following::input)[1]";
        this.street2 ="(//label[text()='Street 2']/following::input)[1]";
        this.city ="(//label[text()='City']/following::input)[1]";
        this.homeNO ="(//label[text()='Home']/following::input)[1]";
        this.otherEmail ="(//label[text()='Other Email']/following::input)[1]";
        this.saveContactDetails ="//p[text()=' * Required']/following-sibling::button";

        this.emergencyContacts ="//a[contains(text(),'Emergency Contacts')]";
        this.add_AssignedEmergencyContacts ="//h6[text()='Assigned Emergency Contacts']/following-sibling::button";

        this.name_AssignedEmergencyContacts =`(//label[text()='Name']/following::input)[1]`;
        this.relationship_AssignedEmergencyContacts =`(//label[text()='Relationship']/following::input)[1]`;
        this.HomeTelephone_AssignedEmergencyContacts =`(//label[text()='Home Telephone']/following::input)[1]`;
        this.mobile_AssignedEmergencyContacts =`(//label[text()='Mobile']/following::input)[1]`;
        this.save_AssignedEmergencyContacts = "//button[@type='submit']";
        this.clickon_Dependents = "//a[contains(text(),'Dependents')]"; 
        this.add_AssignedDependents ="//h6[text()='Assigned Dependents']/following-sibling::button";
        this.name_AssignedDependents ="(//label[text()='Name']/following::input)[1]";
        this.relationship_AssignedDependents ="//div[text()='-- Select --']";
        this.select_relatioship_AssignedDependents ="//span[text()='Child']";
        this.save_relatioship_AssignedDependents = "button[type='submit']";

        this.clickon_job ="//a[contains(text(),'Job')]";
        this.joinedDate = "i.oxd-icon.bi-calendar";
        this.joinedDate_selection = "//div[text()='2']";
        this.jobtitle = "(//div[text()='-- Select --'])[1]";
        this.jobtitle_selection = "//span[text()='QA Engineer']";
        this.jobcategory = "(//div[text()='-- Select --']/following-sibling::div)[1]";
        this.jobcategory_selection ="//span[text()='Professionals']";
        this.employmentStatus ="(//div[text()='-- Select --'])[3]"
        this.employmentStatus_selection ="//span[text()='Full-Time Permanent']";
        this.save_Jobdetails ="button[type='submit']";

        this.clickon_Reportto ="//a[contains(text(),'Report-to')]";
        this.add_AssignedSupervisors ="//h6[text()='Assigned Supervisors']/following-sibling::button";
        this.name_AssignedSupervisors ="//input[@placeholder='Type for hints...']";
        this.selectname_AssignedSupervisors="//span[text()='Willette  Hagenes']";
        this.reportingMethod_AssignedSupervisors="i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow";
        this.selectreportingMethod_AssignedSupervisors ="//span[text()='Direct']";
        this.save_AssignedSupervisors ="button[type='submit']";
        
        this.employee_Name_EmployeeInformation ="(//label[text()='Employee Name']/following::input)[1]";
        this.selectemployee_Name_EmployeeInformation="//span[text()='yaswanth lebu leburu']";
        this.employee_ID_EmployeeInformation ="(//label[text()='Employee Id']/following::input)[1]";
        this.employment_Status_EmployeeInformation="(//div[text()='-- Select --'])[1]";
        this.selectemployment_Status_EmployeeInformation="//span[text()='Full-Time Permanent']";
        this.supervisor_Name_EmployeeInformation="(//label[text()='Supervisor Name']/following::input)[1]";
        this.selectsupervisor_Name_EmployeeInformation="//span[text()='Le mkm Huy']";
        this.jobtitle_EmployeeInformation="(//div[text()='-- Select --'])[1]";
        this.selectjobtitle_EmployeeInformation="//span[text()='QA Engineer']";
        this.search_EmployeeInformation="//button[text()=' Search ']";
        this.searchRecord="//div[@class='oxd-table-row oxd-table-row--with-border oxd-table-row--clickable']";
        this.deleterecord ="(//i[@class='oxd-icon bi-trash'])[1]";
        this.yesdeleterecord="//button[text()=' Yes, Delete ']";

        this.reports="//a[contains(text(),'Reports')]";
        this.reportName ="input[placeholder='Type for hints...']";
        this.selectReportName ="//span[text()='PIM Sample Report']";
        this.employeeReports_Search ="//button[text()=' Search ']";
        this.recordSearchReport ="//div[text()='PIM Sample Report']";
        this.editReport =" //i[@class='oxd-icon bi-pencil-fill']";
        this.selectionCriteria ="//label[text()='Selection Criteria']/following::i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'][1]";
        this.select_SelectionCriteria ="//span[text()='Employee Name']";
        this.selectDisplayFieldGroup ="//label[text()='Selection Criteria']/following::i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'][3]";
        this.select_selectDisplayFieldGroup ="//span[text()='Emergency Contacts']";
        this.selectDisplayField ="//label[text()='Selection Criteria']/following::i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'][4]";
        this.select_selectDisplayField ="//span[text()='ecSeqNo']";
        this.includeHeader_off ="(//span[contains(@class,'oxd-switch-input oxd-switch-input--active')])[1]";
        this.includeHeader_on= "span.oxd-switch-input.oxd-switch-input--focus.--label-right";
        this.cancel_EditReport="//button[text()=' Cancel ']";

        this.employeeReportsAdd="//button[text()=' Add ']";
        this.employeeReportsAdd_ReportName ="//label[text()='Report Name']/following::input";
        this.employeeReportsAdd_SelectionCriteria="(//div[@class='oxd-select-text--after']//i)[1]";
        this.employeeReportsAdd_select_SelectionCriteria="//span[text()='Employee Name']";
        this.employeeReportsAdd_SelectDisplayFieldGroup="(//div[text()='-- Select --'])[1]";
        this.employeeReportsAdd_select_SelectDisplayFieldGroup= "//span[text()='Personal']";
        this.employeeReportsAdd_SelectDisplayField ="//div[text()='-- Select --']";
        this.employeeReportsAdd_select_SelectDisplayField ="//span[text()='Employee Last Name']";
        this.employeeReportsAdd_SelectDisplayField_plus="//label[text()='Select Display Field']/following::i[@class='oxd-icon bi-plus']";
        this.employeeReportsAdd_IncludeHeader_on="//div[@class='oxd-switch-wrapper']//label[1]";
        this.employeeReportsAdd_save="//button[text()=' Save ']";
        this.employeeReports_data="//div[text()='yaswanth']";
        this.employeeReports_RecordDelete="//div[text()='yaswanth']/following::i[@class='oxd-icon bi-trash']";
        this.employeeReports_RecordDeleteYes="//button[text()=' Yes, Delete ']";



    }
}