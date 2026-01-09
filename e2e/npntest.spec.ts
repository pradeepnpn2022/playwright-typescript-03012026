import test, { expect } from "@playwright/test";


test('Navigate to NPN Hotel Management', async ({page}) => {
    // Navigate to NPN Hotel Management System Login Page
    await page.goto('https://www.npntraining.com/automation_projects/hotel_management_system/login.php');

    await page.locator('[name="email"]').fill('admin');
    await page.locator('[name="password"]').fill('admin');
    await page.locator('[name="login"]').click();
    await page.waitForURL('**?dashboard');
    await page.locator('.panel-widget').first().waitFor({state: 'visible'});
    console.log('Length of panel widgets:', (await page.locator('.panel-widget').all()).length);
    expect((await page.locator('.panel-widget').all()).length).toBe(8);
});