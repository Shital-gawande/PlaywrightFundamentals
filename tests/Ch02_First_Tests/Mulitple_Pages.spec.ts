import { chromium } from "playwright";

async function run() {

    let browser = await chromium.launch({headless: false});

    let context = await browser.newContext();

    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/#login");
     console.log("Tab 1: Dashboard");
    
    let page2 = await context.newPage();
    await page2.goto("https://app.vwo.com/#dashboard");
     console.log("Tab 2: Setting");

     page1.close();
     page2.close();
     context.close();
     browser.close();
    
}
run();