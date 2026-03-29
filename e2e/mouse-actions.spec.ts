import test from "@playwright/test";

test('Mouse Actions Test', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    await page.waitForTimeout(5000);
    await page.locator('#column-a').hover();
    await page.mouse.down();
    await page.locator('#column-b').hover();
    await page.mouse.up();
    await page.waitForTimeout(5000); // Just to visually confirm the drag and drop action
});