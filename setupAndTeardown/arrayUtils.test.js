const { addToArray, removeFromArray, arrayContains } = require("./arrayUtils");

let testArray;

// call before the operation
beforeAll(() => {
  console.log("Before all tests: Initialize test array");
  testArray = [];
});

// call after all operations done
afterAll(() => {
  console.log("After all tests: Clear test array");
  testArray = null;
});

// call before each test starts
beforeEach(() => {
  console.log("Before each test: Reset test array");
  testArray = [];
});

// call after each test ends
afterEach(() => {
  console.log("After each test: Log test array");
  console.log(testArray);
});

// add item into the array
test("add item to array", () => {
  addToArray(testArray, "apple");
  expect(testArray).toContain("apple");
});

// remove items from array
test("remove item from array", () => {
  addToArray(testArray, "banana");
  removeFromArray(testArray, "banana");
  expect(testArray).not.toContain("banana");
});

// test for check the element contains in the array
test("check if array contains item", () => {
  addToArray(testArray, "cherry");
  expect(arrayContains(testArray, "cherry")).toBeTruthy();
});

// same things using describe; 
describe("nested array operations", () => {
  beforeEach(() => {
    console.log("Before each nested test: Add initial items");
    addToArray(testArray, "date");
    addToArray(testArray, "elderberry");
  });

  afterEach(() => {
    console.log("After each nested test: Clear test array");
    testArray = [];
  });

  test("nested test: add item to pre-filled array", () => {
    addToArray(testArray, "fig");
    expect(testArray).toContain("fig");
  });

  test("nested test: remove item from pre-filled array", () => {
    removeFromArray(testArray, "date");
    expect(testArray).not.toContain("date");
  });
});