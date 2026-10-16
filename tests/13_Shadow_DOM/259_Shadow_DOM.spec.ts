import {test, expect, Locator} from '@playwright/test';

test.describe('Verify Shadow DOM elements', () => {

    const url = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom";

    test.beforeEach(async ({ page }) => {
        console.log("Before running any testcase!");
        await page.goto(url);
    });

    test('verify Shadow DOM elements', async ({ page }) => {

        const card = page.getByTestId('card-account-card');
        await  card.getByPlaceholder('you@example.com').fill("ajay@example.com");
        await card.getByLabel('password').fill("123456");
        await card.getByTestId('card-account-submit').click();
        await expect(card.getByTestId('card-account-status')).toContainText('ajay@example.com');    

        await page.pause();

});

});