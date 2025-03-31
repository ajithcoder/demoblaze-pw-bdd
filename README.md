# demoblaze-pw-bdd
This demo projects intends to automate the practice website https://www.demoblaze.com/index.html with playwright typescript, incoporating docker and github actions

## Project Structure

- **.github/**: Enabling CI run on GitHub Actions
- **.auth/**: Contains session storge for reusing sessions (added to .gitignore)
- **bddtests/**: Contains BDD specific auto generated test spec files to execute the playwright test.Gets created with command npx bddgen
- **pages/**: Contains page object models for different pages in the application.
- **playwright-report/**: Contains the Playwright test report.
- **tests/**: Contains feature files, step definition files, and fixtures.
- **utils/**: Contains helper functions that are generally used in the Framework
- **.env/**: Contains login credentials (added to .gitignore)
- **playwright.config.ts**: Contains playwright configurations as well as bdd specific configurations

## Key Features:

- **Automated Cookies handling(Storage state reuse)**
- **BDD Framework with feature file having steps written with GHERKIN keywords**
- **Reusable steps with parameterisation**
- **Customized scripts to enable bdd file creation and test run on single command**
- **Additionally added package : playwright-bdd - to make the playwright tests with BDD format**
- **Helper functions to handle progress bar overlay, notification handler etc**
- **Parallel run**
- **Enabled to run on CI - Github Actions**
- **Project supports running Playwright-BDD tests inside a Docker container**
