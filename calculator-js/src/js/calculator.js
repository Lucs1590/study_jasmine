class Calculator {
    static SUM = '+';
    static SUBTRACT = '-';
    static DIVIDE = '/';
    static MULTIPLY = '*';

    static isValidNumber(num) {
        return !isNaN(parseFloat(num));
    }

    static sum(a, b) {
        return Calculator.calculate(a, b, Calculator.SUM);
    }

    static subtract(a, b) {
        return Calculator.calculate(a, b, Calculator.SUBTRACT);
    }

    static divide(a, b) {
        if (b === 0 || b === '0') {
            return 'Error';
        }
        return Calculator.calculate(a, b, Calculator.DIVIDE);
    }

    static multiply(a, b) {
        return Calculator.calculate(a, b, Calculator.MULTIPLY);
    }

    static calculate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);

        if (!Calculator.isValidNumber(a) || !Calculator.isValidNumber(b)) {
            return 0;
        }

        switch (operator) {
            case Calculator.SUM:
                return a + b;
            case Calculator.SUBTRACT:
                return a - b;
            case Calculator.DIVIDE:
                return a / b;
            case Calculator.MULTIPLY:
                return a * b;
            default:
                return 0;
        }
    }
}

module.exports = Calculator;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator;
}