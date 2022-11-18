let start = Date.now(); // recordar la hora de inicio

let timer = setInterval(function() {
  // ¿Cuánto tiempo pasó desde el principio?
    let timePassed = Date.now() - start;

    if (timePassed >= 5200) {
    clearInterval(timer); // terminar la animación después de 5,2 segundos
    return;
    }

  // dibujar la animación en el momento timePassed
    moveCoder(timePassed);

}, 20);

// mientras timePassed va de 0 a 5200
// left obtiene valores de 0px a 1040px
function moveCoder(timePassed) {
    coder.style.left = timePassed / 5 + 'px';
    coder.style.bottom = timePassed / -5 + 'px';
}