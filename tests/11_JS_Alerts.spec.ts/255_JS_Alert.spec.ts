import {test, expect, Locator} from '@playwright/test';

test.describe.serial('Verify JS Alert functionality', () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    });
    
    test('Verify JS Alert', async ({page}) => {

        page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        })
        await page.getByRole('button', { name: 'Click for JS Alert' }).click();
         
    });
    test('Verify JS Confirmation', async ({page}) => {
        page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        })
        await page.getByRole('button', { name: 'Click for JS Confirmation' }).click();
         
    });
    test('Verify JS Prompt', async ({page}) => {
        page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        })
        await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
         
    });
    
});

