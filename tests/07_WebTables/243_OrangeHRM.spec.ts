import {test, expect} from '@playwright/test';

test('Verify the webtable', async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const usernameInput = page.getByPlaceholder('Username');
    await usernameInput.fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name:'PIM'}).click();
    await page.getByRole('button',{name:'Add'}).click();
    await page.getByPlaceholder('First Name').fill('Ved');
    await page.getByPlaceholder('Middle Name').fill('Kumar');
    await page.getByPlaceholder('Last Name').fill('Gupta');
    // Auto-generated Employee Id may already exist on the shared demo site, so use a unique one
    const employeeId = Date.now().toString().slice(-8);
    await page.locator('.oxd-input-group').filter({hasText:'Employee Id'}).locator('input').fill(employeeId);
    await page.getByRole('button',{name:'Save'}).click();

    // Wait for save to complete (app redirects to Personal Details page)
    await expect(page).toHaveURL(/viewPersonalDetails/, {timeout: 15000});

    await page.getByRole('link',{name:'PIM'}).click();
    await page.locator('.oxd-table-card').first().waitFor();

    // First+Middle name and Last name are shown in separate columns
    const firstMiddleName: string = 'Ved Kumar';
    const lastName: string = 'Gupta';
    let row;
    while(true){
        row = page.locator('.oxd-table-card')
            .filter({hasText:firstMiddleName})
            .filter({hasText:lastName});
        if(await row.count() > 0){
            break;
        }
        // "Next" button (right chevron) is removed on the last page, not disabled
        const next = page.locator('button.oxd-pagination-page-item--previous-next:has(.bi-chevron-right)');
        if(await next.count() === 0){
            throw new Error("Row not Found!");
        }
        const currentPage = Number(await page.locator('.oxd-pagination-page-item--page-selected').innerText());
        await next.click();
        // Wait until the next page is selected and the table has finished loading
        await expect(page.locator('.oxd-pagination-page-item--page-selected')).toHaveText(String(currentPage + 1));
        await expect(page.locator('.oxd-loading-spinner')).toHaveCount(0);
    }

    await expect(row.first()).toBeVisible();
    console.log(await row.first().innerText());
});
