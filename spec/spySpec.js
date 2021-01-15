describe('Spy tests', () => {
    let calculator = {
        sum: function(n1,n2) {
            return n1 + n2;
        }
    }

    beforeAll(() => {
        spyOn(calculator, 'sum');
    });

    it('should has "sum" method like undefined', () => {
        expect(calculator.sum(1,2)).toBeUndefined();
    });

    it('should validate if "sum" method was called', () => {
        expect(calculator.sum).not.toHaveBeenCalled();
        calculator.sum(1,1);
        expect(calculator.sum).toHaveBeenCalled();
    });
});