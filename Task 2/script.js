/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

// DOM
const clickMe = document.querySelector("#btn__element");
const state = document.querySelector("#btn__state");
// Counts clicks
let clickCounter = 0;

// When button is clicked add +1 to clickCounter and update DOM
clickMe.addEventListener("click", () => {
    clickCounter++;
    state.textContent = clickCounter;
});
