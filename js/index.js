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
    "Paloma R",
    "Raquel",
    "Esther",
    "Lola N",
    "Alba" ,
    "Sierri",
    "Bea",
    "Alesia",
    "Carmen G",
    "Camila",
    "Leidy",
    "Himo",
    "Paloma B",
    "Flor",
    "Sandra"
];

<<<<<<< HEAD
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
=======
let kennel = [];

let button = document.getElementById("btn");
button.addEventListener("click", free); // Escucha de eventos. Un click. Que queréis que pase cuando el ratón pasa por encima.
showBallList(); // llamamos a la función para mostrar la lista por primera vez. Para que salga cuando entramos en la página

function freeCoders() {  
    
    let randomIndex = Math.round(Math.random() * (coders.length - 1)); // (coders.length - 1) si no pongo paréntesis se ejecuta primero la multiplicación
    
            /* = atribuye el valor de la derecha al mismo de la izquierda. Un solo igual sería asignar
            === el mismo valor con el mismo tipo. El doble y el triple para comparara, condicionales
            == el mismo valor pero con distinto tipo*/ //por convencción siempre poner tres. Por seguridad.
        coders.splice(randomIndex, 1); // splice: pasamos obligatoriamente dos parámetros separados por coma. Uno es el número del índice por donde queremos empezar, en nuestro es todo el index porque es aleatorio. El segundo es la cantidad de valores que queremos sacar.
        console.log(randomIndex); // ver en consola
        
            addToKennel(coders);
            showBallList();
            showKennelList();
}

function showBallList() {
    let screen = "" // inicializar una cadena vacía
    for (let index = 0; index < coders.length; index++) {
        screen += `<option>${coders[index]}</option>` // += añade a la cadena
    }

    document.getElementById("ballList").innerHTML = screen
}

function addToKennel(coders) {
    kennel.unshift(coders) // poner la primera de la lista
}

function showKennelList() {
    let newScreen = ""
    for (let index = 0; index < coders.length; index++) {
        screen += `<option>${coders[index]}</option>`
    }

    document.getElementById("kennelList").innerHTML = newScreen
>>>>>>> 149efee6acf41c6a50d865ec7f56172f49df4885
}
