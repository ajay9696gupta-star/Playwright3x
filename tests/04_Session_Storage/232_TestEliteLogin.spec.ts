import {test, expect} from '@playwright/test';

// Load the saved session

test.use(
    {
    storageState : './user-session.json'
});

test("go directly to webcast page 1- no login", async ({page}) => {
    await page.goto("https://wccqa.on24.com/webcast/webcasts");
    await expect(page).toHaveURL(/webcast/);
    console.log("Webcast page Loaded - no login needed");
    await page.waitForTimeout(5000);
});

test("go directly to webcast page 2- no login", async ({page}) => {
    await page.goto("https://wccqa.on24.com/webcast/webcasts");
    await expect(page).toHaveURL(/webcast/);
    console.log("Webcast page Loaded - no login needed");
    await page.waitForTimeout(5000);
});

test("go directly to webcast page 3- no login", async ({page}) => {
    await page.goto("https://wccqa.on24.com/webcast/webcasts");
    await expect(page).toHaveURL(/webcast/);
    console.log("Webcast page Loaded - no login needed");
    await page.waitForTimeout(5000);
});
