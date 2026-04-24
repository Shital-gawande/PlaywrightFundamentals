import { test, expect } from '@playwright/test';

test('Verify first test', async ({ page }) =>{

    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle('Login - VWO');
    let image = page.locator('#vow-login-logo');
    await expect(image).toBeVisible();
});