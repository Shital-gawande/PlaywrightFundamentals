import { test, expect } from '@playwright/test';

test('press sequentially ', async({page }) =>{
    await page.goto("https://app.vwo.com/#login");

     await page.locator('//input[@data-qa="hocewoqisi"]').
     pressSequentially("the testing academy", { delay: 200 });

});