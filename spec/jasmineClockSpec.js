describe('Testing the object jasmine.clock', () => {
    let double;

    beforeEach(() => {
        double = jasmine.createSpy('timerCallback');
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it('should show the use of "jasmine.clock" with setTimeout', () => {
        setTimeout(() => {
            double(10);
        }, 1000);
        jasmine.clock().tick(1001);

        expect(double).toHaveBeenCalled();
    });

    it('should show the use of "jasmine.clock" with setInterval', () => {
        setInterval(() => {
            double(20);
        }, 1000);
        jasmine.clock().tick(1001);

        expect(double).toHaveBeenCalled();
    });
});