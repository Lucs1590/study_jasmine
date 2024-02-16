xdescribe('Before All Test', function () {
    var count = 0;

    beforeAll(function () {
        count = 10;
    });

    beforeEach(function () {
        count += 1;
    });

    it('should ensure that count is equal to 11', function () {
        expect(count).toEqual(11);
    });

    it('should ensure that count is equal to 12', function () {
        expect(count).toEqual(12);
    });

});đ