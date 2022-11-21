let coders = [
  "Paula",
  "Adriana",
  "Veronika",
  "Lola G",
  "Natalia",
  "Elena",
  "Noa",
  "Ana",
  "Vero",
  "Carmen",
  "Paloma P",
  "Raquel",
  "Esther",
  "Lola N",
  "Alba",
  "Sierri",
  "Bea",
  "Alesia",
  "Carmen G",
  "Camila",
  "Leidy",
  "Himo",
  "Paloma B",
  "Flor",
  "Sandra",
];

//Creamos array vacío para pasar las coders desde el primer array
let kennel = [];

let button = document.getElementById("btn");
button.addEventListener("click", freeCoders);

showBallList();

function freeCoders() {
  let randomIndex = Math.round(Math.random() * (coders.length - 1));

  const freed = coders.splice(randomIndex, 1);
  addToKennel(freed);
  showBallList();
  showKennelList();
}

function showBallList() {
  let screen = "";
  for (let index = 0; index < coders.length; index++) {
    screen += `<li>${coders[index]}</li>`;
  }

  document.getElementById("ballList").innerHTML = screen;
}

function addToKennel(freed) {
  kennel.unshift(freed);
}

function showKennelList() {
  let screen = "";
  for (let index = 0; index < kennel.length; index++) {
    screen += `<li>${kennel[index]}</li>`;
  }

  document.getElementById("kennelList").innerHTML = screen;
}
