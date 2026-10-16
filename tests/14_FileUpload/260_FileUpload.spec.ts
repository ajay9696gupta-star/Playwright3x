import {test, expect, Locator} from '@playwright/test';
import path from 'path';

test.describe('Verify Shadow DOM elements', () => {

    const url = "https://the-internet.herokuapp.com/upload";
    

    test.beforeEach(async ({ page }) => {
        console.log("Before running any testcase!");
        await page.goto(url);
    });

    test('locate fileupload and upload', async ({ page }) => {

       // File upload
       //Path of the file -  you should know the path of the file which you want to upload
       const filePath = path.join(__dirname, '07_Literal.js');
       console.log("File Path is : " + filePath);
       await page.locator('#file-upload').setInputFiles(filePath);
       await page.locator('#file-submit').click();
       await expect(page.locator('#uploaded-files')).toContainText('07_Literal.js');
        
       await page.pause();

});

});