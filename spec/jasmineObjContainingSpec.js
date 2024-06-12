describe('Testing the object jasmine.objectContaining', () => {
    let person;

    beforeAll(() => {
        person = {
            name: 'John',
            age: 25
        };
    });

    it('should show the use of "jasmine.objectContaining"', () => {
        expect(person).toEqual(jasmine.objectContaining({ name: 'John' }));
        expect(person).not.toEqual(jasmine.objectContaining({ name: 'Jane' }));
        expect(person).toEqual(jasmine.objectContaining({ age: 25 }));
        expect(person).toEqual(jasmine.objectContaining({ name: 'John', age: 25 }));
    });
});