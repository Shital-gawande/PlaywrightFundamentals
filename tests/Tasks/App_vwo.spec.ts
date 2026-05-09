//Please now automate the App.vwo invalid username and password with error message. But now you have to use get by role. 

import {test, expect } from "@playwright/test";

test("verify error message and use getbyrole", async({page})=>{
    
    await page.goto("https://app.vwo.com/#/login");

   await page.getByRole('textbox',{name: 'Email address'}).fill('Admin');
   await page.getByRole('textbox', {name: 'Password'}).fill("pass123");
   // With only {name: 'Sign in'} 4 elements are getting matched, so we need to use exact: true to match the exact element with name: Sign in
    // Can see all 4 element description in report generated after test execution
   await page.getByRole('button', {name: 'Sign in', exact: true }).click();
    

    const errorMessage = page.locator('#js-notification-box-msg');
    await expect(errorMessage).toContainText('Your email, password, IP address or location did not match');

});