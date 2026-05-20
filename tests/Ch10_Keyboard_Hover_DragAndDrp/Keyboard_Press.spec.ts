import {test, expect,FrameLocator} from '@playwright/test';

test('Keyboard Press Test', async ({ page}) =>{

    await page.goto('https://keycode.info');

    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' });
    await page.keyboard.press('ArrowLeft');
    await page.screenshot({ path: 'ArrowLeft.png' });
    await page.keyboard.press('Shift+s');
    await page.screenshot({ path: 'Shift+s.png' });

    await page.keyboard.up("Shift");
    await page.keyboard.down("Shift");
});