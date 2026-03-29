import test from "@playwright/test";

test('auto-suggestion-list', async ({ page }) => {
    await page.goto('https://www.google.com/');
    const searchBox = page.locator('textarea[name="q"]');
    await searchBox.fill('NPN Training');
    // await searchBox.pressSequentially('NPN Training', {delay: 100});
    const suggestionsList = page.locator('ul[role="listbox"]');
    await suggestionsList.waitFor({state: 'attached'});
    const suggestions = suggestionsList.locator('li div[role="option"]');
    const count = await suggestions.count();
    console.log('Number of suggestions:', count);
    for (let i = 0; i < count; i++) {
        const suggestionText = await suggestions.nth(i).innerText();
        console.log(suggestionText);
        if(suggestionText === 'npn training reviews') {
            console.log('Found the expected suggestion');
            await suggestions.nth(i).click();
            await page.waitForTimeout(5000); // Just to visually confirm the click action
            break;
        }
    }
});