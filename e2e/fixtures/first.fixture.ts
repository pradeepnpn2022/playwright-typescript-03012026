
import { test as base } from "@playwright/test";

// type FirstFixture = {
//     name: string;
//     age: number;
// };

export const myFixture = base.extend<{name: string; age: number}>({
    name: async ({}, use) => {
        console.log('--> Starting of name fixture');
        const name = "my name";
        await use(name);
        console.log('--> Ending of name fixture');
    },
    // age: async ({}, use) => {
    //     console.log('--> Starting of age fixture');
    //     const age = 30;
    //     await use(age);
    //     console.log('--> Ending of age fixture');
    // }
});