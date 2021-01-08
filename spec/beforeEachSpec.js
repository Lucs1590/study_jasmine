xdescribe('Before Each Test', function () {

    var count = 0;

    beforeEach(function () {
        count += 1;
    });

    it('should increment count to 1', function () {
        expect(count).toEqual(1);
    });

    it('should increment count to 2', function () {
        expect(count).toEqual(2);
    });
});