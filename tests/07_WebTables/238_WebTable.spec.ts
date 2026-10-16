import {test, expect, Locator} from '@playwright/test';

test('Verify the webtable Example 1 ', async({page}) => {

    await page.goto("https://awesomeqa.com/webtable.html");

    const firstPart = "//table[@id='customers']/tbody/tr["
    const secondPart = "]/td[";
    const thirdPart = "]";

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const column = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    for(let i=2; i <= rows; i++){

        for( let j= 1; j<=column; j++){

            const dyanmicXpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            console.log(dyanmicXpath);

            const data = await page.locator(dyanmicXpath).innerText();
            console.log(data);

            if(data.includes("Helen Bennett")){
                const countryPath = `${dyanmicXpath}/following-sibling::td`;
                const countryText = await page.locator(countryPath).innerText();
                console.log("---------");
                console.log('Helen Bennett is In - ${countryText}');
            }
        }

    }

    });
