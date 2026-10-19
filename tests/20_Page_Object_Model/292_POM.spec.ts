import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('POM with Login page simple', () => {
    test('Login with valid crediential', async ({ page }) => {

        // with POM
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("standard_user", "tta_secret");
        await expect(page).toHaveTitle("TTACart - Login");
        


    });
})