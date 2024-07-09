var Calculator = {
    sum: function (a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multiply: function (a, b) {
        return a * b;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator;
}