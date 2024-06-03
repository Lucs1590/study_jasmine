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

    it('should show the use of "calls.reset()"', () => {
        calculator.sum(1, 1);
        calculator.sum(2, 3);

        expect(calculator.sum.calls.any()).toBeTruthy();
        calculator.sum.calls.reset();
        expect(calculator.sum.calls.any()).toBeFalsy();
    });
});