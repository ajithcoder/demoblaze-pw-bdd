// Generated from: tests\features\setup\login-tests.feature
import { test } from "../../../../../tests/fixtures/fixtures.ts";

test.describe('User Authentication Tests', () => {

  test.beforeEach('Background', async ({ Given, loginPage }) => {
    await Given('the user launches the application and opens login dialog', null, { loginPage }); 
  });
  
  test('User logs in with valid credentials', async ({ When, And, Then }) => { 
    await When('the user enters valid username and password in the login form'); 
    await And('the user clicks the Log in button'); 
    await Then('the user login should be success and user name should be displayed on product store page'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\setup\\login-tests.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user launches the application and opens login dialog","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user enters valid username and password in the login form","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And the user clicks the Log in button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the user login should be success and user name should be displayed on product store page","stepMatchArguments":[]}]},
]; // bdd-data-end