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
        spyOn(calculator, 'sum').and.callThrough();
        spyOn(calculator, 'subtract');
    });

    it('should run the original "sum" method', () => {
        expect(calculator.sum(1, 1)).toBe(2);
        expect(calculator.subtract(2, 1)).toBeUndefined();
    });
});