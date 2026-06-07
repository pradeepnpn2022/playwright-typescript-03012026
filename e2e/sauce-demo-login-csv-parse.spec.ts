
import { test, expect } from '@playwright/test';
import { readCSV } from '../utils/csv-reader';
import { DocumentUtility } from 'vita-playwright';

const csvFilePath = 'resources/sauce-demo-login-data.csv';
// second argument specifies the file type for the utility (required)
const csvData = readCSV(csvFilePath);
console.log('CSV Data: ', csvData);

test.describe('Sauce Demo Login Tests', () => {
  csvData.forEach(({ username, password, expected }) => {
    test(`Login with username: ${username} and password: ${password} should ${expected}`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');
      await page.fill('#user-name', username);
      await page.fill('#password', password);
      await page.click('#login-button');
      if (expected === 'success') {
        await expect(page.locator('.inventory_list')).toBeVisible();
      } else {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      }
    });
  });
});