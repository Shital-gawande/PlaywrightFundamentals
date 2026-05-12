import {test, expect} from '@playwright/test';

test("QA Profile form", async ({page}) =>{
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');

    //persional information
    await page.locator('#first-name').fill('Shital');
    await page.locator('#last-name').fill('Gawande');
    await page.getByTestId('gender-female').check();

    //Professional details
    await page.locator('#years-experience').selectOption('7');
    await page.waitForTimeout(4000);
    await page.locator('#profile-date').fill('2026-05-04');
    await page.locator('//input[@value="Automation Tester"]').check();

    //Technical skills
    await page.locator('//input[@value="Selenium Webdriver"]').click();
    await page.getByText(' Asia').check();
    
    //submit the form
    await page.locator('#profile-submit').click();


});