Feature: :Verifying the OrangeHRM LoginPage Components and Successful Login
  
  Background: 
        Given User Login to OrangeHrm application
       
    Scenario:User Verify the visible Components
        Then User verify the OrangeHRM Logo
        Then User verify the loginPage Logo
        Then User verify the username and password components
        Then User verify the username input and password input
        Then User verify the login button and forget password option

    Scenario:User Login should be success  
        When User enter the username as "Admin"
        When User enter the password as "admin@123"
        When User click on the login button
        Then Login should be success

    Scenario:Verifying User should be able to click forget password button
        Then User should able to click the forgot password
        Then User Verify the Username Components
        Then User Verify the Cancel button
        Then User Verify the Reset Password button
        When User Click the cancel button
        Then verify the User back to login page

    Scenario:Verifying User should be able reset password
        When User should able to click the forgot password
        Then User pass the username in the input box
        Then User click the reset password
        Then verify the reset password success message 
        
    Scenario: Login should not be success
         Then User enter the username as "kasthuri"
         Then User enter the password as "Kasthuri@123"
         When User click on the login button
         Then login should fail 
