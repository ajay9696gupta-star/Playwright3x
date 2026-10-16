import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Scroll the element', () => {
  const url = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';

   test.beforeEach(async ({ page }) => {
        console.log("Before running any testcase!");
        await page.goto(url);
    });
  
    test('Expect', async ({ page }) => {

      const heading = page.getByAltText('multiple element filters',{ exact: true  });
      await expect(heading).toBeVisible();
      await expect(heading).toContainText('filters', { timeout: 10000 });

      const email = page.getByRole('textbox', { name: 'Email Address' });
      await expect(email).toHaveAttribute('id', 'email');
      await expect(email).toHaveAttribute('type', 'email');
      await expect(email).toHaveAttribute('placeholder', 'student@thetestingacademy.com');

      const footerLinks = page.locator('footer a');
      await expect(footerLinks).toHaveCount(16);

        
      
      

    await page.pause();
  });
});