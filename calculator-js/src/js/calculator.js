var Calculator = {
    SUM: '+',
    SUBTRACT: '-',
    DIVIDE: '/',
    MULTIPLY: '*',

    isValidNumber: function (num) {
        return !isNaN(parseFloat(num));
    },
    sum: function (a, b) {
        return Calculator.calculate(a, b, Calculator.SUM);
    },
    subtract: function (a, b) {
        return Calculator.calculate(a, b, Calculator.SUBTRACT);
    },
    divide: function (a, b) {
        if (b == 0 || b == '0') {
            return 'Error';
        }
        return Calculator.calculate(a, b, Calculator.DIVIDE);
    },
    multiply: function (a, b) {
        return Calculator.calculate(a, b, Calculator.MULTIPLY);
    },
    calculate: function (a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);

        if (!this.isValidNumber(a) || !this.isValidNumber(b)) {
            return 0;
        }

        switch (operator) {
            case this.SUM:
                return a + b;
            case this.SUBTRACT:
                return a - b;
            case this.DIVIDE:
                return a / b;
            case this.MULTIPLY:
                return a * b;
            default:
                return 0;
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator;
}