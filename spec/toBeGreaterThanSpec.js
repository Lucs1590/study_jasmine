describe('To Be Greater Than Comparator', () => {
    it('should validate the ToBeGreaterThan use', () => {
        const PI = 3.1415;

        expect(5).toBeGreaterThan(PI);
        expect('7').toBeGreaterThan(PI);

        expect(3).not.toBeGreaterThan(PI);

    });
});