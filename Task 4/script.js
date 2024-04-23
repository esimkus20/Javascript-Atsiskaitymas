/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json
failą ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus nurodomas
gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

// DOM
const output = document.querySelector("#output");

// Fetch data from cars.json
const getData = async () => {
    const response = await fetch("./cars.json");
    const data = await response.json();
    return data;
};

// Display car cards in the output element
const displayCarCards = async () => {
    const carList = await getData();
    carList.forEach((car) => {
        const carCard = createCarCardElement(car);
        output.append(carCard);
    });
};

// Create a car card element
const createCarCardElement = (carData) => {
    const card = document.createElement("div");
    const car = document.createElement("h1");
    const listOfCars = document.createElement("ul");

    car.textContent = carData.brand;

    carData.models.forEach((item) => {
        const listOfCarsElement = document.createElement("li");
        listOfCarsElement.textContent = item;
        listOfCars.append(listOfCarsElement);
    });

    card.append(car, listOfCars);
    return card;
};

// Call the displayCarCards function when the window is loaded
window.onload = displayCarCards;
