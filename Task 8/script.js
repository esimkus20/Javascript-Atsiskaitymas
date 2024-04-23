/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// ES6 constructor function
class CalculatorES6 {
    constructor(a, b) {
        (this.a = a), (this.b = b);
    }

    sum() {
        return this.a + this.b;
    }

    subtraction() {
        return this.a - this.b;
    }

    multiplication() {
        return this.a * this.b;
    }

    division() {
        return this.a / this.b;
    }
}

// Example usage:
const calculatorES6 = new CalculatorES6(10, 5);
console.log(calculatorES6.sum()); // 15
console.log(calculatorES6.subtraction()); // 5
console.log(calculatorES6.multiplication()); // 50
console.log(calculatorES6.division()); // 2

// ------------------------------------------------------------------------------------

// ES5 constructor function
function CalculatorES5(a, b) {
    this.a = a;
    this.b = b;
}

CalculatorES5.prototype.sum = function () {
    return this.a + this.b;
};

CalculatorES5.prototype.subtraction = function () {
    return this.a - this.b;
};

CalculatorES5.prototype.multiplication = function () {
    return this.a * this.b;
};

CalculatorES5.prototype.division = function () {
    if (this.b !== 0) {
        return this.a / this.b;
    } else {
        return "Cannot divide by zero!";
    }
};

// Example usage:
const calculatorES5 = new CalculatorES5(10, 5);
console.log(calculatorES5.sum()); // 15
console.log(calculatorES5.subtraction()); // 5
console.log(calculatorES5.multiplication()); // 50
console.log(calculatorES5.division()); // 2
