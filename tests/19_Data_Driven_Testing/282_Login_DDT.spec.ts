import { test , expect} from '@playwright/test';
import loginData from './test-data/login.json';

test.describe('Login - data driven', () => {
  const url = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';

   test.beforeEach(async ({ page }) => {
        console.log("Before running any testcase!");
        await page.goto(url);
    });
  
    test('Login with valid credentials', async ({ page }) => {

      await page.locator('#email').fill(loginData.validUser.email);
      await page.locator('#password').fill(loginData.validUser.password);
      await page.getByTestId('login-button').click();
    await page.pause();
  });

  test('Login with invalid credentials', async ({ page }) => {

   // const jsObject = JSON.parse(loginData.invalidUser.email = "ajay");

      await page.locator('#email').fill(loginData.invalidUser.email);
      await page.locator('#password').fill(loginData.invalidUser.password);
      await page.getByTestId('login-button').click();
    await page.pause();
  });
});