import { test as baseTest, createBdd } from "playwright-bdd";
import { LoginPage } from "../../pages/loginPage";

type Pages = {
  loginPage: LoginPage;
};

export const test = baseTest.extend<Pages>({
  //modified to include POM fixt
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export const { Given, When, Then, AfterAll } = createBdd(test); // enabling test with BDD style
export const expect = test.expect;
