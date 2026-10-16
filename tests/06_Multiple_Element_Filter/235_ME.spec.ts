import {test, expect} from '@playwright/test';

test('Basic verify how to handle multiple element', async({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinksText: string[] =  await page.locator('a.list-group-item').allInnerTexts();
    console.log(rightPanelLinksText.length);

    for(const link of rightPanelLinksText) {
        console.log(link);
    }

    for(const linkText of rightPanelLinksText) {
        if(linkText === "Forgotten Password"){
            await page.getByText(linkText).first().click();
        }
    }

    const rightPanelLink = await page.locator('a.list-group-item').all();
    for(const link of rightPanelLink){
        console.log(await link.getAttribute("href"));
    }

    await page.pause();


});