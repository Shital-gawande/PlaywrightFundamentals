import { test, expect } from '@playwright/test';

test('verify error msg on app.vwo.com', async ({page}) =>{
    await page.goto("https://app.vwo.com/#login");

    let userName = page.locator("#login-username");
    let password = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");

    await userName.fill("Admin");
    await password.fill("pass123");
    await loginButton.click();

    console.log("All actions completed ✅");

    let errMsg = page.locator("#js-notification-box-msg");
     // error_message.getByText()
     await expect(errMsg).toContainText("Your email, password, IP address or location did not match");

});