import {test, expect} from '@playwright/test';

test('Verify the webtable', async ({page}) => {
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const usernameInput = page.getByPlaceholder('Username');
    await usernameInput.fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button',{name:'Login'}).click();

     
await page.pause();
});
