
// Different Matchers types

test("Object Equality", () => {
    const data = {alpha: 'A'};
    data["beta"] = 'B';
    expect(data).toEqual({alpha:'A',beta:'B'}); // Deep Equality  --> If we use toBe matcher here the test will be failed because to be check the exaxt equality like === but in objects we have some references here in js so we used the toEqual which doesnot checks the exact type rather it will checks that structure would be the same
    // for objects we should use toEqual

});

test('Null Values', () => {
    const value = null;
    expect(value).toBeNull(); // checks that the value should be null;
    expect(value).toBeDefined(); // match that value must be defined not indefined, which is true because its defined here as null and null and undefined are different data types in js;
    expect(value).not.toBeUndefined(); // tobeUndefined checks that value must be undefined but we use not here so it becomes opposite and our test will pass in this case
    expect(value).not.toBeTruthy(); // value must not be truthy
    expect(value).toBeFalsy(); // must be falsy, as null is the falsy value in js
});


test('Zero Values', () => {
    const value = 0;
    expect(value).not.toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    expect(value).not.toBeTruthy();
    expect(value).toBeFalsy();
});

test('Number comparison' , () => {
    const value = 3+3;
    expect(value).toBeGreaterThan(5); // >
    expect(value).toBeGreaterThanOrEqual(5); // >=
    expect(value).toBeLessThan(7); // <
    expect(value).toBeLessThanOrEqual(6); // <=
    expect(value).toBe(6);
    expect(value).toEqual(6);
    
    // floting value comparison
    const floatValue = 0.2 + 0.1;
    expect(floatValue).toBeCloseTo(0.3, 5); // floatValue should be close to the 0.3 upto the 5 decimal point

    //string comparison
    expect("Developer").not.toMatch(/I/); // string cannot have I in it (regex Applied)
    expect("Developer").toMatch(/Dev/) // string must have Dev
});

// Array Matchers

test('Array Matchers ', () => {
    const environments = ["Development", "Staging", "Production"];
    expect(environments).toContain("Production");
});

//Exception Matchers

test('Exception Matchers ', () => {
    function opneInvalidFile () {
        throw new Error("file not found");

    };


    expect(()=>opneInvalidFile()).toThrow(); // an error is expecting
    expect(()=>opneInvalidFile()).toThrow(Error); // an error is expecting
    expect(()=>opneInvalidFile()).toThrow("file not found"); // a file not found error is expecting
    expect(()=>opneInvalidFile()).toThrow(/not found/); // an error is expecting which contains not found as mentioned in the regex
});

test.only('drink returned', () => { // writing .only with test runs only this test in this test suit and it will skip all other
    const drink = jest.fn(() => true); // jest is also a global keyword which has a .fn method which uses to create a moke function
    drink();
    expect(drink).toHaveReturnedWith(true); // must be returned true
    expect(drink).toHaveReturned(); // must be return
})


