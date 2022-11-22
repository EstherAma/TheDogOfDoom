/* const
  screen = {
    small: 0,
    medium: 400,
    large: 800,
  }; */

  let wideScreen = screen.width;

  if (wideScreen > 1024){
    let seconds = 2000;
    let positionX = 3 + 'px';
    let positionY = -5 + 'px';
  };

  if (wideScreen < 480){
    let seconds = 600;
    let positionX = 1 + 'px';
    let positionY = -2 + 'px';
  };

let start = Date.now(); // recordar la hora de inicio

let timer = setInterval(function() {
    let timePassed = Date.now() - start;  // ¿Cuánto tiempo pasó desde el principio?

    if (timePassed >= 2000) {
    clearInterval(timer); // terminar la animación después de 2 segundos
    return;
    }

    moveCoder(timePassed); // dibujar la animación en el momento timePassed

}, 40);

function moveCoder(timePassed) { // mientras timePassed va de 0 a 2000
    coder.style.left = timePassed / 3 + 'px'; // left obtiene valores de 0px a 400px
    coder.style.bottom = timePassed / -5 + 'px';
}