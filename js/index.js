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

let freeCoders = [];

function free() {
  let randomIndex = coders[Math.round(Math.random() * coders.length)];
  for (let i = 0; i < coders.length; i++) {
    if (coders[i] === randomIndex) {
      coders.splice(i, 1);
    }
  }
  /*  return randomIndex; */
  console.log(randomIndex);
}

let boton = document.getElementById("btn");
boton.addEventListener("click", free);

function showFreeCoders(){
  let screen = ''
  coders.forEach(item =>{
      screen += `<li>${item.name}</li>`
  })

  document.getElementById("coders").innerHTML = screen
}