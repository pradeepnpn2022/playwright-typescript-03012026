import test from "@playwright/test";

test('Playwright Frames test', async ({page}) => {
    await page.goto('https://practice-automation.com/iframes/');

    const playwrightFrame = page.frame({name: 'top-iframe'});
    const playwrightInput = playwrightFrame?.locator('.DocSearch-Input');
    await playwrightFrame?.locator('.DocSearch-Button').click();
    await playwrightInput?.waitFor();
    await playwrightInput?.fill('test');
});

test('Selenium frame test', async ({page}) => {
    await page.goto('https://practice-automation.com/iframes/');

    const seleniumFrame = page.frameLocator('#iframe-2');
    const seleniumInputButton = seleniumFrame?.locator('.DocSearch-Button');
    const seleniumInput = seleniumFrame?.locator('.DocSearch-Input');
    await seleniumInputButton?.click();
    await seleniumInput?.waitFor();
    await seleniumInput?.fill('test');

});

