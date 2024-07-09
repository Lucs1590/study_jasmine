var Calculator = {
    sum: function (a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 0;
        }
        a = parseFloat(a);
        b = parseFloat(b);
        return a + b;
    },
    subtract: function (a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 0;
        }
        return a - b;
    },
    divide: function (a, b) {
        if (b == 0 || b == '0') {
            return 'Error';
        }
        if (isNaN(a) || isNaN(b)) {
            return 0;
        }
        a = parseFloat(a);
        b = parseFloat(b);
        return a / b;
    },
    multiply: function (a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 0;
        }
        return a * b;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator;
}