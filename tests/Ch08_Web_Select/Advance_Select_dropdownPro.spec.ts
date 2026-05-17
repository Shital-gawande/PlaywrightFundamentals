import {test, expect} from '@playwright/test';

test('Advance Select - Dropdown Pro', async ({page}) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    await page.locator('div.tta-rs__value-container').first().click();
    await page.getByText('Cypress').click();
    await page.waitForTimeout(3000); 

    await page.getByTestId('rs-multi-input').click();
    await page.getByText("Pytest", { exact: true }).click();
    await page.getByText("JUnit", { exact: true }).click();
    await page.keyboard.press("Escape");

    await page.getByTestId('rs-creatable-input').click();
    await page.getByText('performance', { exact: true }).click();
    await page.getByText('accessibility', { exact: true }).click();
    await page.keyboard.press("Escape");

    await page.locator("#rs-async").click();
    await page.getByTestId('rs-async-input').fill('pun');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
    await page.getByRole('option', { name: 'Pune' }).click();



    await page.waitForTimeout(5000);

});