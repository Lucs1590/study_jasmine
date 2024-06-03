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
        spyOn(calculator, 'sum').and.returnValue(10);
        spyOn(calculator, 'subtract');
    });

    it('should show the use of "calls.count()"', () => {
        calculator.sum(1, 1);
        calculator.sum(2, 2);
        expect(calculator.sum.calls.count()).toBe(2);
        expect(calculator.subtract.calls.count()).toBe(0);
    });
});