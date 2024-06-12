describe('Testing the object jasmine.any', () => {
    let double;

    beforeAll(() => {
        double = jasmine.createSpy('double');
    });

    it('should show the use of "jasmine.any"', () => {
        double(10);
        expect(double).toHaveBeenCalledWith(jasmine.any(Number));
    });
});