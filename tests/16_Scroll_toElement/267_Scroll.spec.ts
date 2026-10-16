import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Scroll the element', () => {
  const url = 'https://app.thetestingacademy.com/playwright/widgets/scroll';

   test.beforeEach(async ({ page }) => {
        console.log("Before running any testcase!");
        await page.goto(url);
    });
  
    test('locate fileupload and upload', async ({ page }) => {
      
        // 1 way to scroll the element into view
    await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
    await page.getByTestId('deep-anchor').click();

    //2 nd way to scroll the element into view
    await page.evaluate(() => window.scrollTo(0, 1000));

    // 3rd jump to bottom of the page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // 4 jump back to top of the page
    await page.evaluate(() => window.scrollTo(0, 0));
    
    await page.pause();
  });
});