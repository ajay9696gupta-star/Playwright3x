import { test, expect } from '@playwright/test';

test('test publsih content from Add Content', async ({ page }) => {
  await page.goto('https://wccqa.on24.com/webcast/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('msqa1');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password01');
  await page.getByTestId('Login_submitButton').click();
  await page.getByRole('option', { name: '00VIbbClient' }).click();
  await page.getByRole('option', { name: 'orionqakeshav' }).press('Enter');
  await page.getByTestId('navEngagementHub').click();
  await page.getByTestId('ehub-selection-dropdown').selectOption('82644907');
  await page.goto('https://wccorionqa.on24.com/webcast/managemychannel/82644907');
  await page.getByRole('button', { name: 'Content' }).click();
  
  await page.getByText('Manage Filter GroupsAdd').click();
  await page.getByRole('button', { name: 'add content button' }).click();
  await page.getByRole('checkbox', { name: 'SB #1 Live event 8 Sep' }).check();
  await page.getByRole('button', { name: 'Publish (1)' }).click();
  await page.getByText('SB #1 Live event 8 Sep 2026', { exact: true }).click();
  await page.getByText('9000938492').dblclick();
  await page.locator('#MyChannelBody').press('ControlOrMeta+c');
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('9000938492');
  await page.getByRole('button', { name: 'More Actions' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Unpublish from Hub' }).click();
  await page.getByTestId('elite-confirmation-modal-ok-button').click();
  await page.getByRole('button', { name: 'add content button' }).click();
});