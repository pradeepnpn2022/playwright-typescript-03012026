import test, { expect } from "@playwright/test";

test.describe('Tabs and Pages tests', { tag: '@regression' }, () => {

    test('Verification of new tab/page opening', async ({ page }) => {


        test.step('Mulitple tabs/pages test', async () => {
            await page.goto('https://the-internet.herokuapp.com/windows');
            const [newPage] = await Promise.all([
                page.waitForEvent('popup'),
                page.click('text=Click Here') // Opens a new tab/page
            ]);
            await newPage.waitForLoadState();
            console.log('New page URL:', newPage.url());
            console.log('New page title:', await newPage.title());
        });


        test.step('Switching between tabs/pages test', async () => {
            await page.goto('https://the-internet.herokuapp.com/windows');
            await page.locator('a[href="/windows/new"]').click();

            const newPage = await page.context().waitForEvent('page');
            // const newPage = await pages;
            await newPage.waitForLoadState();
            console.log('Total number of open pages:', page.context().pages().length);
            console.log('New page URL:', newPage.url());
            console.log('New page title:', await newPage.title());

            expect(await newPage.title()).toBe('New Window');
        });

        test.step('Multiple windows test', async () => {
            await page.goto('https://practice-automation.com/window-operations/');
            await page.locator('button[onclick="newTab()"]').click();

            const newPage = await page.context().waitForEvent('page');
            await newPage.waitForLoadState();
            console.log('New page URL:', newPage.url());
            console.log('New page title:', await newPage.title());
            await newPage.locator('#menu-item-26045').click();
            expect(newPage.url()).toBe('https://automatenow-courses.teachable.com/');

            expect(page.url()).toBe('https://practice-automation.com/window-operations/');
            await page.bringToFront();
            await page.locator('button[onclick="newWindowSelf()"]').click();
            await page.waitForLoadState();
            console.log('Current page URL after opening in same window:', page.url());
            expect(page.url()).toBe('https://automatenow.io/');
            await page.goBack({ waitUntil: 'load' });

            expect(page.url()).toBe('https://practice-automation.com/window-operations/');
            await page.goForward({ waitUntil: 'load' });
            expect(page.url()).toBe('https://automatenow.io/');
            await newPage.bringToFront();
            await newPage.locator('a[href="/sign_in"]').click();
            expect(newPage.url()).toContain('teachable.com');

            /** 
             * Assignment: Navigate back to the original page and click on New Window button
             * Verify the URL of the newly opened window
             */
            page.bringToFront();
            await page.goBack({ waitUntil: 'load' });
            expect(page.url()).toBe('https://practice-automation.com/window-operations/');
            await page.locator('button[onclick="newWindow()"]').click();
            const anotherNewPage = await page.context().waitForEvent('page');
            await anotherNewPage.waitForLoadState();
            console.log('Another new page URL:', anotherNewPage.url());
            expect(anotherNewPage.url()).toBe('https://automatenow.io/');
            await anotherNewPage.locator('a[href="https://automatenow.io/sdet-interview-questions-and-answers/"] img').click();
            expect(anotherNewPage.url()).toContain('sdet-interview-questions-and-answers');
        });

    });

    test('Blank test', async ({ page }) => {
        page.goto('about:blank');
        expect(page.url()).toBe('about:blank');
    });

});

