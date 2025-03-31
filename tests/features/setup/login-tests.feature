Feature: User Authentication Tests

  Background:
    Given the user launches the application and opens login dialog

  Scenario: User logs in with valid credentials
    When the user enters valid username and password in the login form
    And the user clicks the Log in button
    Then the user login should be success and user name should be displayed on product store page
