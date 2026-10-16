import { chromium } from 'playwright';
import dotenv from "dotenv";

dotenv.config();

const Elite_UserName = process.env.Elite_UserName;
const Elite_Password = process.env.Elite_Password;

async function saveSession() {

    let browser = await chromium.launch({headless: false});
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://wccqa.on24.com/webcast/login");
    await page.waitForTimeout(5000);

    await page.fill("#username", Elite_UserName);
    await page.fill("#password", Elite_Password);
    await page.waitForTimeout(1500);

    await page.locator("button[data-testid='Login_submitButton']").click();
    await page.waitForURL("https://wccqa.on24.com/webcast/webcasts");
    await page.waitForTimeout(5000);

    await context.storageState({path: "./user-session.json"});
    console.log("Session saved to user-session.json");

    
}

saveSession();