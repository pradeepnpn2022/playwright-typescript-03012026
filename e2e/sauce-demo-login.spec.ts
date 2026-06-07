import test, { expect } from "@playwright/test";
import sauceDemoLoginData from "../resources/sauce-demo-login-data.json";

type SauceDemoLoginData = {
    username: string;
    password: string;
    expectedResult: "success" | "failure";
};

// test("sauce demo login", async ({ page }) => {
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator("#user-name").fill("standard_user");
//     await page.locator("#password").fill("secret_sauce");
//     await page.locator("#login-button").click();
//     expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
// });

// test("sauce demo login with JSON test data", async ({ page }) => {
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator("#user-name").fill(sauceDemoLoginData.valid_user.username);
//     await page.locator("#password").fill(sauceDemoLoginData.valid_user.password);
//     await page.locator("#login-button").click();
//     expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
// });

// test("sauce demo login with invalid credentials", async ({ page }) => {
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator("#user-name").fill(sauceDemoLoginData.invalid_user.username);
//     await page.locator("#password").fill(sauceDemoLoginData.invalid_user.password);
//     await page.locator("#login-button").click();
//     expect(page.locator("[data-test='error']")).toBeVisible();
// });

test("sauce demo for multiple users", async ({ page }) => {
    // const users = Object.values(sauceDemoLoginData) as SauceDemoLoginData[];
    for (const user of sauceDemoLoginData) {
    // sauceDemoLoginData.forEach(async (user: any) => {
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill(user.username);
        await page.locator("#password").fill(user.password);
        await page.locator("#login-button").click();
        if (user.expectedResult === "success") {
            expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
            await page.locator("#react-burger-menu-btn").click();
            await page.locator("#logout_sidebar_link").click();
            expect(page.url()).toBe("https://www.saucedemo.com/");
            await expect(page.locator("#login-button")).toBeVisible();
        } else {
            await expect(page.locator("[data-test='error']")).toBeVisible();
        }
    // });

    }
});
