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

    it('should show the use of "calls.mostRecent()"', () => {
        calculator.sum(1, 1);
        calculator.sum(2, 3);

        let mostRecentSumCalls = calculator.sum.calls.mostRecent();

        expect(mostRecentSumCalls.args).toEqual([2, 3]);
        expect(mostRecentSumCalls.returnValue).toBe(10);
    });
});