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

    //Nested frames test
    const topFrame =  page.frameLocator('[name="frame-top"]');
    const leftFrame = topFrame.frameLocator('[name="frame-left"]');
    const middleFrame = topFrame.frameLocator('[name="frame-middle"]');
    const rightFrame = topFrame.frameLocator('[name="frame-right"]');

    const frames = page.frames();
    console.log('Total number of frames on the page:', frames.length);
    frames[0].name() && console.log('Frame 0 name:', frames[0].name());
    frames[1].name() && console.log('Frame 1 name:', frames[1].name());
    frames[2].name() && console.log('Frame 2 name:', frames[2].name());
    frames[3].name() && console.log('Frame 3 name:', frames[3].name());
    frames[4].name() && console.log('Frame 4 name:', frames[4].name());
    frames[5].name() && console.log('Frame 5 name:', frames[5].name());
    // Verify the content in nested frames
    expect(await leftFrame.locator('body').textContent()).toContain('LEFT');
    expect(await middleFrame.locator('#content').textContent()).toContain('MIDDLE');
    expect(await rightFrame.locator('body').textContent()).toContain('RIGHT');
});