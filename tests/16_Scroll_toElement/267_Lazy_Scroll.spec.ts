import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Scroll the element', () => {
  const url = 'https://app.thetestingacademy.com/playwright/widgets/scroll';

   test.beforeEach(async ({ page }) => {
        console.log("Before running any testcase!");
        await page.goto(url);
    });
  
    test('Expect', async ({ page }) => {
      
       expect(1 + 2).toBe(3);

  let ac = false;
  expect(ac).toBeFalsy();

  expect(true).toBeTruthy();

  expect(null).toBeNull();

  expect(34).toBeGreaterThan(11);

  expect([1, 2, 3]).toEqual([1, 2, 3]);

  expect({ role: 'admin' }).toEqual({ role: 'admin' });

  expect({ age: 20, role: 'admin' }).toEqual({
    age: 20,
    role: 'admin'
  });
       
  });
});