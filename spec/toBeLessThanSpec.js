describe('To Be Less Than Comparator', () => {
    it('should validate the ToBeLessThan use', () => {
        const PI = 3.1415;

        expect(3).toBeLessThan(PI);
        expect('2').toBeLessThan(PI);

        expect(3.5).not.toBeLessThan(PI);
    });
});