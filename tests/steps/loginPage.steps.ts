import ENV from "../../utils/env";
import { Given, When, Then, AfterAll } from "../fixtures/fixtures";

Given('the user launches the application and opens login dialog', async ({loginPage}) => {
    await loginPage.launchApplication();
  });
  
  When('the user enters valid username and password in the login form', async ({}) => {
    // Step: When the user enters valid username and password in the login form
    // From: tests\features\setup\login-tests.feature:8:5
  });
  
  When('the user clicks the Log in button', async ({}) => {
    // Step: And the user clicks the Log in button
    // From: tests\features\setup\login-tests.feature:9:5
  });
  
  Then('the user login should be success and user name should be displayed on product store page', async ({}) => {
    // Step: Then the user login should be success and user name should be displayed on product store page
    // From: tests\features\setup\login-tests.feature:10:5
  });