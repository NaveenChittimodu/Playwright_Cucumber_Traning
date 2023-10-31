import { Given, When, Then, Before, BeforeAll, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Page, chromium, Browser, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_Page"
import ENV from "../../../src/utils/env";
import { Pimmenu } from "../../pages/pimPage";
import { Pimlocators } from "../../common/Locators/pimLocators";


let page: Page;
let pimmenu: Pimmenu;
let browser: Browser;
let pimlocators : Pimlocators;
let loginPage : LoginPage;

setDefaultTimeout(60 * 1000 * 2)

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false ,args: ['--window-position=-8,0']});
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    pimlocators = new Pimlocators(page);
    pimmenu = new Pimmenu(page);
    console.log("ENV-======",ENV)

});

Given('User Login to OrangeHrm application', async function () {
    console.log("`${ENV.BASEURL}`======",`${ENV.BASEURL}`);
    await loginPage.visit(`${ENV.BASEURL}`);
    await page.waitForTimeout(5000);
    await loginPage.loginOrangeHRM(`${ENV.USERNAME}`,`${ENV.PASSWORD}`);    
});


When('User click on PIM menu', async function () {
    await pimmenu.clickpim();
    console.log("test1")
});

Then('User click on Add Employee menu', async function () {
    await pimmenu.clickaddemployee();
    console.log("test2")
});

Then('User enter the First Name', async function () {
    await pimmenu.fillPIMfirstname()
    console.log("test3");
});

Then('User enter the Middle Name', async function () {
    await pimmenu.fillPIMmiddlename()
    console.log("test4")
});

Then('User enter the Last Name', async function () {
    await pimmenu.fillPIMlastname()
    console.log("test5")
});

Then('User enter the Employee Id', async function () {
    await pimmenu.fillEmployeeid()
    console.log("test6")
});

Then('User click on Save button', async function () {
    await pimmenu.clickSavebutton();
    console.log("test7")
});

Then('User enter the Other Id', async function () {
    await pimmenu.fillOtherId()
    console.log("test8")    
});

Then('User enter the driversLicenseNumber',async function () {
    await pimmenu.filldriverslicensenumber()
    console.log("test9")
}); 

Then('User enter the licenseExpiryDate', async function () {
    await pimmenu.filllicenseexpiryDate()
    console.log("test10")
});

Then('User enter the Snn Number', async function () {
    await pimmenu.fillSnnNumber()
    console.log("test11")
});

Then('User enter the Sin Number', async function () {
    await pimmenu.fillSinNumber()
    console.log("test12")
});

Then('User selects nationality as Indian', async function () {
    await pimmenu.selectdropdown_Nationality()
    console.log("test13")
});

Then('User selects Marital Status as Single', async function () {
    await pimmenu.selectdropdown_Marital_Status()
    console.log("test14")
});

Then('User click on Male Radio button',async function () {
    await pimmenu.clickonMaleRadiobutton();
    console.log("test15") 
})

Then('User click on RequiredSave button', async function () {
    await pimmenu.clickrequiredSavebutton();
    console.log("test16")
});

Then('User selects Blood type as A+', async function () {
    await pimmenu.selectdropdownBloodtype()
    console.log("test17")
});

Then('User click on CustonSave button', async function () {
    await pimmenu.clickcustomSavebutton();
    console.log("test18")
});

Then('User click on Add attachment and upload file',async function () {
    await pimmenu.clickattachmentAddandUploadfile();
    console.log("test19")
})

Then('User enter the Attachment Comment', async function () {
    await pimmenu.fillAttacmentComment()
    console.log("test20")
});

Then('User click on Add attachment Cancel Button',async function () {
    await pimmenu.clickAttachmentSave();
    console.log("test21")
})

Then('User click on Add reattachment and upload file',async function () {
    await pimmenu.clickattachmentAddandUploadfile();
    console.log("test22")
})

Then('User enter the Attachment reComment', async function () {
    await pimmenu.fillAttacmentComment()
    console.log("test23")
});

Then('User click on Add attachment Save Button',async function () {
    await pimmenu.clickAttachmentSave();
    console.log("test24")
})

Then('User click on Contct Details',async function () {
    await pimmenu.clickContactDetails();
    console.log("test25")
})

Then('User enter the street1 Contct Details',async function () {
    await pimmenu.fillstreet1()
    console.log("test26")
})

Then('User enter the street2 Contct Details', async function () {
    await pimmenu.fillstreet2()
    console.log("test27")
});

Then('User enter the city Contct Details', async function () {
    await pimmenu.fillcity()
    console.log("test28")
});

Then('User enter the HomeNO Contct Details', async function () {
    await pimmenu.fillHomeNO()
    console.log("test29")
});

Then('User enter the otherEmail Contct Details', async function () {
    await pimmenu.fillotherEmail()
    console.log("test30")
});

Then('User click on Contct Details Save Button', async function () {
    await pimmenu.clickContact_Details_Save()
    console.log("test31")
});

Then('User click on Emergency Contacts',async function () {
    await pimmenu.clickEmergencyContacts();
    console.log("test32")
    
})

Then('User click on Add Assigned Emergency Contacts',async function () {
    await pimmenu.clickADDEmergencyContacts();
    console.log("test33")
    
})

Then('User enter the name in Assigned Emergency Contacts', async function () {
    await pimmenu.fillname_AssignedEmergencyContacts()
    console.log("test34")
    
});

Then('User enter the relationship in Assigned Emergency Contacts', async function () {
    await pimmenu.fillrelationship_AssignedEmergencyContacts()
    console.log("test35")
    
});

Then('User enter the Home Telephone in Assigned Emergency Contacts', async function () {
    await pimmenu.fillHomeTelephone_AssignedEmergencyContacts()
    console.log("test36")
});

Then('User enter the mobile in Assigned Emergency Contacts', async function () {
    await pimmenu.fillmobile_AssignedEmergencyContacts()
    console.log("test37")
    
});

Then('User click on save Assigned Emergency Contacts',async function () {
    await pimmenu.clickSAVEEmergencyContacts();
    console.log("test38")
})

Then('User click on Dependents',async function () {
    await pimmenu.clickDependents();
    console.log("test39")
})

Then('User click on Job',async function () {
    await pimmenu.clickJob();
    console.log("test40")
})

Then('User click on Report to',async function () {
    await pimmenu.clickReport_to();
    console.log("test41")
})

Then('User fill the Employee Information',async function () {
    await pimmenu.fillEmployee_Information();
    console.log("test42")
})

Then('User delete the record',async function () {
    await pimmenu.Deleterecord();
    console.log("test43")

})

Then('User fill the Reports',async function () {
    await pimmenu.fillreports();
    console.log("test44")
    await pimmenu.addreports();
    console.log("test45")
})


AfterAll(async () => {

     await page.close();
     await browser.close();


})