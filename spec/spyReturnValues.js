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
        spyOn(calculator, 'sum').and.returnValues(2, 4);
        spyOn(calculator, 'subtract');
    });

    it('should return different values to the "sum" method', () => {
        expect(calculator.sum(100, 100)).toEqual(2);
        expect(calculator.sum(100, 100)).toEqual(4);
        expect(calculator.sum(100, 100)).toBeUndefined();
    });
});