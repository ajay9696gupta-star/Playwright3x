import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Verify iframe functionality', async ({ page }) => {
    //const frameLocator: FrameLocator = page.frameLocator('iframe');

    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    let mainFrame: FrameLocator = page.frameLocator('[name="main"]');
    const headerTest = await mainFrame.locator('h2').innerText();
    console.log(headerTest);

    const allFrames: Locator[] = await page.locator('//iframe').all();
    console.log('total number of frames: ' + allFrames.length);

for (const frame of allFrames) {
    console.log(
        await frame.getAttribute('name'),':',await frame.getAttribute('src')
    );
}

let sideFrame: FrameLocator = await page.frameLocator('[name="side"]');
await sideFrame.getByTestId('side-link-registration').click();

    
    await page.pause();
});