import {expect, test} from '@playwright/test';

test('verify heading', async({page}) =>{
   await page.goto("https://playwright.dev/");
   await page.getByRole('link',{name: 'Get started'}).click();

});

// Skip test
test.skip('skip this',async({page}) => {
    // This test is skipped
});

// Only run this test
test.only('run only this',async({page}) =>{

});

// Mark as failing
test.fail('fail this', async({page}) =>{

});

// Slow test (3x timeout)
/*test.slow('slow test', async ({ page }) => {
    // Has extended timeout
});
*/
// Conditional skip
test('conditional', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Not supported in Firefox');
});