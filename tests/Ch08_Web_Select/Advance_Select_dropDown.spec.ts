import {test, expect} from '@playwright/test';

test('advance select from dropdown', async ({ page }) =>{
    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    await page.locator('#lang-trigger').click();
    await page.waitForTimeout(1000);
    await page.getByText('TypeScript').click();
    await page.waitForTimeout(3000);

    await page.locator('#experience-trigger').click();

    await page.getByText("Senior (7+ years)").click();

    await page.locator('#dropdown-save').click();
    await page.waitForTimeout(3000);

});