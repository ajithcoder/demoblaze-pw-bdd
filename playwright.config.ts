import dotenv from "dotenv";

// Load environment variables
dotenv.config();

import { defineConfig, devices } from "@playwright/test";
import { defineBddProject } from "playwright-bdd";

export default defineConfig({
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["list"], ["html"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",
    video: "retain-on-failure",
    screenshot: "on",
    ignoreHTTPSErrors: true,
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      ...defineBddProject({
        name: "setup",
        features: "./tests/features/setup/login-tests.feature",
        steps: ["./tests/steps/*.ts", "./tests/fixtures/fixtures.ts"],
        outputDir: "./bddtests/setup",
        matchKeywords: true,
      }),
      fullyParallel: true,
      use: {
        ...devices["Desktop Chrome"],
        channel: "chromium",
        headless: true,
      },
    },
    {
      ...defineBddProject({
        name: "DemoBlaze_E2E_Tests",
        features:
          "./tests/features/addToCart_tests/addToCart-tests.feature",
        steps: ["./tests/steps/*.ts", "./tests/fixtures/fixtures.ts"],
        outputDir: "./bddtests/demoblaze_e2e",
        matchKeywords: true,
      }),
      dependencies: ["setup"],
      fullyParallel: true,
      use: {
        ...devices["Desktop Chrome"],
        headless: false,
        channel: "chromium",
        storageState: ".auth/state.json",
      },
    },
  ],
});
