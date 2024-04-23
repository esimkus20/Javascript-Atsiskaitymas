/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
    { id: "1", name: "John Smith", age: 20 },
    { id: "2", name: "Ann Smith", age: 24 },
    { id: "3", name: "Tom Jones", age: 31 },
    { id: "4", name: "Rose Peterson", age: 17 },
    { id: "5", name: "Alex John", age: 25 },
    { id: "6", name: "Ronald Jones", age: 63 },
    { id: "7", name: "Elton Smith", age: 16 },
    { id: "8", name: "Simon Peterson", age: 30 },
    { id: "9", name: "Daniel Cane", age: 51 },
];

const getUserAverageAge = (arr) => {
    const totalAge = arr.reduce((acc, user) => acc + user.age, 0);
    const averageAge = Math.floor(totalAge / arr.length);
    return averageAge;
};

const getUsersNames = (arr) => arr.map((user) => user.name);

console.log("Vidutinis vartotojų amžius:", getUserAverageAge(users));
console.log("Vartotojų vardai:", getUsersNames(users));
