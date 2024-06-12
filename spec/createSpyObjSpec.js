describe('Testing the object jasmine.createSpyObj', () => {
    let calculator;

    beforeAll(() => {
        calculator = jasmine.createSpyObj('calculator', ['sum', 'subtract']);

        calculator.sum.and.returnValue(3);
    });

    it('should show the use of "jasmine.createSpyObj"', () => {
        let result = calculator.sum(1, 2);

        expect(calculator.sum).toHaveBeenCalled();
        expect(calculator.sum).toHaveBeenCalledWith(1, 2);
        expect(result).toEqual(3);
    });
});