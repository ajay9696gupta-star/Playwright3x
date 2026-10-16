import {test, expect} from '@playwright/test';

test('Verify the webtable', async ({page}) => {
     await page.goto("https://app.thetestingacademy.com/playwright/webtable");

     let name: string = 'luca Greclo';
     let row;
     while(true){
        row = page.locator('#employee-body tr').filter({hasText: name});
        if(await row.count()){
            break;
        }
        const next = page.getByTestId('next-page');
        if(await next.isDisabled()){
            throw new Error("Row not Found!");
        }
        await next.click();
     }

await page.pause();
});
