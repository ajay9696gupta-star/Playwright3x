import{test, expect} from '@playwright/test'

test('TC#1 - Vefiy the error message in the wingify free trial', async({page}) =>{

    await page.goto("https://wingify.com/free-trial/");
   let userName =  page.locator('//input[@id="free-trial-step1-email"]');
   await userName.fill("abcd");
  await page.locator('#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox').click();
   page.locator('[data-qa="free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox"]').click();
   
   await page.locator('//button[@data-qa="page-su-submit"]').first().click();

  let errorMessage = page.locator("//div[contains(@class,'invalid-reason')]").first();
 // let errorMessage = page.locator("//div[contains(@class,'invalid-reason')]").last();
  //let errorMessage = page.locator("//div[contains(@class,'invalid-reason')]").nth(12);

  let errorMessageText = await errorMessage.textContent();

  expect(errorMessageText).toContain("The email address you entered is incorrect.");

  await page.pause();
  
  


});