import { test, expect } from '@playwright/test';

test('Web Table', async ({ page }) => {
    await page.goto("http://app.thetestingacademy.com/playwright/webtable");

    await page.locator('#employee-search').fill('kabir');
    await page.waitForTimeout(2000); 

    await page.locator('//td[text()="Kabir.Khan"]//preceding-sibling::td/input').check();
    await page.waitForTimeout(2000); 
    await expect(page.locator('#selected-output')).toHaveText('Kabir.Khan');


});