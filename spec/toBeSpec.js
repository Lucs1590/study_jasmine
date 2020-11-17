describe('To Be Comparator ', () => {
    it('should validate the To Be use', () => {
        const obj1 = { value: true };
        const obj2 = { value: true };

        expect(true).toBe(true);
        expect('Lucas').toBe('Lucas');
        expect(obj1).not.toBe(obj2);
    });
});