import test, { expect } from "@playwright/test";

test('verify the calendar', async ({ page }) => {
    await page.goto('https://practice-automation.com/calendars/');

    const dateInput = page.locator('input.date');
    await dateInput.click();
    
    const calendar = page.locator('div.dp');
    await expect(calendar).toBeVisible();

    // Select Month
    await page.locator('.dp-cal-header .dp-cal-month').click();
    await page.locator('.dp-months button').getByText('October', { exact: true }).click();

    // Select Year
    await page.locator('.dp-cal-header .dp-cal-year').click();
    await page.locator('.dp-years button').getByText('2029', { exact: true }).click();

    // Select Date
    await page.locator('.dp-days button').getByText('15', { exact: true }).click();

    // Verify calendar is hidden after selection
    await expect(calendar).toBeHidden();

    // Submit the form
    await page.locator('form[action="https://practice-automation.com/calendars/"] button.pushbutton-wide').first().click();
    await page.waitForURL(/.*contact-form-id/);
    
    // Verify the submitted date using web-first assertions
    await expect(page.locator('.field-value')).toContainText('2029-10-15');
});