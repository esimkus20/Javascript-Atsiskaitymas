/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// DOM
const showUsersBtn = document.querySelector("#btn");
const githubOutput = document.querySelector("#output");

// Github users URL
const ENDPOINT = "https://api.github.com/users";

// Fetch data from ENDPOINT
const getData = async () => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return data;
};

// Function to display users
const displayUsers = async () => {
    const githubUsers = await getData();
    githubOutput.textContent = "";
    githubUsers.forEach((user) => {
        const userElement = createUserElement(user);
        githubOutput.append(userElement);
    });
};

// Function to create user element
const createUserElement = (user) => {
    const userElement = document.createElement("div");
    userElement.style.textAlign = "center";

    const imgElement = document.createElement("img");
    imgElement.src = user.avatar_url;
    imgElement.style.width = "250px";
    userElement.append(imgElement);

    const loginElement = document.createElement("div");
    loginElement.textContent = user.login;
    loginElement.style.fontWeight = "bold";
    userElement.append(loginElement);

    return userElement;
};

// Event listener for button click
showUsersBtn.addEventListener("click", displayUsers);
