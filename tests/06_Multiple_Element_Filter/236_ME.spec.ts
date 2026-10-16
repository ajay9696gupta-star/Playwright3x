import {test, expect, Locator} from '@playwright/test';

test('Basic verify how to handle multiple element', async({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinksText: Locator[] =  await page.locator('a.list-group-item').all();
    console.log(rightPanelLinksText.length);

    for(const link of rightPanelLinksText) {
        console.log(link);
        console.log(await link.getAttribute('href'));
    }

    
    await page.pause();


});