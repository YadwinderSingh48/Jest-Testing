const multiply = require("./index")
// Write multiple test methods in the single file or in the single Test Suite


describe("Multiply Tests ", () => {
    it("2 and 5 should be equals to 10 ", async () => {
        expect(multiply(2,5)).toBe(10);
    });

    it("2 and 18 multiply should not be equals to 14 ", () => {
        expect(multiply(2, 18)).not.toBe(14);
    });
});


