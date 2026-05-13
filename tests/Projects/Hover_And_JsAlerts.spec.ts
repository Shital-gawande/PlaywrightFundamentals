import {test, expect} from '@playwright/test';

test("Hover and JavaScript Alerts testing", async ({page}) =>{

   await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    await page.getByTestId('nav-add-ons').hover();
     await page.waitForTimeout(2000);
    await page.getByTestId('test-id-Wifi').click();
     await page.waitForTimeout(2000);
     let text = await  page.locator('#output').textContent();
     expect(text).toContain('Wi-Fi');

});