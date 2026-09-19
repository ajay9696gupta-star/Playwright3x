import  {test, expect} from '@playwright/test'

test("verify X", async({page}) => {
    await page.goto("https://wccqa.on24.com/webcast/login");
})