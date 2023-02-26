"use strict";

// Global variables
const result = document.querySelector(".result");
const btnSurprise = document.querySelector(".btn-surprise");
const chooseAgain = document.querySelector(".btn-again");

const array = [
  {name: 'La Rosa', type: 'Tapas', id: 1},
  {name: 'NAP', type: 'Italian', id: 2},
  {name: 'Bucco', type: 'Tapas', id: 3},
  {name: 'Klug', type: 'Tapas', id: 4},
  {name: 'Kiyomi', type: 'Tapas', id: 5},
  {name: 'Glovo', type: 'Tapas', id: 6},
  {name: 'Mozzatura', type: 'Tapas', id: 7},
  {name: "80's", type: 'Tapas', id: 8},
  {name: 'Anatolia', type: 'Tapas', id: 9},
  {name: 'Hemdu', type: 'Tapas', id: 10},
]

console.log(array[0].name);

const restNumber = function (array) { 
for (let i = 0; i < array.length; i++) {
   return array[i]; 
  
} 
}

console.log(restNumber(array))
// console.log(newNumber);

// Practice with object classes
// Probably wanna change this to an array
class Restaurant {
  constructor(name, type, number) {
    this.name = name;
    this.type = type;
    this.number = number;
  }
}

// List of restaurants
const laRosa = new Restaurant("La Rosa", "Tapas", 1);
const nap = new Restaurant("NAP", "Italian", 2);
const bucco = new Restaurant("Bucco", "Burgers", 3);
const klug = new Restaurant("Klug", "Burgers", 4);
const sushi = new Restaurant("Kiyomi", "Sushi", 5);
const glovo = new Restaurant("Glovo", "Wild Card", 6);
const mozzatura = new Restaurant("Mozzatura", "Italian", 7);
const eighties = new Restaurant("80's", "Bar Food", 8);
const anatolia = new Restaurant("Anatolia", "Kebab", 9);
const hemdu = new Restaurant("Hemdu", "Chinese", 10);


//Functions to reuse
const displayMessage = function (message) {
  result.style.display = "block";
  result.textContent = message;
};

// On click function that when clicked displays the name and type of restaurant
btnSurprise.addEventListener("click", function () {
  let secretNumber = Math.trunc(Math.random() * 10) + 1;
console.log("click");
  // btnSurprise.style.display = "none";

  if(secretNumber === restNumber(array))
  console.log("yo");
})

//   if (secretNumber === laRosa.number) {
//     displayMessage(`Restaurant: ${laRosa.name}, Type: ${laRosa.type}`);
//   } else if (secretNumber === nap.number) {
//     displayMessage(`Restaurant: ${nap.name}, Type: ${nap.type}`);
//   } else if (secretNumber === bucco.number) {
//     displayMessage(`Restaurant: ${bucco.name}, Type: ${bucco.type}`);
//   } else if (secretNumber === klug.number) {
//     displayMessage(`Restaurant: ${klug.name}, Type: ${klug.type}`);
//   } else if (secretNumber === sushi.number) {
//     displayMessage(`Restaurant: ${sushi.name}, Type: ${sushi.type}`);
//   } else if (secretNumber === glovo.number) {
//     displayMessage(`Restaurant: ${glovo.name}, Type: ${glovo.type}`);
//   } else if (secretNumber === mozzatura.number) {
//     displayMessage(`Restaurant: ${mozzatura.name}, Type: ${mozzatura.type}`);
//   } else if (secretNumber === eighties.number) {
//     displayMessage(`Restaurant: ${eighties.name}, Type: ${eighties.type}`);
//   } else if (secretNumber === anatolia.number) {
//     displayMessage(`Restaurant: ${anatolia.name}, Type: ${anatolia.type}`);
//   } else if (secretNumber === hemdu.number) {
//     displayMessage(`Restaurant: ${hemdu.name}, Type: ${hemdu.type}`);
//   } else displayMessage("Better choose yourself!");
// });

chooseAgain.addEventListener("click", function () {
  let secretNumber = Math.trunc(Math.random() * 10) + 1;
  result.style.display = "none";
  btnSurprise.style.display = "block";
});