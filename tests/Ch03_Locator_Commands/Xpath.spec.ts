import { test, expect } from '@playwright/test';

test('xpath demo', async({page}) =>{
    await page.goto("https://app.vwo.com/#login");

    //we can write the xpath like below and page.locator('//input[@data-qa="hocewoqisi"]');
    // page.locator("xpath=//input[@data-qa='hocewoqisi']") both works fine

    let userName = page.locator('//input[@data-qa="hocewoqisi"]');
    let password = page.locator("//input[@data-qa='jobodapuxe']");
    let loginButtion = page.locator("//button[@data-qa='sibequkica']");

    await userName.fill("Admin");
    await password.fill("Pass34");
    await loginButtion.click();


});