import test from "@playwright/test";

test('Mulitple tabs/pages test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/windows');
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('text=Click Here') // Opens a new tab/page
    ]);
    await newPage.waitForLoadState();
    console.log('New page URL:', newPage.url());
    console.log('New page title:', await newPage.title());
});