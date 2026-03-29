import test, { expect } from "@playwright/test";

test('Verify post request', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'This is my first post',
            body: 'Test body',
            userId: 111,
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    console.log(await response.json());
    expect(response.status()).toBe(201);
    response.json().then(one => {
        expect(one).toHaveProperty('id');
        expect(one).toHaveProperty('userId', 111);
        expect(one).toHaveProperty('title', 'This is my first post');
        expect(one).toHaveProperty('body', 'Test body');
    });
});