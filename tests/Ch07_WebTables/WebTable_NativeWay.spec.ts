import {test, expect} from '@playwright/test';

test.describe('Webtable handling playwright way', ()=>{

    test('Webtable handling', async ({page} ) =>{

        await page.goto('https://awesomeqa.com/webtable1.html');

        const rows = page.locator('table[summary="Sample Table"] tbody tr');

        const rowCount = await rows.count();

        for(let i= 0;i<rowCount; i++){

           const data = await rows.nth(i).locator('td').allInnerTexts();
           console.log(`Row ${i} data is - ${data}`);
        }

    });
});