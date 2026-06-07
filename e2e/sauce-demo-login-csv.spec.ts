/// <reference types="node" />
import * as fs from 'fs';
import { test, expect } from '@playwright/test';

const filePath = 'resources/sauce-demo-login-data.csv';
const fileContent = fs.readFileSync(filePath, 'utf-8');
const lines = fileContent.split('\n').slice(1).filter(line => line.trim() !== '');
const loginData = lines.map(line => {
  const [username, password, expected] = line.split(',').map(value => value.trim());
  return { username, password, expected };
});

test.describe('Sauce Demo Login Tests', () => {
  loginData.forEach(({ username, password, expected }) => {
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