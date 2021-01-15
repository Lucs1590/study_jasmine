describe('Spy tests', () => {
    let calculadora = {
        sum: function(n1,n2) {
            return n1 + n2;
        }
    }

    beforeAll(() => {
        spyOn(calculadora, 'sum');
    });

    it('should has "sum" method like undefined', () => {
        expect(calculadora.sum(1,2)).toBeUndefined();
    });
});