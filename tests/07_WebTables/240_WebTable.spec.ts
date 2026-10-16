import {test, expect} from '@playwright/test';

test('Verify the webtable', async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    //await page.locator("//td[text()='Rohan.Mehta']/preceding-sibling::td/input").click();

    //pseudo-classes
    await page.locator("tr:has(td:text('Rohan.Mehta'))").locator('input').first().click();
    
});