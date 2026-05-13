import {test, expect} from '@playwright/test';

test("Iframe testing", async ({page}) =>{

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
    const frame1 = page.frameLocator('#frame-one');
    await frame1.locator('#RESULT_TextField-1').fill('Hyundai');

    await frame1.locator('[name="ownerName"]').fill('Shital');

    await frame1.locator('#RESULT_TextField-3').fill('MH12-SD-7895');
    await frame1.locator('#RESULT_RadioButton-1').selectOption('Electric');

    await frame1.locator('#RESULT_TextField-4').fill('2025');

    await frame1.locator('#vehicle-submit').click();
    await page.waitForTimeout(2000); 
});