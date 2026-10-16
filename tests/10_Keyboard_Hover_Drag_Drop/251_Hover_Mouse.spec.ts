import {test, expect, Locator} from '@playwright/test';

test('Verify Keyboard Hover Drag Drop functionality', async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    await page.getByText('Add-ons',{exact: true}).hover();
    await page.getByTestId('test-id-Wifi').click();

    
    await page.pause();


});
