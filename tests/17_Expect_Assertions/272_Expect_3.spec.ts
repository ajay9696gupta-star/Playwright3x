import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Scroll the element', () => {
  const url = 'https://app.thetestingacademy.com/playwright/tables/practice#page';

   test.beforeEach(async ({ page }) => {
        console.log("Before running any testcase!");
        await page.goto(url);
    });
  
    test('3 soft assertions', async ({ page }) => {

      let firstName =  page.getByTestId('first-name');

      // soft: Each line records the failure but does not stop the execution of the test

      await expect.soft(firstName).toBeVisible();
      await expect.soft(firstName).toHaveAttribute('id', 'first-name');
      await expect.soft(firstName).toHaveAttribute('type', 'text');
      await expect.soft(firstName).toHaveAttribute('placeholder', 'Aarav');
      await expect.soft(firstName).toHaveValue('Aarav');

      // hard: If any of the line fails, the execution of the test will stop and the test will be marked as failed
      await expect(firstName).toBeEnabled();

      await page.goto('https://app.thetestingacademy.com/playwright/webtable.html');
      await expect(page.locator('#error')).not.toBeVisible();

      let title = await page.title();
      await expect(title).not.toContain('error');
      
    await page.pause();
  });
});