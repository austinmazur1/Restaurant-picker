"use strict";

//Restaurants array
const array = [
  { name: "La Rosa", type: "Tapas", id: 1 },
  { name: "NAP", type: "Italian", id: 2 },
  { name: "Bucco", type: "Tapas", id: 3 },
  { name: "Klug", type: "Tapas", id: 4 },
  { name: "Kiyomi", type: "Tapas", id: 5 },
  { name: "Glovo", type: "Tapas", id: 6 },
  { name: "Mozzatura", type: "Tapas", id: 7 },
  { name: "80's", type: "Tapas", id: 8 },
  { name: "Anatolia", type: "Tapas", id: 9 },
  { name: "Hemdu", type: "Tapas", id: 10 },
];

//Global variables
const result = document.querySelector(".result");
const btnSurprise = document.querySelector(".btn-surprise");
const chooseAgain = document.querySelector(".btn-again");
const overlay = document.getElementById("hidden-2");
const closeModal = document.querySelector(".close-modal");

//Display message function
const displayMessage = function (message) {
  overlay.classList.remove('hidden');
  closeModal.classList.remove('hidden');
  chooseAgain.classList.remove('hidden');
  result.style.display = "block";
  result.textContent = message;
}

/////Logic

// On click function that when clicked displays the name and type of restaurant
btnSurprise.addEventListener("click", function () {
  let secretNumber = Math.trunc(Math.random() * 10) + 1;
  btnSurprise.style.display = "none";
  overlay.classList.add('hidden');
  array.forEach(function (arrItem, index, array) {
    if (secretNumber === index) {
      displayMessage(`Restaurant: ${arrItem.name}, Type: ${arrItem.type}`);
    } 
  });
});

//On click resets the button
chooseAgain.addEventListener("click", function () {
  let secretNumber = Math.trunc(Math.random() * 10) + 1;
  result.style.display = "none";
  btnSurprise.style.display = "block";
  overlay.classList.add('hidden');
  chooseAgain.classList.add('hidden')
});
