describe("Suite to test subtract function", function () {

    var Calculator = require('../../src/js/calculator.js');

    it("should return 7 to 10 and 3", function () {
        expect(Calculator.subtract(10, 3)).toEqual(7);
    });

    it("should return 3 to 2 and -1", function () {
        expect(Calculator.subtract(2, -1)).toEqual(3);
    });

    it("should return 5 to 8 and 3 as string", function () {
        expect(Calculator.subtract('8', '3')).toEqual(5);
    });

    it("should return 4 to 5.5 and 1.5", function () {
        expect(Calculator.subtract(5.5, 1.5)).toEqual(4);
    });

    it("should return 0 when the first parameter is invalid", function () {
        expect(Calculator.subtract(undefined, 2)).toEqual(0);
    });

    it("should return 0 when the second parameter is invalid", function () {
        expect(Calculator.subtract(2, undefined)).toEqual(0);
    });

});