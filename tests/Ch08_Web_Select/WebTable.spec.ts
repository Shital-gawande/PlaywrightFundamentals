import {test, expect} from '@playwright/test';

test('select from web table', async ({ page }) =>{
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');
    await page.locator('//td[text()= "Aarav.Sharma"]/preceding-sibling::td').click(); 
    
    await page.locator('tr:has(td:text("Priya.Nair"))').click();
    await page.waitForTimeout(5000);
});