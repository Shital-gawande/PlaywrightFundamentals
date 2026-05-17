import {test, expect} from '@playwright/test';

test.describe('Shadow Dom', ()=>{

    test.beforeEach(async({page}) => {
        await page.goto('https://selectorshub.com/xpath-practice-page/');
    });

    test('handle shadow dom', async ({page}) => {
        

    });
});