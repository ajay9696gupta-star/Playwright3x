import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Scroll the element', () => {
  const url = 'https://app.thetestingacademy.com/playwright/widgets/scroll';

   test.beforeEach(async ({ page }) => {
        console.log("Before running any testcase!");
        await page.goto(url);
    });
  
    test('Expect', async ({ page }) => {

        const heading = page.getByAltText('multiple element filters');
        await expect(heading).toBeVisible();
        await expect(heading).toContainText('filters', { timeout: 10000 });

        

    await page.pause();
  });
});