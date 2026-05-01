import { test, expect } from '@playwright/test';

test('getbyRole demo', async ({ page }) =>{

    await page.goto("https://katalon-demo-cura.herokuapp.com");

    let button = page.getByRole('link', {name: 'Make Appointment'});
    await button.click();
    
});