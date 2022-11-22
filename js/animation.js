let start = Date.now(); // recordar la hora de inicio

let timer = setInterval(function() {
  // ¿Cuánto tiempo pasó desde el principio?
    let timePassed = Date.now() - start;

    if (timePassed >= 2000) {
    clearInterval(timer); // terminar la animación después de 2 segundos
    return;
    }

  // dibujar la animación en el momento timePassed
    moveCoder(timePassed);

}, 40);

// mientras timePassed va de 0 a 2000
// left obtiene valores de 0px a 400px
function moveCoder(timePassed) {
    coder.style.left = timePassed / 3 + 'px';
    coder.style.bottom = timePassed / -5 + 'px';
}