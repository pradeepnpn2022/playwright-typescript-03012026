import test from "@playwright/test";

test('First test', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://npntraining.com/');
});


test.only('Second test', async ({page}) => {

    await page.goto('https://npntraining.com/');
});