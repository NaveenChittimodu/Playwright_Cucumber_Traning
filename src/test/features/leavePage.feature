Feature: :Verifying the OrangeHRM LoginPage Components and Successful Login

    Background: User Leave functionality
        Given User Login to OrangeHrm application


     Scenario: User can able to see the leave page
        Then user is able to see Apply Leave page and components
        Then user is able to see My leave list components
        Then user is able to see Reset functionality
        Then user is able to see Search functionality


    # Scenario: User can able to see the myleave page

        Then user is able to see List page components
        Then user is able to perform List page components multiselect functionality
        Then user is able to perform List page components individual select
        Then user is able to perform view functionality
        Then user is able to perform edit functionality
        Then user is able to perform delete functionality

    # Scenario: User can able to see the entitlement page    

        When user is able to see Add Entitlements Components
        Then user is able to Perform Cancel functionality
        Then user is able to Perform Save functionality
        Then user is able to see Employee entitlement components
        Then user is able to see Search Employee Entitlements Components
        Then user is able to see My leave entitlements components
        Then user is able to Perform My leave entitlements search components
        Then user is able to see My leave entitlements List page components


        # record
        Then user is able to see Leave Entitlements and Usage Report components
        Then user is able to see My Leave Entitlements and Usage Report components


