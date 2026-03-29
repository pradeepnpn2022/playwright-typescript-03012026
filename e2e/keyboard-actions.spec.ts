import test from "@playwright/test";

test('Various Keyboard Actions Test', {tag: '@regression'}, async ({page}) => {

    test.step
    await page.goto('https://practice-automation.com/form-fields/');
    const inputField = page.locator('#name-input');

    /* Usecase: Press Shift key and enter text and validate the result */

    // await page.keyboard.down('CapsLock+KeyA+KeyB+KeyC');
    inputField.press('Shift+KeyA');
    // await page.keyboard.up('CapsLock');

    // page.keyboard.down('CapsLock');
    // // inputField.type('abc');
    // inputField.fill('abc');
    // // inputField.press('b');
    // // inputField.press('c');
    // page.keyboard.up('CapsLock');
    await page.waitForTimeout(5000);
});