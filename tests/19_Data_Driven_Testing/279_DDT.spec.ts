import {test, expect} from '@playwright/test';
import userData from './280_user.json';

test('Verify DDT', async ({ page }) => { 

    console.log("UserName is : " + userData.username);
    console.log("Password is : " + userData.password);

});