import {test, expect} from '@playwright/test'

test('tc#1 - verify the error message when user enter invaid crediential', async({page}) => {
    await page.goto("https://wccqa.on24.com/webcast/login");
    let userName = page.getByRole("textbox", {name: "username"});
    await userName.fill("gouravclient7");

    let password = page.getByRole("textbox", {name: "password"});
    await password.fill("Password01");

    await page.pause();


 


});