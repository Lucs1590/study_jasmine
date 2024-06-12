var myMatcher = {
    toBeValidEmail: function (util, customEqualityTesters) {
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return {
            compare: function (actual, expected) {
                let result = {};
                if (expected === undefined) {
                    result.pass = emailPattern.test(actual);
                } else {
                    result.pass = expected.test(expected);
                }
                result.message = result.pass ? 'Email is valid' : 'Email is invalid';

                return result;
            }
        };
    }
};

describe('Testing the object jasmine.addMatchers', () => {
    let email;

    beforeEach(() => {
        jasmine.addMatchers(myMatcher);
        email = 'lucas@example.com';
    });

    it('should show the use of "jasmine.addMatchers"', () => {
        expect(email).toBeValidEmail();
        expect('lucas').not.toBeValidEmail();
    });
});


