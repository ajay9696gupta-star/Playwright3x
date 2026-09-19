import {test, expect} from '@playwright/test'

test.skip('checkout with paypal', async ({page}) =>{
    // never execute
});

test.only('login as Ajay', async ({page}) =>{
    // Only this test runs.
});

test.fail('card total is wrong', async () => {
    expect(90).toBe(100);
});

test.fixme('upload ', async () => {
    // skipped, but flagged as 'need fixing
});

test('full regression report', async () => {
    test.slow();
    console.log(test.info().timeout);
});

test ('mobile layout', async({page, browserName}) => {
    test.fixme(browserName === 'webkit', 'Safari renders menu wrong');
});