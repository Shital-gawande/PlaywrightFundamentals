import {test, expect} from '@playwright/test';

test('TTA Bank registration', async ({page}) => {

    await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
   
    //click on sign up button
    await page.getByRole('button', {name: 'Sign Up'}).click();
    await page.waitForTimeout(4000);

    //fill the registration form and create account
    await page.getByPlaceholder('John Doe').fill('Shital');
    await page.locator('//input[@type="email"]').fill("Shital.gawande@coforge.com");
    await page.locator('//input[@type="password"]').fill("Shital@123");
    await page.getByRole('button', {name: ' Create Account'}).click();
    await page.waitForTimeout(4000);
    
    //check the balance and verify amount
    const balace = page.locator('//p[text()="Total Balance"]//following-sibling::h3');
    expect(balace).toHaveText('$50,000.00');

    //click on transfer fund and transfer the amount 
    await page.getByRole('button', {name: 'Transfer Funds'}).click();
    await page.waitForTimeout(4000);
    await page.locator('//input[@type="number"]').fill('5000');
    await page.locator('//button[text()="Continue"]').click();
    await page.getByRole('button', {name: 'Confirm Transfer'}).click();
   
    // go back to dashborad and verify the balance after transfer
    await  page.getByRole('button', {name: 'Dashboard'}).click();
    await page.waitForTimeout(2000);
    expect(balace).toHaveText('$45,000.00');
});