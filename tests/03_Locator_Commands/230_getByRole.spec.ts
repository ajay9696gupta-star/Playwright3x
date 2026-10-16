import {test, expect} from '@playwright/test'

test('tc#1 - verify the error message when user enter invaid crediential', async({page}) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
   await page.getByRole("link",{name: "Make Appointment", exact:false}).click();
   await page.pause();
});