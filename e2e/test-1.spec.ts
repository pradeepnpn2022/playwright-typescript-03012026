import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

test.beforeAll(async ({ page }) => {
    await page.context().clearCookies();
});

await page.context().clearCookies();
await page.goto('https://www.google.com/search?q=test&rlz=1C1CHBF_enIN1138IN1138&oq=test&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiRAhiABBiKBTIQCAIQABiRAhixAxiABBiKBTIMCAMQABhDGIAEGIoFMgwIBBAAGEMYgAQYigUyEwgFEC4YgwEYxwEYsQMY0QMYgAQyDAgGEAAYQxiABBiKBTIMCAcQLhhDGIAEGIoFMgwICBAAGEMYgAQYigUyCggJEAAYsQMYgATSAQkxOTU2ajBqMTWoAgiwAgHxBRIgTttqh-b3&sourceid=chrome&ie=UTF-8');
const page2 = await page.context().newPage();
await page2.goto('https://www.google.com/search?q=testing+tools&rlz=1C1CHBF_enIN1138IN1138&oq=testing+tools&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiRAhiABBiKBTIQCAIQABiRAhixAxiABBiKBTIMCAMQABhDGIAEGIoFMgwIBBAAGEMYgAQYigUyEwgFEC4YgwEYxwEYsQMY0QMYgAQyDAgGEAAYQxiABBiKBTIMCAcQLhhDGIAEGIoFMgwICBAAGEMYgAQYigUyCggJEAAYsQMYgATSAQkxOTU2ajBqMTWoAgiwAgHxBRIgTttqh-b3&sourceid=chrome&ie=UTF-8');
});