describe('Testing the object jasmine.createSpy', () => {
    let sum;

    beforeAll(() => {
        sum = jasmine.createSpy('sum');
    });

    it('should show the use of "jasmine.createSpy"', () => {
        sum(1, 2);
        expect(sum).toHaveBeenCalled();
        expect(sum).toHaveBeenCalledWith(1, 2);
    });
});