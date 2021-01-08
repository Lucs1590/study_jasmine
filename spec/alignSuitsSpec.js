xdescribe('External Suite Test', () => {
    let externalCount = 0;

    beforeEach(() => {
        externalCount++;
    });

    it('should contain 1 to externalCount', () => {
        expect(externalCount).toEqual(1);
    });

    describe('Internal Suite Test', () => {
        let internalCount = 0;

        beforeEach(() => {
            internalCount++;
        });

        it('should validate counts values', () => {
            expect(internalCount).toEqual(1);
            expect(externalCount).toEqual(2);
        });
    });
});