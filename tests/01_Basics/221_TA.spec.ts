import { test, expect} from '@playwright/test';

test("Navigating to the TTA Website",async({page}) =>{
   await page.goto("https://wccqa.on24.com/webcast/login");
});

test("BCP - in app.vwo.com two roles", async({ browser}) => {

    let amdinContext = await browser.newContext();
    let userContext = await browser.newContext();
    let guestContext = await browser.newContext();

    let adminPage = await amdinContext.newPage();
   await adminPage.goto("https://wccqa.on24.com/webcast/login");

    let userPage = await userContext.newPage();
   await userPage.goto("https://wcc.on24.com/webcast/login");

    let guestPage = await guestContext.newPage();
   await guestPage.goto("https://wcc.eu.on24.com/webcast/login");

    await adminPage.close();
    await userPage.close();
    await guestPage.close();
});