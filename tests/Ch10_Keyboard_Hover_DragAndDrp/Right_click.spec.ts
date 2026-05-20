import {test, expect} from '@playwright/test';

test('right click test', async({page}) =>{

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    await page.getByTestId('ctx-target').first().click({ button: 'right' });

    //get all the options 

    const allOptions = await page.locator('ul.context-menu-list is-open').allInnerTexts();
    console.log(allOptions);

    await page.getByText('Edit', { exact: true }).click();
    await page.waitForTimeout(2000);
    
});
