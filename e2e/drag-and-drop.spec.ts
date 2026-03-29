import test from "@playwright/test";

test('Drag and Drop Test', {tag: '@regression'}, async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const source = page.locator('#column-a');
    const target = page.locator('#column-b');
    // await page.dragAndDrop('#column-a', '#column-b');
    await source.dragTo(target);
    await page.waitForTimeout(5000); // Just to visually confirm the drag and drop action
});