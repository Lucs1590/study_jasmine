describe('toHaveBeenCalledTimes test', () => {
    let calculator = {
        sum: function (n1, n2) {
            return n1 + n2;
        }
    }

    beforeAll(() => {
        spyOn(calculator, 'sum');
    });

    it('should call "sum" method 2 times', () => {
        calculator.sum(1, 1);
        calculator.sum(3, 1);
        expect(calculator.sum).toHaveBeenCalledTimes(2);
    });
});