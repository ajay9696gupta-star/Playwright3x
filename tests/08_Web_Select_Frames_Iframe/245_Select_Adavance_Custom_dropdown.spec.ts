import {test, expect} from '@playwright/test';

test('Verify Custom Dropdown', async ({page}) => {
 
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");

    // Single - Searchable
    await page.locator('#rs-single').click();
    await page.getByText("Cypress", {exact: true}).click();

    // Multi - chip with remove 
    await page.locator('#rs-multi').click();
    await page.getByText("Pytest", {exact: true}).click();
    await page.getByText("JUnit", {exact: true}).click();
    await page.keyboard.press("Escape");

   // Creatable multi — type and Enter
   await page.locator('#rs-creatable').click();
    await page.getByText("api-testing", {exact: true}).click();
    await page.getByText("security", {exact: true}).click();
    await page.keyboard.press("Escape");

    //Async — fetched on type

    await page.locator('#rs-async').click();
    await page.getByTestId('rs-async-input').fill("pun");
    await expect(page.getByTestId('rs-async-menu')).toContainText("Pune");
    await page.getByRole('option', {name: 'Pune'}).click();

    await page.pause();
});