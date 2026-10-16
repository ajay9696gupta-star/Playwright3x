import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Scroll the element', () => {
  const url = 'https://app.thetestingacademy.com/playwright/tables/practice.html';

   test.beforeEach(async ({ page }) => {
        console.log("Before running any testcase!");
        await page.goto(url);
    });
  
    test('3 soft assertions', async ({ page }) => {

      const automationCheckBox = page.getByRole('checkbox', { name: /UFT/ });

    await automationCheckBox.check();

    await expect(automationCheckBox).not.toBeChecked();

    const submitBtn = page.getByTestId('profile-submit');

    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toBeEnabled();

    await expect(page).toHaveTitle(/QA Profile/);

    const appUrl = page.url();
    expect(appUrl).toContain('thetestingacademy');

    await page.pause();
  });
});