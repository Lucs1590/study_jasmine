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

    it('should show the use of "calls.first()"', () => {
        calculator.sum(1, 1);
        calculator.sum(2, 3);

        let firstCall = calculator.sum.calls.first();

        expect(firstCall.args).toEqual([1, 1]);
        expect(firstCall.returnValue).toBe(10);
    });
});