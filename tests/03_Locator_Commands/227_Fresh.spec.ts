import {test, expect} from '@playwright/test'

test('tc#1 - verify the error message when user enter invaid crediential', async({page}) => {
    await page.goto("https://wccqa.on24.com/webcast/login");
    
    // <input aria-invalid="false" 
    // id="username" name="username" 
    // placeholder="Username" 
    // type="text" maxlength="50" 
    // class="MuiInputBase-input MuiInput-input css-1unfm2x" value="">

   let userNameField = page.locator('#username');
   let passwordField = page.locator('#password');
   let loginButton = page.locator('[data-testid="Login_submitButton"]');
   await userNameField.fill("admin");
   await passwordField.fill("Password");
   await loginButton.click();

   let error_message = page.locator('[data-testid="Login_login_error"]');
    await expect(error_message).toContainText("Username/Password combination not found. Please try again or reset your password using \"Can't Access Your Account?\". Note: Username and Password are case sensitive");

    await page.pause();


 


});