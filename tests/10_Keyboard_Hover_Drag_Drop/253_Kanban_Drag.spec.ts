import {test, expect, Locator} from '@playwright/test';

test('Verify Drag Drop functionality', async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");
    // const inprogress = page.getByTestId('col-in-progress');
    // //const  card_review_pr_21 = page.getByTestId('card-review-pr-21');
    // const 
    // await card_review_pr_21.dragTo(inprogress);

    let source: Locator = page.locator('#card-write-spec');
const sBox = (await source.boundingBox())!;

let target: Locator = page.locator('[data-status="review"]');
const tBox = (await target.boundingBox())!;

await page.mouse.move(
    sBox.x + sBox.width / 2,
    sBox.y + sBox.height / 2
);

await page.mouse.down();

await page.mouse.move(
    tBox.x + tBox.width / 2,
    tBox.y + tBox.height / 2,
    { steps: 10 }
);

await page.mouse.up();


    
    await page.pause();


});
