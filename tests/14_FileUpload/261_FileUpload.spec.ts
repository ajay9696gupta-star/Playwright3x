import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Verify Shadow DOM elements', () => {
  const url = 'https://app.thetestingacademy.com/playwright/widgets/upload-download';

  test.beforeEach(async ({ page }) => {
    console.log('Before running any testcase!');
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await expect(page.locator('#single-upload')).toBeVisible();
  });

  test('locate fileupload and upload', async ({ page }) => {
    const filePath = path.join(__dirname, 'AjayGuptaLMS122.txt');
    console.log('File Path is : ' + filePath);

    await page.locator('#single-upload').setInputFiles(filePath);
    
  });
});