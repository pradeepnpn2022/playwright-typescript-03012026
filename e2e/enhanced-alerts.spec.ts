import { test, expect } from "@playwright/test";

test('Enhanced Alerts Test Suite', async ({ page }) => {
    // Set up dialog handler BEFORE navigating
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        if(dialog.message() === 'I am a JS Confirm') {
            console.log('Dismissing the confirm dialog');
            await dialog.dismiss();
        }
        else if(dialog.type() === 'prompt') {
            await dialog.accept('Hello');
        } else {
            await dialog.accept();
        }
    });
    
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    const jsAlert = page.getByRole('button', { name: 'Click for JS Alert' });
    const jsConfirm = page.getByRole('button', { name: 'Click for JS Confirm' });
    const jsPrompt = page.getByRole('button', { name: 'Click for JS Prompt' });
    const result = page.locator("#result");

    await test.step("Test JS Alert", async () => {
        await jsAlert.click();
        await expect(result).toHaveText('You successfully clicked an alert');
    });

    await test.step("Test JS Confirm (dismiss)", async () => {
        await jsConfirm.click();
        await expect(result).toHaveText('You clicked: Cancel');
    });

    await test.step("Test JS Prompt", async () => {
        await jsPrompt.click();
        await expect(result).toHaveText('You entered: Hello');
    });
});