import {test, expect} from '@playwright/test';

test.describe('test multiple elements', ()=>{

    test('click my account link',  async ({page }) =>{
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
        let linkTexts: string[] = await page.locator('a.list-group-item').allTextContents();

        for(let linkText of linkTexts){
            if(linkText === 'My Account'){
                await page.getByText(linkText).first().click();
                break;
            }
        }

        const locators = await page.locator('a.list-group-item').all();
        for (const link of locators) {
            console.log(await link.getAttribute("href"));
        }

    });

});