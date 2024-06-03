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

    it('should show the use of "calls.all()"', () => {
        calculator.sum(1, 1);
        calculator.sum(2, 2);

        let allCalls = calculator.sum.calls.all();

        expect(allCalls.length).toBe(2);
        expect(allCalls[0].args).toEqual([1, 1]);
        expect(allCalls[0].returnValue).toBe(10);
        expect(allCalls[1].args).toEqual([2, 2]);
        expect(allCalls[1].returnValue).toBe(10);
    });
});