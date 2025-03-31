import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly LogInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = this.page.locator('mat-form-field [id="mat-input-0"]');
    this.passwordField = this.page.locator('mat-form-field [id="mat-input-1"]');
    this.LogInButton = this.page.locator(`button:has-text("Sign in")`);
  }

  async launchApplication() {
    const baseURL = process.env.BASE_URL || "https://www.demoblaze.com/index.html"; // Fallback
    await this.page.goto(baseURL);
    await this.page.waitForLoadState("load");
    await expect(this.page).toHaveTitle("STORE");
    await expect(this.page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  }
  
}
