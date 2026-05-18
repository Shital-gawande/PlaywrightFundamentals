import { test, expect } from '@playwright/test';

test('Frame tests', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    const frame1 = page.frameLocator('[name="vehicle-form"]');

    await frame1.locator('#RESULT_TextField-1').fill('Tata seria');
    await frame1.locator('#RESULT_TextField-2').fill('Saket Takalikar');
    await frame1.locator('#RESULT_TextField-3').fill('MH13AB3849');
    await frame1.locator('#RESULT_RadioButton-1').click();
    await frame1.locator('#RESULT_RadioButton-1').selectOption('Two-wheeler');
    await frame1.locator('#RESULT_TextField-4').fill('2025');
    await frame1.locator('#vehicle-submit').click();
    await page.waitForTimeout(3000);
   

});
