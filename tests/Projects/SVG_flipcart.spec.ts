import {test, expect} from '@playwright/test';

test("SVG element testing", async ({page}) =>{

   await page.goto('https://www.flipkart.com/search');
   await page.locator('//input[@name="q"]').fill('macmini');
   await page.locator('svg').first().click();
   await page.waitForTimeout(4000);
   await page.getByText('Price -- Low to High').click();
   await page.waitForTimeout(2000);
   const text = await page.locator('//div[@class="RGLWAk"]//a[3]//div[@class="hZ3P6w"]').first().textContent();
   console.log(text);


});