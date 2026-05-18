import {test, expect,Locator} from '@playwright/test';

test('Multiple Frames test', async ({ page}) =>{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    const framemain = page.frameLocator('frame[name="main"]');
    const text = await framemain.locator('h2').textContent();
    console.log(text);

    //all frames 
    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log('total number of frames: ' + allFrames.length);

    for (const frame of allFrames) {
        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));

    }
    const sideframe = page.frameLocator('frame[name="side"]');
    await sideframe.getByTestId('side-link-registration').click();

});