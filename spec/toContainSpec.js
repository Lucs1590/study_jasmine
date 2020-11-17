describe('To Contain Comparator', () => {
    it('should validate toContain use', () => {
        const text = 'My name is Lucas';
        const numbers = [1, 2, 3, 4, 5, 6, 7];

        expect(text).toContain('Lucas');
        expect(text).not.toContain('lucas');

        expect(numbers).toContain(7);
        expect(numbers).not.toContain(1.5);
    });
});