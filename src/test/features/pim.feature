Feature: Fill the data in pim

  Background:
    Given User Login to OrangeHrm application

  Scenario: User need  to validate PIM in the appliication
    When User click on PIM menu
    Then User click on Add Employee menu
    Then User enter the First Name
    Then User enter the Middle Name
    Then User enter the Last Name
    Then User enter the Employee Id
    Then User click on Save button
    Then User enter the Other Id
    # Then User enter the driversLicenseNumber
    Then User enter the licenseExpiryDate
    Then User enter the Snn Number
    Then User enter the Sin Number
    # Then User selects nationality as Indian
    # Then User selects Marital Status as Single
    # Then User click on Male Radio button
    Then User click on RequiredSave button
    # Then User selects Blood type as A+
    Then User click on CustonSave button
    Then User click on Add attachment and upload file
    Then User enter the Attachment Comment
    Then User click on Add attachment Cancel Button
    Then User click on Add reattachment and upload file
    Then User enter the Attachment reComment
    Then User click on Add attachment Save Button
    # Then User click on Delete Button
    Then User click on Contct Details
    # Then User enter the street1

    Then User click on Emergency Contacts
    Then User click on Add Assigned Emergency Contacts
    Then User enter the name in Assigned Emergency Contacts
    Then User enter the relationship in Assigned Emergency Contacts
    Then User enter the mobile in Assigned Emergency Contacts