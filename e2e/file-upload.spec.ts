import test from "@playwright/test";



test('should upload a file', async ({ page }) => {
    await page.goto('https://practice-automation.com/file-upload/');
    await page.setInputFiles('#file-upload', 'resources\\test-file.upload.txt');
    await page.locator('#upload-btn').click();
});

test('download the file', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('a', { hasText: 'sm.jpg' }).click()
    ]);
    await download.saveAs('resources/sm.jpg');
});