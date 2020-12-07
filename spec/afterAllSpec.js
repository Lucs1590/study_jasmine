describe('After All Test', function () {
    var count = 0;

    beforeAll(function () {
        count = 10;
    });

    afterAll(function () {
        count = 0;
    });

    it('should ensure that count is equal to 10', function () {
        expect(count).toEqual(10);
    });

    it('should ensure that count is yet equal to 10', function () {
        expect(count).toEqual(10);
    });

});