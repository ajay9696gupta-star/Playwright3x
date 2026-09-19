import {test, expect} from '@playwright/test'

test.describe('Login page', () => { //They are grouped together

    test('valid credientials', async({page}) => {
        await page.goto("https://wccqa.on24.com/webcast/login")


    });
    test('Invalid credientials', async({page}) => {
        await page.goto("https://wcc.on24.com/webcast/login")

    });
    test.skip('checkout with paypal', async ({page}) =>{
    // never execute
});
    test.only('login as Ajay', async ({page}) =>{
    // Only this test runs.
});
});