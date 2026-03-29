import { test, expect } from '@playwright/test';

test('Automate Login Flow', async ({ page }) => {
  await page.goto('https://www.npntraining.com/automation_projects/hotel_management_system/login.php');

  // Fill username and password
  await page.locator('input[name="email"]').fill('admin');
  await page.locator('input[name="password"]').fill('admin');

  // Submit the form
  await page.locator('button[name="login"]').click();

  // Validate successful login
  await expect(page).not.toHaveURL(/login\.php/);
});
