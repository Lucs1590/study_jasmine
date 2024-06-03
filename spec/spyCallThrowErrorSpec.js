describe('Spy tests', () => {
    let calculator = {
        sum: function (n1, n2) {
            return n1 + n2;
        },
        subtract: function (n1, n2) {
            return n1 - n2;
        }
    }

    beforeAll(() => {
        spyOn(calculator, 'sum').and.throwError('Error on sum method');
        spyOn(calculator, 'subtract');
    });

    it('should throw an error when calling the "sum" method', () => {
        expect(() => calculator.sum(1, 1)).toThrowError('Error on sum method');
    });
});