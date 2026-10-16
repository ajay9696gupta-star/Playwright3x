import {test, expect, Locator} from '@playwright/test';


test.describe('Verify SVG elements', () => {

    const url = "https://www.flipkart.com/search";

    test.beforeEach(async ({ page }) => {
        console.log("Before running any testcase!");
        await page.goto(url);
    });

test('Verify SVG elements', async ({ page }) => {

    await page.locator('input[name = "q"]').fill("macmini");
    const svgElement: Locator = page.locator('svg');
    await svgElement.first().click();

    const titleResult: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");   

    const count: number = await titleResult.count();
    for(let i=0;i<count;i++){
        const title: string | null = await titleResult.nth(i).textContent();
        console.log(title);
    }


    await page.pause();

});

});