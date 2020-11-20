describe('To Throw Test', () => {
    it('should validate the toThrow use', () => {
        const n1 = () => { number * 10 };
        function _sum(a, b) { return a + b };

        expect(n1).toThrow();
        expect(_sum).not.toThrow();
    });
});