import test, { expect } from "@playwright/test";

test('Frames test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames');
    const topFrame =  page.frameLocator('[name="frame-top"]');
    const leftFrame = topFrame.frameLocator('[name="frame-left"]');
    const middleFrame = topFrame.frameLocator('[name="frame-middle"]');
    const rightFrame = topFrame.frameLocator('[name="frame-right"]');

    expect(await leftFrame.locator('body').textContent()).toContain('LEFT');
    expect(await middleFrame.locator('#content').textContent()).toContain('MIDDLE');
    expect(await rightFrame.locator('body').textContent()).toContain('RIGHT');
});