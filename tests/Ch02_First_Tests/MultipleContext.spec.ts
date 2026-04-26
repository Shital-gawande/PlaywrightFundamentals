import { Browser, chromium } from "playwright";

async function run(){

    let browser = await chromium.launch({headless: false});

    //admin 
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://www.w3schools.com/typescript/typescript_special_types.php");


    //viewer
    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://www.w3schools.com/typescript/typescript_special_types.php");

    await viewerContext.close();
    await adminContext.close();
    await browser.close();
}

run();