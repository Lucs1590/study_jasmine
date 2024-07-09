describe("Suite to test add function", function () {

    var Calculator = require('../../src/js/calculator.js');

    it("should return 7 to 2 and 5", function () {
        expect(Calculator.sum(2, 5)).toEqual(7);
    });

    it("should return -3 to 2 and -5 as string", function () {
        expect(Calculator.sum('2', '-5')).toEqual(-3);
    });

    it("should return 3.25 to 1.25 and 2", function () {
        expect(Calculator.sum(1.25, 2)).toEqual(3.25);
    });

    it("should return 0 when the first parameter is invalid", function () {
        expect(Calculator.sum(undefined, 2)).toEqual(0);
    });

    it("should return 0 when the second parameter is invalid", function () {
        expect(Calculator.sum(2, undefined)).toEqual(0);
    });

});