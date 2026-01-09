import test, { expect } from "@playwright/test";

test('Checkboxes test', async ({page})=> {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const firstCheckbox = page.locator('#checkboxes input').first();
    const secondCheckbox = page.locator('#checkboxes input').last();
    await expect(firstCheckbox).not.toBeChecked();
    await firstCheckbox.check();
    await expect(firstCheckbox).toBeChecked();

    await expect(secondCheckbox).toBeChecked();
    await secondCheckbox.uncheck();
    await expect(secondCheckbox).not.toBeChecked();
});