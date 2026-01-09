import test from "@playwright/test";

test('Hover test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const avatars = page.locator('.figure img');
    const avatarCount = await avatars.count();
    console.log('Number of avatars: ${avatarCount}', avatarCount);
    await page.hover('.figure:nth-child(5) img');
});