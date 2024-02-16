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
        spyOn(calculator, 'sum').and.returnValue(2);
        spyOn(calculator, 'subtract');
    });

    it('should be equal 2 to the "sum" method', () => {
        expect(calculator.sum(100, 100)).toEqual(2);
    });
});