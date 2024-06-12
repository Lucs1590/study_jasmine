describe('Testing the object jasmine.stringMatching', function () {
    let showText;

    beforeAll(function () {
        showText = jasmine.createSpy('showText');
    });

    it('should show the use of "jasmine.stringMatching"', () => {
        showText('Hello World');

        expect(showText).toHaveBeenCalledWith(jasmine.stringMatching('World'));
        expect(showText).toHaveBeenCalledWith(jasmine.stringMatching(/World/i));

        expect("Hello World").toEqual(jasmine.stringMatching('World'));
    });
});
