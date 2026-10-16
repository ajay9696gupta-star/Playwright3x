import { test, expect } from '@playwright/test';

const url = 'https://app.thetestingacademy.com/playwright/widgets/scroll';

test('title test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Skipping test in Firefox');
  await page.goto(url);
  await expect(page).toHaveTitle(/Scroll/);
});

test('email is visible', async ({ page, browserName }) => {
  test.slow(browserName === 'firefox', 'Slowing test in Firefox');
  await page.goto(url);
  await expect(page.getByRole('textbox', { name: 'Email Address' })).toBeVisible();
});

test.fixme('password is visible - broken is safari', async ({page}) => {

  await page.goto(url);
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
});