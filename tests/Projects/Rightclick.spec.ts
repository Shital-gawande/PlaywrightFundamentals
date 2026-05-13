import {test, expect} from '@playwright/test';

test("Right-click testing", async ({page}) =>{

   await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
   await page.getByTestId('ctx-target').click({button:'right'});
   await page.waitForTimeout(2000);
   await page.locator('//button[@class="context-menu-item"]/span[text()="Edit"]').click();
   await page.waitForTimeout(2000);
   const text = await page.locator('#output').textContent();
   expect(text).toContain('Edit');



});