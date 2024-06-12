describe('Testing the object jasmine.arrayContaining', () => {
    let numbers;

    beforeAll(() => {
        numbers = [1, 2, 3, 4, 5];
    });

    it('should show the use of "jasmine.arrayContaining"', () => {
        expect(numbers).toEqual(jasmine.arrayContaining([1, 2]));
        expect(numbers).toEqual(jasmine.arrayContaining([2, 3]));
        expect(numbers).toEqual(jasmine.arrayContaining([3, 4]));
        expect(numbers).toEqual(jasmine.arrayContaining([4, 5]));
        expect(numbers).toEqual(jasmine.arrayContaining([5, 1]));
        expect(numbers).not.toEqual(jasmine.arrayContaining([6, 7]));
    });
});