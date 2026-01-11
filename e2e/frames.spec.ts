import test, { expect } from "@playwright/test";

test('Frames and nested frames test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames');

    //Basic frames test
    const bottomFrame = page.frameLocator('[name="frame-bottom"]');
    // Verify the content in bottom frame
    const value = await bottomFrame.locator('body').textContent();
    console.log('Bottom frame content:', await value?.trim());
    expect(value?.trim()).toBe('BOTTOM');

    // Alternative way to access bottom frame
    const body = page.frame({url: 'https://the-internet.herokuapp.com/frame_bottom'})?.locator('body').textContent();
    expect(await body).toContain('BOTTOM');

    // //Nested frames test
    // const topFrame =  page.frameLocator('[name="frame-top"]');
    // const leftFrame = topFrame.frameLocator('[name="frame-left"]');
    // const middleFrame = topFrame.frameLocator('[name="frame-middle"]');
    // const rightFrame = topFrame.frameLocator('[name="frame-right"]');
    // // Verify the content in nested frames
    // expect(await leftFrame.locator('body').textContent()).toContain('LEFT');
    // expect(await middleFrame.locator('#content').textContent()).toContain('MIDDLE');
    // expect(await rightFrame.locator('body').textContent()).toContain('RIGHT');
});