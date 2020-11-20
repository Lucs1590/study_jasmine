describe('To Throw Error Test', () => {
    it('should validate the toThrowError use', () => {
        const _sum = function (a, b) {
            if (a <= 0 || b <= 0) { throw new TypeError('Must be greater than zero') }
            return a + b;
        };

        expect(function () { _sum(0, 0) }).toThrowError();
        expect(function () { _sum(0, 0) }).toThrowError('Must be greater than zero');
        expect(function () { _sum(0, 0) }).toThrowError(/greater than/);
        expect(function () { _sum(0, 0) }).toThrowError(TypeError);
        expect(function () { _sum(0, 0) }).toThrowError(TypeError, 'Must be greater than zero');
        expect(function () { _sum(1, 1) }).not.toThrowError();
    });
});