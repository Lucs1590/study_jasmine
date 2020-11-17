describe('To Be Undefined Comparator', () => {
    it('should validate the ToBeUndefined use', () => {
        const n1 = false;
        let n2;
        let n3 = undefined;

        expect(n2).toBeUndefined();
        expect(n3).toBeUndefined();

        expect(n1).not.toBeUndefined();
        expect(null).not.toBeUndefined();

    });
});