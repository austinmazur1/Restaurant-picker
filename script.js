"use strict";



const displayMessage = function(message) {
  document.querySelector(".result").style.display = 'block'
  document.querySelector(".result").textContent = message;
}

// Use eventListener to get surprise me to generate a number

const restaurantArr = []

// Practice with object classes
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

const displayRest = function (Restaurant) {
  document.querySelector(
    ".rest"
  ).textContent = `Name: ${Restaurant.name} Type: ${res}`;
};

// On click function that when clicked displays the name and type of restaurant
document.querySelector(".btn-surprise").addEventListener("click", function() {
  let secretNumber = Math.trunc(Math.random() * 10) + 1;
  // console.log(secretNumber);
  document.querySelector(".btn-surprise").style.display = "none";
  if (secretNumber === laRosa.number) {
    displayMessage(`Restaurant: ${laRosa.name}, Type: ${laRosa.type}`)
  } else if (secretNumber === nap.number) {
    displayMessage(`Restaurant: ${nap.name}, Type: ${nap.type}`)
  } else if (secretNumber === bucco.number) {
    displayMessage(`Restaurant: ${bucco.name}, Type: ${bucco.type}`)
  } else if (secretNumber === klug.number) {
    displayMessage(`Restaurant: ${klug.name}, Type: ${klug.type}`)
  } else if (secretNumber === sushi.number) {
    displayMessage(`Restaurant: ${sushi.name}, Type: ${sushi.type}`)
  } else if (secretNumber === glovo.number) {
    displayMessage(`Restaurant: ${glovo.name}, Type: ${glovo.type}`)
  } else if (secretNumber === mozzatura.number) {
    displayMessage(`Restaurant: ${mozzatura.name}, Type: ${mozzatura.type}`)
  } else if (secretNumber === eighties.number) {
    displayMessage(`Restaurant: ${eighties.name}, Type: ${eighties.type}`)
  } else if (secretNumber === anatolia.number) {
    displayMessage(`Restaurant: ${anatolia.name}, Type: ${anatolia.type}`)
  } else if (secretNumber === hemdu.number) {
    displayMessage(`Restaurant: ${hemdu.name}, Type: ${hemdu.type}`)
  } else displayMessage('Better choose yourself!')
})

document.querySelector(".btn-again").addEventListener("click", function(){
  let secretNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector(".result").style.display = "none"
  document.querySelector(".btn-surprise").style.display = "block"
})

/* "TODO" 
1. finish implementing the js logic, need to genertate random number on button click
2. stylize the page with css
3. refactor and get my code more dry
*/
