describe('Before Each Test', () => {

    var count = 0;

    beforeEach(() => {
        count += 1;
    });

    it('should increment count to 1', () => {
        expect(count).toEqual(1);
    });

    it('should increment count to 2', () => {
        expect(count).toEqual(2);
    });
});