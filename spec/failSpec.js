describe('Manual Fail Test', () => {
    it('should validate manual fail use', () => {
        const operation = (run, callback) => { if (run) { callback(); } };
        operation(false, () => { fail("Don't execute callback function") })
    });
});