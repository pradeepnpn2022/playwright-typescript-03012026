import test, { expect } from "@playwright/test";

test('Alert handling test', async ({page})=> {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        if(dialog.message() === 'I am a JS Confirm') {
            console.log('Dismissing the confirm dialog');
            dialog.dismiss();
        }
        if(dialog.type() === 'prompt') {
            dialog.accept('Hello');
        } else {
            dialog.accept();
        }
        // expect(dialog.message()).toBe('I am a JS Alert');
    });
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    page.locator('#result').waitFor({state: 'visible'});
    const resultText = await page.locator('#result').textContent();
    console.log('Result text after dismissing confirm dialog:', resultText);
    expect(resultText).toBe('You entered: Hello');
});