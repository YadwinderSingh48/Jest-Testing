const multiply = require('./index');

// Create the first Test Suite

// TEST SUITE is a single file where we can define the multiple test cases, the more file we have the more test suites we have, eg: 3 test files === 3 Test Suites
// test is a global keyword when we install jest as dev dependency

test('2 and 5 multiply should be 10', () => { 
    expect(multiply(2,5)).toBe(10); // expect will state what we expecting and toBe states the exact equality. tobBe is a matcher is test cases and we habe many kind of matchers
 })