describe('To Equal Comparator', () => {
    it('should  validate the To Equal use', () => {
        const obj1 = { value: true};
        const obj2 = { value: true};

        expect(true).toEqual(true);
        expect('Lucas').toEqual('Lucas');
        expect(obj1).toEqual(obj2);
    });
});