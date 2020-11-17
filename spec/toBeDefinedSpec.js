describe('To Be Defined Comparator', () => {
    it('should validate the ToBeDefined use', () => {
        const n1 = 2;
        let n2;
        let n3 = undefined;

        expect(n1).toBeDefined();
        expect(null).toBeDefined();
        expect(NaN).toBeDefined();

        expect(n2).not.toBeDefined();
        expect(n3).not.toBeDefined();

    });
});