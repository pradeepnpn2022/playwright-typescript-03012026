import test, { expect } from "@playwright/test";

test('Radio buttons test', async ({page})=> {
    await page.goto('https://www.airindia.com/');
    const oneWayRadio = page.getByRole('radio', { name: 'One Way' });
    const roundTripRadio = page.getByRole('radio', { name: 'Round Trip' });

    await expect(oneWayRadio).not.toBeChecked();
    await expect(roundTripRadio).toBeChecked();
    await oneWayRadio.check();
    await expect(oneWayRadio).toBeChecked();
    await expect(roundTripRadio).not.toBeChecked();
});