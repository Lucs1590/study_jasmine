describe("Suite to test divide function", function () {

    var Calculator = require('../../src/js/calculator.js');

    it("should return 2 to 10 and 5", function () {
        expect(Calculator.divide(10, 5)).toEqual(2);
    });

    it("should return 3 to 9 and 3 as string", function () {
        expect(Calculator.divide(9, '3')).toEqual(3);
    });

    it("should return 2.5 to 5 and 2", function () {
        expect(Calculator.divide(5, 2)).toEqual(2.5);
    });

    it("should throw an error when the second parameter is 0", function () {
        expect(Calculator.divide(5, 0)).toEqual('Error');
        expect(Calculator.divide(5, '0')).toEqual('Error');
    });

    it("should return 0 when the first parameter is invalid", function () {
        expect(Calculator.divide(undefined, 2)).toEqual(0);
    });

    it("should return 0 when the second parameter is invalid", function () {
        expect(Calculator.divide(2, undefined)).toEqual(0);
    });

});