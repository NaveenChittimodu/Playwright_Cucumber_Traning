Feature: Fill the data in admin

  Background:
    Given User Login to OrangeHrm application

  Scenario: User need  to validate Directory in the appliication
    When User click on Admin menu
    Then User fill the Languages data
    Then User fill the Memberships data
    