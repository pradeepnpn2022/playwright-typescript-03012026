import test, { expect } from "@playwright/test";

test('Context Menu Test', async ({page}) => {
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.message()).toContain('You selected a context menu');
        await dialog.accept();
    });
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    await page.locator('#hot-spot').click({button: 'right'});
});