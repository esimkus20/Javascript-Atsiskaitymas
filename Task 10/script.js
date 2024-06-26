/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */

import composition from "./modules/math/composition.js";
import division from "./modules/math/division.js";
import multiplication from "./modules/math/multiplication.js";
import substraction from "./modules/math/subtraction.js";
import { five, four, one, three, two } from "./modules/numbers/numbers.js";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a); // 5
console.log(b); // 2
console.log(c); // 1
console.log(d); // 10
