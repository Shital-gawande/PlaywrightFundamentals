import { chromium, Browser, BrowserContext,Page } from "playwright"; 

async function  run() {
     // LEVEL 1: Launch browser — heaviest operation, do it once
    let browser: Browser = await chromium.launch({headless: false});
     console.log("Browser Launched", browser);


     // LEVEL 2: Create context — fresh session, isolated cookies
     let context: BrowserContext = await browser.newContext();
      console.log("Context created", context);

    // LEVEL 3: Open page — a tab inside the context
     let page: Page = await context.newPage();
    console.log("Page opened");

    await page.goto("https://www.w3schools.com/typescript/typescript_special_types.php");
    console.log("titile:", await page.title());

    page.close();
    context.close();
    browser.close();
    
}

run();