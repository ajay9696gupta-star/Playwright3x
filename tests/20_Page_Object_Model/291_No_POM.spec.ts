import {test, expect} from '@playwright/test';

test.describe('Fixture test', () => {
    const data = {
        description: "Valid credentials",
        username: "admin@gmail.com",
        password: "admin123",
        expectedURL: /admin/,
        shouldPass: true
    }

    test('test with: $(data.description)', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
       
      // Page Locators  
      let textboxEmailAdress =  page.locator('#email');
      let textboxPassword =  page.locator('#password');
      let buttonLogin =  page.getByTestId('login-button');


      // Page methods
        await textboxEmailAdress.fill(data.username);
        await textboxPassword.fill(data.password);
        await buttonLogin.click();


        
        await expect(page).toHaveURL(data.expectedURL);
    }
});