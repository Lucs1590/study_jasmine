describe('To Be Null Comparator', () => {
    it('should validate toBeNull use', () => {
        const n1 = null;
        const n2 = undefined;
        let n3;
        const n4 = NaN;
        const n5 = 'Lucas';

        expect(n1).toBeNull();

        expect(n2).not.toBeNull();
        expect(n3).not.toBeNull();
        expect(n4).not.toBeNull();
        expect(n5).not.toBeNull();

    });
});