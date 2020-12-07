describe('After Each Test', () => {

    var count = 0;

    beforeEach(() => {
        count += 1;
    });

    afterEach(() => {
        count = 0;
    });

    it('should ensure that count is equal 1', () => {
        expect(count).toEqual(1);
    });

    it('should ensure that count is yet equal 1', () => {
        expect(count).toEqual(1);
    });
});