
import {myFixture} from "./fixtures/first.fixture";


myFixture('should use custom fixture', async ({ name }) => {

    console.log('--> Starting of test');
    // await page.goto('https://example.com');
    console.log(`Name: ${name}`);
    console.log('--> Ending of test');

});