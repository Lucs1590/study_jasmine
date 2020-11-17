describe('To Be Falsy Comparator', () => {
    it('should validate toBeFalsy use', () => {
        let n1 = 10;
        let n2 = undefined;
        let n3 = 0;
        let n4 = '';
        let n5 = null;
        let n6 = NaN;
        let n7;
        let n8 = 'Lucas';
        let n9 = true;

        expect(n2).toBeFalsy();
        expect(n3).toBeFalsy();
        expect(n4).toBeFalsy();
        expect(n5).toBeFalsy();
        expect(n6).toBeFalsy();
        expect(n7).toBeFalsy();

        expect(n1).not.toBeFalsy();
        expect(n8).not.toBeFalsy();
        expect(n9).not.toBeFalsy();

    });
});