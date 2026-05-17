import {test, expect} from '@playwright/test';

test.describe('Webtable learning', ()=>{

    test('Webtable learning', async ({page}) => {
        await page.goto('https://awesomeqa.com/webtable.html');

        const firstPart = '//table[@id="customers"]/tbody/tr[';
        const secondPart = ']/td[';
        const thirdPart = ']';

        const rows = await page.locator('//table[@id="customers"]/tbody/tr').count();
        const columns = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();

        for(let i=2; i<=rows; i++){
            for(let j=1;j<=columns; j++){
                const xpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
                console.log(xpath);
                const data = await page.locator(xpath).textContent();
                console.log(data);
                if(data?.includes('	Helen Bennett')){
                    const countryPath = `${xpath}/following-sibiling::td`;
                    const country = await page.locator(countryPath).innerText();
                    console.log('------');
                    console.log(`Helen Bennett is In - ${country}`);
                }

            }
        }

    });
});