describe('To Match Comparation', () => {
    it('should validate the toMatch use', () => {
        const numbers = '123456qwerty';
        const nome = 'Lucas Brito';
        const postalCode = '17670-000';

        expect(numbers).toMatch(/[0-9]/);
        expect(nome).toMatch(/lucas/i);
        expect(postalCode).toMatch(/^\d{5}-\d{3}$/);
    });
});