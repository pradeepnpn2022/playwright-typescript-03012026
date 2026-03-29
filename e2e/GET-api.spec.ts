import test, { expect } from "@playwright/test";

test('verify the GET API response', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(await response.json());
    response.json().then(one => {
        expect(one).toHaveProperty('id', 1);
        expect(one).toHaveProperty('userId', 1);
        expect(one).toHaveProperty('title');
        expect(one).toHaveProperty('body');
    });
    expect(response.status()).toBe(200);
});