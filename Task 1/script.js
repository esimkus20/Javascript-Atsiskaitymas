/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// DOM
const converterOutput = document.querySelector("#output");
const converterInput = document.querySelector("#search");
const converterForm = document.querySelector("form");

// Prints coverted kilograms on the screen
converterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const kg = converterInput.value;
    const kgConverted = convertKilograms(kg);
    converterOutput.innerHTML = kgConverted;
});

// Convert kilograms to lb, g, oz
const convertKilograms = (kg) => {
    // kg to lb
    const pounds = (kg * 2.2046).toFixed(2);
    // kg to g
    const grams = (kg * 1000).toFixed(2);
    // kg to oz
    const ounces = (kg * 35.274).toFixed(2);

    const result = `${pounds} lb<br>
                    ${grams} g <br>
                    ${ounces} oz`;
    return result;
};
