
describe("Suite to test multiply function", function () {

    var Calculator = require("../../src/js/calculator")

    it("should return 10 to 2 and 5", function () {
        expect(Calculator.multiply(2, 5)).toEqual(10);
    });

    it("should return 9 to 3 and 3 as string", function () {
        expect(Calculator.multiply('3', '3')).toEqual(9);
    });

    it("should return 2.5 to 1.25 and 2", function () {
        expect(Calculator.multiply(1.25, 2)).toEqual(2.5);
    });

    it("should return 0 when the first parameter is invalid", function () {
        expect(Calculator.multiply(undefined, 2)).toEqual(0);
    });

    it("should return 0 when the second parameter is invalid", function () {
        expect(Calculator.multiply(2, undefined)).toEqual(0);
    });
});
