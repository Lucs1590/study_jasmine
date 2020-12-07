describe('After Each Test', function () {

    var count = 0;

    beforeEach(function () {
        count += 1;
    });

    afterEach(function () {
        count = 0;
    });

    it('should ensure that count is equal 1', function () {
        expect(count).toEqual(1);
    });

    it('should ensure that count is yet equal 1', function () {
        expect(count).toEqual(1);
    });
});