import test, { expect } from "@playwright/test";

test('Verify DELETE API response', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/2');
    console.log(await response.json());
    expect(response.status()).toBe(200);
});