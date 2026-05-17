import {test,expect} from '@playwright/test';

test('Select from dropdown', async({ page }) =>{
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    await page.locator('#dropdown').click();

    await page.locator('#dropdown').selectOption('Option 1');

    await page.selectOption('#dropdown', 'Option 2');
    await page.waitForTimeout(3000);
});