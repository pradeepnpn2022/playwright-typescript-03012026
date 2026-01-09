import test from "@playwright/test";

test('Dropdown test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('#dropdown');
    // await dropdown.selectOption('Option 1');
    // await dropdown.selectOption('Option 2');
    // await dropdown.selectOption({index: 2}); // selects the second index option
    // await dropdown.selectOption({label: 'Option 1'});
    // await dropdown.selectOption({label: 'Option 2'});

    await dropdown.selectOption({value: '1'});
    await dropdown.selectOption({value: '2'});
});