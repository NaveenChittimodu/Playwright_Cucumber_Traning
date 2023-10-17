import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    //headless: false,
   viewport: null,
    launchOptions: {
        args: ["--start-maximized", "--disable-extensions", "--disable-plugins"],
        headless: false,
        // timeout: Number.parseInt(process.env.BROWSER_LAUNCH_TIMEOUT, 10),
        downloadsPath: "./test-results/downloads",
    },

    acceptDownloads: true,
    //viewport: { width: 1280, height: 720 },
    // actionTimeout: Number.parseInt(process.env.ACTION_TIMEOUT, 10) * timeInMin,
    // navigationTimeout: Number.parseInt(process.env.NAVIGATION_TIMEOUT, 10) * timeInMin,
    ignoreHTTPSErrors: true,
    screenshot:"on",
    trace : "on"
},


  testDir: './test/steps',

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  
  /* Configure projects for major browsers */
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" }
  },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});