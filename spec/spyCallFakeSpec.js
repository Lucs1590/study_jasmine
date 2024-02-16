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
        spyOn(calculator, 'sum').and.callFake(function (n1, n2) {
            return n1 - n2;
        });
        spyOn(calculator, 'subtract');
    });

    it('should transform the "sum" method in a subtract', () => {
        expect(calculator.sum(1, 1)).toBe(0);
    });
});