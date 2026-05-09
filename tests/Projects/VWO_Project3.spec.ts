//for the incorrect Gmail ID, verify that the message will come. 

import { test, expect } from '@playwright/test';

test('verify error message', async ({ page }) => {
    // 1. Navigate to the page
    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");

    // 2. Fill the email field
    await page.locator('#page-v1-step1-email').fill('Shital@gmail.com');

    // 3. Trigger the error (Validation usually happens when you click away or press Enter)
    await page.keyboard.press('Enter');

    // 4. Locate the error element
    const errorLocator = page.getByText("doesn't look like a business domain", { exact: false });

    // 5. Use 'await expect' for web-first assertions. 
    // This will automatically wait for the message to appear before failing.
    await expect(errorLocator).toContainText("gmail.com doesn't look like a business domain. Please use your business email");
});