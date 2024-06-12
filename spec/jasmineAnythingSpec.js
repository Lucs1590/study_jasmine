describe('Testing the object jasmine.anything', () => {
    let double;

    beforeAll(() => {
        double = jasmine.createSpy('double');
    });

    it('should show the use of "jasmine.anything"', () => {
        double(10);
        expect(double).toHaveBeenCalledWith(jasmine.anything());

        expect({}).toEqual(jasmine.anything());
    });
});